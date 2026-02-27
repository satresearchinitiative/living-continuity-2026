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
'use client';
;
;
;
function PassiveOrbitControls(props) {
    _s();
    var controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var runningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), invalidate = _useThree.invalidate, gl = _useThree.gl;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassiveOrbitControls.useEffect": function() {
            if (gl && gl.domElement) {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            }
        }
    }["PassiveOrbitControls.useEffect"], [
        gl
    ]);
    var handleControlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PassiveOrbitControls.useCallback[handleControlsRef]": function(node) {
            controlsRef.current = node;
            if (node) {
                node.enableZoom = props.enableZoom !== false;
                node.enablePan = props.enablePan !== false;
                if (node.mouseButtons && props.enableZoom === false) {
                    node.mouseButtons.WHEEL = null;
                }
            }
        }
    }["PassiveOrbitControls.useCallback[handleControlsRef]"], [
        props.enableZoom,
        props.enablePan
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PassiveOrbitControls.useEffect": function() {
            var controls = controlsRef.current;
            if (!controls) return;
            var handleChange = {
                "PassiveOrbitControls.useEffect.handleChange": function() {
                    invalidate();
                }
            }["PassiveOrbitControls.useEffect.handleChange"];
            controls.addEventListener('change', handleChange);
            if (props.autoRotate) {
                runningRef.current = true;
                var lastTime = performance.now();
                var targetFPS = 30;
                var interval = 1000 / targetFPS;
                var tick = {
                    "PassiveOrbitControls.useEffect.tick": function(currentTime) {
                        if (!runningRef.current || !controls || !controls.object) return;
                        var delta = currentTime - lastTime;
                        if (delta >= interval) {
                            if (controls.autoRotate) {
                                controls.update();
                                invalidate();
                            }
                            lastTime = currentTime - delta % interval;
                        }
                        rafRef.current = requestAnimationFrame(tick);
                    }
                }["PassiveOrbitControls.useEffect.tick"];
                rafRef.current = requestAnimationFrame(tick);
                return ({
                    "PassiveOrbitControls.useEffect": function() {
                        runningRef.current = false;
                        if (rafRef.current) {
                            cancelAnimationFrame(rafRef.current);
                            rafRef.current = null;
                        }
                        controls.removeEventListener('change', handleChange);
                    }
                })["PassiveOrbitControls.useEffect"];
            }
            return ({
                "PassiveOrbitControls.useEffect": function() {
                    runningRef.current = false;
                    if (rafRef.current) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                    controls.removeEventListener('change', handleChange);
                }
            })["PassiveOrbitControls.useEffect"];
        }
    }["PassiveOrbitControls.useEffect"], [
        invalidate,
        props.autoRotate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        ref: handleControlsRef
    }, props), {
        enableZoom: props.enableZoom !== false,
        enablePan: props.enablePan !== false
    }), void 0, false, {
        fileName: "[project]/components/utils/PassiveOrbitControls.jsx",
        lineNumber: 83,
        columnNumber: 12
    }, this);
}
_s(PassiveOrbitControls, "9YOUrgGfgHoPqGYrOTXInEvg74o=", false, function() {
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
"[project]/components/new/ground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                position: [
                    gridDimensions.centerX || 0,
                    1.03,
                    gridDimensions.centerZ || 0
                ],
                followCamera: false,
                args: [
                    gridDimensions.width,
                    gridDimensions.height
                ],
                cellColor: "#939393",
                cellSize: gridDimensions.cellSize,
                cellThickness: 0.8,
                sectionColor: "#939393",
                sectionSize: 0,
                infiniteGrid: false
            }, void 0, false, {
                fileName: "[project]/components/new/ground.jsx",
                lineNumber: 98,
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
                        fileName: "[project]/components/new/ground.jsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, _this);
                })
            }), void 0, false, {
                fileName: "[project]/components/new/ground.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/new/ground.jsx",
        lineNumber: 97,
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
"[project]/components/new/boundingBox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                fileName: "[project]/components/new/boundingBox.jsx",
                lineNumber: 138,
                columnNumber: 11
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/components/new/boundingBox.jsx",
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
"[project]/components/new/b1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].b1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var maxZ = 13;
    var minZ = -13;
    var maxX = 16;
    var minX = -16;
    var GUI = true;
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false), 2), sceneRotation = _useStore2[0], setSceneRotation = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore3[0];
    var objectId = "b1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "B1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 348,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 368,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "BATHROOM"
                        }, void 0, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 377,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/b1.jsx",
                        lineNumber: 376,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/b1.jsx",
                                            lineNumber: 409,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 402,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 396,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 428,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 437,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 421,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 416,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/b1.jsx",
                                            lineNumber: 456,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 449,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 443,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 471,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 480,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 464,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 463,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 494,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 503,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 487,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 486,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 517,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 526,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 510,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 509,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 545,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 554,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 538,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 532,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 392,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/b1.jsx",
                        lineNumber: 391,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/b1.jsx",
                lineNumber: 338,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/b1.jsx",
            lineNumber: 337,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/b1.jsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_s(B1, "Vg+kCHarKVNKmRGtMh8Jg9mg35k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/new/bb.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].bb;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "bb";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bb.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 314,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "BOXBED"
                        }, void 0, false, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 342,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/bb.jsx",
                        lineNumber: 341,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/bb.jsx",
                                            lineNumber: 373,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 366,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 360,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 392,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 401,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 385,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 380,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/bb.jsx",
                                            lineNumber: 420,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 413,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 407,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 444,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 428,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 427,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 467,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 451,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 450,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 481,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 490,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 474,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 473,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 509,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 518,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 502,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 496,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 356,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/bb.jsx",
                        lineNumber: 355,
                        columnNumber: 15
                    }, this)
                ]
            }), void 0, true, {
                fileName: "[project]/components/new/bb.jsx",
                lineNumber: 302,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/bb.jsx",
            lineNumber: 301,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/bb.jsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(Bb, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/new/FP.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].fp;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "fp";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "F1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 313,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 332,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "FRONT PORCH"
                        }, void 0, false, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 341,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/FP.jsx",
                        lineNumber: 340,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/FP.jsx",
                                            lineNumber: 372,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 365,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 359,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 391,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 400,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 384,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 379,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/FP.jsx",
                                            lineNumber: 419,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 412,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 406,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 434,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 443,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 427,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 426,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 457,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 466,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 450,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 449,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 480,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 489,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 473,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 472,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 508,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 517,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 501,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 495,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 355,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/FP.jsx",
                        lineNumber: 354,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/FP.jsx",
                lineNumber: 301,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/FP.jsx",
            lineNumber: 300,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/FP.jsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
_s(F1, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
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
"[project]/components/new/K1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "k1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 314,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "KITCHEN"
                        }, void 0, false, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 342,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K1.jsx",
                        lineNumber: 341,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/K1.jsx",
                                            lineNumber: 373,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 366,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 360,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 392,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 401,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 385,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 380,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/K1.jsx",
                                            lineNumber: 420,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 413,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 407,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 444,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 428,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 427,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 467,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 451,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 450,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 481,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 490,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 474,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 473,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 509,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 518,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 502,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 496,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 356,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K1.jsx",
                        lineNumber: 355,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/K1.jsx",
                lineNumber: 302,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/K1.jsx",
            lineNumber: 301,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/K1.jsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(K1, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/new/K2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k2;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "k2";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "K2.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 312,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 331,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "KITCHEN (STORAGE)"
                        }, void 0, false, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 340,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K2.jsx",
                        lineNumber: 339,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/K2.jsx",
                                            lineNumber: 371,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 364,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 358,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 390,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 399,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 383,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 378,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/K2.jsx",
                                            lineNumber: 418,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 411,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 405,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 433,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 442,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 426,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 425,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 456,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 465,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 449,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 448,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 479,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 488,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 472,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 471,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 507,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 516,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 500,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 494,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 354,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K2.jsx",
                        lineNumber: 353,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/K2.jsx",
                lineNumber: 300,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/K2.jsx",
            lineNumber: 299,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/K2.jsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s(K2, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/new/ST1.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st1;
    var initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    }), 2), currentPosition = _useState3[0], setCurrentPosition = _useState3[1];
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "st1";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST1.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 314,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "STORAGE 1"
                        }, void 0, false, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 342,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST1.jsx",
                        lineNumber: 341,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/ST1.jsx",
                                            lineNumber: 373,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 366,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 360,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 392,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 401,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 385,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 380,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/ST1.jsx",
                                            lineNumber: 420,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 413,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 407,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 444,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 428,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 427,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 467,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 451,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 450,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 481,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 490,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 474,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 473,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 509,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 518,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 502,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 496,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 356,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST1.jsx",
                        lineNumber: 355,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/ST1.jsx",
                lineNumber: 302,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/ST1.jsx",
            lineNumber: 301,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/ST1.jsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(ST1, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/new/ST2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
    var objectId = "st2";
    var isSelected = selectedObjectId === objectId;
    var lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ST2.useMemo[lineMaterial]": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: isSelected ? 0xe9ff00 : 0x000000,
                linewidth: 2,
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
                        return prev + Math.PI / 4;
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
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), showPanel = _useState4[0], setShowPanel = _useState4[1];
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 313,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 332,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "STORAGE 2"
                        }, void 0, false, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 341,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST2.jsx",
                        lineNumber: 340,
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
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/ST2.jsx",
                                            lineNumber: 361,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 354,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 348,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 376,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 385,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 369,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 368,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/ST2.jsx",
                                            lineNumber: 404,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 397,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 391,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 419,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 428,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 412,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 411,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 442,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 451,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 435,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 434,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 465,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 474,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 458,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 457,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 493,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 502,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 486,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 480,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 347,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST2.jsx",
                        lineNumber: 346,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/ST2.jsx",
                lineNumber: 303,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/ST2.jsx",
            lineNumber: 302,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/ST2.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(ST2, "lS8qX0Tz+Gty1gTKiCzs9WEyRTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
"[project]/components/utils/ObjectControls.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var isSelected = param.isSelected, onRotate = param.onRotate, onMoveRight = param.onMoveRight, onMoveLeft = param.onMoveLeft, onMoveTop = param.onMoveTop, onMoveBottom = param.onMoveBottom;
    if (!isSelected) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            0,
            2.5,
            0
        ],
        center: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "object-controls",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "object-controls__button",
                    onClick: onRotate,
                    title: "Rotate",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12H4C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/components/utils/ObjectControls.jsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/ObjectControls.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/ObjectControls.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "object-controls__button",
                    onClick: onMoveRight,
                    title: "Move Right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/components/utils/ObjectControls.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/ObjectControls.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/ObjectControls.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "object-controls__button",
                    onClick: onMoveLeft,
                    title: "Move Left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/components/utils/ObjectControls.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/ObjectControls.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/ObjectControls.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "object-controls__button",
                    onClick: onMoveTop,
                    title: "Move Top",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/components/utils/ObjectControls.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/ObjectControls.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/ObjectControls.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "object-controls__button",
                    onClick: onMoveBottom,
                    title: "Move Bottom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/components/utils/ObjectControls.jsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/utils/ObjectControls.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/utils/ObjectControls.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/utils/ObjectControls.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/utils/ObjectControls.jsx",
        lineNumber: 16,
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
"[project]/components/new/Stairs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ObjectControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/ObjectControls.jsx [app-client] (ecmascript)");
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
    var handleMove = function(deltaX, deltaZ) {
        if (!gridDimensions || gridDimensions.width === 0) return;
        setCurrentGridPos(function(prev) {
            var newGridX = prev.gridX + deltaX;
            var newGridZ = prev.gridZ + deltaZ;
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
            return prev + Math.PI / 4;
        });
    };
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null), 2), selectedObjectId = _useStore1[0], setSelectedObjectId = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0), 1), objectRotationTrigger = _useStore2[0];
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
                        return prev + Math.PI / 4;
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 307,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 326,
                            columnNumber: 17
                        }, _this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                                position: [
                                    0,
                                    3,
                                    0
                                ],
                                center: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "object-title",
                                    children: "STAIRS"
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 336,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/new/Stairs.jsx",
                                lineNumber: 335,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$ObjectControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectControls"], {
                                isSelected: isSelected,
                                onRotate: handleRotate,
                                onMoveRight: function() {
                                    return handleMove(1, 0);
                                },
                                onMoveLeft: function() {
                                    return handleMove(-1, 0);
                                },
                                onMoveTop: function() {
                                    return handleMove(0, -1);
                                },
                                onMoveBottom: function() {
                                    return handleMove(0, 1);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/new/Stairs.jsx",
                                lineNumber: 338,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount + Math.PI / 4);
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
                                            fileName: "[project]/components/new/Stairs.jsx",
                                            lineNumber: 365,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 358,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 352,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 380,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 389,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 373,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 372,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: function() {
                                        setRotationCount(rotationCount - Math.PI / 4);
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
                                            fileName: "[project]/components/new/Stairs.jsx",
                                            lineNumber: 408,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 401,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 395,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 423,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 432,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 416,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 415,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 446,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 455,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 439,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 438,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 469,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 478,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 462,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 461,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 497,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 506,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 490,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 484,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 351,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/Stairs.jsx",
                        lineNumber: 350,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/Stairs.jsx",
                lineNumber: 297,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/Stairs.jsx",
            lineNumber: 296,
            columnNumber: 9
        }, this)
    }), void 0, false, {
        fileName: "[project]/components/new/Stairs.jsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_s(Stairs, "ReaA/Y338ooeFambStKiL4Xwe5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/PassiveOrbitControls.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$lightingConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/lightingConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ground.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$boundingBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/boundingBox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$b1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/b1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$bb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/bb.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$FP$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/FP.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/K1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/K2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ST1.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ST2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$Stairs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/Stairs.jsx [app-client] (ecmascript)");
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
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
    var onButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KitOfPartsPage.useCallback[onButtonClick]": function() {
            if (ref.current === null) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(ref.current, {
                cacheBust: true
            }).then({
                "KitOfPartsPage.useCallback[onButtonClick]": function(dataUrl) {
                    var link = document.createElement("a");
                    link.download = "download.png";
                    link.href = dataUrl;
                    link.click();
                }
            }["KitOfPartsPage.useCallback[onButtonClick]"])["catch"]({
                "KitOfPartsPage.useCallback[onButtonClick]": function(err) {
                    console.error('[ERROR] Failed to capture screenshot:', err);
                }
            }["KitOfPartsPage.useCallback[onButtonClick]"]);
        }
    }["KitOfPartsPage.useCallback[onButtonClick]"], [
        ref
    ]);
    var _useStore9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false), 2), sceneRotation = _useStore9[0], setSceneRotation = _useStore9[1];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), 2), isZoom = _useState[0], setZoom = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), disableRotation = _useState1[0], setDisableRotation = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), buttonTriggered = _useState2[0], setbuttonTriggered = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), draggingMode = _useState3[0], setDraggingMode = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), guiMode = _useState4[0], setGuiMode = _useState4[1];
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
            lineNumber: 102,
            columnNumber: 12
        }, _this);
    });
    StableLighting.displayName = 'StableLighting';
    var OrthographicCameraSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s1(function() {
        _s1();
        var _useThree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), camera = _useThree.camera, size = _useThree.size;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.OrthographicCameraSetup.useEffect": function() {
                if (camera && camera.isOrthographicCamera) {
                    camera.near = 0.1;
                    camera.far = 1000;
                }
            }
        }["KitOfPartsPage.OrthographicCameraSetup.useEffect"], [
            camera
        ]);
        return null;
    }, "doXc0X4Ns9Jm26E5S4kY3VI4H4c=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
        ];
    }));
    OrthographicCameraSetup.displayName = 'OrthographicCameraSetup';
    var CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s2(function(param) {
        var isZoom = param.isZoom, draggingMode = param.draggingMode, guiMode = param.guiMode, disableRotation = param.disableRotation, sceneRotation = param.sceneRotation;
        _s2();
        var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "KitOfPartsPage.CameraDolly.useEffect": function() {
                if (state.camera && state.camera.isOrthographicCamera) {
                    if (draggingMode === true) {
                        state.camera.position.set(0, 27, 0);
                        state.camera.zoom = 17;
                        state.camera.updateProjectionMatrix();
                    }
                    if (guiMode === true) {
                        state.camera.position.set(-5.16, 19.9, 8.7);
                        state.camera.zoom = 17;
                        state.camera.updateProjectionMatrix();
                    }
                    if (disableRotation === true || sceneRotation === true) {
                        state.camera.zoom = 17;
                        state.camera.updateProjectionMatrix();
                    }
                }
            }
        }["KitOfPartsPage.CameraDolly.useEffect"], [
            draggingMode,
            guiMode,
            disableRotation,
            sceneRotation
        ]);
        return null;
    }, "VFHWeScjs7AWKVa+0UEecccTwG4=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
        ];
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                zoom: 13
            },
            frameloop: sceneRotation === true ? "always" : "demand",
            gl: {
                antialias: true,
                powerPreference: 'high-performance',
                stencil: false,
                depth: true,
                preserveDrawingBuffer: false,
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
                    camera.far = 1000;
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
                    lineNumber: 179,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneSetup, {}, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 180,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StableLighting, {}, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 181,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                            rotation: [
                                0,
                                0,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$b1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: bathroom,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$bb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: boxbed,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$FP$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: front,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: kitchen,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: k2,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST1$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: st1,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: st2,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$Stairs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: stairs,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$boundingBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            autoRotate: sceneRotation === true,
                            enableRotate: true,
                            enableZoom: true,
                            autoRotateSpeed: 0.5,
                            enableDamping: true,
                            dampingFactor: 0.05,
                            makeDefault: false,
                            minDistance: 0,
                            maxDistance: Infinity,
                            minZoom: 0.1,
                            maxZoom: 100
                        }, void 0, false, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 198,
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
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/kit-of-parts/page.js",
            lineNumber: 147,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/kit-of-parts/page.js",
        lineNumber: 146,
        columnNumber: 7
    }, this);
}
_s(KitOfPartsPage, "BhHrTlgmniwcAYcfJH/5DH4CBpw=", false, function() {
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

//# sourceMappingURL=_c2ae6e25._.js.map