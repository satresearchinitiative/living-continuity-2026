module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/api/utils/verifyRecaptcha.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyRecaptchaToken",
    ()=>verifyRecaptchaToken
]);
async function verifyRecaptchaToken(token, expectedAction) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) return {
        valid: true
    };
    if (!token) return {
        valid: false,
        error: 'Missing reCAPTCHA token'
    };
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${secretKey}&response=${token}`
    });
    const data = await res.json();
    if (!data.success) {
        return {
            valid: false,
            error: data['error-codes']?.join(', ') || 'Verification failed'
        };
    }
    if (expectedAction && data.action !== expectedAction) {
        return {
            valid: false,
            error: 'Action mismatch'
        };
    }
    if (data.score !== undefined && data.score < 0.5) {
        return {
            valid: false,
            error: 'Score too low'
        };
    }
    return {
        valid: true
    };
}
}),
"[project]/app/api/utils/formSubmissionErrors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeHtmlForEmail",
    ()=>escapeHtmlForEmail,
    "formatResendError",
    ()=>formatResendError,
    "isFormSubmissionDebug",
    ()=>isFormSubmissionDebug,
    "jsonError",
    ()=>jsonError
]);
function isFormSubmissionDebug() {
    return process.env.FORM_SUBMISSION_DEBUG === 'true';
}
function formatResendError(error) {
    if (error == null) return 'Unknown Resend error';
    if (typeof error === 'string') return error;
    if (Array.isArray(error)) return error.map((e)=>formatResendError(e)).filter(Boolean).join('; ') || 'Unknown Resend error';
    if (typeof error === 'object' && 'message' in error && error.message != null) return String(error.message);
    try {
        return JSON.stringify(error);
    } catch  {
        return 'Unknown Resend error';
    }
}
function escapeHtmlForEmail(text) {
    if (text == null || typeof text !== 'string') return '';
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function jsonError(payload, status) {
    if (!isFormSubmissionDebug() && Object.prototype.hasOwnProperty.call(payload, 'debug')) {
        const { debug, ...rest } = payload;
        return Response.json(rest, {
            status
        });
    }
    return Response.json(payload, {
        status
    });
}
}),
"[project]/app/api/submit-entry/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$verifyRecaptcha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/utils/verifyRecaptcha.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/utils/formSubmissionErrors.js [app-route] (ecmascript)");
;
;
;
const dynamic = 'force-dynamic';
async function POST(request) {
    try {
        const body = await request.json();
        const { interpretation, name, keyword, recaptchaToken, website } = body;
        if (website) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Invalid submission',
                code: 'INVALID_SUBMISSION'
            }, 400);
        }
        if (!interpretation) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Interpretation is required',
                code: 'VALIDATION_REQUIRED'
            }, 400);
        }
        const recaptcha = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$verifyRecaptcha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyRecaptchaToken"])(recaptchaToken, 'glossary_submit');
        if (!recaptcha.valid) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Verification failed. Please try again.',
                code: 'RECAPTCHA_FAILED',
                details: recaptcha.error,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFormSubmissionDebug"])() && {
                    debug: {
                        step: 'recaptcha',
                        recaptchaError: recaptcha.error
                    }
                }
            }, 403);
        }
        if (!process.env.RESEND_API_KEY) {
            console.error('[submit-entry] RESEND_API_KEY is not configured');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Email service is not configured',
                code: 'RESEND_NOT_CONFIGURED',
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFormSubmissionDebug"])() && {
                    debug: {
                        step: 'env',
                        resendApiKeySet: false
                    }
                }
            }, 500);
        }
        const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
        const emailData = {
            interpretation,
            name: name || 'Anonymous',
            keyword,
            timestamp: new Date().toISOString()
        };
        const safeKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtmlForEmail"])(String(keyword ?? ''));
        const safeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtmlForEmail"])(String(emailData.name));
        const safeInterpretation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtmlForEmail"])(String(interpretation)).replace(/\n/g, '<br>');
        const toEmails = process.env.RESEND_INTERPRETATION_EMAIL || process.env.RESEND_TO_EMAIL ? (process.env.RESEND_INTERPRETATION_EMAIL || process.env.RESEND_TO_EMAIL).split(',').map((email)=>email.trim()) : [
            'digitalresearch@sharjaharchitecture.org'
        ];
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
            const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatResendError"])(result.error);
            console.error('[submit-entry] Resend error:', result.error);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Failed to send email',
                code: 'RESEND_SEND_FAILED',
                details,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFormSubmissionDebug"])() && {
                    debug: {
                        step: 'resend',
                        resendError: result.error
                    }
                }
            }, 502);
        }
        if (!result.data?.id) {
            console.error('[submit-entry] Resend returned no id:', result);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
                error: 'Failed to send email',
                code: 'RESEND_INCOMPLETE_RESPONSE',
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFormSubmissionDebug"])() && {
                    debug: {
                        step: 'resend',
                        result
                    }
                }
            }, 502);
        }
        return Response.json({
            success: true,
            messageId: result.data.id,
            message: 'Entry submitted successfully'
        }, {
            status: 200
        });
    } catch (error) {
        console.error('[submit-entry] Error processing submission:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])({
            error: 'Internal server error',
            code: 'INTERNAL',
            details: error instanceof Error ? error.message : 'Unknown error',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$utils$2f$formSubmissionErrors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFormSubmissionDebug"])() && {
                debug: {
                    step: 'exception',
                    name: error instanceof Error ? error.name : undefined
                }
            }
        }, 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c5cdea8c._.js.map