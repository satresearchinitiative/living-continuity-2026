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
'use client';
;
;
;
;
function PassiveOrbitControls(props) {
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const runningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { invalidate, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gl && gl.domElement) {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
    }, [
        gl
    ]);
    const handleControlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        controlsRef.current = node;
        if (node) {
            node.enableZoom = props.enableZoom !== false;
            node.enablePan = props.enablePan !== false;
            if (node.mouseButtons && props.enableZoom === false) {
                node.mouseButtons.WHEEL = null;
            }
        }
    }, [
        props.enableZoom,
        props.enablePan
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controls = controlsRef.current;
        if (!controls) return;
        const handleChange = ()=>{
            invalidate();
        };
        controls.addEventListener('change', handleChange);
        if (props.autoRotate) {
            runningRef.current = true;
            let lastTime = performance.now();
            const targetFPS = 30;
            const interval = 1000 / targetFPS;
            const tick = (currentTime)=>{
                if (!runningRef.current || !controls || !controls.object) return;
                const delta = currentTime - lastTime;
                if (delta >= interval) {
                    if (controls.autoRotate) {
                        controls.update();
                        invalidate();
                    }
                    lastTime = currentTime - delta % interval;
                }
                rafRef.current = requestAnimationFrame(tick);
            };
            rafRef.current = requestAnimationFrame(tick);
            return ()=>{
                runningRef.current = false;
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
                controls.removeEventListener('change', handleChange);
            };
        }
        return ()=>{
            runningRef.current = false;
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            controls.removeEventListener('change', handleChange);
        };
    }, [
        invalidate,
        props.autoRotate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
        ref: handleControlsRef,
        ...props,
        enableZoom: props.enableZoom !== false,
        enablePan: props.enablePan !== false
    }, void 0, false, {
        fileName: "[project]/components/utils/PassiveOrbitControls.jsx",
        lineNumber: 83,
        columnNumber: 12
    }, this);
}
}),
"[project]/components/new/ground.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Floor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
function Floor(props) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/floor.glb");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                position: [
                    gridDimensions.centerX || 0,
                    1.05,
                    gridDimensions.centerZ || 0
                ],
                followCamera: false,
                args: [
                    gridDimensions.width,
                    gridDimensions.height
                ],
                cellColor: "#FF9500",
                cellSize: gridDimensions.cellSize,
                cellThickness: 1.5,
                sectionColor: "#FF5900",
                sectionSize: 0,
                infiniteGrid: false
            }, void 0, false, {
                fileName: "[project]/components/new/ground.jsx",
                lineNumber: 71,
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
                            1.01,
                            0
                        ],
                        castShadow: true,
                        receiveShadow: true
                    }, nodeKey, false, {
                        fileName: "[project]/components/new/ground.jsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/new/ground.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/new/ground.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/floor.glb");
}),
"[project]/components/new/boundingBox.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const { width, height, centerX, centerZ } = gridDimensions;
    const boxWidth = width;
    const boxLength = height;
    const boxHeight = fpHeight;
    const position = [
        centerX,
        1.01 + boxHeight / 2,
        centerZ
    ];
    const edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const w = boxWidth / 2;
        const l = boxLength / 2;
        const h = boxHeight / 2;
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
        boxHeight
    ]);
    const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color: 0x00ffff,
        linewidth: 2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            edges.edgeLines.map(([startIdx, endIdx], idx)=>{
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
                    fileName: "[project]/components/new/boundingBox.jsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this);
            }),
            edges.corners.map((corner, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: corner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                            args: [
                                0.2,
                                16,
                                16
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/new/boundingBox.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: 0x00ffff
                        }, void 0, false, {
                            fileName: "[project]/components/new/boundingBox.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, `corner-${idx}`, true, {
                    fileName: "[project]/components/new/boundingBox.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/new/boundingBox.jsx",
        lineNumber: 80,
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
    ()=>gridToWorldPosition
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
}),
"[project]/components/new/b1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/objectPositions.js [app-ssr] (ecmascript)");
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].b1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 320,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node], index)=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            ref: index === 0 ? meshRef : null,
                            geometry: node.geometry,
                            material: nodeMaterial,
                            castShadow: true,
                            receiveShadow: true
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 343,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "BATHROOM"
                        }, void 0, false, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 355,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/b1.jsx",
                        lineNumber: 354,
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
                                            fileName: "[project]/components/new/b1.jsx",
                                            lineNumber: 387,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 380,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 374,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 406,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 415,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 399,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 394,
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
                                            fileName: "[project]/components/new/b1.jsx",
                                            lineNumber: 434,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 427,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 421,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 449,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 442,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 441,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 472,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 481,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 465,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 464,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 504,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 488,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 487,
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
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 523,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/b1.jsx",
                                                lineNumber: 532,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/b1.jsx",
                                        lineNumber: 516,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/b1.jsx",
                                    lineNumber: 510,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/b1.jsx",
                            lineNumber: 370,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/b1.jsx",
                        lineNumber: 369,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/b1.jsx",
                lineNumber: 310,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/b1.jsx",
            lineNumber: 309,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/b1.jsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/bath.glb");
}),
"[project]/components/new/bb.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].bb;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "bb";
    const isSelected = selectedObjectId === objectId;
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
                ...bind(),
                position: [
                    currentPosition.x,
                    currentPosition.y,
                    currentPosition.z
                ],
                children: [
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "BOXBED"
                        }, void 0, false, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 319,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/bb.jsx",
                        lineNumber: 318,
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
                                            fileName: "[project]/components/new/bb.jsx",
                                            lineNumber: 350,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 343,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 337,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 369,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 362,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 357,
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
                                            fileName: "[project]/components/new/bb.jsx",
                                            lineNumber: 397,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 390,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 384,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 412,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 404,
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
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
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 486,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/bb.jsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/bb.jsx",
                                        lineNumber: 479,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/bb.jsx",
                                    lineNumber: 473,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/bb.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/bb.jsx",
                        lineNumber: 332,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/bb.jsx",
                lineNumber: 273,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/bb.jsx",
            lineNumber: 272,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/bb.jsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/boxbed.glb");
}),
"[project]/components/new/FP.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].fp;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "fp";
    const isSelected = selectedObjectId === objectId;
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 284,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 307,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "FRONT PORCH"
                        }, void 0, false, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 318,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/FP.jsx",
                        lineNumber: 317,
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
                                            fileName: "[project]/components/new/FP.jsx",
                                            lineNumber: 349,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 342,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 336,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 368,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 377,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 361,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 356,
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
                                            fileName: "[project]/components/new/FP.jsx",
                                            lineNumber: 396,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 389,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 383,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 411,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 420,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 404,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 403,
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 434,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 457,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
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
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 485,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/FP.jsx",
                                                lineNumber: 494,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/FP.jsx",
                                        lineNumber: 478,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/FP.jsx",
                                    lineNumber: 472,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/FP.jsx",
                            lineNumber: 332,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/FP.jsx",
                        lineNumber: 331,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/FP.jsx",
                lineNumber: 272,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/FP.jsx",
            lineNumber: 271,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/FP.jsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/frontPorch.glb");
}),
"[project]/components/new/K1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "k1";
    const isSelected = selectedObjectId === objectId;
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "KITCHEN"
                        }, void 0, false, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 319,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K1.jsx",
                        lineNumber: 318,
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
                                            fileName: "[project]/components/new/K1.jsx",
                                            lineNumber: 350,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 343,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 337,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 369,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 362,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 357,
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
                                            fileName: "[project]/components/new/K1.jsx",
                                            lineNumber: 397,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 390,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 384,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 412,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 404,
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
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
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 486,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K1.jsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K1.jsx",
                                        lineNumber: 479,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K1.jsx",
                                    lineNumber: 473,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/K1.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K1.jsx",
                        lineNumber: 332,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/K1.jsx",
                lineNumber: 273,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/K1.jsx",
            lineNumber: 272,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/K1.jsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen1.glb");
}),
"[project]/components/new/K2.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].k2;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "k2";
    const isSelected = selectedObjectId === objectId;
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 284,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 307,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "KITCHEN (STORAGE)"
                        }, void 0, false, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 318,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K2.jsx",
                        lineNumber: 317,
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
                                            fileName: "[project]/components/new/K2.jsx",
                                            lineNumber: 349,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 342,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 336,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 368,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 377,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 361,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 356,
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
                                            fileName: "[project]/components/new/K2.jsx",
                                            lineNumber: 396,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 389,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 383,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 411,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 420,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 404,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 403,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 434,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 443,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 427,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 426,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 457,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 466,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 450,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 449,
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
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 485,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/K2.jsx",
                                                lineNumber: 494,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/K2.jsx",
                                        lineNumber: 478,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/K2.jsx",
                                    lineNumber: 472,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/K2.jsx",
                            lineNumber: 332,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/K2.jsx",
                        lineNumber: 331,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/K2.jsx",
                lineNumber: 272,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/K2.jsx",
            lineNumber: 271,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/K2.jsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/kitchen2.glb");
}),
"[project]/components/new/ST1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
    const gridPos = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT_GRID_POSITIONS"].st1;
    const initialWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$objectPositions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToWorldPosition"])(gridPos.gridX, gridPos.gridZ, gridDimensions);
    const [currentPosition, setCurrentPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: initialWorldPos.x,
        y: initialWorldPos.y,
        z: initialWorldPos.z
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "st1";
    const isSelected = selectedObjectId === objectId;
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "STORAGE 1"
                        }, void 0, false, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 319,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST1.jsx",
                        lineNumber: 318,
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
                                            fileName: "[project]/components/new/ST1.jsx",
                                            lineNumber: 350,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 343,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 337,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 369,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 362,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 357,
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
                                            fileName: "[project]/components/new/ST1.jsx",
                                            lineNumber: 397,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 390,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 384,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 412,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 404,
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 435,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
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
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 486,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST1.jsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST1.jsx",
                                        lineNumber: 479,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST1.jsx",
                                    lineNumber: 473,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/ST1.jsx",
                            lineNumber: 333,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST1.jsx",
                        lineNumber: 332,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/ST1.jsx",
                lineNumber: 273,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/ST1.jsx",
            lineNumber: 272,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/ST1.jsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage1.glb");
}),
"[project]/components/new/ST2.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "st2";
    const isSelected = selectedObjectId === objectId;
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 284,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 307,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "STORAGE 2"
                        }, void 0, false, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 318,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST2.jsx",
                        lineNumber: 317,
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
                                            fileName: "[project]/components/new/ST2.jsx",
                                            lineNumber: 338,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 331,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 325,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 353,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 362,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 346,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 345,
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
                                            fileName: "[project]/components/new/ST2.jsx",
                                            lineNumber: 381,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 374,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 368,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 396,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 405,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 389,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 388,
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 419,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 442,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
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
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 470,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/ST2.jsx",
                                                lineNumber: 479,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/ST2.jsx",
                                        lineNumber: 463,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/ST2.jsx",
                                    lineNumber: 457,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/ST2.jsx",
                            lineNumber: 324,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/ST2.jsx",
                        lineNumber: 323,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/ST2.jsx",
                lineNumber: 274,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/ST2.jsx",
            lineNumber: 273,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/ST2.jsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/storage2.glb");
}),
"[project]/components/new/Stairs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/gbl_update/stairs.glb");
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
    const lineNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!nodes) return [];
        return Object.entries(nodes).filter(([key, node])=>{
            if (!node || !node.geometry) return false;
            return key.toLowerCase().includes('line') || key.toLowerCase().includes('edge') || key.toLowerCase().includes('wireframe');
        });
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
                setPositionInitialized(true);
            }
        }
    }, [
        show,
        gridDimensions,
        gridPos,
        positionInitialized
    ]);
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("selectedObjectId", null);
    const [objectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("objectRotationTrigger", 0);
    const objectId = "stairs";
    const isSelected = selectedObjectId === objectId;
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
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                    lineNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        const nodeMaterial = node.material || materials && Object.values(materials)[0];
                        if (!nodeMaterial || !node.geometry.attributes) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this);
                    }),
                    meshNodes.map(([nodeKey, node])=>{
                        if (!node || !node.geometry) return null;
                        if (!node.geometry.attributes || !node.geometry.attributes.position) return null;
                        if (node.type && node.type !== 'Mesh') return null;
                        let nodeMaterial = node.material;
                        if (!nodeMaterial && materials) {
                            nodeMaterial = Object.values(materials)[0];
                        }
                        if (!nodeMaterial) return null;
                        if (!node.geometry.attributes.normal && node.geometry.computeVertexNormals) {
                            node.geometry.computeVertexNormals();
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            geometry: node.geometry,
                            material: nodeMaterial
                        }, nodeKey, false, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this);
                    }),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                        position: [
                            0,
                            3,
                            0
                        ],
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "object-title",
                            children: "STAIRS"
                        }, void 0, false, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 319,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/Stairs.jsx",
                        lineNumber: 318,
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
                                            fileName: "[project]/components/new/Stairs.jsx",
                                            lineNumber: 339,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 332,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 326,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 354,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 7L28.7729 17.0004L17.2258 16.9996L23 7ZM21.9971 26.9998C21.9981 22.9901 21.9989 19.6368 21.9994 15.9999L23.9994 16.0002C23.9989 19.6372 23.9981 22.9906 23.9971 27.0002L21.9971 26.9998Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 363,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 347,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 346,
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
                                            fileName: "[project]/components/new/Stairs.jsx",
                                            lineNumber: 382,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 375,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 369,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 397,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17.0015L23.0004 22.7743L22.9996 11.2273L13 17.0015ZM32.9998 15.9986C28.9901 15.9996 25.6368 16.0004 21.9999 16.0009L22.0002 18.0009C25.6372 18.0004 28.9906 17.9996 33.0002 17.9986L32.9998 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 406,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 390,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 389,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 420,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 27L28.7729 16.9996L17.2258 17.0004L23 27ZM21.9971 7.00024C21.9981 11.0099 21.9989 14.3632 21.9994 18.0001L23.9994 17.9998C23.9989 14.3628 23.9981 11.0094 23.9971 6.99976L21.9971 7.00024Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 429,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 413,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 412,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 443,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M33 17.0015L22.9996 22.7743L23.0004 11.2273L33 17.0015ZM13.0002 15.9986C17.0099 15.9996 20.3632 16.0004 24.0001 16.0009L23.9998 18.0009C20.3628 18.0004 17.0094 17.9996 12.9998 17.9986L13.0002 15.9986Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 452,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 436,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 435,
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
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 471,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M62.6738 10.0786C62.6738 10.689 62.5273 11.2334 62.2344 11.7119C61.9463 12.1904 61.5312 12.564 60.9893 12.8325C60.4521 13.1011 59.8296 13.2354 59.1216 13.2354H57.0635V17H55.6646V7.11963H59.0337C60.1958 7.11963 61.0918 7.38086 61.7217 7.90332C62.3564 8.4209 62.6738 9.146 62.6738 10.0786ZM61.2676 10.1006C61.2676 8.86035 60.4668 8.24023 58.8652 8.24023H57.0635V12.1294H58.9238C59.6514 12.1294 60.2227 11.9512 60.6377 11.5947C61.0576 11.2383 61.2676 10.7402 61.2676 10.1006ZM65.2227 17V7.11963H66.6216V15.8574H71.5435V17H65.2227ZM80.0688 17L79.0581 14.2021H74.9346L73.9312 17H72.4956L76.231 7.11963H77.8203L81.4897 17H80.0688ZM77.0073 8.17432L76.9194 8.45996L76.4141 10.0127L75.3081 13.1108H78.6992L77.4321 9.44873L77.0073 8.17432ZM83.8042 12.0122C83.8042 13.3452 84.0117 14.3462 84.4268 15.0151C84.8467 15.6792 85.4863 16.0112 86.3457 16.0112C86.8389 16.0112 87.2856 15.8452 87.686 15.5132C88.0864 15.1763 88.4258 14.6538 88.7041 13.9458L89.8687 14.4219C89.1411 16.2383 87.9619 17.1465 86.3311 17.1465C85.0469 17.1465 84.0581 16.7046 83.3647 15.8208C82.6763 14.937 82.332 13.6675 82.332 12.0122C82.332 8.64795 83.6406 6.96582 86.2578 6.96582C87.9131 6.96582 89.0508 7.78369 89.6709 9.41943L88.4404 9.89551C88.2598 9.34375 87.9766 8.90918 87.5908 8.5918C87.21 8.26953 86.7681 8.1084 86.2651 8.1084C85.4302 8.1084 84.8101 8.42334 84.4048 9.05322C84.0044 9.68311 83.8042 10.6694 83.8042 12.0122ZM91.6997 17V7.11963H98.4307V8.26221H93.0986V11.353H97.9912V12.481H93.0986V15.8574H98.731V17H91.6997Z",
                                                fill: "black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/new/Stairs.jsx",
                                                lineNumber: 480,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/new/Stairs.jsx",
                                        lineNumber: 464,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/new/Stairs.jsx",
                                    lineNumber: 458,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/new/Stairs.jsx",
                            lineNumber: 325,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/new/Stairs.jsx",
                        lineNumber: 324,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/new/Stairs.jsx",
                lineNumber: 275,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/new/Stairs.jsx",
            lineNumber: 274,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/new/Stairs.jsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/gbl_update/stairs.glb");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ground.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$boundingBox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/boundingBox.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$b1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/b1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$bb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/bb.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$FP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/FP.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/K1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/K2.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ST1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/ST2.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$Stairs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/new/Stairs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
    const onButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (ref.current === null) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(ref.current, {
            cacheBust: true
        }).then((dataUrl)=>{
            const link = document.createElement("a");
            link.download = "download.png";
            link.href = dataUrl;
            link.click();
        }).catch((err)=>{
            console.error('[ERROR] Failed to capture screenshot:', err);
        });
    }, [
        ref
    ]);
    const [sceneRotation, setSceneRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])("kitOfParts_sceneRotation", false);
    const [isZoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [disableRotation, setDisableRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonTriggered, setbuttonTriggered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggingMode, setDraggingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guiMode, setGuiMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        const processedMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
            scene.traverse((object)=>{
                if (object.isMesh && object.material) {
                    const materials = Array.isArray(object.material) ? object.material : [
                        object.material
                    ];
                    materials.forEach((mat)=>{
                        if (mat && mat.isMaterial && !processedMaterials.current.has(mat.uuid)) {
                            processedMaterials.current.add(mat.uuid);
                            if (mat.map && mat.map.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"]) {
                                mat.map.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                                mat.map.needsUpdate = true;
                            }
                            if (mat.emissiveMap && mat.emissiveMap.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"]) {
                                mat.emissiveMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                                mat.emissiveMap.needsUpdate = true;
                            }
                            if (mat.normalMap && mat.normalMap.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"]) {
                                mat.normalMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"];
                                mat.normalMap.needsUpdate = true;
                            }
                        }
                    });
                }
            });
        });
        return null;
    });
    SceneSetup.displayName = 'SceneSetup';
    const StableLighting = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(()=>{
        const light1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (light1Ref.current) {
                light1Ref.current.shadow.mapSize.width = 2048;
                light1Ref.current.shadow.mapSize.height = 2048;
                light1Ref.current.shadow.camera.near = 0.5;
                light1Ref.current.shadow.camera.far = 50;
            }
        }, []);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 1.0
                }, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    ref: light1Ref,
                    position: [
                        15,
                        20,
                        10
                    ],
                    intensity: 1.2,
                    castShadow: true
                }, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -15,
                        15,
                        -10
                    ],
                    intensity: 0.6
                }, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        0,
                        10,
                        0
                    ],
                    intensity: 0.4
                }, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    });
    StableLighting.displayName = 'StableLighting';
    const CameraDolly = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isZoom, draggingMode, guiMode, disableRotation, sceneRotation })=>{
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (state.camera && state.camera.isOrthographicCamera) {
                state.camera.near = 0.1;
                state.camera.far = 1000;
                const aspect = state.size.width / state.size.height;
                const baseViewSize = 300;
                state.camera.left = -baseViewSize * aspect;
                state.camera.right = baseViewSize * aspect;
                state.camera.top = baseViewSize;
                state.camera.bottom = -baseViewSize;
                if (draggingMode === true) {
                    state.camera.position.set(0, 27, 0);
                    state.camera.zoom = 17;
                }
                if (guiMode === true) {
                    state.camera.position.set(-5.16, 19.9, 8.7);
                    state.camera.zoom = 17;
                }
                if (disableRotation === true || sceneRotation === true) {
                    state.camera.zoom = 17;
                }
                state.camera.updateProjectionMatrix();
            }
        }, [
            draggingMode,
            guiMode,
            disableRotation,
            sceneRotation,
            state.camera,
            state.size
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
            if (state.camera && state.camera.isOrthographicCamera) {
                const aspect = state.size.width / state.size.height;
                const baseViewSize = 300;
                const left = -baseViewSize * aspect;
                const right = baseViewSize * aspect;
                const top = baseViewSize;
                const bottom = -baseViewSize;
                if (state.camera.left !== left || state.camera.right !== right || state.camera.top !== top || state.camera.bottom !== bottom) {
                    state.camera.left = left;
                    state.camera.right = right;
                    state.camera.top = top;
                    state.camera.bottom = bottom;
                    state.camera.updateProjectionMatrix();
                }
            }
        });
        return null;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                zoom: 13,
                near: 0.1,
                far: 1000
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
            onCreated: ({ gl, scene })=>{
                gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
                gl.toneMappingExposure = 1.0;
                gl.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
            },
            style: {
                background: "#1C1C1C",
                height: "100vh",
                overscrollBehavior: 'none',
                touchAction: 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneSetup, {}, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 248,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StableLighting, {}, void 0, false, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 249,
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$b1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: bathroom,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$bb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: boxbed,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$FP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: front,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: kitchen,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$K2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: k2,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: st1,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ST2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: st2,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$Stairs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    show: stairs,
                                    isZoomState: isZoom,
                                    isMouseDragging: guiMode,
                                    isAxio: draggingMode,
                                    freeView: sceneRotation
                                }, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$ground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$new$2f$boundingBox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/kit-of-parts/page.js",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/kit-of-parts/page.js",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$PassiveOrbitControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 266,
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
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/kit-of-parts/page.js",
                    lineNumber: 250,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/kit-of-parts/page.js",
            lineNumber: 221,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/kit-of-parts/page.js",
        lineNumber: 220,
        columnNumber: 7
    }, this);
}
const __TURBOPACK__default__export__ = KitOfPartsPage;
}),
];

//# sourceMappingURL=_e7d87192._.js.map