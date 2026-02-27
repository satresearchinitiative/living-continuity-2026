const RECAPTCHA_SCRIPT_URL = 'https://www.google.com/recaptcha/api.js';

let scriptLoadPromise = null;

function loadRecaptchaScript(siteKey) {
  if (typeof window === 'undefined') return Promise.reject(new Error('Not in browser'));
  if (window.grecaptcha?.ready) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;
  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `${RECAPTCHA_SCRIPT_URL}?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('reCAPTCHA script failed to load'));
    document.head.appendChild(script);
  });
  return scriptLoadPromise;
}

export async function getRecaptchaToken(siteKey, action = 'submit') {
  if (!siteKey) return null;
  await loadRecaptchaScript(siteKey);
  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action }).then(resolve);
    });
  });
}
