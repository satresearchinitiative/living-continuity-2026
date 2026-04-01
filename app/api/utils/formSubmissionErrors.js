export function isFormSubmissionDebug() {
  return process.env.FORM_SUBMISSION_DEBUG === 'true';
}

export function formatResendError(error) {
  if (error == null) return 'Unknown Resend error';
  if (typeof error === 'string') return error;
  if (Array.isArray(error))
    return error.map((e) => formatResendError(e)).filter(Boolean).join('; ') || 'Unknown Resend error';
  if (typeof error === 'object' && 'message' in error && error.message != null)
    return String(error.message);
  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown Resend error';
  }
}

export function escapeHtmlForEmail(text) {
  if (text == null || typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function jsonError(payload, status) {
  if (!isFormSubmissionDebug() && Object.prototype.hasOwnProperty.call(payload, 'debug')) {
    const { debug, ...rest } = payload;
    return Response.json(rest, { status });
  }
  return Response.json(payload, { status });
}
