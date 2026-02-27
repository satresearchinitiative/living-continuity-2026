(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Error Boundary - Next.js App Router
 * 
 * This component catches errors in the app and displays a fallback UI.
 * In the App Router, this replaces error handling from pages/_app.js and pages/500.js.
 * This file must be a Client Component.
 */ __turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Error(param) {
    var error = param.error, reset = param.reset;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Error.useEffect": function() {
            // Log the error to an error reporting service
            console.error('[ERROR] Application error caught:', error);
            console.error('[ERROR] Error message:', error === null || error === void 0 ? void 0 : error.message);
            console.error('[ERROR] Error stack:', error === null || error === void 0 ? void 0 : error.stack);
            console.error('[ERROR] Error name:', error === null || error === void 0 ? void 0 : error.name);
            // Log to Vercel/deployment logs (will appear in deployment logs)
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    // Additional context
                    console.error('[ERROR] URL:', window.location.href);
                    console.error('[ERROR] User Agent:', navigator.userAgent);
                } catch (e) {
                // Silently fail if we can't access window
                }
            }
        }
    }["Error.useEffect"], [
        error
    ]);
    var isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '48px',
                    marginBottom: '20px'
                },
                children: "500"
            }, void 0, false, {
                fileName: "[project]/app/error.js",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: '24px',
                    marginBottom: '20px'
                },
                children: "Something went wrong!"
            }, void 0, false, {
                fileName: "[project]/app/error.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginBottom: '30px'
                },
                children: "An error occurred while loading this page. Please try again."
            }, void 0, false, {
                fileName: "[project]/app/error.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            isDevelopment && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '20px',
                    padding: '20px',
                    background: '#f5f5f5',
                    borderRadius: '5px',
                    textAlign: 'left',
                    maxWidth: '800px',
                    width: '100%',
                    fontSize: '14px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '18px',
                            marginBottom: '10px'
                        },
                        children: "Error Details (Development Only):"
                    }, void 0, false, {
                        fileName: "[project]/app/error.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Message:"
                            }, void 0, false, {
                                fileName: "[project]/app/error.js",
                                lineNumber: 62,
                                columnNumber: 14
                            }, this),
                            " ",
                            error.message || 'Unknown error'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/error.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    error.stack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        style: {
                            marginTop: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                style: {
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                },
                                children: "Stack Trace"
                            }, void 0, false, {
                                fileName: "[project]/app/error.js",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                style: {
                                    marginTop: '10px',
                                    padding: '10px',
                                    background: '#fff',
                                    borderRadius: '3px',
                                    overflow: 'auto',
                                    fontSize: '12px',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word'
                                },
                                children: error.stack
                            }, void 0, false, {
                                fileName: "[project]/app/error.js",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/error.js",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/error.js",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        style: {
                            padding: '10px 20px',
                            border: '1px solid #000',
                            borderRadius: '5px',
                            background: '#fff',
                            cursor: 'pointer'
                        },
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/app/error.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            padding: '10px 20px',
                            border: '1px solid #000',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            color: '#000'
                        },
                        children: "Go to Homepage"
                    }, void 0, false, {
                        fileName: "[project]/app/error.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/error.js",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/error.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Error, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Error;
var _c;
__turbopack_context__.k.register(_c, "Error");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_error_00be5121.js.map