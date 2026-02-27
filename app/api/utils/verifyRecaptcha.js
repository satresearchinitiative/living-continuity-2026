export async function verifyRecaptchaToken(token, expectedAction) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return { valid: true };
  if (!token) return { valid: false, error: 'Missing reCAPTCHA token' };

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });
  const data = await res.json();

  if (!data.success) {
    return { valid: false, error: data['error-codes']?.join(', ') || 'Verification failed' };
  }
  if (expectedAction && data.action !== expectedAction) {
    return { valid: false, error: 'Action mismatch' };
  }
  if (data.score !== undefined && data.score < 0.5) {
    return { valid: false, error: 'Score too low' };
  }
  return { valid: true };
}
