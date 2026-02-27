module.exports = [
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/components/utils/PassiveOrbitControls.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PassiveOrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
;
;
;
;
function PassiveOrbitControls(props) {
    const { gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const domElement = gl.domElement;
        if (!domElement) return;
        const makeWheelPassive = ()=>{
            const wheelListeners = [];
            const originalAddEventListener = domElement.addEventListener.bind(domElement);
            const originalRemoveEventListener = domElement.removeEventListener.bind(domElement);
            domElement.addEventListener = function(type, listener, options) {
                if (type === 'wheel') {
                    wheelListeners.push({
                        listener,
                        options
                    });
                    const passiveOptions = typeof options === 'boolean' ? {
                        passive: true,
                        capture: options
                    } : options && typeof options === 'object' ? {
                        ...options,
                        passive: true
                    } : {
                        passive: true
                    };
                    return originalAddEventListener(type, listener, passiveOptions);
                }
                return originalAddEventListener(type, listener, options);
            };
            domElement.removeEventListener = function(type, listener, options) {
                if (type === 'wheel') {
                    const index = wheelListeners.findIndex((l)=>l.listener === listener);
                    if (index !== -1) {
                        wheelListeners.splice(index, 1);
                    }
                }
                return originalRemoveEventListener(type, listener, options);
            };
        };
        makeWheelPassive();
        return ()=>{
            if (domElement.addEventListener && domElement.addEventListener !== EventTarget.prototype.addEventListener) {
                delete domElement.addEventListener;
                domElement.addEventListener = EventTarget.prototype.addEventListener.bind(domElement);
            }
            if (domElement.removeEventListener && domElement.removeEventListener !== EventTarget.prototype.removeEventListener) {
                delete domElement.removeEventListener;
                domElement.removeEventListener = EventTarget.prototype.removeEventListener.bind(domElement);
            }
        };
    }, [
        gl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/utils/PassiveOrbitControls.jsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/utils/OptimizedCanvas.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OptimizedCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const createCleanObject = (source)=>{
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
        return {};
    }
    const clean = {};
    try {
        for(const key in source){
            if (source.hasOwnProperty(key)) {
                const value = source[key];
                if (value !== undefined && value !== null) {
                    if (typeof value === 'object' && !Array.isArray(value)) {
                        clean[key] = createCleanObject(value);
                    } else if (typeof value !== 'object') {
                        clean[key] = value;
                    }
                }
            }
        }
    } catch (e) {
        console.warn('[OptimizedCanvas] Error creating clean object:', e);
    }
    return clean;
};
function OptimizedCanvas({ children, frameloop, style, camera, orthographic }) {
    const glConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        try {
            return {
                antialias: true,
                alpha: false,
                powerPreference: 'high-performance',
                stencil: false,
                depth: true,
                logarithmicDepthBuffer: false,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false
            };
        } catch (e) {
            console.error('[OptimizedCanvas] Error creating glConfig:', e);
            return {
                antialias: true,
                alpha: false,
                powerPreference: 'high-performance'
            };
        }
    }, []);
    const canvasProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const builtProps = {
            dpr: [
                1,
                1.5
            ],
            frameloop: frameloop || 'demand',
            gl: glConfig && typeof glConfig === 'object' && !Array.isArray(glConfig) ? glConfig : {
                antialias: true,
                alpha: false,
                powerPreference: 'high-performance'
            }
        };
        if (orthographic !== undefined) {
            builtProps.orthographic = orthographic;
        }
        try {
            if (style !== undefined && style !== null && typeof style === 'object' && !Array.isArray(style)) {
                builtProps.style = createCleanObject(style);
            }
            if (camera !== undefined && camera !== null && typeof camera === 'object' && !Array.isArray(camera)) {
                builtProps.camera = createCleanObject(camera);
            }
        } catch (e) {
            console.error('[OptimizedCanvas] Error building canvasProps:', e);
        }
        return builtProps;
    }, [
        frameloop,
        style,
        camera,
        glConfig,
        orthographic
    ]);
    if (!canvasProps || typeof canvasProps !== 'object' || Array.isArray(canvasProps)) {
        console.error('[OptimizedCanvas] Invalid canvasProps, using defaults:', canvasProps);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                1.5
            ],
            frameloop: "demand",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/utils/OptimizedCanvas.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"]) {
        console.error('[OptimizedCanvas] Canvas component not available');
        return null;
    }
    const safeCanvasProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const clean = createCleanObject(canvasProps);
        if (!clean.dpr || !Array.isArray(clean.dpr)) {
            clean.dpr = [
                1,
                1.5
            ];
        }
        if (!clean.frameloop || typeof clean.frameloop !== 'string') {
            clean.frameloop = 'demand';
        }
        if (!clean.gl || typeof clean.gl !== 'object' || Array.isArray(clean.gl)) {
            clean.gl = glConfig;
        }
        return clean;
    }, [
        canvasProps,
        glConfig
    ]);
    try {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            ...safeCanvasProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/utils/OptimizedCanvas.jsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    } catch (e) {
        console.error('[OptimizedCanvas] Error rendering Canvas:', e, 'safeCanvasProps:', safeCanvasProps);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                1.5
            ],
            frameloop: "demand",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/utils/OptimizedCanvas.jsx",
            lineNumber: 122,
            columnNumber: 7
        }, this);
    }
}
}),
"[project]/components/utils/nodeConnections.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARTICLE_CONNECTIONS",
    ()=>ARTICLE_CONNECTIONS,
    "KEYWORD_CONNECTIONS",
    ()=>KEYWORD_CONNECTIONS,
    "getConnectedNodes",
    ()=>getConnectedNodes
]);
const ARTICLE_CONNECTIONS = {
    "A1": [
        "G5",
        "G8",
        "G15",
        "G28",
        "G33",
        "G45",
        "G51",
        "G54"
    ],
    "A2": [
        "G2",
        "G3",
        "G23",
        "G37"
    ],
    "A3": [
        "G9",
        "G11",
        "G16",
        "G18",
        "G20",
        "G40"
    ],
    "A4": [
        "G4",
        "G11",
        "G15",
        "G16",
        "G17",
        "G19",
        "G29",
        "G38",
        "G53"
    ],
    "A5": [
        "G8",
        "G14",
        "G15",
        "G22",
        "G24",
        "G34",
        "G51",
        "G54"
    ],
    "A6": [
        "G1",
        "G6",
        "G7",
        "G14",
        "G19",
        "G21",
        "G22",
        "G24",
        "G25",
        "G27",
        "G34",
        "G35",
        "G50",
        "G52"
    ],
    "A7": [
        "G2",
        "G5",
        "G10",
        "G14",
        "G16",
        "G26"
    ],
    "A8": [
        "G2",
        "G8",
        "G20",
        "G24",
        "G43",
        "G44"
    ],
    "A9": [
        "G5",
        "G14",
        "G28"
    ],
    "A10": [
        "G5",
        "G9",
        "G10",
        "G12",
        "G15",
        "G33",
        "G36",
        "G45"
    ],
    "A11": [
        "G7",
        "G9",
        "G11",
        "G14",
        "G18",
        "G24",
        "G29",
        "G36",
        "G40",
        "G53"
    ],
    "A12": [
        "G4",
        "G11",
        "G16",
        "G29",
        "G32",
        "G38",
        "G49"
    ],
    "A13": [
        "G4",
        "G13",
        "G21",
        "G37",
        "G39"
    ],
    "A14": [
        "G1",
        "G3",
        "G7",
        "G11",
        "G17",
        "G18",
        "G19",
        "G21",
        "G24",
        "G34",
        "G47",
        "G50"
    ],
    "A15": [
        "G23",
        "G36",
        "G46"
    ],
    "A16": [
        "G5",
        "G12",
        "G15",
        "G16",
        "G26",
        "G28",
        "G33",
        "G38",
        "G49"
    ],
    "A17": [
        "G2",
        "G6",
        "G7",
        "G11",
        "G13",
        "G21",
        "G22",
        "G23",
        "G25",
        "G35",
        "G41",
        "G42"
    ],
    "A18": [
        "G8",
        "G9",
        "G12",
        "G13",
        "G16",
        "G19",
        "G20",
        "G25",
        "G32",
        "G51"
    ],
    "A19": [
        "G13",
        "G17",
        "G30",
        "G39",
        "G44",
        "G47"
    ],
    "A20": [
        "G1",
        "G2",
        "G7",
        "G24",
        "G40",
        "G46",
        "G52"
    ],
    "A21": [
        "G2",
        "G6",
        "G10",
        "G35",
        "G39",
        "G41"
    ],
    "A22": [
        "G3",
        "G13",
        "G18",
        "G32",
        "G43"
    ],
    "A23": [
        "G2",
        "G6",
        "G13",
        "G21",
        "G23",
        "G30",
        "G35",
        "G41"
    ],
    "A24": [
        "G3",
        "G6",
        "G10",
        "G12",
        "G16",
        "G17",
        "G22",
        "G27",
        "G35",
        "G48"
    ],
    "A25": [
        "G21",
        "G23",
        "G25",
        "G35",
        "G41",
        "G42",
        "G48"
    ],
    "A26": [
        "G5",
        "G12",
        "G14",
        "G26",
        "G27",
        "G37"
    ],
    "A27": [],
    "A28": [],
    "A29": []
};
const KEYWORD_CONNECTIONS = {
    "G1": [
        "A6",
        "A14",
        "A20"
    ],
    "G2": [
        "A2",
        "A7",
        "A17",
        "A20",
        "A21",
        "A23"
    ],
    "G3": [
        "A2",
        "A14",
        "A22",
        "A24"
    ],
    "G4": [
        "A4",
        "A12",
        "A13"
    ],
    "G5": [
        "A1",
        "A7",
        "A9",
        "A10",
        "A16",
        "A26"
    ],
    "G6": [
        "A6",
        "A17",
        "A21",
        "A23",
        "A24"
    ],
    "G7": [
        "A6",
        "A11",
        "A14",
        "A17",
        "A20"
    ],
    "G8": [
        "A1",
        "A5",
        "A8",
        "A18"
    ],
    "G9": [
        "A3",
        "A10",
        "A11",
        "A18"
    ],
    "G10": [
        "A7",
        "A10",
        "A21",
        "A24"
    ],
    "G11": [
        "A3",
        "A4",
        "A11",
        "A12",
        "A14",
        "A17"
    ],
    "G12": [
        "A10",
        "A16",
        "A18",
        "A24",
        "A26"
    ],
    "G13": [
        "A13",
        "A17",
        "A18",
        "A19",
        "A22",
        "A23"
    ],
    "G14": [
        "A5",
        "A6",
        "A7",
        "A9",
        "A11",
        "A14",
        "A26"
    ],
    "G15": [
        "A1",
        "A4",
        "A5",
        "A10",
        "A16"
    ],
    "G16": [
        "A3",
        "A4",
        "A7",
        "A12",
        "A16",
        "A18",
        "A24"
    ],
    "G17": [
        "A4",
        "A14",
        "A19",
        "A24"
    ],
    "G18": [
        "A3",
        "A11",
        "A14",
        "A22"
    ],
    "G19": [
        "A4",
        "A6",
        "A14",
        "A18"
    ],
    "G20": [
        "A1",
        "A3",
        "A8",
        "A18"
    ],
    "G21": [
        "A6",
        "A13",
        "A14",
        "A17",
        "A23",
        "A25"
    ],
    "G22": [
        "A5",
        "A6",
        "A17",
        "A24"
    ],
    "G23": [
        "A2",
        "A15",
        "A17",
        "A23",
        "A25"
    ],
    "G24": [
        "A5",
        "A6",
        "A8",
        "A11",
        "A14",
        "A20"
    ],
    "G25": [
        "A6",
        "A17",
        "A18",
        "A25"
    ],
    "G26": [
        "A7",
        "A16",
        "A26"
    ],
    "G27": [
        "A6",
        "A24",
        "A26"
    ],
    "G28": [
        "A1",
        "A9",
        "A16"
    ],
    "G29": [
        "A4",
        "A11",
        "A12"
    ],
    "G30": [
        "A19",
        "A23",
        "A4"
    ],
    "G31": [
        "A1"
    ],
    "G32": [
        "A12",
        "A18",
        "A22"
    ],
    "G33": [
        "A1",
        "A10",
        "A16"
    ],
    "G34": [
        "A5",
        "A6",
        "A14"
    ],
    "G35": [
        "A6",
        "A17",
        "A21",
        "A23",
        "A24",
        "A25"
    ],
    "G36": [
        "A10",
        "A11",
        "A15"
    ],
    "G37": [
        "A2",
        "A13",
        "A26"
    ],
    "G38": [
        "A4",
        "A12",
        "A16"
    ],
    "G39": [
        "A13",
        "A19",
        "A21"
    ],
    "G40": [
        "A3",
        "A11",
        "A20"
    ],
    "G41": [
        "A17",
        "A21",
        "A23",
        "A25"
    ],
    "G42": [
        "A17",
        "A25"
    ],
    "G43": [
        "A8",
        "A22"
    ],
    "G44": [
        "A8",
        "A19"
    ],
    "G45": [
        "A1",
        "A10"
    ],
    "G46": [
        "A15",
        "A20"
    ],
    "G47": [
        "A14",
        "A19"
    ],
    "G48": [
        "A24",
        "A25"
    ],
    "G49": [
        "A12",
        "A16"
    ],
    "G50": [
        "A6",
        "A14"
    ],
    "G51": [
        "A1",
        "A5",
        "A18"
    ],
    "G52": [
        "A6",
        "A20"
    ],
    "G53": [
        "A4",
        "A11"
    ],
    "G54": [
        "A1",
        "A5"
    ]
};
function getConnectedNodes(nodeId) {
    if (!nodeId) return [];
    if (ARTICLE_CONNECTIONS[nodeId]) {
        return ARTICLE_CONNECTIONS[nodeId];
    }
    if (KEYWORD_CONNECTIONS[nodeId]) {
        return KEYWORD_CONNECTIONS[nodeId];
    }
    return [];
}
}),
"[project]/components/utils/radialPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCircularPosition",
    ()=>getCircularPosition,
    "getRadialPosition",
    ()=>getRadialPosition
]);
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const OUTER_RADIUS_BASE = 22;
const OUTER_RADIUS_VARIATION = 6;
const INNER_RADIUS_BASE = 12;
const INNER_RADIUS_VARIATION = 3;
function sphericalPosition(localIndex, localTotal, radius, useEvenDistribution = false) {
    if (localTotal <= 1) {
        return [
            0,
            0,
            0
        ];
    }
    if (useEvenDistribution) {
        const yRaw = 1 - localIndex / (localTotal - 1) * 2;
        const y = Math.max(-0.9, Math.min(0.9, yRaw));
        const r = Math.sqrt(Math.max(0, 1 - y * y)) * radius;
        const theta = GOLDEN_ANGLE * localIndex;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        return [
            x,
            y * radius,
            z
        ];
    } else {
        const yRaw = 1 - localIndex / (localTotal - 1) * 2;
        const y = Math.max(-0.85, Math.min(0.85, yRaw));
        const r = Math.sqrt(Math.max(0, 1 - y * y)) * radius;
        const theta = GOLDEN_ANGLE * localIndex;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        return [
            x,
            y * radius * 0.8,
            z
        ];
    }
}
function getVariedRadius(index, baseRadius, variation) {
    const variationFactor = Math.sin(index * 0.7) * 0.5 + Math.cos(index * 1.3) * 0.3;
    const variedRadius = baseRadius + variationFactor * variation;
    return variedRadius;
}
function getRadialPosition(index, total, radius = 15, articlesCount = null, glossaryCount = null) {
    if (articlesCount !== null && glossaryCount !== null && total === articlesCount + glossaryCount) {
        if (index < articlesCount) {
            const variedRadius = getVariedRadius(index, OUTER_RADIUS_BASE, OUTER_RADIUS_VARIATION);
            return sphericalPosition(index, articlesCount, variedRadius, false);
        }
        const keywordIndex = index - articlesCount;
        const variedRadius = getVariedRadius(keywordIndex, INNER_RADIUS_BASE, INNER_RADIUS_VARIATION);
        return sphericalPosition(keywordIndex, glossaryCount, variedRadius, true);
    }
    return sphericalPosition(index, total, radius);
}
function getCircularPosition(index, total, radius = 8, height = 0) {
    const angle = index / total * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [
        x,
        height,
        z
    ];
}
}),
"[project]/components/utils/crossPositionTracker.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCache",
    ()=>clearCache,
    "getCachedCrossPosition",
    ()=>getCachedCrossPosition,
    "registerCrossGroup",
    ()=>registerCrossGroup,
    "unregisterCrossGroup",
    ()=>unregisterCrossGroup,
    "updateAllCrossPositions",
    ()=>updateAllCrossPositions,
    "updateCrossPosition",
    ()=>updateCrossPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
const crossGroupRegistry = new Map();
const crossPositionCache = new Map();
const tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
function registerCrossGroup(nodeId, crossGroupRef) {
    if (crossGroupRef) {
        crossGroupRegistry.set(nodeId, crossGroupRef);
        crossPositionCache.delete(nodeId);
    } else {
        crossGroupRegistry.delete(nodeId);
        crossPositionCache.delete(nodeId);
    }
}
function unregisterCrossGroup(nodeId) {
    crossGroupRegistry.delete(nodeId);
    crossPositionCache.delete(nodeId);
}
function updateCrossPosition(nodeId) {
    const crossGroupRef = crossGroupRegistry.get(nodeId);
    if (!crossGroupRef || !crossGroupRef.current) return null;
    try {
        const crossGroup = crossGroupRef.current;
        crossGroup.getWorldPosition(tempVec);
        const position = [
            tempVec.x,
            tempVec.y,
            tempVec.z
        ];
        crossPositionCache.set(nodeId, position);
        return position;
    } catch (error) {
        return null;
    }
}
function updateAllCrossPositions() {
    const positions = {};
    crossGroupRegistry.forEach((crossGroupRef, nodeId)=>{
        const pos = updateCrossPosition(nodeId);
        if (pos) {
            positions[nodeId] = pos;
        }
    });
    return positions;
}
function getCachedCrossPosition(nodeId) {
    return crossPositionCache.get(nodeId) || null;
}
function clearCache() {
    crossPositionCache.clear();
}
}),
"[project]/components/utils/selectionStore.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$appStores$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/appStores.js [app-ssr] (ecmascript)");
;
}),
"[project]/components/connectionControler.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionController",
    ()=>ConnectionController,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubicBezierLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/CubicBezierLine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/radialPosition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/crossPositionTracker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
function getRelatedArticles(articleId) {
    if (!articleId || !articleId.startsWith('A')) return [];
    const articleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][articleId] || [];
    if (articleKeywords.length === 0) return [];
    const relatedArticles = new Set();
    articleKeywords.forEach((keywordId)=>{
        const articlesWithSameKeyword = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYWORD_CONNECTIONS"][keywordId] || [];
        articlesWithSameKeyword.forEach((relatedArticleId)=>{
            if (relatedArticleId !== articleId) {
                relatedArticles.add(relatedArticleId);
            }
        });
    });
    return Array.from(relatedArticles);
}
function getSecondaryConnectionsForKeyword(keywordId) {
    if (!keywordId || !keywordId.startsWith('G')) return [];
    const connectedArticles = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYWORD_CONNECTIONS"][keywordId] || [];
    if (connectedArticles.length === 0) return [];
    const secondaryConnections = [];
    connectedArticles.forEach((articleId)=>{
        const articleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][articleId] || [];
        articleKeywords.forEach((articleKeywordId)=>{
            if (articleKeywordId !== keywordId) {
                secondaryConnections.push({
                    from: articleId,
                    to: articleKeywordId
                });
            }
        });
    });
    return secondaryConnections;
}
const ARTICLE_IDS = Array.from({
    length: 29
}, (_, index)=>`A${index + 1}`);
const KEYWORD_IDS = Array.from({
    length: 54
}, (_, index)=>`G${index + 1}`);
const TOTAL_NODES = ARTICLE_IDS.length + KEYWORD_IDS.length;
const BASE_RADIUS = 15;
const buildPositions = ()=>{
    const positions = {};
    ARTICLE_IDS.forEach((id, index)=>{
        positions[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadialPosition"])(index, TOTAL_NODES, BASE_RADIUS);
    });
    KEYWORD_IDS.forEach((id, index)=>{
        positions[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadialPosition"])(ARTICLE_IDS.length + index, TOTAL_NODES, BASE_RADIUS);
    });
    return positions;
};
function AnimatedConnectionLine({ start, end, v0, v1, index, totalConnections, color = "#e9ff00", shouldHide = false }) {
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lineWidth, setLineWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const revealStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasAnimatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInitialMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lineKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(`${start[0]}-${start[1]}-${end[0]}-${end[1]}-${v0?.[0]}-${v1?.[0]}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newKey = `${start[0].toFixed(1)}-${start[1].toFixed(1)}-${end[0].toFixed(1)}-${end[1].toFixed(1)}-${v0?.[0]?.toFixed(1)}-${v1?.[0]?.toFixed(1)}`;
        if (newKey !== lineKeyRef.current) {
            lineKeyRef.current = newKey;
            if (isInitialMountRef.current) {
                setOpacity(0);
                revealStartTime.current = Date.now();
                hasAnimatedRef.current = false;
                isInitialMountRef.current = false;
            }
        }
    }, [
        start,
        end,
        v0,
        v1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (shouldHide) {
            setOpacity(0);
            hasAnimatedRef.current = false;
            return;
        }
        if (!hasAnimatedRef.current) {
            revealStartTime.current = Date.now();
            const delay = index * 20;
            const timer = setTimeout(()=>{
                const startTime = Date.now();
                const duration = 300;
                const animate = ()=>{
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setOpacity(eased);
                    setLineWidth(0.5 + eased * 0.5);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        animationComplete.current = true;
                        hasAnimatedRef.current = true;
                    }
                };
                animate();
            }, delay);
            return ()=>clearTimeout(timer);
        }
    }, [
        index,
        shouldHide
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasAnimatedRef.current && !shouldHide && opacity < 0.9) {
            setOpacity(1);
            setLineWidth(1);
        }
    }, [
        start,
        end,
        v0,
        v1,
        shouldHide,
        opacity
    ]);
    const isValidControlPoint = (cp)=>{
        return cp && Array.isArray(cp) && cp.length === 3 && cp.every((val)=>typeof val === 'number' && !isNaN(val) && isFinite(val));
    };
    const isValidPoint = (p)=>{
        return p && Array.isArray(p) && p.length === 3 && p.every((val)=>typeof val === 'number' && !isNaN(val) && isFinite(val));
    };
    if (!isValidPoint(start) || !isValidPoint(end) || !isValidControlPoint(v0) || !isValidControlPoint(v1)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('[AnimatedConnectionLine] Invalid points:', {
                start,
                end,
                v0,
                v1
            });
        }
        return null;
    }
    if (opacity === 0 && shouldHide) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        renderOrder: 4,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubicBezierLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CubicBezierLine"], {
            start: start,
            end: end,
            midA: v0,
            midB: v1,
            color: color,
            lineWidth: lineWidth,
            opacity: opacity,
            transparent: true,
            depthWrite: false,
            depthTest: true
        }, void 0, false, {
            fileName: "[project]/components/connectionControler.jsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/connectionControler.jsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
function ConnectionController({ processedData }) {
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedNodeStore", null);
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("highlightedNodesStore", []);
    const [linesVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("connectionLinesVisibilityStore", true);
    const getPositions = ()=>{
        if (processedData && processedData.nodeMap) {
            const posMap = {};
            processedData.nodeMap.forEach((node, id)=>{
                posMap[id] = node.position || [
                    0,
                    0,
                    0
                ];
            });
            return posMap;
        }
        return buildPositions();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const highlightedStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore');
        const secondaryHighlightedStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore');
        const highlighted = new Set();
        const secondaryHighlighted = new Set();
        if (selectedNode?.id) {
            highlighted.add(selectedNode.id);
            const connected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
            connected.forEach((nodeId)=>{
                if (nodeId) {
                    highlighted.add(nodeId);
                }
            });
            if (selectedNode.id.startsWith('A')) {
                const relatedArticles = getRelatedArticles(selectedNode.id);
                relatedArticles.forEach((articleId)=>{
                    secondaryHighlighted.add(articleId);
                });
            }
        }
        requestAnimationFrame(()=>{
            highlightedStore.setState(Array.from(highlighted));
            secondaryHighlightedStore.setState(Array.from(secondaryHighlighted));
        });
        crossPositionCache.current.clear();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCache"])();
    }, [
        selectedNode
    ]);
    const lastCheckRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastPositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const lastCameraPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [updateTrigger, setUpdateTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const now = Date.now();
        if (now - lastCheckRef.current < 16) return;
        lastCheckRef.current = now;
        if (!processedData || !processedData.nodeMap || !selectedNode?.id) return;
        const currentCameraPos = state.camera.position;
        const cameraChanged = !lastCameraPosRef.current || Math.abs(currentCameraPos.x - lastCameraPosRef.current.x) > 0.01 || Math.abs(currentCameraPos.y - lastCameraPosRef.current.y) > 0.01 || Math.abs(currentCameraPos.z - lastCameraPosRef.current.z) > 0.01;
        if (cameraChanged) {
            lastCameraPosRef.current = currentCameraPos.clone();
        }
        const currentPositions = getPositions();
        const connectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
        const allRelevantIds = [
            selectedNode.id,
            ...connectedIds
        ];
        let hasChanges = false;
        allRelevantIds.forEach((nodeId)=>{
            const currentPos = currentPositions[nodeId];
            if (!currentPos) return;
            const lastPos = lastPositionsRef.current[nodeId];
            if (!lastPos) {
                hasChanges = true;
                lastPositionsRef.current[nodeId] = [
                    ...currentPos
                ];
            } else {
                const threshold = 0.05;
                const changed = Math.abs(currentPos[0] - lastPos[0]) > threshold || Math.abs(currentPos[1] - lastPos[1]) > threshold || Math.abs(currentPos[2] - lastPos[2]) > threshold;
                if (changed) {
                    hasChanges = true;
                    lastPositionsRef.current[nodeId] = [
                        ...currentPos
                    ];
                }
            }
        });
        if (hasChanges || cameraChanged) {
            requestAnimationFrame(()=>{
                setUpdateTrigger((prev)=>prev + 1);
            });
        }
    });
    const tempVec1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempVec2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempVec3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempVec4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const worldUpVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    const rightVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0));
    const generateControlPoints = (start, end, index, isArticleToKeyword, isKeywordSource = false)=>{
        if (!start || !end || !Array.isArray(start) || !Array.isArray(end) || start.length !== 3 || end.length !== 3 || start.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v)) || end.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
            const mid = [
                ((start?.[0] || 0) + (end?.[0] || 0)) / 2,
                ((start?.[1] || 0) + (end?.[1] || 0)) / 2,
                ((start?.[2] || 0) + (end?.[2] || 0)) / 2
            ];
            return {
                v0: mid,
                v1: mid
            };
        }
        const dx = end[0] - start[0];
        const dy = end[1] - start[1];
        const dz = end[2] - start[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.001 || !isFinite(distance)) {
            const mid = [
                (start[0] + end[0]) / 2,
                (start[1] + end[1]) / 2,
                (start[2] + end[2]) / 2
            ];
            return {
                v0: mid,
                v1: mid
            };
        }
        const direction = tempVec1.current.set(dx, dy, dz);
        if (direction.length() < 0.001 || !isFinite(direction.length())) {
            direction.set(1, 0, 0);
        } else {
            direction.normalize();
        }
        const worldUp = worldUpVec.current;
        let perp = tempVec2.current.crossVectors(worldUp, direction);
        if (perp.length() < 0.001) {
            perp.crossVectors(rightVec.current, direction);
        }
        perp.normalize();
        const perp2 = tempVec3.current.crossVectors(direction, perp).normalize();
        const angleVariation = index * 30 % 360;
        const angle = angleVariation * Math.PI / 180;
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        const horizontalOffset = distance * 0.08 * cosAngle;
        const horizontalOffset2 = distance * 0.08 * sinAngle;
        const straightDownDistance = isKeywordSource ? 12.0 : 8.0;
        const v0 = tempVec4.current.set(start[0] - worldUp.x * straightDownDistance + perp.x * horizontalOffset * 0.1 + perp2.x * horizontalOffset2 * 0.1, start[1] - worldUp.y * straightDownDistance, start[2] - worldUp.z * straightDownDistance + perp.z * horizontalOffset * 0.1 + perp2.z * horizontalOffset2 * 0.1);
        const upOffset2 = distance * 0.70;
        const verticalOffset2 = isKeywordSource ? -distance * 0.15 : -distance * 0.10;
        const v1 = tempVec1.current.set(start[0] + direction.x * upOffset2 + perp.x * horizontalOffset * 0.2 + perp2.x * horizontalOffset2 * 0.2, start[1] + direction.y * upOffset2 + verticalOffset2 + perp.y * horizontalOffset * 0.2 + perp2.y * horizontalOffset2 * 0.2, start[2] + direction.z * upOffset2 + perp.z * horizontalOffset * 0.2 + perp2.z * horizontalOffset2 * 0.2);
        const sanitize = (val)=>typeof val === 'number' && isFinite(val) && !isNaN(val) ? val : 0;
        const cp0 = [
            sanitize(v0.x),
            sanitize(v0.y),
            sanitize(v0.z)
        ];
        const cp1 = [
            sanitize(v1.x),
            sanitize(v1.y),
            sanitize(v1.z)
        ];
        return {
            v0: cp0,
            v1: cp1
        };
    };
    const centerVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    const worldUpCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    const tempNodeVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempDirToCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const crossPositionCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const getCrossPosition = (nodeId, nodePosition, camera = null)=>{
        const trackedPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedCrossPosition"])(nodeId);
        if (trackedPosition) {
            return trackedPosition;
        }
        let selectedNodeForCache = null;
        let highlightedNodesForCache = [];
        try {
            selectedNodeForCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('selectedNodeStore', null);
            const highlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore', []);
            highlightedNodesForCache = Array.isArray(highlightedStoreValue) ? highlightedStoreValue : [];
        } catch (e) {
        // Store not available
        }
        const isHighlightedForCache = selectedNodeForCache?.id === nodeId || highlightedNodesForCache.includes(nodeId);
        let secondaryHighlightedForCache = [];
        try {
            const secondaryHighlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore', []);
            secondaryHighlightedForCache = Array.isArray(secondaryHighlightedStoreValue) ? secondaryHighlightedStoreValue : [];
        } catch (e) {
        // Store not available
        }
        const isSecondaryHighlightedForCache = secondaryHighlightedForCache.includes(nodeId);
        const isDimmedForCache = selectedNodeForCache && selectedNodeForCache.id !== nodeId && !highlightedNodesForCache.includes(nodeId) && !isSecondaryHighlightedForCache;
        const scaleState = isHighlightedForCache ? '1.3' : isDimmedForCache ? '0.6' : '1.0';
        const secondaryState = isSecondaryHighlightedForCache ? 'secondary' : 'normal';
        const cameraState = camera ? `${camera.position.x.toFixed(3)}-${camera.position.y.toFixed(3)}-${camera.position.z.toFixed(3)}` : 'no-camera';
        const cacheKey = `${nodeId}-${nodePosition[0].toFixed(3)}-${nodePosition[1].toFixed(3)}-${nodePosition[2].toFixed(3)}-${scaleState}-${secondaryState}-${cameraState}`;
        const cached = crossPositionCache.current.get(cacheKey);
        if (cached && !isHighlightedForCache && !isSecondaryHighlightedForCache) return cached;
        const center = centerVec.current;
        const nodeVec = tempNodeVec.current.set(nodePosition[0], nodePosition[1], nodePosition[2]);
        let directionToTarget = tempDirToCenter.current;
        if ((isHighlightedForCache || isSecondaryHighlightedForCache) && camera) {
            directionToTarget.subVectors(camera.position, nodeVec).normalize();
        } else {
            directionToTarget.subVectors(center, nodeVec).normalize();
        }
        const worldUp = worldUpCross.current;
        let right = tempRight.current.crossVectors(worldUp, directionToTarget);
        if (right.length() < 0.001) {
            right.set(1, 0, 0);
        }
        right.normalize();
        let up = tempUp.current.crossVectors(directionToTarget, right).normalize();
        if (Math.abs(directionToTarget.dot(worldUp)) > 0.99) {
            up.set(1, 0, 0);
            right.set(0, 0, 1);
        }
        const isArticle = nodeId && nodeId.startsWith('A');
        const result = tempResult.current;
        if (isArticle) {
            const trackedPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedCrossPosition"])(nodeId);
            if (trackedPosition) {
                return trackedPosition;
            }
            const baseImageHeight = 14.4;
            const borderWidth = 0.12;
            const baseTotalHeight = baseImageHeight + borderWidth * 2;
            const nodeGroupScale = 0.5;
            let selectedNode = null;
            let highlightedNodes = [];
            let secondaryHighlightedArticles = [];
            try {
                selectedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('selectedNodeStore', null);
                const highlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore', []);
                highlightedNodes = Array.isArray(highlightedStoreValue) ? highlightedStoreValue : [];
                const secondaryHighlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore', []);
                secondaryHighlightedArticles = Array.isArray(secondaryHighlightedStoreValue) ? secondaryHighlightedStoreValue : [];
            } catch (e) {
            // Store not available, use defaults
            }
            if (!Array.isArray(highlightedNodes)) {
                highlightedNodes = [];
            }
            if (!Array.isArray(secondaryHighlightedArticles)) {
                secondaryHighlightedArticles = [];
            }
            const isHighlighted = selectedNode?.id === nodeId || highlightedNodes.includes(nodeId);
            const isSecondaryHighlighted = secondaryHighlightedArticles.includes(nodeId);
            const isDimmed = selectedNode && selectedNode.id !== nodeId && !highlightedNodes.includes(nodeId) && !isSecondaryHighlighted;
            let articleScale = 1.0;
            if (isHighlighted) {
                articleScale = 1.3;
            } else if (isDimmed) {
                articleScale = 0.6;
            }
            const scaledTotalHeight = baseTotalHeight * articleScale;
            if ((isHighlighted || isSecondaryHighlighted) && camera) {
                const directionToCamera = tempDirToCenter.current.subVectors(camera.position, nodeVec).normalize();
                const worldUp = worldUpCross.current;
                let right = tempRight.current.crossVectors(worldUp, directionToCamera);
                if (right.length() < 0.001) {
                    right.set(1, 0, 0);
                }
                right.normalize();
                let correctedUp = tempUp.current.crossVectors(directionToCamera, right).normalize();
                const basis = tempMatrix.current.makeBasis(right, correctedUp, directionToCamera);
                const rotationQuat = tempQuat.current.setFromRotationMatrix(basis);
                const forwardVec = tempVec4.current.set(0, 0, 1);
                forwardVec.applyQuaternion(rotationQuat);
                const tiltAngle = Math.acos(Math.max(-1, Math.min(1, forwardVec.dot(worldUp)))) * (180 / Math.PI);
                const tiltFromCamera = Math.acos(Math.max(-1, Math.min(1, directionToCamera.dot(worldUp)))) * (180 / Math.PI);
                let bottomCenterOffset;
                if (isSecondaryHighlighted) {
                    const baseOffset = -(scaledTotalHeight / 2 + 0.1) * nodeGroupScale;
                    const tiltFactor = Math.cos(tiltAngle * Math.PI / 180);
                    bottomCenterOffset = baseOffset / Math.max(0.1, tiltFactor);
                } else {
                    bottomCenterOffset = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
                }
                const localBottom = tempLocalBottom.current.set(0, bottomCenterOffset, 0);
                const rotatedBottom = tempRotatedBottom.current.copy(localBottom).applyQuaternion(rotationQuat);
                const offsetDiff = rotatedBottom.y - localBottom.y;
                const horizontalOffset = Math.sqrt(rotatedBottom.x * rotatedBottom.x + rotatedBottom.z * rotatedBottom.z);
                if (isSecondaryHighlighted) {
                    console.log('%c[SECONDARY] Node: ' + nodeId, 'color: orange; font-weight: bold; font-size: 14px;', {
                        scaledTotalHeight: scaledTotalHeight.toFixed(3),
                        bottomCenterOffset: bottomCenterOffset.toFixed(3),
                        localBottom: `(${localBottom.x.toFixed(3)}, ${localBottom.y.toFixed(3)}, ${localBottom.z.toFixed(3)})`,
                        rotatedBottom: `(${rotatedBottom.x.toFixed(3)}, ${rotatedBottom.y.toFixed(3)}, ${rotatedBottom.z.toFixed(3)})`,
                        offsetDiff: offsetDiff.toFixed(3),
                        horizontalOffset: horizontalOffset.toFixed(3),
                        tiltAngle: tiltAngle.toFixed(2) + '°',
                        tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
                        cameraPos: `(${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`,
                        nodePos: `(${nodeVec.x.toFixed(2)}, ${nodeVec.y.toFixed(2)}, ${nodeVec.z.toFixed(2)})`,
                        directionToCamera: `(${directionToCamera.x.toFixed(3)}, ${directionToCamera.y.toFixed(3)}, ${directionToCamera.z.toFixed(3)})`
                    });
                }
                if (isHighlighted) {
                    console.log('%c[HIGHLIGHTED] Node: ' + nodeId, 'color: green; font-weight: bold; font-size: 14px;', {
                        scaledTotalHeight: scaledTotalHeight.toFixed(3),
                        bottomCenterOffset: bottomCenterOffset.toFixed(3),
                        localBottom: `(${localBottom.x.toFixed(3)}, ${localBottom.y.toFixed(3)}, ${localBottom.z.toFixed(3)})`,
                        rotatedBottom: `(${rotatedBottom.x.toFixed(3)}, ${rotatedBottom.y.toFixed(3)}, ${rotatedBottom.z.toFixed(3)})`,
                        offsetDiff: offsetDiff.toFixed(3),
                        horizontalOffset: horizontalOffset.toFixed(3),
                        tiltAngle: tiltAngle.toFixed(2) + '°',
                        tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
                        cameraPos: `(${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`,
                        nodePos: `(${nodeVec.x.toFixed(2)}, ${nodeVec.y.toFixed(2)}, ${nodeVec.z.toFixed(2)})`,
                        directionToCamera: `(${directionToCamera.x.toFixed(3)}, ${directionToCamera.y.toFixed(3)}, ${directionToCamera.z.toFixed(3)})`
                    });
                }
                result.copy(nodeVec);
                result.add(rotatedBottom);
            } else {
                let bottomCenterOffset;
                if (isSecondaryHighlighted) {
                    bottomCenterOffset = -(scaledTotalHeight / 1.8 + 0.15) * nodeGroupScale;
                } else {
                    bottomCenterOffset = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
                }
                result.copy(nodeVec);
                result.addScaledVector(up, bottomCenterOffset);
            }
        } else {
            const keywordHeight = 0.4;
            const keywordOffset = -(keywordHeight / 2);
            result.copy(nodeVec).addScaledVector(up, keywordOffset);
        }
        const resultArray = [
            result.x,
            result.y,
            result.z
        ];
        crossPositionCache.current.set(cacheKey, resultArray);
        if (crossPositionCache.current.size > 200) {
            crossPositionCache.current.clear();
        }
        return resultArray;
    };
    const tempStartVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempEndVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempLocalBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempRotatedBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const tempQuat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]());
    const tempMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]());
    const createLine = (startPos, endPos, index, totalConnections, color, isArticleToKeyword, startId, endId)=>{
        const isKeywordSource = startId && startId.startsWith('G');
        if (!startPos || !endPos || !Array.isArray(startPos) || !Array.isArray(endPos) || startPos.length !== 3 || endPos.length !== 3 || startPos.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v)) || endPos.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
            return null;
        }
        const startPosVec = tempStartVec.current.set(startPos[0], startPos[1], startPos[2]);
        const endPosVec = tempEndVec.current.set(endPos[0], endPos[1], endPos[2]);
        const dx = endPosVec.x - startPosVec.x;
        const dy = endPosVec.y - startPosVec.y;
        const dz = endPosVec.z - startPosVec.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.01 || !isFinite(distance)) {
            return null;
        }
        let controlPoints = generateControlPoints(startPos, endPos, index, isArticleToKeyword, isKeywordSource);
        if (!controlPoints || !controlPoints.v0 || !controlPoints.v1 || !Array.isArray(controlPoints.v0) || !Array.isArray(controlPoints.v1) || controlPoints.v0.length !== 3 || controlPoints.v1.length !== 3 || controlPoints.v0.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v)) || controlPoints.v1.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
            return null;
        }
        const key = `${startId}-${endId}-${index}`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedConnectionLine, {
            start: startPos,
            end: endPos,
            v0: controlPoints.v0,
            v1: controlPoints.v1,
            index: index,
            totalConnections: totalConnections,
            color: color,
            shouldHide: !linesVisible
        }, key, false, {
            fileName: "[project]/components/connectionControler.jsx",
            lineNumber: 628,
            columnNumber: 7
        }, this);
    };
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedNode?.id || !linesVisible) {
            return [];
        }
        const positions = getPositions();
        const nodePosition = positions[selectedNode.id];
        if (!nodePosition || !Array.isArray(nodePosition) || nodePosition.length !== 3) {
            return [];
        }
        const startPosition = getCrossPosition(selectedNode.id, nodePosition, camera);
        if (!startPosition || !Array.isArray(startPosition) || startPosition.length !== 3 || startPosition.some((v)=>typeof v !== 'number' || isNaN(v) || !isFinite(v))) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn(`[ConnectionController] Invalid start position for ${selectedNode.id}:`, startPosition);
            }
            return [];
        }
        const allLines = [];
        const isArticle = selectedNode.id.startsWith('A');
        const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
        const targetsLength = targets ? targets.length : 0;
        if (targetsLength > 0) {
            for(let i = 0; i < targetsLength; i++){
                const targetId = targets[i];
                const targetNodePosition = positions[targetId];
                if (!targetNodePosition) continue;
                const endPosition = getCrossPosition(targetId, targetNodePosition, camera);
                const isArticleToKeyword = isArticle && targetId.startsWith('G');
                const line = createLine(startPosition, endPosition, i, targetsLength, "#e9ff00", isArticleToKeyword, selectedNode.id, targetId);
                if (line) allLines.push(line);
            }
        }
        if (isArticle) {
            const relatedArticles = getRelatedArticles(selectedNode.id);
            const selectedArticleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][selectedNode.id] || [];
            const selectedKeywordsSet = new Set(selectedArticleKeywords);
            let whiteLineIndex = 0;
            let totalWhiteLines = 0;
            for(let i = 0; i < relatedArticles.length; i++){
                const relatedArticleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][relatedArticles[i]] || [];
                totalWhiteLines += relatedArticleKeywords.filter((kw)=>selectedKeywordsSet.has(kw)).length;
            }
            for(let i = 0; i < relatedArticles.length; i++){
                const relatedArticleId = relatedArticles[i];
                const relatedArticlePos = positions[relatedArticleId];
                if (!relatedArticlePos) continue;
                const relatedArticleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][relatedArticleId] || [];
                const sharedKeywords = relatedArticleKeywords.filter((kw)=>selectedKeywordsSet.has(kw));
                for(let j = 0; j < sharedKeywords.length; j++){
                    const sharedKeywordId = sharedKeywords[j];
                    const keywordPos = positions[sharedKeywordId];
                    if (!keywordPos) continue;
                    const relatedArticleStartPos = getCrossPosition(relatedArticleId, relatedArticlePos, camera);
                    const keywordEndPos = getCrossPosition(sharedKeywordId, keywordPos, camera);
                    const line = createLine(relatedArticleStartPos, keywordEndPos, targetsLength + whiteLineIndex, targetsLength + totalWhiteLines, "#444444", true, relatedArticleId, sharedKeywordId);
                    if (line) {
                        allLines.push(line);
                        whiteLineIndex++;
                    }
                }
            }
        }
        return allLines;
    }, [
        selectedNode?.id,
        updateTrigger,
        linesVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedNode?.id && linesVisible && lines.length === 0) {
            requestAnimationFrame(()=>{
                setUpdateTrigger((prev)=>prev + 1);
            });
        }
    }, [
        selectedNode,
        linesVisible,
        lines.length
    ]);
    if (!lines.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        frustumCulled: false,
        children: lines
    }, void 0, false, {
        fileName: "[project]/components/connectionControler.jsx",
        lineNumber: 754,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = ConnectionController;
}),
"[project]/components/utils/ElementOpacityController.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementOpacityController",
    ()=>ElementOpacityController,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
function ElementOpacityController() {
    const { camera, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const [secondaryHighlightedArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('secondaryHighlightedArticlesStore', []);
    const isUserMovingCameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const opacityStoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        opacityStoreRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('elementOpacityStore');
        if (!opacityStoreRef.current) {
            const { createStore } = __turbopack_context__.r("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
            opacityStoreRef.current = createStore('elementOpacityStore', {});
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleStart = ()=>{
            isUserMovingCameraRef.current = true;
            animationInProgressRef.current = false;
        };
        const handleChange = ()=>{};
        const controls = gl.domElement.parentElement?.querySelector('canvas')?.__r3f?.controls;
        if (controls) {
            controls.addEventListener('start', handleStart);
            controls.addEventListener('change', handleChange);
            return ()=>{
                controls.removeEventListener('start', handleStart);
                controls.removeEventListener('change', handleChange);
            };
        }
        const canvas = gl.domElement;
        const handleMouseDown = ()=>{
            isUserMovingCameraRef.current = true;
            animationInProgressRef.current = false;
        };
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('touchstart', handleMouseDown, {
            passive: true
        });
        return ()=>{
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('touchstart', handleMouseDown);
        };
    }, [
        gl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!opacityStoreRef.current) return;
        if (!selectedNode?.id || !Array.isArray(highlightedNodes) || highlightedNodes.length === 0) {
            opacityStoreRef.current.setState({});
            return;
        }
        const secondaryHighlightedSet = new Set(Array.isArray(secondaryHighlightedArticles) ? secondaryHighlightedArticles : []);
        const opacityMap = {};
        const highlightedSet = new Set(highlightedNodes);
        const selectedId = selectedNode?.id;
        const ARTICLE_IDS = Array.from({
            length: 29
        }, (_, index)=>`A${index + 1}`);
        const KEYWORD_IDS = Array.from({
            length: 54
        }, (_, index)=>`G${index + 1}`);
        const directlyConnected = selectedId ? new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedId)) : new Set();
        directlyConnected.add(selectedId);
        [
            ...ARTICLE_IDS,
            ...KEYWORD_IDS
        ].forEach((nodeId)=>{
            const isKeyword = nodeId.startsWith('G');
            if (nodeId === selectedId) {
                opacityMap[nodeId] = 1.0;
            } else if (highlightedSet.has(nodeId)) {
                if (directlyConnected.has(nodeId)) {
                    opacityMap[nodeId] = 1.0;
                } else {
                    opacityMap[nodeId] = isKeyword ? 0.3 : 0.4;
                }
            } else if (secondaryHighlightedSet.has(nodeId)) {
                opacityMap[nodeId] = isKeyword ? 0.3 : 0.4;
            } else {
                opacityMap[nodeId] = isKeyword ? 0.3 : 0.4;
            }
        });
        opacityStoreRef.current.setState(opacityMap);
    }, [
        selectedNode,
        highlightedNodes,
        secondaryHighlightedArticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!animationInProgressRef.current) {
            isUserMovingCameraRef.current = false;
        }
    }, [
        selectedNode
    ]);
    return null;
}
const __TURBOPACK__default__export__ = ElementOpacityController;
}),
"[project]/components/treeComponents/styles.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomButtons": "styles-module-scss-module__dJBWzG__bottomButtons",
  "bottom_bar_wrapper": "styles-module-scss-module__dJBWzG__bottom_bar_wrapper",
  "bottombarbutton": "styles-module-scss-module__dJBWzG__bottombarbutton",
  "box_wrapper": "styles-module-scss-module__dJBWzG__box_wrapper",
  "button": "styles-module-scss-module__dJBWzG__button",
  "button_wrapper": "styles-module-scss-module__dJBWzG__button_wrapper",
  "camera_modal": "styles-module-scss-module__dJBWzG__camera_modal",
  "camera_modal_1": "styles-module-scss-module__dJBWzG__camera_modal_1",
  "center_button": "styles-module-scss-module__dJBWzG__center_button",
  "full": "styles-module-scss-module__dJBWzG__full",
  "half": "styles-module-scss-module__dJBWzG__half",
  "highlightedTerm": "styles-module-scss-module__dJBWzG__highlightedTerm",
  "isDesktop": "styles-module-scss-module__dJBWzG__isDesktop",
  "isMobile": "styles-module-scss-module__dJBWzG__isMobile",
  "left": "styles-module-scss-module__dJBWzG__left",
  "left_wrapper": "styles-module-scss-module__dJBWzG__left_wrapper",
  "modal": "styles-module-scss-module__dJBWzG__modal",
  "optionsbutton": "styles-module-scss-module__dJBWzG__optionsbutton",
  "right": "styles-module-scss-module__dJBWzG__right",
  "small_button": "styles-module-scss-module__dJBWzG__small_button",
  "stoprotationbutton": "styles-module-scss-module__dJBWzG__stoprotationbutton",
  "submenu": "styles-module-scss-module__dJBWzG__submenu",
  "supplementbutton": "styles-module-scss-module__dJBWzG__supplementbutton",
  "title": "styles-module-scss-module__dJBWzG__title",
  "topbar_wrapper": "styles-module-scss-module__dJBWzG__topbar_wrapper",
  "topbar_wrapper_mobile": "styles-module-scss-module__dJBWzG__topbar_wrapper_mobile",
  "visible": "styles-module-scss-module__dJBWzG__visible",
  "wrapper": "styles-module-scss-module__dJBWzG__wrapper",
});
}),
"[project]/components/roomModal/style.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "close_button": "style-module-scss-module__CB8I9q__close_button",
  "content": "style-module-scss-module__CB8I9q__content",
  "modal_wrapper": "style-module-scss-module__CB8I9q__modal_wrapper",
});
}),
"[project]/components/roomModal/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/roomModal/style.module.scss [app-ssr] (css module)");
'use client';
;
;
;
;
function RoomModal({ close }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [infoData, setInfoData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const loadInfoData = async ()=>{
            try {
                const response = await fetch('/data/info.json');
                if (!response.ok) {
                    throw new Error('Failed to load info data');
                }
                const data = await response.json();
                const routeKey = pathname === '/' ? '/' : pathname;
                const routeInfo = data[routeKey] || data['/living-continuity'];
                setInfoData(routeInfo);
            } catch (error) {
                console.error('Error loading info data:', error);
                setInfoData({
                    title: "Welcome",
                    content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
                });
            } finally{
                setLoading(false);
            }
        };
        loadInfoData();
    }, [
        pathname
    ]);
    // Helper function to render markdown-style emphasis
    const renderText = (text)=>{
        if (!text) return null;
        // Convert *text* to <em>text</em>
        const parts = text.split(/(\*[^*]+\*)/g);
        return parts.map((part, index)=>{
            if (part.startsWith('*') && part.endsWith('*')) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: part.slice(1, -1)
                }, index, false, {
                    fileName: "[project]/components/roomModal/index.jsx",
                    lineNumber: 47,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: part
            }, index, false, {
                fileName: "[project]/components/roomModal/index.jsx",
                lineNumber: 49,
                columnNumber: 14
            }, this);
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/components/roomModal/index.jsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/roomModal/index.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/roomModal/index.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    if (!infoData) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal_wrapper,
            children: [
                close && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].close_button,
                    onClick: close,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "3",
                                y1: "3",
                                x2: "21",
                                y2: "21",
                                stroke: "#000000",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/roomModal/index.jsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "21",
                                y1: "3",
                                x2: "3",
                                y2: "21",
                                stroke: "#000000",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/roomModal/index.jsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/roomModal/index.jsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/roomModal/index.jsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: infoData.content && (typeof infoData.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: renderText(infoData.content)
                    }, void 0, false, {
                        fileName: "[project]/components/roomModal/index.jsx",
                        lineNumber: 103,
                        columnNumber: 15
                    }, this) : Array.isArray(infoData.content) ? infoData.content.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: section.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: renderText(section.text)
                            }, void 0, false, {
                                fileName: "[project]/components/roomModal/index.jsx",
                                lineNumber: 107,
                                columnNumber: 36
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/roomModal/index.jsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, this)) : null)
                }, void 0, false, {
                    fileName: "[project]/components/roomModal/index.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/roomModal/index.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/components/sceneModal/style.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "camera_modal": "style-module-scss-module__ALzo2W__camera_modal",
  "camera_wrapper": "style-module-scss-module__ALzo2W__camera_wrapper",
  "item": "style-module-scss-module__ALzo2W__item",
  "link": "style-module-scss-module__ALzo2W__link",
});
}),
"[project]/components/sceneModal/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SceneModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sceneModal/style.module.scss [app-ssr] (css module)");
;
;
;
function SceneModal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].camera_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].camera_modal} button`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://livingcontinuity.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Digital Exhibition"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://glossary.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Glossary"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://kitofparts.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Kit of Parts - Blended Home"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Kit of Parts - Blended Park (soon)"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://supplement.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Supplement"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "http://toolkit.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            children: "Toolkit"
                        }, void 0, false, {
                            fileName: "[project]/components/sceneModal/index.jsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sceneModal/index.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sceneModal/index.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sceneModal/index.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/components/treeComponents/topbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/treeComponents/styles.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/roomModal/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sceneModal/index.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function TopBar({ title }) {
    const [isDisplay, setDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (title == "Title Of The Entry" || title == "") {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }, [
        title
    ]);
    const [modalIsOpen, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    function handleOpen() {
        setOpen(!modalIsOpen);
    }
    const [sceneOpen, setSceneOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "isDesktop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbar_wrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/living-continuity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} button`,
                                children: "living continuity"
                            }, void 0, false, {
                                fileName: "[project]/components/treeComponents/topbar.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/treeComponents/topbar.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} button`,
                            children: !(title == "Title Of The Entry" || title == "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/treeComponents/topbar.jsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/treeComponents/topbar.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} button`,
                            children: "Living Continuity"
                        }, void 0, false, {
                            fileName: "[project]/components/treeComponents/topbar.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/treeComponents/topbar.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/treeComponents/topbar.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "isMobile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbar_wrapper} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbar_wrapper_mobile}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
                            onClick: ()=>setSceneOpen(!sceneOpen),
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Toggle scene modal",
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter' || e.key === ' ') setSceneOpen(!sceneOpen);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].full} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} button full_button`,
                                    children: "living continuity"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${sceneOpen ? 'closed' : 'open'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/treeComponents/topbar.jsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].full} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} button full_button`,
                                    children: "Living Continuity"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].half} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button} button`,
                                    onClick: ()=>{
                                        handleOpen();
                                    },
                                    "aria-label": "Open info modal",
                                    children: "info"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/treeComponents/topbar.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} button`,
                            children: !(title == "Title Of The Entry" || title == "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/treeComponents/topbar.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/treeComponents/topbar.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/treeComponents/topbar.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/treeComponents/topbar.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalIsOpen,
                contentLabel: "Example Modal",
                closeTimeoutMS: 150,
                shouldCloseOnOverlayClick: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    close: handleOpen
                }, void 0, false, {
                    fileName: "[project]/components/treeComponents/topbar.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/treeComponents/topbar.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/livingContinuityButton/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const LivingContinuityButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "living_continuity_button",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "black_box",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "main_text",
                    children: "LIVING CONTINUITY"
                }, void 0, false, {
                    fileName: "[project]/components/livingContinuityButton/index.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/livingContinuityButton/index.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "enter_text",
                children: "enter"
            }, void 0, false, {
                fileName: "[project]/components/livingContinuityButton/index.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/livingContinuityButton/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
LivingContinuityButton.displayName = 'LivingContinuityButton';
const __TURBOPACK__default__export__ = LivingContinuityButton;
}),
"[project]/components/utils/suppressTextureErrors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "suppressTextureErrors",
    ()=>suppressTextureErrors
]);
function suppressTextureErrors() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const originalError = undefined;
}
}),
"[project]/components/utils/d3DataManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createForceSimulation",
    ()=>createForceSimulation,
    "getConnectedLinks",
    ()=>getConnectedLinks,
    "getConnectedNodeIds",
    ()=>getConnectedNodeIds,
    "processNodeData",
    ()=>processNodeData,
    "transitionNodePosition",
    ()=>transitionNodePosition,
    "updateNodePositions",
    ()=>updateNodePositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-ssr] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-ssr] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-ssr] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-ssr] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-ssr] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-transition/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript) <export cubicInOut as easeCubicInOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/radialPosition.js [app-ssr] (ecmascript)");
;
;
const BASE_RADIUS = 15;
function processNodeData(jsonData) {
    const allNodes = [];
    const links = [];
    const nodeMap = new Map();
    const articlesCount = jsonData.articles?.length || 0;
    const glossaryCount = jsonData.glossary?.length || 0;
    const totalNodes = articlesCount + glossaryCount;
    if (jsonData.articles) {
        jsonData.articles.forEach((article, arrayIndex)=>{
            const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadialPosition"])(arrayIndex, totalNodes, BASE_RADIUS, articlesCount, glossaryCount);
            const node = {
                ...article,
                type: 'article',
                position,
                x: position[0],
                y: position[1],
                z: position[2],
                vx: 0,
                vy: 0,
                vz: 0,
                fx: null,
                fy: null,
                fz: null
            };
            allNodes.push(node);
            nodeMap.set(article.id, node);
        });
    }
    if (jsonData.glossary) {
        jsonData.glossary.forEach((keyword, arrayIndex)=>{
            const globalIndex = articlesCount + arrayIndex;
            const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadialPosition"])(globalIndex, totalNodes, BASE_RADIUS, articlesCount, glossaryCount);
            const node = {
                ...keyword,
                type: 'glossary',
                position,
                x: position[0],
                y: position[1],
                z: position[2],
                vx: 0,
                vy: 0,
                vz: 0,
                fx: null,
                fy: null,
                fz: null
            };
            allNodes.push(node);
            nodeMap.set(keyword.id, node);
        });
    }
    allNodes.forEach((node)=>{
        if (node.connections && node.connections.length > 0) {
            node.connections.forEach((targetId)=>{
                const target = nodeMap.get(targetId);
                if (target) {
                    links.push({
                        source: node.id,
                        target: targetId,
                        sourceNode: node,
                        targetNode: target
                    });
                }
            });
        }
    });
    return {
        nodes: allNodes,
        links,
        nodeMap
    };
}
function createForceSimulation(nodes, links, options = {}) {
    const { chargeStrength = -300, linkDistance = 50, linkStrength = 0.1, centerStrength = 0.1 } = options;
    const simulation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"](nodes).force('link', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"](links).id((d)=>d.id).distance(linkDistance).strength(linkStrength)).force('charge', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"]().strength(chargeStrength)).force('center', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"](0, 0).strength(centerStrength)).force('collision', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"]().radius((d)=>d.type === 'article' ? 3 : 2));
    return simulation;
}
function getConnectedNodeIds(nodeId, links) {
    return links.filter((link)=>link.source === nodeId || link.target === nodeId).map((link)=>link.source === nodeId ? link.target : link.source);
}
function getConnectedLinks(nodeId, links) {
    return links.filter((link)=>link.source === nodeId || link.target === nodeId);
}
function updateNodePositions(nodes) {
    nodes.forEach((node)=>{
        if (node.x !== undefined && node.y !== undefined) {
            node.position = [
                node.x,
                node.y,
                node.z || 0
            ];
        }
    });
}
function transitionNodePosition(node, targetPosition, duration = 1000) {
    const [targetX, targetY, targetZ] = targetPosition;
    const startX = node.x || node.position[0];
    const startY = node.y || node.position[1];
    const startZ = node.z || node.position[2];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transition"]().duration(duration).ease(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__["easeCubicInOut"]).tween('position', function() {
        const interpolateX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startX, targetX);
        const interpolateY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startY, targetY);
        const interpolateZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startZ, targetZ);
        return function(t) {
            node.x = interpolateX(t);
            node.y = interpolateY(t);
            node.z = interpolateZ(t);
            node.position = [
                node.x,
                node.y,
                node.z
            ];
        };
    });
}
}),
"[project]/components/treeModals/archiveModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArchiveModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const slugifyTitle = (title)=>{
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};
function ArchiveModal({ title, author, content, img, authorBio, keywords, connect1, connect2, connect3, connect4, photoCredit, closeModal }) {
    const [adapt, setAdapt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("adapt", false);
    const [imageOrientation, setImageOrientation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [imageLoaded, setImageLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleImageLoad = (e)=>{
        const img = e.target;
        const isLandscape = img.naturalWidth > img.naturalHeight;
        setImageOrientation(isLandscape ? 'isLandscape' : 'isPortrait');
        setImageLoaded(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal_wrapper",
            children: [
                closeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "close_button",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
                        onClick: closeModal
                    }, void 0, false, {
                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content",
                    children: [
                        img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: `image_wrapper ${imageOrientation || ''} ${imageLoaded ? 'image_loaded' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img,
                                    alt: "",
                                    className: "image_placeholder",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img,
                                    alt: title,
                                    className: imageLoaded ? 'image_loaded' : 'image_loading',
                                    onLoad: handleImageLoad,
                                    onError: (e)=>{
                                        e.target.style.display = 'none';
                                        setImageLoaded(true);
                                        console.warn('Failed to load image:', img);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "photo_credit",
                                    children: [
                                        "Photo Credit: ",
                                        photoCredit || author
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "author",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "By"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 78,
                                    columnNumber: 44
                                }, this),
                                " ",
                                author
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 78,
                            columnNumber: 22
                        }, this),
                        content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text",
                            dangerouslySetInnerHTML: {
                                __html: content
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        authorBio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "section_label",
                                    children: "Author Bio:"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-1",
                                    dangerouslySetInnerHTML: {
                                        __html: authorBio.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br/>')
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const hasConnections = connect1 || connect2 || connect3 || connect4;
                            let keywordsToDisplay = [];
                            if (keywords) {
                                if (Array.isArray(keywords)) {
                                    keywordsToDisplay = keywords;
                                } else if (typeof keywords === 'string') {
                                    keywordsToDisplay = keywords.split(',').map((k)=>k.trim()).filter(Boolean);
                                }
                            }
                            const hasKeywordsToShow = keywordsToDisplay.length > 0;
                            if (!hasKeywordsToShow && !hasConnections) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "section_label",
                                        children: "Keywords:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    hasKeywordsToShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "connections",
                                        children: keywordsToDisplay.map((keyword, index)=>{
                                            const keywordText = keyword && typeof keyword === 'object' ? keyword.text || keyword : keyword;
                                            let keywordLink = keyword && typeof keyword === 'object' && keyword.link !== undefined ? keyword.link : null;
                                            if (keywordLink && keywordLink.includes('#G')) {
                                                const idMatch = keywordLink.match(/#(G\d+)/);
                                                if (idMatch) {
                                                    const keywordId = idMatch[1];
                                                    keywordLink = `/glossary#${slugifyTitle(keywordText)}`;
                                                }
                                            } else if (keywordLink && keywordLink.startsWith('/glossary#')) {
                                                const hashPart = keywordLink.split('#')[1];
                                                if (hashPart && hashPart.match(/^G\d+$/)) {
                                                    keywordLink = `/glossary#${slugifyTitle(keywordText)}`;
                                                }
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    keywordLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: keywordLink,
                                                        className: "item_link",
                                                        onClick: closeModal,
                                                        children: keywordText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "item",
                                                        children: keywordText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 29
                                                    }, this),
                                                    index < keywordsToDisplay.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "comma",
                                                        children: ", "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 68
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                lineNumber: 140,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this) : hasConnections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "connections",
                                        children: [
                                            connect1,
                                            connect2,
                                            connect3,
                                            connect4
                                        ].filter(Boolean).map((item, index, array)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "item",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 25
                                                    }, this),
                                                    index < array.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "comma",
                                                        children: ", "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                lineNumber: 162,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this);
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/treeModals/archiveModal.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/components/utils/whiteMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWhiteMaterial",
    ()=>createWhiteMaterial,
    "createWhiteWireframeMaterial",
    ()=>createWhiteWireframeMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
function createWhiteMaterial() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        metalness: 0.1,
        roughness: 0.8
    });
}
function createWhiteWireframeMaterial() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.7
    });
}
}),
"[project]/components/utils/useConnectionHighlight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectionHighlight",
    ()=>useConnectionHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
function useConnectionHighlight(nodeId, isActive) {
    const [, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const hasConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectedNodes"])(nodeId).length > 0;
    const wasActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nodeIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(nodeId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        nodeIdRef.current = nodeId;
    }, [
        nodeId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!nodeId) {
            return undefined;
        }
        if (isActive && !wasActiveRef.current) {
            requestAnimationFrame(()=>{
                setSelectedNode({
                    id: nodeId,
                    ts: Date.now()
                });
            });
        }
        if (!isActive && wasActiveRef.current) {
            requestAnimationFrame(()=>{
                setSelectedNode((prev)=>{
                    if (prev?.id === nodeIdRef.current) {
                        return null;
                    }
                    return prev;
                });
            });
        }
        wasActiveRef.current = isActive;
        return ()=>{
            if (wasActiveRef.current && nodeIdRef.current === nodeId) {
                requestAnimationFrame(()=>{
                    setSelectedNode((prev)=>{
                        if (prev?.id === nodeIdRef.current) {
                            return null;
                        }
                        return prev;
                    });
                });
            }
        };
    }, [
        isActive,
        nodeId,
        setSelectedNode
    ]);
}
}),
"[project]/components/utils/useShouldShowTitle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShouldShowTitle",
    ()=>useShouldShowTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-ssr] (ecmascript) <locals>");
;
;
;
function useShouldShowTitle(nodeId) {
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodeId || !Array.isArray(highlightedNodes)) {
            return false;
        }
        return highlightedNodes.includes(nodeId);
    }, [
        nodeId,
        highlightedNodes
    ]);
}
}),
"[project]/components/utils/LoadingStateManager.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completeLoading",
    ()=>completeLoading,
    "default",
    ()=>__TURBOPACK__default__export__,
    "initializeLoadingState",
    ()=>initializeLoadingState,
    "markNodeLoaded",
    ()=>markNodeLoaded,
    "useLoadingState",
    ()=>useLoadingState,
    "useNodeVisibility",
    ()=>useNodeVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function useLoadingState() {
    const [loadingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('loadingState', {
        nodesLoaded: 0,
        totalNodes: 0,
        isLoading: true,
        nodesVisible: []
    });
    return loadingState;
}
function useNodeVisibility(nodeId, index, totalNodes) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('loadingState', {
        nodesLoaded: 0,
        totalNodes: 0,
        isLoading: true,
        nodesVisible: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const baseDelay = 50;
        const staggerDelay = index * baseDelay;
        const maxDelay = totalNodes * baseDelay;
        if (!loadingState.isLoading && loadingState.totalNodes > 0) {
            const timer = setTimeout(()=>{
                setIsVisible(true);
                const fadeDuration = 800;
                const startTime = Date.now();
                const animate = ()=>{
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / fadeDuration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setOpacity(eased);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                animate();
            }, staggerDelay);
            return ()=>clearTimeout(timer);
        }
    }, [
        loadingState.isLoading,
        loadingState.totalNodes,
        index,
        totalNodes
    ]);
    return {
        isVisible,
        opacity: Math.max(opacity, 0.1)
    };
}
function initializeLoadingState(totalNodes) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState({
            nodesLoaded: 0,
            totalNodes,
            isLoading: true,
            nodesVisible: []
        });
    }
}
function completeLoading() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState((prev)=>({
                ...prev,
                isLoading: false
            }));
    }
}
function markNodeLoaded(nodeId) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState((prev)=>({
                ...prev,
                nodesLoaded: prev.nodesLoaded + 1,
                nodesVisible: [
                    ...prev.nodesVisible || [],
                    nodeId
                ]
            }));
    }
}
const __TURBOPACK__default__export__ = {
    useLoadingState,
    useNodeVisibility,
    initializeLoadingState,
    completeLoading,
    markNodeLoaded
};
}),
"[project]/components/templates/ArticleNodeTemplate.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeModals/archiveModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/whiteMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useConnectionHighlight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useShouldShowTitle.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../utils/RotatingImage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ArticleNodeWithModel({ nodeData, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])(nodeData.modelPath);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeContent, {
        nodeData: nodeData,
        nodes: nodes,
        materials: materials,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
function ArticleNodeWithoutModel({ nodeData, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeContent, {
        nodeData: nodeData,
        nodes: {},
        materials: {},
        ...props
    }, void 0, false, {
        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function ArticleNodeContent({ nodeData, nodes, materials, showAllLines, props, setTitle, setDefault, selectedComponent }) {
    const objectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [linesActive, setLinesActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clicked, setClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clickCount, setClickCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [modalIsOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [Store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${nodeData.id}Store`, false);
    const isSelectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const position = nodeData.position || [
        0,
        0,
        0
    ];
    const centerPoint = position;
    const whiteMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWhiteMaterial"])(), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectionHighlight"])(nodeData.id, linesActive);
    const shouldShowTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useShouldShowTitle"])(nodeData.id);
    const [opacityMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('elementOpacityStore', {});
    const opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const [secondaryHighlightedArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('secondaryHighlightedArticlesStore', []);
    const nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
    const totalNodes = 83;
    const { isVisible, opacity: loadingOpacity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNodeVisibility"])(nodeData.id, nodeIndex, totalNodes);
    const isSecondaryHighlighted = secondaryHighlightedArticles?.includes(nodeData.id);
    const finalOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isVisible) return 0;
        const baseOpacity = opacity * loadingOpacity;
        return baseOpacity;
    }, [
        isVisible,
        opacity,
        loadingOpacity
    ]);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const isDimmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return selectedNode && selectedNode.id !== nodeData.id && !highlightedNodes?.includes(nodeData.id) && !isSecondaryHighlighted;
    }, [
        selectedNode,
        nodeData.id,
        highlightedNodes,
        isSecondaryHighlighted
    ]);
    const isHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return selectedNode?.id === nodeData.id || highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G');
    }, [
        selectedNode,
        nodeData.id,
        highlightedNodes
    ]);
    const articleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isDimmed) {
            return [
                10.8 * 0.6,
                14.4 * 0.6,
                1
            ];
        }
        if (isHighlighted) {
            return [
                10.8 * 1.3,
                14.4 * 1.3,
                1
            ];
        }
        return [
            10.8,
            14.4,
            1
        ];
    }, [
        isDimmed,
        isHighlighted
    ]);
    const [, setHighlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const [cameraInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelectingRef.current) {
            return;
        }
        if (selectedNode && selectedNode.id !== nodeData.id && linesActive) {
            requestAnimationFrame(()=>{
                if (!isSelectingRef.current) {
                    setClickCount(0);
                    setClicked(false);
                    setLinesActive(false);
                    setStore(false);
                }
            });
        }
    }, [
        selectedNode,
        linesActive,
        nodeData.id,
        setStore
    ]);
    function handleOpen() {
        setOpen(!modalIsOpen);
    }
    const [modelState, setModelState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!nodeData.connections || nodeData.connections.length === 0) {
            setModelState(false);
            return;
        }
        const checkConnections = ()=>{
            const { getStore } = __turbopack_context__.r("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
            const anyActive = nodeData.connections.some((connId)=>{
                try {
                    const store = getStore(`${connId}Store`, false);
                    return store === true;
                } catch (e) {
                    return false;
                }
            });
            setModelState(anyActive);
        };
        checkConnections();
        const interval = setInterval(checkConnections, 500);
        return ()=>clearInterval(interval);
    }, [
        nodeData.connections
    ]);
    function handleCloseModal() {
        setOpen(false);
        setDefault();
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setStore(false);
        if (window.location.hash) {
            window.history.pushState(null, '', window.location.pathname);
        }
    }
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e) {
            e.stopPropagation();
        }
        setClickCount((prev)=>{
            const newCount = prev === 0 ? 1 : 0;
            if (newCount === 1) {
                isSelectingRef.current = true;
                requestAnimationFrame(()=>{
                    setClicked(true);
                    setLinesActive(true);
                    setStore(true);
                    if (setTitle) setTitle();
                    setTimeout(()=>{
                        isSelectingRef.current = false;
                    }, 100);
                });
            } else {
                setClicked(false);
                setLinesActive(false);
                setDefault();
                setStore(false);
            }
            return newCount;
        });
    }, [
        setStore,
        setTitle,
        setDefault
    ]);
    // Slugify title for URL hash
    const slugifyTitle = (title)=>{
        if (!title) return '';
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    function handleReadClick(e) {
        e.stopPropagation();
        setOpen(true);
        if (nodeData.title) {
            const hash = slugifyTitle(nodeData.title);
            window.history.pushState(null, '', `#${hash}`);
        }
    }
    function closeAll() {
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setDefault();
        setStore(false);
    }
    const handleCloseCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.stopPropagation();
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setStore(false);
        setSelectedNode(null);
        setHighlightedNodes([]);
        if (setDefault) setDefault();
    }, [
        setStore,
        setSelectedNode,
        setHighlightedNodes,
        setDefault
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (clickCount === 1) {
            setLinesActive(true);
            if (setTitle) setTitle();
            setStore(true);
        }
    }, [
        clicked,
        setTitle,
        setStore
    ]);
    // Handle hash on page load - open modal if hash matches article title
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const hash = undefined;
        const articleHash = undefined;
    }, [
        nodeData.title,
        modalIsOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ...props,
            dispose: null,
            frustumCulled: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: position,
                scale: [
                    0.5,
                    0.5,
                    0.5
                ],
                onClick: handleClick,
                opacity: finalOpacity,
                ref: objectRef,
                className: "articleNodeGroup",
                frustumCulled: false,
                children: [
                    !modelState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingImage, {
                        imageUrl: nodeData.imageUrl,
                        position: [
                            0,
                            0,
                            0
                        ],
                        scale: articleScale,
                        tiltAmount: 0.15,
                        opacity: finalOpacity,
                        faceCamera: isHighlighted || isSecondaryHighlighted,
                        showCross: selectedNode?.id === nodeData.id && !isSecondaryHighlighted,
                        title: nodeData.title,
                        showTitle: selectedNode?.id === nodeData.id || highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G'),
                        showReadButton: selectedNode?.id === nodeData.id || highlightedNodes?.includes(nodeData.id) && selectedNode?.id?.startsWith('G'),
                        onReadClick: handleReadClick,
                        onCloseCross: handleCloseCross,
                        onClick: handleClick,
                        nodeId: nodeData.id,
                        highlightState: {
                            isSelected: selectedNode?.id === nodeData.id,
                            isHighlighted: highlightedNodes?.includes(nodeData.id),
                            isSecondaryHighlighted: isSecondaryHighlighted,
                            hasSelection: !!selectedNode
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: modalIsOpen,
                            contentLabel: "Article Modal",
                            className: "archive-modal-content",
                            overlayClassName: "archive-modal-overlay",
                            bodyOpenClassName: "archive-modal-open",
                            htmlOpenClassName: "archive-modal-open",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                closeModal: ()=>handleCloseModal(),
                                connect1: nodeData.connectionKeywords?.[0] || "",
                                connect2: nodeData.connectionKeywords?.[1] || "",
                                connect3: nodeData.connectionKeywords?.[2] || "",
                                connect4: nodeData.connectionKeywords?.[3] || "",
                                img: nodeData.imageUrl,
                                title: nodeData.title,
                                author: nodeData.author,
                                content: nodeData.content,
                                authorBio: nodeData.authorBio,
                                keywords: nodeData.keywords,
                                photoCredit: nodeData.photoCredit
                            }, void 0, false, {
                                fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const ArticleNodeTemplate = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function ArticleNodeTemplate({ nodeData, ...props }) {
    const hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';
    if (hasModel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeWithModel, {
                nodeData: nodeData,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                lineNumber: 314,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
            lineNumber: 313,
            columnNumber: 7
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeWithoutModel, {
            nodeData: nodeData,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
            lineNumber: 318,
            columnNumber: 12
        }, this);
    }
}, (prevProps, nextProps)=>{
    const prevPos = prevProps.nodeData.position || [
        0,
        0,
        0
    ];
    const nextPos = nextProps.nodeData.position || [
        0,
        0,
        0
    ];
    const positionChanged = prevPos[0] !== nextPos[0] || prevPos[1] !== nextPos[1] || prevPos[2] !== nextPos[2];
    if (positionChanged) return false;
    return prevProps.nodeData.id === nextProps.nodeData.id && prevProps.showAllLines === nextProps.showAllLines;
});
const __TURBOPACK__default__export__ = ArticleNodeTemplate;
}),
"[project]/components/templates/GlossaryNodeTemplate.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlossaryNodeTemplate",
    ()=>GlossaryNodeTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/whiteMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useConnectionHighlight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useShouldShowTitle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function GlossaryNodeWithModel({ nodeData, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])(nodeData.modelPath);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeContent, {
        nodeData: nodeData,
        nodes: nodes,
        materials: materials,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function GlossaryNodeWithoutModel({ nodeData, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeContent, {
        nodeData: nodeData,
        nodes: {},
        materials: {},
        ...props
    }, void 0, false, {
        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function GlossaryNodeContent({ nodeData, nodes, materials, showAllLines, title, active, props, setTitle, setDefault, glossaryShellComponent }) {
    const objectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [linesActive, setLinesActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clicked, setClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clickCount, setClickCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [modalIsOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isSelectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const position = nodeData.position || [
        0,
        0,
        0
    ];
    const centerPoint = position;
    const [opacityMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('elementOpacityStore', {});
    const opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
    const crossBottomOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return 1.93; // Offset downward from keyword center (matches connectionController with 0.35 scale)
    }, []);
    const nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
    const totalNodes = 83;
    const { isVisible, opacity: loadingOpacity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNodeVisibility"])(nodeData.id, nodeIndex, totalNodes);
    const finalOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isVisible) return 0;
        return opacity * loadingOpacity;
    }, [
        isVisible,
        opacity,
        loadingOpacity
    ]);
    const isDimmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const isKeyword = nodeData.id && nodeData.id.startsWith('G');
        return isKeyword && Math.abs(finalOpacity - 0.3) < 0.01;
    }, [
        finalOpacity,
        nodeData.id
    ]);
    const whiteMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWhiteMaterial"])();
        material.opacity = finalOpacity;
        material.transparent = finalOpacity < 1.0;
        return material;
    }, [
        finalOpacity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectionHighlight"])(nodeData.id, linesActive);
    const shouldShowTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useShouldShowTitle"])(nodeData.id);
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const isHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.isArray(highlightedNodes) && highlightedNodes.includes(nodeData.id);
    }, [
        highlightedNodes,
        nodeData.id
    ]);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return selectedNode?.id === nodeData.id;
    }, [
        selectedNode,
        nodeData.id
    ]);
    const [, setHighlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const isSecondaryHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return isHighlighted && !isSelected && !linesActive;
    }, [
        isHighlighted,
        isSelected,
        linesActive
    ]);
    const [clickCounter4, setClickCounter4] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${nodeData.id}Store`, false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelectingRef.current) {
            return;
        }
        if (selectedNode && selectedNode.id !== nodeData.id && linesActive) {
            requestAnimationFrame(()=>{
                if (!isSelectingRef.current) {
                    setClickCount(0);
                    setClicked(false);
                    setLinesActive(false);
                }
            });
        }
    }, [
        selectedNode,
        linesActive,
        nodeData.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials && Object.keys(materials).length > 0) {
            Object.values(materials).forEach((material)=>{
                if (material) {
                    material.opacity = finalOpacity;
                    material.transparent = finalOpacity < 1.0;
                }
            });
        }
    }, [
        finalOpacity,
        materials
    ]);
    function handleOpen() {
        setOpen(!modalIsOpen);
    }
    function handleCloseModal() {
        setOpen(false);
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
    }
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e) {
            e.stopPropagation();
        }
        isSelectingRef.current = true;
        requestAnimationFrame(()=>{
            setClicked((prev)=>!prev);
            setClickCount((prev)=>prev + 1);
            setClickCounter4(false);
            setTimeout(()=>{
                isSelectingRef.current = false;
            }, 100);
        });
    }, [
        setClickCounter4
    ]);
    function closeAll() {
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
    }
    const handleCloseCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.stopPropagation();
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setClickCounter4(false);
        setSelectedNode(null);
        setHighlightedNodes([]);
        if (setDefault) setDefault();
    }, [
        setClickCounter4,
        setSelectedNode,
        setHighlightedNodes,
        setDefault
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (clickCount === 1) {
            setLinesActive(true);
            if (setTitle) setTitle();
            setClickCounter4(true);
        } else if (clickCount === 2) {
            setLinesActive(false);
            setClickCount(0);
            if (setDefault) setDefault();
        }
    }, [
        clicked,
        setTitle,
        setDefault,
        setClickCounter4
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showAllLines) {
            setClickCount(1);
        } else if (!showAllLines) {
            setClickCount(0);
        }
    }, [
        showAllLines
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ...props,
                dispose: null,
                position: position,
                scale: [
                    1,
                    1,
                    1
                ],
                onClick: handleClick,
                ref: objectRef,
                opacity: finalOpacity,
                className: "glossaryNodeGroup",
                frustumCulled: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            0
                        ],
                        visible: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    5,
                                    2
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                transparent: true,
                                opacity: 0,
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                            }, void 0, false, {
                                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glossaryContainer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `glossaryPill ${isSelected || isHighlighted || linesActive ? 'selected' : ''} ${isSecondaryHighlighted ? 'secondaryHighlighted' : ''} ${isHighlighted || linesActive ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        handleClick();
                                    },
                                    style: {
                                        opacity: finalOpacity
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "glossaryPillTitle",
                                            children: (title || nodeData.title || "").toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        (isSelected || isHighlighted || linesActive) && nodeData.hasOpenButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "glossaryPillOpenButton",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                const slugifyTitle = (title)=>{
                                                    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                                                };
                                                const keywordSlug = slugifyTitle(nodeData.title || '');
                                                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                                ;
                                                window.location.href = `/glossary#${keywordSlug}`;
                                            },
                                            children: "OPEN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                (isSelected || isHighlighted || linesActive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `glossaryCross ${isSelected || isHighlighted || linesActive ? 'selected' : ''}`,
                                    style: {
                                        opacity: finalOpacity
                                    },
                                    onClick: handleCloseCross,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossBackground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossBorder"
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossLines",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glossaryCrossLine line1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glossaryCrossLine line2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            linesActive == true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                    points: [
                        ...position,
                        ...centerPoint
                    ],
                    color: "#ffffff",
                    lineWidth: 1
                }, void 0, false, {
                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            showAllLines == true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                    points: [
                        ...position,
                        ...centerPoint
                    ],
                    color: "#ffffff",
                    lineWidth: 1
                }, void 0, false, {
                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                    lineNumber: 263,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                lineNumber: 262,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
const GlossaryNodeTemplate = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function GlossaryNodeTemplate({ nodeData, ...props }) {
    const hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';
    if (hasModel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeWithModel, {
                nodeData: nodeData,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                lineNumber: 280,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
            lineNumber: 279,
            columnNumber: 7
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeWithoutModel, {
            nodeData: nodeData,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
            lineNumber: 284,
            columnNumber: 12
        }, this);
    }
}, (prevProps, nextProps)=>{
    const prevPos = prevProps.nodeData.position || [
        0,
        0,
        0
    ];
    const nextPos = nextProps.nodeData.position || [
        0,
        0,
        0
    ];
    const positionChanged = prevPos[0] !== nextPos[0] || prevPos[1] !== nextPos[1] || prevPos[2] !== nextPos[2];
    if (positionChanged) return false;
    return prevProps.nodeData.id === nextProps.nodeData.id && prevProps.showAllLines === nextProps.showAllLines;
});
}),
"[project]/components/utils/CameraInteractionTracker.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraInteractionTracker",
    ()=>CameraInteractionTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
;
;
function CameraInteractionTracker() {
    const [, setCameraInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false);
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const interactionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInteractingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedNode?.id) {
            setCameraInteraction(false);
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
                interactionTimeoutRef.current = null;
            }
            isInteractingRef.current = false;
        }
    }, [
        selectedNode,
        setCameraInteraction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = document.querySelector('canvas');
        if (!canvas) return;
        let dragStartPos = null;
        let isDragging = false;
        const handlePointerDown = (e)=>{
            dragStartPos = {
                x: e.clientX,
                y: e.clientY
            };
            isDragging = false;
        };
        const handlePointerMove = (e)=>{
            if (dragStartPos && !isDragging) {
                const dx = Math.abs(e.clientX - dragStartPos.x);
                const dy = Math.abs(e.clientY - dragStartPos.y);
                if (dx > 5 || dy > 5) {
                    isDragging = true;
                    isInteractingRef.current = true;
                    setCameraInteraction(true);
                    if (interactionTimeoutRef.current) {
                        clearTimeout(interactionTimeoutRef.current);
                        interactionTimeoutRef.current = null;
                    }
                }
            } else if (isDragging) {
                isInteractingRef.current = true;
                setCameraInteraction(true);
            }
        };
        const handlePointerUp = ()=>{
            if (isDragging) {
                isInteractingRef.current = false;
                if (interactionTimeoutRef.current) {
                    clearTimeout(interactionTimeoutRef.current);
                }
                interactionTimeoutRef.current = setTimeout(()=>{
                    if (!isInteractingRef.current) {
                        setCameraInteraction(false);
                    }
                }, 1500);
            }
            dragStartPos = null;
            isDragging = false;
        };
        const handleWheel = ()=>{
            isInteractingRef.current = true;
            setCameraInteraction(true);
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
            interactionTimeoutRef.current = setTimeout(()=>{
                if (!isInteractingRef.current) {
                    setCameraInteraction(false);
                }
            }, 2000);
        };
        canvas.addEventListener('pointerdown', handlePointerDown, {
            passive: true
        });
        canvas.addEventListener('pointermove', handlePointerMove, {
            passive: true
        });
        canvas.addEventListener('pointerup', handlePointerUp, {
            passive: true
        });
        canvas.addEventListener('wheel', handleWheel, {
            passive: true
        });
        return ()=>{
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('wheel', handleWheel);
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
        };
    }, [
        setCameraInteraction
    ]);
    return null;
}
}),
"[project]/components/utils/ConnectionTransitionController.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionTransitionController",
    ()=>ConnectionTransitionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
;
;
function ConnectionTransitionController() {
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const [cameraInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false);
    const prevSelectedNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const visibilityStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStore"])('connectionLinesVisibilityStore');
        if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
        }
        if (selectedNode?.id !== prevSelectedNodeRef.current?.id) {
            const isNewSelection = selectedNode?.id && !prevSelectedNodeRef.current?.id;
            const isDeselection = !selectedNode?.id && prevSelectedNodeRef.current?.id;
            if (isNewSelection) {
                visibilityStore.setState(false);
                transitionTimeoutRef.current = setTimeout(()=>{
                    visibilityStore.setState(true);
                }, 1500);
            } else if (isDeselection) {
                visibilityStore.setState(false);
                transitionTimeoutRef.current = setTimeout(()=>{
                    visibilityStore.setState(true);
                }, 1000);
            }
            prevSelectedNodeRef.current = selectedNode;
        }
        if (cameraInteraction && selectedNode?.id) {
            visibilityStore.setState(false);
            transitionTimeoutRef.current = setTimeout(()=>{
                visibilityStore.setState(true);
            }, 1200);
        }
        return ()=>{
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, [
        selectedNode,
        cameraInteraction
    ]);
    return null;
}
}),
"[project]/components/utils/ModelPreloader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preloadAllModels",
    ()=>preloadAllModels,
    "preloadGLBModel",
    ()=>preloadGLBModel,
    "preloadImages",
    ()=>preloadImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
;
const preloadedModels = new Set();
function preloadGLBModel(path) {
    if (!path || preloadedModels.has(path)) {
        return;
    }
    preloadedModels.add(path);
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload(path);
    } catch (error) {
        console.warn(`Failed to preload model ${path}:`, error);
        preloadedModels.delete(path);
    }
}
function preloadAllModels(nodeData) {
    if (!nodeData) return;
    if (nodeData.articles) {
        nodeData.articles.forEach((article)=>{
            if (article.modelPath && article.modelPath.trim() !== '') {
                preloadGLBModel(article.modelPath);
            }
        });
    }
    if (nodeData.glossary) {
        nodeData.glossary.forEach((glossary)=>{
            if (glossary.modelPath && glossary.modelPath.trim() !== '') {
                preloadGLBModel(glossary.modelPath);
            }
        });
    }
}
function preloadImages(nodeData) {
    if (!nodeData) return Promise.resolve();
    const imagePromises = [];
    const batchSize = 6;
    const articles = nodeData.articles || [];
    for(let i = 0; i < articles.length; i += batchSize){
        const batch = articles.slice(i, i + batchSize);
        batch.forEach((article)=>{
            if (article.imageUrl) {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                const promise = new Promise((resolve)=>{
                    img.onload = resolve;
                    img.onerror = resolve;
                    img.src = article.imageUrl;
                });
                imagePromises.push(promise);
            }
        });
        if (i + batchSize < articles.length) {
            imagePromises.push(new Promise((resolve)=>setTimeout(resolve, 10)));
        }
    }
    return Promise.allSettled(imagePromises);
}
}),
"[project]/components/utils/WalkThroughController.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalkThroughController",
    ()=>WalkThroughController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
;
;
function WalkThroughController({ nodeData, processedData, isActive }) {
    const [, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentArticleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visitedArticlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive || !nodeData || !processedData) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (!isActive) {
                setSelectedNode(null);
                currentArticleRef.current = null;
                visitedArticlesRef.current.clear();
            }
            return;
        }
        const allArticles = nodeData.articles || [];
        const allGlossary = nodeData.glossary || [];
        const allNodes = [
            ...allArticles,
            ...allGlossary
        ];
        if (allNodes.length === 0) return;
        const getRandomNode = ()=>{
            const availableNodes = allNodes.filter((node)=>{
                if (visitedArticlesRef.current.size >= allNodes.length) {
                    return true;
                }
                return !visitedArticlesRef.current.has(node.id);
            });
            if (availableNodes.length === 0) {
                visitedArticlesRef.current.clear();
                return allNodes[Math.floor(Math.random() * allNodes.length)];
            }
            return availableNodes[Math.floor(Math.random() * availableNodes.length)];
        };
        const visitNode = (nodeItem)=>{
            setSelectedNode({
                id: nodeItem.id,
                ts: Date.now()
            });
        };
        const nextNode = ()=>{
            const randomNode = getRandomNode();
            if (randomNode) {
                currentArticleRef.current = randomNode;
                visitedArticlesRef.current.add(randomNode.id);
                visitNode(randomNode);
            }
        };
        if (!currentArticleRef.current) {
            currentArticleRef.current = allNodes[Math.floor(Math.random() * allNodes.length)];
            visitedArticlesRef.current.add(currentArticleRef.current.id);
            visitNode(currentArticleRef.current);
        }
        intervalRef.current = setInterval(()=>{
            nextNode();
        }, 8000);
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [
        isActive,
        nodeData,
        processedData,
        setSelectedNode
    ]);
    return null;
}
}),
"[project]/components/utils/CameraFOVController.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraFOVController",
    ()=>CameraFOVController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function CameraFOVController() {
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const [highlightedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []);
    const hasHighlightedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return !!selectedNode || Array.isArray(highlightedNodes) && highlightedNodes.length > 0;
    }, [
        selectedNode,
        highlightedNodes
    ]);
    const targetFOV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return hasHighlightedElements ? 42 : 50;
    }, [
        hasHighlightedElements
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (camera && camera.isPerspectiveCamera) {
            const currentFOV = camera.fov;
            const difference = targetFOV - currentFOV;
            if (Math.abs(difference) > 0.1) {
                camera.fov += difference * 0.1;
                camera.updateProjectionMatrix();
            } else if (Math.abs(difference) > 0.01) {
                camera.fov = targetFOV;
                camera.updateProjectionMatrix();
            }
        }
    });
    return null;
}
}),
"[project]/app/living-continuity/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/PassiveOrbitControls.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$OptimizedCanvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/OptimizedCanvas.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectionControler$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/connectionControler.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ElementOpacityController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ElementOpacityController.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$topbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeComponents/topbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livingContinuityButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livingContinuityButton/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppressTextureErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/suppressTextureErrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$d3DataManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/d3DataManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$ArticleNodeTemplate$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/templates/ArticleNodeTemplate.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$GlossaryNodeTemplate$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/templates/GlossaryNodeTemplate.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraInteractionTracker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/CameraInteractionTracker.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ConnectionTransitionController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ConnectionTransitionController.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ModelPreloader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$WalkThroughController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/WalkThroughController.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraFOVController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/CameraFOVController.jsx [app-ssr] (ecmascript)");
'use client';
;
const dynamic = 'force-dynamic';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const selectedComponents = {};
const glossaryShellComponents = {};
let initialCameraHasBeenSet = false;
const getSelectedComponent = async (id)=>{
    if (!selectedComponents[id]) {
        try {
            const lowerId = id.toLowerCase();
            const module = await __turbopack_context__.f({
                "../../models/entries_selected/a1": {
                    id: ()=>"[project]/models/entries_selected/a1.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a1.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a1.jsx": {
                    id: ()=>"[project]/models/entries_selected/a1.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a1.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a10": {
                    id: ()=>"[project]/models/entries_selected/a10.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a10.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a10.jsx": {
                    id: ()=>"[project]/models/entries_selected/a10.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a10.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a11": {
                    id: ()=>"[project]/models/entries_selected/a11.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a11.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a11.jsx": {
                    id: ()=>"[project]/models/entries_selected/a11.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a11.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a12": {
                    id: ()=>"[project]/models/entries_selected/a12.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a12.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a12.jsx": {
                    id: ()=>"[project]/models/entries_selected/a12.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a12.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a13": {
                    id: ()=>"[project]/models/entries_selected/a13.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a13.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a13.jsx": {
                    id: ()=>"[project]/models/entries_selected/a13.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a13.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a14": {
                    id: ()=>"[project]/models/entries_selected/a14.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a14.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a14.jsx": {
                    id: ()=>"[project]/models/entries_selected/a14.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a14.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a15": {
                    id: ()=>"[project]/models/entries_selected/a15.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a15.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a15.jsx": {
                    id: ()=>"[project]/models/entries_selected/a15.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a15.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a16": {
                    id: ()=>"[project]/models/entries_selected/a16.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a16.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a16.jsx": {
                    id: ()=>"[project]/models/entries_selected/a16.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a16.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a17": {
                    id: ()=>"[project]/models/entries_selected/a17.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a17.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a17.jsx": {
                    id: ()=>"[project]/models/entries_selected/a17.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a17.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a18": {
                    id: ()=>"[project]/models/entries_selected/a18.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a18.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a18.jsx": {
                    id: ()=>"[project]/models/entries_selected/a18.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a18.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a19": {
                    id: ()=>"[project]/models/entries_selected/a19.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a19.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a19.jsx": {
                    id: ()=>"[project]/models/entries_selected/a19.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a19.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a2": {
                    id: ()=>"[project]/models/entries_selected/a2.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a2.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a2.jsx": {
                    id: ()=>"[project]/models/entries_selected/a2.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a2.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a20": {
                    id: ()=>"[project]/models/entries_selected/a20.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a20.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a20.jsx": {
                    id: ()=>"[project]/models/entries_selected/a20.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a20.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a21": {
                    id: ()=>"[project]/models/entries_selected/a21.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a21.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a21.jsx": {
                    id: ()=>"[project]/models/entries_selected/a21.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a21.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a22": {
                    id: ()=>"[project]/models/entries_selected/a22.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a22.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a22.jsx": {
                    id: ()=>"[project]/models/entries_selected/a22.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a22.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a23": {
                    id: ()=>"[project]/models/entries_selected/a23.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a23.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a23.jsx": {
                    id: ()=>"[project]/models/entries_selected/a23.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a23.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a24": {
                    id: ()=>"[project]/models/entries_selected/a24.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a24.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a24.jsx": {
                    id: ()=>"[project]/models/entries_selected/a24.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a24.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a25": {
                    id: ()=>"[project]/models/entries_selected/a25.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a25.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a25.jsx": {
                    id: ()=>"[project]/models/entries_selected/a25.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a25.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a26": {
                    id: ()=>"[project]/models/entries_selected/a26.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a26.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a26.jsx": {
                    id: ()=>"[project]/models/entries_selected/a26.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a26.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a27": {
                    id: ()=>"[project]/models/entries_selected/a27.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a27.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a27.jsx": {
                    id: ()=>"[project]/models/entries_selected/a27.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a27.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a28": {
                    id: ()=>"[project]/models/entries_selected/a28.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a28.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a28.jsx": {
                    id: ()=>"[project]/models/entries_selected/a28.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a28.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a29": {
                    id: ()=>"[project]/models/entries_selected/a29.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a29.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a29.jsx": {
                    id: ()=>"[project]/models/entries_selected/a29.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a29.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a3": {
                    id: ()=>"[project]/models/entries_selected/a3.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a3.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a3.jsx": {
                    id: ()=>"[project]/models/entries_selected/a3.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a3.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a4": {
                    id: ()=>"[project]/models/entries_selected/a4.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a4.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a4.jsx": {
                    id: ()=>"[project]/models/entries_selected/a4.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a4.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a5": {
                    id: ()=>"[project]/models/entries_selected/a5.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a5.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a5.jsx": {
                    id: ()=>"[project]/models/entries_selected/a5.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a5.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a6": {
                    id: ()=>"[project]/models/entries_selected/a6.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a6.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a6.jsx": {
                    id: ()=>"[project]/models/entries_selected/a6.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a6.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a7": {
                    id: ()=>"[project]/models/entries_selected/a7.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a7.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a7.jsx": {
                    id: ()=>"[project]/models/entries_selected/a7.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a7.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a8": {
                    id: ()=>"[project]/models/entries_selected/a8.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a8.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a8.jsx": {
                    id: ()=>"[project]/models/entries_selected/a8.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a8.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a9": {
                    id: ()=>"[project]/models/entries_selected/a9.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a9.jsx [app-ssr] (ecmascript, async loader)")
                },
                "../../models/entries_selected/a9.jsx": {
                    id: ()=>"[project]/models/entries_selected/a9.jsx [app-ssr] (ecmascript, async loader)",
                    module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a9.jsx [app-ssr] (ecmascript, async loader)")
                }
            }).import(`../../models/entries_selected/${lowerId}`);
            const exportName = `${id}Selected2`;
            selectedComponents[id] = module[exportName] || module.default || module[`${id}Selected`];
        } catch (e) {
            console.warn(`Could not load selected component for ${id}:`, e);
            return null;
        }
    }
    return selectedComponents[id];
};
const getGlossaryShellComponent = async (path)=>{
    if (!path) return null;
    let key = path.replace('../glossaryShell/', '');
    if (!glossaryShellComponents[key]) {
        try {
            let module;
            try {
                module = await __turbopack_context__.f({
                    "../../models/glossaryShell/accessibility": {
                        id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/accessibility.jsx": {
                        id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/adapt": {
                        id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/adapt.jsx": {
                        id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/appropriations": {
                        id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/appropriations.jsx": {
                        id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/archive": {
                        id: ()=>"[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/archive.jsx": {
                        id: ()=>"[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/belonging": {
                        id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/belonging.jsx": {
                        id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/built-environment": {
                        id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/built-environment.jsx": {
                        id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/citizen": {
                        id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/citizen.jsx": {
                        id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/climate": {
                        id: ()=>"[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/climate.jsx": {
                        id: ()=>"[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/coercion": {
                        id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/coercion.jsx": {
                        id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/cohesion": {
                        id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/cohesion.jsx": {
                        id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/collective": {
                        id: ()=>"[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/collective.jsx": {
                        id: ()=>"[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/colonialism": {
                        id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/colonialism.jsx": {
                        id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/commons": {
                        id: ()=>"[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/commons.jsx": {
                        id: ()=>"[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/community": {
                        id: ()=>"[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/community.jsx": {
                        id: ()=>"[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/consumption": {
                        id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/consumption.jsx": {
                        id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/crisis": {
                        id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/crisis.jsx": {
                        id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/demolition": {
                        id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/demolition.jsx": {
                        id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/density": {
                        id: ()=>"[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/density.jsx": {
                        id: ()=>"[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/desert": {
                        id: ()=>"[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/desert.jsx": {
                        id: ()=>"[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/displacement": {
                        id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/displacement.jsx": {
                        id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/dispossession": {
                        id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/dispossession.jsx": {
                        id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/distribution": {
                        id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/distribution.jsx": {
                        id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/ecology": {
                        id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/ecology.jsx": {
                        id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/erasure": {
                        id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/erasure.jsx": {
                        id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/everyday-urbanism": {
                        id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/everyday-urbanism.jsx": {
                        id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/eviction": {
                        id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/eviction.jsx": {
                        id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/foreigner": {
                        id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/foreigner.jsx": {
                        id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/fragmentation": {
                        id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/fragmentation.jsx": {
                        id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/gender": {
                        id: ()=>"[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/gender.jsx": {
                        id: ()=>"[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/gentrification": {
                        id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/gentrification.jsx": {
                        id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/green-space": {
                        id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/green-space.jsx": {
                        id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/heritage": {
                        id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/heritage.jsx": {
                        id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/hierarchy": {
                        id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/hierarchy.jsx": {
                        id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/housing": {
                        id: ()=>"[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/housing.jsx": {
                        id: ()=>"[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/identity": {
                        id: ()=>"[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/identity.jsx": {
                        id: ()=>"[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/indigenous": {
                        id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/indigenous.jsx": {
                        id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/infrastructure": {
                        id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/infrastructure.jsx": {
                        id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/just": {
                        id: ()=>"[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/just.jsx": {
                        id: ()=>"[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/kafala-visa": {
                        id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/kafala-visa.jsx": {
                        id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/knowledge": {
                        id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/knowledge.jsx": {
                        id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/labour": {
                        id: ()=>"[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/labour.jsx": {
                        id: ()=>"[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/land-use": {
                        id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/land-use.jsx": {
                        id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/marginalisation": {
                        id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/marginalisation.jsx": {
                        id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/memory": {
                        id: ()=>"[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/memory.jsx": {
                        id: ()=>"[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/migrant": {
                        id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/migrant.jsx": {
                        id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/multispecies": {
                        id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/multispecies.jsx": {
                        id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/narrative": {
                        id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/narrative.jsx": {
                        id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/native": {
                        id: ()=>"[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/native.jsx": {
                        id: ()=>"[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neighbor": {
                        id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neighbor.jsx": {
                        id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neighborhood": {
                        id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neighborhood.jsx": {
                        id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neoliberalism": {
                        id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/neoliberalism.jsx": {
                        id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/park": {
                        id: ()=>"[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/park.jsx": {
                        id: ()=>"[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/participate": {
                        id: ()=>"[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/participate.jsx": {
                        id: ()=>"[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/periphery": {
                        id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/periphery.jsx": {
                        id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/placemaking": {
                        id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/placemaking.jsx": {
                        id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/power": {
                        id: ()=>"[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/power.jsx": {
                        id: ()=>"[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/precarity": {
                        id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/precarity.jsx": {
                        id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/privacy": {
                        id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/privacy.jsx": {
                        id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/public-space": {
                        id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/public-space.jsx": {
                        id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/racialbias": {
                        id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/racialbias.jsx": {
                        id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/redevelopment": {
                        id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/redevelopment.jsx": {
                        id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/rent": {
                        id: ()=>"[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/rent.jsx": {
                        id: ()=>"[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/residents": {
                        id: ()=>"[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/residents.jsx": {
                        id: ()=>"[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/segregation": {
                        id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/segregation.jsx": {
                        id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/self-determination": {
                        id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/self-determination.jsx": {
                        id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/solidarity": {
                        id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/solidarity.jsx": {
                        id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/suburban": {
                        id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/suburban.jsx": {
                        id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/sustainability": {
                        id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/sustainability.jsx": {
                        id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/territory": {
                        id: ()=>"[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/territory.jsx": {
                        id: ()=>"[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/typology": {
                        id: ()=>"[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/typology.jsx": {
                        id: ()=>"[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/uncertainty": {
                        id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/uncertainty.jsx": {
                        id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/unregulated": {
                        id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/unregulated.jsx": {
                        id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-informality": {
                        id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-informality.jsx": {
                        id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-planning": {
                        id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-planning.jsx": {
                        id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-renewal": {
                        id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban-renewal.jsx": {
                        id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban": {
                        id: ()=>"[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/urban.jsx": {
                        id: ()=>"[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/waste": {
                        id: ()=>"[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/waste.jsx": {
                        id: ()=>"[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/zones-zoning": {
                        id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)")
                    },
                    "../../models/glossaryShell/zones-zoning.jsx": {
                        id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)",
                        module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)")
                    }
                }).import(`../../models/glossaryShell/${key}`);
            } catch (e1) {
                const normalizedKey = key.replace(/-/g, '');
                try {
                    module = await __turbopack_context__.f({
                        "../../models/glossaryShell/accessibility": {
                            id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/accessibility.jsx": {
                            id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/adapt": {
                            id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/adapt.jsx": {
                            id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/appropriations": {
                            id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/appropriations.jsx": {
                            id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/archive": {
                            id: ()=>"[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/archive.jsx": {
                            id: ()=>"[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/belonging": {
                            id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/belonging.jsx": {
                            id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/built-environment": {
                            id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/built-environment.jsx": {
                            id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/citizen": {
                            id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/citizen.jsx": {
                            id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/climate": {
                            id: ()=>"[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/climate.jsx": {
                            id: ()=>"[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/coercion": {
                            id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/coercion.jsx": {
                            id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/cohesion": {
                            id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/cohesion.jsx": {
                            id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/collective": {
                            id: ()=>"[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/collective.jsx": {
                            id: ()=>"[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/colonialism": {
                            id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/colonialism.jsx": {
                            id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/commons": {
                            id: ()=>"[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/commons.jsx": {
                            id: ()=>"[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/community": {
                            id: ()=>"[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/community.jsx": {
                            id: ()=>"[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/consumption": {
                            id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/consumption.jsx": {
                            id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/crisis": {
                            id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/crisis.jsx": {
                            id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/demolition": {
                            id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/demolition.jsx": {
                            id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/density": {
                            id: ()=>"[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/density.jsx": {
                            id: ()=>"[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/desert": {
                            id: ()=>"[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/desert.jsx": {
                            id: ()=>"[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/displacement": {
                            id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/displacement.jsx": {
                            id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/dispossession": {
                            id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/dispossession.jsx": {
                            id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/distribution": {
                            id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/distribution.jsx": {
                            id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/ecology": {
                            id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/ecology.jsx": {
                            id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/erasure": {
                            id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/erasure.jsx": {
                            id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/everyday-urbanism": {
                            id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/everyday-urbanism.jsx": {
                            id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/eviction": {
                            id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/eviction.jsx": {
                            id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/foreigner": {
                            id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/foreigner.jsx": {
                            id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/fragmentation": {
                            id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/fragmentation.jsx": {
                            id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/gender": {
                            id: ()=>"[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/gender.jsx": {
                            id: ()=>"[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/gentrification": {
                            id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/gentrification.jsx": {
                            id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/green-space": {
                            id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/green-space.jsx": {
                            id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/heritage": {
                            id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/heritage.jsx": {
                            id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/hierarchy": {
                            id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/hierarchy.jsx": {
                            id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/housing": {
                            id: ()=>"[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/housing.jsx": {
                            id: ()=>"[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/identity": {
                            id: ()=>"[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/identity.jsx": {
                            id: ()=>"[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/indigenous": {
                            id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/indigenous.jsx": {
                            id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/infrastructure": {
                            id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/infrastructure.jsx": {
                            id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/just": {
                            id: ()=>"[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/just.jsx": {
                            id: ()=>"[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/kafala-visa": {
                            id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/kafala-visa.jsx": {
                            id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/knowledge": {
                            id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/knowledge.jsx": {
                            id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/labour": {
                            id: ()=>"[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/labour.jsx": {
                            id: ()=>"[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/land-use": {
                            id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/land-use.jsx": {
                            id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/marginalisation": {
                            id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/marginalisation.jsx": {
                            id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/memory": {
                            id: ()=>"[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/memory.jsx": {
                            id: ()=>"[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/migrant": {
                            id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/migrant.jsx": {
                            id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/multispecies": {
                            id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/multispecies.jsx": {
                            id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/narrative": {
                            id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/narrative.jsx": {
                            id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/native": {
                            id: ()=>"[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/native.jsx": {
                            id: ()=>"[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neighbor": {
                            id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neighbor.jsx": {
                            id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neighborhood": {
                            id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neighborhood.jsx": {
                            id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neoliberalism": {
                            id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/neoliberalism.jsx": {
                            id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/park": {
                            id: ()=>"[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/park.jsx": {
                            id: ()=>"[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/participate": {
                            id: ()=>"[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/participate.jsx": {
                            id: ()=>"[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/periphery": {
                            id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/periphery.jsx": {
                            id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/placemaking": {
                            id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/placemaking.jsx": {
                            id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/power": {
                            id: ()=>"[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/power.jsx": {
                            id: ()=>"[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/precarity": {
                            id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/precarity.jsx": {
                            id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/privacy": {
                            id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/privacy.jsx": {
                            id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/public-space": {
                            id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/public-space.jsx": {
                            id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/racialbias": {
                            id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/racialbias.jsx": {
                            id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/redevelopment": {
                            id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/redevelopment.jsx": {
                            id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/rent": {
                            id: ()=>"[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/rent.jsx": {
                            id: ()=>"[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/residents": {
                            id: ()=>"[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/residents.jsx": {
                            id: ()=>"[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/segregation": {
                            id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/segregation.jsx": {
                            id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/self-determination": {
                            id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/self-determination.jsx": {
                            id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/solidarity": {
                            id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/solidarity.jsx": {
                            id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/suburban": {
                            id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/suburban.jsx": {
                            id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/sustainability": {
                            id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/sustainability.jsx": {
                            id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/territory": {
                            id: ()=>"[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/territory.jsx": {
                            id: ()=>"[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/typology": {
                            id: ()=>"[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/typology.jsx": {
                            id: ()=>"[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/uncertainty": {
                            id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/uncertainty.jsx": {
                            id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/unregulated": {
                            id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/unregulated.jsx": {
                            id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-informality": {
                            id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-informality.jsx": {
                            id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-planning": {
                            id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-planning.jsx": {
                            id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-renewal": {
                            id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban-renewal.jsx": {
                            id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban": {
                            id: ()=>"[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/urban.jsx": {
                            id: ()=>"[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/waste": {
                            id: ()=>"[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/waste.jsx": {
                            id: ()=>"[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/zones-zoning": {
                            id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)")
                        },
                        "../../models/glossaryShell/zones-zoning.jsx": {
                            id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-ssr] (ecmascript, async loader)")
                        }
                    }).import(`../../models/glossaryShell/${normalizedKey}`);
                    key = normalizedKey;
                } catch (e2) {
                    if (key === 'racialbias') {
                        module = await __turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-ssr] (ecmascript, async loader)");
                    } else {
                        throw e2;
                    }
                }
            }
            const pascalCase = key.split(/[-_]/).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join('');
            glossaryShellComponents[key] = module.default || module[pascalCase] || Object.values(module).find((v)=>typeof v === 'function');
        } catch (e) {
            console.warn(`Could not load glossary shell for ${key}:`, e);
            return null;
        }
    }
    return glossaryShellComponents[key];
};
const HomePage = ()=>{
    const [cameraOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraOptions');
    const [sceneRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('livingContinuity_sceneRotation', false);
    const [walkThroughActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('walkThroughActive', false);
    const showAllLines = false;
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [modalIsOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [nodeData, setNodeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processedData, setProcessedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedComponentsMap, setSelectedComponentsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [glossaryShellComponentsMap, setGlossaryShellComponentsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const [cameraInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false);
    const [environmentLoaded, setEnvironmentLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoad, setInitialLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [modalInitialized, setModalInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time value", "undefined") !== 'undefined');
    const getInitialCameraPosition = ()=>{
        const radius = 28;
        const height = 6;
        const theta = Math.random() * Math.PI * 2;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        return [
            x,
            height,
            z
        ];
    };
    const [initialCameraPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialCameraPosition());
    const frameloopMode = camera || cameraInteraction || initialLoad ? 'always' : 'demand';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/data/nodes.json').then((res)=>{
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setNodeData(data);
                const processed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$d3DataManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processNodeData"])(data);
                setProcessedData(processed);
            });
            const totalNodes = (data.articles?.length || 0) + (data.glossary?.length || 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeLoadingState"])(totalNodes);
            const scheduleIdleWork = (callback)=>{
                if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'requestIdleCallback' in window) //TURBOPACK unreachable
                ;
                else {
                    setTimeout(callback, 100);
                }
            };
            const loadComponentsInBatches = async ()=>{
                const batchSize = 5;
                const allArticles = data.articles || [];
                const allGlossary = data.glossary || [];
                const loadBatch = async (items, loader, setter, type)=>{
                    for(let i = 0; i < items.length; i += batchSize){
                        await new Promise((resolve)=>{
                            scheduleIdleWork(async ()=>{
                                const batch = items.slice(i, i + batchSize);
                                const results = await Promise.allSettled(batch.map(async (item)=>{
                                    try {
                                        const component = await loader(item);
                                        return {
                                            id: item.id,
                                            component
                                        };
                                    } catch (e) {
                                        console.warn(`Failed to load ${type} component for ${item.id}:`, e);
                                        return {
                                            id: item.id,
                                            component: null
                                        };
                                    }
                                }));
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                                    setter((prev)=>{
                                        const updated = {
                                            ...prev
                                        };
                                        results.forEach((result)=>{
                                            if (result.status === 'fulfilled' && result.value?.component) {
                                                updated[result.value.id] = result.value.component;
                                            }
                                        });
                                        return updated;
                                    });
                                });
                                setTimeout(resolve, 50);
                            });
                        });
                    }
                };
                const articleLoader = (article)=>{
                    if (article.selectedModelPath) {
                        return getSelectedComponent(article.id);
                    }
                    return Promise.resolve(null);
                };
                const glossaryLoader = (glossary)=>{
                    if (glossary.glossaryShellPath) {
                        return getGlossaryShellComponent(glossary.glossaryShellPath);
                    }
                    return Promise.resolve(null);
                };
                await Promise.all([
                    loadBatch(allArticles, articleLoader, setSelectedComponentsMap, 'article'),
                    loadBatch(allGlossary, glossaryLoader, setGlossaryShellComponentsMap, 'glossary')
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["completeLoading"])();
            };
            scheduleIdleWork(()=>{
                const visibleArticles = data.articles?.slice(0, 10) || [];
                const visibleGlossary = data.glossary?.slice(0, 10) || [];
                visibleArticles.forEach((article)=>{
                    if (article.modelPath) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preloadGLBModel"])(article.modelPath);
                    }
                });
                visibleGlossary.forEach((glossary)=>{
                    if (glossary.modelPath) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preloadGLBModel"])(glossary.modelPath);
                    }
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preloadImages"])({
                    articles: visibleArticles
                }).catch(()=>{});
            });
            scheduleIdleWork(()=>{
                loadComponentsInBatches().catch((err)=>{
                    console.error('Error loading components:', err);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["completeLoading"])();
                });
            });
        }).catch((err)=>{
            console.error('Failed to load node data:', err);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setNodeData({
                    articles: [],
                    glossary: []
                });
                setProcessedData({
                    nodes: [],
                    links: [],
                    nodeMap: new Map()
                });
            });
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setEnvironmentLoaded(true);
            setTimeout(()=>{
                setInitialLoad(false);
            }, 2000);
        }, 500);
        return ()=>clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppressTextureErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suppressTextureErrors"])();
        return cleanup;
    }, []);
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setOpen((prev)=>!prev);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Enter' && modalIsOpen) {
                handleOpen();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        modalIsOpen,
        handleOpen
    ]);
    const titleSetters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodeData) return {};
        const setters = {};
        nodeData.articles.forEach((article)=>{
            setters[article.id] = ()=>setTitle(article.title);
        });
        nodeData.glossary.forEach((glossary)=>{
            setters[glossary.id] = ()=>setTitle(glossary.title || '');
        });
        return setters;
    }, [
        nodeData
    ]);
    const setTitleDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setTitle(""), []);
    const SceneBackground = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x1C1C1C);
        }, [
            scene
        ]);
        return null;
    });
    SceneBackground.displayName = 'SceneBackground';
    const CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ cameraOptions })=>{
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (selectedNode) {
                return;
            }
            if (!cameraOptions) {
                return;
            }
            if (!initialCameraHasBeenSet) {
                return;
            }
            const presets = {
                top: [
                    0.267,
                    14.68,
                    0.6
                ],
                reset: [
                    5.29,
                    -1.59,
                    6
                ],
                overview: [
                    0,
                    6,
                    18
                ]
            };
            const nextPosition = presets[cameraOptions];
            if (!nextPosition) {
                return;
            }
            state.camera.position.set(...nextPosition);
            state.camera.lookAt(0, 0, 0);
            state.camera.updateProjectionMatrix();
        }, [
            cameraOptions,
            state.camera,
            selectedNode
        ]);
        return null;
    });
    const InitialCameraSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ initialPosition })=>{
        const { camera, set } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const initialPositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(initialPosition);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!initialCameraHasBeenSet && initialPositionRef.current) {
                const timer = setTimeout(()=>{
                    if (!initialCameraHasBeenSet) {
                        camera.position.set(...initialPositionRef.current);
                        camera.lookAt(0, 0, 0);
                        camera.updateProjectionMatrix();
                        set({
                            camera
                        });
                        initialCameraHasBeenSet = true;
                    }
                }, 50);
                return ()=>clearTimeout(timer);
            }
        }, []);
        return null;
    });
    InitialCameraSetup.displayName = 'InitialCameraSetup';
    CameraDolly.displayName = 'CameraDolly';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalIsOpen,
                contentLabel: "Welcome Modal",
                shouldCloseOnOverlayClick: true,
                shouldCloseOnEsc: false,
                ariaHideApp: false,
                className: "welcomeModalContent",
                overlayClassName: "welcomeModalOverlay",
                onRequestClose: handleOpen,
                closeTimeoutMS: 150,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: handleOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livingContinuityButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: handleOpen
                    }, void 0, false, {
                        fileName: "[project]/app/living-continuity/page.js",
                        lineNumber: 379,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 378,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 367,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (!processedData || !nodeData) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeLoading",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 383,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeTopbarWrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$topbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: title
                }, void 0, false, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 388,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 387,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeCanvasWrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$OptimizedCanvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    frameloop: frameloopMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneBackground, {}, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 395,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InitialCameraSetup, {
                            initialPosition: initialCameraPosition
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 396,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 1
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 397,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        environmentLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                                preset: "city"
                            }, void 0, false, {
                                fileName: "[project]/app/living-continuity/page.js",
                                lineNumber: 400,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 399,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraDolly, {
                            cameraOptions: cameraOptions
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 403,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        processedData && nodeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$WalkThroughController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalkThroughController"], {
                                    nodeData: nodeData,
                                    processedData: processedData,
                                    isActive: walkThroughActive
                                }, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ElementOpacityController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraInteractionTracker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraInteractionTracker"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ConnectionTransitionController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionTransitionController"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraFOVController$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraFOVController"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                nodeData.articles.map((article)=>{
                                    const node = processedData.nodeMap.get(article.id);
                                    if (!node) return null;
                                    const SelectedComponent = selectedComponentsMap[article.id];
                                    const setTitleFn = titleSetters[article.id] || setTitleDefault;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$ArticleNodeTemplate$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            nodeData: node,
                                            showAllLines: showAllLines,
                                            setTitle: setTitleFn,
                                            setDefault: setTitleDefault,
                                            selectedComponent: SelectedComponent
                                        }, void 0, false, {
                                            fileName: "[project]/app/living-continuity/page.js",
                                            lineNumber: 425,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, article.id, false, {
                                        fileName: "[project]/app/living-continuity/page.js",
                                        lineNumber: 424,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                nodeData.glossary.map((glossary)=>{
                                    const node = processedData.nodeMap.get(glossary.id);
                                    if (!node) return null;
                                    const GlossaryShellComponent = glossaryShellComponentsMap[glossary.id];
                                    const setTitleFn = titleSetters[glossary.id] || setTitleDefault;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$GlossaryNodeTemplate$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlossaryNodeTemplate"], {
                                            nodeData: node,
                                            showAllLines: showAllLines,
                                            title: glossary.title,
                                            setTitle: setTitleFn,
                                            setDefault: setTitleDefault,
                                            glossaryShellComponent: GlossaryShellComponent
                                        }, void 0, false, {
                                            fileName: "[project]/app/living-continuity/page.js",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, glossary.id, false, {
                                        fileName: "[project]/app/living-continuity/page.js",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectionControler$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    processedData: processedData
                                }, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            autoRotate: sceneRotation && !walkThroughActive ? true : false,
                            autoRotateSpeed: 0.5,
                            minDistance: 1,
                            maxDistance: 60,
                            enableDamping: true,
                            dampingFactor: 0.08,
                            enablePan: true,
                            makeDefault: false,
                            rotateSpeed: 0.8,
                            panSpeed: 0.8,
                            zoomSpeed: 0.8,
                            enableRotate: true
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 461,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 392,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 391,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = HomePage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62189d4b._.js.map