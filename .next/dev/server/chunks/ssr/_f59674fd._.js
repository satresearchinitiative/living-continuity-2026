module.exports = [
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
        const makeEventsPassive = ()=>{
            const passiveListeners = [];
            const originalAddEventListener = domElement.addEventListener.bind(domElement);
            const originalRemoveEventListener = domElement.removeEventListener.bind(domElement);
            const passiveEvents = [
                'wheel',
                'touchstart',
                'touchmove'
            ];
            domElement.addEventListener = function(type, listener, options) {
                if (passiveEvents.includes(type)) {
                    passiveListeners.push({
                        type,
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
                if (passiveEvents.includes(type)) {
                    const index = passiveListeners.findIndex((l)=>l.listener === listener && l.type === type);
                    if (index !== -1) {
                        passiveListeners.splice(index, 1);
                    }
                }
                return originalRemoveEventListener(type, listener, options);
            };
        };
        makeEventsPassive();
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
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/utils/lightingConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightingSetup",
    ()=>LightingSetup,
    "LightingSetupComponent",
    ()=>LightingSetupComponent,
    "createLightingSetup",
    ()=>createLightingSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
const LightingSetup = {
    ambient: {
        intensity: 1.5,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff)
    },
    directional: [
        {
            position: [
                20,
                25,
                15
            ],
            intensity: 1.5,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
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
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        },
        {
            position: [
                0,
                15,
                0
            ],
            intensity: 0.5,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        },
        {
            position: [
                10,
                10,
                -20
            ],
            intensity: 0.4,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
            castShadow: false
        }
    ],
    hemisphere: {
        skyColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
        groundColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x888888),
        intensity: 0.8
    }
};
function LightingSetupComponent() {
    const mainLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mainLightRef.current && LightingSetup.directional[0]?.shadow) {
            const shadow = LightingSetup.directional[0].shadow;
            mainLightRef.current.shadow.mapSize.width = shadow.mapSize[0];
            mainLightRef.current.shadow.mapSize.height = shadow.mapSize[1];
            mainLightRef.current.shadow.camera.near = shadow.camera.near;
            mainLightRef.current.shadow.camera.far = shadow.camera.far;
            mainLightRef.current.shadow.camera.left = shadow.camera.left;
            mainLightRef.current.shadow.camera.right = shadow.camera.right;
            mainLightRef.current.shadow.camera.top = shadow.camera.top;
            mainLightRef.current.shadow.camera.bottom = shadow.camera.bottom;
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: LightingSetup.ambient.intensity,
                color: LightingSetup.ambient.color
            }, void 0, false, {
                fileName: "[project]/components/utils/lightingConfig.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                skyColor: LightingSetup.hemisphere.skyColor,
                groundColor: LightingSetup.hemisphere.groundColor,
                intensity: LightingSetup.hemisphere.intensity
            }, void 0, false, {
                fileName: "[project]/components/utils/lightingConfig.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            LightingSetup.directional.map((light, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    ref: index === 0 ? mainLightRef : null,
                    position: light.position,
                    intensity: light.intensity,
                    color: light.color,
                    castShadow: light.castShadow
                }, index, false, {
                    fileName: "[project]/components/utils/lightingConfig.js",
                    lineNumber: 84,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
}
function createLightingSetup() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LightingSetupComponent, {}, void 0, false, {
        fileName: "[project]/components/utils/lightingConfig.js",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGLTFMaterials",
    ()=>setupGLTFMaterials,
    "setupMaterialTextures",
    ()=>setupMaterialTextures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
function setupMaterialTextures(material, preserveOriginal = true) {
    if (!material || !material.isMaterial) return;
    const originalProperties = preserveOriginal ? {
        color: material.color?.clone(),
        emissive: material.emissive?.clone(),
        roughness: material.roughness,
        metalness: material.metalness,
        opacity: material.opacity,
        transparent: material.transparent,
        side: material.side
    } : null;
    const textureMaps = [
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
    textureMaps.forEach((mapName)=>{
        const texture = material[mapName];
        if (texture && texture.isTexture) {
            if (texture.image && !texture.image.complete) {
                texture.image.addEventListener('load', ()=>{
                    texture.needsUpdate = true;
                });
            }
            if (texture.flipY === undefined || texture.flipY === true) {
                texture.flipY = false;
            }
            if (!texture.wrapS || texture.wrapS === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]) {
                texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            }
            if (!texture.wrapT || texture.wrapT === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]) {
                texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            }
            if (texture.generateMipmaps !== false) {
                texture.generateMipmaps = true;
                texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
            }
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            if (mapName === 'normalMap' || mapName.includes('Normal')) {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"];
                }
            } else if (mapName === 'map' || mapName === 'emissiveMap' || mapName === 'aoMap') {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                }
            } else {
                if (texture.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"]) {
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"];
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
function setupGLTFMaterials(materials, preserveOriginal = true) {
    if (!materials) return;
    Object.values(materials).forEach((material)=>{
        if (material && material.isMaterial) {
            setupMaterialTextures(material, preserveOriginal);
        }
    });
}
}),
"[project]/components/kitModels/ground.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Floor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function Floor(props) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/floor.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
            Object.values(materials).forEach((material)=>{
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
            });
        }
    }, [
        materials
    ]);
    const [, setGridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return true;
        });
    }, [
        nodes
    ]);
    const gridDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return {
            width: 144,
            height: 192,
            cellSize: 12,
            centerX: 0,
            centerZ: 0
        };
        const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]();
        let hasGeometry = false;
        Object.values(nodes).forEach((node)=>{
            if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                const geometry = node.geometry;
                geometry.computeBoundingBox();
                if (geometry.boundingBox) {
                    const nodeBox = geometry.boundingBox.clone();
                    if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]())) {
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
        });
        if (!hasGeometry || box.isEmpty()) {
            return {
                width: 144,
                height: 192,
                cellSize: 12,
                centerX: 0,
                centerZ: 0
            };
        }
        const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        const desiredTilesX = 12;
        const desiredTilesZ = 16;
        const cellSize = Math.max(size.x / desiredTilesX, size.z / desiredTilesZ);
        const width = cellSize * desiredTilesX;
        const height = cellSize * desiredTilesZ;
        return {
            width,
            height,
            cellSize,
            centerX: center.x,
            centerZ: center.z
        };
    }, [
        nodes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setGridDimensions(gridDimensions);
    }, [
        gridDimensions,
        setGridDimensions
    ]);
    const firstMaterial = materials && Object.values(materials)[0];
    const CustomGrid = ({ width, height, cellSize, centerX, centerZ, yPosition })=>{
        const gridGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const vertices = [];
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const startX = centerX - halfWidth;
            const endX = centerX + halfWidth;
            const startZ = centerZ - halfHeight;
            const endZ = centerZ + halfHeight;
            const numLinesX = Math.floor(width / cellSize) + 1;
            const numLinesZ = Math.floor(height / cellSize) + 1;
            for(let i = 0; i <= numLinesX; i++){
                const x = startX + i * cellSize;
                vertices.push(x, yPosition, startZ, x, yPosition, endZ);
            }
            for(let i = 0; i <= numLinesZ; i++){
                const z = startZ + i * cellSize;
                vertices.push(startX, yPosition, z, endX, yPosition, z);
            }
            geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](vertices, 3));
            return geometry;
        }, [
            width,
            height,
            cellSize,
            centerX,
            centerZ,
            yPosition
        ]);
        const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: "#1C1C1C",
                linewidth: 1,
                opacity: 0.5,
                transparent: true
            });
        }, []);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
            geometry: gridGeometry,
            material: material,
            renderOrder: 1
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ground.jsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomGrid, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ...props,
                dispose: null,
                children: meshNodes.map(([nodeKey, node])=>{
                    if (!node || !node.geometry) return null;
                    if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                    if (node.type && node.type !== 'Mesh') return null;
                    let nodeMaterial = node.material || firstMaterial;
                    if (!nodeMaterial) return null;
                    if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                        node.geometry.computeVertexNormals();
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    }, this);
                })
            }, void 0, false, {
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/floor.glb");
}),
"[project]/components/kitModels/boundingBox.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BoundingBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
function BoundingBox() {
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const { nodes: fpNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/frontPorch.glb");
    const { nodes: floorNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/floor.glb");
    const fpHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!fpNodes) return 10;
        const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]();
        let hasGeometry = false;
        Object.values(fpNodes).forEach((node)=>{
            if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                const geometry = node.geometry;
                geometry.computeBoundingBox();
                if (geometry.boundingBox) {
                    const nodeBox = geometry.boundingBox.clone();
                    if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]())) {
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
        });
        if (!hasGeometry || box.isEmpty()) return 10;
        const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        return size.y;
    }, [
        fpNodes
    ]);
    const floorBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!floorNodes) return {
            bottom: 0.99,
            height: 0
        };
        const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]();
        let hasGeometry = false;
        Object.values(floorNodes).forEach((node)=>{
            if (node && node.geometry && node.geometry.attributes && node.geometry.attributes.position) {
                if (node.type && node.type !== 'Mesh') return;
                const key = Object.keys(floorNodes).find((k)=>floorNodes[k] === node);
                if (key && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'))) return;
                const geometry = node.geometry;
                geometry.computeBoundingBox();
                if (geometry.boundingBox) {
                    const nodeBox = geometry.boundingBox.clone();
                    if (node.matrix && !node.matrix.equals(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]())) {
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
        });
        if (!hasGeometry || box.isEmpty()) return {
            bottom: 0.99,
            height: 0
        };
        const floorPositionY = 0.99;
        const floorBottomY = box.min.y + floorPositionY;
        const floorHeight = box.max.y - box.min.y;
        return {
            bottom: floorBottomY,
            height: floorHeight
        };
    }, [
        floorNodes
    ]);
    const { width, height, centerX, centerZ } = gridDimensions;
    const boxWidth = width;
    const boxLength = height;
    const porchHeight = fpHeight;
    const floorHeight = floorBounds.height;
    const totalHeight = porchHeight + floorHeight;
    const boxBottom = floorBounds.bottom;
    const boxTop = boxBottom + totalHeight;
    const boxCenterY = boxBottom + totalHeight / 2;
    const position = [
        centerX,
        boxCenterY,
        centerZ
    ];
    const edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const calculatedTotalHeight = totalHeight;
        const w = boxWidth / 2;
        const l = boxLength / 2;
        const h = calculatedTotalHeight / 2;
        const corners = [
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
        const edgeLines = [
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
            corners,
            edgeLines
        };
    }, [
        boxWidth,
        boxLength,
        totalHeight
    ]);
    const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color: 0x00ffff,
        linewidth: 1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: edges.edgeLines.map(([startIdx, endIdx], idx)=>{
            const start = edges.corners[startIdx];
            const end = edges.corners[endIdx];
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...start),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...end)
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                geometry: geometry,
                material: lineMaterial
            }, idx, false, {
                fileName: "[project]/components/kitModels/boundingBox.jsx",
                lineNumber: 138,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/kitModels/boundingBox.jsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const OBJECT_GRID_POSITIONS = {
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
    const { cellSize, centerX, centerZ, width, height } = gridDimensions;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const leftEdge = centerX - halfWidth;
    const bottomEdge = centerZ - halfHeight;
    const worldX = leftEdge + gridX * cellSize;
    const worldZ = bottomEdge + gridZ * cellSize;
    return {
        x: worldX,
        y: 1.01,
        z: worldZ
    };
}
function clampToGridBounds(position, gridDimensions) {
    const { width, height, centerX, centerZ } = gridDimensions;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const minX = centerX - halfWidth;
    const maxX = centerX + halfWidth;
    const minZ = centerZ - halfHeight;
    const maxZ = centerZ + halfHeight;
    return {
        x: Math.max(minX, Math.min(maxX, position.x)),
        y: position.y,
        z: Math.max(minZ, Math.min(maxZ, position.z))
    };
}
function worldToGridPosition(worldX, worldZ, gridDimensions) {
    const { cellSize, centerX, centerZ, width, height } = gridDimensions;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const leftEdge = centerX - halfWidth;
    const bottomEdge = centerZ - halfHeight;
    const gridX = (worldX - leftEdge) / cellSize;
    const gridZ = (worldZ - bottomEdge) / cellSize;
    return {
        gridX,
        gridZ
    };
}
}),
"[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectControls",
    ()=>ObjectControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
;
;
;
;
function ObjectControls({ isSelected, onRotate, onMoveRight, onMoveLeft, onMoveTop, onMoveBottom, onPlace = ()=>{}, title }) {
    if (!isSelected) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            0,
            5.5,
            0
        ],
        center: true,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "object-controls__title",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/objectControls/index.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "object-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row object-controls__row--first",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__action object-controls__action--rotate",
                                onClick: onRotate,
                                title: "Rotate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "19",
                                    viewBox: "0 0 22 19",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__action object-controls__action--save",
                                onClick: onPlace,
                                title: "Place",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "object-controls__dpad-button object-controls__dpad-button--up",
                            onClick: onMoveTop,
                            title: "Move Top",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "25",
                                height: "15",
                                viewBox: "0 0 25 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    transform: 'rotate(-90deg)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__dpad-button object-controls__dpad-button--left",
                                onClick: onMoveLeft,
                                title: "Move Left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "25",
                                    height: "15",
                                    viewBox: "0 0 25 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    style: {
                                        transform: 'rotate(180deg)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "object-controls__dpad-button object-controls__dpad-button--right",
                                onClick: onMoveRight,
                                title: "Move Right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "25",
                                    height: "15",
                                    viewBox: "0 0 25 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "object-controls__row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "object-controls__dpad-button object-controls__dpad-button--down",
                            onClick: onMoveBottom,
                            title: "Move Bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "25",
                                height: "15",
                                viewBox: "0 0 25 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    transform: 'rotate(90deg)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/components/kitModels/b1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>B1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
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
function B1({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/bath.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].b1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [sceneRotation, setSceneRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "b1";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showPanel) {
            setCurrentPosition({
                ...currentPosition,
                y: 1
            });
        } else {
            setCurrentPosition({
                ...currentPosition,
                y: 0
            });
        }
    }, [
        showPanel
    ]);
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
            if (isAxio) {
                setSceneRotation(false);
            }
        }
        prevShowRef.current = show;
    }, [
        show,
        isAxio,
        setSelectedObjectId,
        setSceneRotation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials && Object.keys(materials).length > 0 && show) {
            Object.values(materials).forEach((material)=>{
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
            });
        }
    }, [
        isSelected,
        selectedObjectId,
        materials,
        show,
        isAxio
    ]);
    const actionsPanel = (e)=>{
        e.stopPropagation();
        if (isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const handleObjectClick = (e)=>{
        e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true) {
            setSceneRotation(false);
        }
        if (isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node], index)=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            ref: index === 0 ? meshRef : null,
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 436,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 475,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/b1.jsx",
                                lineNumber: 473,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 487,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "BATHROOM",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 496,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/b1.jsx",
                                            lineNumber: 537,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 530,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 524,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 557,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 566,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 549,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 544,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/b1.jsx",
                                            lineNumber: 588,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 581,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 575,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 604,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 613,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 596,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 595,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 631,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 640,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 623,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 622,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 657,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 666,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 650,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 649,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 688,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/b1.jsx",
                                                lineNumber: 697,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/b1.jsx",
                                        lineNumber: 681,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/b1.jsx",
                                    lineNumber: 675,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/b1.jsx",
                            lineNumber: 520,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/b1.jsx",
                        lineNumber: 519,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/b1.jsx",
                lineNumber: 426,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/b1.jsx",
            lineNumber: 425,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/b1.jsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/bath.glb");
}),
"[project]/components/kitModels/bb.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function Bb({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/boxbed.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].bb;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "bb";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
                rotation: [
                    0,
                    rotationCount,
                    0
                ],
                onClick: actionsPanel,
                ...bind(),
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 401,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 439,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/bb.jsx",
                                lineNumber: 437,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 451,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "BOXBED",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 460,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/bb.jsx",
                                            lineNumber: 500,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 493,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 487,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 520,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 529,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 512,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 507,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/bb.jsx",
                                            lineNumber: 551,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 544,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 538,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 567,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 576,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 559,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 558,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 594,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 603,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 586,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 585,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 620,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 629,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 613,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 612,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 651,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/bb.jsx",
                                                lineNumber: 660,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/bb.jsx",
                                        lineNumber: 644,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/bb.jsx",
                                    lineNumber: 638,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/bb.jsx",
                            lineNumber: 483,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/bb.jsx",
                        lineNumber: 482,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/bb.jsx",
                lineNumber: 390,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/bb.jsx",
            lineNumber: 389,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/bb.jsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/boxbed.glb");
}),
"[project]/components/kitModels/FP.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>F1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function F1({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/frontPorch.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].fp;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "fp";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 391,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 429,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/FP.jsx",
                                lineNumber: 427,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 441,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                        isSelected: isSelected,
                        title: "FRONT PORCH",
                        onRotate: handleRotate,
                        onMoveRight: ()=>handleMove(1, 0),
                        onMoveLeft: ()=>handleMove(-1, 0),
                        onMoveTop: ()=>handleMove(0, 1),
                        onMoveBottom: ()=>handleMove(0, -1),
                        onPlace: ()=>setSelectedObjectId(null)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/FP.jsx",
                        lineNumber: 449,
                        columnNumber: 15
                    }, this),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/FP.jsx",
                                            lineNumber: 488,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 481,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 475,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 508,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 517,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 500,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 495,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/FP.jsx",
                                            lineNumber: 539,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 532,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 526,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 555,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 564,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 547,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 546,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 582,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 591,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 574,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 573,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 617,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 601,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 600,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 639,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/FP.jsx",
                                                lineNumber: 648,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/FP.jsx",
                                        lineNumber: 632,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/FP.jsx",
                                    lineNumber: 626,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/FP.jsx",
                            lineNumber: 471,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/FP.jsx",
                        lineNumber: 470,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/FP.jsx",
                lineNumber: 379,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/FP.jsx",
            lineNumber: 378,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/FP.jsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/frontPorch.glb");
}),
"[project]/components/kitModels/K1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>K1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function K1({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/kitchen1.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "k1";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 401,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 439,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/K1.jsx",
                                lineNumber: 437,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 451,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "KITCHEN",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 460,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "19",
                                        viewBox: "0 0 22 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K1.jsx",
                                            lineNumber: 494,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 493,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 487,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 511,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 520,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 503,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 498,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "19",
                                        viewBox: "0 0 22 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'scaleX(-1)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K1.jsx",
                                            lineNumber: 536,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 535,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 529,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 549,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 558,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 541,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 540,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 576,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 585,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 568,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 567,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 602,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 611,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 595,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 594,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 633,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K1.jsx",
                                                lineNumber: 642,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K1.jsx",
                                        lineNumber: 626,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K1.jsx",
                                    lineNumber: 620,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/K1.jsx",
                            lineNumber: 483,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/K1.jsx",
                        lineNumber: 482,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/K1.jsx",
                lineNumber: 391,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/K1.jsx",
            lineNumber: 390,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/K1.jsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen1.glb");
}),
"[project]/components/kitModels/K2.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>K2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function K2({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/kitchen2.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k2;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "k2";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: false,
                            receiveShadow: false,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 399,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 437,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/K2.jsx",
                                lineNumber: 435,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 449,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "KITCHEN (STORAGE)",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 458,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K2.jsx",
                                            lineNumber: 498,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 491,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 485,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 518,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 527,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 510,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 505,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/K2.jsx",
                                            lineNumber: 549,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 542,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 536,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 565,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 574,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 557,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 556,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 592,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 601,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 584,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 583,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 618,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 627,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 611,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 610,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 649,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/K2.jsx",
                                                lineNumber: 658,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/K2.jsx",
                                        lineNumber: 642,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/K2.jsx",
                                    lineNumber: 636,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/K2.jsx",
                            lineNumber: 481,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/K2.jsx",
                        lineNumber: 480,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/K2.jsx",
                lineNumber: 389,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/K2.jsx",
            lineNumber: 388,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/K2.jsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen2.glb");
}),
"[project]/components/kitModels/ST1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ST1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function ST1({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/storage1.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "st1";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        console.log(isZoom);
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    // if (currentPosition.z < maxZ) {
    //   setCurrentPosition({ ...currentPosition, z: currentPosition.z + 1 });
    // }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    // if (currentPosition.x > minX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x - 1 });
    // }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    // if (currentPosition.x < maxX) {
    //   setCurrentPosition({ ...currentPosition, x: currentPosition.x + 1 });
    // }
    };
    // useEffect(() => {
    //   console.log('currentPosition', currentPosition)
    // }, [currentPosition])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    //console.log("currentPosition", meshRef.current.position)
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 399,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 437,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/ST1.jsx",
                                lineNumber: 435,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 449,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STORAGE 1",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 458,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST1.jsx",
                                            lineNumber: 498,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 491,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 485,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 518,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 527,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 510,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 505,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST1.jsx",
                                            lineNumber: 549,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 542,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 536,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 565,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 574,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 557,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 556,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 592,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 601,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 584,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 583,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 618,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 627,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 611,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 610,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 649,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST1.jsx",
                                                lineNumber: 658,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST1.jsx",
                                        lineNumber: 642,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST1.jsx",
                                    lineNumber: 636,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/ST1.jsx",
                            lineNumber: 481,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/ST1.jsx",
                        lineNumber: 480,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/ST1.jsx",
                lineNumber: 389,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ST1.jsx",
            lineNumber: 388,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/ST1.jsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage1.glb");
}),
"[project]/components/kitModels/ST2.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ST2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/materialSetup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function ST2({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/storage2.glb");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$materialSetup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGLTFMaterials"])(materials, true);
        }
    }, [
        materials
    ]);
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        nodes
    ]);
    const meshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        nodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodeMap = {};
        if (nodes) {
            Object.entries(nodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodeMap[key] = node;
                }
            });
        }
        return nodeMap;
    }, [
        nodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st2 || {
        gridX: 7.5,
        gridZ: 2
    };
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0 && gridPos) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0 && gridPos) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 4);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "st2";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: isSelected ? 4 : 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (materials && Object.keys(materials).length > 0 && show) {
            Object.values(materials).forEach((material)=>{
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
            });
        }
    }, [
        isSelected,
        selectedObjectId,
        materials,
        show,
        isAxio
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 402,
                            columnNumber: 17
                        }, this);
                    }),
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 440,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/ST2.jsx",
                                lineNumber: 438,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 452,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STORAGE 2",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 461,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST2.jsx",
                                            lineNumber: 490,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 483,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 477,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 506,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 515,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 498,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 497,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/ST2.jsx",
                                            lineNumber: 537,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 530,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 524,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 553,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 562,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 545,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 544,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 580,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 589,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 572,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 571,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 606,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 615,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 599,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 598,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 637,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/ST2.jsx",
                                                lineNumber: 646,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/ST2.jsx",
                                        lineNumber: 630,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/ST2.jsx",
                                    lineNumber: 624,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/ST2.jsx",
                            lineNumber: 476,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/ST2.jsx",
                        lineNumber: 475,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/ST2.jsx",
                lineNumber: 392,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/ST2.jsx",
            lineNumber: 391,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/ST2.jsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage2.glb");
}),
"[project]/components/kitModels/Stairs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stairs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-gesture/dist/reactusegesture.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/objectControls/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
function Stairs({ isMouseDragging, show, isZoomState, freeView, isAxio, ...props }) {
    const { nodes: stairsNodes, materials: stairsMaterials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/stairs.glb");
    const stairsLineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!stairsNodes) return [];
        return Object.entries(stairsNodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return node.isLineSegments || node.isLine || node.isLineLoop || node.isMesh && (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe'));
        });
    }, [
        stairsNodes
    ]);
    const stairsMeshNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!stairsNodes) return [];
        return Object.entries(stairsNodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            if (node.isLineSegments || node.isLine || node.isLineLoop) return false;
            if (key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe')) return false;
            return node.isMesh;
        });
    }, [
        stairsNodes
    ]);
    const allNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nodes = {};
        if (stairsNodes) {
            Object.entries(stairsNodes).forEach(([key, node])=>{
                if (node && (node.isMesh || node.isLineSegments)) {
                    nodes[key] = node;
                }
            });
        }
        return nodes;
    }, [
        stairsNodes
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cameraState, setCameraState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cameraState");
    const [rotationCount, setRotationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gridDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("gridDimensions", {
        width: 144,
        height: 192,
        cellSize: 12,
        centerX: 0,
        centerZ: 0
    });
    const [positionInitialized, setPositionInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [positionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectPositionResetTrigger", 0);
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].stairs || {
        gridX: 6.5,
        gridZ: 4
    };
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
    });
    const [currentGridPos, setCurrentGridPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gridX: gridPos.gridX,
        gridZ: gridPos.gridZ
    });
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isZoom = isZoomState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && gridDimensions && gridDimensions.width > 0 && gridPos) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (positionResetTrigger > 0 && gridDimensions && gridDimensions.width > 0 && gridPos) {
            const worldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
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
    }, [
        positionResetTrigger,
        gridDimensions,
        gridPos
    ]);
    const handleMove = (cameraRelativeX, cameraRelativeZ)=>{
        if (!gridDimensions || gridDimensions.width === 0) return;
        const camera = state.camera;
        if (!camera) return;
        const cameraRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const cameraForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRight.setFromMatrixColumn(camera.matrixWorld, 0);
        cameraForward.setFromMatrixColumn(camera.matrixWorld, 2);
        const rightXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cameraRight.x, cameraRight.z).normalize();
        const forwardXZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-cameraForward.x, -cameraForward.z).normalize();
        const gridXAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        const gridZAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        const rightDotX = rightXZ.dot(gridXAxis);
        const rightDotZ = rightXZ.dot(gridZAxis);
        const forwardDotX = forwardXZ.dot(gridXAxis);
        const forwardDotZ = forwardXZ.dot(gridZAxis);
        let deltaGridX = 0;
        let deltaGridZ = 0;
        if (cameraRelativeX !== 0) {
            const absRightDotX = Math.abs(rightDotX);
            const absRightDotZ = Math.abs(rightDotZ);
            if (absRightDotX > absRightDotZ) {
                deltaGridX = Math.sign(rightDotX) * Math.sign(cameraRelativeX);
            } else {
                deltaGridZ = Math.sign(rightDotZ) * Math.sign(cameraRelativeX);
            }
        }
        if (cameraRelativeZ !== 0) {
            const absForwardDotX = Math.abs(forwardDotX);
            const absForwardDotZ = Math.abs(forwardDotZ);
            if (absForwardDotX > absForwardDotZ) {
                deltaGridX = Math.sign(forwardDotX) * Math.sign(cameraRelativeZ);
            } else {
                deltaGridZ = Math.sign(forwardDotZ) * Math.sign(cameraRelativeZ);
            }
        }
        setCurrentGridPos((prev)=>{
            const newGridX = prev.gridX + deltaGridX;
            const newGridZ = prev.gridZ + deltaGridZ;
            const newWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(newGridX, newGridZ, gridDimensions);
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
    const handleRotate = ()=>{
        setRotationCount((prev)=>prev + Math.PI / 2);
    };
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "stairs";
    const isSelected = selectedObjectId === objectId;
    const lineMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
            color: isSelected ? 0xe9ff00 : 0x000000,
            linewidth: 2,
            depthTest: true
        });
    }, [
        isSelected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSelected && objectRotationTrigger > 0) {
            setRotationCount((prev)=>prev + Math.PI / 4);
        }
    }, [
        objectRotationTrigger,
        isSelected
    ]);
    const maxZ = 13;
    const minZ = -13;
    const maxX = 16;
    const minX = -16;
    const GUI = true;
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { size, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const aspect = size.width / viewport.width;
    const [spring, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
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
        }));
    const [opacitySpring, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(()=>({
            opacity: 0,
            config: {
                tension: 100,
                friction: 50
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            setOpacity({
                opacity: 1
            });
        }
    }, [
        show,
        setOpacity
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$gesture$2f$dist$2f$reactusegesture$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGesture"])({
        onDrag: ({ offset: [x, y, z] })=>{
            if (isMouseDragging) {
                setCurrentPosition({
                    x: Math.min(Math.max(Math.round(currentPosition.x + x / 99), minX), maxX),
                    y: 0,
                    z: Math.min(Math.max(Math.round(currentPosition.z + y / 99), minZ), maxZ)
                });
            }
        }
    });
    const UP = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        }
    };
    const DOWN = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        }
    };
    const LEFT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        }
    };
    const RIGHT = ()=>{
        if (isZoom === "Top") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "One") {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        } else if (isZoom === "Two") {
            if (currentPosition.z < maxZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z + 1
                });
            }
        } else if (isZoom === "Three") {
            if (currentPosition.x > minX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x - 1
                });
            }
        } else if (isZoom === "Four") {
            if (currentPosition.z > minZ) {
                setCurrentPosition({
                    ...currentPosition,
                    z: currentPosition.z - 1
                });
            }
        } else {
            if (currentPosition.x < maxX) {
                setCurrentPosition({
                    ...currentPosition,
                    x: currentPosition.x + 1
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (showPanel) {
                setCurrentPosition({
                    ...currentPosition,
                    y: 1
                });
            } else {
                setCurrentPosition({
                    ...currentPosition,
                    y: 0
                });
            }
        }
    }, [
        showPanel
    ]);
    const actionsPanel = (e)=>{
        if (e) e.stopPropagation();
        setSelectedObjectId(objectId);
        if (isAxio === true || isMouseDragging === true) {
            setShowPanel(true);
        }
    };
    const prevShowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !prevShowRef.current) {
            setSelectedObjectId(objectId);
        }
        prevShowRef.current = show;
    }, [
        show,
        setSelectedObjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ...props,
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
            style: {
                opacity: opacitySpring.opacity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, {
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
                    stairsMeshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || stairsMaterials && Object.values(stairsMaterials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 373,
                            columnNumber: 17
                        }, this);
                    }),
                    stairsLineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes) return null;
                        let geometry = node.geometry;
                        if (node.isMesh) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgesGeometry"](node.geometry);
                        }
                        if (isSelected) {
                            const offsets = [
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: offsets.map((offset, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                                        geometry: geometry,
                                        material: lineMaterial,
                                        position: offset
                                    }, `${nodeKey}-${idx}`, false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 411,
                                        columnNumber: 23
                                    }, this))
                            }, nodeKey, false, {
                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                lineNumber: 409,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: geometry,
                            material: lineMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 423,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$objectControls$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectControls"], {
                            isSelected: isSelected,
                            title: "STAIRS",
                            onRotate: handleRotate,
                            onMoveRight: ()=>handleMove(1, 0),
                            onMoveLeft: ()=>handleMove(-1, 0),
                            onMoveTop: ()=>handleMove(0, 1),
                            onMoveBottom: ()=>handleMove(0, -1),
                            onPlace: ()=>setSelectedObjectId(null)
                        }, void 0, false, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 432,
                            columnNumber: 17
                        }, this)
                    }, void 0, false),
                    showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        as: "div",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount + Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 0L0.396453 10.5897L11.8691 9.28161L5 0ZM19.4977 18.5C16.5803 18.5 13.9644 17.8729 11.8418 16.3774C9.72995 14.8894 8.00237 12.4685 6.98516 8.68156L5.05362 9.20039C6.16691 13.345 8.12291 16.2037 10.6898 18.0123C13.246 19.8134 16.304 20.5 19.4977 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/Stairs.jsx",
                                            lineNumber: 461,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 454,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 448,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up",
                                    onClick: UP,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 477,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 486,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 469,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 468,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rotate",
                                    onClick: ()=>{
                                        setRotationCount(rotationCount - Math.PI / 4);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.5 0L19.1035 10.5897L7.63087 9.28161L14.5 0ZM0.00231838 18.5C2.91973 18.5 5.53563 17.8729 7.65822 16.3774C9.77005 14.8894 11.4976 12.4685 12.5148 8.68156L14.4464 9.20039C13.3331 13.345 11.3771 16.2037 8.81018 18.0123C6.25402 19.8134 3.19603 20.5 0.00231838 20.5V18.5Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kitModels/Stairs.jsx",
                                            lineNumber: 508,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 501,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 495,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "left",
                                    onClick: LEFT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(180deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 524,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 533,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 516,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 515,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "down",
                                    onClick: DOWN,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            transform: 'rotate(90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 551,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 560,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 543,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 542,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "right",
                                    onClick: RIGHT,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "46",
                                        height: "35",
                                        viewBox: "0 0 46 35",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "45",
                                                height: "34",
                                                rx: "17",
                                                fill: "black",
                                                stroke: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 577,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184",
                                                stroke: "#EAFF00",
                                                strokeWidth: "4",
                                                strokeLinecap: "round",
                                                transform: "translate(11.5, 10.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 586,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 570,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 569,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "place",
                                    onClick: ()=>{
                                        setShowPanel(false);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "154",
                                        height: "26",
                                        viewBox: "0 0 154 26",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "153",
                                                height: "25",
                                                rx: "12.5",
                                                fill: "white",
                                                stroke: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/kitModels/Stairs.jsx",
                                                lineNumber: 617,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kitModels/Stairs.jsx",
                                        lineNumber: 601,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/kitModels/Stairs.jsx",
                                    lineNumber: 595,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/kitModels/Stairs.jsx",
                            lineNumber: 447,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitModels/Stairs.jsx",
                        lineNumber: 446,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitModels/Stairs.jsx",
                lineNumber: 363,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/kitModels/Stairs.jsx",
            lineNumber: 362,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/kitModels/Stairs.jsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/stairs.glb");
}),
"[project]/components/kitOfParts/ScreenshotForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScreenshotForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ScreenshotForm({ isOpen, onClose, screenshotDataUrl }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return ()=>{
            document.body.classList.remove('menu-open');
        };
    }, [
        isOpen
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!screenshotDataUrl) {
            console.error('No screenshot data available');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch(screenshotDataUrl);
            const blob = await response.blob();
            const formData = new FormData();
            formData.append('screenshot', blob, 'screenshot.png');
            formData.append('name', name || 'Anonymous');
            formData.append('message', message);
            const apiResponse = await fetch('/api/submit-screenshot', {
                method: 'POST',
                body: formData
            });
            if (apiResponse.ok) {
                setName('');
                setMessage('');
                onClose();
            } else {
                const error = await apiResponse.json();
                console.error('Failed to submit screenshot:', error);
            }
        } catch (error) {
            console.error('Error submitting screenshot:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `screenshot-form-wrapper ${isOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "screenshot-form-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_WHITE"],
                            onClick: onClose
                        }, void 0, false, {
                            fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "screenshot-form-content",
                        children: [
                            screenshotDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "screenshot-preview",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: screenshotDataUrl,
                                    alt: "Screenshot preview"
                                }, void 0, false, {
                                    fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                ref: formRef,
                                className: "screenshot-form",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "screenshot-input screenshot-name",
                                        placeholder: "Name (Optional)",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "screenshot-textarea screenshot-message",
                                        placeholder: "Message (Optional)",
                                        rows: 5,
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "screenshot-submit-button",
                                        disabled: isSubmitting,
                                        children: isSubmitting ? 'Submitting...' : 'Submit'
                                    }, void 0, false, {
                                        fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `screenshot-form-overlay ${isOpen ? 'open' : ''}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/kitOfParts/ScreenshotForm.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/kit-of-parts/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/PassiveOrbitControls.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$lightingConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/lightingConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ground.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$boundingBox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/boundingBox.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$b1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/b1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$bb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/bb.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$FP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/FP.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/K1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/K2.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ST1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/ST2.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$Stairs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitModels/Stairs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitOfParts$2f$ScreenshotForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kitOfParts/ScreenshotForm.jsx [app-ssr] (ecmascript)");
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
;
function KitOfPartsPage() {
    const [objects, setObjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_objectsState");
    const [bathroom, setbathroom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_clickbathroom2");
    const [boxbed, setboxbed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_boxbedState");
    const [front, setfront] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_frontState");
    const [kitchen, setkitchen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_kitchenState");
    const [k2, setK2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_k2State");
    const [st1, setSt1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st1State");
    const [st2, setSt2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st2State", false);
    const [stairs, setStairs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_stairsState", false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [screenshotDataUrl, setScreenshotDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScreenshotFormOpen, setIsScreenshotFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [captureMode, setCaptureMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureMode", false);
    const [, setCachedImageDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_cachedImageDataUrl", null);
    const [, setIsCaptureModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureModalOpen", false);
    const [, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedObjectId', null);
    const [, setCloseAllPanels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_closeAllPanels', false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (captureMode) {
            setSelectedObjectId(null);
            setObjects(false);
            setCloseAllPanels(true);
            setIsCaptureModalOpen(true);
            if (ref.current) {
                setTimeout(()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(ref.current, {
                        cacheBust: true
                    }).then((dataUrl)=>{
                        setCachedImageDataUrl(dataUrl);
                    }).catch((err)=>{
                        console.error('[ERROR] Failed to generate image:', err);
                    });
                }, 500);
            }
        }
    }, [
        captureMode,
        setCachedImageDataUrl,
        setIsCaptureModalOpen,
        setSelectedObjectId,
        setObjects,
        setCloseAllPanels
    ]);
    const onButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (ref.current === null) {
            return;
        }
        setCaptureMode(true);
    }, [
        setCaptureMode
    ]);
    const handleCloseScreenshotForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsScreenshotFormOpen(false);
        setScreenshotDataUrl(null);
    }, []);
    const [sceneRotation, setSceneRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false);
    const [isZoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [disableRotation, setDisableRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonTriggered, setbuttonTriggered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggingMode, setDraggingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guiMode, setGuiMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sceneRotation) {
            setIsCaptureModalOpen(false);
            setTimeout(()=>{
                setCaptureMode(false);
                setCachedImageDataUrl(null);
            }, 300);
        }
    }, [
        sceneRotation,
        setIsCaptureModalOpen,
        setCaptureMode,
        setCachedImageDataUrl
    ]);
    const handleButton = ()=>{
        setbuttonTriggered(!buttonTriggered);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (buttonTriggered) {
            setDisableRotation(false);
        } else {
            setDisableRotation(true);
        }
    }, [
        buttonTriggered
    ]);
    const axoModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (draggingMode) {
            setDraggingMode(!draggingMode);
        }
        setGuiMode(!guiMode);
        setDisableRotation(false);
        setSceneRotation(false);
    }, [
        draggingMode,
        guiMode
    ]);
    const dragModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (guiMode) {
            setGuiMode(!guiMode);
        }
        setDraggingMode(!draggingMode);
        setDisableRotation(false);
        setSceneRotation(false);
    }, [
        draggingMode,
        guiMode
    ]);
    const planModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setDraggingMode(false);
        setGuiMode(false);
        setDisableRotation(!disableRotation);
        setSceneRotation(!sceneRotation);
    }, [
        disableRotation,
        sceneRotation
    ]);
    const SceneSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        return null;
    });
    SceneSetup.displayName = 'SceneSetup';
    const StableLighting = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$lightingConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightingSetupComponent"], {}, void 0, false, {
            fileName: "[project]/app/kit-of-parts/page.js",
            lineNumber: 137,
            columnNumber: 12
        }, this);
    });
    StableLighting.displayName = 'StableLighting';
    const OrthographicCameraSetup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        const { camera, size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const lastSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
            width: 0,
            height: 0
        });
        const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (camera && camera.isOrthographicCamera) {
                if (zoomRef.current === null) {
                    zoomRef.current = camera.zoom;
                }
                const sizeChanged = Math.abs(lastSizeRef.current.width - size.width) > 0.5 || Math.abs(lastSizeRef.current.height - size.height) > 0.5;
                if (sizeChanged) {
                    const preservedZoom = zoomRef.current;
                    camera.near = 0.1;
                    camera.far = 2000;
                    const aspect = size.width / size.height;
                    const viewSize = 500;
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
        }, [
            camera,
            size
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (camera && camera.isOrthographicCamera) {
                if (zoomRef.current === null) {
                    zoomRef.current = camera.zoom;
                }
                const handleResize = ()=>{
                    const preservedZoom = zoomRef.current || camera.zoom;
                    const aspect = window.innerWidth / window.innerHeight;
                    const viewSize = 500;
                    camera.left = -viewSize * aspect;
                    camera.right = viewSize * aspect;
                    camera.top = viewSize;
                    camera.bottom = -viewSize;
                    camera.zoom = preservedZoom;
                    camera.updateProjectionMatrix();
                    zoomRef.current = camera.zoom;
                };
                window.addEventListener('resize', handleResize);
                return ()=>window.removeEventListener('resize', handleResize);
            }
        }, [
            camera
        ]);
        return null;
    });
    OrthographicCameraSetup.displayName = 'OrthographicCameraSetup';
    const CameraZoomLock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        const isLockingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
        const lockTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        const frameCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
        const [objects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_objectsState");
        const [bathroom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_clickbathroom2");
        const [boxbed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_boxbedState");
        const [front] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_frontState");
        const [kitchen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_kitchenState");
        const [k2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_k2State");
        const [st1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st1State");
        const [st2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_st2State", false);
        const [stairs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_stairsState", false);
        const lastObjectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(objects);
        const lastElementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
            bathroom,
            boxbed,
            front,
            kitchen,
            k2,
            st1,
            st2,
            stairs
        });
        const LOCK_FRAMES = 10;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (camera && camera.isOrthographicCamera) {
                if (zoomRef.current === null) {
                    zoomRef.current = camera.zoom;
                }
            }
        }, [
            camera
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (camera && camera.isOrthographicCamera) {
                const inventoryChanged = lastObjectsRef.current !== objects;
                const elementsChanged = lastElementsRef.current.bathroom !== bathroom || lastElementsRef.current.boxbed !== boxbed || lastElementsRef.current.front !== front || lastElementsRef.current.kitchen !== kitchen || lastElementsRef.current.k2 !== k2 || lastElementsRef.current.st1 !== st1 || lastElementsRef.current.st2 !== st2 || lastElementsRef.current.stairs !== stairs;
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
                    bathroom,
                    boxbed,
                    front,
                    kitchen,
                    k2,
                    st1,
                    st2,
                    stairs
                };
            }
        }, [
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
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
        });
        return null;
    });
    CameraZoomLock.displayName = 'CameraZoomLock';
    const CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isZoom, draggingMode, guiMode, disableRotation, sceneRotation })=>{
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const [captureMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_captureMode", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (state.camera && state.camera.isOrthographicCamera) {
                if (captureMode === true) {
                    state.camera.position.set(0, 50, 0);
                    state.camera.zoom = 20;
                    state.camera.lookAt(0, 0, 0);
                } else if (draggingMode === true) {
                    state.camera.position.set(0, 27, 0);
                    state.camera.zoom = 17;
                } else if (guiMode === true) {
                    state.camera.position.set(-5.16, 19.9, 8.7);
                    state.camera.zoom = 17;
                }
                state.camera.updateProjectionMatrix();
            }
        }, [
            captureMode,
            draggingMode,
            guiMode,
            state.camera
        ]);
        return null;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitOfParts$2f$ScreenshotForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isScreenshotFormOpen,
                onClose: handleCloseScreenshotForm,
                screenshotDataUrl: screenshotDataUrl
            }, void 0, false, {
                fileName: "[project]/app/kit-of-parts/page.js",
                lineNumber: 319,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                style: {
                    overscrollBehavior: 'none',
                    touchAction: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                    onCreated: ({ gl, scene, camera, size })=>{
                        gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
                        gl.toneMappingExposure = 1.0;
                        gl.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                        gl.shadowMap.enabled = true;
                        gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrthographicCameraSetup, {}, void 0, false, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneSetup, {}, void 0, false, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StableLighting, {}, void 0, false, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                    rotation: [
                                        0,
                                        0,
                                        0
                                    ],
                                    position: [
                                        0,
                                        -10,
                                        0
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$b1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: bathroom,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 362,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$bb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: boxbed,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 363,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$FP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: front,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 365,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: kitchen,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 366,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$K2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: k2,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 367,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: st1,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 368,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ST2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: st2,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 369,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$Stairs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            show: stairs,
                                            isZoomState: isZoom,
                                            isMouseDragging: guiMode,
                                            isAxio: draggingMode,
                                            freeView: sceneRotation
                                        }, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 370,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$ground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 372,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kitModels$2f$boundingBox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/kit-of-parts/page.js",
                                            lineNumber: 373,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    autoRotate: sceneRotation === true,
                                    enableRotate: true,
                                    enableZoom: true,
                                    autoRotateSpeed: 0.2,
                                    enableDamping: true,
                                    dampingFactor: 0.05,
                                    makeDefault: false,
                                    minDistance: 500,
                                    maxDistance: Infinity,
                                    minZoom: 0.1,
                                    maxZoom: 100,
                                    enablePan: true
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraZoomLock, {}, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraDolly, {
                                    isZoom: isZoom,
                                    draggingMode: draggingMode,
                                    guiMode: guiMode,
                                    disableRotation: disableRotation,
                                    sceneRotation: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/kit-of-parts/page.js",
                lineNumber: 324,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = KitOfPartsPage;
}),
];

//# sourceMappingURL=_f59674fd._.js.map