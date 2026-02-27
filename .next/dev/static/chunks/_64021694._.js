(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/utils/OptimizedCanvas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OptimizedCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var createCleanObject = function(source) {
    if (!source || (typeof source === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(source)) !== 'object' || Array.isArray(source)) {
        return {};
    }
    var clean = {};
    try {
        for(var key in source){
            if (source.hasOwnProperty(key)) {
                var value = source[key];
                if (value !== undefined && value !== null) {
                    if ((typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value)) === 'object' && !Array.isArray(value)) {
                        clean[key] = createCleanObject(value);
                    } else if ((typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value)) !== 'object') {
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
function OptimizedCanvas(param) {
    var children = param.children, frameloop = param.frameloop, style = param.style, camera = param.camera, orthographic = param.orthographic;
    _s();
    var glConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OptimizedCanvas.useMemo[glConfig]": function() {
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
        }
    }["OptimizedCanvas.useMemo[glConfig]"], []);
    var canvasProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OptimizedCanvas.useMemo[canvasProps]": function() {
            var builtProps = {
                dpr: [
                    1,
                    1.5
                ],
                frameloop: frameloop || 'demand',
                gl: glConfig && (typeof glConfig === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(glConfig)) === 'object' && !Array.isArray(glConfig) ? glConfig : {
                    antialias: true,
                    alpha: false,
                    powerPreference: 'high-performance'
                }
            };
            if (orthographic !== undefined) {
                builtProps.orthographic = orthographic;
            }
            try {
                if (style !== undefined && style !== null && (typeof style === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(style)) === 'object' && !Array.isArray(style)) {
                    builtProps.style = createCleanObject(style);
                }
                if (camera !== undefined && camera !== null && (typeof camera === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(camera)) === 'object' && !Array.isArray(camera)) {
                    builtProps.camera = createCleanObject(camera);
                }
            } catch (e) {
                console.error('[OptimizedCanvas] Error building canvasProps:', e);
            }
            return builtProps;
        }
    }["OptimizedCanvas.useMemo[canvasProps]"], [
        frameloop,
        style,
        camera,
        glConfig,
        orthographic
    ]);
    if (!canvasProps || (typeof canvasProps === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(canvasProps)) !== 'object' || Array.isArray(canvasProps)) {
        console.error('[OptimizedCanvas] Invalid canvasProps, using defaults:', canvasProps);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"]) {
        console.error('[OptimizedCanvas] Canvas component not available');
        return null;
    }
    var safeCanvasProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OptimizedCanvas.useMemo[safeCanvasProps]": function() {
            var clean = createCleanObject(canvasProps);
            if (!clean.dpr || !Array.isArray(clean.dpr)) {
                clean.dpr = [
                    1,
                    1.5
                ];
            }
            if (!clean.frameloop || typeof clean.frameloop !== 'string') {
                clean.frameloop = 'demand';
            }
            if (!clean.gl || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(clean.gl) !== 'object' || Array.isArray(clean.gl)) {
                clean.gl = glConfig;
            }
            return clean;
        }
    }["OptimizedCanvas.useMemo[safeCanvasProps]"], [
        canvasProps,
        glConfig
    ]);
    try {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, safeCanvasProps), {
            children: children
        }), void 0, false, {
            fileName: "[project]/components/utils/OptimizedCanvas.jsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    } catch (e) {
        console.error('[OptimizedCanvas] Error rendering Canvas:', e, 'safeCanvasProps:', safeCanvasProps);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
_s(OptimizedCanvas, "H4YXwcIoLeoB2MCQm4tXT7Lg2ig=");
_c = OptimizedCanvas;
var _c;
__turbopack_context__.k.register(_c, "OptimizedCanvas");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/nodeConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARTICLE_CONNECTIONS",
    ()=>ARTICLE_CONNECTIONS,
    "KEYWORD_CONNECTIONS",
    ()=>KEYWORD_CONNECTIONS,
    "getConnectedNodes",
    ()=>getConnectedNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var ARTICLE_CONNECTIONS = {
    A1: [
        "G5",
        "G8",
        "G15",
        "G28",
        "G33",
        "G45",
        "G51",
        "G54"
    ],
    A2: [
        "G2",
        "G3",
        "G23",
        "G37"
    ],
    A3: [
        "G9",
        "G11",
        "G16",
        "G18",
        "G20",
        "G40"
    ],
    A4: [
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
    A5: [
        "G8",
        "G14",
        "G15",
        "G22",
        "G24",
        "G34",
        "G51",
        "G54"
    ],
    A6: [
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
    A7: [
        "G2",
        "G5",
        "G10",
        "G14",
        "G16",
        "G26"
    ],
    A8: [
        "G2",
        "G8",
        "G20",
        "G24",
        "G43",
        "G44"
    ],
    A9: [
        "G5",
        "G14",
        "G28"
    ],
    A10: [
        "G5",
        "G9",
        "G10",
        "G12",
        "G15",
        "G33",
        "G36",
        "G45"
    ],
    A11: [
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
    A12: [
        "G4",
        "G11",
        "G16",
        "G29",
        "G32",
        "G38",
        "G49"
    ],
    A13: [
        "G4",
        "G13",
        "G21",
        "G37",
        "G39"
    ],
    A14: [
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
    A15: [
        "G23",
        "G36",
        "G46"
    ],
    A16: [
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
    A17: [
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
    A18: [
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
    A19: [
        "G13",
        "G17",
        "G30",
        "G39",
        "G44",
        "G47"
    ],
    A20: [
        "G1",
        "G2",
        "G7",
        "G24",
        "G40",
        "G46",
        "G52"
    ],
    A21: [
        "G2",
        "G6",
        "G10",
        "G35",
        "G39",
        "G41"
    ],
    A22: [
        "G3",
        "G13",
        "G18",
        "G32",
        "G43"
    ],
    A23: [
        "G2",
        "G6",
        "G13",
        "G21",
        "G23",
        "G30",
        "G35",
        "G41"
    ],
    A24: [
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
    A25: [
        "G21",
        "G23",
        "G25",
        "G35",
        "G41",
        "G42",
        "G48"
    ],
    A26: [
        "G5",
        "G12",
        "G14",
        "G26",
        "G27",
        "G37"
    ],
    A27: [],
    A28: [],
    A29: []
};
var KEYWORD_CONNECTIONS = {
    G1: [
        "A6",
        "A14",
        "A20"
    ],
    G2: [
        "A2",
        "A7",
        "A17",
        "A20",
        "A21",
        "A23"
    ],
    G3: [
        "A2",
        "A14",
        "A22",
        "A24"
    ],
    G4: [
        "A4",
        "A12",
        "A13"
    ],
    G5: [
        "A1",
        "A7",
        "A9",
        "A10",
        "A16",
        "A26"
    ],
    G6: [
        "A6",
        "A17",
        "A21",
        "A23",
        "A24"
    ],
    G7: [
        "A6",
        "A11",
        "A14",
        "A17",
        "A20"
    ],
    G8: [
        "A1",
        "A5",
        "A8",
        "A18"
    ],
    G9: [
        "A3",
        "A10",
        "A11",
        "A18"
    ],
    G10: [
        "A7",
        "A10",
        "A21",
        "A24"
    ],
    G11: [
        "A3",
        "A4",
        "A11",
        "A12",
        "A14",
        "A17"
    ],
    G12: [
        "A10",
        "A16",
        "A18",
        "A24",
        "A26"
    ],
    G13: [
        "A13",
        "A17",
        "A18",
        "A19",
        "A22",
        "A23"
    ],
    G14: [
        "A5",
        "A6",
        "A7",
        "A9",
        "A11",
        "A14",
        "A26"
    ],
    G15: [
        "A1",
        "A4",
        "A5",
        "A10",
        "A16"
    ],
    G16: [
        "A3",
        "A4",
        "A7",
        "A12",
        "A16",
        "A18",
        "A24"
    ],
    G17: [
        "A4",
        "A14",
        "A19",
        "A24"
    ],
    G18: [
        "A3",
        "A11",
        "A14",
        "A22"
    ],
    G19: [
        "A4",
        "A6",
        "A14",
        "A18"
    ],
    G20: [
        "A1",
        "A3",
        "A8",
        "A18"
    ],
    G21: [
        "A6",
        "A13",
        "A14",
        "A17",
        "A23",
        "A25"
    ],
    G22: [
        "A5",
        "A6",
        "A17",
        "A24"
    ],
    G23: [
        "A2",
        "A15",
        "A17",
        "A23",
        "A25"
    ],
    G24: [
        "A5",
        "A6",
        "A8",
        "A11",
        "A14",
        "A20"
    ],
    G25: [
        "A6",
        "A17",
        "A18",
        "A25"
    ],
    G26: [
        "A7",
        "A16",
        "A26"
    ],
    G27: [
        "A6",
        "A24",
        "A26"
    ],
    G28: [
        "A1",
        "A9",
        "A16"
    ],
    G29: [
        "A4",
        "A11",
        "A12"
    ],
    G30: [
        "A19",
        "A23",
        "A4"
    ],
    G31: [
        "A1"
    ],
    G32: [
        "A12",
        "A18",
        "A22"
    ],
    G33: [
        "A1",
        "A10",
        "A16"
    ],
    G34: [
        "A5",
        "A6",
        "A14"
    ],
    G35: [
        "A6",
        "A17",
        "A21",
        "A23",
        "A24",
        "A25"
    ],
    G36: [
        "A10",
        "A11",
        "A15"
    ],
    G37: [
        "A2",
        "A13",
        "A26"
    ],
    G38: [
        "A4",
        "A12",
        "A16"
    ],
    G39: [
        "A13",
        "A19",
        "A21"
    ],
    G40: [
        "A3",
        "A11",
        "A20"
    ],
    G41: [
        "A17",
        "A21",
        "A23",
        "A25"
    ],
    G42: [
        "A17",
        "A25"
    ],
    G43: [
        "A8",
        "A22"
    ],
    G44: [
        "A8",
        "A19"
    ],
    G45: [
        "A1",
        "A10"
    ],
    G46: [
        "A15",
        "A20"
    ],
    G47: [
        "A14",
        "A19"
    ],
    G48: [
        "A24",
        "A25"
    ],
    G49: [
        "A12",
        "A16"
    ],
    G50: [
        "A6",
        "A14"
    ],
    G51: [
        "A1",
        "A5",
        "A18"
    ],
    G52: [
        "A6",
        "A20"
    ],
    G53: [
        "A4",
        "A11"
    ],
    G54: [
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/radialPosition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCircularPosition",
    ()=>getCircularPosition,
    "getRadialPosition",
    ()=>getRadialPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
var OUTER_RADIUS_BASE = 22;
var OUTER_RADIUS_VARIATION = 6;
var INNER_RADIUS_BASE = 12;
var INNER_RADIUS_VARIATION = 3;
function sphericalPosition(localIndex, localTotal, radius) {
    var useEvenDistribution = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (localTotal <= 1) {
        return [
            0,
            0,
            0
        ];
    }
    if (useEvenDistribution) {
        var yRaw = 1 - localIndex / (localTotal - 1) * 2;
        var y = Math.max(-0.9, Math.min(0.9, yRaw));
        var r = Math.sqrt(Math.max(0, 1 - y * y)) * radius;
        var theta = GOLDEN_ANGLE * localIndex;
        var x = Math.cos(theta) * r;
        var z = Math.sin(theta) * r;
        return [
            x,
            y * radius,
            z
        ];
    } else {
        var yRaw1 = 1 - localIndex / (localTotal - 1) * 2;
        var y1 = Math.max(-0.85, Math.min(0.85, yRaw1));
        var r1 = Math.sqrt(Math.max(0, 1 - y1 * y1)) * radius;
        var theta1 = GOLDEN_ANGLE * localIndex;
        var x1 = Math.cos(theta1) * r1;
        var z1 = Math.sin(theta1) * r1;
        return [
            x1,
            y1 * radius * 0.8,
            z1
        ];
    }
}
function getVariedRadius(index, baseRadius, variation) {
    var variationFactor = Math.sin(index * 0.7) * 0.5 + Math.cos(index * 1.3) * 0.3;
    var variedRadius = baseRadius + variationFactor * variation;
    return variedRadius;
}
function getRadialPosition(index, total) {
    var radius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 15, articlesCount = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, glossaryCount = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    if (articlesCount !== null && glossaryCount !== null && total === articlesCount + glossaryCount) {
        if (index < articlesCount) {
            var variedRadius = getVariedRadius(index, OUTER_RADIUS_BASE, OUTER_RADIUS_VARIATION);
            return sphericalPosition(index, articlesCount, variedRadius, false);
        }
        var keywordIndex = index - articlesCount;
        var variedRadius1 = getVariedRadius(keywordIndex, INNER_RADIUS_BASE, INNER_RADIUS_VARIATION);
        return sphericalPosition(keywordIndex, glossaryCount, variedRadius1, true);
    }
    return sphericalPosition(index, total, radius);
}
function getCircularPosition(index, total) {
    var radius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 8, height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var angle = index / total * Math.PI * 2;
    var x = Math.cos(angle) * radius;
    var z = Math.sin(angle) * radius;
    return [
        x,
        height,
        z
    ];
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/crossPositionTracker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
var crossGroupRegistry = new Map();
var crossPositionCache = new Map();
var tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function registerCrossGroup(nodeId, crossGroupRef) {
    if (crossGroupRef) {
        crossGroupRegistry.set(nodeId, crossGroupRef);
        crossPositionCache["delete"](nodeId);
    } else {
        crossGroupRegistry["delete"](nodeId);
        crossPositionCache["delete"](nodeId);
    }
}
function unregisterCrossGroup(nodeId) {
    crossGroupRegistry["delete"](nodeId);
    crossPositionCache["delete"](nodeId);
}
function updateCrossPosition(nodeId) {
    var crossGroupRef = crossGroupRegistry.get(nodeId);
    if (!crossGroupRef || !crossGroupRef.current) return null;
    try {
        var crossGroup = crossGroupRef.current;
        crossGroup.getWorldPosition(tempVec);
        var position = [
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
    var positions = {};
    crossGroupRegistry.forEach(function(crossGroupRef, nodeId) {
        var pos = updateCrossPosition(nodeId);
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/selectionStore.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$appStores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/appStores.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/connectionControler.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionController",
    ()=>ConnectionController,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubicBezierLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/CubicBezierLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/radialPosition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/crossPositionTracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-client] (ecmascript) <locals>");
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
    var articleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][articleId] || [];
    if (articleKeywords.length === 0) return [];
    var relatedArticles = new Set();
    articleKeywords.forEach(function(keywordId) {
        var articlesWithSameKeyword = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYWORD_CONNECTIONS"][keywordId] || [];
        articlesWithSameKeyword.forEach(function(relatedArticleId) {
            if (relatedArticleId !== articleId) {
                relatedArticles.add(relatedArticleId);
            }
        });
    });
    return Array.from(relatedArticles);
}
function getSecondaryConnectionsForKeyword(keywordId) {
    if (!keywordId || !keywordId.startsWith('G')) return [];
    var connectedArticles = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYWORD_CONNECTIONS"][keywordId] || [];
    if (connectedArticles.length === 0) return [];
    var secondaryConnections = [];
    connectedArticles.forEach(function(articleId) {
        var articleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][articleId] || [];
        articleKeywords.forEach(function(articleKeywordId) {
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
var ARTICLE_IDS = Array.from({
    length: 29
}, function(_, index) {
    return "A".concat(index + 1);
});
var KEYWORD_IDS = Array.from({
    length: 54
}, function(_, index) {
    return "G".concat(index + 1);
});
var TOTAL_NODES = ARTICLE_IDS.length + KEYWORD_IDS.length;
var BASE_RADIUS = 15;
var buildPositions = function() {
    var positions = {};
    ARTICLE_IDS.forEach(function(id, index) {
        positions[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialPosition"])(index, TOTAL_NODES, BASE_RADIUS);
    });
    KEYWORD_IDS.forEach(function(id, index) {
        positions[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialPosition"])(ARTICLE_IDS.length + index, TOTAL_NODES, BASE_RADIUS);
    });
    return positions;
};
function AnimatedConnectionLine(param) {
    var start = param.start, end = param.end, v0 = param.v0, v1 = param.v1, index = param.index, totalConnections = param.totalConnections, _param_color = param.color, color = _param_color === void 0 ? "#e9ff00" : _param_color, _param_shouldHide = param.shouldHide, shouldHide = _param_shouldHide === void 0 ? false : _param_shouldHide;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), opacity = _useState[0], setOpacity = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5), 2), lineWidth = _useState1[0], setLineWidth = _useState1[1];
    var revealStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var animationComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var hasAnimatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var isInitialMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    var lineKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("".concat(start[0], "-").concat(start[1], "-").concat(end[0], "-").concat(end[1], "-").concat(v0 === null || v0 === void 0 ? void 0 : v0[0], "-").concat(v1 === null || v1 === void 0 ? void 0 : v1[0]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedConnectionLine.useEffect": function() {
            var _v0_, _v1_;
            var newKey = "".concat(start[0].toFixed(1), "-").concat(start[1].toFixed(1), "-").concat(end[0].toFixed(1), "-").concat(end[1].toFixed(1), "-").concat(v0 === null || v0 === void 0 ? void 0 : (_v0_ = v0[0]) === null || _v0_ === void 0 ? void 0 : _v0_.toFixed(1), "-").concat(v1 === null || v1 === void 0 ? void 0 : (_v1_ = v1[0]) === null || _v1_ === void 0 ? void 0 : _v1_.toFixed(1));
            if (newKey !== lineKeyRef.current) {
                lineKeyRef.current = newKey;
                if (isInitialMountRef.current) {
                    setOpacity(0);
                    revealStartTime.current = Date.now();
                    hasAnimatedRef.current = false;
                    isInitialMountRef.current = false;
                }
            }
        }
    }["AnimatedConnectionLine.useEffect"], [
        start,
        end,
        v0,
        v1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedConnectionLine.useEffect": function() {
            if (shouldHide) {
                setOpacity(0);
                hasAnimatedRef.current = false;
                return;
            }
            if (!hasAnimatedRef.current) {
                revealStartTime.current = Date.now();
                var delay = index * 20;
                var timer = setTimeout({
                    "AnimatedConnectionLine.useEffect.timer": function() {
                        var startTime = Date.now();
                        var duration = 300;
                        var animate = {
                            "AnimatedConnectionLine.useEffect.timer.animate": function() {
                                var elapsed = Date.now() - startTime;
                                var progress = Math.min(elapsed / duration, 1);
                                var eased = 1 - Math.pow(1 - progress, 3);
                                setOpacity(eased);
                                setLineWidth(0.5 + eased * 0.5);
                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                } else {
                                    animationComplete.current = true;
                                    hasAnimatedRef.current = true;
                                }
                            }
                        }["AnimatedConnectionLine.useEffect.timer.animate"];
                        animate();
                    }
                }["AnimatedConnectionLine.useEffect.timer"], delay);
                return ({
                    "AnimatedConnectionLine.useEffect": function() {
                        return clearTimeout(timer);
                    }
                })["AnimatedConnectionLine.useEffect"];
            }
        }
    }["AnimatedConnectionLine.useEffect"], [
        index,
        shouldHide
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedConnectionLine.useEffect": function() {
            if (hasAnimatedRef.current && !shouldHide && opacity < 0.9) {
                setOpacity(1);
                setLineWidth(1);
            }
        }
    }["AnimatedConnectionLine.useEffect"], [
        start,
        end,
        v0,
        v1,
        shouldHide,
        opacity
    ]);
    var isValidControlPoint = function(cp) {
        return cp && Array.isArray(cp) && cp.length === 3 && cp.every(function(val) {
            return typeof val === 'number' && !isNaN(val) && isFinite(val);
        });
    };
    var isValidPoint = function(p) {
        return p && Array.isArray(p) && p.length === 3 && p.every(function(val) {
            return typeof val === 'number' && !isNaN(val) && isFinite(val);
        });
    };
    if (!isValidPoint(start) || !isValidPoint(end) || !isValidControlPoint(v0) || !isValidControlPoint(v1)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('[AnimatedConnectionLine] Invalid points:', {
                start: start,
                end: end,
                v0: v0,
                v1: v1
            });
        }
        return null;
    }
    if (opacity === 0 && shouldHide) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        renderOrder: 4,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubicBezierLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierLine"], {
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
_s(AnimatedConnectionLine, "qEjlAl4dlYrc4aErnN28zhENE34=");
_c = AnimatedConnectionLine;
function ConnectionController(param) {
    var _this = this;
    var processedData = param.processedData;
    _s1();
    var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedNodeStore", null), 1), selectedNode = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("highlightedNodesStore", []), 1), highlightedNodes = _useStore1[0];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("connectionLinesVisibilityStore", true), 1), linesVisible = _useStore2[0];
    var getPositions = function() {
        if (processedData && processedData.nodeMap) {
            var posMap = {};
            processedData.nodeMap.forEach(function(node, id) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectionController.useEffect": function() {
            var highlightedStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore');
            var secondaryHighlightedStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore');
            var highlighted = new Set();
            var secondaryHighlighted = new Set();
            if (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) {
                highlighted.add(selectedNode.id);
                var connected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
                connected.forEach({
                    "ConnectionController.useEffect": function(nodeId) {
                        if (nodeId) {
                            highlighted.add(nodeId);
                        }
                    }
                }["ConnectionController.useEffect"]);
                if (selectedNode.id.startsWith('A')) {
                    var relatedArticles = getRelatedArticles(selectedNode.id);
                    relatedArticles.forEach({
                        "ConnectionController.useEffect": function(articleId) {
                            secondaryHighlighted.add(articleId);
                        }
                    }["ConnectionController.useEffect"]);
                }
            }
            requestAnimationFrame({
                "ConnectionController.useEffect": function() {
                    highlightedStore.setState(Array.from(highlighted));
                    secondaryHighlightedStore.setState(Array.from(secondaryHighlighted));
                }
            }["ConnectionController.useEffect"]);
            crossPositionCache.current.clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCache"])();
        }
    }["ConnectionController.useEffect"], [
        selectedNode
    ]);
    var lastCheckRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var lastPositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    var lastCameraPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), updateTrigger = _useState[0], setUpdateTrigger = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ConnectionController.useFrame": function(state) {
            var now = Date.now();
            if (now - lastCheckRef.current < 16) return;
            lastCheckRef.current = now;
            if (!processedData || !processedData.nodeMap || !(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id)) return;
            var currentCameraPos = state.camera.position;
            var cameraChanged = !lastCameraPosRef.current || Math.abs(currentCameraPos.x - lastCameraPosRef.current.x) > 0.01 || Math.abs(currentCameraPos.y - lastCameraPosRef.current.y) > 0.01 || Math.abs(currentCameraPos.z - lastCameraPosRef.current.z) > 0.01;
            if (cameraChanged) {
                lastCameraPosRef.current = currentCameraPos.clone();
            }
            var currentPositions = getPositions();
            var connectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
            var allRelevantIds = [
                selectedNode.id
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(connectedIds));
            var hasChanges = false;
            allRelevantIds.forEach({
                "ConnectionController.useFrame": function(nodeId) {
                    var currentPos = currentPositions[nodeId];
                    if (!currentPos) return;
                    var lastPos = lastPositionsRef.current[nodeId];
                    if (!lastPos) {
                        hasChanges = true;
                        lastPositionsRef.current[nodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(currentPos);
                    } else {
                        var threshold = 0.05;
                        var changed = Math.abs(currentPos[0] - lastPos[0]) > threshold || Math.abs(currentPos[1] - lastPos[1]) > threshold || Math.abs(currentPos[2] - lastPos[2]) > threshold;
                        if (changed) {
                            hasChanges = true;
                            lastPositionsRef.current[nodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(currentPos);
                        }
                    }
                }
            }["ConnectionController.useFrame"]);
            if (hasChanges || cameraChanged) {
                requestAnimationFrame({
                    "ConnectionController.useFrame": function() {
                        setUpdateTrigger({
                            "ConnectionController.useFrame": function(prev) {
                                return prev + 1;
                            }
                        }["ConnectionController.useFrame"]);
                    }
                }["ConnectionController.useFrame"]);
            }
        }
    }["ConnectionController.useFrame"]);
    var tempVec1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var worldUpVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    var rightVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0));
    var generateControlPoints = function(start, end, index, isArticleToKeyword) {
        var isKeywordSource = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        if (!start || !end || !Array.isArray(start) || !Array.isArray(end) || start.length !== 3 || end.length !== 3 || start.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        }) || end.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        })) {
            var mid = [
                (((start === null || start === void 0 ? void 0 : start[0]) || 0) + ((end === null || end === void 0 ? void 0 : end[0]) || 0)) / 2,
                (((start === null || start === void 0 ? void 0 : start[1]) || 0) + ((end === null || end === void 0 ? void 0 : end[1]) || 0)) / 2,
                (((start === null || start === void 0 ? void 0 : start[2]) || 0) + ((end === null || end === void 0 ? void 0 : end[2]) || 0)) / 2
            ];
            return {
                v0: mid,
                v1: mid
            };
        }
        var dx = end[0] - start[0];
        var dy = end[1] - start[1];
        var dz = end[2] - start[2];
        var distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.001 || !isFinite(distance)) {
            var mid1 = [
                (start[0] + end[0]) / 2,
                (start[1] + end[1]) / 2,
                (start[2] + end[2]) / 2
            ];
            return {
                v0: mid1,
                v1: mid1
            };
        }
        var direction = tempVec1.current.set(dx, dy, dz);
        if (direction.length() < 0.001 || !isFinite(direction.length())) {
            direction.set(1, 0, 0);
        } else {
            direction.normalize();
        }
        var worldUp = worldUpVec.current;
        var perp = tempVec2.current.crossVectors(worldUp, direction);
        if (perp.length() < 0.001) {
            perp.crossVectors(rightVec.current, direction);
        }
        perp.normalize();
        var perp2 = tempVec3.current.crossVectors(direction, perp).normalize();
        var angleVariation = index * 30 % 360;
        var angle = angleVariation * Math.PI / 180;
        var cosAngle = Math.cos(angle);
        var sinAngle = Math.sin(angle);
        var horizontalOffset = distance * 0.08 * cosAngle;
        var horizontalOffset2 = distance * 0.08 * sinAngle;
        var straightDownDistance = isKeywordSource ? 12.0 : 8.0;
        var v0 = tempVec4.current.set(start[0] - worldUp.x * straightDownDistance + perp.x * horizontalOffset * 0.1 + perp2.x * horizontalOffset2 * 0.1, start[1] - worldUp.y * straightDownDistance, start[2] - worldUp.z * straightDownDistance + perp.z * horizontalOffset * 0.1 + perp2.z * horizontalOffset2 * 0.1);
        var upOffset2 = distance * 0.70;
        var verticalOffset2 = isKeywordSource ? -distance * 0.15 : -distance * 0.10;
        var v1 = tempVec1.current.set(start[0] + direction.x * upOffset2 + perp.x * horizontalOffset * 0.2 + perp2.x * horizontalOffset2 * 0.2, start[1] + direction.y * upOffset2 + verticalOffset2 + perp.y * horizontalOffset * 0.2 + perp2.y * horizontalOffset2 * 0.2, start[2] + direction.z * upOffset2 + perp.z * horizontalOffset * 0.2 + perp2.z * horizontalOffset2 * 0.2);
        var sanitize = function(val) {
            return typeof val === 'number' && isFinite(val) && !isNaN(val) ? val : 0;
        };
        var cp0 = [
            sanitize(v0.x),
            sanitize(v0.y),
            sanitize(v0.z)
        ];
        var cp1 = [
            sanitize(v1.x),
            sanitize(v1.y),
            sanitize(v1.z)
        ];
        return {
            v0: cp0,
            v1: cp1
        };
    };
    var centerVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    var worldUpCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    var tempNodeVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempDirToCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var crossPositionCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    var getCrossPosition = function(nodeId, nodePosition) {
        var camera = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        var trackedPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedCrossPosition"])(nodeId);
        if (trackedPosition) {
            return trackedPosition;
        }
        var selectedNodeForCache = null;
        var highlightedNodesForCache = [];
        try {
            selectedNodeForCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('selectedNodeStore', null);
            var highlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore', []);
            highlightedNodesForCache = Array.isArray(highlightedStoreValue) ? highlightedStoreValue : [];
        } catch (e) {
        // Store not available
        }
        var isHighlightedForCache = (selectedNodeForCache === null || selectedNodeForCache === void 0 ? void 0 : selectedNodeForCache.id) === nodeId || highlightedNodesForCache.includes(nodeId);
        var secondaryHighlightedForCache = [];
        try {
            var secondaryHighlightedStoreValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore', []);
            secondaryHighlightedForCache = Array.isArray(secondaryHighlightedStoreValue) ? secondaryHighlightedStoreValue : [];
        } catch (e) {
        // Store not available
        }
        var isSecondaryHighlightedForCache = secondaryHighlightedForCache.includes(nodeId);
        var isDimmedForCache = selectedNodeForCache && selectedNodeForCache.id !== nodeId && !highlightedNodesForCache.includes(nodeId) && !isSecondaryHighlightedForCache;
        var scaleState = isHighlightedForCache ? '1.3' : isDimmedForCache ? '0.6' : '1.0';
        var secondaryState = isSecondaryHighlightedForCache ? 'secondary' : 'normal';
        var cameraState = camera ? "".concat(camera.position.x.toFixed(3), "-").concat(camera.position.y.toFixed(3), "-").concat(camera.position.z.toFixed(3)) : 'no-camera';
        var cacheKey = "".concat(nodeId, "-").concat(nodePosition[0].toFixed(3), "-").concat(nodePosition[1].toFixed(3), "-").concat(nodePosition[2].toFixed(3), "-").concat(scaleState, "-").concat(secondaryState, "-").concat(cameraState);
        var cached = crossPositionCache.current.get(cacheKey);
        if (cached && !isHighlightedForCache && !isSecondaryHighlightedForCache) return cached;
        var center = centerVec.current;
        var nodeVec = tempNodeVec.current.set(nodePosition[0], nodePosition[1], nodePosition[2]);
        var directionToTarget = tempDirToCenter.current;
        if ((isHighlightedForCache || isSecondaryHighlightedForCache) && camera) {
            directionToTarget.subVectors(camera.position, nodeVec).normalize();
        } else {
            directionToTarget.subVectors(center, nodeVec).normalize();
        }
        var worldUp = worldUpCross.current;
        var right = tempRight.current.crossVectors(worldUp, directionToTarget);
        if (right.length() < 0.001) {
            right.set(1, 0, 0);
        }
        right.normalize();
        var up = tempUp.current.crossVectors(directionToTarget, right).normalize();
        if (Math.abs(directionToTarget.dot(worldUp)) > 0.99) {
            up.set(1, 0, 0);
            right.set(0, 0, 1);
        }
        var isArticle = nodeId && nodeId.startsWith('A');
        var result = tempResult.current;
        if (isArticle) {
            var trackedPosition1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedCrossPosition"])(nodeId);
            if (trackedPosition1) {
                return trackedPosition1;
            }
            var baseImageHeight = 14.4;
            var borderWidth = 0.12;
            var baseTotalHeight = baseImageHeight + borderWidth * 2;
            var nodeGroupScale = 0.5;
            var selectedNode = null;
            var highlightedNodes = [];
            var secondaryHighlightedArticles = [];
            try {
                selectedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('selectedNodeStore', null);
                var highlightedStoreValue1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('highlightedNodesStore', []);
                highlightedNodes = Array.isArray(highlightedStoreValue1) ? highlightedStoreValue1 : [];
                var secondaryHighlightedStoreValue1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('secondaryHighlightedArticlesStore', []);
                secondaryHighlightedArticles = Array.isArray(secondaryHighlightedStoreValue1) ? secondaryHighlightedStoreValue1 : [];
            } catch (e) {
            // Store not available, use defaults
            }
            if (!Array.isArray(highlightedNodes)) {
                highlightedNodes = [];
            }
            if (!Array.isArray(secondaryHighlightedArticles)) {
                secondaryHighlightedArticles = [];
            }
            var isHighlighted = (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeId || highlightedNodes.includes(nodeId);
            var isSecondaryHighlighted = secondaryHighlightedArticles.includes(nodeId);
            var isDimmed = selectedNode && selectedNode.id !== nodeId && !highlightedNodes.includes(nodeId) && !isSecondaryHighlighted;
            var articleScale = 1.0;
            if (isHighlighted) {
                articleScale = 1.3;
            } else if (isDimmed) {
                articleScale = 0.6;
            }
            var scaledTotalHeight = baseTotalHeight * articleScale;
            if ((isHighlighted || isSecondaryHighlighted) && camera) {
                var directionToCamera = tempDirToCenter.current.subVectors(camera.position, nodeVec).normalize();
                var worldUp1 = worldUpCross.current;
                var right1 = tempRight.current.crossVectors(worldUp1, directionToCamera);
                if (right1.length() < 0.001) {
                    right1.set(1, 0, 0);
                }
                right1.normalize();
                var correctedUp = tempUp.current.crossVectors(directionToCamera, right1).normalize();
                var basis = tempMatrix.current.makeBasis(right1, correctedUp, directionToCamera);
                var rotationQuat = tempQuat.current.setFromRotationMatrix(basis);
                var forwardVec = tempVec4.current.set(0, 0, 1);
                forwardVec.applyQuaternion(rotationQuat);
                var tiltAngle = Math.acos(Math.max(-1, Math.min(1, forwardVec.dot(worldUp1)))) * (180 / Math.PI);
                var tiltFromCamera = Math.acos(Math.max(-1, Math.min(1, directionToCamera.dot(worldUp1)))) * (180 / Math.PI);
                var bottomCenterOffset;
                if (isSecondaryHighlighted) {
                    var baseOffset = -(scaledTotalHeight / 2 + 0.1) * nodeGroupScale;
                    var tiltFactor = Math.cos(tiltAngle * Math.PI / 180);
                    bottomCenterOffset = baseOffset / Math.max(0.1, tiltFactor);
                } else {
                    bottomCenterOffset = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
                }
                var localBottom = tempLocalBottom.current.set(0, bottomCenterOffset, 0);
                var rotatedBottom = tempRotatedBottom.current.copy(localBottom).applyQuaternion(rotationQuat);
                var offsetDiff = rotatedBottom.y - localBottom.y;
                var horizontalOffset = Math.sqrt(rotatedBottom.x * rotatedBottom.x + rotatedBottom.z * rotatedBottom.z);
                if (isSecondaryHighlighted) {
                    console.log('%c[SECONDARY] Node: ' + nodeId, 'color: orange; font-weight: bold; font-size: 14px;', {
                        scaledTotalHeight: scaledTotalHeight.toFixed(3),
                        bottomCenterOffset: bottomCenterOffset.toFixed(3),
                        localBottom: "(".concat(localBottom.x.toFixed(3), ", ").concat(localBottom.y.toFixed(3), ", ").concat(localBottom.z.toFixed(3), ")"),
                        rotatedBottom: "(".concat(rotatedBottom.x.toFixed(3), ", ").concat(rotatedBottom.y.toFixed(3), ", ").concat(rotatedBottom.z.toFixed(3), ")"),
                        offsetDiff: offsetDiff.toFixed(3),
                        horizontalOffset: horizontalOffset.toFixed(3),
                        tiltAngle: tiltAngle.toFixed(2) + '°',
                        tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
                        cameraPos: "(".concat(camera.position.x.toFixed(2), ", ").concat(camera.position.y.toFixed(2), ", ").concat(camera.position.z.toFixed(2), ")"),
                        nodePos: "(".concat(nodeVec.x.toFixed(2), ", ").concat(nodeVec.y.toFixed(2), ", ").concat(nodeVec.z.toFixed(2), ")"),
                        directionToCamera: "(".concat(directionToCamera.x.toFixed(3), ", ").concat(directionToCamera.y.toFixed(3), ", ").concat(directionToCamera.z.toFixed(3), ")")
                    });
                }
                if (isHighlighted) {
                    console.log('%c[HIGHLIGHTED] Node: ' + nodeId, 'color: green; font-weight: bold; font-size: 14px;', {
                        scaledTotalHeight: scaledTotalHeight.toFixed(3),
                        bottomCenterOffset: bottomCenterOffset.toFixed(3),
                        localBottom: "(".concat(localBottom.x.toFixed(3), ", ").concat(localBottom.y.toFixed(3), ", ").concat(localBottom.z.toFixed(3), ")"),
                        rotatedBottom: "(".concat(rotatedBottom.x.toFixed(3), ", ").concat(rotatedBottom.y.toFixed(3), ", ").concat(rotatedBottom.z.toFixed(3), ")"),
                        offsetDiff: offsetDiff.toFixed(3),
                        horizontalOffset: horizontalOffset.toFixed(3),
                        tiltAngle: tiltAngle.toFixed(2) + '°',
                        tiltFromCamera: tiltFromCamera.toFixed(2) + '°',
                        cameraPos: "(".concat(camera.position.x.toFixed(2), ", ").concat(camera.position.y.toFixed(2), ", ").concat(camera.position.z.toFixed(2), ")"),
                        nodePos: "(".concat(nodeVec.x.toFixed(2), ", ").concat(nodeVec.y.toFixed(2), ", ").concat(nodeVec.z.toFixed(2), ")"),
                        directionToCamera: "(".concat(directionToCamera.x.toFixed(3), ", ").concat(directionToCamera.y.toFixed(3), ", ").concat(directionToCamera.z.toFixed(3), ")")
                    });
                }
                result.copy(nodeVec);
                result.add(rotatedBottom);
            } else {
                var bottomCenterOffset1;
                if (isSecondaryHighlighted) {
                    bottomCenterOffset1 = -(scaledTotalHeight / 1.8 + 0.15) * nodeGroupScale;
                } else {
                    bottomCenterOffset1 = -(scaledTotalHeight / 1.2 + 0.1) * nodeGroupScale;
                }
                result.copy(nodeVec);
                result.addScaledVector(up, bottomCenterOffset1);
            }
        } else {
            var keywordHeight = 0.4;
            var keywordOffset = -(keywordHeight / 2);
            result.copy(nodeVec).addScaledVector(up, keywordOffset);
        }
        var resultArray = [
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
    var tempStartVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempEndVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempLocalBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempRotatedBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempQuat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]());
    var tempMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]());
    var createLine = function(startPos, endPos, index, totalConnections, color, isArticleToKeyword, startId, endId) {
        var isKeywordSource = startId && startId.startsWith('G');
        if (!startPos || !endPos || !Array.isArray(startPos) || !Array.isArray(endPos) || startPos.length !== 3 || endPos.length !== 3 || startPos.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        }) || endPos.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        })) {
            return null;
        }
        var startPosVec = tempStartVec.current.set(startPos[0], startPos[1], startPos[2]);
        var endPosVec = tempEndVec.current.set(endPos[0], endPos[1], endPos[2]);
        var dx = endPosVec.x - startPosVec.x;
        var dy = endPosVec.y - startPosVec.y;
        var dz = endPosVec.z - startPosVec.z;
        var distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.01 || !isFinite(distance)) {
            return null;
        }
        var controlPoints = generateControlPoints(startPos, endPos, index, isArticleToKeyword, isKeywordSource);
        if (!controlPoints || !controlPoints.v0 || !controlPoints.v1 || !Array.isArray(controlPoints.v0) || !Array.isArray(controlPoints.v1) || controlPoints.v0.length !== 3 || controlPoints.v1.length !== 3 || controlPoints.v0.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        }) || controlPoints.v1.some(function(v) {
            return typeof v !== 'number' || isNaN(v) || !isFinite(v);
        })) {
            return null;
        }
        var key = "".concat(startId, "-").concat(endId, "-").concat(index);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedConnectionLine, {
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
        }, _this);
    };
    var lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectionController.useMemo[lines]": function() {
            if (!(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) || !linesVisible) {
                return [];
            }
            var positions = getPositions();
            var nodePosition = positions[selectedNode.id];
            if (!nodePosition || !Array.isArray(nodePosition) || nodePosition.length !== 3) {
                return [];
            }
            var startPosition = getCrossPosition(selectedNode.id, nodePosition, camera);
            if (!startPosition || !Array.isArray(startPosition) || startPosition.length !== 3 || startPosition.some({
                "ConnectionController.useMemo[lines]": function(v) {
                    return typeof v !== 'number' || isNaN(v) || !isFinite(v);
                }
            }["ConnectionController.useMemo[lines]"])) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("[ConnectionController] Invalid start position for ".concat(selectedNode.id, ":"), startPosition);
                }
                return [];
            }
            var allLines = [];
            var isArticle = selectedNode.id.startsWith('A');
            var targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedNode.id);
            var targetsLength = targets ? targets.length : 0;
            if (targetsLength > 0) {
                for(var i = 0; i < targetsLength; i++){
                    var targetId = targets[i];
                    var targetNodePosition = positions[targetId];
                    if (!targetNodePosition) continue;
                    var endPosition = getCrossPosition(targetId, targetNodePosition, camera);
                    var isArticleToKeyword = isArticle && targetId.startsWith('G');
                    var line = createLine(startPosition, endPosition, i, targetsLength, "#e9ff00", isArticleToKeyword, selectedNode.id, targetId);
                    if (line) allLines.push(line);
                }
            }
            if (isArticle) {
                var relatedArticles = getRelatedArticles(selectedNode.id);
                var selectedArticleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][selectedNode.id] || [];
                var selectedKeywordsSet = new Set(selectedArticleKeywords);
                var whiteLineIndex = 0;
                var totalWhiteLines = 0;
                for(var i1 = 0; i1 < relatedArticles.length; i1++){
                    var relatedArticleKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][relatedArticles[i1]] || [];
                    totalWhiteLines += relatedArticleKeywords.filter({
                        "ConnectionController.useMemo[lines]": function(kw) {
                            return selectedKeywordsSet.has(kw);
                        }
                    }["ConnectionController.useMemo[lines]"]).length;
                }
                for(var i2 = 0; i2 < relatedArticles.length; i2++){
                    var relatedArticleId = relatedArticles[i2];
                    var relatedArticlePos = positions[relatedArticleId];
                    if (!relatedArticlePos) continue;
                    var relatedArticleKeywords1 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARTICLE_CONNECTIONS"][relatedArticleId] || [];
                    var sharedKeywords = relatedArticleKeywords1.filter({
                        "ConnectionController.useMemo[lines].sharedKeywords": function(kw) {
                            return selectedKeywordsSet.has(kw);
                        }
                    }["ConnectionController.useMemo[lines].sharedKeywords"]);
                    for(var j = 0; j < sharedKeywords.length; j++){
                        var sharedKeywordId = sharedKeywords[j];
                        var keywordPos = positions[sharedKeywordId];
                        if (!keywordPos) continue;
                        var relatedArticleStartPos = getCrossPosition(relatedArticleId, relatedArticlePos, camera);
                        var keywordEndPos = getCrossPosition(sharedKeywordId, keywordPos, camera);
                        var line1 = createLine(relatedArticleStartPos, keywordEndPos, targetsLength + whiteLineIndex, targetsLength + totalWhiteLines, "#444444", true, relatedArticleId, sharedKeywordId);
                        if (line1) {
                            allLines.push(line1);
                            whiteLineIndex++;
                        }
                    }
                }
            }
            return allLines;
        }
    }["ConnectionController.useMemo[lines]"], [
        selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id,
        updateTrigger,
        linesVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectionController.useEffect": function() {
            if ((selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) && linesVisible && lines.length === 0) {
                requestAnimationFrame({
                    "ConnectionController.useEffect": function() {
                        setUpdateTrigger({
                            "ConnectionController.useEffect": function(prev) {
                                return prev + 1;
                            }
                        }["ConnectionController.useEffect"]);
                    }
                }["ConnectionController.useEffect"]);
            }
        }
    }["ConnectionController.useEffect"], [
        selectedNode,
        linesVisible,
        lines.length
    ]);
    if (!lines.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        frustumCulled: false,
        children: lines
    }, void 0, false, {
        fileName: "[project]/components/connectionControler.jsx",
        lineNumber: 754,
        columnNumber: 10
    }, this);
}
_s1(ConnectionController, "Qmzc9YC6NMXCSUy12HN6ZZQzC2c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ConnectionController;
const __TURBOPACK__default__export__ = ConnectionController;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedConnectionLine");
__turbopack_context__.k.register(_c1, "ConnectionController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/ElementOpacityController.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementOpacityController",
    ()=>ElementOpacityController,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-client] (ecmascript) <locals>");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function ElementOpacityController() {
    _s();
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), camera = _useThree.camera, gl = _useThree.gl;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore1[0];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('secondaryHighlightedArticlesStore', []), 1), secondaryHighlightedArticles = _useStore2[0];
    var isUserMovingCameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var opacityStoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var animationInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementOpacityController.useEffect": function() {
            opacityStoreRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('elementOpacityStore');
            if (!opacityStoreRef.current) {
                var createStore = __turbopack_context__.r("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)").createStore;
                opacityStoreRef.current = createStore('elementOpacityStore', {});
            }
        }
    }["ElementOpacityController.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementOpacityController.useEffect": function() {
            var _gl_domElement_parentElement_querySelector___r3f, _gl_domElement_parentElement_querySelector, _gl_domElement_parentElement;
            var handleStart = {
                "ElementOpacityController.useEffect.handleStart": function() {
                    isUserMovingCameraRef.current = true;
                    animationInProgressRef.current = false;
                }
            }["ElementOpacityController.useEffect.handleStart"];
            var handleChange = {
                "ElementOpacityController.useEffect.handleChange": function() {}
            }["ElementOpacityController.useEffect.handleChange"];
            var controls = (_gl_domElement_parentElement = gl.domElement.parentElement) === null || _gl_domElement_parentElement === void 0 ? void 0 : (_gl_domElement_parentElement_querySelector = _gl_domElement_parentElement.querySelector('canvas')) === null || _gl_domElement_parentElement_querySelector === void 0 ? void 0 : (_gl_domElement_parentElement_querySelector___r3f = _gl_domElement_parentElement_querySelector.__r3f) === null || _gl_domElement_parentElement_querySelector___r3f === void 0 ? void 0 : _gl_domElement_parentElement_querySelector___r3f.controls;
            if (controls) {
                controls.addEventListener('start', handleStart);
                controls.addEventListener('change', handleChange);
                return ({
                    "ElementOpacityController.useEffect": function() {
                        controls.removeEventListener('start', handleStart);
                        controls.removeEventListener('change', handleChange);
                    }
                })["ElementOpacityController.useEffect"];
            }
            var canvas = gl.domElement;
            var handleMouseDown = {
                "ElementOpacityController.useEffect.handleMouseDown": function() {
                    isUserMovingCameraRef.current = true;
                    animationInProgressRef.current = false;
                }
            }["ElementOpacityController.useEffect.handleMouseDown"];
            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('touchstart', handleMouseDown, {
                passive: true
            });
            return ({
                "ElementOpacityController.useEffect": function() {
                    canvas.removeEventListener('mousedown', handleMouseDown);
                    canvas.removeEventListener('touchstart', handleMouseDown);
                }
            })["ElementOpacityController.useEffect"];
        }
    }["ElementOpacityController.useEffect"], [
        gl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementOpacityController.useEffect": function() {
            if (!opacityStoreRef.current) return;
            if (!(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) || !Array.isArray(highlightedNodes) || highlightedNodes.length === 0) {
                opacityStoreRef.current.setState({});
                return;
            }
            var secondaryHighlightedSet = new Set(Array.isArray(secondaryHighlightedArticles) ? secondaryHighlightedArticles : []);
            var opacityMap = {};
            var highlightedSet = new Set(highlightedNodes);
            var selectedId = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id;
            var ARTICLE_IDS = Array.from({
                length: 29
            }, {
                "ElementOpacityController.useEffect.ARTICLE_IDS": function(_, index) {
                    return "A".concat(index + 1);
                }
            }["ElementOpacityController.useEffect.ARTICLE_IDS"]);
            var KEYWORD_IDS = Array.from({
                length: 54
            }, {
                "ElementOpacityController.useEffect.KEYWORD_IDS": function(_, index) {
                    return "G".concat(index + 1);
                }
            }["ElementOpacityController.useEffect.KEYWORD_IDS"]);
            var directlyConnected = selectedId ? new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedNodes"])(selectedId)) : new Set();
            directlyConnected.add(selectedId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ARTICLE_IDS).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(KEYWORD_IDS)).forEach({
                "ElementOpacityController.useEffect": function(nodeId) {
                    var isKeyword = nodeId.startsWith('G');
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
                }
            }["ElementOpacityController.useEffect"]);
            opacityStoreRef.current.setState(opacityMap);
        }
    }["ElementOpacityController.useEffect"], [
        selectedNode,
        highlightedNodes,
        secondaryHighlightedArticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementOpacityController.useEffect": function() {
            if (!animationInProgressRef.current) {
                isUserMovingCameraRef.current = false;
            }
        }
    }["ElementOpacityController.useEffect"], [
        selectedNode
    ]);
    return null;
}
_s(ElementOpacityController, "8Rpl/BSco6otNGfYZf4Jabh6be0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ElementOpacityController;
const __TURBOPACK__default__export__ = ElementOpacityController;
var _c;
__turbopack_context__.k.register(_c, "ElementOpacityController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/treeComponents/styles.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/roomModal/style.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "close_button": "style-module-scss-module__CB8I9q__close_button",
  "content": "style-module-scss-module__CB8I9q__content",
  "modal_wrapper": "style-module-scss-module__CB8I9q__modal_wrapper",
});
}),
"[project]/components/roomModal/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/roomModal/style.module.scss [app-client] (css module)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RoomModal(param) {
    var _this = this;
    var close = param.close;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null), 2), infoData = _React_useState[0], setInfoData = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true), 2), loading = _React_useState1[0], setLoading = _React_useState1[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RoomModal.useEffect": function() {
            var loadInfoData = {
                "RoomModal.useEffect.loadInfoData": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "RoomModal.useEffect.loadInfoData": function() {
                            var response, data, routeKey, routeInfo, error;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "RoomModal.useEffect.loadInfoData": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                3,
                                                4,
                                                5
                                            ]);
                                            return [
                                                4,
                                                fetch('/data/info.json')
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            if (!response.ok) {
                                                throw new Error('Failed to load info data');
                                            }
                                            return [
                                                4,
                                                response.json()
                                            ];
                                        case 2:
                                            data = _state.sent();
                                            routeKey = pathname === '/' ? '/' : pathname;
                                            routeInfo = data[routeKey] || data['/living-continuity'];
                                            setInfoData(routeInfo);
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            error = _state.sent();
                                            console.error('Error loading info data:', error);
                                            setInfoData({
                                                title: "Welcome",
                                                content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
                                            });
                                            return [
                                                3,
                                                5
                                            ];
                                        case 4:
                                            setLoading(false);
                                            return [
                                                7
                                            ];
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["RoomModal.useEffect.loadInfoData"]);
                        }
                    }["RoomModal.useEffect.loadInfoData"])();
                }
            }["RoomModal.useEffect.loadInfoData"];
            loadInfoData();
        }
    }["RoomModal.useEffect"], [
        pathname
    ]);
    // Helper function to render markdown-style emphasis
    var renderText = function(text) {
        if (!text) return null;
        // Convert *text* to <em>text</em>
        var parts = text.split(/(\*[^*]+\*)/g);
        return parts.map(function(part, index) {
            if (part.startsWith('*') && part.endsWith('*')) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: part.slice(1, -1)
                }, index, false, {
                    fileName: "[project]/components/roomModal/index.jsx",
                    lineNumber: 47,
                    columnNumber: 16
                }, _this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: part
            }, index, false, {
                fileName: "[project]/components/roomModal/index.jsx",
                lineNumber: 49,
                columnNumber: 14
            }, _this);
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal_wrapper,
            children: [
                close && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close_button,
                    onClick: close,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: infoData.content && (typeof infoData.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: renderText(infoData.content)
                    }, void 0, false, {
                        fileName: "[project]/components/roomModal/index.jsx",
                        lineNumber: 103,
                        columnNumber: 15
                    }, this) : Array.isArray(infoData.content) ? infoData.content.map(function(section, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: section.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: renderText(section.text)
                            }, void 0, false, {
                                fileName: "[project]/components/roomModal/index.jsx",
                                lineNumber: 107,
                                columnNumber: 36
                            }, _this)
                        }, index, false, {
                            fileName: "[project]/components/roomModal/index.jsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, _this);
                    }) : null)
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
_s(RoomModal, "xfs0BdwTg3McxB7S9Se4ntiJfEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RoomModal;
var _c;
__turbopack_context__.k.register(_c, "RoomModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sceneModal/style.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "camera_modal": "style-module-scss-module__ALzo2W__camera_modal",
  "camera_wrapper": "style-module-scss-module__ALzo2W__camera_wrapper",
  "item": "style-module-scss-module__ALzo2W__item",
  "link": "style-module-scss-module__ALzo2W__link",
});
}),
"[project]/components/sceneModal/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SceneModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sceneModal/style.module.scss [app-client] (css module)");
;
;
;
;
function SceneModal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].camera_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].camera_modal, " button"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://livingcontinuity.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://glossary.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://kitofparts.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://supplement.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "http://toolkit.publicdisplay.site/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$style$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
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
_c = SceneModal;
var _c;
__turbopack_context__.k.register(_c, "SceneModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/treeComponents/topbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/treeComponents/styles.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/roomModal/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sceneModal/index.jsx [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TopBar(param) {
    var title = param.title;
    _s();
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), isDisplay = _React_useState[0], setDisplay = _React_useState[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TopBar.useEffect": function() {
            if (title == "Title Of The Entry" || title == "") {
                setDisplay(false);
            } else {
                setDisplay(true);
            }
        }
    }["TopBar.useEffect"], [
        title
    ]);
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), modalIsOpen = _React_useState1[0], setOpen = _React_useState1[1];
    function handleOpen() {
        setOpen(!modalIsOpen);
    }
    var _React_useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), sceneOpen = _React_useState2[0], setSceneOpen = _React_useState2[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "isDesktop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar_wrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/living-continuity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, " button"),
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, " button"),
                            children: !(title == "Title Of The Entry" || title == "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, " button"),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "isMobile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar_wrapper, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar_wrapper_mobile),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                            onClick: function() {
                                return setSceneOpen(!sceneOpen);
                            },
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Toggle scene modal",
                            onKeyDown: function(e) {
                                if (e.key === 'Enter' || e.key === ' ') setSceneOpen(!sceneOpen);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].full, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, " button full_button"),
                                    children: "living continuity"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(sceneOpen ? 'closed' : 'open'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sceneModal$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/treeComponents/topbar.jsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].full, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, " button full_button"),
                                    children: "Living Continuity"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeComponents/topbar.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].half, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, " button"),
                                    onClick: function() {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$styles$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, " button"),
                            children: !(title == "Title Of The Entry" || title == "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalIsOpen,
                contentLabel: "Example Modal",
                closeTimeoutMS: 150,
                shouldCloseOnOverlayClick: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$roomModal$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(TopBar, "/41UPU/lyVZ57CrdWyPULj3rK6s=");
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livingContinuityButton/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var LivingContinuityButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](_c = function(param) {
    var onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "living_continuity_button",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "black_box",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "main_text",
                    children: "LIVING CONTINUITY"
                }, void 0, false, {
                    fileName: "[project]/components/livingContinuityButton/index.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/components/livingContinuityButton/index.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "enter_text",
                children: "enter"
            }, void 0, false, {
                fileName: "[project]/components/livingContinuityButton/index.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livingContinuityButton/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, _this);
});
_c1 = LivingContinuityButton;
LivingContinuityButton.displayName = 'LivingContinuityButton';
const __TURBOPACK__default__export__ = LivingContinuityButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "LivingContinuityButton$React.memo");
__turbopack_context__.k.register(_c1, "LivingContinuityButton");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/suppressTextureErrors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "suppressTextureErrors",
    ()=>suppressTextureErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function suppressTextureErrors() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var originalError = console.error;
    console.error = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var message = args[0];
        var fullMessage = args.join(' ');
        if (typeof message === 'string' && (message.includes('THREE.GLTFLoader') && message.includes('Couldn\'t load texture') || message.includes('GLTFLoader') && message.includes('texture')) || typeof fullMessage === 'string' && (fullMessage.includes('THREE.GLTFLoader') && fullMessage.includes('texture') || fullMessage.includes('GLTFLoader') && fullMessage.includes('texture'))) {
            return;
        }
        originalError.apply(console, args);
    };
    return function() {
        console.error = originalError;
    };
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/d3DataManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-client] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-client] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-client] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-transition/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript) <export cubicInOut as easeCubicInOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/radialPosition.js [app-client] (ecmascript)");
;
;
;
;
;
;
var BASE_RADIUS = 15;
function processNodeData(jsonData) {
    var _jsonData_articles, _jsonData_glossary;
    var allNodes = [];
    var links = [];
    var nodeMap = new Map();
    var articlesCount = ((_jsonData_articles = jsonData.articles) === null || _jsonData_articles === void 0 ? void 0 : _jsonData_articles.length) || 0;
    var glossaryCount = ((_jsonData_glossary = jsonData.glossary) === null || _jsonData_glossary === void 0 ? void 0 : _jsonData_glossary.length) || 0;
    var totalNodes = articlesCount + glossaryCount;
    if (jsonData.articles) {
        jsonData.articles.forEach(function(article, arrayIndex) {
            var position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialPosition"])(arrayIndex, totalNodes, BASE_RADIUS, articlesCount, glossaryCount);
            var node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, article), {
                type: 'article',
                position: position,
                x: position[0],
                y: position[1],
                z: position[2],
                vx: 0,
                vy: 0,
                vz: 0,
                fx: null,
                fy: null,
                fz: null
            });
            allNodes.push(node);
            nodeMap.set(article.id, node);
        });
    }
    if (jsonData.glossary) {
        jsonData.glossary.forEach(function(keyword, arrayIndex) {
            var globalIndex = articlesCount + arrayIndex;
            var position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$radialPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialPosition"])(globalIndex, totalNodes, BASE_RADIUS, articlesCount, glossaryCount);
            var node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, keyword), {
                type: 'glossary',
                position: position,
                x: position[0],
                y: position[1],
                z: position[2],
                vx: 0,
                vy: 0,
                vz: 0,
                fx: null,
                fy: null,
                fz: null
            });
            allNodes.push(node);
            nodeMap.set(keyword.id, node);
        });
    }
    allNodes.forEach(function(node) {
        if (node.connections && node.connections.length > 0) {
            node.connections.forEach(function(targetId) {
                var target = nodeMap.get(targetId);
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
        links: links,
        nodeMap: nodeMap
    };
}
function createForceSimulation(nodes, links) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _options_chargeStrength = options.chargeStrength, chargeStrength = _options_chargeStrength === void 0 ? -300 : _options_chargeStrength, _options_linkDistance = options.linkDistance, linkDistance = _options_linkDistance === void 0 ? 50 : _options_linkDistance, _options_linkStrength = options.linkStrength, linkStrength = _options_linkStrength === void 0 ? 0.1 : _options_linkStrength, _options_centerStrength = options.centerStrength, centerStrength = _options_centerStrength === void 0 ? 0.1 : _options_centerStrength;
    var simulation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"](nodes).force('link', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"](links).id(function(d) {
        return d.id;
    }).distance(linkDistance).strength(linkStrength)).force('charge', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"]().strength(chargeStrength)).force('center', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"](0, 0).strength(centerStrength)).force('collision', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"]().radius(function(d) {
        return d.type === 'article' ? 3 : 2;
    }));
    return simulation;
}
function getConnectedNodeIds(nodeId, links) {
    return links.filter(function(link) {
        return link.source === nodeId || link.target === nodeId;
    }).map(function(link) {
        return link.source === nodeId ? link.target : link.source;
    });
}
function getConnectedLinks(nodeId, links) {
    return links.filter(function(link) {
        return link.source === nodeId || link.target === nodeId;
    });
}
function updateNodePositions(nodes) {
    nodes.forEach(function(node) {
        if (node.x !== undefined && node.y !== undefined) {
            node.position = [
                node.x,
                node.y,
                node.z || 0
            ];
        }
    });
}
function transitionNodePosition(node, targetPosition) {
    var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1000;
    var _targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(targetPosition, 3), targetX = _targetPosition[0], targetY = _targetPosition[1], targetZ = _targetPosition[2];
    var startX = node.x || node.position[0];
    var startY = node.y || node.position[1];
    var startZ = node.z || node.position[2];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transition"]().duration(duration).ease(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__["easeCubicInOut"]).tween('position', function() {
        var interpolateX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startX, targetX);
        var interpolateY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startY, targetY);
        var interpolateZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"](startZ, targetZ);
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/treeModals/archiveModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArchiveModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
var slugifyTitle = function(title) {
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};
function ArchiveModal(param) {
    var _this = this;
    var title = param.title, author = param.author, content = param.content, img = param.img, authorBio = param.authorBio, keywords = param.keywords, connect1 = param.connect1, connect2 = param.connect2, connect3 = param.connect3, connect4 = param.connect4, photoCredit = param.photoCredit, closeModal = param.closeModal;
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("adapt", false), 2), adapt = _useStore[0], setAdapt = _useStore[1];
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null), 2), imageOrientation = _React_useState[0], setImageOrientation = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), imageLoaded = _React_useState1[0], setImageLoaded = _React_useState1[1];
    var handleImageLoad = function(e) {
        var img = e.target;
        var isLandscape = img.naturalWidth > img.naturalHeight;
        setImageOrientation(isLandscape ? 'isLandscape' : 'isPortrait');
        setImageLoaded(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal_wrapper",
            children: [
                closeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "close_button",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content",
                    children: [
                        img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "image_wrapper ".concat(imageOrientation || '', " ").concat(imageLoaded ? 'image_loaded' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img,
                                    alt: "",
                                    className: "image_placeholder",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img,
                                    alt: title,
                                    className: imageLoaded ? 'image_loaded' : 'image_loading',
                                    onLoad: handleImageLoad,
                                    onError: function(e) {
                                        e.target.style.display = 'none';
                                        setImageLoaded(true);
                                        console.warn('Failed to load image:', img);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
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
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "author",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text",
                            dangerouslySetInnerHTML: {
                                __html: content
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/treeModals/archiveModal.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        authorBio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "section_label",
                                    children: "Author Bio:"
                                }, void 0, false, {
                                    fileName: "[project]/components/treeModals/archiveModal.jsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        function() {
                            var hasConnections = connect1 || connect2 || connect3 || connect4;
                            var keywordsToDisplay = [];
                            if (keywords) {
                                if (Array.isArray(keywords)) {
                                    keywordsToDisplay = keywords;
                                } else if (typeof keywords === 'string') {
                                    keywordsToDisplay = keywords.split(',').map(function(k) {
                                        return k.trim();
                                    }).filter(Boolean);
                                }
                            }
                            var hasKeywordsToShow = keywordsToDisplay.length > 0;
                            if (!hasKeywordsToShow && !hasConnections) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "section_label",
                                        children: "Keywords:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, _this),
                                    hasKeywordsToShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "connections",
                                        children: keywordsToDisplay.map(function(keyword, index) {
                                            var keywordText = keyword && (typeof keyword === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keyword)) === 'object' ? keyword.text || keyword : keyword;
                                            var keywordLink = keyword && (typeof keyword === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keyword)) === 'object' && keyword.link !== undefined ? keyword.link : null;
                                            if (keywordLink && keywordLink.includes('#G')) {
                                                var idMatch = keywordLink.match(/#(G\d+)/);
                                                if (idMatch) {
                                                    var keywordId = idMatch[1];
                                                    keywordLink = "/glossary#".concat(slugifyTitle(keywordText));
                                                }
                                            } else if (keywordLink && keywordLink.startsWith('/glossary#')) {
                                                var hashPart = keywordLink.split('#')[1];
                                                if (hashPart && hashPart.match(/^G\d+$/)) {
                                                    keywordLink = "/glossary#".concat(slugifyTitle(keywordText));
                                                }
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    keywordLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: keywordLink,
                                                        className: "item_link",
                                                        onClick: closeModal,
                                                        children: keywordText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 29
                                                    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "item",
                                                        children: keywordText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 29
                                                    }, _this),
                                                    index < keywordsToDisplay.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "comma",
                                                        children: ", "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 68
                                                    }, _this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                lineNumber: 140,
                                                columnNumber: 25
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, _this) : hasConnections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "connections",
                                        children: [
                                            connect1,
                                            connect2,
                                            connect3,
                                            connect4
                                        ].filter(Boolean).map(function(item, index, array) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "item",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 25
                                                    }, _this),
                                                    index < array.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "comma",
                                                        children: ", "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 54
                                                    }, _this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                                lineNumber: 162,
                                                columnNumber: 23
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/treeModals/archiveModal.jsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, _this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/treeModals/archiveModal.jsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, _this);
                        }()
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
_s(ArchiveModal, "z+sZKxR52wSt6O4zcg3Qc5u67gA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ArchiveModal;
var _c;
__turbopack_context__.k.register(_c, "ArchiveModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/whiteMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWhiteMaterial",
    ()=>createWhiteMaterial,
    "createWhiteWireframeMaterial",
    ()=>createWhiteWireframeMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
function createWhiteMaterial() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        metalness: 0.1,
        roughness: 0.8
    });
}
function createWhiteWireframeMaterial() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.7
    });
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/useConnectionHighlight.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectionHighlight",
    ()=>useConnectionHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/nodeConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-client] (ecmascript) <locals>");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useConnectionHighlight(nodeId, isActive) {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 2), setSelectedNode = _useStore[1];
    var hasConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$nodeConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedNodes"])(nodeId).length > 0;
    var wasActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var nodeIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(nodeId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnectionHighlight.useEffect": function() {
            nodeIdRef.current = nodeId;
        }
    }["useConnectionHighlight.useEffect"], [
        nodeId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnectionHighlight.useEffect": function() {
            if (!nodeId) {
                return undefined;
            }
            if (isActive && !wasActiveRef.current) {
                requestAnimationFrame({
                    "useConnectionHighlight.useEffect": function() {
                        setSelectedNode({
                            id: nodeId,
                            ts: Date.now()
                        });
                    }
                }["useConnectionHighlight.useEffect"]);
            }
            if (!isActive && wasActiveRef.current) {
                requestAnimationFrame({
                    "useConnectionHighlight.useEffect": function() {
                        setSelectedNode({
                            "useConnectionHighlight.useEffect": function(prev) {
                                if ((prev === null || prev === void 0 ? void 0 : prev.id) === nodeIdRef.current) {
                                    return null;
                                }
                                return prev;
                            }
                        }["useConnectionHighlight.useEffect"]);
                    }
                }["useConnectionHighlight.useEffect"]);
            }
            wasActiveRef.current = isActive;
            return ({
                "useConnectionHighlight.useEffect": function() {
                    if (wasActiveRef.current && nodeIdRef.current === nodeId) {
                        requestAnimationFrame({
                            "useConnectionHighlight.useEffect": function() {
                                setSelectedNode({
                                    "useConnectionHighlight.useEffect": function(prev) {
                                        if ((prev === null || prev === void 0 ? void 0 : prev.id) === nodeIdRef.current) {
                                            return null;
                                        }
                                        return prev;
                                    }
                                }["useConnectionHighlight.useEffect"]);
                            }
                        }["useConnectionHighlight.useEffect"]);
                    }
                }
            })["useConnectionHighlight.useEffect"];
        }
    }["useConnectionHighlight.useEffect"], [
        isActive,
        nodeId,
        setSelectedNode
    ]);
}
_s(useConnectionHighlight, "H6DRh5yKaPxZ+bTzJjwEiUfd5wM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/useShouldShowTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShouldShowTitle",
    ()=>useShouldShowTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$selectionStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/utils/selectionStore.js [app-client] (ecmascript) <locals>");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
function useShouldShowTitle(nodeId) {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useShouldShowTitle.useMemo": function() {
            if (!nodeId || !Array.isArray(highlightedNodes)) {
                return false;
            }
            return highlightedNodes.includes(nodeId);
        }
    }["useShouldShowTitle.useMemo"], [
        nodeId,
        highlightedNodes
    ]);
}
_s(useShouldShowTitle, "J4/cI6JS4BEexyEqRJFGbzbCDYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/RotatingImage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotatingImage",
    ()=>RotatingImage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/crossPositionTracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function RotatingImage(param) {
    var imageUrl = param.imageUrl, position = param.position, _param_scale = param.scale, scale = _param_scale === void 0 ? [
        10.8,
        10.8,
        1
    ] : _param_scale, _param_tiltAmount = param.tiltAmount, tiltAmount = _param_tiltAmount === void 0 ? 0.15 : _param_tiltAmount, _param_opacity = param.opacity, opacity = _param_opacity === void 0 ? 1.0 : _param_opacity, _param_faceCamera = param.faceCamera, faceCamera = _param_faceCamera === void 0 ? false : _param_faceCamera, _param_showCross = param.showCross, showCross = _param_showCross === void 0 ? false : _param_showCross, _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, _param_showTitle = param.showTitle, showTitle = _param_showTitle === void 0 ? false : _param_showTitle, _param_showReadButton = param.showReadButton, showReadButton = _param_showReadButton === void 0 ? false : _param_showReadButton, _param_onReadClick = param.onReadClick, onReadClick = _param_onReadClick === void 0 ? null : _param_onReadClick, _param_onCloseCross = param.onCloseCross, onCloseCross = _param_onCloseCross === void 0 ? null : _param_onCloseCross, _param_onClick = param.onClick, onClick = _param_onClick === void 0 ? null : _param_onClick, _param_highlightState = param.highlightState, highlightState = _param_highlightState === void 0 ? {
        isSelected: false,
        isHighlighted: false,
        isSecondaryHighlighted: false,
        hasSelection: false
    } : _param_highlightState, _param_nodeId = param.nodeId, nodeId = _param_nodeId === void 0 ? null : _param_nodeId;
    _s();
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var imageMeshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var rotatingWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var crossGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var secondaryConnectionPointRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var titleWrapperRefFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var titleWrapperRefBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), imageError = _useState[0], setImageError = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(imageUrl), 2), currentImageUrl = _useState1[0], setCurrentImageUrl = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), htmlElementsVisible = _useState2[0], setHtmlElementsVisible = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), backHtmlElementsVisible = _useState3[0], setBackHtmlElementsVisible = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), crossVisible = _useState4[0], setCrossVisible = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), measuredTitleHeightFront = _useState5[0], setMeasuredTitleHeightFront = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), measuredTitleHeightBack = _useState6[0], setMeasuredTitleHeightBack = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isMeasurementReadyFront = _useState7[0], setIsMeasurementReadyFront = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isMeasurementReadyBack = _useState8[0], setIsMeasurementReadyBack = _useState8[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore1[0];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('secondaryHighlightedArticlesStore', []), 1), secondaryHighlightedArticles = _useStore2[0];
    var isSelected = (highlightState === null || highlightState === void 0 ? void 0 : highlightState.isSelected) || nodeId && (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeId;
    var isHighlighted = (highlightState === null || highlightState === void 0 ? void 0 : highlightState.isHighlighted) || nodeId && highlightedNodes.includes(nodeId);
    var isSecondaryHighlighted = (highlightState === null || highlightState === void 0 ? void 0 : highlightState.isSecondaryHighlighted) || nodeId && secondaryHighlightedArticles.includes(nodeId);
    var hasSelection = (highlightState === null || highlightState === void 0 ? void 0 : highlightState.hasSelection) || selectedNode !== null;
    var isDimmed = hasSelection && !isSelected && !isHighlighted && !isSecondaryHighlighted;
    var displayOpacity = isDimmed ? opacity * 0.2 : opacity;
    var borderColor = isSelected || isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ACCENT"] : isSecondaryHighlighted ? "#ffffff" : "#ffffff";
    var center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[center]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        }
    }["RotatingImage.useMemo[center]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingImage.useEffect": function() {
            if (!imageUrl) {
                setImageError(true);
                return;
            }
            var encodedUrl = imageUrl.includes(' ') ? imageUrl.split('/').map({
                "RotatingImage.useEffect": function(part) {
                    return encodeURIComponent(part);
                }
            }["RotatingImage.useEffect"]).join('/') : imageUrl;
            var img = new window.Image();
            img.onload = ({
                "RotatingImage.useEffect": function() {
                    setImageError(false);
                    setCurrentImageUrl(encodedUrl);
                }
            })["RotatingImage.useEffect"];
            img.onerror = ({
                "RotatingImage.useEffect": function(error) {
                    console.warn("Failed to load image: ".concat(imageUrl), error);
                    if (imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
                        var placeholderUrl = '/entriesImages/placeholder.svg';
                        var placeholderImg = new window.Image();
                        placeholderImg.onload = ({
                            "RotatingImage.useEffect": function() {
                                setImageError(false);
                                setCurrentImageUrl(placeholderUrl);
                                console.warn("Using placeholder for external image: ".concat(imageUrl));
                            }
                        })["RotatingImage.useEffect"];
                        placeholderImg.onerror = ({
                            "RotatingImage.useEffect": function() {
                                setImageError(true);
                                setCurrentImageUrl(null);
                            }
                        })["RotatingImage.useEffect"];
                        placeholderImg.src = placeholderUrl;
                        return;
                    }
                    if (imageUrl.endsWith('.jpg')) {
                        var pngUrl = imageUrl.replace('.jpg', '.png');
                        var encodedPngUrl = pngUrl.includes(' ') ? pngUrl.split('/').map({
                            "RotatingImage.useEffect": function(part) {
                                return encodeURIComponent(part);
                            }
                        }["RotatingImage.useEffect"]).join('/') : pngUrl;
                        var img2 = new window.Image();
                        img2.onload = ({
                            "RotatingImage.useEffect": function() {
                                setImageError(false);
                                setCurrentImageUrl(encodedPngUrl);
                            }
                        })["RotatingImage.useEffect"];
                        img2.onerror = ({
                            "RotatingImage.useEffect": function() {
                                var placeholderUrl = '/entriesImages/placeholder.svg';
                                var img3 = new window.Image();
                                img3.onload = ({
                                    "RotatingImage.useEffect": function() {
                                        setImageError(false);
                                        setCurrentImageUrl(placeholderUrl);
                                        console.warn("Using placeholder for missing image: ".concat(imageUrl));
                                    }
                                })["RotatingImage.useEffect"];
                                img3.onerror = ({
                                    "RotatingImage.useEffect": function() {
                                        console.warn("Could not load image: ".concat(imageUrl, " or ").concat(pngUrl, " or placeholder"));
                                        setImageError(true);
                                    }
                                })["RotatingImage.useEffect"];
                                img3.src = placeholderUrl;
                            }
                        })["RotatingImage.useEffect"];
                        img2.src = encodedPngUrl;
                    } else if (imageUrl.endsWith('.png')) {
                        var jpgUrl = imageUrl.replace('.png', '.jpg');
                        var encodedJpgUrl = jpgUrl.includes(' ') ? jpgUrl.split('/').map({
                            "RotatingImage.useEffect": function(part) {
                                return encodeURIComponent(part);
                            }
                        }["RotatingImage.useEffect"]).join('/') : jpgUrl;
                        var img21 = new window.Image();
                        img21.onload = ({
                            "RotatingImage.useEffect": function() {
                                setImageError(false);
                                setCurrentImageUrl(encodedJpgUrl);
                            }
                        })["RotatingImage.useEffect"];
                        img21.onerror = ({
                            "RotatingImage.useEffect": function() {
                                var placeholderUrl = '/entriesImages/placeholder.svg';
                                var img3 = new window.Image();
                                img3.onload = ({
                                    "RotatingImage.useEffect": function() {
                                        setImageError(false);
                                        setCurrentImageUrl(placeholderUrl);
                                        console.warn("Using placeholder for missing image: ".concat(imageUrl));
                                    }
                                })["RotatingImage.useEffect"];
                                img3.onerror = ({
                                    "RotatingImage.useEffect": function() {
                                        console.warn("Could not load image: ".concat(imageUrl, " or ").concat(jpgUrl, " or placeholder"));
                                        setImageError(true);
                                    }
                                })["RotatingImage.useEffect"];
                                img3.src = placeholderUrl;
                            }
                        })["RotatingImage.useEffect"];
                        img21.src = encodedJpgUrl;
                    } else {
                        var placeholderUrl1 = '/entriesImages/placeholder.svg';
                        var img22 = new window.Image();
                        img22.onload = ({
                            "RotatingImage.useEffect": function() {
                                setImageError(false);
                                setCurrentImageUrl(placeholderUrl1);
                                console.warn("Using placeholder for missing image: ".concat(imageUrl));
                            }
                        })["RotatingImage.useEffect"];
                        img22.onerror = ({
                            "RotatingImage.useEffect": function() {
                                console.warn("Could not load image: ".concat(imageUrl, " or placeholder"));
                                setImageError(true);
                            }
                        })["RotatingImage.useEffect"];
                        img22.src = placeholderUrl1;
                    }
                }
            })["RotatingImage.useEffect"];
            img.src = encodedUrl;
        }
    }["RotatingImage.useEffect"], [
        imageUrl
    ]);
    var tempVec1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempVec5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    var tempQuat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]());
    var tempQuat2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]());
    var tempMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]());
    var worldUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "RotatingImage.useFrame": function(state, delta) {
            if (!groupRef.current || !rotatingWrapperRef.current) return;
            var targetQuaternion = tempQuat.current;
            if (faceCamera) {
                var camera = state.camera;
                var currentPos = tempVec1.current;
                groupRef.current.getWorldPosition(currentPos);
                var directionToCamera = tempVec2.current.subVectors(camera.position, currentPos).normalize();
                var cameraY = camera.position.y;
                var articleY = currentPos.y;
                var verticalDistance = Math.abs(cameraY - articleY);
                var isTopOrBottomView = verticalDistance > 8;
                var right, correctedUp;
                if (isTopOrBottomView) {
                    tempVec5.current.set(1, 0, 0);
                    tempVec5.current.applyQuaternion(camera.quaternion);
                    var cameraRightXZ = tempVec3.current.set(tempVec5.current.x, 0, tempVec5.current.z);
                    if (cameraRightXZ.length() < 0.001) {
                        right = tempVec3.current.set(1, 0, 0);
                    } else {
                        right = tempVec3.current.normalize();
                    }
                    correctedUp = tempVec4.current.crossVectors(directionToCamera, right).normalize();
                } else {
                    right = tempVec3.current.crossVectors(worldUp.current, directionToCamera);
                    if (right.length() < 0.001) {
                        right.set(1, 0, 0);
                    }
                    right.normalize();
                    correctedUp = tempVec4.current.crossVectors(directionToCamera, right).normalize();
                }
                var basis = tempMatrix.current.makeBasis(right, correctedUp, directionToCamera);
                targetQuaternion.setFromRotationMatrix(basis);
            } else {
                var currentPos1 = tempVec1.current;
                groupRef.current.getWorldPosition(currentPos1);
                var directionToCenter = tempVec2.current.subVectors(center, currentPos1);
                var distance = directionToCenter.length();
                if (distance < 0.001) return;
                directionToCenter.normalize();
                var right1 = tempVec3.current.crossVectors(worldUp.current, directionToCenter);
                if (right1.length() < 0.001) {
                    right1.set(1, 0, 0);
                }
                right1.normalize();
                var stableUp = tempVec4.current.crossVectors(directionToCenter, right1).normalize();
                var basis1 = tempMatrix.current.makeBasis(right1, stableUp, directionToCenter);
                targetQuaternion.setFromRotationMatrix(basis1);
                if (tiltAmount !== 0) {
                    var tiltQuaternion = tempQuat2.current.setFromAxisAngle(right1, tiltAmount);
                    targetQuaternion.multiply(tiltQuaternion);
                }
            }
            var currentQuaternion = rotatingWrapperRef.current.quaternion;
            var rotationLerp = Math.min(1, 8.0 * delta);
            currentQuaternion.slerp(targetQuaternion, rotationLerp);
            var camera1 = state.camera;
            var cardPosition = tempVec1.current;
            groupRef.current.getWorldPosition(cardPosition);
            var forward = tempVec2.current.set(0, 0, 1);
            forward.applyQuaternion(currentQuaternion);
            var toCamera = tempVec3.current.subVectors(camera1.position, cardPosition).normalize();
            var dotProduct = forward.dot(toCamera);
            setHtmlElementsVisible(dotProduct > 0);
            setBackHtmlElementsVisible(dotProduct <= 0);
            setCrossVisible(dotProduct > 0);
        }
    }["RotatingImage.useFrame"]);
    var borderWidth = 0.2;
    var borderScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[borderScale]": function() {
            return [
                scale[0] + borderWidth * 2,
                scale[1] + borderWidth * 2,
                scale[2]
            ];
        }
    }["RotatingImage.useMemo[borderScale]"], [
        scale
    ]);
    var showPlaceholder = !imageUrl || imageError && !currentImageUrl;
    var imageWidth = scale[0];
    var imageHeight = scale[1];
    var totalWidth = imageWidth + borderWidth * 2;
    var totalHeight = imageHeight + borderWidth * 2;
    var topLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[topLeft]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-totalWidth / 2, totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[topLeft]"], [
        totalWidth,
        totalHeight
    ]);
    var topRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[topRight]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](totalWidth / 2, totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[topRight]"], [
        totalWidth,
        totalHeight
    ]);
    var bottomLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[bottomLeft]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-totalWidth / 2, -totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[bottomLeft]"], [
        totalWidth,
        totalHeight
    ]);
    var bottomRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[bottomRight]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](totalWidth / 2, -totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[bottomRight]"], [
        totalWidth,
        totalHeight
    ]);
    var imageCenter = center;
    var topCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[topCenter]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[topCenter]"], [
        totalHeight
    ]);
    var bottomCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[bottomCenter]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -totalHeight / 2, 0);
        }
    }["RotatingImage.useMemo[bottomCenter]"], [
        totalHeight
    ]);
    var leftCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[leftCenter]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-totalWidth / 2, 0, 0);
        }
    }["RotatingImage.useMemo[leftCenter]"], [
        totalWidth
    ]);
    var rightCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[rightCenter]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](totalWidth / 2, 0, 0);
        }
    }["RotatingImage.useMemo[rightCenter]"], [
        totalWidth
    ]);
    var crossSize = 1.5;
    var crossLineWidth = 0.1;
    var crossBottomPosition = -totalHeight / 2 - 0.1;
    var crossZPosition = 0.001;
    var circleRadius = crossSize * 0.7;
    var titleAndReadWrapperZPosition = -0.08;
    var wrapperWidthMultiplier = 2.14;
    var wrapperHeightMultiplier = 2.07;
    var wrapperWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[wrapperWidth]": function() {
            return scale[0] * wrapperWidthMultiplier;
        }
    }["RotatingImage.useMemo[wrapperWidth]"], [
        scale
    ]);
    var wrapperHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[wrapperHeight]": function() {
            return scale[1] * wrapperHeightMultiplier;
        }
    }["RotatingImage.useMemo[wrapperHeight]"], [
        scale
    ]);
    var wrapperWidthPx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[wrapperWidthPx]": function() {
            return Math.round(wrapperWidth * 20);
        }
    }["RotatingImage.useMemo[wrapperWidthPx]"], [
        wrapperWidth
    ]);
    var wrapperHeightPx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[wrapperHeightPx]": function() {
            return Math.round(wrapperHeight * 20);
        }
    }["RotatingImage.useMemo[wrapperHeightPx]"], [
        wrapperHeight
    ]);
    var titleWidthPx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[titleWidthPx]": function() {
            return Math.round(wrapperWidthPx * 0.95);
        }
    }["RotatingImage.useMemo[titleWidthPx]"], [
        wrapperWidthPx
    ]);
    var truncateTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[truncateTitle]": function() {
            if (!title || title.length <= 96) return title;
            var truncated = title.substring(0, 96);
            var lastSpaceIndex = truncated.lastIndexOf(' ');
            if (lastSpaceIndex > 0) {
                return truncated.substring(0, lastSpaceIndex) + '...';
            }
            return truncated + '...';
        }
    }["RotatingImage.useMemo[truncateTitle]"], [
        title
    ]);
    var articleHeightPx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[articleHeightPx]": function() {
            return Math.round(scale[1] * 41);
        }
    }["RotatingImage.useMemo[articleHeightPx]"], [
        scale
    ]);
    var measureTitle = function(titleWrapperElement) {
        if (!titleWrapperElement) return null;
        var titleContainer = titleWrapperElement.querySelector('.titleContainer');
        var elementToMeasure = titleContainer || titleWrapperElement;
        var computedStyle = window.getComputedStyle(elementToMeasure);
        var height = elementToMeasure.offsetHeight || elementToMeasure.scrollHeight || elementToMeasure.clientHeight;
        if (height === 0) {
            var rect = elementToMeasure.getBoundingClientRect();
            height = rect.height;
        }
        if (height === 0) return null;
        var marginTop = parseFloat(computedStyle.marginTop) || 0;
        var marginBottom = parseFloat(computedStyle.marginBottom) || 0;
        var wrapperStyle = window.getComputedStyle(titleWrapperElement);
        var wrapperMarginTop = parseFloat(wrapperStyle.marginTop) || 0;
        var wrapperMarginBottom = parseFloat(wrapperStyle.marginBottom) || 0;
        var totalHeight = height + marginTop + marginBottom + wrapperMarginTop + wrapperMarginBottom;
        return totalHeight > 0 ? Math.round(totalHeight) : null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingImage.useEffect": function() {
            if (!showTitle || !title) {
                setMeasuredTitleHeightFront(0);
                setMeasuredTitleHeightBack(0);
                if (showReadButton) {
                    setIsMeasurementReadyFront(true);
                    setIsMeasurementReadyBack(true);
                } else {
                    setIsMeasurementReadyFront(false);
                    setIsMeasurementReadyBack(false);
                }
                return;
            }
            setIsMeasurementReadyFront(false);
            setIsMeasurementReadyBack(false);
            var performMeasurement = {
                "RotatingImage.useEffect.performMeasurement": function() {
                    var frontMeasured = false;
                    var backMeasured = false;
                    if (titleWrapperRefFront.current) {
                        var frontHeight = measureTitle(titleWrapperRefFront.current);
                        if (frontHeight !== null && frontHeight > 0) {
                            setMeasuredTitleHeightFront(frontHeight);
                            frontMeasured = true;
                            setTimeout({
                                "RotatingImage.useEffect.performMeasurement": function() {
                                    setIsMeasurementReadyFront(true);
                                }
                            }["RotatingImage.useEffect.performMeasurement"], 150);
                        }
                    }
                    if (titleWrapperRefBack.current) {
                        var backHeight = measureTitle(titleWrapperRefBack.current);
                        if (backHeight !== null && backHeight > 0) {
                            setMeasuredTitleHeightBack(backHeight);
                            backMeasured = true;
                            setTimeout({
                                "RotatingImage.useEffect.performMeasurement": function() {
                                    setIsMeasurementReadyBack(true);
                                }
                            }["RotatingImage.useEffect.performMeasurement"], 150);
                        }
                    }
                    return frontMeasured && backMeasured;
                }
            }["RotatingImage.useEffect.performMeasurement"];
            var resizeObserver = new ResizeObserver({
                "RotatingImage.useEffect": function() {
                    requestAnimationFrame({
                        "RotatingImage.useEffect": function() {
                            performMeasurement();
                        }
                    }["RotatingImage.useEffect"]);
                }
            }["RotatingImage.useEffect"]);
            var setupObservers = {
                "RotatingImage.useEffect.setupObservers": function() {
                    var elementsToObserve = [];
                    if (titleWrapperRefFront.current) {
                        elementsToObserve.push(titleWrapperRefFront.current);
                    }
                    if (titleWrapperRefBack.current) {
                        elementsToObserve.push(titleWrapperRefBack.current);
                    }
                    if (elementsToObserve.length > 0) {
                        elementsToObserve.forEach({
                            "RotatingImage.useEffect.setupObservers": function(element) {
                                resizeObserver.observe(element);
                            }
                        }["RotatingImage.useEffect.setupObservers"]);
                        return true;
                    }
                    return false;
                }
            }["RotatingImage.useEffect.setupObservers"];
            if (setupObservers()) {
                var measurementAttempts = 0;
                var maxAttempts = 30;
                var tryMeasurement = {
                    "RotatingImage.useEffect.tryMeasurement": function() {
                        var success = performMeasurement();
                        measurementAttempts++;
                        if (!success && measurementAttempts < maxAttempts) {
                            setTimeout(tryMeasurement, 100);
                        } else if (measurementAttempts >= maxAttempts && showReadButton) {
                            setIsMeasurementReadyFront(true);
                            setIsMeasurementReadyBack(true);
                        }
                    }
                }["RotatingImage.useEffect.tryMeasurement"];
                setTimeout({
                    "RotatingImage.useEffect": function() {
                        tryMeasurement();
                    }
                }["RotatingImage.useEffect"], 200);
                var checkInterval = setInterval({
                    "RotatingImage.useEffect.checkInterval": function() {
                        performMeasurement();
                    }
                }["RotatingImage.useEffect.checkInterval"], 300);
                var maxTimeout = setTimeout({
                    "RotatingImage.useEffect.maxTimeout": function() {
                        clearInterval(checkInterval);
                        if (showReadButton) {
                            setIsMeasurementReadyFront(true);
                            setIsMeasurementReadyBack(true);
                        }
                    }
                }["RotatingImage.useEffect.maxTimeout"], 2000);
                return ({
                    "RotatingImage.useEffect": function() {
                        clearTimeout(maxTimeout);
                        clearInterval(checkInterval);
                        resizeObserver.disconnect();
                    }
                })["RotatingImage.useEffect"];
            } else {
                var checkCount = 0;
                var checkInterval1 = setInterval({
                    "RotatingImage.useEffect.checkInterval": function() {
                        if (setupObservers()) {
                            clearInterval(checkInterval1);
                            setTimeout({
                                "RotatingImage.useEffect.checkInterval": function() {
                                    performMeasurement();
                                }
                            }["RotatingImage.useEffect.checkInterval"], 100);
                            var measurementInterval = setInterval({
                                "RotatingImage.useEffect.checkInterval.measurementInterval": function() {
                                    performMeasurement();
                                }
                            }["RotatingImage.useEffect.checkInterval.measurementInterval"], 200);
                            var maxTimeout = setTimeout({
                                "RotatingImage.useEffect.checkInterval.maxTimeout": function() {
                                    clearInterval(measurementInterval);
                                    if (showReadButton) {
                                        setIsMeasurementReadyFront(true);
                                        setIsMeasurementReadyBack(true);
                                    }
                                }
                            }["RotatingImage.useEffect.checkInterval.maxTimeout"], 1500);
                            return ({
                                "RotatingImage.useEffect.checkInterval": function() {
                                    clearTimeout(maxTimeout);
                                    clearInterval(measurementInterval);
                                    resizeObserver.disconnect();
                                }
                            })["RotatingImage.useEffect.checkInterval"];
                        }
                        checkCount++;
                        if (checkCount > 40) {
                            clearInterval(checkInterval1);
                            if (showReadButton) {
                                setIsMeasurementReadyFront(true);
                                setIsMeasurementReadyBack(true);
                            }
                        }
                    }
                }["RotatingImage.useEffect.checkInterval"], 50);
                var maxTimeout1 = setTimeout({
                    "RotatingImage.useEffect.maxTimeout": function() {
                        clearInterval(checkInterval1);
                        if (showReadButton) {
                            setIsMeasurementReadyFront(true);
                            setIsMeasurementReadyBack(true);
                        }
                    }
                }["RotatingImage.useEffect.maxTimeout"], 2000);
                return ({
                    "RotatingImage.useEffect": function() {
                        clearTimeout(maxTimeout1);
                        clearInterval(checkInterval1);
                        resizeObserver.disconnect();
                    }
                })["RotatingImage.useEffect"];
            }
        }
    }["RotatingImage.useEffect"], [
        showTitle,
        title,
        truncateTitle,
        titleWidthPx,
        showReadButton
    ]);
    var readWrapperHeightPxFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[readWrapperHeightPxFront]": function() {
            var titleHeight = measuredTitleHeightFront || 0;
            if (showTitle && title && titleHeight === 0) {
                var estimatedTitleHeight = Math.min(articleHeightPx * 0.3, 120);
                titleHeight = estimatedTitleHeight;
            }
            var calculatedHeight = Math.max(0, articleHeightPx - titleHeight);
            return calculatedHeight;
        }
    }["RotatingImage.useMemo[readWrapperHeightPxFront]"], [
        articleHeightPx,
        measuredTitleHeightFront,
        showTitle,
        title
    ]);
    var readWrapperHeightPxBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RotatingImage.useMemo[readWrapperHeightPxBack]": function() {
            var titleHeight = measuredTitleHeightBack || 0;
            if (showTitle && title && titleHeight === 0) {
                var estimatedTitleHeight = Math.min(articleHeightPx * 0.3, 120);
                titleHeight = estimatedTitleHeight;
            }
            var calculatedHeight = Math.max(0, articleHeightPx - titleHeight);
            return calculatedHeight;
        }
    }["RotatingImage.useMemo[readWrapperHeightPxBack]"], [
        articleHeightPx,
        measuredTitleHeightBack,
        showTitle,
        title
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingImage.useEffect": function() {
            if (!nodeId) return;
            if (showCross && crossVisible && crossGroupRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCrossGroup"])(nodeId, crossGroupRef);
            } else if (isSecondaryHighlighted && !showCross && secondaryConnectionPointRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCrossGroup"])(nodeId, secondaryConnectionPointRef);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterCrossGroup"])(nodeId);
            }
            return ({
                "RotatingImage.useEffect": function() {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterCrossGroup"])(nodeId);
                }
            })["RotatingImage.useEffect"];
        }
    }["RotatingImage.useEffect"], [
        nodeId,
        showCross,
        crossVisible,
        isSecondaryHighlighted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "RotatingImage.useFrame": function() {
            if (nodeId && showCross && crossVisible && crossGroupRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCrossPosition"])(nodeId);
            } else if (nodeId && isSecondaryHighlighted && !showCross && secondaryConnectionPointRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$crossPositionTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCrossPosition"])(nodeId);
            }
        }
    }["RotatingImage.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: rotatingWrapperRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        -0.15
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 11 : 1,
                    frustumCulled: false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                borderScale[0],
                                borderScale[1]
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#000000",
                            transparent: true,
                            opacity: 1.0 * displayOpacity,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        -0.10
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 12 : 2,
                    frustumCulled: false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                borderScale[0],
                                borderScale[1]
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: borderColor,
                            transparent: true,
                            opacity: 1.0 * displayOpacity,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 558,
                    columnNumber: 9
                }, this),
                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        -0.05
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 12.5 : 2.5,
                    frustumCulled: false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                borderScale[0],
                                borderScale[1]
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ACCENT"],
                            transparent: true,
                            opacity: 0.18 * displayOpacity,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 570,
                    columnNumber: 11
                }, this),
                showPlaceholder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    ref: meshRef,
                    position: [
                        0,
                        0,
                        0
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 10 : 3,
                    frustumCulled: false
                }, onClick ? {
                    onClick: onClick
                } : {}), {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                scale[0],
                                scale[1]
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 590,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ACCENT"],
                            transparent: true,
                            opacity: isSelected || isHighlighted || isSecondaryHighlighted ? 1.0 * displayOpacity : 0.98 * displayOpacity,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 591,
                            columnNumber: 13
                        }, this)
                    ]
                }), void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 583,
                    columnNumber: 11
                }, this) : currentImageUrl && !imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: imageMeshRef,
                    position: [
                        0,
                        0,
                        0
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 10 : 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            position: [
                                0,
                                0,
                                0
                            ]
                        }, onClick ? {
                            onClick: onClick
                        } : {}), {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                    args: [
                                        scale[0],
                                        scale[1]
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    transparent: true,
                                    opacity: 0,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                                    depthWrite: false,
                                    depthTest: false
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this)
                            ]
                        }), void 0, true, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            url: currentImageUrl,
                            scale: scale,
                            transparent: true,
                            opacity: isSelected || isHighlighted || isSecondaryHighlighted ? 1.0 * displayOpacity : 0.98 * displayOpacity,
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            frustumCulled: false,
                            onError: function(error) {
                                console.warn("Image component failed to load: ".concat(currentImageUrl), error);
                                setImageError(true);
                                setCurrentImageUrl(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 615,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            url: currentImageUrl,
                            scale: scale,
                            transparent: true,
                            opacity: isSelected || isHighlighted || isSecondaryHighlighted ? 1.0 * displayOpacity : 0.98 * displayOpacity,
                            depthWrite: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            depthTest: !(isSelected || isHighlighted || isSecondaryHighlighted),
                            frustumCulled: false,
                            rotation: [
                                0,
                                Math.PI,
                                0
                            ],
                            onError: function(error) {
                                console.warn("Image component failed to load (back): ".concat(currentImageUrl), error);
                                setImageError(true);
                                setCurrentImageUrl(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 629,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 601,
                    columnNumber: 11
                }, this),
                (showTitle && title || showReadButton) && htmlElementsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        0,
                        titleAndReadWrapperZPosition
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 13 : 7,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 13 : 7,
                            frustumCulled: false
                        }, onClick ? {
                            onClick: onClick
                        } : {}), {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                    args: [
                                        wrapperWidth,
                                        wrapperHeight
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#000000",
                                    transparent: true,
                                    opacity: 0,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"],
                                    depthWrite: false,
                                    depthTest: false
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this)
                            ]
                        }), void 0, true, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 649,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                            center: false,
                            className: "titleAndReadWrapper",
                            style: {
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -30%)',
                                width: "".concat(wrapperWidthPx, "px"),
                                height: "".concat(wrapperHeightPx, "px"),
                                minWidth: "".concat(wrapperWidthPx, "px"),
                                minHeight: "".concat(wrapperHeightPx, "px"),
                                maxWidth: 'none',
                                maxHeight: 'none',
                                margin: 0,
                                padding: 0,
                                pointerEvents: 'none'
                            },
                            transform: true,
                            occlude: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "titleAndReadContainer",
                                style: {
                                    width: "".concat(wrapperWidthPx, "px"),
                                    height: "".concat(articleHeightPx, "px"),
                                    minWidth: "".concat(wrapperWidthPx, "px"),
                                    minHeight: "".concat(articleHeightPx, "px"),
                                    maxWidth: 'none',
                                    maxHeight: 'none',
                                    opacity: displayOpacity,
                                    margin: 0,
                                    padding: 0,
                                    position: 'relative',
                                    pointerEvents: 'none',
                                    transform: 'translateY(-20%)'
                                },
                                children: [
                                    showReadButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "readWrapper",
                                        style: {
                                            position: 'absolute',
                                            top: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%',
                                            height: "".concat(readWrapperHeightPxFront, "px"),
                                            opacity: isMeasurementReadyFront ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                            pointerEvents: isMeasurementReadyFront ? 'auto' : 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "readButton",
                                            onClick: onReadClick,
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "readButtonText",
                                                children: "READ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                                lineNumber: 722,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 717,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/utils/RotatingImage.jsx",
                                        lineNumber: 703,
                                        columnNumber: 19
                                    }, this),
                                    showTitle && title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: titleWrapperRefFront,
                                        className: "titleWrapper",
                                        style: {
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "titleContainer",
                                            style: {
                                                width: "".concat(titleWidthPx, "px")
                                            },
                                            children: truncateTitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 740,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/utils/RotatingImage.jsx",
                                        lineNumber: 729,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                lineNumber: 685,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 664,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 648,
                    columnNumber: 11
                }, this),
                (showTitle && title || showReadButton) && backHtmlElementsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        0,
                        titleAndReadWrapperZPosition
                    ],
                    rotation: [
                        0,
                        Math.PI,
                        0
                    ],
                    renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 13 : 7,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            renderOrder: isSelected || isHighlighted || isSecondaryHighlighted ? 13 : 7,
                            frustumCulled: false
                        }, onClick ? {
                            onClick: onClick
                        } : {}), {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                    args: [
                                        wrapperWidth,
                                        wrapperHeight
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#000000",
                                    transparent: true,
                                    opacity: 0,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"],
                                    depthWrite: false,
                                    depthTest: false
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 762,
                                    columnNumber: 15
                                }, this)
                            ]
                        }), void 0, true, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 756,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                            center: false,
                            className: "titleAndReadWrapper",
                            style: {
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -30%)',
                                width: "".concat(wrapperWidthPx, "px"),
                                height: "".concat(wrapperHeightPx, "px"),
                                minWidth: "".concat(wrapperWidthPx, "px"),
                                minHeight: "".concat(wrapperHeightPx, "px"),
                                maxWidth: 'none',
                                maxHeight: 'none',
                                margin: 0,
                                padding: 0,
                                pointerEvents: 'none'
                            },
                            transform: true,
                            occlude: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "titleAndReadContainer",
                                style: {
                                    width: "".concat(wrapperWidthPx, "px"),
                                    height: "".concat(articleHeightPx, "px"),
                                    minWidth: "".concat(wrapperWidthPx, "px"),
                                    minHeight: "".concat(articleHeightPx, "px"),
                                    maxWidth: 'none',
                                    maxHeight: 'none',
                                    opacity: displayOpacity,
                                    margin: 0,
                                    padding: 0,
                                    position: 'relative',
                                    pointerEvents: 'none',
                                    transform: 'translateY(-20%)'
                                },
                                children: [
                                    showReadButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "readWrapper",
                                        style: {
                                            position: 'absolute',
                                            top: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%',
                                            height: "".concat(readWrapperHeightPxBack, "px"),
                                            opacity: isMeasurementReadyBack ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                            pointerEvents: isMeasurementReadyBack ? 'auto' : 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "readButton",
                                            onClick: onReadClick,
                                            style: {
                                                pointerEvents: 'auto'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "readButtonText",
                                                children: "READ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                                lineNumber: 829,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 824,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/utils/RotatingImage.jsx",
                                        lineNumber: 810,
                                        columnNumber: 19
                                    }, this),
                                    showTitle && title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: titleWrapperRefBack,
                                        className: "titleWrapper",
                                        style: {
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "titleContainer",
                                            style: {
                                                width: "".concat(titleWidthPx, "px")
                                            },
                                            children: truncateTitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 847,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/utils/RotatingImage.jsx",
                                        lineNumber: 836,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                lineNumber: 792,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 771,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 755,
                    columnNumber: 11
                }, this),
                showCross && crossVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: crossGroupRef,
                    position: [
                        0,
                        crossBottomPosition,
                        crossZPosition
                    ],
                    renderOrder: 1000,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        className: "crossHtml",
                        transform: true,
                        occlude: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "crossContainer",
                            style: {
                                opacity: isSecondaryHighlighted ? 0 : displayOpacity
                            },
                            onClick: onCloseCross || undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crossBackground"
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 877,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crossBorder"
                                }, void 0, false, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 878,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crossLines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crossLine line1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crossLine line2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/utils/RotatingImage.jsx",
                                            lineNumber: 881,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/utils/RotatingImage.jsx",
                                    lineNumber: 879,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/utils/RotatingImage.jsx",
                            lineNumber: 870,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/RotatingImage.jsx",
                        lineNumber: 864,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 863,
                    columnNumber: 11
                }, this),
                isSecondaryHighlighted && !showCross && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: secondaryConnectionPointRef,
                    position: [
                        0,
                        crossBottomPosition,
                        crossZPosition
                    ],
                    renderOrder: 1000,
                    children: crossVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    0.01,
                                    0.01
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                lineNumber: 891,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                color: "#ff0000",
                                transparent: true,
                                opacity: 1,
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                                depthWrite: false,
                                depthTest: true
                            }, void 0, false, {
                                fileName: "[project]/components/utils/RotatingImage.jsx",
                                lineNumber: 892,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/utils/RotatingImage.jsx",
                        lineNumber: 890,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/RotatingImage.jsx",
                    lineNumber: 888,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/utils/RotatingImage.jsx",
            lineNumber: 546,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/utils/RotatingImage.jsx",
        lineNumber: 545,
        columnNumber: 5
    }, this);
}
_s(RotatingImage, "RJq6es0H3dA+npKEYcz0DfZUkoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = RotatingImage;
const __TURBOPACK__default__export__ = RotatingImage;
var _c;
__turbopack_context__.k.register(_c, "RotatingImage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/LoadingStateManager.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
function useLoadingState() {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('loadingState', {
        nodesLoaded: 0,
        totalNodes: 0,
        isLoading: true,
        nodesVisible: []
    }), 1), loadingState = _useStore[0];
    return loadingState;
}
_s(useLoadingState, "XNlVQFhVQhAluOWKuH0YbXP4ebg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
function useNodeVisibility(nodeId, index, totalNodes) {
    _s1();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isVisible = _useState[0], setIsVisible = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), opacity = _useState1[0], setOpacity = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('loadingState', {
        nodesLoaded: 0,
        totalNodes: 0,
        isLoading: true,
        nodesVisible: []
    }), 1), loadingState = _useStore[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeVisibility.useEffect": function() {
            var baseDelay = 50;
            var staggerDelay = index * baseDelay;
            var maxDelay = totalNodes * baseDelay;
            if (!loadingState.isLoading && loadingState.totalNodes > 0) {
                var timer = setTimeout({
                    "useNodeVisibility.useEffect.timer": function() {
                        setIsVisible(true);
                        var fadeDuration = 800;
                        var startTime = Date.now();
                        var animate = {
                            "useNodeVisibility.useEffect.timer.animate": function() {
                                var elapsed = Date.now() - startTime;
                                var progress = Math.min(elapsed / fadeDuration, 1);
                                var eased = 1 - Math.pow(1 - progress, 3);
                                setOpacity(eased);
                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            }
                        }["useNodeVisibility.useEffect.timer.animate"];
                        animate();
                    }
                }["useNodeVisibility.useEffect.timer"], staggerDelay);
                return ({
                    "useNodeVisibility.useEffect": function() {
                        return clearTimeout(timer);
                    }
                })["useNodeVisibility.useEffect"];
            }
        }
    }["useNodeVisibility.useEffect"], [
        loadingState.isLoading,
        loadingState.totalNodes,
        index,
        totalNodes
    ]);
    return {
        isVisible: isVisible,
        opacity: Math.max(opacity, 0.1)
    };
}
_s1(useNodeVisibility, "7lPZhnp+gYcBygxeUAAqVQu4o70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
function initializeLoadingState(totalNodes) {
    var store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState({
            nodesLoaded: 0,
            totalNodes: totalNodes,
            isLoading: true,
            nodesVisible: []
        });
    }
}
function completeLoading() {
    var store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                isLoading: false
            });
        });
    }
}
function markNodeLoaded(nodeId) {
    var store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('loadingState');
    if (store) {
        store.setState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                nodesLoaded: prev.nodesLoaded + 1,
                nodesVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev.nodesVisible || []).concat([
                    nodeId
                ])
            });
        });
    }
}
const __TURBOPACK__default__export__ = {
    useLoadingState: useLoadingState,
    useNodeVisibility: useNodeVisibility,
    initializeLoadingState: initializeLoadingState,
    completeLoading: completeLoading,
    markNodeLoaded: markNodeLoaded
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/templates/ArticleNodeTemplate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeModals/archiveModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/whiteMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useConnectionHighlight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useShouldShowTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$RotatingImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/RotatingImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function ArticleNodeWithModel(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(nodeData.modelPath), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeContent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        nodeData: nodeData,
        nodes: nodes,
        materials: materials
    }, props), void 0, false, {
        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(ArticleNodeWithModel, "3EbVibAGuOW6XeBFAk0EenvHzHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c = ArticleNodeWithModel;
function ArticleNodeWithoutModel(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeContent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        nodeData: nodeData,
        nodes: {},
        materials: {}
    }, props), void 0, false, {
        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_c1 = ArticleNodeWithoutModel;
function ArticleNodeContent(param) {
    var nodeData = param.nodeData, nodes = param.nodes, materials = param.materials, showAllLines = param.showAllLines, props = param.props, setTitle = param.setTitle, setDefault = param.setDefault, selectedComponent = param.selectedComponent;
    var _selectedNode_id, _selectedNode_id1, _nodeData_connectionKeywords, _nodeData_connectionKeywords1, _nodeData_connectionKeywords2, _nodeData_connectionKeywords3;
    _s1();
    var objectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), linesActive = _useState[0], setLinesActive = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), clicked = _useState1[0], setClicked = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), clickCount = _useState2[0], setClickCount = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), modalIsOpen = _useState3[0], setOpen = _useState3[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("".concat(nodeData.id, "Store"), false), 2), Store = _useStore[0], setStore = _useStore[1];
    var isSelectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var position = nodeData.position || [
        0,
        0,
        0
    ];
    var centerPoint = position;
    var whiteMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleNodeContent.useMemo[whiteMaterial]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWhiteMaterial"])();
        }
    }["ArticleNodeContent.useMemo[whiteMaterial]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionHighlight"])(nodeData.id, linesActive);
    var shouldShowTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShouldShowTitle"])(nodeData.id);
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('elementOpacityStore', {}), 1), opacityMap = _useStore1[0];
    var opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore2[0];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('secondaryHighlightedArticlesStore', []), 1), secondaryHighlightedArticles = _useStore3[0];
    var nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
    var totalNodes = 83;
    var _useNodeVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeVisibility"])(nodeData.id, nodeIndex, totalNodes), isVisible = _useNodeVisibility.isVisible, loadingOpacity = _useNodeVisibility.opacity;
    var isSecondaryHighlighted = secondaryHighlightedArticles === null || secondaryHighlightedArticles === void 0 ? void 0 : secondaryHighlightedArticles.includes(nodeData.id);
    var finalOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleNodeContent.useMemo[finalOpacity]": function() {
            if (!isVisible) return 0;
            var baseOpacity = opacity * loadingOpacity;
            return baseOpacity;
        }
    }["ArticleNodeContent.useMemo[finalOpacity]"], [
        isVisible,
        opacity,
        loadingOpacity
    ]);
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 2), selectedNode = _useStore4[0], setSelectedNode = _useStore4[1];
    var isDimmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleNodeContent.useMemo[isDimmed]": function() {
            return selectedNode && selectedNode.id !== nodeData.id && !(highlightedNodes === null || highlightedNodes === void 0 ? void 0 : highlightedNodes.includes(nodeData.id)) && !isSecondaryHighlighted;
        }
    }["ArticleNodeContent.useMemo[isDimmed]"], [
        selectedNode,
        nodeData.id,
        highlightedNodes,
        isSecondaryHighlighted
    ]);
    var isHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleNodeContent.useMemo[isHighlighted]": function() {
            var _selectedNode_id;
            return (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id || (highlightedNodes === null || highlightedNodes === void 0 ? void 0 : highlightedNodes.includes(nodeData.id)) && (selectedNode === null || selectedNode === void 0 ? void 0 : (_selectedNode_id = selectedNode.id) === null || _selectedNode_id === void 0 ? void 0 : _selectedNode_id.startsWith('G'));
        }
    }["ArticleNodeContent.useMemo[isHighlighted]"], [
        selectedNode,
        nodeData.id,
        highlightedNodes
    ]);
    var articleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleNodeContent.useMemo[articleScale]": function() {
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
        }
    }["ArticleNodeContent.useMemo[articleScale]"], [
        isDimmed,
        isHighlighted
    ]);
    var _useStore5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 2), setHighlightedNodes = _useStore5[1];
    var _useStore6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false), 1), cameraInteraction = _useStore6[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleNodeContent.useEffect": function() {
            if (isSelectingRef.current) {
                return;
            }
            if (selectedNode && selectedNode.id !== nodeData.id && linesActive) {
                requestAnimationFrame({
                    "ArticleNodeContent.useEffect": function() {
                        if (!isSelectingRef.current) {
                            setClickCount(0);
                            setClicked(false);
                            setLinesActive(false);
                            setStore(false);
                        }
                    }
                }["ArticleNodeContent.useEffect"]);
            }
        }
    }["ArticleNodeContent.useEffect"], [
        selectedNode,
        linesActive,
        nodeData.id,
        setStore
    ]);
    function handleOpen() {
        setOpen(!modalIsOpen);
    }
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), modelState = _useState4[0], setModelState = _useState4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleNodeContent.useEffect": function() {
            if (!nodeData.connections || nodeData.connections.length === 0) {
                setModelState(false);
                return;
            }
            var checkConnections = {
                "ArticleNodeContent.useEffect.checkConnections": function() {
                    var getStore = __turbopack_context__.r("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)").getStore;
                    var anyActive = nodeData.connections.some({
                        "ArticleNodeContent.useEffect.checkConnections.anyActive": function(connId) {
                            try {
                                var store = getStore("".concat(connId, "Store"), false);
                                return store === true;
                            } catch (e) {
                                return false;
                            }
                        }
                    }["ArticleNodeContent.useEffect.checkConnections.anyActive"]);
                    setModelState(anyActive);
                }
            }["ArticleNodeContent.useEffect.checkConnections"];
            checkConnections();
            var interval = setInterval(checkConnections, 500);
            return ({
                "ArticleNodeContent.useEffect": function() {
                    return clearInterval(interval);
                }
            })["ArticleNodeContent.useEffect"];
        }
    }["ArticleNodeContent.useEffect"], [
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
    var handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleNodeContent.useCallback[handleClick]": function(e) {
            if (e) {
                e.stopPropagation();
            }
            setClickCount({
                "ArticleNodeContent.useCallback[handleClick]": function(prev) {
                    var newCount = prev === 0 ? 1 : 0;
                    if (newCount === 1) {
                        isSelectingRef.current = true;
                        requestAnimationFrame({
                            "ArticleNodeContent.useCallback[handleClick]": function() {
                                setClicked(true);
                                setLinesActive(true);
                                setStore(true);
                                if (setTitle) setTitle();
                                setTimeout({
                                    "ArticleNodeContent.useCallback[handleClick]": function() {
                                        isSelectingRef.current = false;
                                    }
                                }["ArticleNodeContent.useCallback[handleClick]"], 100);
                            }
                        }["ArticleNodeContent.useCallback[handleClick]"]);
                    } else {
                        setClicked(false);
                        setLinesActive(false);
                        setDefault();
                        setStore(false);
                    }
                    return newCount;
                }
            }["ArticleNodeContent.useCallback[handleClick]"]);
        }
    }["ArticleNodeContent.useCallback[handleClick]"], [
        setStore,
        setTitle,
        setDefault
    ]);
    // Slugify title for URL hash
    var slugifyTitle = function(title) {
        if (!title) return '';
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    function handleReadClick(e) {
        e.stopPropagation();
        setOpen(true);
        if (nodeData.title) {
            var hash = slugifyTitle(nodeData.title);
            window.history.pushState(null, '', "#".concat(hash));
        }
    }
    function closeAll() {
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
        setDefault();
        setStore(false);
    }
    var handleCloseCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleNodeContent.useCallback[handleCloseCross]": function(e) {
            e.stopPropagation();
            setClickCount(0);
            setClicked(false);
            setLinesActive(false);
            setStore(false);
            setSelectedNode(null);
            setHighlightedNodes([]);
            if (setDefault) setDefault();
        }
    }["ArticleNodeContent.useCallback[handleCloseCross]"], [
        setStore,
        setSelectedNode,
        setHighlightedNodes,
        setDefault
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleNodeContent.useEffect": function() {
            if (clickCount === 1) {
                setLinesActive(true);
                if (setTitle) setTitle();
                setStore(true);
            }
        }
    }["ArticleNodeContent.useEffect"], [
        clicked,
        setTitle,
        setStore
    ]);
    // Handle hash on page load - open modal if hash matches article title
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleNodeContent.useEffect": function() {
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !nodeData.title) return;
            var hash = window.location.hash.substring(1);
            if (!hash) return;
            var articleHash = slugifyTitle(nodeData.title);
            if (articleHash === hash && !modalIsOpen) {
                setTimeout({
                    "ArticleNodeContent.useEffect": function() {
                        setOpen(true);
                    }
                }["ArticleNodeContent.useEffect"], 1000);
            }
        }
    }["ArticleNodeContent.useEffect"], [
        nodeData.title,
        modalIsOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
            dispose: null,
            frustumCulled: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                    !modelState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$RotatingImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotatingImage"], {
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
                        showCross: (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id && !isSecondaryHighlighted,
                        title: nodeData.title,
                        showTitle: (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id || (highlightedNodes === null || highlightedNodes === void 0 ? void 0 : highlightedNodes.includes(nodeData.id)) && (selectedNode === null || selectedNode === void 0 ? void 0 : (_selectedNode_id = selectedNode.id) === null || _selectedNode_id === void 0 ? void 0 : _selectedNode_id.startsWith('G')),
                        showReadButton: (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id || (highlightedNodes === null || highlightedNodes === void 0 ? void 0 : highlightedNodes.includes(nodeData.id)) && (selectedNode === null || selectedNode === void 0 ? void 0 : (_selectedNode_id1 = selectedNode.id) === null || _selectedNode_id1 === void 0 ? void 0 : _selectedNode_id1.startsWith('G')),
                        onReadClick: handleReadClick,
                        onCloseCross: handleCloseCross,
                        onClick: handleClick,
                        nodeId: nodeData.id,
                        highlightState: {
                            isSelected: (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id,
                            isHighlighted: highlightedNodes === null || highlightedNodes === void 0 ? void 0 : highlightedNodes.includes(nodeData.id),
                            isSecondaryHighlighted: isSecondaryHighlighted,
                            hasSelection: !!selectedNode
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: modalIsOpen,
                            contentLabel: "Article Modal",
                            className: "archive-modal-content",
                            overlayClassName: "archive-modal-overlay",
                            bodyOpenClassName: "archive-modal-open",
                            htmlOpenClassName: "archive-modal-open",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                closeModal: function() {
                                    return handleCloseModal();
                                },
                                connect1: ((_nodeData_connectionKeywords = nodeData.connectionKeywords) === null || _nodeData_connectionKeywords === void 0 ? void 0 : _nodeData_connectionKeywords[0]) || "",
                                connect2: ((_nodeData_connectionKeywords1 = nodeData.connectionKeywords) === null || _nodeData_connectionKeywords1 === void 0 ? void 0 : _nodeData_connectionKeywords1[1]) || "",
                                connect3: ((_nodeData_connectionKeywords2 = nodeData.connectionKeywords) === null || _nodeData_connectionKeywords2 === void 0 ? void 0 : _nodeData_connectionKeywords2[2]) || "",
                                connect4: ((_nodeData_connectionKeywords3 = nodeData.connectionKeywords) === null || _nodeData_connectionKeywords3 === void 0 ? void 0 : _nodeData_connectionKeywords3[3]) || "",
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
        }), void 0, false, {
            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s1(ArticleNodeContent, "LoTLCEw8bE97o3we7G6eCE6EnSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionHighlight"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShouldShowTitle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeVisibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c2 = ArticleNodeContent;
var ArticleNodeTemplate = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c3 = function ArticleNodeTemplate(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    var hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';
    if (hasModel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeWithModel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                nodeData: nodeData
            }, props), void 0, false, {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleNodeWithoutModel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            nodeData: nodeData
        }, props), void 0, false, {
            fileName: "[project]/components/templates/ArticleNodeTemplate.jsx",
            lineNumber: 318,
            columnNumber: 12
        }, this);
    }
}, function(prevProps, nextProps) {
    var prevPos = prevProps.nodeData.position || [
        0,
        0,
        0
    ];
    var nextPos = nextProps.nodeData.position || [
        0,
        0,
        0
    ];
    var positionChanged = prevPos[0] !== nextPos[0] || prevPos[1] !== nextPos[1] || prevPos[2] !== nextPos[2];
    if (positionChanged) return false;
    return prevProps.nodeData.id === nextProps.nodeData.id && prevProps.showAllLines === nextProps.showAllLines;
});
_c4 = ArticleNodeTemplate;
const __TURBOPACK__default__export__ = ArticleNodeTemplate;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ArticleNodeWithModel");
__turbopack_context__.k.register(_c1, "ArticleNodeWithoutModel");
__turbopack_context__.k.register(_c2, "ArticleNodeContent");
__turbopack_context__.k.register(_c3, "ArticleNodeTemplate$React.memo");
__turbopack_context__.k.register(_c4, "ArticleNodeTemplate");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/templates/GlossaryNodeTemplate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlossaryNodeTemplate",
    ()=>GlossaryNodeTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/whiteMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useConnectionHighlight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/useShouldShowTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function GlossaryNodeWithModel(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(nodeData.modelPath), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeContent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        nodeData: nodeData,
        nodes: nodes,
        materials: materials
    }, props), void 0, false, {
        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(GlossaryNodeWithModel, "3EbVibAGuOW6XeBFAk0EenvHzHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c = GlossaryNodeWithModel;
function GlossaryNodeWithoutModel(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeContent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        nodeData: nodeData,
        nodes: {},
        materials: {}
    }, props), void 0, false, {
        fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = GlossaryNodeWithoutModel;
function GlossaryNodeContent(param) {
    var nodeData = param.nodeData, nodes = param.nodes, materials = param.materials, showAllLines = param.showAllLines, title = param.title, active = param.active, props = param.props, setTitle = param.setTitle, setDefault = param.setDefault, glossaryShellComponent = param.glossaryShellComponent;
    _s1();
    var objectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), linesActive = _useState[0], setLinesActive = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), clicked = _useState1[0], setClicked = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), clickCount = _useState2[0], setClickCount = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), modalIsOpen = _useState3[0], setOpen = _useState3[1];
    var isSelectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var position = nodeData.position || [
        0,
        0,
        0
    ];
    var centerPoint = position;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('elementOpacityStore', {}), 1), opacityMap = _useStore[0];
    var opacity = opacityMap[nodeData.id] !== undefined ? opacityMap[nodeData.id] : 1.0;
    var crossBottomOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[crossBottomOffset]": function() {
            return 1.93; // Offset downward from keyword center (matches connectionController with 0.35 scale)
        }
    }["GlossaryNodeContent.useMemo[crossBottomOffset]"], []);
    var nodeIndex = nodeData.index !== undefined ? nodeData.index : 0;
    var totalNodes = 83;
    var _useNodeVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeVisibility"])(nodeData.id, nodeIndex, totalNodes), isVisible = _useNodeVisibility.isVisible, loadingOpacity = _useNodeVisibility.opacity;
    var finalOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[finalOpacity]": function() {
            if (!isVisible) return 0;
            return opacity * loadingOpacity;
        }
    }["GlossaryNodeContent.useMemo[finalOpacity]"], [
        isVisible,
        opacity,
        loadingOpacity
    ]);
    var isDimmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[isDimmed]": function() {
            var isKeyword = nodeData.id && nodeData.id.startsWith('G');
            return isKeyword && Math.abs(finalOpacity - 0.3) < 0.01;
        }
    }["GlossaryNodeContent.useMemo[isDimmed]"], [
        finalOpacity,
        nodeData.id
    ]);
    var whiteMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[whiteMaterial]": function() {
            var material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$whiteMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWhiteMaterial"])();
            material.opacity = finalOpacity;
            material.transparent = finalOpacity < 1.0;
            return material;
        }
    }["GlossaryNodeContent.useMemo[whiteMaterial]"], [
        finalOpacity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionHighlight"])(nodeData.id, linesActive);
    var shouldShowTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShouldShowTitle"])(nodeData.id);
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore1[0];
    var isHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[isHighlighted]": function() {
            return Array.isArray(highlightedNodes) && highlightedNodes.includes(nodeData.id);
        }
    }["GlossaryNodeContent.useMemo[isHighlighted]"], [
        highlightedNodes,
        nodeData.id
    ]);
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 2), selectedNode = _useStore2[0], setSelectedNode = _useStore2[1];
    var isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[isSelected]": function() {
            return (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === nodeData.id;
        }
    }["GlossaryNodeContent.useMemo[isSelected]"], [
        selectedNode,
        nodeData.id
    ]);
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 2), setHighlightedNodes = _useStore3[1];
    var isSecondaryHighlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryNodeContent.useMemo[isSecondaryHighlighted]": function() {
            return isHighlighted && !isSelected && !linesActive;
        }
    }["GlossaryNodeContent.useMemo[isSecondaryHighlighted]"], [
        isHighlighted,
        isSelected,
        linesActive
    ]);
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("".concat(nodeData.id, "Store"), false), 2), clickCounter4 = _useStore4[0], setClickCounter4 = _useStore4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryNodeContent.useEffect": function() {
            if (isSelectingRef.current) {
                return;
            }
            if (selectedNode && selectedNode.id !== nodeData.id && linesActive) {
                requestAnimationFrame({
                    "GlossaryNodeContent.useEffect": function() {
                        if (!isSelectingRef.current) {
                            setClickCount(0);
                            setClicked(false);
                            setLinesActive(false);
                        }
                    }
                }["GlossaryNodeContent.useEffect"]);
            }
        }
    }["GlossaryNodeContent.useEffect"], [
        selectedNode,
        linesActive,
        nodeData.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryNodeContent.useEffect": function() {
            if (materials && Object.keys(materials).length > 0) {
                Object.values(materials).forEach({
                    "GlossaryNodeContent.useEffect": function(material) {
                        if (material) {
                            material.opacity = finalOpacity;
                            material.transparent = finalOpacity < 1.0;
                        }
                    }
                }["GlossaryNodeContent.useEffect"]);
            }
        }
    }["GlossaryNodeContent.useEffect"], [
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
    var handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryNodeContent.useCallback[handleClick]": function(e) {
            if (e) {
                e.stopPropagation();
            }
            isSelectingRef.current = true;
            requestAnimationFrame({
                "GlossaryNodeContent.useCallback[handleClick]": function() {
                    setClicked({
                        "GlossaryNodeContent.useCallback[handleClick]": function(prev) {
                            return !prev;
                        }
                    }["GlossaryNodeContent.useCallback[handleClick]"]);
                    setClickCount({
                        "GlossaryNodeContent.useCallback[handleClick]": function(prev) {
                            return prev + 1;
                        }
                    }["GlossaryNodeContent.useCallback[handleClick]"]);
                    setClickCounter4(false);
                    setTimeout({
                        "GlossaryNodeContent.useCallback[handleClick]": function() {
                            isSelectingRef.current = false;
                        }
                    }["GlossaryNodeContent.useCallback[handleClick]"], 100);
                }
            }["GlossaryNodeContent.useCallback[handleClick]"]);
        }
    }["GlossaryNodeContent.useCallback[handleClick]"], [
        setClickCounter4
    ]);
    function closeAll() {
        setClickCount(0);
        setClicked(false);
        setLinesActive(false);
    }
    var handleCloseCross = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryNodeContent.useCallback[handleCloseCross]": function(e) {
            e.stopPropagation();
            setClickCount(0);
            setClicked(false);
            setLinesActive(false);
            setClickCounter4(false);
            setSelectedNode(null);
            setHighlightedNodes([]);
            if (setDefault) setDefault();
        }
    }["GlossaryNodeContent.useCallback[handleCloseCross]"], [
        setClickCounter4,
        setSelectedNode,
        setHighlightedNodes,
        setDefault
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryNodeContent.useEffect": function() {
            if (clickCount === 1) {
                setLinesActive(true);
                if (setTitle) setTitle();
                setClickCounter4(true);
            } else if (clickCount === 2) {
                setLinesActive(false);
                setClickCount(0);
                if (setDefault) setDefault();
            }
        }
    }["GlossaryNodeContent.useEffect"], [
        clicked,
        setTitle,
        setDefault,
        setClickCounter4
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryNodeContent.useEffect": function() {
            if (showAllLines) {
                setClickCount(1);
            } else if (!showAllLines) {
                setClickCount(0);
            }
        }
    }["GlossaryNodeContent.useEffect"], [
        showAllLines
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            0
                        ],
                        visible: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    5,
                                    2
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                transparent: true,
                                opacity: 0,
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glossaryContainer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glossaryPill ".concat(isSelected || isHighlighted || linesActive ? 'selected' : '', " ").concat(isSecondaryHighlighted ? 'secondaryHighlighted' : '', " ").concat(isHighlighted || linesActive ? 'highlighted' : '', " ").concat(isDimmed ? 'dimmed' : ''),
                                    onClick: function(e) {
                                        e.stopPropagation();
                                        handleClick();
                                    },
                                    style: {
                                        opacity: finalOpacity
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "glossaryPillTitle",
                                            children: (title || nodeData.title || "").toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        (isSelected || isHighlighted || linesActive) && nodeData.hasOpenButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "glossaryPillOpenButton",
                                            onClick: function(e) {
                                                e.stopPropagation();
                                                var slugifyTitle = function(title) {
                                                    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                                                };
                                                var keywordSlug = slugifyTitle(nodeData.title || '');
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    sessionStorage.setItem('fromLivingContinuity', Date.now().toString());
                                                }
                                                window.location.href = "/glossary#".concat(keywordSlug);
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
                                (isSelected || isHighlighted || linesActive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glossaryCross ".concat(isSelected || isHighlighted || linesActive ? 'selected' : ''),
                                    style: {
                                        opacity: finalOpacity
                                    },
                                    onClick: handleCloseCross,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossBackground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossBorder"
                                        }, void 0, false, {
                                            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glossaryCrossLines",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glossaryCrossLine line1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            }), void 0, true, {
                fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            linesActive == true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(position).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(centerPoint)),
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
            showAllLines == true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(position).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(centerPoint)),
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
_s1(GlossaryNodeContent, "mla9oBAkbefxdqFzjHTMXeMjX60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeVisibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useConnectionHighlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionHighlight"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$useShouldShowTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShouldShowTitle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c2 = GlossaryNodeContent;
var GlossaryNodeTemplate = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c3 = function GlossaryNodeTemplate(_param) {
    var nodeData = _param.nodeData, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "nodeData"
    ]);
    var hasModel = !!nodeData.modelPath && nodeData.modelPath.trim() !== '';
    if (hasModel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeWithModel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                nodeData: nodeData
            }, props), void 0, false, {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlossaryNodeWithoutModel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            nodeData: nodeData
        }, props), void 0, false, {
            fileName: "[project]/components/templates/GlossaryNodeTemplate.jsx",
            lineNumber: 284,
            columnNumber: 12
        }, this);
    }
}, function(prevProps, nextProps) {
    var prevPos = prevProps.nodeData.position || [
        0,
        0,
        0
    ];
    var nextPos = nextProps.nodeData.position || [
        0,
        0,
        0
    ];
    var positionChanged = prevPos[0] !== nextPos[0] || prevPos[1] !== nextPos[1] || prevPos[2] !== nextPos[2];
    if (positionChanged) return false;
    return prevProps.nodeData.id === nextProps.nodeData.id && prevProps.showAllLines === nextProps.showAllLines;
});
_c4 = GlossaryNodeTemplate;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GlossaryNodeWithModel");
__turbopack_context__.k.register(_c1, "GlossaryNodeWithoutModel");
__turbopack_context__.k.register(_c2, "GlossaryNodeContent");
__turbopack_context__.k.register(_c3, "GlossaryNodeTemplate$React.memo");
__turbopack_context__.k.register(_c4, "GlossaryNodeTemplate");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/CameraInteractionTracker.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraInteractionTracker",
    ()=>CameraInteractionTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
function CameraInteractionTracker() {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false), 2), setCameraInteraction = _useStore[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore1[0];
    var interactionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isInteractingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraInteractionTracker.useEffect": function() {
            if (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) {
                setCameraInteraction(false);
                if (interactionTimeoutRef.current) {
                    clearTimeout(interactionTimeoutRef.current);
                    interactionTimeoutRef.current = null;
                }
                isInteractingRef.current = false;
            }
        }
    }["CameraInteractionTracker.useEffect"], [
        selectedNode,
        setCameraInteraction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraInteractionTracker.useEffect": function() {
            var canvas = document.querySelector('canvas');
            if (!canvas) return;
            var dragStartPos = null;
            var isDragging = false;
            var handlePointerDown = {
                "CameraInteractionTracker.useEffect.handlePointerDown": function(e) {
                    dragStartPos = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    isDragging = false;
                }
            }["CameraInteractionTracker.useEffect.handlePointerDown"];
            var handlePointerMove = {
                "CameraInteractionTracker.useEffect.handlePointerMove": function(e) {
                    if (dragStartPos && !isDragging) {
                        var dx = Math.abs(e.clientX - dragStartPos.x);
                        var dy = Math.abs(e.clientY - dragStartPos.y);
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
                }
            }["CameraInteractionTracker.useEffect.handlePointerMove"];
            var handlePointerUp = {
                "CameraInteractionTracker.useEffect.handlePointerUp": function() {
                    if (isDragging) {
                        isInteractingRef.current = false;
                        if (interactionTimeoutRef.current) {
                            clearTimeout(interactionTimeoutRef.current);
                        }
                        interactionTimeoutRef.current = setTimeout({
                            "CameraInteractionTracker.useEffect.handlePointerUp": function() {
                                if (!isInteractingRef.current) {
                                    setCameraInteraction(false);
                                }
                            }
                        }["CameraInteractionTracker.useEffect.handlePointerUp"], 1500);
                    }
                    dragStartPos = null;
                    isDragging = false;
                }
            }["CameraInteractionTracker.useEffect.handlePointerUp"];
            var handleWheel = {
                "CameraInteractionTracker.useEffect.handleWheel": function() {
                    isInteractingRef.current = true;
                    setCameraInteraction(true);
                    if (interactionTimeoutRef.current) {
                        clearTimeout(interactionTimeoutRef.current);
                    }
                    interactionTimeoutRef.current = setTimeout({
                        "CameraInteractionTracker.useEffect.handleWheel": function() {
                            if (!isInteractingRef.current) {
                                setCameraInteraction(false);
                            }
                        }
                    }["CameraInteractionTracker.useEffect.handleWheel"], 2000);
                }
            }["CameraInteractionTracker.useEffect.handleWheel"];
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
            return ({
                "CameraInteractionTracker.useEffect": function() {
                    canvas.removeEventListener('pointerdown', handlePointerDown);
                    canvas.removeEventListener('pointermove', handlePointerMove);
                    canvas.removeEventListener('pointerup', handlePointerUp);
                    canvas.removeEventListener('wheel', handleWheel);
                    if (interactionTimeoutRef.current) {
                        clearTimeout(interactionTimeoutRef.current);
                    }
                }
            })["CameraInteractionTracker.useEffect"];
        }
    }["CameraInteractionTracker.useEffect"], [
        setCameraInteraction
    ]);
    return null;
}
_s(CameraInteractionTracker, "7PqlSjk7dg8n0G5yR++0ugaWc2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = CameraInteractionTracker;
var _c;
__turbopack_context__.k.register(_c, "CameraInteractionTracker");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/ConnectionTransitionController.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionTransitionController",
    ()=>ConnectionTransitionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
function ConnectionTransitionController() {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false), 1), cameraInteraction = _useStore1[0];
    var prevSelectedNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectionTransitionController.useEffect": function() {
            var _prevSelectedNodeRef_current;
            var visibilityStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])('connectionLinesVisibilityStore');
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
            if ((selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) !== ((_prevSelectedNodeRef_current = prevSelectedNodeRef.current) === null || _prevSelectedNodeRef_current === void 0 ? void 0 : _prevSelectedNodeRef_current.id)) {
                var _prevSelectedNodeRef_current1, _prevSelectedNodeRef_current2;
                var isNewSelection = (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) && !((_prevSelectedNodeRef_current1 = prevSelectedNodeRef.current) === null || _prevSelectedNodeRef_current1 === void 0 ? void 0 : _prevSelectedNodeRef_current1.id);
                var isDeselection = !(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) && ((_prevSelectedNodeRef_current2 = prevSelectedNodeRef.current) === null || _prevSelectedNodeRef_current2 === void 0 ? void 0 : _prevSelectedNodeRef_current2.id);
                if (isNewSelection) {
                    visibilityStore.setState(false);
                    transitionTimeoutRef.current = setTimeout({
                        "ConnectionTransitionController.useEffect": function() {
                            visibilityStore.setState(true);
                        }
                    }["ConnectionTransitionController.useEffect"], 1500);
                } else if (isDeselection) {
                    visibilityStore.setState(false);
                    transitionTimeoutRef.current = setTimeout({
                        "ConnectionTransitionController.useEffect": function() {
                            visibilityStore.setState(true);
                        }
                    }["ConnectionTransitionController.useEffect"], 1000);
                }
                prevSelectedNodeRef.current = selectedNode;
            }
            if (cameraInteraction && (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id)) {
                visibilityStore.setState(false);
                transitionTimeoutRef.current = setTimeout({
                    "ConnectionTransitionController.useEffect": function() {
                        visibilityStore.setState(true);
                    }
                }["ConnectionTransitionController.useEffect"], 1200);
            }
            return ({
                "ConnectionTransitionController.useEffect": function() {
                    if (transitionTimeoutRef.current) {
                        clearTimeout(transitionTimeoutRef.current);
                    }
                }
            })["ConnectionTransitionController.useEffect"];
        }
    }["ConnectionTransitionController.useEffect"], [
        selectedNode,
        cameraInteraction
    ]);
    return null;
}
_s(ConnectionTransitionController, "GRhJw6mTwC2Hqz5m+Nuo5XBKZOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ConnectionTransitionController;
var _c;
__turbopack_context__.k.register(_c, "ConnectionTransitionController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/ModelPreloader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preloadAllModels",
    ()=>preloadAllModels,
    "preloadGLBModel",
    ()=>preloadGLBModel,
    "preloadImages",
    ()=>preloadImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
;
;
var preloadedModels = new Set();
function preloadGLBModel(path) {
    if (!path || preloadedModels.has(path)) {
        return;
    }
    preloadedModels.add(path);
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload(path);
    } catch (error) {
        console.warn("Failed to preload model ".concat(path, ":"), error);
        preloadedModels["delete"](path);
    }
}
function preloadAllModels(nodeData) {
    if (!nodeData) return;
    if (nodeData.articles) {
        nodeData.articles.forEach(function(article) {
            if (article.modelPath && article.modelPath.trim() !== '') {
                preloadGLBModel(article.modelPath);
            }
        });
    }
    if (nodeData.glossary) {
        nodeData.glossary.forEach(function(glossary) {
            if (glossary.modelPath && glossary.modelPath.trim() !== '') {
                preloadGLBModel(glossary.modelPath);
            }
        });
    }
}
function preloadImages(nodeData) {
    if (!nodeData) return Promise.resolve();
    var imagePromises = [];
    var batchSize = 6;
    var articles = nodeData.articles || [];
    for(var i = 0; i < articles.length; i += batchSize){
        var batch = articles.slice(i, i + batchSize);
        batch.forEach(function(article) {
            if (article.imageUrl) {
                var img = new Image();
                img.crossOrigin = 'anonymous';
                var promise = new Promise(function(resolve) {
                    img.onload = resolve;
                    img.onerror = resolve;
                    img.src = article.imageUrl;
                });
                imagePromises.push(promise);
            }
        });
        if (i + batchSize < articles.length) {
            imagePromises.push(new Promise(function(resolve) {
                return setTimeout(resolve, 10);
            }));
        }
    }
    return Promise.allSettled(imagePromises);
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/WalkThroughController.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalkThroughController",
    ()=>WalkThroughController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function WalkThroughController(param) {
    var nodeData = param.nodeData, processedData = param.processedData, isActive = param.isActive;
    _s();
    var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 2), setSelectedNode = _useStore[1];
    var intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var currentArticleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var visitedArticlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    var targetNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var animationProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var startPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var targetPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var animationStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalkThroughController.useEffect": function() {
            if (!isActive || !nodeData || !processedData) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                isAnimatingRef.current = false;
                animationProgressRef.current = 0;
                if (!isActive) {
                    setSelectedNode(null);
                    currentArticleRef.current = null;
                    visitedArticlesRef.current.clear();
                }
                return;
            }
            var allArticles = nodeData.articles || [];
            var allGlossary = nodeData.glossary || [];
            var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(allArticles).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(allGlossary));
            if (allNodes.length === 0) return;
            var findNearestNode = {
                "WalkThroughController.useEffect.findNearestNode": function(currentNode) {
                    if (!currentNode) {
                        return allNodes[Math.floor(Math.random() * allNodes.length)];
                    }
                    var currentDataNode = processedData.nodeMap.get(currentNode.id);
                    if (!currentDataNode || !currentDataNode.position) {
                        return allNodes[Math.floor(Math.random() * allNodes.length)];
                    }
                    var currentPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(currentDataNode.position));
                    var nearestNode = null;
                    var nearestDistance = Infinity;
                    allNodes.forEach({
                        "WalkThroughController.useEffect.findNearestNode": function(node) {
                            if (node.id === currentNode.id) return;
                            if (visitedArticlesRef.current.size < allNodes.length && visitedArticlesRef.current.has(node.id)) {
                                return;
                            }
                            var dataNode = processedData.nodeMap.get(node.id);
                            if (!dataNode || !dataNode.position) return;
                            var nodePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(dataNode.position));
                            var distance = currentPos.distanceTo(nodePos);
                            if (distance < nearestDistance) {
                                nearestDistance = distance;
                                nearestNode = node;
                            }
                        }
                    }["WalkThroughController.useEffect.findNearestNode"]);
                    if (!nearestNode || visitedArticlesRef.current.size >= allNodes.length) {
                        visitedArticlesRef.current.clear();
                        return allNodes[Math.floor(Math.random() * allNodes.length)];
                    }
                    return nearestNode;
                }
            }["WalkThroughController.useEffect.findNearestNode"];
            var visitNode = {
                "WalkThroughController.useEffect.visitNode": function(nodeItem) {
                    var node = processedData.nodeMap.get(nodeItem.id);
                    if (!node || !node.position) return;
                    targetNodeRef.current = node;
                    var targetPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(node.position));
                    var currentDistance = camera.position.distanceTo(targetPos);
                    var overviewDistance = Math.max(14, Math.min(20, currentDistance * 0.8));
                    var direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(camera.position, targetPos).normalize();
                    var cameraTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().addVectors(targetPos, direction.multiplyScalar(overviewDistance));
                    cameraTarget.y = Math.max(cameraTarget.y, targetPos.y + 5);
                    startPositionRef.current = camera.position.clone();
                    targetPositionRef.current = cameraTarget;
                    animationStartTimeRef.current = Date.now();
                    animationProgressRef.current = 0;
                    isAnimatingRef.current = true;
                    setTimeout({
                        "WalkThroughController.useEffect.visitNode": function() {
                            setSelectedNode({
                                id: nodeItem.id,
                                ts: Date.now()
                            });
                        }
                    }["WalkThroughController.useEffect.visitNode"], 7500);
                }
            }["WalkThroughController.useEffect.visitNode"];
            var nextNode = {
                "WalkThroughController.useEffect.nextNode": function() {
                    var nearestNode = findNearestNode(currentArticleRef.current);
                    if (nearestNode) {
                        currentArticleRef.current = nearestNode;
                        visitedArticlesRef.current.add(nearestNode.id);
                        visitNode(nearestNode);
                    }
                }
            }["WalkThroughController.useEffect.nextNode"];
            if (!currentArticleRef.current) {
                currentArticleRef.current = allNodes[Math.floor(Math.random() * allNodes.length)];
                visitedArticlesRef.current.add(currentArticleRef.current.id);
                visitNode(currentArticleRef.current);
            }
            intervalRef.current = setInterval({
                "WalkThroughController.useEffect": function() {
                    if (!isAnimatingRef.current) {
                        nextNode();
                    }
                }
            }["WalkThroughController.useEffect"], 30000);
            return ({
                "WalkThroughController.useEffect": function() {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    isAnimatingRef.current = false;
                }
            })["WalkThroughController.useEffect"];
        }
    }["WalkThroughController.useEffect"], [
        isActive,
        nodeData,
        processedData,
        camera,
        setSelectedNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "WalkThroughController.useFrame": function() {
            if (!isActive || !isAnimatingRef.current || !targetPositionRef.current || !startPositionRef.current) {
                return;
            }
            var elapsed = (Date.now() - animationStartTimeRef.current) / 20000;
            animationProgressRef.current = Math.min(elapsed, 1);
            var easeInOutCubic = {
                "WalkThroughController.useFrame.easeInOutCubic": function(t) {
                    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                }
            }["WalkThroughController.useFrame.easeInOutCubic"];
            var easedProgress = easeInOutCubic(animationProgressRef.current);
            camera.position.lerpVectors(startPositionRef.current, targetPositionRef.current, easedProgress);
            if (targetNodeRef.current && targetNodeRef.current.position) {
                var targetPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(targetNodeRef.current.position));
                var direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(targetPos, camera.position).normalize();
                var up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
                var right = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().crossVectors(up, direction).normalize();
                var correctedUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().crossVectors(direction, right).normalize();
                var targetMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]().lookAt(camera.position, targetPos, correctedUp);
                var targetQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromRotationMatrix(targetMatrix);
                var rotationOffset = Math.sin(easedProgress * Math.PI) * 0.15;
                var offsetQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromAxisAngle(up, rotationOffset);
                targetQuaternion.multiply(offsetQuaternion);
                camera.quaternion.slerp(targetQuaternion, 0.05);
            }
            camera.updateProjectionMatrix();
            if (animationProgressRef.current >= 1) {
                isAnimatingRef.current = false;
            }
        }
    }["WalkThroughController.useFrame"]);
    return null;
}
_s(WalkThroughController, "W3yqgNCyzlvh0pAfg4lSJnnZdrQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = WalkThroughController;
var _c;
__turbopack_context__.k.register(_c, "WalkThroughController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/CameraFOVController.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraFOVController",
    ()=>CameraFOVController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CameraFOVController() {
    _s();
    var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('highlightedNodesStore', []), 1), highlightedNodes = _useStore1[0];
    var hasHighlightedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraFOVController.useMemo[hasHighlightedElements]": function() {
            return !!selectedNode || Array.isArray(highlightedNodes) && highlightedNodes.length > 0;
        }
    }["CameraFOVController.useMemo[hasHighlightedElements]"], [
        selectedNode,
        highlightedNodes
    ]);
    var targetFOV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraFOVController.useMemo[targetFOV]": function() {
            return hasHighlightedElements ? 42 : 50;
        }
    }["CameraFOVController.useMemo[targetFOV]"], [
        hasHighlightedElements
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraFOVController.useFrame": function() {
            if (camera && camera.isPerspectiveCamera) {
                var currentFOV = camera.fov;
                var difference = targetFOV - currentFOV;
                if (Math.abs(difference) > 0.1) {
                    camera.fov += difference * 0.1;
                    camera.updateProjectionMatrix();
                } else if (Math.abs(difference) > 0.01) {
                    camera.fov = targetFOV;
                    camera.updateProjectionMatrix();
                }
            }
        }
    }["CameraFOVController.useFrame"]);
    return null;
}
_s(CameraFOVController, "xy2wvYVvfhB2w2bTinYzmhVHLqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CameraFOVController;
var _c;
__turbopack_context__.k.register(_c, "CameraFOVController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/living-continuity/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$OptimizedCanvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/OptimizedCanvas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectionControler$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/connectionControler.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ElementOpacityController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ElementOpacityController.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeComponents/topbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livingContinuityButton$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livingContinuityButton/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppressTextureErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/suppressTextureErrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$d3DataManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/d3DataManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$ArticleNodeTemplate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/templates/ArticleNodeTemplate.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$GlossaryNodeTemplate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/templates/GlossaryNodeTemplate.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/LoadingStateManager.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraInteractionTracker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/CameraInteractionTracker.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ConnectionTransitionController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ConnectionTransitionController.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ModelPreloader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$WalkThroughController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/WalkThroughController.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraFOVController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/CameraFOVController.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
var dynamic = 'force-dynamic';
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
var selectedComponents = {};
var glossaryShellComponents = {};
var initialCameraHasBeenSet = false;
var getSelectedComponent = function(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var lowerId, module, exportName, e;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!selectedComponents[id]) return [
                        3,
                        4
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    lowerId = id.toLowerCase();
                    return [
                        4,
                        __turbopack_context__.f({
                            "../../models/entries_selected/a1": {
                                id: ()=>"[project]/models/entries_selected/a1.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a1.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a1.jsx": {
                                id: ()=>"[project]/models/entries_selected/a1.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a1.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a10": {
                                id: ()=>"[project]/models/entries_selected/a10.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a10.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a10.jsx": {
                                id: ()=>"[project]/models/entries_selected/a10.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a10.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a11": {
                                id: ()=>"[project]/models/entries_selected/a11.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a11.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a11.jsx": {
                                id: ()=>"[project]/models/entries_selected/a11.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a11.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a12": {
                                id: ()=>"[project]/models/entries_selected/a12.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a12.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a12.jsx": {
                                id: ()=>"[project]/models/entries_selected/a12.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a12.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a13": {
                                id: ()=>"[project]/models/entries_selected/a13.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a13.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a13.jsx": {
                                id: ()=>"[project]/models/entries_selected/a13.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a13.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a14": {
                                id: ()=>"[project]/models/entries_selected/a14.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a14.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a14.jsx": {
                                id: ()=>"[project]/models/entries_selected/a14.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a14.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a15": {
                                id: ()=>"[project]/models/entries_selected/a15.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a15.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a15.jsx": {
                                id: ()=>"[project]/models/entries_selected/a15.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a15.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a16": {
                                id: ()=>"[project]/models/entries_selected/a16.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a16.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a16.jsx": {
                                id: ()=>"[project]/models/entries_selected/a16.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a16.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a17": {
                                id: ()=>"[project]/models/entries_selected/a17.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a17.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a17.jsx": {
                                id: ()=>"[project]/models/entries_selected/a17.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a17.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a18": {
                                id: ()=>"[project]/models/entries_selected/a18.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a18.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a18.jsx": {
                                id: ()=>"[project]/models/entries_selected/a18.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a18.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a19": {
                                id: ()=>"[project]/models/entries_selected/a19.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a19.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a19.jsx": {
                                id: ()=>"[project]/models/entries_selected/a19.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a19.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a2": {
                                id: ()=>"[project]/models/entries_selected/a2.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a2.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a2.jsx": {
                                id: ()=>"[project]/models/entries_selected/a2.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a2.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a20": {
                                id: ()=>"[project]/models/entries_selected/a20.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a20.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a20.jsx": {
                                id: ()=>"[project]/models/entries_selected/a20.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a20.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a21": {
                                id: ()=>"[project]/models/entries_selected/a21.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a21.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a21.jsx": {
                                id: ()=>"[project]/models/entries_selected/a21.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a21.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a22": {
                                id: ()=>"[project]/models/entries_selected/a22.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a22.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a22.jsx": {
                                id: ()=>"[project]/models/entries_selected/a22.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a22.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a23": {
                                id: ()=>"[project]/models/entries_selected/a23.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a23.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a23.jsx": {
                                id: ()=>"[project]/models/entries_selected/a23.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a23.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a24": {
                                id: ()=>"[project]/models/entries_selected/a24.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a24.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a24.jsx": {
                                id: ()=>"[project]/models/entries_selected/a24.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a24.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a25": {
                                id: ()=>"[project]/models/entries_selected/a25.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a25.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a25.jsx": {
                                id: ()=>"[project]/models/entries_selected/a25.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a25.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a26": {
                                id: ()=>"[project]/models/entries_selected/a26.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a26.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a26.jsx": {
                                id: ()=>"[project]/models/entries_selected/a26.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a26.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a27": {
                                id: ()=>"[project]/models/entries_selected/a27.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a27.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a27.jsx": {
                                id: ()=>"[project]/models/entries_selected/a27.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a27.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a28": {
                                id: ()=>"[project]/models/entries_selected/a28.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a28.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a28.jsx": {
                                id: ()=>"[project]/models/entries_selected/a28.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a28.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a29": {
                                id: ()=>"[project]/models/entries_selected/a29.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a29.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a29.jsx": {
                                id: ()=>"[project]/models/entries_selected/a29.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a29.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a3": {
                                id: ()=>"[project]/models/entries_selected/a3.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a3.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a3.jsx": {
                                id: ()=>"[project]/models/entries_selected/a3.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a3.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a4": {
                                id: ()=>"[project]/models/entries_selected/a4.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a4.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a4.jsx": {
                                id: ()=>"[project]/models/entries_selected/a4.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a4.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a5": {
                                id: ()=>"[project]/models/entries_selected/a5.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a5.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a5.jsx": {
                                id: ()=>"[project]/models/entries_selected/a5.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a5.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a6": {
                                id: ()=>"[project]/models/entries_selected/a6.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a6.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a6.jsx": {
                                id: ()=>"[project]/models/entries_selected/a6.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a6.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a7": {
                                id: ()=>"[project]/models/entries_selected/a7.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a7.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a7.jsx": {
                                id: ()=>"[project]/models/entries_selected/a7.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a7.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a8": {
                                id: ()=>"[project]/models/entries_selected/a8.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a8.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a8.jsx": {
                                id: ()=>"[project]/models/entries_selected/a8.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a8.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a9": {
                                id: ()=>"[project]/models/entries_selected/a9.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a9.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/entries_selected/a9.jsx": {
                                id: ()=>"[project]/models/entries_selected/a9.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/entries_selected/a9.jsx [app-client] (ecmascript, async loader)")
                            }
                        }).import("../../models/entries_selected/".concat(lowerId))
                    ];
                case 2:
                    module = _state.sent();
                    exportName = "".concat(id, "Selected2");
                    selectedComponents[id] = module[exportName] || module["default"] || module["".concat(id, "Selected")];
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    console.warn("Could not load selected component for ".concat(id, ":"), e);
                    return [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2,
                        selectedComponents[id]
                    ];
            }
        });
    })();
};
var getGlossaryShellComponent = function(path) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var key, module, e1, normalizedKey, e2, pascalCase, e;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!path) return [
                        2,
                        null
                    ];
                    key = path.replace('../glossaryShell/', '');
                    if (!!glossaryShellComponents[key]) return [
                        3,
                        14
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        ,
                        14
                    ]);
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        12
                    ]);
                    return [
                        4,
                        __turbopack_context__.f({
                            "../../models/glossaryShell/accessibility": {
                                id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/accessibility.jsx": {
                                id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/adapt": {
                                id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/adapt.jsx": {
                                id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/appropriations": {
                                id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/appropriations.jsx": {
                                id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/archive": {
                                id: ()=>"[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/archive.jsx": {
                                id: ()=>"[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/belonging": {
                                id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/belonging.jsx": {
                                id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/built-environment": {
                                id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/built-environment.jsx": {
                                id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/citizen": {
                                id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/citizen.jsx": {
                                id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/climate": {
                                id: ()=>"[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/climate.jsx": {
                                id: ()=>"[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/coercion": {
                                id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/coercion.jsx": {
                                id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/cohesion": {
                                id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/cohesion.jsx": {
                                id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/collective": {
                                id: ()=>"[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/collective.jsx": {
                                id: ()=>"[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/colonialism": {
                                id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/colonialism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/commons": {
                                id: ()=>"[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/commons.jsx": {
                                id: ()=>"[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/community": {
                                id: ()=>"[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/community.jsx": {
                                id: ()=>"[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/consumption": {
                                id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/consumption.jsx": {
                                id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/crisis": {
                                id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/crisis.jsx": {
                                id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/demolition": {
                                id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/demolition.jsx": {
                                id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/density": {
                                id: ()=>"[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/density.jsx": {
                                id: ()=>"[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/desert": {
                                id: ()=>"[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/desert.jsx": {
                                id: ()=>"[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/displacement": {
                                id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/displacement.jsx": {
                                id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/dispossession": {
                                id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/dispossession.jsx": {
                                id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/distribution": {
                                id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/distribution.jsx": {
                                id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/ecology": {
                                id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/ecology.jsx": {
                                id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/erasure": {
                                id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/erasure.jsx": {
                                id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/everyday-urbanism": {
                                id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/everyday-urbanism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/eviction": {
                                id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/eviction.jsx": {
                                id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/foreigner": {
                                id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/foreigner.jsx": {
                                id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/fragmentation": {
                                id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/fragmentation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gender": {
                                id: ()=>"[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gender.jsx": {
                                id: ()=>"[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gentrification": {
                                id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gentrification.jsx": {
                                id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/green-space": {
                                id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/green-space.jsx": {
                                id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/heritage": {
                                id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/heritage.jsx": {
                                id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/hierarchy": {
                                id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/hierarchy.jsx": {
                                id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/housing": {
                                id: ()=>"[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/housing.jsx": {
                                id: ()=>"[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/identity": {
                                id: ()=>"[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/identity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/indigenous": {
                                id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/indigenous.jsx": {
                                id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/infrastructure": {
                                id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/infrastructure.jsx": {
                                id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/just": {
                                id: ()=>"[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/just.jsx": {
                                id: ()=>"[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/kafala-visa": {
                                id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/kafala-visa.jsx": {
                                id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/knowledge": {
                                id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/knowledge.jsx": {
                                id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/labour": {
                                id: ()=>"[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/labour.jsx": {
                                id: ()=>"[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/land-use": {
                                id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/land-use.jsx": {
                                id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/marginalisation": {
                                id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/marginalisation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/memory": {
                                id: ()=>"[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/memory.jsx": {
                                id: ()=>"[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/migrant": {
                                id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/migrant.jsx": {
                                id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/multispecies": {
                                id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/multispecies.jsx": {
                                id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/narrative": {
                                id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/narrative.jsx": {
                                id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/native": {
                                id: ()=>"[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/native.jsx": {
                                id: ()=>"[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighbor": {
                                id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighbor.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighborhood": {
                                id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighborhood.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neoliberalism": {
                                id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neoliberalism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/park": {
                                id: ()=>"[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/park.jsx": {
                                id: ()=>"[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/participate": {
                                id: ()=>"[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/participate.jsx": {
                                id: ()=>"[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/periphery": {
                                id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/periphery.jsx": {
                                id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/placemaking": {
                                id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/placemaking.jsx": {
                                id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/power": {
                                id: ()=>"[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/power.jsx": {
                                id: ()=>"[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/precarity": {
                                id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/precarity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/privacy": {
                                id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/privacy.jsx": {
                                id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/public-space": {
                                id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/public-space.jsx": {
                                id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/racialbias": {
                                id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/racialbias.jsx": {
                                id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/redevelopment": {
                                id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/redevelopment.jsx": {
                                id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/rent": {
                                id: ()=>"[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/rent.jsx": {
                                id: ()=>"[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/residents": {
                                id: ()=>"[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/residents.jsx": {
                                id: ()=>"[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/segregation": {
                                id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/segregation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/self-determination": {
                                id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/self-determination.jsx": {
                                id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/solidarity": {
                                id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/solidarity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/suburban": {
                                id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/suburban.jsx": {
                                id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/sustainability": {
                                id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/sustainability.jsx": {
                                id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/territory": {
                                id: ()=>"[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/territory.jsx": {
                                id: ()=>"[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/typology": {
                                id: ()=>"[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/typology.jsx": {
                                id: ()=>"[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/uncertainty": {
                                id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/uncertainty.jsx": {
                                id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/unregulated": {
                                id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/unregulated.jsx": {
                                id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-informality": {
                                id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-informality.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-planning": {
                                id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-planning.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-renewal": {
                                id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-renewal.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban": {
                                id: ()=>"[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/waste": {
                                id: ()=>"[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/waste.jsx": {
                                id: ()=>"[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/zones-zoning": {
                                id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/zones-zoning.jsx": {
                                id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)")
                            }
                        }).import("../../models/glossaryShell/".concat(key))
                    ];
                case 3:
                    module = _state.sent();
                    return [
                        3,
                        12
                    ];
                case 4:
                    e1 = _state.sent();
                    normalizedKey = key.replace(/-/g, '');
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        7,
                        ,
                        11
                    ]);
                    return [
                        4,
                        __turbopack_context__.f({
                            "../../models/glossaryShell/accessibility": {
                                id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/accessibility.jsx": {
                                id: ()=>"[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/accessibility.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/adapt": {
                                id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/adapt.jsx": {
                                id: ()=>"[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/adapt.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/appropriations": {
                                id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/appropriations.jsx": {
                                id: ()=>"[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/appropriations.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/archive": {
                                id: ()=>"[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/archive.jsx": {
                                id: ()=>"[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/archive.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/belonging": {
                                id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/belonging.jsx": {
                                id: ()=>"[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/belonging.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/built-environment": {
                                id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/built-environment.jsx": {
                                id: ()=>"[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/built-environment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/citizen": {
                                id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/citizen.jsx": {
                                id: ()=>"[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/citizen.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/climate": {
                                id: ()=>"[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/climate.jsx": {
                                id: ()=>"[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/climate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/coercion": {
                                id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/coercion.jsx": {
                                id: ()=>"[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/coercion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/cohesion": {
                                id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/cohesion.jsx": {
                                id: ()=>"[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/cohesion.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/collective": {
                                id: ()=>"[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/collective.jsx": {
                                id: ()=>"[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/collective.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/colonialism": {
                                id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/colonialism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/colonialism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/commons": {
                                id: ()=>"[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/commons.jsx": {
                                id: ()=>"[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/commons.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/community": {
                                id: ()=>"[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/community.jsx": {
                                id: ()=>"[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/community.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/consumption": {
                                id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/consumption.jsx": {
                                id: ()=>"[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/consumption.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/crisis": {
                                id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/crisis.jsx": {
                                id: ()=>"[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/crisis.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/demolition": {
                                id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/demolition.jsx": {
                                id: ()=>"[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/demolition.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/density": {
                                id: ()=>"[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/density.jsx": {
                                id: ()=>"[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/density.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/desert": {
                                id: ()=>"[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/desert.jsx": {
                                id: ()=>"[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/desert.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/displacement": {
                                id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/displacement.jsx": {
                                id: ()=>"[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/displacement.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/dispossession": {
                                id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/dispossession.jsx": {
                                id: ()=>"[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/dispossession.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/distribution": {
                                id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/distribution.jsx": {
                                id: ()=>"[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/distribution.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/ecology": {
                                id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/ecology.jsx": {
                                id: ()=>"[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/ecology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/erasure": {
                                id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/erasure.jsx": {
                                id: ()=>"[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/erasure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/everyday-urbanism": {
                                id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/everyday-urbanism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/everyday-urbanism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/eviction": {
                                id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/eviction.jsx": {
                                id: ()=>"[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/eviction.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/foreigner": {
                                id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/foreigner.jsx": {
                                id: ()=>"[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/foreigner.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/fragmentation": {
                                id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/fragmentation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/fragmentation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gender": {
                                id: ()=>"[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gender.jsx": {
                                id: ()=>"[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gender.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gentrification": {
                                id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/gentrification.jsx": {
                                id: ()=>"[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/gentrification.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/green-space": {
                                id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/green-space.jsx": {
                                id: ()=>"[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/green-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/heritage": {
                                id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/heritage.jsx": {
                                id: ()=>"[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/heritage.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/hierarchy": {
                                id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/hierarchy.jsx": {
                                id: ()=>"[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/hierarchy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/housing": {
                                id: ()=>"[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/housing.jsx": {
                                id: ()=>"[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/housing.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/identity": {
                                id: ()=>"[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/identity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/identity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/indigenous": {
                                id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/indigenous.jsx": {
                                id: ()=>"[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/indigenous.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/infrastructure": {
                                id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/infrastructure.jsx": {
                                id: ()=>"[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/infrastructure.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/just": {
                                id: ()=>"[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/just.jsx": {
                                id: ()=>"[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/just.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/kafala-visa": {
                                id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/kafala-visa.jsx": {
                                id: ()=>"[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/kafala-visa.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/knowledge": {
                                id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/knowledge.jsx": {
                                id: ()=>"[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/knowledge.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/labour": {
                                id: ()=>"[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/labour.jsx": {
                                id: ()=>"[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/labour.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/land-use": {
                                id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/land-use.jsx": {
                                id: ()=>"[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/land-use.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/marginalisation": {
                                id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/marginalisation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/marginalisation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/memory": {
                                id: ()=>"[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/memory.jsx": {
                                id: ()=>"[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/memory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/migrant": {
                                id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/migrant.jsx": {
                                id: ()=>"[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/migrant.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/multispecies": {
                                id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/multispecies.jsx": {
                                id: ()=>"[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/multispecies.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/narrative": {
                                id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/narrative.jsx": {
                                id: ()=>"[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/narrative.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/native": {
                                id: ()=>"[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/native.jsx": {
                                id: ()=>"[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/native.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighbor": {
                                id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighbor.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighbor.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighborhood": {
                                id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neighborhood.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neighborhood.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neoliberalism": {
                                id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/neoliberalism.jsx": {
                                id: ()=>"[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/neoliberalism.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/park": {
                                id: ()=>"[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/park.jsx": {
                                id: ()=>"[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/park.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/participate": {
                                id: ()=>"[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/participate.jsx": {
                                id: ()=>"[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/participate.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/periphery": {
                                id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/periphery.jsx": {
                                id: ()=>"[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/periphery.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/placemaking": {
                                id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/placemaking.jsx": {
                                id: ()=>"[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/placemaking.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/power": {
                                id: ()=>"[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/power.jsx": {
                                id: ()=>"[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/power.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/precarity": {
                                id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/precarity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/precarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/privacy": {
                                id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/privacy.jsx": {
                                id: ()=>"[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/privacy.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/public-space": {
                                id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/public-space.jsx": {
                                id: ()=>"[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/public-space.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/racialbias": {
                                id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/racialbias.jsx": {
                                id: ()=>"[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/redevelopment": {
                                id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/redevelopment.jsx": {
                                id: ()=>"[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/redevelopment.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/rent": {
                                id: ()=>"[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/rent.jsx": {
                                id: ()=>"[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/rent.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/residents": {
                                id: ()=>"[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/residents.jsx": {
                                id: ()=>"[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/residents.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/segregation": {
                                id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/segregation.jsx": {
                                id: ()=>"[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/segregation.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/self-determination": {
                                id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/self-determination.jsx": {
                                id: ()=>"[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/self-determination.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/solidarity": {
                                id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/solidarity.jsx": {
                                id: ()=>"[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/solidarity.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/suburban": {
                                id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/suburban.jsx": {
                                id: ()=>"[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/suburban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/sustainability": {
                                id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/sustainability.jsx": {
                                id: ()=>"[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/sustainability.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/territory": {
                                id: ()=>"[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/territory.jsx": {
                                id: ()=>"[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/territory.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/typology": {
                                id: ()=>"[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/typology.jsx": {
                                id: ()=>"[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/typology.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/uncertainty": {
                                id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/uncertainty.jsx": {
                                id: ()=>"[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/uncertainty.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/unregulated": {
                                id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/unregulated.jsx": {
                                id: ()=>"[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/unregulated.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-informality": {
                                id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-informality.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-informality.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-planning": {
                                id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-planning.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-planning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-renewal": {
                                id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban-renewal.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban-renewal.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban": {
                                id: ()=>"[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/urban.jsx": {
                                id: ()=>"[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/urban.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/waste": {
                                id: ()=>"[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/waste.jsx": {
                                id: ()=>"[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/waste.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/zones-zoning": {
                                id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)")
                            },
                            "../../models/glossaryShell/zones-zoning.jsx": {
                                id: ()=>"[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/models/glossaryShell/zones-zoning.jsx [app-client] (ecmascript, async loader)")
                            }
                        }).import("../../models/glossaryShell/".concat(normalizedKey))
                    ];
                case 6:
                    module = _state.sent();
                    key = normalizedKey;
                    return [
                        3,
                        11
                    ];
                case 7:
                    e2 = _state.sent();
                    if (!(key === 'racialbias')) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        __turbopack_context__.A("[project]/models/glossaryShell/racialbias.jsx [app-client] (ecmascript, async loader)")
                    ];
                case 8:
                    module = _state.sent();
                    return [
                        3,
                        10
                    ];
                case 9:
                    throw e2;
                case 10:
                    return [
                        3,
                        11
                    ];
                case 11:
                    return [
                        3,
                        12
                    ];
                case 12:
                    pascalCase = key.split(/[-_]/).map(function(word) {
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    }).join('');
                    glossaryShellComponents[key] = module["default"] || module[pascalCase] || Object.values(module).find(function(v) {
                        return typeof v === 'function';
                    });
                    return [
                        3,
                        14
                    ];
                case 13:
                    e = _state.sent();
                    console.warn("Could not load glossary shell for ".concat(key, ":"), e);
                    return [
                        2,
                        null
                    ];
                case 14:
                    return [
                        2,
                        glossaryShellComponents[key]
                    ];
            }
        });
    })();
};
var HomePage = function() {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraOptions'), 1), cameraOptions = _useStore[0];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('livingContinuity_sceneRotation', false), 1), sceneRotation = _useStore1[0];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('walkThroughActive', false), 1), walkThroughActive = _useStore2[0];
    var showAllLines = false;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), camera = _useState[0], setCamera = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), modalIsOpen = _useState1[0], setOpen = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), title = _useState2[0], setTitle = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), nodeData = _useState3[0], setNodeData = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), processedData = _useState4[0], setProcessedData = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), selectedComponentsMap = _useState5[0], setSelectedComponentsMap = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), glossaryShellComponentsMap = _useState6[0], setGlossaryShellComponentsMap = _useState6[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore3[0];
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraInteractionStore', false), 1), cameraInteraction = _useStore4[0];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), environmentLoaded = _useState7[0], setEnvironmentLoaded = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), initialLoad = _useState8[0], setInitialLoad = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time value", "object") !== 'undefined'), 2), modalInitialized = _useState9[0], setModalInitialized = _useState9[1];
    var getInitialCameraPosition = function() {
        var radius = 28;
        var height = 6;
        var theta = Math.random() * Math.PI * 2;
        var x = radius * Math.cos(theta);
        var z = radius * Math.sin(theta);
        return [
            x,
            height,
            z
        ];
    };
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage._useState.useState": function() {
            return getInitialCameraPosition();
        }
    }["HomePage._useState.useState"]), 1), initialCameraPosition = _useState10[0];
    var frameloopMode = camera || cameraInteraction || initialLoad ? 'always' : 'demand';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                var rootElement = document.getElementById('root') || document.body;
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAppElement(rootElement);
                } catch (error) {
                    console.warn('Modal initialization warning:', error);
                }
            }
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": function() {
            fetch('/data/nodes.json').then({
                "HomePage.useEffect": function(res) {
                    if (!res.ok) {
                        throw new Error("HTTP error! status: ".concat(res.status));
                    }
                    return res.json();
                }
            }["HomePage.useEffect"]).then({
                "HomePage.useEffect": function(data) {
                    var _data_articles, _data_glossary;
                    setNodeData(data);
                    var processed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$d3DataManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processNodeData"])(data);
                    setProcessedData(processed);
                    var totalNodes = (((_data_articles = data.articles) === null || _data_articles === void 0 ? void 0 : _data_articles.length) || 0) + (((_data_glossary = data.glossary) === null || _data_glossary === void 0 ? void 0 : _data_glossary.length) || 0);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeLoadingState"])(totalNodes);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadAllModels"])(data);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ModelPreloader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadImages"])(data)["catch"]({
                        "HomePage.useEffect": function() {}
                    }["HomePage.useEffect"]);
                    var loadComponentsInBatches = {
                        "HomePage.useEffect.loadComponentsInBatches": function() {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                "HomePage.useEffect.loadComponentsInBatches": function() {
                                    var batchSize, allArticles, allGlossary, articlePromises, i, batch, batchPromise, glossaryPromises, i1, batch1, batchPromise1;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                        "HomePage.useEffect.loadComponentsInBatches": function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    batchSize = 10;
                                                    allArticles = data.articles || [];
                                                    allGlossary = data.glossary || [];
                                                    articlePromises = [];
                                                    for(i = 0; i < allArticles.length; i += batchSize){
                                                        batch = allArticles.slice(i, i + batchSize);
                                                        batchPromise = Promise.all(batch.map({
                                                            "HomePage.useEffect.loadComponentsInBatches": function(article) {
                                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                    "HomePage.useEffect.loadComponentsInBatches": function() {
                                                                        var component, e;
                                                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                                                            "HomePage.useEffect.loadComponentsInBatches": function(_state) {
                                                                                switch(_state.label){
                                                                                    case 0:
                                                                                        if (!article.selectedModelPath) return [
                                                                                            3,
                                                                                            4
                                                                                        ];
                                                                                        _state.label = 1;
                                                                                    case 1:
                                                                                        _state.trys.push([
                                                                                            1,
                                                                                            3,
                                                                                            ,
                                                                                            4
                                                                                        ]);
                                                                                        return [
                                                                                            4,
                                                                                            getSelectedComponent(article.id)
                                                                                        ];
                                                                                    case 2:
                                                                                        component = _state.sent();
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: article.id,
                                                                                                component: component
                                                                                            }
                                                                                        ];
                                                                                    case 3:
                                                                                        e = _state.sent();
                                                                                        console.warn("Failed to load selected component for ".concat(article.id, ":"), e);
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: article.id,
                                                                                                component: null
                                                                                            }
                                                                                        ];
                                                                                    case 4:
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: article.id,
                                                                                                component: null
                                                                                            }
                                                                                        ];
                                                                                }
                                                                            }
                                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                                    }
                                                                }["HomePage.useEffect.loadComponentsInBatches"])();
                                                            }
                                                        }["HomePage.useEffect.loadComponentsInBatches"])).then({
                                                            "HomePage.useEffect.loadComponentsInBatches": function(batchResults) {
                                                                setSelectedComponentsMap({
                                                                    "HomePage.useEffect.loadComponentsInBatches": function(prev) {
                                                                        var updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev);
                                                                        batchResults.forEach({
                                                                            "HomePage.useEffect.loadComponentsInBatches": function(param) {
                                                                                var id = param.id, component = param.component;
                                                                                if (component) updated[id] = component;
                                                                            }
                                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                                        return updated;
                                                                    }
                                                                }["HomePage.useEffect.loadComponentsInBatches"]);
                                                            }
                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                        articlePromises.push(batchPromise);
                                                    }
                                                    glossaryPromises = [];
                                                    for(i1 = 0; i1 < allGlossary.length; i1 += batchSize){
                                                        batch1 = allGlossary.slice(i1, i1 + batchSize);
                                                        batchPromise1 = Promise.all(batch1.map({
                                                            "HomePage.useEffect.loadComponentsInBatches": function(glossary) {
                                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                    "HomePage.useEffect.loadComponentsInBatches": function() {
                                                                        var component, e;
                                                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                                                            "HomePage.useEffect.loadComponentsInBatches": function(_state) {
                                                                                switch(_state.label){
                                                                                    case 0:
                                                                                        if (!glossary.glossaryShellPath) return [
                                                                                            3,
                                                                                            4
                                                                                        ];
                                                                                        _state.label = 1;
                                                                                    case 1:
                                                                                        _state.trys.push([
                                                                                            1,
                                                                                            3,
                                                                                            ,
                                                                                            4
                                                                                        ]);
                                                                                        return [
                                                                                            4,
                                                                                            getGlossaryShellComponent(glossary.glossaryShellPath)
                                                                                        ];
                                                                                    case 2:
                                                                                        component = _state.sent();
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: glossary.id,
                                                                                                component: component
                                                                                            }
                                                                                        ];
                                                                                    case 3:
                                                                                        e = _state.sent();
                                                                                        console.warn("Failed to load glossary shell for ".concat(glossary.id, ":"), e);
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: glossary.id,
                                                                                                component: null
                                                                                            }
                                                                                        ];
                                                                                    case 4:
                                                                                        return [
                                                                                            2,
                                                                                            {
                                                                                                id: glossary.id,
                                                                                                component: null
                                                                                            }
                                                                                        ];
                                                                                }
                                                                            }
                                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                                    }
                                                                }["HomePage.useEffect.loadComponentsInBatches"])();
                                                            }
                                                        }["HomePage.useEffect.loadComponentsInBatches"])).then({
                                                            "HomePage.useEffect.loadComponentsInBatches": function(batchResults) {
                                                                setGlossaryShellComponentsMap({
                                                                    "HomePage.useEffect.loadComponentsInBatches": function(prev) {
                                                                        var updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev);
                                                                        batchResults.forEach({
                                                                            "HomePage.useEffect.loadComponentsInBatches": function(param) {
                                                                                var id = param.id, component = param.component;
                                                                                if (component) updated[id] = component;
                                                                            }
                                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                                        return updated;
                                                                    }
                                                                }["HomePage.useEffect.loadComponentsInBatches"]);
                                                            }
                                                        }["HomePage.useEffect.loadComponentsInBatches"]);
                                                        glossaryPromises.push(batchPromise1);
                                                    }
                                                    return [
                                                        4,
                                                        Promise.allSettled((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(articlePromises).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(glossaryPromises)))
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completeLoading"])();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        }
                                    }["HomePage.useEffect.loadComponentsInBatches"]);
                                }
                            }["HomePage.useEffect.loadComponentsInBatches"])();
                        }
                    }["HomePage.useEffect.loadComponentsInBatches"];
                    loadComponentsInBatches()["catch"]({
                        "HomePage.useEffect": function(err) {
                            console.error('Error loading components:', err);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$LoadingStateManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completeLoading"])();
                        }
                    }["HomePage.useEffect"]);
                }
            }["HomePage.useEffect"])["catch"]({
                "HomePage.useEffect": function(err) {
                    console.error('Failed to load node data:', err);
                    setNodeData({
                        articles: [],
                        glossary: []
                    });
                    setProcessedData({
                        nodes: [],
                        links: [],
                        nodeMap: new Map()
                    });
                }
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": function() {
            var timer = setTimeout({
                "HomePage.useEffect.timer": function() {
                    setEnvironmentLoaded(true);
                    setTimeout({
                        "HomePage.useEffect.timer": function() {
                            setInitialLoad(false);
                        }
                    }["HomePage.useEffect.timer"], 2000);
                }
            }["HomePage.useEffect.timer"], 500);
            return ({
                "HomePage.useEffect": function() {
                    return clearTimeout(timer);
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": function() {
            var cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppressTextureErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suppressTextureErrors"])();
            return cleanup;
        }
    }["HomePage.useEffect"], []);
    var handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleOpen]": function() {
            setOpen({
                "HomePage.useCallback[handleOpen]": function(prev) {
                    return !prev;
                }
            }["HomePage.useCallback[handleOpen]"]);
        }
    }["HomePage.useCallback[handleOpen]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": function() {
            var handleKeyDown = {
                "HomePage.useEffect.handleKeyDown": function(event) {
                    if (event.key === 'Enter' && modalIsOpen) {
                        handleOpen();
                    }
                }
            }["HomePage.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "HomePage.useEffect": function() {
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        modalIsOpen,
        handleOpen
    ]);
    var titleSetters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[titleSetters]": function() {
            if (!nodeData) return {};
            var setters = {};
            nodeData.articles.forEach({
                "HomePage.useMemo[titleSetters]": function(article) {
                    setters[article.id] = ({
                        "HomePage.useMemo[titleSetters]": function() {
                            return setTitle(article.title);
                        }
                    })["HomePage.useMemo[titleSetters]"];
                }
            }["HomePage.useMemo[titleSetters]"]);
            nodeData.glossary.forEach({
                "HomePage.useMemo[titleSetters]": function(glossary) {
                    setters[glossary.id] = ({
                        "HomePage.useMemo[titleSetters]": function() {
                            return setTitle(glossary.title || '');
                        }
                    })["HomePage.useMemo[titleSetters]"];
                }
            }["HomePage.useMemo[titleSetters]"]);
            return setters;
        }
    }["HomePage.useMemo[titleSetters]"], [
        nodeData
    ]);
    var setTitleDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[setTitleDefault]": function() {
            return setTitle("");
        }
    }["HomePage.useCallback[setTitleDefault]"], []);
    var SceneBackground = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s1(function() {
        _s1();
        var scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().scene;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "HomePage.SceneBackground.useEffect": function() {
                scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x1C1C1C);
            }
        }["HomePage.SceneBackground.useEffect"], [
            scene
        ]);
        return null;
    }, "UhCC8wDD2cMyItT8qLKLhYRbhzM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
        ];
    }));
    SceneBackground.displayName = 'SceneBackground';
    var CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s2(function(param) {
        var cameraOptions = param.cameraOptions;
        _s2();
        var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "HomePage.CameraDolly.useEffect": function() {
                var _state_camera_position;
                if (selectedNode) {
                    return;
                }
                if (!cameraOptions) {
                    return;
                }
                if (!initialCameraHasBeenSet) {
                    return;
                }
                var presets = {
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
                var nextPosition = presets[cameraOptions];
                if (!nextPosition) {
                    return;
                }
                (_state_camera_position = state.camera.position).set.apply(_state_camera_position, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(nextPosition));
                state.camera.lookAt(0, 0, 0);
                state.camera.updateProjectionMatrix();
            }
        }["HomePage.CameraDolly.useEffect"], [
            cameraOptions,
            state.camera,
            selectedNode
        ]);
        return null;
    }, "yOE0EuRPE1SIu24juUg55KWn3xQ=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
        ];
    }));
    var InitialCameraSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s3(function(param) {
        var initialPosition = param.initialPosition;
        _s3();
        var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), camera = _useThree.camera, set = _useThree.set;
        var initialPositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(initialPosition);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "HomePage.InitialCameraSetup.useEffect": function() {
                if (!initialCameraHasBeenSet && initialPositionRef.current) {
                    var timer = setTimeout({
                        "HomePage.InitialCameraSetup.useEffect.timer": function() {
                            if (!initialCameraHasBeenSet) {
                                var _camera_position;
                                (_camera_position = camera.position).set.apply(_camera_position, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(initialPositionRef.current));
                                camera.lookAt(0, 0, 0);
                                camera.updateProjectionMatrix();
                                set({
                                    camera: camera
                                });
                                initialCameraHasBeenSet = true;
                            }
                        }
                    }["HomePage.InitialCameraSetup.useEffect.timer"], 50);
                    return ({
                        "HomePage.InitialCameraSetup.useEffect": function() {
                            return clearTimeout(timer);
                        }
                    })["HomePage.InitialCameraSetup.useEffect"];
                }
            }
        }["HomePage.InitialCameraSetup.useEffect"], []);
        return null;
    }, "7KgYsRRNj0yEvm3jgUYPg0pbQc8=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
        ];
    }));
    InitialCameraSetup.displayName = 'InitialCameraSetup';
    CameraDolly.displayName = 'CameraDolly';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalIsOpen,
                contentLabel: "Welcome Modal",
                shouldCloseOnOverlayClick: true,
                shouldCloseOnEsc: false,
                ariaHideApp: false,
                className: "welcomeModalContent",
                overlayClassName: "welcomeModalOverlay",
                onRequestClose: handleOpen,
                closeTimeoutMS: 150,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: handleOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livingContinuityButton$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: handleOpen
                    }, void 0, false, {
                        fileName: "[project]/app/living-continuity/page.js",
                        lineNumber: 351,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 350,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 339,
                columnNumber: 7
            }, _this),
            (!processedData || !nodeData) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeLoading",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 355,
                columnNumber: 9
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeTopbarWrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeComponents$2f$topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: title
                }, void 0, false, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 360,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 359,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcomeCanvasWrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$OptimizedCanvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    frameloop: frameloopMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneBackground, {}, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 367,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InitialCameraSetup, {
                            initialPosition: initialCameraPosition
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 368,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 1
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 369,
                            columnNumber: 9
                        }, _this),
                        environmentLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                                preset: "city"
                            }, void 0, false, {
                                fileName: "[project]/app/living-continuity/page.js",
                                lineNumber: 372,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 371,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraDolly, {
                            cameraOptions: cameraOptions
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 375,
                            columnNumber: 9
                        }, _this),
                        processedData && nodeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$WalkThroughController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalkThroughController"], {
                                    nodeData: nodeData,
                                    processedData: processedData,
                                    isActive: walkThroughActive
                                }, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ElementOpacityController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraInteractionTracker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraInteractionTracker"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ConnectionTransitionController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionTransitionController"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraFOVController$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraFOVController"], {}, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, _this),
                                nodeData.articles.map(function(article) {
                                    var node = processedData.nodeMap.get(article.id);
                                    if (!node) return null;
                                    var SelectedComponent = selectedComponentsMap[article.id];
                                    var setTitleFn = titleSetters[article.id] || setTitleDefault;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$ArticleNodeTemplate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            nodeData: node,
                                            showAllLines: showAllLines,
                                            setTitle: setTitleFn,
                                            setDefault: setTitleDefault,
                                            selectedComponent: SelectedComponent
                                        }, void 0, false, {
                                            fileName: "[project]/app/living-continuity/page.js",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, _this)
                                    }, article.id, false, {
                                        fileName: "[project]/app/living-continuity/page.js",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, _this);
                                }),
                                nodeData.glossary.map(function(glossary) {
                                    var node = processedData.nodeMap.get(glossary.id);
                                    if (!node) return null;
                                    var GlossaryShellComponent = glossaryShellComponentsMap[glossary.id];
                                    var setTitleFn = titleSetters[glossary.id] || setTitleDefault;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$templates$2f$GlossaryNodeTemplate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlossaryNodeTemplate"], {
                                            nodeData: node,
                                            showAllLines: showAllLines,
                                            title: glossary.title,
                                            setTitle: setTitleFn,
                                            setDefault: setTitleDefault,
                                            glossaryShellComponent: GlossaryShellComponent
                                        }, void 0, false, {
                                            fileName: "[project]/app/living-continuity/page.js",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, _this)
                                    }, glossary.id, false, {
                                        fileName: "[project]/app/living-continuity/page.js",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, _this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectionControler$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    processedData: processedData
                                }, void 0, false, {
                                    fileName: "[project]/app/living-continuity/page.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassiveOrbitControls, {
                            autoRotate: sceneRotation && !walkThroughActive ? true : false,
                            autoRotateSpeed: 0.5,
                            minDistance: 1,
                            maxDistance: 60,
                            enableDamping: true,
                            dampingFactor: 0.08,
                            enablePan: !walkThroughActive,
                            makeDefault: false,
                            rotateSpeed: 0.8,
                            panSpeed: 0.8,
                            zoomSpeed: 0.8,
                            enableRotate: !walkThroughActive
                        }, void 0, false, {
                            fileName: "[project]/app/living-continuity/page.js",
                            lineNumber: 433,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/living-continuity/page.js",
                    lineNumber: 364,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/app/living-continuity/page.js",
                lineNumber: 363,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true);
};
_s(HomePage, "jFnHhIDhS4q43fiyPZkCyqhdOo8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_64021694._.js.map