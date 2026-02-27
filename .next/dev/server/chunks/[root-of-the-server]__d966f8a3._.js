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
"[project]/app/api/submit-entry/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
const dynamic = 'force-dynamic';
async function POST(request) {
    try {
        const body = await request.json();
        const { interpretation, name, keyword } = body;
        if (!interpretation) {
            return Response.json({
                error: 'Interpretation is required'
            }, {
                status: 400
            });
        }
        const emailData = {
            interpretation,
            name: name || 'Anonymous',
            keyword,
            timestamp: new Date().toISOString()
        };
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not configured');
            return Response.json({
                error: 'Email service is not configured'
            }, {
                status: 500
            });
        }
        const toEmails = process.env.RESEND_TO_EMAIL ? process.env.RESEND_TO_EMAIL.split(',').map((email)=>email.trim()) : [
            'admin@example.com'
        ];
        const emailPayload = {
            from: process.env.RESEND_FROM_EMAIL || 'noreply@example.com',
            to: toEmails,
            subject: `New Interpretation Submission: ${keyword}`,
            html: `
        <h2>New Interpretation Submission</h2>
        <p><strong>Keyword:</strong> ${keyword}</p>
        <p><strong>Name:</strong> ${emailData.name}</p>
        <p><strong>Interpretation:</strong></p>
        <p>${interpretation.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${emailData.timestamp}</p>
      `
        };
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`
            },
            body: JSON.stringify(emailPayload)
        });
        if (!resendResponse.ok) {
            const errorData = await resendResponse.json();
            console.error('Resend API error:', errorData);
            return Response.json({
                error: 'Failed to send email'
            }, {
                status: 500
            });
        }
        const result = await resendResponse.json();
        return Response.json({
            success: true,
            messageId: result.id,
            message: 'Entry submitted successfully'
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error processing submission:', error);
        return Response.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d966f8a3._.js.map