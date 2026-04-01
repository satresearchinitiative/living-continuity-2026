export function isFormSubmissionClientDebug() {
  return process.env.NEXT_PUBLIC_FORM_SUBMISSION_DEBUG === 'true';
}

export function logFormSubmissionFailure(endpoint, status, body) {
  console.error(`[Form:${endpoint}]`, {
    status,
    code: body?.code,
    error: body?.error,
    details: body?.details,
    debug: body?.debug
  });
}

export function userFacingFormError(body, defaultMsg) {
  if (!body || typeof body !== 'object') return defaultMsg;
  const parts = [body.error || defaultMsg];
  if (body.details) parts.push(String(body.details));
  if (isFormSubmissionClientDebug() && body.debug != null) {
    try {
      parts.push(typeof body.debug === 'string' ? body.debug : JSON.stringify(body.debug));
    } catch {
      parts.push(String(body.debug));
    }
  }
  return parts.filter(Boolean).join(' — ');
}

async function safeParseJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function parseFormErrorResponse(response, endpointLabel) {
  const body = await safeParseJson(response);
  logFormSubmissionFailure(endpointLabel, response.status, body);
  return body;
}
