module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/utils/appStores.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adaptStore",
    ()=>adaptStore,
    "articleStores",
    ()=>articleStores,
    "boxbedStateStore",
    ()=>boxbedStateStore,
    "cameraInteractionStore",
    ()=>cameraInteractionStore,
    "cameraOptionsStore",
    ()=>cameraOptionsStore,
    "cameraStateStore",
    ()=>cameraStateStore,
    "clickbathroom2Store",
    ()=>clickbathroom2Store,
    "clickedStore",
    ()=>clickedStore,
    "closeCloseUpVarStore",
    ()=>closeCloseUpVarStore,
    "connectionLinesVisibilityStore",
    ()=>connectionLinesVisibilityStore,
    "elementOpacityStore",
    ()=>elementOpacityStore,
    "frontStateStore",
    ()=>frontStateStore,
    "glossaryStores",
    ()=>glossaryStores,
    "gridDimensionsStore",
    ()=>gridDimensionsStore,
    "handleClicksStore",
    ()=>handleClicksStore,
    "handleOpenStore",
    ()=>handleOpenStore,
    "handleTitleBoxStore",
    ()=>handleTitleBoxStore,
    "highlightedNodesStore",
    ()=>highlightedNodesStore,
    "k2StateStore",
    ()=>k2StateStore,
    "keyWordFiveStore",
    ()=>keyWordFiveStore,
    "keyWordFourStore",
    ()=>keyWordFourStore,
    "keyWordOneStore",
    ()=>keyWordOneStore,
    "keyWordTreeStore",
    ()=>keyWordTreeStore,
    "keyWordTwoStore",
    ()=>keyWordTwoStore,
    "kitOfPartsBoxbedStateStore",
    ()=>kitOfPartsBoxbedStateStore,
    "kitOfPartsCameraStateStore",
    ()=>kitOfPartsCameraStateStore,
    "kitOfPartsClickbathroom2Store",
    ()=>kitOfPartsClickbathroom2Store,
    "kitOfPartsFrontStateStore",
    ()=>kitOfPartsFrontStateStore,
    "kitOfPartsK2StateStore",
    ()=>kitOfPartsK2StateStore,
    "kitOfPartsKitchenStateStore",
    ()=>kitOfPartsKitchenStateStore,
    "kitOfPartsObjectsStateStore",
    ()=>kitOfPartsObjectsStateStore,
    "kitOfPartsS1StateStore",
    ()=>kitOfPartsS1StateStore,
    "kitOfPartsSceneRotationStore",
    ()=>kitOfPartsSceneRotationStore,
    "kitOfPartsSt1StateStore",
    ()=>kitOfPartsSt1StateStore,
    "kitOfPartsSt2StateStore",
    ()=>kitOfPartsSt2StateStore,
    "kitOfPartsStairsStateStore",
    ()=>kitOfPartsStairsStateStore,
    "kitchenStateStore",
    ()=>kitchenStateStore,
    "livingContinuitySceneRotationStore",
    ()=>livingContinuitySceneRotationStore,
    "loadingStateStore",
    ()=>loadingStateStore,
    "objectPositionResetTriggerStore",
    ()=>objectPositionResetTriggerStore,
    "objectRotationTriggerStore",
    ()=>objectRotationTriggerStore,
    "s1StateStore",
    ()=>s1StateStore,
    "secondaryHighlightedArticlesStore",
    ()=>secondaryHighlightedArticlesStore,
    "selectedNodeStore",
    ()=>selectedNodeStore,
    "selectedObjectIdStore",
    ()=>selectedObjectIdStore,
    "st1StateStore",
    ()=>st1StateStore,
    "walkThroughActiveStore",
    ()=>walkThroughActiveStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const createStoreSafe = (name, defaultValue)=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(name, defaultValue);
    } catch (error) {
        console.error(`[appStores] Error creating store "${name}":`, error);
        throw error;
    }
};
const selectedNodeStore = createStoreSafe('selectedNodeStore', null);
const cameraOptionsStore = createStoreSafe('cameraOptions', null);
const kitOfPartsSceneRotationStore = createStoreSafe('kitOfParts_sceneRotation', false);
const livingContinuitySceneRotationStore = createStoreSafe('livingContinuity_sceneRotation', false);
const walkThroughActiveStore = createStoreSafe('walkThroughActive', false);
const selectedObjectIdStore = createStoreSafe('selectedObjectId', null);
const objectRotationTriggerStore = createStoreSafe('objectRotationTrigger', 0);
const objectPositionResetTriggerStore = createStoreSafe('objectPositionResetTrigger', 0);
const gridDimensionsStore = createStoreSafe('gridDimensions', {
    width: 144,
    height: 192,
    cellSize: 12,
    centerX: 0,
    centerZ: 0
});
const kitOfPartsObjectsStateStore = createStoreSafe('kitOfParts_objectsState', false);
const kitOfPartsClickbathroom2Store = createStoreSafe('kitOfParts_clickbathroom2', false);
const kitOfPartsBoxbedStateStore = createStoreSafe('kitOfParts_boxbedState', false);
const kitOfPartsFrontStateStore = createStoreSafe('kitOfParts_frontState', false);
const kitOfPartsKitchenStateStore = createStoreSafe('kitOfParts_kitchenState', false);
const kitOfPartsK2StateStore = createStoreSafe('kitOfParts_k2State', false);
const kitOfPartsS1StateStore = createStoreSafe('kitOfParts_s1State', false);
const kitOfPartsSt1StateStore = createStoreSafe('kitOfParts_st1State', false);
const kitOfPartsSt2StateStore = createStoreSafe('kitOfParts_st2State', false);
const kitOfPartsStairsStateStore = createStoreSafe('kitOfParts_stairsState', false);
const kitOfPartsCameraStateStore = createStoreSafe('kitOfParts_cameraState', false);
const clickbathroom2Store = createStoreSafe('clickbathroom2', false);
const boxbedStateStore = createStoreSafe('boxbedState', false);
const frontStateStore = createStoreSafe('frontState', false);
const kitchenStateStore = createStoreSafe('kitchenState', false);
const k2StateStore = createStoreSafe('k2State', false);
const s1StateStore = createStoreSafe('s1State', false);
const st1StateStore = createStoreSafe('st1State', false);
const cameraStateStore = createStoreSafe('cameraState', false);
const highlightedNodesStore = createStoreSafe('highlightedNodesStore', []);
const secondaryHighlightedArticlesStore = createStoreSafe('secondaryHighlightedArticlesStore', []);
const elementOpacityStore = createStoreSafe('elementOpacityStore', {});
const connectionLinesVisibilityStore = createStoreSafe('connectionLinesVisibilityStore', true);
const cameraInteractionStore = createStoreSafe('cameraInteractionStore', false);
const loadingStateStore = createStoreSafe('loadingState', {
    nodesLoaded: 0,
    totalNodes: 0,
    isLoading: true,
    nodesVisible: []
});
const adaptStore = createStoreSafe('adapt', false);
const handleOpenStore = createStoreSafe('handleOpen', false);
const closeCloseUpVarStore = createStoreSafe('closeCloseUpVar', false);
const handleTitleBoxStore = createStoreSafe('handleTitleBox', false);
const clickedStore = createStoreSafe('clicked', false);
const handleClicksStore = createStoreSafe('handleClicks', 0);
const keyWordOneStore = createStoreSafe('keyWordOne', true);
const keyWordTwoStore = createStoreSafe('keyWordTwo', true);
const keyWordTreeStore = createStoreSafe('keyWordTree', true);
const keyWordFourStore = createStoreSafe('keyWordFour', false);
const keyWordFiveStore = createStoreSafe('keyWordFive', false);
const articleStores = {};
const glossaryStores = {};
for(let i = 1; i <= 26; i++){
    const storeName = `A${i}Store`;
    articleStores[storeName] = createStoreSafe(storeName, false);
}
for(let i = 1; i <= 54; i++){
    const storeName = `G${i}Store`;
    glossaryStores[storeName] = createStoreSafe(storeName, false);
}
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/components/_setup/colors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Color constants matching vars.scss
 * This file exports color values for use in JavaScript/JSX files
 */ __turbopack_context__.s([
    "COLOR_ACCENT",
    ()=>COLOR_ACCENT,
    "COLOR_BLACK",
    ()=>COLOR_BLACK,
    "COLOR_BLUE",
    ()=>COLOR_BLUE,
    "COLOR_BLUE_LIGHT",
    ()=>COLOR_BLUE_LIGHT,
    "COLOR_GRAY_DARK_1",
    ()=>COLOR_GRAY_DARK_1,
    "COLOR_GRAY_DARK_2",
    ()=>COLOR_GRAY_DARK_2,
    "COLOR_GRAY_DARK_3",
    ()=>COLOR_GRAY_DARK_3,
    "COLOR_GRAY_LIGHT",
    ()=>COLOR_GRAY_LIGHT,
    "COLOR_GRAY_MEDIUM",
    ()=>COLOR_GRAY_MEDIUM,
    "COLOR_MAGENTA",
    ()=>COLOR_MAGENTA,
    "COLOR_MINT",
    ()=>COLOR_MINT,
    "COLOR_ORANGE_1",
    ()=>COLOR_ORANGE_1,
    "COLOR_ORANGE_2",
    ()=>COLOR_ORANGE_2,
    "COLOR_PINK_LIGHT",
    ()=>COLOR_PINK_LIGHT,
    "COLOR_PURPLE",
    ()=>COLOR_PURPLE,
    "COLOR_RED",
    ()=>COLOR_RED,
    "COLOR_WHITE",
    ()=>COLOR_WHITE,
    "COLOR_YELLOW",
    ()=>COLOR_YELLOW,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const COLOR_ACCENT = '#e9ff00';
const COLOR_YELLOW = '#e9ff00';
const COLOR_BLACK = '#000000';
const COLOR_WHITE = '#ffffff';
const COLOR_PINK_LIGHT = '#FFDEFE';
const COLOR_BLUE_LIGHT = '#DEE3FF';
const COLOR_GRAY_DARK_1 = '#1B1B1B';
const COLOR_GRAY_DARK_2 = '#1C1C1C';
const COLOR_GRAY_DARK_3 = '#232323';
const COLOR_BLUE = '#00B7FF';
const COLOR_ORANGE_1 = '#FF9500';
const COLOR_ORANGE_2 = '#FF5900';
const COLOR_PURPLE = '#7C44FF';
const COLOR_MINT = '#00FFA6';
const COLOR_GRAY_MEDIUM = '#737373';
const COLOR_RED = '#FF0004';
const COLOR_MAGENTA = '#FF00F7';
const COLOR_GRAY_LIGHT = '#D2D2D2';
const __TURBOPACK__default__export__ = {
    accent: COLOR_ACCENT,
    yellow: COLOR_YELLOW,
    black: COLOR_BLACK,
    white: COLOR_WHITE,
    pinkLight: COLOR_PINK_LIGHT,
    blueLight: COLOR_BLUE_LIGHT,
    grayDark1: COLOR_GRAY_DARK_1,
    grayDark2: COLOR_GRAY_DARK_2,
    grayDark3: COLOR_GRAY_DARK_3,
    blue: COLOR_BLUE,
    orange1: COLOR_ORANGE_1,
    orange2: COLOR_ORANGE_2,
    purple: COLOR_PURPLE,
    mint: COLOR_MINT,
    grayMedium: COLOR_GRAY_MEDIUM,
    red: COLOR_RED,
    magenta: COLOR_MAGENTA,
    grayLight: COLOR_GRAY_LIGHT
};
}),
"[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CrossButton Component
 * 
 * A reusable cross/X button component with customizable color.
 * @param {string} color - The color of the cross lines (default: COLOR_BLACK)
 * @param {function} onClick - Click handler function
 * @param {string} className - Additional CSS classes
 */ __turbopack_context__.s([
    "default",
    ()=>CrossButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CrossButton({ color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLACK"], onClick, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `cross-button ${className}`,
        "aria-label": "Close menu",
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
                    stroke: color,
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/menu/CrossButton.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "3",
                    x2: "3",
                    y2: "21",
                    stroke: color,
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/menu/CrossButton.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/menu/CrossButton.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/menu/CrossButton.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/menu/Menu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Menu Component
 * 
 * Sliding menu panel that slides in from the left side.
 * @param {boolean} isOpen - Controls menu visibility
 * @param {function} onClose - Callback function to close the menu
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Menu({ isOpen, onClose }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
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
    const menuItems = [
        {
            label: 'A Collective Inquiry',
            href: '/living-continuity',
            external: false
        },
        // { label: 'Archive', href: '#', external: false }
        {
            label: 'Kit Of Parts',
            href: '/kit-of-parts',
            external: false
        },
        {
            label: 'Glossary',
            href: '/glossary',
            external: false
        },
        {
            label: 'Toolkit',
            href: '#',
            external: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `menu-overlay ${isOpen ? 'open' : ''}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/menu/Menu.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `menu-wrapper ${isOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
                            onClick: onClose
                        }, void 0, false, {
                            fileName: "[project]/components/menu/Menu.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/menu/Menu.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "menu-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: menuItems.map((item, index)=>{
                                const isActive = pathname === item.href || pathname === '/' && item.href === '/living-continuity';
                                const className = isActive ? 'menu-item menu-item-archive' : 'menu-item';
                                if (item.external) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: className,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/menu/Menu.jsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/menu/Menu.jsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: className,
                                        onClick: onClose,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/menu/Menu.jsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/menu/Menu.jsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/menu/Menu.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/menu/Menu.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/menu/Menu.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/menu/MenuButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function MenuButton({ onClick, title = 'A collective Inquiry' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-button-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClick,
                    className: "menu-button",
                    "aria-label": "Open menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "menu-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 8H23M7 15H23M7 22H23",
                                stroke: "black",
                                strokeWidth: "2",
                                strokeLinecap: "square"
                            }, void 0, false, {
                                fileName: "[project]/components/menu/MenuButton.jsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/menu/MenuButton.jsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/menu/MenuButton.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/menu/MenuButton.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/menu/MenuButton.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-title-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "menu-title",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/menu/MenuButton.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/menu/MenuButton.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/menu/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Menu Module - Main Entry Point
 * 
 * Exports all menu-related components for easy importing
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuWrapper.jsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/components/menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-ssr] (ecmascript)");
}),
"[project]/components/menu/MenuButton.jsx [app-ssr] (ecmascript) <export default as MenuButton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-ssr] (ecmascript)");
}),
"[project]/components/menu/MenuWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuButton$3e$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-ssr] (ecmascript) <export default as MenuButton>");
'use client';
;
;
;
;
const getPageTitle = (pathname)=>{
    if (pathname === '/living-continuity' || pathname === '/') {
        return 'A collective Inquiry';
    } else if (pathname === '/glossary') {
        return 'Glossary';
    } else if (pathname === '/kit-of-parts') {
        return 'Kit Of Parts';
    }
    return 'A collective Inquiry';
};
function MenuWrapper() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const pageTitle = getPageTitle(pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuButton$3e$__["MenuButton"], {
                    onClick: ()=>setMenuOpen(true),
                    title: pageTitle
                }, void 0, false, {
                    fileName: "[project]/components/menu/MenuWrapper.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/menu/MenuWrapper.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                isOpen: menuOpen,
                onClose: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/menu/MenuWrapper.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/gradient/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * GradientController Component
 * 
 * Manages smooth gradient color transitions between pages using JavaScript.
 * The gradients persist across page changes and smoothly animate color changes.
 */ __turbopack_context__.s([
    "default",
    ()=>GradientController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// Define gradient colors for each page
const PAGE_GRADIENTS = {
    '/': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"]
    },
    '/living-continuity': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"]
    },
    '/glossary': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    '/kit-of-parts': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_ORANGE_2"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_ORANGE_2"]
    },
    '/circle': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    '/room': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    // Default gradient (fallback)
    default: {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    }
};
/**
 * Converts hex color to RGB
 */ function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
/**
 * Converts RGB to hex
 */ function rgbToHex(r, g, b) {
    return '#' + [
        r,
        g,
        b
    ].map((x)=>{
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
/**
 * Interpolates between two colors
 */ function interpolateColor(color1, color2, factor) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    if (!rgb1 || !rgb2) return color1;
    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
    return rgbToHex(r, g, b);
}
/**
 * Creates a gradient string from a color
 */ function createGradient(color, direction) {
    // Convert hex to rgba with 0 opacity for transparency
    const rgb = hexToRgb(color);
    const transparent = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)` : 'rgba(255, 255, 255, 0)';
    // Create intermediate stops with partial opacity for softer gradient
    const midStop1 = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)` : 'rgba(255, 255, 255, 0.6)';
    const midStop2 = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` : 'rgba(255, 255, 255, 0.3)';
    if (direction === 'top') {
        return `linear-gradient(to bottom, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
    } else if (direction === 'bottom') {
        return `linear-gradient(to top, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
    } else if (direction === 'center') {
        // For center gradients, fade from transparent to color to transparent
        return `linear-gradient(to bottom, ${transparent} 0%, ${midStop2} 30%, ${color} 50%, ${midStop2} 70%, ${transparent} 100%)`;
    } else {
        return `linear-gradient(to top, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
    }
}
function GradientController() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const topGradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomGradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Additional gradient refs for glossary page (4 sections)
    const glossaryGradient1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glossaryGradient2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glossaryGradient3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glossaryGradient4Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const previousPathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousSelectedNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const basePageGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS.default;
    const targetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode ? {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_MINT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_MINT"]
    } : basePageGradient;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitializedRef.current) {
            currentColorsRef.current = {
                top: targetGradient.top,
                bottom: targetGradient.bottom
            };
            targetColorsRef.current = {
                top: targetGradient.top,
                bottom: targetGradient.bottom
            };
            previousPathnameRef.current = pathname;
            previousSelectedNodeRef.current = selectedNode;
            isInitializedRef.current = true;
            requestAnimationFrame(()=>{
                const isGlossary = pathname === '/glossary';
                if (isGlossary) {
                    // Initialize glossary gradients (top left, top right, bottom left, bottom right)
                    if (glossaryGradient1Ref.current) {
                        glossaryGradient1Ref.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
                        glossaryGradient1Ref.current.style.setProperty('transition', 'none', 'important');
                    }
                    if (glossaryGradient2Ref.current) {
                        glossaryGradient2Ref.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
                        glossaryGradient2Ref.current.style.setProperty('transition', 'none', 'important');
                    }
                    if (glossaryGradient3Ref.current) {
                        glossaryGradient3Ref.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
                        glossaryGradient3Ref.current.style.setProperty('transition', 'none', 'important');
                    }
                    if (glossaryGradient4Ref.current) {
                        glossaryGradient4Ref.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
                        glossaryGradient4Ref.current.style.setProperty('transition', 'none', 'important');
                    }
                } else {
                    // Initialize standard gradients
                    if (topGradientRef.current) {
                        topGradientRef.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
                        topGradientRef.current.style.setProperty('transition', 'none', 'important');
                    }
                    if (bottomGradientRef.current) {
                        bottomGradientRef.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
                        bottomGradientRef.current.style.setProperty('transition', 'none', 'important');
                    }
                }
            });
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitializedRef.current) return;
        const pathnameChanged = previousPathnameRef.current !== pathname;
        const previousNodeId = previousSelectedNodeRef.current?.id ?? null;
        const currentNodeId = selectedNode?.id ?? null;
        const selectedNodeChanged = previousNodeId !== currentNodeId;
        if (!pathnameChanged && !selectedNodeChanged) return;
        const baseGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS.default;
        const newTargetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode ? {
            top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_MINT"],
            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_MINT"]
        } : baseGradient;
        const targetTop = newTargetGradient.top;
        const targetBottom = newTargetGradient.bottom;
        if (!currentColorsRef.current) {
            currentColorsRef.current = {
                top: baseGradient.top,
                bottom: baseGradient.bottom
            };
        }
        const currentTop = currentColorsRef.current.top;
        const currentBottom = currentColorsRef.current.bottom;
        if (currentTop === targetTop && currentBottom === targetBottom) {
            previousPathnameRef.current = pathname;
            previousSelectedNodeRef.current = selectedNode;
            return;
        }
        targetColorsRef.current = {
            top: targetTop,
            bottom: targetBottom
        };
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        const isGlossary = pathname === '/glossary';
        if (isGlossary) {
            if (glossaryGradient1Ref.current) {
                glossaryGradient1Ref.current.style.setProperty('transition', 'none', 'important');
            }
            if (glossaryGradient2Ref.current) {
                glossaryGradient2Ref.current.style.setProperty('transition', 'none', 'important');
            }
            if (glossaryGradient3Ref.current) {
                glossaryGradient3Ref.current.style.setProperty('transition', 'none', 'important');
            }
            if (glossaryGradient4Ref.current) {
                glossaryGradient4Ref.current.style.setProperty('transition', 'none', 'important');
            }
        } else {
            if (topGradientRef.current) {
                topGradientRef.current.style.setProperty('transition', 'none', 'important');
            }
            if (bottomGradientRef.current) {
                bottomGradientRef.current.style.setProperty('transition', 'none', 'important');
            }
        }
        isAnimatingRef.current = true;
        startTimeRef.current = null;
        const animate = (timestamp)=>{
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            const elapsed = timestamp - startTimeRef.current;
            const duration = 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            const currentTop = interpolateColor(currentColorsRef.current.top, targetColorsRef.current.top, eased);
            const currentBottom = interpolateColor(currentColorsRef.current.bottom, targetColorsRef.current.bottom, eased);
            const isGlossary = pathname === '/glossary';
            if (isGlossary) {
                // Update glossary gradients (top left, top right, bottom left, bottom right)
                if (glossaryGradient1Ref.current) {
                    glossaryGradient1Ref.current.style.background = createGradient(currentTop, 'top');
                }
                if (glossaryGradient2Ref.current) {
                    glossaryGradient2Ref.current.style.background = createGradient(currentTop, 'top');
                }
                if (glossaryGradient3Ref.current) {
                    glossaryGradient3Ref.current.style.background = createGradient(currentBottom, 'bottom');
                }
                if (glossaryGradient4Ref.current) {
                    glossaryGradient4Ref.current.style.background = createGradient(currentBottom, 'bottom');
                }
            } else {
                // Update standard gradients
                const topGradient = topGradientRef.current;
                const bottomGradient = bottomGradientRef.current;
                if (topGradient) {
                    topGradient.style.background = createGradient(currentTop, 'top');
                }
                if (bottomGradient) {
                    bottomGradient.style.background = createGradient(currentBottom, 'bottom');
                }
            }
            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                currentColorsRef.current = {
                    top: targetColorsRef.current.top,
                    bottom: targetColorsRef.current.bottom
                };
                isAnimatingRef.current = false;
                previousPathnameRef.current = pathname;
                previousSelectedNodeRef.current = selectedNode;
                animationFrameRef.current = null;
            }
        };
        animationFrameRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [
        pathname,
        selectedNode
    ]);
    const initialTop = currentColorsRef.current?.top || targetGradient.top;
    const initialBottom = currentColorsRef.current?.bottom || targetGradient.bottom;
    const isGlossaryPage = pathname === '/glossary';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isGlossaryPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: topGradientRef,
                        className: "gradient-overlay-top",
                        style: {
                            background: createGradient(initialTop, 'top'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomGradientRef,
                        className: "gradient-overlay-bottom",
                        style: {
                            background: createGradient(initialBottom, 'bottom'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            isGlossaryPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glossaryGradient1Ref,
                        className: "gradient-overlay-glossary-top-left",
                        style: {
                            background: createGradient(initialTop, 'top'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glossaryGradient2Ref,
                        className: "gradient-overlay-glossary-top-right",
                        style: {
                            background: createGradient(initialTop, 'top'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glossaryGradient3Ref,
                        className: "gradient-overlay-glossary-bottom-left",
                        style: {
                            background: createGradient(initialBottom, 'bottom'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glossaryGradient4Ref,
                        className: "gradient-overlay-glossary-bottom-right",
                        style: {
                            background: createGradient(initialBottom, 'bottom'),
                            transition: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/gradient/index.jsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
}),
"[project]/components/homeButton/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function HomeButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home_button_wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/living-continuity",
            className: "home_button",
            children: "Living Continuity"
        }, void 0, false, {
            fileName: "[project]/components/homeButton/index.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homeButton/index.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/homeTitle/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function HomeTitle() {
    const [selectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null);
    const [highlightedTerm, setHighlightedTerm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [highlightedArticle, setHighlightedArticle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [nodeData, setNodeData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        fetch('/data/nodes.json').then((res)=>res.json()).then((data)=>{
            setNodeData(data);
        }).catch((err)=>{
            console.error('Failed to load node data:', err);
        });
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (selectedNode && nodeData) {
            if (selectedNode.id?.startsWith('G')) {
                const glossaryTerm = nodeData.glossary?.find((g)=>g.id === selectedNode.id);
                if (glossaryTerm) {
                    setHighlightedTerm(glossaryTerm.title || glossaryTerm.id);
                    setHighlightedArticle(null);
                } else {
                    setHighlightedTerm(null);
                    setHighlightedArticle(null);
                }
            } else if (selectedNode.id?.startsWith('A')) {
                const article = nodeData.articles?.find((a)=>a.id === selectedNode.id);
                if (article) {
                    setHighlightedArticle(article.title);
                    setHighlightedTerm(null);
                } else {
                    setHighlightedTerm(null);
                    setHighlightedArticle(null);
                }
            } else {
                setHighlightedTerm(null);
                setHighlightedArticle(null);
            }
        } else {
            setHighlightedTerm(null);
            setHighlightedArticle(null);
        }
    }, [
        selectedNode,
        nodeData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home_title_wrapper",
        children: [
            highlightedTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlighted_term",
                children: highlightedTerm
            }, void 0, false, {
                fileName: "[project]/components/homeTitle/index.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            highlightedArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlighted_article",
                children: highlightedArticle
            }, void 0, false, {
                fileName: "[project]/components/homeTitle/index.jsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/homeTitle/index.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/navigation/InfoPanel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * InfoPanel Component
 * 
 * Sliding panel that slides in from the right side.
 * Pink background with font weight 100.
 * @param {boolean} isOpen - Controls panel visibility
 * @param {function} onClose - Callback function to close the panel
 */ __turbopack_context__.s([
    "default",
    ()=>InfoPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function InfoPanel({ isOpen, onClose }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [infoData, setInfoData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    // Prevent body scroll when panel is open
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Load info data from JSON
        const loadInfoData = async ()=>{
            try {
                console.log('[InfoPanel] Loading info data for pathname:', pathname);
                // Add cache-busting parameter to ensure fresh data
                const response = await fetch(`/data/info.json?t=${Date.now()}`);
                if (!response.ok) {
                    console.error('[InfoPanel] HTTP error:', response.status, response.statusText);
                    throw new Error(`HTTP ${response.status}: Failed to load info data`);
                }
                const data = await response.json();
                console.log('[InfoPanel] Info data loaded successfully:', data);
                // Get the route key (normalize pathname)
                const routeKey = pathname === '/' ? '/' : pathname;
                const routeInfo = data[routeKey] || data['/living-continuity']; // Fallback to landing page
                console.log('[InfoPanel] Route key:', routeKey, 'Route info:', routeInfo);
                // Ensure we only use the content, not any old array structure
                if (routeInfo) {
                    // If it's a string, use it directly
                    if (typeof routeInfo.content === 'string') {
                        console.log('[InfoPanel] Setting info data with content string');
                        setInfoData({
                            content: routeInfo.content
                        });
                    } else {
                        // Fallback: set the whole object (shouldn't happen with current JSON)
                        console.warn('[InfoPanel] Route info content is not a string, using whole object');
                        setInfoData(routeInfo);
                    }
                } else {
                    // No route info found, use fallback
                    console.warn('[InfoPanel] No route info found for:', routeKey, 'using fallback');
                    setInfoData({
                        content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
                    });
                }
            } catch (error) {
                console.error('[InfoPanel] Error loading info data:', error);
                console.error('[InfoPanel] Error details:', {
                    message: error.message,
                    stack: error.stack,
                    name: error.name
                });
                // Fallback content
                setInfoData({
                    content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
                });
            } finally{
                setLoading(false);
                console.log('[InfoPanel] Loading complete');
            }
        };
        if (isOpen) {
            setLoading(true);
            loadInfoData();
        }
    }, [
        pathname,
        isOpen
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
                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                    lineNumber: 102,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: part
            }, index, false, {
                fileName: "[project]/components/navigation/InfoPanel.jsx",
                lineNumber: 104,
                columnNumber: 14
            }, this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `info-panel-wrapper ${isOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-panel-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
                            onClick: onClose
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/InfoPanel.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/InfoPanel.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-panel-content",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/InfoPanel.jsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this) : infoData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "Info:"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                infoData.content && (typeof infoData.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: renderText(infoData.content)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this) : Array.isArray(infoData.content) ? infoData.content.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: section.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: renderText(section.text)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/InfoPanel.jsx",
                                            lineNumber: 129,
                                            columnNumber: 40
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/navigation/InfoPanel.jsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, this)) : null),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/content_folder/SRCE_LC_Images/Leon Duval.pdf",
                                        download: "Leon Duval.pdf",
                                        className: "menu-download-button",
                                        children: "Download PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/InfoPanel.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/InfoPanel.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/InfoPanel.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `info-panel-overlay ${isOpen ? 'open' : ''}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/navigation/InfoPanel.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/navigation/SubmitEntryPanel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitEntryPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const slugifyTitle = (title)=>{
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};
const deslugifyTitle = (slug)=>{
    return slug.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
function SubmitEntryPanel({ isOpen, onClose, currentKeywordTitle = 'self-determination', onSubmitRef }) {
    const [interpretation, setInterpretation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isGlossaryPage = pathname === '/glossary';
    const savedScrollPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const getKeywordFromHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return currentKeywordTitle;
        //TURBOPACK unreachable
        ;
        const hash = undefined;
    }, [
        currentKeywordTitle,
        isGlossaryPage
    ]);
    const [effectiveKeywordTitle, setEffectiveKeywordTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentKeywordTitle);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && isGlossaryPage) {
            const keyword = getKeywordFromHash();
            setEffectiveKeywordTitle(keyword);
        } else {
            setEffectiveKeywordTitle(currentKeywordTitle);
        }
    }, [
        isOpen,
        currentKeywordTitle,
        isGlossaryPage,
        getKeywordFromHash
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isGlossaryPage) return;
        if (isOpen) {
            savedScrollPosition.current = window.scrollY || document.documentElement.scrollTop;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollPosition.current}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            const scrollY = savedScrollPosition.current;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            document.body.setAttribute('data-restoring-scroll', 'true');
            requestAnimationFrame(()=>{
                window.scrollTo({
                    top: scrollY,
                    behavior: 'instant'
                });
                setTimeout(()=>{
                    window.scrollTo({
                        top: scrollY,
                        behavior: 'instant'
                    });
                    setTimeout(()=>{
                        document.body.removeAttribute('data-restoring-scroll');
                    }, 100);
                }, 50);
            });
        }
        return ()=>{
            if (isGlossaryPage && !isOpen) {
                const scrollY = savedScrollPosition.current;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                requestAnimationFrame(()=>{
                    window.scrollTo({
                        top: scrollY,
                        behavior: 'instant'
                    });
                });
            }
        };
    }, [
        isOpen,
        isGlossaryPage
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!interpretation.trim()) {
            return;
        }
        setIsSubmitting(true);
        try {
            const formData = {
                interpretation,
                name: name || null,
                keyword: effectiveKeywordTitle
            };
            const response = await fetch('/api/submit-entry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setInterpretation('');
                setName('');
                onClose();
            } else {
                const error = await response.json();
                console.error('Failed to submit entry:', error);
            }
        } catch (error) {
            console.error('Error submitting entry:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        interpretation,
        name,
        effectiveKeywordTitle,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (onSubmitRef) {
            onSubmitRef.current = handleSubmit;
        }
    }, [
        onSubmitRef,
        handleSubmit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `submit-entry-panel-wrapper ${isOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "submit-entry-panel-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_WHITE"],
                            onClick: onClose
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "submit-entry-panel-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            ref: formRef,
                            className: "submit-entry-form",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                handleSubmit();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "submit-entry-textarea submit-entry-interpretation",
                                    placeholder: `Type to Submit your interpretation of ${effectiveKeywordTitle || 'this word'}`,
                                    rows: 10,
                                    value: interpretation,
                                    onChange: (e)=>setInterpretation(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "submit-entry-input submit-entry-name",
                                    placeholder: "Name (Optional)",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "submit-entry-privacy-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Data Privacy Consent:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "submit-entry-privacy-content",
                                            children: "Text here"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `submit-entry-panel-overlay ${isOpen ? 'open' : ''}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/navigation/InventoryPanel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPanel
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
function InventoryPanel({ isOpen, onClose, furnitureItems, onItemClick, onRemoveItem }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isOpen) {
            document.body.classList.add('inventory-open');
        } else {
            document.body.classList.remove('inventory-open');
        }
        return ()=>{
            document.body.classList.remove('inventory-open');
        };
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `inventory-wrapper ${isOpen ? 'open' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inventory-close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
                        onClick: onClose
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/InventoryPanel.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navigation/InventoryPanel.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "inventory-nav",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: furnitureItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `inventory-item ${item.active ? 'inventory-item-active' : ''}`,
                                    onClick: ()=>onItemClick(item.type),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inventory-item-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, this),
                                        item.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inventory-item-remove",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                if (onRemoveItem) {
                                                    onRemoveItem(item.type);
                                                } else {
                                                    onItemClick(item.type);
                                                }
                                            },
                                            children: "remove"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                            lineNumber: 39,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/InventoryPanel.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navigation/InventoryPanel.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navigation/InventoryPanel.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InfoPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/InfoPanel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$SubmitEntryPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/SubmitEntryPanel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InventoryPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/InventoryPanel.jsx [app-ssr] (ecmascript)");
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
function NavigationControls({ camera, setCamera, onSubmitEntry = null, currentKeywordTitle = null }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [cameraOptions, setCameraOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('cameraOptions');
    const [infoPanelOpen, setInfoPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitEntryPanelOpen, setSubmitEntryPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const submitFormRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentKeywordTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(currentKeywordTitle);
    const isGlossaryPage = pathname === '/glossary';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        currentKeywordTitleRef.current = currentKeywordTitle;
    }, [
        currentKeywordTitle
    ]);
    const isKitOfPartsPage = pathname === '/kit-of-parts';
    const isLivingContinuityPage = pathname === '/living-continuity' || pathname === '/';
    const [objects, setObjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_objectsState', false);
    const [bathroom, setBathroom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_clickbathroom2', false);
    const [boxbed, setBoxbed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_boxbedState', false);
    const [front, setFront] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_frontState', false);
    const [kitchen, setKitchen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_kitchenState', false);
    const [k2, setK2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_k2State', false);
    const [st1, setSt1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_st1State', false);
    const [st2, setSt2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_st2State', false);
    const [stairs, setStairs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_stairsState', false);
    const [sceneRotation, setSceneRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_sceneRotation', false);
    const [livingContinuityRotation, setLivingContinuityRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('livingContinuity_sceneRotation', false);
    const [selectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('selectedObjectId', null);
    const [, setObjectRotationTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('objectRotationTrigger', 0);
    const [, setObjectPositionResetTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('objectPositionResetTrigger', 0);
    const [walkThroughActive, setWalkThroughActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('walkThroughActive', false);
    const [cameFromLivingContinuity, setCameFromLivingContinuity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        isGlossaryPage
    ]);
    const handleGoBack = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        window.location.href = '/living-continuity';
    };
    const handleInfoClick = ()=>{
        setInfoPanelOpen(!infoPanelOpen);
    };
    const handleTour = ()=>{
        setWalkThroughActive(!walkThroughActive);
    };
    const handleSaveImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const mainContent = document.querySelector('main.kit-parts-main');
        if (!mainContent) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(mainContent, {
            cacheBust: true
        }).then((dataUrl)=>{
            const link = document.createElement('a');
            link.download = 'kit-of-parts.png';
            link.href = dataUrl;
            link.click();
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    const slugifyTitleForUrl = (title)=>{
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isGlossaryPage && submitEntryPanelOpen) {
            setSubmitEntryPanelOpen(false);
        }
    }, [
        isGlossaryPage,
        submitEntryPanelOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isGlossaryPage) return;
        if (!submitEntryPanelOpen) {
            const currentHash = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
            if (currentHash.endsWith('-submit')) {
                const keywordSlug = currentHash.replace('#', '').replace('-submit', '');
                window.history.replaceState(null, '', `#${keywordSlug}`);
            }
            return;
        }
    }, [
        submitEntryPanelOpen,
        currentKeywordTitle,
        pathname,
        router,
        isGlossaryPage
    ]);
    const slugifyTitle = (title)=>{
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    const handleSubmitEntryClick = ()=>{
        if (submitEntryPanelOpen && submitFormRef.current) {
            submitFormRef.current();
        } else {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setSubmitEntryPanelOpen(true);
            if (onSubmitEntry) {
                onSubmitEntry();
            }
        }
    };
    const handleCloseSubmitPanel = ()=>{
        setSubmitEntryPanelOpen(false);
    };
    const handleInventoryClick = ()=>{
        if (isKitOfPartsPage) {
            setObjects(!objects);
        }
    };
    const [hashInitialized, setHashInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateURLHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isKitOfPartsPage || !hashInitialized) return;
        const activeItems = [];
        if (bathroom) activeItems.push('bathroom');
        if (boxbed) activeItems.push('boxbed');
        if (front) activeItems.push('front');
        if (kitchen) activeItems.push('kitchen');
        if (k2) activeItems.push('k2');
        if (st1) activeItems.push('st1');
        if (st2) activeItems.push('st2');
        if (stairs) activeItems.push('stairs');
        const hash = activeItems.length > 0 ? `#${activeItems.join('-')}` : '';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        isKitOfPartsPage,
        bathroom,
        boxbed,
        front,
        kitchen,
        k2,
        st1,
        st2,
        stairs,
        pathname,
        hashInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const hash = undefined;
    }, [
        isKitOfPartsPage,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isKitOfPartsPage || !hashInitialized) return;
        updateURLHash();
    }, [
        isKitOfPartsPage,
        bathroom,
        boxbed,
        front,
        kitchen,
        k2,
        st1,
        st2,
        stairs,
        updateURLHash,
        hashInitialized
    ]);
    const handleInventoryItemClick = (itemType)=>{
        if (!isKitOfPartsPage) return;
        switch(itemType){
            case 'bathroom':
                setBathroom(!bathroom);
                break;
            case 'boxbed':
                setBoxbed(!boxbed);
                break;
            case 'front':
                setFront(!front);
                break;
            case 'kitchen':
                setKitchen(!kitchen);
                break;
            case 'k2':
                setK2(!k2);
                break;
            case 'st1':
                setSt1(!st1);
                break;
            case 'st2':
                setSt2(!st2);
                break;
            case 'stairs':
                setStairs(!stairs);
                break;
            default:
                break;
        }
    };
    const handleRemoveItem = (itemType)=>{
        if (!isKitOfPartsPage) return;
        switch(itemType){
            case 'bathroom':
                setBathroom(false);
                break;
            case 'boxbed':
                setBoxbed(false);
                break;
            case 'front':
                setFront(false);
                break;
            case 'kitchen':
                setKitchen(false);
                break;
            case 'k2':
                setK2(false);
                break;
            case 'st1':
                setSt1(false);
                break;
            case 'st2':
                setSt2(false);
                break;
            case 'stairs':
                setStairs(false);
                break;
            default:
                break;
        }
    };
    const handleRevert = ()=>{
        if (!isKitOfPartsPage) return;
        setBathroom(true);
        setBoxbed(true);
        setFront(true);
        setKitchen(true);
        setK2(true);
        setSt1(true);
        setSt2(true);
        setStairs(true);
        setObjectPositionResetTrigger((prev)=>prev + 1);
    };
    const furnitureItems = isKitOfPartsPage ? [
        {
            type: 'bathroom',
            name: 'Bathroom',
            image: '/images/B1.png',
            active: bathroom
        },
        {
            type: 'boxbed',
            name: 'Boxbed',
            image: '/images/BB.png',
            active: boxbed
        },
        {
            type: 'front',
            name: 'Front Porch',
            image: '/images/FP.png',
            active: front
        },
        {
            type: 'kitchen',
            name: 'Kitchen',
            image: '/images/K1.png',
            active: kitchen
        },
        {
            type: 'k2',
            name: 'Kitchen (storage)',
            image: '/images/K2.png',
            active: k2
        },
        {
            type: 'st1',
            name: 'Storage 1',
            image: '/images/S1.png',
            active: st1
        },
        {
            type: 'st2',
            name: 'Storage 2',
            image: '/images/S1.png',
            active: st2
        },
        {
            type: 'stairs',
            name: 'Stairs',
            image: '/images/ST1.png',
            active: stairs
        }
    ] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isGlossaryPage && cameFromLivingContinuity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls-top-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "navigation-button navigation-button-go-back",
                    onClick: handleGoBack,
                    "aria-label": "Go back to living continuity",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "a collective inquiry"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 413,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/SVG/arrow.svg",
                            alt: "",
                            className: "navigation-button-go-back-arrow",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation/NavigationControls.jsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 407,
                columnNumber: 9
            }, this),
            isKitOfPartsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-inventory",
                        onClick: handleInventoryClick,
                        "aria-label": "Inventory",
                        children: "ELEMENTS"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-restart navigation-button-restart-mobile",
                        onClick: handleRevert,
                        "aria-label": "Restart",
                        children: "restart"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 424,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls",
                children: [
                    isGlossaryPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `navigation-button navigation-button-submit ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`,
                        onClick: handleSubmitEntryClick,
                        "aria-label": "Submit Entry",
                        children: "TAP TO SUBMIT YOUR ENTRY"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this) : isKitOfPartsPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `navigation-button navigation-button-rotation ${sceneRotation === true ? 'navigation-button-rotation-active' : ''}`,
                                onClick: ()=>{
                                    const currentValue = sceneRotation === true;
                                    setSceneRotation(!currentValue);
                                },
                                "aria-label": sceneRotation === true ? "Stop Rotation" : "Start Rotation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-text",
                                        children: sceneRotation === true ? 'focus' : 'rotate'
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-icon",
                                        children: sceneRotation === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 464,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 468,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `navigation-button navigation-button-capture ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`,
                                onClick: handleSaveImage,
                                "aria-label": "Capture",
                                children: "capture"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-restart navigation-button-restart-desktop",
                                onClick: handleRevert,
                                "aria-label": "Restart",
                                children: "restart"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `navigation-button navigation-button-rotation ${livingContinuityRotation ? 'navigation-button-rotation-active' : ''}`,
                                onClick: ()=>{
                                    const currentValue = livingContinuityRotation ?? false;
                                    setLivingContinuityRotation(!currentValue);
                                },
                                "aria-label": livingContinuityRotation ? "Stop Rotation" : "Start Rotation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-text",
                                        children: livingContinuityRotation ? 'focus' : 'rotate'
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-icon",
                                        children: livingContinuityRotation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 502,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 506,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 505,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `navigation-button navigation-button-walk-through ${walkThroughActive ? 'navigation-button-open' : ''} ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`,
                                onClick: handleTour,
                                "aria-label": walkThroughActive ? "Stop Walk Through" : "Start Walk Through",
                                children: "walk-through"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-pink",
                        onClick: handleInfoClick,
                        "aria-label": "Info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "navigation-button-info-text",
                                children: "info"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "navigation-button-info-icon",
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InfoPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: infoPanelOpen,
                onClose: ()=>setInfoPanelOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$SubmitEntryPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: submitEntryPanelOpen,
                onClose: handleCloseSubmitPanel,
                currentKeywordTitle: currentKeywordTitle || 'self-determination',
                onSubmitRef: submitFormRef
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            isKitOfPartsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InventoryPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: objects,
                onClose: ()=>setObjects(false),
                furnitureItems: furnitureItems,
                onItemClick: handleInventoryItemClick,
                onRemoveItem: handleRemoveItem
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 537,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/layout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$appStores$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/appStores.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuWrapper.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gradient$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/gradient/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/homeButton/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeTitle$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/homeTitle/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript)");
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
function RootLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isPageVisible, setIsPageVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [displayChildren, setDisplayChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(children);
    const [isInitialMount, setIsInitialMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip transition on initial mount
        if (isInitialMount) {
            setIsInitialMount(false);
            return;
        }
        // Trigger fade-out when pathname changes
        setIsPageVisible(false);
        // After fade-out, update children and fade-in using requestAnimationFrame
        let rafId1 = null;
        let rafId2 = null;
        let rafId3 = null;
        let checkTimeRafId = null;
        const startTime = performance.now();
        const checkTime = ()=>{
            if (performance.now() - startTime >= 350) {
                rafId1 = requestAnimationFrame(()=>{
                    rafId2 = requestAnimationFrame(()=>{
                        setDisplayChildren(children);
                        rafId3 = requestAnimationFrame(()=>{
                            setIsPageVisible(true);
                        });
                    });
                });
            } else {
                checkTimeRafId = requestAnimationFrame(checkTime);
            }
        };
        checkTimeRafId = requestAnimationFrame(checkTime);
        return ()=>{
            if (rafId1) cancelAnimationFrame(rafId1);
            if (rafId2) cancelAnimationFrame(rafId2);
            if (rafId3) cancelAnimationFrame(rafId3);
            if (checkTimeRafId) cancelAnimationFrame(checkTimeRafId);
        };
    }, [
        pathname,
        children,
        isInitialMount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Add page-specific class to body for gradient styling
        const body = document.body;
        const html = document.documentElement;
        // Remove all page classes
        body.classList.remove('page-landing', 'page-glossary', 'page-kit');
        html.classList.remove('page-landing', 'page-glossary', 'page-kit');
        // Add landing page class if on landing page
        if (pathname === '/living-continuity' || pathname === '/') {
            body.classList.add('page-landing');
            html.classList.add('page-landing');
        } else if (pathname === '/glossary') {
            body.classList.add('page-glossary');
            html.classList.add('page-glossary');
        } else if (pathname === '/kit-of-parts') {
            body.classList.add('page-kit');
            html.classList.add('page-kit');
        }
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Living Continuity"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Living Continuity - Interactive 3D Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#1C1C1C"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Living Continuity"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Living Continuity - Interactive 3D Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/SVG/rotate.svg",
                        type: "image/svg+xml"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preload",
                        href: "/fonts/ortica-main/OrticaAngular-Bold.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preload",
                        href: "/fonts/ronzino-main/Ronzino-Regular.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                style: {
                    backgroundColor: 'var(--color-gray-dark-2)',
                    color: '#ffffff',
                    margin: 0,
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "elements-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gradient$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeButton$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/layout.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square top-left"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square top-right"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square bottom-left"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square bottom-right"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeTitle$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "root",
                        className: isPageVisible ? 'page-visible' : 'page-hidden',
                        children: displayChildren
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f38baf40._.js.map