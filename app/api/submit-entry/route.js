import { Resend } from 'resend';
import { verifyRecaptchaToken } from '../utils/verifyRecaptcha';
import {
  escapeHtmlForEmail,
  formatResendError,
  isFormSubmissionDebug,
  jsonError
} from '../utils/formSubmissionErrors';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { interpretation, name, keyword, recaptchaToken, website } = body;

    if (website) {
      return jsonError(
        { error: 'Invalid submission', code: 'INVALID_SUBMISSION' },
        400
      );
    }

    if (!interpretation) {
      return jsonError(
        { error: 'Interpretation is required', code: 'VALIDATION_REQUIRED' },
        400
      );
    }

    const recaptcha = await verifyRecaptchaToken(recaptchaToken, 'glossary_submit');
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
      console.error('[submit-entry] RESEND_API_KEY is not configured');
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

    const emailData = {
      interpretation,
      name: name || 'Anonymous',
      keyword,
      timestamp: new Date().toISOString()
    };

    const safeKeyword = escapeHtmlForEmail(String(keyword ?? ''));
    const safeName = escapeHtmlForEmail(String(emailData.name));
    const safeInterpretation = escapeHtmlForEmail(String(interpretation)).replace(/\n/g, '<br>');

    const toEmails = process.env.RESEND_INTERPRETATION_EMAIL || process.env.RESEND_TO_EMAIL
      ? (process.env.RESEND_INTERPRETATION_EMAIL || process.env.RESEND_TO_EMAIL).split(',').map(email => email.trim())
      : ['digitalresearch@sharjaharchitecture.org'];

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: toEmails,
      reply_to: process.env.RESEND_REPLY_TO_EMAIL || toEmails[0],
      subject: `New Interpretation Submission: ${keyword}`,
      html: `
        <h2>New Interpretation Submission</h2>
        <p><strong>Keyword:</strong> ${safeKeyword}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Interpretation:</strong></p>
        <p>${safeInterpretation}</p>
        <p><strong>Submitted:</strong> ${emailData.timestamp}</p>
      `
    });

    if (result.error) {
      const details = formatResendError(result.error);
      console.error('[submit-entry] Resend error:', result.error);
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
      console.error('[submit-entry] Resend returned no id:', result);
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
        message: 'Entry submitted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[submit-entry] Error processing submission:', error);
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
