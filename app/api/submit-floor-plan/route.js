import { Resend } from 'resend';
import { verifyRecaptchaToken } from '../utils/verifyRecaptcha';
import {
  formatResendError,
  isFormSubmissionDebug,
  jsonError
} from '../utils/formSubmissionErrors';
import { resolveFloorPlanRecipient, resolveResendFrom } from '../utils/resendRecipients';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const screenshot = formData.get('screenshot');
    const recaptchaToken = formData.get('recaptchaToken');
    const website = formData.get('website');

    if (website) {
      return jsonError(
        { error: 'Invalid submission', code: 'INVALID_SUBMISSION' },
        400
      );
    }

    if (!screenshot) {
      return jsonError(
        { error: 'Screenshot is required', code: 'VALIDATION_REQUIRED' },
        400
      );
    }

    const recaptcha = await verifyRecaptchaToken(recaptchaToken, 'screenshot_submit');
    if (!recaptcha.valid) {
      return jsonError(
        {
          error: 'Verification failed. Please try again.',
          code: 'RECAPTCHA_FAILED',
          details: recaptcha.error,
          ...(isFormSubmissionDebug() && {
            debug: { step: 'recaptcha', recaptchaError: recaptcha.error }
          })
        },
        403
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[submit-floor-plan] RESEND_API_KEY is not configured');
      return jsonError(
        {
          error: 'Email service is not configured',
          code: 'RESEND_NOT_CONFIGURED',
          ...(isFormSubmissionDebug() && {
            debug: { step: 'env', resendApiKeySet: false }
          })
        },
        500
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmail = resolveFloorPlanRecipient();

    const screenshotBuffer = await screenshot.arrayBuffer();
    if (!screenshotBuffer || screenshotBuffer.byteLength === 0) {
      return jsonError(
        { error: 'Screenshot file is empty', code: 'EMPTY_SCREENSHOT' },
        400
      );
    }

    const screenshotBase64 = Buffer.from(screenshotBuffer).toString('base64');

    const result = await resend.emails.send({
      from: resolveResendFrom(),
      to: toEmail,
      replyTo: toEmail,
      subject: 'New Floor Plan Arrangement Submission',
      html: `
        <h2>New Floor Plan Arrangement Submission</h2>
        <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
        <p><strong>Floor Plan:</strong></p>
        <img src="data:image/png;base64,${screenshotBase64}" alt="Floor Plan Arrangement" style="max-width: 100%; height: auto;" />
      `,
      attachments: [
        {
          filename: `floor-plan-${Date.now()}.png`,
          content: screenshotBase64
        }
      ]
    });

    if (result.error) {
      const details = formatResendError(result.error);
      console.error('[submit-floor-plan] Resend error:', result.error);
      return jsonError(
        {
          error: 'Failed to send email',
          code: 'RESEND_SEND_FAILED',
          details,
          ...(isFormSubmissionDebug() && {
            debug: { step: 'resend', resendError: result.error }
          })
        },
        502
      );
    }

    if (!result.data?.id) {
      console.error('[submit-floor-plan] Resend returned no id:', result);
      return jsonError(
        {
          error: 'Failed to send email',
          code: 'RESEND_INCOMPLETE_RESPONSE',
          ...(isFormSubmissionDebug() && { debug: { step: 'resend', result } })
        },
        502
      );
    }

    return Response.json(
      {
        success: true,
        messageId: result.data.id,
        message: 'Floor plan submitted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[submit-floor-plan] Error processing floor plan submission:', error);
    return jsonError(
      {
        error: 'Internal server error',
        code: 'INTERNAL',
        details: error instanceof Error ? error.message : 'Unknown error',
        ...(isFormSubmissionDebug() && {
          debug: { step: 'exception', name: error instanceof Error ? error.name : undefined }
        })
      },
      500
    );
  }
}
