import { Resend } from 'resend';
import { verifyRecaptchaToken } from '../utils/verifyRecaptcha';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { interpretation, name, keyword, recaptchaToken, website } = body;

    if (website) {
      return Response.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    if (!interpretation) {
      return Response.json(
        { error: 'Interpretation is required' },
        { status: 400 }
      );
    }

    const recaptcha = await verifyRecaptchaToken(recaptchaToken, 'glossary_submit');
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

    const emailData = {
      interpretation,
      name: name || 'Anonymous',
      keyword,
      timestamp: new Date().toISOString()
    };

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
        <p><strong>Keyword:</strong> ${keyword}</p>
        <p><strong>Name:</strong> ${emailData.name}</p>
        <p><strong>Interpretation:</strong></p>
        <p>${interpretation.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${emailData.timestamp}</p>
      `
    });
    
    return Response.json(
      { 
        success: true, 
        messageId: result.id,
        message: 'Entry submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing submission:', error);
    return Response.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
