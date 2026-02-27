(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/utils/PassiveOrbitControls.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PassiveOrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PassiveOrbitControls(props) {
    _s();
    var gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().gl;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassiveOrbitControls.useEffect": function() {
            var domElement = gl.domElement;
            if (!domElement) return;
            var makeEventsPassive = {
                "PassiveOrbitControls.useEffect.makeEventsPassive": function() {
                    var passiveListeners = [];
                    var originalAddEventListener = domElement.addEventListener.bind(domElement);
                    var originalRemoveEventListener = domElement.removeEventListener.bind(domElement);
                    var passiveEvents = [
                        'wheel',
                        'touchstart',
                        'touchmove'
                    ];
                    domElement.addEventListener = function makeEventsPassive(type, listener, options) {
                        if (passiveEvents.includes(type)) {
                            passiveListeners.push({
                                type: type,
                                listener: listener,
                                options: options
                            });
                            var passiveOptions = typeof options === 'boolean' ? {
                                passive: true,
                                capture: options
                            } : options && (typeof options === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(options)) === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                                passive: true
                            }) : {
                                passive: true
                            };
                            return originalAddEventListener(type, listener, passiveOptions);
                        }
                        return originalAddEventListener(type, listener, options);
                    };
                    domElement.removeEventListener = ({
                        "PassiveOrbitControls.useEffect.makeEventsPassive": function(type, listener, options) {
                            if (passiveEvents.includes(type)) {
                                var index = passiveListeners.findIndex({
                                    "PassiveOrbitControls.useEffect.makeEventsPassive.index": function(l) {
                                        return l.listener === listener && l.type === type;
                                    }
                                }["PassiveOrbitControls.useEffect.makeEventsPassive.index"]);
                                if (index !== -1) {
                                    passiveListeners.splice(index, 1);
                                }
                            }
                            return originalRemoveEventListener(type, listener, options);
                        }
                    })["PassiveOrbitControls.useEffect.makeEventsPassive"];
                }
            }["PassiveOrbitControls.useEffect.makeEventsPassive"];
            makeEventsPassive();
            return ({
                "PassiveOrbitControls.useEffect": function() {
                    if (domElement.addEventListener && domElement.addEventListener !== EventTarget.prototype.addEventListener) {
                        delete domElement.addEventListener;
                        domElement.addEventListener = EventTarget.prototype.addEventListener.bind(domElement);
                    }
                    if (domElement.removeEventListener && domElement.removeEventListener !== EventTarget.prototype.removeEventListener) {
                        delete domElement.removeEventListener;
                        domElement.removeEventListener = EventTarget.prototype.removeEventListener.bind(domElement);
                    }
                }
            })["PassiveOrbitControls.useEffect"];
        }
    }["PassiveOrbitControls.useEffect"], [
        gl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), void 0, false, {
        fileName: "[project]/components/utils/PassiveOrbitControls.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s(PassiveOrbitControls, "iTWbOa64ZxlA5nuyNExgWK+vjCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = PassiveOrbitControls;
var _c;
__turbopack_context__.k.register(_c, "PassiveOrbitControls");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/CameraResetOnExitCapture.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CameraResetOnExitCapture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CameraResetOnExitCapture() {
    _s();
    var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_captureMode', false), 1), captureMode = _useStore[0];
    var resetFramesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var prevCaptureModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(captureMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraResetOnExitCapture.useFrame": function() {
            if (!(camera === null || camera === void 0 ? void 0 : camera.isOrthographicCamera)) return;
            var wasCapture = !!prevCaptureModeRef.current;
            prevCaptureModeRef.current = captureMode;
            if (wasCapture && !captureMode) {
                resetFramesRef.current = 15;
            }
            if (resetFramesRef.current > 0) {
                resetFramesRef.current--;
                camera.position.set(-14, 11, 15);
                camera.zoom = 17;
                camera.lookAt(0, 0, 0);
                camera.updateProjectionMatrix();
            }
        }
    }["CameraResetOnExitCapture.useFrame"]);
    return null;
}
_s(CameraResetOnExitCapture, "yB7XtUjSeXwLq4BBbLGOxfP7kl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CameraResetOnExitCapture;
var _c;
__turbopack_context__.k.register(_c, "CameraResetOnExitCapture");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/lightingConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightingSetup",
    ()=>LightingSetup,
    "LightingSetupComponent",
    ()=>LightingSetupComponent,
    "createLightingSetup",
    ()=>createLightingSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
var LightingSetup = {
    ambient: {
        intensity: 1.5,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff)
    },
    directional: [
        {
            position: [
                20,
                25,
                15
            ],
            intensity: 1.5,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: true,
            shadow: {
                mapSize: [
                    2048,
                    2048
                ],
                camera: {
                    near: 0.5,
                    far: 100,
                    left: -50,
                    right: 50,
                    top: 50,
                    bottom: -50
                }
            }
        },
        {
            position: [
                -20,
                20,
                -15
            ],
            intensity: 0.8,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        },
        {
            position: [
                0,
                15,
                0
            ],
            intensity: 0.5,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        },
        {
            position: [
                10,
                10,
                -20
            ],
            intensity: 0.4,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        }
    ],
    hemisphere: {
        skyColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
        groundColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x888888),
        intensity: 0.8
    }
};
function LightingSetupComponent() {
    var _this = this;
    _s();
    var mainLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightingSetupComponent.useEffect": function() {
            var _LightingSetup_directional_;
            if (mainLightRef.current && ((_LightingSetup_directional_ = LightingSetup.directional[0]) === null || _LightingSetup_directional_ === void 0 ? void 0 : _LightingSetup_directional_.shadow)) {
                var shadow = LightingSetup.directional[0].shadow;
                mainLightRef.current.shadow.mapSize.width = shadow.mapSize[0];
                mainLightRef.current.shadow.mapSize.height = shadow.mapSize[1];
                mainLightRef.current.shadow.camera.near = shadow.camera.near;
                mainLightRef.current.shadow.camera.far = shadow.camera.far;
                mainLightRef.current.shadow.camera.left = shadow.camera.left;
                mainLightRef.current.shadow.camera.right = shadow.camera.right;
                mainLightRef.current.shadow.camera.top = shadow.camera.top;
                mainLightRef.current.shadow.camera.bottom = shadow.camera.bottom;
            }
        }
    }["LightingSetupComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: LightingSetup.ambient.intensity,
                color: LightingSetup.ambient.color
            }, void 0, false, {
                fileName: "[project]/components/utils/lightingConfig.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                skyColor: LightingSetup.hemisphere.skyColor,
                groundColor: LightingSetup.hemisphere.groundColor,
                intensity: LightingSetup.hemisphere.intensity
            }, void 0, false, {
                fileName: "[project]/components/utils/lightingConfig.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            LightingSetup.directional.map(function(light, index) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    ref: index === 0 ? mainLightRef : null,
                    position: light.position,
                    intensity: light.intensity,
                    color: light.color,
                    castShadow: light.castShadow
                }, index, false, {
                    fileName: "[project]/components/utils/lightingConfig.js",
                    lineNumber: 84,
                    columnNumber: 9
                }, _this);
            })
        ]
    }, void 0, true);
}
_s(LightingSetupComponent, "4aRwew18UdsLV3reUADE7aw12AE=");
_c = LightingSetupComponent;
function createLightingSetup() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightingSetupComponent, {}, void 0, false, {
        fileName: "[project]/components/utils/lightingConfig.js",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LightingSetupComponent");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/materialSetup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGLTFMaterials",
    ()=>setupGLTFMaterials,
    "setupMaterialTextures",
    ()=>setupMaterialTextures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
function setupMaterialTextures(material) {
    var preserveOriginal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var _material_color, _material_emissive;
    if (!material || !material.isMaterial) return;
    var originalProperties = preserveOriginal ? {
        color: (_material_color = material.color) === null || _material_color === void 0 ? void 0 : _material_color.clone(),
        emissive: (_material_emissive = material.emissive) === null || _material_emissive === void 0 ? void 0 : _material_emissive.clone(),
        roughness: material.roughness,
        metalness: material.metalness,
        opacity: material.opacity,
        transparent: material.transparent,
        side: material.side
    } : null;
    var textureMaps = [
        'map',
        'normalMap',
        'roughnessMap',
        'metalnessMap',
        'aoMap',
        'emissiveMap',
        'bumpMap',
        'displacementMap',
        'alphaMap',
        'clearcoatMap',
        'clearcoatNormalMap',
        'clearcoatRoughnessMap',
        'iridescenceMap',
        'iridescenceThicknessMap',
        'sheenColorMap',
        'sheenRoughnessMap',
        'specularColorMap',
        'specularIntensityMap',
        'transmissionMap',
        'thicknessMap'
    ];
    textureMaps.forEach(function(mapName) {
        var texture = material[mapName];
        if (texture && texture.isTexture) {
            if (texture.image && !texture.image.complete) {
                texture.image.addEventListener('load', function() {
                    texture.needsUpdate = true;
                });
            }
            if (texture.flipY === undefined || texture.flipY === true) {
                texture.flipY = false;
            }
            if (!texture.wrapS || texture.wrapS === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]) {
                texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            }
            if (!texture.wrapT || texture.wrapT === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]) {
                texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            }
            if (texture.generateMipmaps !== false) {
                texture.generateMipmaps = true;
                texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
            }
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            if (mapName === 'normalMap' || mapName.includes('Normal')) {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoColorSpace"];
                }
            } else if (mapName === 'map' || mapName === 'emissiveMap' || mapName === 'aoMap') {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                }
            } else {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoColorSpace"];
                }
            }
            texture.needsUpdate = true;
        }
    });
    if (preserveOriginal && originalProperties) {
        if (originalProperties.color && !material.color.equals(originalProperties.color)) {
            material.color.copy(originalProperties.color);
        }
        if (originalProperties.emissive && material.emissive) {
            material.emissive.copy(originalProperties.emissive);
        }
        if (originalProperties.roughness !== undefined) {
            material.roughness = originalProperties.roughness;
        }
        if (originalProperties.metalness !== undefined) {
            material.metalness = originalProperties.metalness;
        }
        if (originalProperties.opacity !== undefined) {
            material.opacity = originalProperties.opacity;
        }
        if (originalProperties.transparent !== undefined) {
            material.transparent = originalProperties.transparent;
        }
        if (originalProperties.side !== undefined) {
            material.side = originalProperties.side;
        }
    }
    if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
        material.needsUpdate = true;
    }
}
function setupGLTFMaterials(materials) {
    var preserveOriginal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!materials) return;
    Object.values(materials).forEach(function(material) {
        if (material && material.isMaterial) {
            setupMaterialTextures(material, preserveOriginal);
        }
    });
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/ground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Floor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
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
function Floor(props) {
    var _this = this;
    _s();
    var _s1 = __turbopack_context__.k.signature();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/floor.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Floor.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
                Object.values(materials).forEach({
                    "Floor.useEffect": function(material) {
                        if (material && material.isMaterial) {
                            material.color.setHex(0xffffff);
                            if (material.emissive) {
                                material.emissive.setHex(0xffffff);
                                if (material.emissiveIntensity !== undefined) {
                                    material.emissiveIntensity = 0.2;
                                }
                            }
                            if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
                                material.roughness = 0.5;
                                material.metalness = 0.0;
                            }
                            material.needsUpdate = true;
                        }
                    }
                }["Floor.useEffect"]);
            }
        }
    }["Floor.useEffect"], [
        materials
    ]);
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 2), setGridDimensions = _useStore[1];
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Floor.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "Floor.useMemo[meshNodes]": function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], node = _param[1];
                    if (!node || !node.geometry) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return true;
                }
            }["Floor.useMemo[meshNodes]"]);
        }
    }["Floor.useMemo[meshNodes]"], [
        nodes
    ]);
    var gridDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Floor.useMemo[gridDimensions]": function() {
            if (!nodes) return {
                width: 144,
                height: 192,
                cellSize: 12,
                centerX: 0,
                centerZ: 0
            };
            var box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]();
            var hasGeometry = false;
            Object.values(nodes).forEach({
                "Floor.useMemo[gridDimensions]": function(node) {
                    if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                        var geometry = node.geometry;
                        geometry.computeBoundingBox();
                        if (geometry.boundingBox) {
                            var nodeBox = geometry.boundingBox.clone();
                            if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]())) {
                                nodeBox.applyMatrix4(node.matrix);
                            }
                            if (hasGeometry) {
                                box.union(nodeBox);
                            } else {
                                box.copy(nodeBox);
                                hasGeometry = true;
                            }
                        }
                    }
                }
            }["Floor.useMemo[gridDimensions]"]);
            if (!hasGeometry || box.isEmpty()) {
                return {
                    width: 144,
                    height: 192,
                    cellSize: 12,
                    centerX: 0,
                    centerZ: 0
                };
            }
            var size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            var center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            var desiredTilesX = 12;
            var desiredTilesZ = 16;
            var cellSize = Math.max(size.x / desiredTilesX, size.z / desiredTilesZ);
            var width = cellSize * desiredTilesX;
            var height = cellSize * desiredTilesZ;
            return {
                width: width,
                height: height,
                cellSize: cellSize,
                centerX: center.x,
                centerZ: center.z
            };
        }
    }["Floor.useMemo[gridDimensions]"], [
        nodes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Floor.useEffect": function() {
            setGridDimensions(gridDimensions);
        }
    }["Floor.useEffect"], [
        gridDimensions,
        setGridDimensions
    ]);
    var firstMaterial = materials && Object.values(materials)[0];
    var CustomGrid = function(param) {
        var width = param.width, height = param.height, cellSize = param.cellSize, centerX = param.centerX, centerZ = param.centerZ, yPosition = param.yPosition;
        _s1();
        var gridGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "Floor.CustomGrid.useMemo[gridGeometry]": function() {
                var geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                var vertices = [];
                var halfWidth = width / 2;
                var halfHeight = height / 2;
                var startX = centerX - halfWidth;
                var endX = centerX + halfWidth;
                var startZ = centerZ - halfHeight;
                var endZ = centerZ + halfHeight;
                var numLinesX = Math.floor(width / cellSize) + 1;
                var numLinesZ = Math.floor(height / cellSize) + 1;
                for(var i = 0; i <= numLinesX; i++){
                    var x = startX + i * cellSize;
                    vertices.push(x, yPosition, startZ, x, yPosition, endZ);
                }
                for(var i1 = 0; i1 <= numLinesZ; i1++){
                    var z = startZ + i1 * cellSize;
                    vertices.push(startX, yPosition, z, endX, yPosition, z);
                }
                geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](vertices, 3));
                return geometry;
            }
        }["Floor.CustomGrid.useMemo[gridGeometry]"], [
            width,
            height,
            cellSize,
            centerX,
            centerZ,
            yPosition
        ]);
        var material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "Floor.CustomGrid.useMemo[material]": function() {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                    color: "#1C1C1C",
                    linewidth: 1,
                    opacity: 0.5,
                    transparent: true
                });
            }
        }["Floor.CustomGrid.useMemo[material]"], []);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
            geometry: gridGeometry,
            material: material,
            renderOrder: 1
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ground.jsx",
            lineNumber: 136,
            columnNumber: 7
        }, _this);
    };
    _s1(CustomGrid, "8hl6TFsiUsPeABzFmIkPnJKYXJo=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomGrid, {
                width: gridDimensions.width,
                height: gridDimensions.height,
                cellSize: gridDimensions.cellSize,
                centerX: gridDimensions.centerX || 0,
                centerZ: gridDimensions.centerZ || 0,
                yPosition: 1.1
            }, void 0, false, {
                fileName: "[project]/components/kitModels/ground.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
                dispose: null,
                children: meshNodes.map(function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _param[0], node = _param[1];
                    if (!node || !node.geometry) return null;
                    if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                    if (node.type && node.type !== 'Mesh') return null;
                    var nodeMaterial = node.material || firstMaterial;
                    if (!nodeMaterial) return null;
                    if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                        node.geometry.computeVertexNormals();
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        geometry: node.geometry,
                        material: nodeMaterial,
                        position: [
                            0,
                            0.99,
                            0
                        ],
                        castShadow: false,
                        receiveShadow: false
                    }, nodeKey, false, {
                        fileName: "[project]/components/kitModels/ground.jsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, _this);
                })
            }), void 0, false, {
                fileName: "[project]/components/kitModels/ground.jsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/kitModels/ground.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(Floor, "R7LFaK/CEWPwF6fv8QEefAJK6So=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Floor;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/floor.glb");
var _c;
__turbopack_context__.k.register(_c, "Floor");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/boundingBox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BoundingBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
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
function BoundingBox() {
    var _this = this;
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/frontPorch.glb"), fpNodes = _useGLTF.nodes;
    var _useGLTF1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/floor.glb"), floorNodes = _useGLTF1.nodes;
    var fpHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BoundingBox.useMemo[fpHeight]": function() {
            if (!fpNodes) return 10;
            var box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]();
            var hasGeometry = false;
            Object.values(fpNodes).forEach({
                "BoundingBox.useMemo[fpHeight]": function(node) {
                    if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                        var geometry = node.geometry;
                        geometry.computeBoundingBox();
                        if (geometry.boundingBox) {
                            var nodeBox = geometry.boundingBox.clone();
                            if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]())) {
                                nodeBox.applyMatrix4(node.matrix);
                            }
                            if (hasGeometry) {
                                box.union(nodeBox);
                            } else {
                                box.copy(nodeBox);
                                hasGeometry = true;
                            }
                        }
                    }
                }
            }["BoundingBox.useMemo[fpHeight]"]);
            if (!hasGeometry || box.isEmpty()) return 10;
            var size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            return size.y;
        }
    }["BoundingBox.useMemo[fpHeight]"], [
        fpNodes
    ]);
    var floorBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BoundingBox.useMemo[floorBounds]": function() {
            if (!floorNodes) return {
                bottom: 0.99,
                height: 0
            };
            var box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]();
            var hasGeometry = false;
            Object.values(floorNodes).forEach({
                "BoundingBox.useMemo[floorBounds]": function(node) {
                    if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                        if (node.type && node.type !== 'Mesh') return;
                        var key = Object.keys(floorNodes).find({
                            "BoundingBox.useMemo[floorBounds].key": function(k) {
                                return floorNodes[k] === node;
                            }
                        }["BoundingBox.useMemo[floorBounds].key"]);
                        if (key && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'))) return;
                        var geometry = node.geometry;
                        geometry.computeBoundingBox();
                        if (geometry.boundingBox) {
                            var nodeBox = geometry.boundingBox.clone();
                            if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]())) {
                                nodeBox.applyMatrix4(node.matrix);
                            }
                            if (hasGeometry) {
                                box.union(nodeBox);
                            } else {
                                box.copy(nodeBox);
                                hasGeometry = true;
                            }
                        }
                    }
                }
            }["BoundingBox.useMemo[floorBounds]"]);
            if (!hasGeometry || box.isEmpty()) return {
                bottom: 0.99,
                height: 0
            };
            var floorPositionY = 0.99;
            var floorBottomY = box.min.y + floorPositionY;
            var floorHeight = box.max.y - box.min.y;
            return {
                bottom: floorBottomY,
                height: floorHeight
            };
        }
    }["BoundingBox.useMemo[floorBounds]"], [
        floorNodes
    ]);
    var width = gridDimensions.width, height = gridDimensions.height, centerX = gridDimensions.centerX, centerZ = gridDimensions.centerZ;
    var boxWidth = width;
    var boxLength = height;
    var porchHeight = fpHeight;
    var floorHeight = floorBounds.height;
    var totalHeight = porchHeight + floorHeight;
    var boxBottom = floorBounds.bottom;
    var boxTop = boxBottom + totalHeight;
    var boxCenterY = boxBottom + totalHeight / 2;
    var position = [
        centerX,
        boxCenterY,
        centerZ
    ];
    var edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BoundingBox.useMemo[edges]": function() {
            var calculatedTotalHeight = totalHeight;
            var w = boxWidth / 2;
            var l = boxLength / 2;
            var h = calculatedTotalHeight / 2;
            var corners = [
                [
                    -w,
                    -h,
                    -l
                ],
                [
                    w,
                    -h,
                    -l
                ],
                [
                    w,
                    -h,
                    l
                ],
                [
                    -w,
                    -h,
                    l
                ],
                [
                    -w,
                    h,
                    -l
                ],
                [
                    w,
                    h,
                    -l
                ],
                [
                    w,
                    h,
                    l
                ],
                [
                    -w,
                    h,
                    l
                ]
            ];
            var edgeLines = [
                [
                    0,
                    1
                ],
                [
                    1,
                    2
                ],
                [
                    2,
                    3
                ],
                [
                    3,
                    0
                ],
                [
                    4,
                    5
                ],
                [
                    5,
                    6
                ],
                [
                    6,
                    7
                ],
                [
                    7,
                    4
                ],
                [
                    0,
                    4
                ],
                [
                    1,
                    5
                ],
                [
                    2,
                    6
                ],
                [
                    3,
                    7
                ]
            ];
            return {
                corners: corners,
                edgeLines: edgeLines
            };
        }
    }["BoundingBox.useMemo[edges]"], [
        boxWidth,
        boxLength,
        totalHeight
    ]);
    var lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color: 0x00ffff,
        linewidth: 1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: edges.edgeLines.map(function(param, idx) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), startIdx = _param[0], endIdx = _param[1];
            var start = edges.corners[startIdx];
            var end = edges.corners[endIdx];
            var geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(start)),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(end))
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                geometry: geometry,
                material: lineMaterial
            }, idx, false, {
                fileName: "[project]/components/kitModels/boundingBox.jsx",
                lineNumber: 138,
                columnNumber: 11
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/components/kitModels/boundingBox.jsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(BoundingBox, "yWNchSk9tc+Y2lmmyE1MgpfpCw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c = BoundingBox;
var _c;
__turbopack_context__.k.register(_c, "BoundingBox");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils/objectPositions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OBJECT_GRID_POSITIONS",
    ()=>OBJECT_GRID_POSITIONS,
    "clampToGridBounds",
    ()=>clampToGridBounds,
    "gridToWorldPosition",
    ()=>gridToWorldPosition,
    "worldToGridPosition",
    ()=>worldToGridPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var OBJECT_GRID_POSITIONS = {
    fp: {
        gridX: 4,
        gridZ: 14
    },
    k1: {
        gridX: 10,
        gridZ: 15.5
    },
    k2: {
        gridX: 10,
        gridZ: 10.5
    },
    b1: {
        gridX: 10,
        gridZ: 9
    },
    bb: {
        gridX: 2,
        gridZ: 5
    },
    st1: {
        gridX: 7.5,
        gridZ: 2
    },
    st2: {
        gridX: 6.5,
        gridZ: 2
    },
    stairs: {
        gridX: 7,
        gridZ: 5
    }
};
function gridToWorldPosition(gridX, gridZ, gridDimensions) {
    var cellSize = gridDimensions.cellSize, centerX = gridDimensions.centerX, centerZ = gridDimensions.centerZ, width = gridDimensions.width, height = gridDimensions.height;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var leftEdge = centerX - halfWidth;
    var bottomEdge = centerZ - halfHeight;
    var worldX = leftEdge + gridX * cellSize;
    var worldZ = bottomEdge + gridZ * cellSize;
    return {
        x: worldX,
        y: 1.01,
        z: worldZ
    };
}
function clampToGridBounds(position, gridDimensions) {
    var width = gridDimensions.width, height = gridDimensions.height, centerX = gridDimensions.centerX, centerZ = gridDimensions.centerZ;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var minX = centerX - halfWidth;
    var maxX = centerX + halfWidth;
    var minZ = centerZ - halfHeight;
    var maxZ = centerZ + halfHeight;
    return {
        x: Math.max(minX, Math.min(maxX, position.x)),
        y: position.y,
        z: Math.max(minZ, Math.min(maxZ, position.z))
    };
}
function worldToGridPosition(worldX, worldZ, gridDimensions) {
    var cellSize = gridDimensions.cellSize, centerX = gridDimensions.centerX, centerZ = gridDimensions.centerZ, width = gridDimensions.width, height = gridDimensions.height;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var leftEdge = centerX - halfWidth;
    var bottomEdge = centerZ - halfHeight;
    var gridX = (worldX - leftEdge) / cellSize;
    var gridZ = (worldZ - bottomEdge) / cellSize;
    return {
        gridX: gridX,
        gridZ: gridZ
    };
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/objectControls/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectControls",
    ()=>ObjectControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
;
;
;
;
;
function ObjectControls(param) {
    var isSelected = param.isSelected, onRotate = param.onRotate, onMoveRight = param.onMoveRight, onMoveLeft = param.onMoveLeft, onMoveTop = param.onMoveTop, onMoveBottom = param.onMoveBottom, _param_onPlace = param.onPlace, onPlace = _param_onPlace === void 0 ? function() {} : _param_onPlace, title = param.title;
    if (!isSelected) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            0,
            5.5,
            0
        ],
        center: true,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "object-controls__title",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/objectControls/index.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "object-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row object-controls__row--first",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__action object-controls__action--rotate",
                                onClick: onRotate,
                                title: "Rotate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "19",
                                    viewBox: "0 0 22 19",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/objectControls/index.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__action object-controls__action--save",
                                onClick: onPlace,
                                title: "Place",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1.5 1.5L11.9184 11.9184M12.3368 1.50001L1.91841 11.9184",
                                        stroke: "currentColor",
                                        strokeWidth: "3",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/objectControls/index.jsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/objectControls/index.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "object-controls__dpad-button object-controls__dpad-button--up",
                            onClick: onMoveTop,
                            title: "Move Top",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "25",
                                height: "15",
                                viewBox: "0 0 25 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    transform: 'rotate(-90deg)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/objectControls/index.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/objectControls/index.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__dpad-button object-controls__dpad-button--left",
                                onClick: onMoveLeft,
                                title: "Move Left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "25",
                                    height: "15",
                                    viewBox: "0 0 25 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    style: {
                                        transform: 'rotate(180deg)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/objectControls/index.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__dpad-button object-controls__dpad-button--right",
                                onClick: onMoveRight,
                                title: "Move Right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "25",
                                    height: "15",
                                    viewBox: "0 0 25 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/objectControls/index.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/objectControls/index.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "object-controls__dpad-button object-controls__dpad-button--down",
                            onClick: onMoveBottom,
                            title: "Move Bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "25",
                                height: "15",
                                viewBox: "0 0 25 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    transform: 'rotate(90deg)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/objectControls/index.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/objectControls/index.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/objectControls/index.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/objectControls/index.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/objectControls/index.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/objectControls/index.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = ObjectControls;
var _c;
__turbopack_context__.k.register(_c, "ObjectControls");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/b1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>B1
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
;
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
;
;
;
function B1(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/bath.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["B1.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "B1.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "B1.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["B1.useMemo[lineNodes]"]);
        }
    }["B1.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "B1.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "B1.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["B1.useMemo[meshNodes]"]);
        }
    }["B1.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "B1.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "B1.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["B1.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["B1.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].b1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["B1.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["B1.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false), 2), sceneRotation = _useStore3[0], setSceneRotation = _useStore3[1];
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore4[0];
    var objectId = "b1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "B1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["B1.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "B1.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["B1.useEffect"]);
            }
        }
    }["B1.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "B1._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["B1._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "B1._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["B1._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["B1.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "B1.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["B1.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["B1.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (showPanel) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    y: 1
                }));
            } else {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    y: 0
                }));
            }
        }
    }["B1.useEffect"], [
        showPanel
    ]);
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
                if (isAxio) {
                    setSceneRotation(false);
                }
            }
            prevShowRef.current = show;
        }
    }["B1.useEffect"], [
        show,
        isAxio,
        setSelectedObjectId,
        setSceneRotation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "B1.useEffect": function() {
            if (materials && Object.keys(materials).length > 0 && show) {
                Object.values(materials).forEach({
                    "B1.useEffect": function(material) {
                        if (material && material.isMaterial) {
                            if (!isSelected && selectedObjectId && selectedObjectId !== null && isAxio) {
                                if (material.userData.originalOpacity === undefined) {
                                    material.userData.originalOpacity = material.opacity !== undefined ? material.opacity : 1;
                                }
                                material.opacity = 0.4;
                                material.transparent = true;
                            } else {
                                if (material.userData.originalOpacity !== undefined) {
                                    material.opacity = material.userData.originalOpacity;
                                } else {
                                    material.opacity = 1;
                                }
                                material.transparent = false;
                            }
                        }
                    }
                }["B1.useEffect"]);
            }
        }
    }["B1.useEffect"], [
        isSelected,
        selectedObjectId,
        materials,
        show,
        isAxio
    ]);
    var actionsPanel = function(e) {
        e.stopPropagation();
        if (isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var handleObjectClick = function(e) {
        e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true) {
            setSceneRotation(false);
        }
        if (isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: handleObjectClick,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param, index) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            ref: index === 0 ? meshRef : null,
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 440,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 479,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/b1.jsx",
                                lineNumber: 477,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 491,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "BATHROOM",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 500,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/b1.jsx",
                                            lineNumber: 541,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 534,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 528,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 561,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 570,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 553,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 548,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/b1.jsx",
                                            lineNumber: 592,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 585,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 579,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 617,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 600,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 599,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 635,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 644,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 627,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 626,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 661,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 670,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 654,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 653,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 692,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 701,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 685,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 679,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 524,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/b1.jsx",
                        lineNumber: 523,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/b1.jsx",
                lineNumber: 430,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/b1.jsx",
            lineNumber: 429,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/b1.jsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_s(B1, "pFc+O/lzKSFWGsc181oLNmSuLUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = B1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/bath.glb");
var _c;
__turbopack_context__.k.register(_c, "B1");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/bb.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bb
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function Bb(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/boxbed.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["Bb.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bb.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "Bb.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["Bb.useMemo[lineNodes]"]);
        }
    }["Bb.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bb.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "Bb.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["Bb.useMemo[meshNodes]"]);
        }
    }["Bb.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bb.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "Bb.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["Bb.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["Bb.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].bb;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["Bb.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["Bb.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        // cameraRelativeX controls left/right (uses camera right vector)
        // cameraRelativeZ controls forward/backward (uses camera forward vector)
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "bb";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bb.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["Bb.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "Bb.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["Bb.useEffect"]);
            }
        }
    }["Bb.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "Bb._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["Bb._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "Bb._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["Bb._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["Bb.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "Bb.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["Bb.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["Bb.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["Bb.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bb.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["Bb.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel
            }, bind()), {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 407,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 445,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/bb.jsx",
                                lineNumber: 443,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 457,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "BOXBED",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 466,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/bb.jsx",
                                            lineNumber: 506,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 499,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 493,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 526,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 535,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 518,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 513,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/bb.jsx",
                                            lineNumber: 557,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 550,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 544,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 573,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 582,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 565,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 564,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 600,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 609,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 592,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 591,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 626,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 635,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 619,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 618,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 657,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 666,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 650,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 644,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 489,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/bb.jsx",
                        lineNumber: 488,
                        columnNumber: 15
                    }, this)
                ]
            }), void 0, true, {
                fileName: "[project]/components/kitModels/bb.jsx",
                lineNumber: 396,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/bb.jsx",
            lineNumber: 395,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/bb.jsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
_s(Bb, "fkMvLVP0n3kUO1iCXs+BsWgvIFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = Bb;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/boxbed.glb");
var _c;
__turbopack_context__.k.register(_c, "Bb");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/FP.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>F1
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function F1(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/frontPorch.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["F1.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "F1.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "F1.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["F1.useMemo[lineNodes]"]);
        }
    }["F1.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "F1.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "F1.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["F1.useMemo[meshNodes]"]);
        }
    }["F1.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "F1.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "F1.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["F1.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["F1.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].fp;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["F1.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["F1.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        // cameraRelativeX controls left/right (uses camera right vector)
        // cameraRelativeZ controls forward/backward (uses camera forward vector)
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "fp";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "F1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["F1.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "F1.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["F1.useEffect"]);
            }
        }
    }["F1.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "F1._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["F1._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "F1.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["F1.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["F1.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["F1.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "F1.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["F1.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                // {...spring}
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 397,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 435,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/FP.jsx",
                                lineNumber: 433,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 447,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                        isSelected: isSelected,
                        title: "FRONT PORCH",
                        onRotate: handleRotate,
                        onMoveRight: function() {
                            return handleMove(0, -1);
                        },
                        onMoveLeft: function() {
                            return handleMove(0, 1);
                        },
                        onMoveTop: function() {
                            return handleMove(1, 0);
                        },
                        onMoveBottom: function() {
                            return handleMove(-1, 0);
                        },
                        onPlace: function() {
                            return setSelectedObjectId(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/FP.jsx",
                        lineNumber: 455,
                        columnNumber: 15
                    }, this),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/FP.jsx",
                                            lineNumber: 494,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 487,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 481,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 514,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 523,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 506,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 501,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/FP.jsx",
                                            lineNumber: 545,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 538,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 532,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 561,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 570,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 553,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 552,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 588,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 597,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 580,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 579,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 614,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 623,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 607,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 606,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 645,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 654,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 638,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 632,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 477,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/FP.jsx",
                        lineNumber: 476,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/FP.jsx",
                lineNumber: 385,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/FP.jsx",
            lineNumber: 384,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/FP.jsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_s(F1, "60xwHEsqZiKcFaRhTI4Ix7k4Uio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = F1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/frontPorch.glb");
var _c;
__turbopack_context__.k.register(_c, "F1");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/K1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>K1
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function K1(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/kitchen1.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["K1.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K1.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "K1.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["K1.useMemo[lineNodes]"]);
        }
    }["K1.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K1.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "K1.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["K1.useMemo[meshNodes]"]);
        }
    }["K1.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K1.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "K1.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["K1.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["K1.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["K1.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["K1.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "k1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["K1.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "K1.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["K1.useEffect"]);
            }
        }
    }["K1.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "K1._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["K1._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "K1._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["K1._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["K1.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "K1.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["K1.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["K1.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["K1.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K1.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["K1.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 405,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 443,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/K1.jsx",
                                lineNumber: 441,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 455,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "KITCHEN",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 464,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "19",
                                        viewBox: "0 0 22 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K1.jsx",
                                            lineNumber: 498,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 497,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 491,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 515,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 524,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 507,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 502,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "19",
                                        viewBox: "0 0 22 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'scaleX(-1)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K1.jsx",
                                            lineNumber: 540,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 539,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 533,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 553,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 562,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 545,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 544,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 580,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 589,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 572,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 571,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 606,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 615,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 599,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 598,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 637,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 646,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 630,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 624,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 487,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/K1.jsx",
                        lineNumber: 486,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/K1.jsx",
                lineNumber: 395,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/K1.jsx",
            lineNumber: 394,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/K1.jsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_s(K1, "fkMvLVP0n3kUO1iCXs+BsWgvIFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = K1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen1.glb");
var _c;
__turbopack_context__.k.register(_c, "K1");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/K2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>K2
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function K2(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/kitchen2.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["K2.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K2.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "K2.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["K2.useMemo[lineNodes]"]);
        }
    }["K2.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K2.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "K2.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["K2.useMemo[meshNodes]"]);
        }
    }["K2.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K2.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "K2.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["K2.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["K2.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k2;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["K2.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["K2.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "k2";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K2.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["K2.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "K2.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["K2.useEffect"]);
            }
        }
    }["K2.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "K2._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["K2._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "K2._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["K2._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["K2.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "K2.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["K2.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["K2.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["K2.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "K2.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["K2.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 403,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 441,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/K2.jsx",
                                lineNumber: 439,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 453,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "KITCHEN (STORAGE)",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 462,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K2.jsx",
                                            lineNumber: 502,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 495,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 489,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 522,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 531,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 514,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 509,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K2.jsx",
                                            lineNumber: 553,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 546,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 540,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 569,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 578,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 561,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 560,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 596,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 605,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 588,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 587,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 622,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 631,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 615,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 614,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 653,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 662,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 646,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 640,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 485,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/K2.jsx",
                        lineNumber: 484,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/K2.jsx",
                lineNumber: 393,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/K2.jsx",
            lineNumber: 392,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/K2.jsx",
        lineNumber: 386,
        columnNumber: 5
    }, this);
}
_s(K2, "fkMvLVP0n3kUO1iCXs+BsWgvIFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = K2;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen2.glb");
var _c;
__turbopack_context__.k.register(_c, "K2");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/ST1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ST1
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function ST1(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/storage1.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["ST1.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST1.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "ST1.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["ST1.useMemo[lineNodes]"]);
        }
    }["ST1.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST1.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "ST1.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["ST1.useMemo[meshNodes]"]);
        }
    }["ST1.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST1.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "ST1.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["ST1.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["ST1.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["ST1.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["ST1.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        // Swap: cameraRelativeX controls forward/backward, cameraRelativeZ controls left/right
        if (cameraRelativeX !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "st1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["ST1.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "ST1.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["ST1.useEffect"]);
            }
        }
    }["ST1.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "ST1._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["ST1._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "ST1._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["ST1._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["ST1.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "ST1.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["ST1.useGesture[bind]"]
    });
    var UP = function() {
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
        //console.log("currentPosition", meshRef.current.position)
        }
    }["ST1.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["ST1.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST1.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["ST1.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 404,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 442,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/ST1.jsx",
                                lineNumber: 440,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 454,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STORAGE 1",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 463,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST1.jsx",
                                            lineNumber: 503,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 496,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 490,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 523,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 532,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 515,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 510,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST1.jsx",
                                            lineNumber: 554,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 547,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 541,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 570,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 579,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 562,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 561,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 597,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 606,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 589,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 588,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 623,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 632,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 616,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 615,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 654,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 663,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 647,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 641,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 486,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/ST1.jsx",
                        lineNumber: 485,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/ST1.jsx",
                lineNumber: 394,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ST1.jsx",
            lineNumber: 393,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/ST1.jsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s(ST1, "fkMvLVP0n3kUO1iCXs+BsWgvIFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = ST1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage1.glb");
var _c;
__turbopack_context__.k.register(_c, "ST1");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/ST2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ST2
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
;
function ST2(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/storage2.glb"), nodes = _useGLTF.nodes, materials = _useGLTF.materials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (materials) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            }
        }
    }["ST2.useEffect"], [
        materials
    ]);
    var lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST2.useMemo[lineNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "ST2.useMemo[lineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["ST2.useMemo[lineNodes]"]);
        }
    }["ST2.useMemo[lineNodes]"], [
        nodes
    ]);
    var meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST2.useMemo[meshNodes]": function() {
            if (!nodes) return [];
            return Object.entries(nodes).filter({
                "ST2.useMemo[meshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["ST2.useMemo[meshNodes]"]);
        }
    }["ST2.useMemo[meshNodes]"], [
        nodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST2.useMemo[allNodes]": function() {
            var nodeMap = {};
            if (nodes) {
                Object.entries(nodes).forEach({
                    "ST2.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodeMap[key] = node;
                        }
                    }
                }["ST2.useMemo[allNodes]"]);
            }
            return nodeMap;
        }
    }["ST2.useMemo[allNodes]"], [
        nodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st2 || {
        gridX: 7.5,
        gridZ: 2
    };
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0 && gridPos) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["ST2.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0 && gridPos) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["ST2.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "st2";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST2.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: isSelected ? 4 : 2,
                depthTest: true
            });
        }
    }["ST2.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "ST2.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["ST2.useEffect"]);
            }
        }
    }["ST2.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "ST2._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["ST2._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "ST2._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["ST2._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["ST2.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "ST2.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["ST2.useGesture[bind]"]
    });
    var UP = function() {
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["ST2.useEffect"], [
        showPanel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (materials && Object.keys(materials).length > 0 && show) {
                Object.values(materials).forEach({
                    "ST2.useEffect": function(material) {
                        if (material && material.isMaterial) {
                            if (!isSelected && selectedObjectId && selectedObjectId !== null && isAxio) {
                                if (material.userData.originalOpacity === undefined) {
                                    material.userData.originalOpacity = material.opacity !== undefined ? material.opacity : 1;
                                }
                                material.opacity = 0.4;
                                material.transparent = true;
                            } else {
                                if (material.userData.originalOpacity !== undefined) {
                                    material.opacity = material.userData.originalOpacity;
                                } else {
                                    material.opacity = 1;
                                }
                                material.transparent = false;
                            }
                        }
                    }
                }["ST2.useEffect"]);
            }
        }
    }["ST2.useEffect"], [
        isSelected,
        selectedObjectId,
        materials,
        show,
        isAxio
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ST2.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["ST2.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 406,
                            columnNumber: 17
                        }, _this);
                    }),
                    lineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 444,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/ST2.jsx",
                                lineNumber: 442,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 456,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STORAGE 2",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 465,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST2.jsx",
                                            lineNumber: 494,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 487,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 481,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 510,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 519,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 502,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 501,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST2.jsx",
                                            lineNumber: 541,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 534,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 528,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 557,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 566,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 549,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 548,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 584,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 593,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 576,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 575,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 610,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 619,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 603,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 602,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 641,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 650,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 634,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 628,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 480,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/ST2.jsx",
                        lineNumber: 479,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/ST2.jsx",
                lineNumber: 396,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ST2.jsx",
            lineNumber: 395,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/ST2.jsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
_s(ST2, "fkMvLVP0n3kUO1iCXs+BsWgvIFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = ST2;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage2.glb");
var _c;
__turbopack_context__.k.register(_c, "ST2");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kitModels/Stairs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stairs
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
;
;
function Stairs(_param) {
    var _this = this;
    var isMouseDragging = _param.isMouseDragging, show = _param.show, isZoomState = _param.isZoomState, freeView = _param.freeView, isAxio = _param.isAxio, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "isMouseDragging",
        "show",
        "isZoomState",
        "freeView",
        "isAxio"
    ]);
    _s();
    var _useGLTF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/stairs.glb"), stairsNodes = _useGLTF.nodes, stairsMaterials = _useGLTF.materials;
    var stairsLineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stairs.useMemo[stairsLineNodes]": function() {
            if (!stairsNodes) return [];
            return Object.entries(stairsNodes).filter({
                "Stairs.useMemo[stairsLineNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
                }
            }["Stairs.useMemo[stairsLineNodes]"]);
        }
    }["Stairs.useMemo[stairsLineNodes]"], [
        stairsNodes
    ]);
    var stairsMeshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stairs.useMemo[stairsMeshNodes]": function() {
            if (!stairsNodes) return [];
            return Object.entries(stairsNodes).filter({
                "Stairs.useMemo[stairsMeshNodes]": function(param) {
                    var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                    if (!node || !node.geometry) return false;
                    if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
                    if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
                    return node.isMesh;
                }
            }["Stairs.useMemo[stairsMeshNodes]"]);
        }
    }["Stairs.useMemo[stairsMeshNodes]"], [
        stairsNodes
    ]);
    var allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stairs.useMemo[allNodes]": function() {
            var nodes = {};
            if (stairsNodes) {
                Object.entries(stairsNodes).forEach({
                    "Stairs.useMemo[allNodes]": function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _$_param[0], node = _$_param[1];
                        if (node && (node.isMesh || node.isLineSegments)) {
                            nodes[key] = node;
                        }
                    }
                }["Stairs.useMemo[allNodes]"]);
            }
            return nodes;
        }
    }["Stairs.useMemo[allNodes]"], [
        stairsNodes
    ]);
    var meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cameraState"), 2), cameraState = _useState[0], setCameraState = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), rotationCount = _useState1[0], setRotationCount = _useState1[1];
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    }), 1), gridDimensions = _useStore[0];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), positionInitialized = _useState2[0], setPositionInitialized = _useState2[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0), 1), positionResetTrigger = _useStore1[0];
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].stairs || {
        gridX: 6.5,
        gridZ: 4
    };
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    }), 2), currentGridPos = _useState4[0], setCurrentGridPos = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    var isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if (show && gridDimensions && gridDimensions.width > 0 && gridPos) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                if (!positionInitialized) {
                    setCurrentGridPos({
                        gridX: gridPos.gridX,
                        gridZ: gridPos.gridZ
                    });
                    setPositionInitialized(true);
                }
            }
        }
    }["Stairs.useEffect"], [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0 && gridPos) {
                var worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
                setCurrentPosition({
                    x: worldPos.x,
                    y: worldPos.y,
                    z: worldPos.z
                });
                setCurrentGridPos({
                    gridX: gridPos.gridX,
                    gridZ: gridPos.gridZ
                });
                setRotationCount(0);
            }
        }
    }["Stairs.useEffect"], [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    var handleMove = function(cameraRelativeX, cameraRelativeZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        var camera = state.camera;
        if (!camera) return;
        // Update camera matrix to ensure it's current
        camera.updateMatrixWorld();
        // Use quaternion to get camera vectors directly (more reliable than matrixWorld)
        var cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        var cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        cameraRight.applyQuaternion(camera.quaternion);
        cameraForward.applyQuaternion(camera.quaternion);
        var rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        var forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](cameraForward.x, cameraForward.z).normalize();
        var gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        var gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        var rightDotX = rightXZ.dot(gridXAxis);
        var rightDotZ = rightXZ.dot(gridZAxis);
        var forwardDotX = forwardXZ.dot(gridXAxis);
        var forwardDotZ = forwardXZ.dot(gridZAxis);
        var deltaGridX = 0;
        var deltaGridZ = 0;
        // cameraRelativeX controls left/right (uses camera right vector)
        // cameraRelativeZ controls forward/backward (uses camera forward vector)
        if (cameraRelativeX !== 0) {
            var absRightDotX = Math.abs(rightDotX);
            var absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            var absForwardDotX = Math.abs(forwardDotX);
            var absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaGridX;
            var newGridZ = prev.gridZ + deltaGridZ;
            var newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
            setCurrentPosition({
                x: newWorldPos.x,
                y: newWorldPos.y,
                z: newWorldPos.z
            });
            return {
                gridX: newGridX,
                gridZ: newGridZ
            };
        });
    };
    var handleRotate = function() {
        setRotationCount(function(prev) {
            return prev + Math.PI / 2;
        });
    };
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore2[0], setSelectedObjectId = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "stairs";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stairs.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
                depthTest: true
            });
        }
    }["Stairs.useMemo[lineMaterial]"], [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if (isSelected && objectRotationTrigger > 0) {
                setRotationCount({
                    "Stairs.useEffect": function(prev) {
                        return prev + Math.PI / 2;
                    }
                }["Stairs.useEffect"]);
            }
        }
    }["Stairs.useEffect"], [
        objectRotationTrigger,
        isSelected
    ]);
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState5[0], setShowPanel = _useState5[1];
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), size = _useThree.size, viewport = _useThree.viewport;
    var aspect = size.width / viewport.width;
    var _useSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "Stairs._useSpring.useSpring": function() {
            return {
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                config: {
                    friction: 40
                }
            };
        }
    }["Stairs._useSpring.useSpring"]), 2), spring = _useSpring[0], set = _useSpring[1];
    var _useSpring1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "Stairs._useSpring.useSpring": function() {
            return {
                opacity: 0,
                config: {
                    tension: 100,
                    friction: 50
                }
            };
        }
    }["Stairs._useSpring.useSpring"]), 2), opacitySpring = _useSpring1[0], setOpacity = _useSpring1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if (show) {
                setOpacity({
                    opacity: 1
                });
            }
        }
    }["Stairs.useEffect"], [
        show,
        setOpacity
    ]);
    var bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: {
            "Stairs.useGesture[bind]": function(param) {
                var _param_offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param.offset, 3), x = _param_offset[0], y = _param_offset[1], z = _param_offset[2];
                if (isMouseDragging) {
                    setCurrentPosition({
                        x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                        y: 0,
                        z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                    });
                }
            }
        }["Stairs.useGesture[bind]"]
    });
    var UP = function() {
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        }
    };
    var DOWN = function() {
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        }
    };
    var LEFT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        }
    };
    var RIGHT = function() {
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z + 1
                }));
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x - 1
                }));
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    z: currentPosition.z - 1
                }));
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                    x: currentPosition.x + 1
                }));
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (showPanel) {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 1
                    }));
                } else {
                    setCurrentPosition((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentPosition), {
                        y: 0
                    }));
                }
            }
        }
    }["Stairs.useEffect"], [
        showPanel
    ]);
    var actionsPanel = function(e) {
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    var prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stairs.useEffect": function() {
            if (show && !prevShowRef.current) {
                setSelectedObjectId(objectId);
            }
            prevShowRef.current = show;
        }
    }["Stairs.useEffect"], [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props), {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    stairsMeshNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        var nodeMaterial = node.material || stairsMaterials && Object.values(stairsMaterials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 379,
                            columnNumber: 17
                        }, _this);
                    }),
                    stairsLineNodes.map(function(param) {
                        var _$_param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), nodeKey = _$_param[0], node = _$_param[1];
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        var geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            var offsets = [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                [
                                    0.01,
                                    0,
                                    0
                                ],
                                [
                                    -0.01,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.01,
                                    0
                                ],
                                [
                                    0,
                                    -0.01,
                                    0
                                ],
                                [
                                    0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    0.007,
                                    -0.007,
                                    0
                                ],
                                [
                                    -0.007,
                                    0.007,
                                    0
                                ],
                                [
                                    0.005,
                                    0,
                                    0
                                ],
                                [
                                    -0.005,
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0.005,
                                    0
                                ],
                                [
                                    0,
                                    -0.005,
                                    0
                                ]
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map(function(offset, idx) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, "".concat(nodeKey, "-").concat(idx), false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 417,
                                        columnNumber: 23
                                    }, _this);
                                })
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                lineNumber: 415,
                                columnNumber: 19
                            }, _this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 429,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STAIRS",
                            onRotate: handleRotate,
                            onMoveRight: function() {
                                return handleMove(0, -1);
                            },
                            onMoveLeft: function() {
                                return handleMove(0, 1);
                            },
                            onMoveTop: function() {
                                return handleMove(1, 0);
                            },
                            onMoveBottom: function() {
                                return handleMove(-1, 0);
                            },
                            onPlace: function() {
                                return setSelectedObjectId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 438,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/Stairs.jsx",
                                            lineNumber: 467,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 460,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 454,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 483,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 492,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 475,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 474,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 2);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/Stairs.jsx",
                                            lineNumber: 514,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 507,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 501,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 530,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 539,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 522,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 521,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 557,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 566,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 549,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 548,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 583,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 592,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 576,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 575,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: function() {
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 614,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 623,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 607,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 601,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 453,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/Stairs.jsx",
                        lineNumber: 452,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/Stairs.jsx",
                lineNumber: 369,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/Stairs.jsx",
            lineNumber: 368,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/kitModels/Stairs.jsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
_s(Stairs, "XBo9Bgx/B7VUxrC7jhiMRxGPEoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGesture"]
    ];
});
_c = Stairs;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/stairs.glb");
var _c;
__turbopack_context__.k.register(_c, "Stairs");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/kit-of-parts/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/PassiveOrbitControls.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraResetOnExitCapture$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/CameraResetOnExitCapture.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$lightingConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/lightingConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ground.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$boundingBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/boundingBox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$b1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/b1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$bb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/bb.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$FP$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/FP.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/K1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/K2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ST1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ST2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$Stairs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/Stairs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
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
function KitOfPartsPage() {
    var _this = this;
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_objectsState"), 2), objects = _useStore[0], setObjects = _useStore[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_clickbathroom2"), 2), bathroom = _useStore1[0], setbathroom = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_boxbedState"), 2), boxbed = _useStore2[0], setboxbed = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_frontState"), 2), front = _useStore3[0], setfront = _useStore3[1];
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_kitchenState"), 2), kitchen = _useStore4[0], setkitchen = _useStore4[1];
    var _useStore5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_k2State"), 2), k2 = _useStore5[0], setK2 = _useStore5[1];
    var _useStore6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st1State"), 2), st1 = _useStore6[0], setSt1 = _useStore6[1];
    var _useStore7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st2State", false), 2), st2 = _useStore7[0], setSt2 = _useStore7[1];
    var _useStore8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_stairsState", false), 2), stairs = _useStore8[0], setStairs = _useStore8[1];
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useStore9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureMode", false), 2), captureMode = _useStore9[0], setCaptureMode = _useStore9[1];
    var _useStore10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureModalOpen", false), 1), isCaptureModalOpen = _useStore10[0];
    var _useStore11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_cachedImageDataUrl", null), 2), setCachedImageDataUrl = _useStore11[1];
    var _useStore12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureModalOpen", false), 2), setIsCaptureModalOpen = _useStore12[1];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), cameraResetting = _useState[0], setCameraResetting = _useState[1];
    var _useStore13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedObjectId', null), 2), setSelectedObjectId = _useStore13[1];
    var _useStore14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_closeAllPanels', false), 2), setCloseAllPanels = _useStore14[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KitOfPartsPage.useEffect": function() {
            if (captureMode) {
                setSelectedObjectId(null);
                setObjects(false);
                setCloseAllPanels(true);
                setIsCaptureModalOpen(true);
                if (ref.current) {
                    setTimeout({
                        "KitOfPartsPage.useEffect": function() {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(ref.current, {
                                cacheBust: true
                            }).then({
                                "KitOfPartsPage.useEffect": function(dataUrl) {
                                    setCachedImageDataUrl(dataUrl);
                                }
                            }["KitOfPartsPage.useEffect"])["catch"]({
                                "KitOfPartsPage.useEffect": function(err) {
                                    console.error('[ERROR] Failed to generate image:', err);
                                }
                            }["KitOfPartsPage.useEffect"]);
                        }
                    }["KitOfPartsPage.useEffect"], 500);
                }
            }
        }
    }["KitOfPartsPage.useEffect"], [
        captureMode,
        setCachedImageDataUrl,
        setIsCaptureModalOpen,
        setSelectedObjectId,
        setObjects,
        setCloseAllPanels
    ]);
    var onButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[onButtonClick]": function() {
            if (ref.current === null) {
                return;
            }
            setCaptureMode(true);
        }
    }["KitOfPartsPage.useCallback[onButtonClick]"], [
        setCaptureMode
    ]);
    var handleCloseScreenshotForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[handleCloseScreenshotForm]": function() {
            setIsScreenshotFormOpen(false);
            setScreenshotDataUrl(null);
        }
    }["KitOfPartsPage.useCallback[handleCloseScreenshotForm]"], []);
    var _useStore15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false), 2), sceneRotation = _useStore15[0], setSceneRotation = _useStore15[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), isZoom = _useState1[0], setZoom = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), disableRotation = _useState2[0], setDisableRotation = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), buttonTriggered = _useState3[0], setbuttonTriggered = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), draggingMode = _useState4[0], setDraggingMode = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), guiMode = _useState5[0], setGuiMode = _useState5[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KitOfPartsPage.useEffect": function() {
            if (sceneRotation) {
                setIsCaptureModalOpen(false);
                setTimeout({
                    "KitOfPartsPage.useEffect": function() {
                        setCaptureMode(false);
                        setCachedImageDataUrl(null);
                    }
                }["KitOfPartsPage.useEffect"], 300);
            }
        }
    }["KitOfPartsPage.useEffect"], [
        sceneRotation,
        setIsCaptureModalOpen,
        setCaptureMode,
        setCachedImageDataUrl
    ]);
    // Keep frameloop running when modal just closed so camera reset can run.
    // Compute during render so frameloop is "always" on the FIRST render after close (useEffect runs too late).
    var prevCaptureModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(captureMode);
    var wasInCapture = prevCaptureModeRef.current;
    prevCaptureModeRef.current = captureMode;
    var keepFramesForReset = wasInCapture && !captureMode && !isCaptureModalOpen;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KitOfPartsPage.useEffect": function() {
            if (keepFramesForReset) {
                setCameraResetting(true);
                var t = setTimeout({
                    "KitOfPartsPage.useEffect.t": function() {
                        return setCameraResetting(false);
                    }
                }["KitOfPartsPage.useEffect.t"], 800);
                return ({
                    "KitOfPartsPage.useEffect": function() {
                        return clearTimeout(t);
                    }
                })["KitOfPartsPage.useEffect"];
            }
        }
    }["KitOfPartsPage.useEffect"], [
        captureMode,
        isCaptureModalOpen
    ]);
    var handleButton = function() {
        setbuttonTriggered(!buttonTriggered);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KitOfPartsPage.useEffect": function() {
            if (buttonTriggered) {
                setDisableRotation(false);
            } else {
                setDisableRotation(true);
            }
        }
    }["KitOfPartsPage.useEffect"], [
        buttonTriggered
    ]);
    var axoModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[axoModeToggle]": function() {
            if (draggingMode) {
                setDraggingMode(!draggingMode);
            }
            setGuiMode(!guiMode);
            setDisableRotation(false);
            setSceneRotation(false);
        }
    }["KitOfPartsPage.useCallback[axoModeToggle]"], [
        draggingMode,
        guiMode
    ]);
    var dragModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[dragModeToggle]": function() {
            if (guiMode) {
                setGuiMode(!guiMode);
            }
            setDraggingMode(!draggingMode);
            setDisableRotation(false);
            setSceneRotation(false);
        }
    }["KitOfPartsPage.useCallback[dragModeToggle]"], [
        draggingMode,
        guiMode
    ]);
    var planModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[planModeToggle]": function() {
            setDraggingMode(false);
            setGuiMode(false);
            setDisableRotation(!disableRotation);
            setSceneRotation(!sceneRotation);
        }
    }["KitOfPartsPage.useCallback[planModeToggle]"], [
        disableRotation,
        sceneRotation
    ]);
    var SceneSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function() {
        return null;
    });
    SceneSetup.displayName = 'SceneSetup';
    var StableLighting = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$lightingConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightingSetupComponent"], {}, void 0, false, {
            fileName: "[project]/app/kit-of-parts/page.js",
            lineNumber: 152,
            columnNumber: 12
        }, _this);
    });
    StableLighting.displayName = 'StableLighting';
    var OrthographicCameraSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s1(function() {
        _s1();
        var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), camera = _useThree.camera, size = _useThree.size;
        var lastSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
            width: 0,
            height: 0
        });
        var zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.OrthographicCameraSetup.useEffect": function() {
                if (camera && camera.isOrthographicCamera) {
                    if (zoomRef.current === null) {
                        zoomRef.current = camera.zoom;
                    }
                    var sizeChanged = Math.abs(lastSizeRef.current.width - size.width) > 0.5 || Math.abs(lastSizeRef.current.height - size.height) > 0.5;
                    if (sizeChanged) {
                        var preservedZoom = zoomRef.current;
                        camera.near = 0.1;
                        camera.far = 2000;
                        var aspect = size.width / size.height;
                        var viewSize = 500;
                        camera.left = -viewSize * aspect;
                        camera.right = viewSize * aspect;
                        camera.top = viewSize;
                        camera.bottom = -viewSize;
                        camera.zoom = preservedZoom;
                        camera.updateProjectionMatrix();
                        zoomRef.current = camera.zoom;
                        lastSizeRef.current = {
                            width: size.width,
                            height: size.height
                        };
                    } else {
                        if (zoomRef.current !== null && Math.abs(camera.zoom - zoomRef.current) > 0.001) {
                            camera.zoom = zoomRef.current;
                            camera.updateProjectionMatrix();
                        }
                    }
                }
            }
        }["KitOfPartsPage.OrthographicCameraSetup.useEffect"], [
            camera,
            size
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.OrthographicCameraSetup.useEffect": function() {
                if (camera && camera.isOrthographicCamera) {
                    if (zoomRef.current === null) {
                        zoomRef.current = camera.zoom;
                    }
                    var handleResize = {
                        "KitOfPartsPage.OrthographicCameraSetup.useEffect.handleResize": function() {
                            var preservedZoom = zoomRef.current || camera.zoom;
                            var aspect = window.innerWidth / window.innerHeight;
                            var viewSize = 500;
                            camera.left = -viewSize * aspect;
                            camera.right = viewSize * aspect;
                            camera.top = viewSize;
                            camera.bottom = -viewSize;
                            camera.zoom = preservedZoom;
                            camera.updateProjectionMatrix();
                            zoomRef.current = camera.zoom;
                        }
                    }["KitOfPartsPage.OrthographicCameraSetup.useEffect.handleResize"];
                    window.addEventListener('resize', handleResize);
                    return ({
                        "KitOfPartsPage.OrthographicCameraSetup.useEffect": function() {
                            return window.removeEventListener('resize', handleResize);
                        }
                    })["KitOfPartsPage.OrthographicCameraSetup.useEffect"];
                }
            }
        }["KitOfPartsPage.OrthographicCameraSetup.useEffect"], [
            camera
        ]);
        return null;
    }, "OOpiB43IM8JcMZxkCnztruifMO0=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
        ];
    }));
    OrthographicCameraSetup.displayName = 'OrthographicCameraSetup';
    var CameraZoomLock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s2(function() {
        _s2();
        var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
        var zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        var isLockingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
        var lockTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        var frameCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
        var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_objectsState"), 1), objects = _useStore[0];
        var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_clickbathroom2"), 1), bathroom = _useStore1[0];
        var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_boxbedState"), 1), boxbed = _useStore2[0];
        var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_frontState"), 1), front = _useStore3[0];
        var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_kitchenState"), 1), kitchen = _useStore4[0];
        var _useStore5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_k2State"), 1), k2 = _useStore5[0];
        var _useStore6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st1State"), 1), st1 = _useStore6[0];
        var _useStore7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st2State", false), 1), st2 = _useStore7[0];
        var _useStore8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_stairsState", false), 1), stairs = _useStore8[0];
        var lastObjectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(objects);
        var lastElementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
            bathroom: bathroom,
            boxbed: boxbed,
            front: front,
            kitchen: kitchen,
            k2: k2,
            st1: st1,
            st2: st2,
            stairs: stairs
        });
        var LOCK_FRAMES = 10;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.CameraZoomLock.useEffect": function() {
                if (camera && camera.isOrthographicCamera) {
                    if (zoomRef.current === null) {
                        zoomRef.current = camera.zoom;
                    }
                }
            }
        }["KitOfPartsPage.CameraZoomLock.useEffect"], [
            camera
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.CameraZoomLock.useEffect": function() {
                if (camera && camera.isOrthographicCamera) {
                    var inventoryChanged = lastObjectsRef.current !== objects;
                    var elementsChanged = lastElementsRef.current.bathroom !== bathroom || lastElementsRef.current.boxbed !== boxbed || lastElementsRef.current.front !== front || lastElementsRef.current.kitchen !== kitchen || lastElementsRef.current.k2 !== k2 || lastElementsRef.current.st1 !== st1 || lastElementsRef.current.st2 !== st2 || lastElementsRef.current.stairs !== stairs;
                    if (inventoryChanged || elementsChanged) {
                        if (zoomRef.current !== null) {
                            camera.zoom = zoomRef.current;
                            camera.updateProjectionMatrix();
                        }
                        isLockingRef.current = true;
                        frameCountRef.current = 0;
                    }
                    lastObjectsRef.current = objects;
                    lastElementsRef.current = {
                        bathroom: bathroom,
                        boxbed: boxbed,
                        front: front,
                        kitchen: kitchen,
                        k2: k2,
                        st1: st1,
                        st2: st2,
                        stairs: stairs
                    };
                }
            }
        }["KitOfPartsPage.CameraZoomLock.useEffect"], [
            objects,
            bathroom,
            boxbed,
            front,
            kitchen,
            k2,
            st1,
            st2,
            stairs,
            camera
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
            "KitOfPartsPage.CameraZoomLock.useFrame": function() {
                if (camera && camera.isOrthographicCamera) {
                    if (isLockingRef.current && zoomRef.current !== null) {
                        if (Math.abs(camera.zoom - zoomRef.current) > 0.001) {
                            camera.zoom = zoomRef.current;
                            camera.updateProjectionMatrix();
                        }
                        frameCountRef.current++;
                        if (frameCountRef.current >= LOCK_FRAMES) {
                            isLockingRef.current = false;
                            zoomRef.current = camera.zoom;
                        }
                    } else {
                        zoomRef.current = camera.zoom;
                    }
                }
            }
        }["KitOfPartsPage.CameraZoomLock.useFrame"]);
        return null;
    }, "tFCbpmGeLw8WKzp6PyoUpFXrhpU=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
        ];
    }));
    CameraZoomLock.displayName = 'CameraZoomLock';
    var CameraLock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s3(function() {
        _s3();
        var camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])().camera;
        var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureMode", false), 1), captureMode = _useStore[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
            "KitOfPartsPage.CameraLock.useFrame": function() {
                if (captureMode && camera && camera.isOrthographicCamera) {
                    // Continuously lock camera position and rotation during capture
                    camera.position.set(0, 50, 0);
                    camera.zoom = 17;
                    camera.lookAt(0, 0, 0);
                    camera.updateProjectionMatrix();
                }
            }
        }["KitOfPartsPage.CameraLock.useFrame"]);
        return null;
    }, "X0aOkPnWBrKxYnEHakP/EwzYI1E=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
        ];
    }));
    CameraLock.displayName = 'CameraLock';
    var CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s4(function(param) {
        var isZoom = param.isZoom, draggingMode = param.draggingMode, guiMode = param.guiMode, disableRotation = param.disableRotation, sceneRotation = param.sceneRotation;
        _s4();
        var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureMode", false), 1), captureMode = _useStore[0];
        var prevCaptureModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
        var isInitialMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
        var initialCameraPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        var initialCameraZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.CameraDolly.useEffect": function() {
                if (state.camera && state.camera.isOrthographicCamera) {
                    // Store initial camera position on first mount
                    if (isInitialMountRef.current) {
                        initialCameraPositionRef.current = state.camera.position.clone();
                        initialCameraZoomRef.current = state.camera.zoom;
                    }
                    // Track if we're transitioning FROM capture mode
                    var wasInCaptureMode = prevCaptureModeRef.current;
                    var justExitedCaptureMode = wasInCaptureMode && !captureMode;
                    // Skip camera positioning on initial mount unless we're in a specific mode
                    if (isInitialMountRef.current && !captureMode && !draggingMode && !guiMode) {
                        prevCaptureModeRef.current = captureMode;
                        isInitialMountRef.current = false;
                        return;
                    }
                    if (captureMode === true) {
                        // Lock camera in top-down view for capture
                        state.camera.position.set(0, 50, 0);
                        state.camera.zoom = 17;
                        state.camera.lookAt(0, 0, 0);
                    } else if (justExitedCaptureMode) {
                        // CameraResetOnExitCapture (outside page) handles the switch in useFrame
                        prevCaptureModeRef.current = captureMode;
                        isInitialMountRef.current = false;
                        return;
                    } else if (draggingMode === true) {
                        // Axonometric view
                        state.camera.position.set(-14, 11, 15);
                        state.camera.zoom = 17;
                        state.camera.lookAt(0, 0, 0);
                    } else if (guiMode === true) {
                        // GUI mode view
                        state.camera.position.set(-5.16, 19.9, 8.7);
                        state.camera.zoom = 17;
                        state.camera.lookAt(0, 0, 0);
                    }
                    state.camera.updateProjectionMatrix();
                    prevCaptureModeRef.current = captureMode;
                    isInitialMountRef.current = false;
                }
            }
        }["KitOfPartsPage.CameraDolly.useEffect"], [
            captureMode,
            draggingMode,
            guiMode,
            state.camera
        ]);
        return null;
    }, "dbX4W3+Y0axGvTKAR277yUbB1kM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
        ];
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            style: {
                overscrollBehavior: 'none',
                touchAction: 'none'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                dpr: 1.5,
                orthographic: true,
                camera: {
                    position: [
                        -14,
                        11,
                        15
                    ],
                    zoom: 17
                },
                frameloop: sceneRotation === true || captureMode || keepFramesForReset || cameraResetting ? "always" : "demand",
                gl: {
                    antialias: true,
                    powerPreference: 'high-performance',
                    stencil: false,
                    depth: true,
                    preserveDrawingBuffer: true,
                    failIfMajorPerformanceCaveat: false
                },
                onCreated: function(param) {
                    var gl = param.gl, scene = param.scene, camera = param.camera, size = param.size;
                    gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
                    gl.toneMappingExposure = 1.0;
                    gl.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
                    if (camera && camera.isOrthographicCamera) {
                        camera.near = 0.1;
                        camera.far = 2000;
                    }
                },
                style: {
                    background: "#1C1C1C",
                    height: "100vh",
                    overscrollBehavior: 'none',
                    touchAction: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrthographicCameraSetup, {}, void 0, false, {
                        fileName: "[project]/app/kit-of-parts/page.js",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneSetup, {}, void 0, false, {
                        fileName: "[project]/app/kit-of-parts/page.js",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StableLighting, {}, void 0, false, {
                        fileName: "[project]/app/kit-of-parts/page.js",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                rotation: captureMode ? [
                                    0,
                                    Math.PI / 2,
                                    0
                                ] : [
                                    0,
                                    Math.PI / 2,
                                    0
                                ],
                                position: [
                                    0,
                                    -10,
                                    0
                                ],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$b1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: bathroom,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$bb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: boxbed,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$FP$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: front,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: kitchen,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: k2,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: st1,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: st2,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$Stairs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: stairs,
                                        isZoomState: isZoom,
                                        isMouseDragging: guiMode,
                                        isAxio: draggingMode,
                                        freeView: sceneRotation
                                    }, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$boundingBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/kit-of-parts/page.js",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                autoRotate: sceneRotation === true && !captureMode,
                                enableRotate: !captureMode,
                                enableZoom: !captureMode,
                                enablePan: !captureMode,
                                autoRotateSpeed: 0.2,
                                enableDamping: true,
                                dampingFactor: 0.05,
                                makeDefault: false,
                                minDistance: 500,
                                maxDistance: Infinity,
                                minZoom: 0.1,
                                maxZoom: 100
                            }, captureMode ? 'capture' : 'default', false, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraZoomLock, {}, void 0, false, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraLock, {}, void 0, false, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$CameraResetOnExitCapture$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraDolly, {
                                isZoom: isZoom,
                                draggingMode: draggingMode,
                                guiMode: guiMode,
                                disableRotation: disableRotation,
                                sceneRotation: sceneRotation
                            }, void 0, false, {
                                fileName: "[project]/app/kit-of-parts/page.js",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/kit-of-parts/page.js",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/kit-of-parts/page.js",
                lineNumber: 387,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/kit-of-parts/page.js",
            lineNumber: 386,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(KitOfPartsPage, "amU5Cv8AJxZgcL4IehFwxUg/Wak=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = KitOfPartsPage;
const __TURBOPACK__default__export__ = KitOfPartsPage;
var _c;
__turbopack_context__.k.register(_c, "KitOfPartsPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7bf4f9e6._.js.map