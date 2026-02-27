import { Resend } from 'resend';
import { verifyRecaptchaToken } from '../utils/verifyRecaptcha';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const screenshot = formData.get('screenshot');
    const recaptchaToken = formData.get('recaptchaToken');
    const website = formData.get('website');

    if (website) {
      return Response.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    if (!screenshot) {
      return Response.json(
        { error: 'Screenshot is required' },
        { status: 400 }
      );
    }

    const recaptcha = await verifyRecaptchaToken(recaptchaToken, 'screenshot_submit');
    if (!recaptcha.valid) {
      return Response.json(
        { error: 'Verification failed. Please try again.' },
        { status: 403 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return Response.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmail = process.env.RESEND_FLOOR_PLAN_EMAIL || process.env.RESEND_TO_EMAIL || 'digitalresearch@sharjaharchitecture.org';

    const screenshotBuffer = await screenshot.arrayBuffer();
    const screenshotBase64 = Buffer.from(screenshotBuffer).toString('base64');

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: toEmail,
      reply_to: process.env.RESEND_REPLY_TO_EMAIL || toEmail,
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
          content: screenshotBuffer
        }
      ]
    });
    
    return Response.json(
      { 
        success: true, 
        messageId: result.id,
        message: 'Floor plan submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing floor plan submission:', error);
    return Response.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
