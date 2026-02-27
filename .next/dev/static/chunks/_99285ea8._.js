(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/utils/appStores.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
if ("TURBOPACK compile-time truthy", 1) {
    console.log('[appStores] Initializing stores...');
}
var createStoreSafe = function(name, defaultValue) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(name, defaultValue);
    } catch (error) {
        console.error('[appStores] Error creating store "'.concat(name, '":'), error);
        throw error;
    }
};
var selectedNodeStore = createStoreSafe('selectedNodeStore', null);
var cameraOptionsStore = createStoreSafe('cameraOptions', null);
var kitOfPartsSceneRotationStore = createStoreSafe('kitOfParts_sceneRotation', false);
var livingContinuitySceneRotationStore = createStoreSafe('livingContinuity_sceneRotation', false);
var walkThroughActiveStore = createStoreSafe('walkThroughActive', false);
var selectedObjectIdStore = createStoreSafe('selectedObjectId', null);
var objectRotationTriggerStore = createStoreSafe('objectRotationTrigger', 0);
var objectPositionResetTriggerStore = createStoreSafe('objectPositionResetTrigger', 0);
var gridDimensionsStore = createStoreSafe('gridDimensions', {
    width: 144,
    height: 192,
    cellSize: 12,
    centerX: 0,
    centerZ: 0
});
var kitOfPartsObjectsStateStore = createStoreSafe('kitOfParts_objectsState', false);
var kitOfPartsClickbathroom2Store = createStoreSafe('kitOfParts_clickbathroom2', false);
var kitOfPartsBoxbedStateStore = createStoreSafe('kitOfParts_boxbedState', false);
var kitOfPartsFrontStateStore = createStoreSafe('kitOfParts_frontState', false);
var kitOfPartsKitchenStateStore = createStoreSafe('kitOfParts_kitchenState', false);
var kitOfPartsK2StateStore = createStoreSafe('kitOfParts_k2State', false);
var kitOfPartsS1StateStore = createStoreSafe('kitOfParts_s1State', false);
var kitOfPartsSt1StateStore = createStoreSafe('kitOfParts_st1State', false);
var kitOfPartsSt2StateStore = createStoreSafe('kitOfParts_st2State', false);
var kitOfPartsStairsStateStore = createStoreSafe('kitOfParts_stairsState', false);
var kitOfPartsCameraStateStore = createStoreSafe('kitOfParts_cameraState', false);
var clickbathroom2Store = createStoreSafe('clickbathroom2', false);
var boxbedStateStore = createStoreSafe('boxbedState', false);
var frontStateStore = createStoreSafe('frontState', false);
var kitchenStateStore = createStoreSafe('kitchenState', false);
var k2StateStore = createStoreSafe('k2State', false);
var s1StateStore = createStoreSafe('s1State', false);
var st1StateStore = createStoreSafe('st1State', false);
var cameraStateStore = createStoreSafe('cameraState', false);
var highlightedNodesStore = createStoreSafe('highlightedNodesStore', []);
var secondaryHighlightedArticlesStore = createStoreSafe('secondaryHighlightedArticlesStore', []);
var elementOpacityStore = createStoreSafe('elementOpacityStore', {});
var connectionLinesVisibilityStore = createStoreSafe('connectionLinesVisibilityStore', true);
var cameraInteractionStore = createStoreSafe('cameraInteractionStore', false);
var loadingStateStore = createStoreSafe('loadingState', {
    nodesLoaded: 0,
    totalNodes: 0,
    isLoading: true,
    nodesVisible: []
});
var adaptStore = createStoreSafe('adapt', false);
var handleOpenStore = createStoreSafe('handleOpen', false);
var closeCloseUpVarStore = createStoreSafe('closeCloseUpVar', false);
var handleTitleBoxStore = createStoreSafe('handleTitleBox', false);
var clickedStore = createStoreSafe('clicked', false);
var handleClicksStore = createStoreSafe('handleClicks', 0);
var keyWordOneStore = createStoreSafe('keyWordOne', true);
var keyWordTwoStore = createStoreSafe('keyWordTwo', true);
var keyWordTreeStore = createStoreSafe('keyWordTree', true);
var keyWordFourStore = createStoreSafe('keyWordFour', false);
var keyWordFiveStore = createStoreSafe('keyWordFive', false);
var articleStores = {};
var glossaryStores = {};
for(var i = 1; i <= 26; i++){
    var storeName = "A".concat(i, "Store");
    articleStores[storeName] = createStoreSafe(storeName, false);
}
for(var i1 = 1; i1 <= 54; i1++){
    var storeName1 = "G".concat(i1, "Store");
    glossaryStores[storeName1] = createStoreSafe(storeName1, false);
}
;
if ("TURBOPACK compile-time truthy", 1) {
    console.log('[appStores] All stores initialized successfully');
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/_setup/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var COLOR_ACCENT = '#e9ff00';
var COLOR_YELLOW = '#e9ff00';
var COLOR_BLACK = '#000000';
var COLOR_WHITE = '#ffffff';
var COLOR_PINK_LIGHT = '#FFDEFE';
var COLOR_BLUE_LIGHT = '#DEE3FF';
var COLOR_GRAY_DARK_1 = '#1B1B1B';
var COLOR_GRAY_DARK_2 = '#1C1C1C';
var COLOR_GRAY_DARK_3 = '#232323';
var COLOR_BLUE = '#00B7FF';
var COLOR_ORANGE_1 = '#FF9500';
var COLOR_ORANGE_2 = '#FF5900';
var COLOR_PURPLE = '#7C44FF';
var COLOR_MINT = '#00FFA6';
var COLOR_GRAY_MEDIUM = '#737373';
var COLOR_RED = '#FF0004';
var COLOR_MAGENTA = '#FF00F7';
var COLOR_GRAY_LIGHT = '#D2D2D2';
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function CrossButton(param) {
    var _param_color = param.color, color = _param_color === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"] : _param_color, onClick = param.onClick, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "cross-button ".concat(className),
        "aria-label": "Close menu",
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
                    stroke: color,
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/menu/CrossButton.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
_c = CrossButton;
var _c;
__turbopack_context__.k.register(_c, "CrossButton");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu/Menu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
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
function Menu(param) {
    var _this = this;
    var isOpen = param.isOpen, onClose = param.onClose;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Menu.useEffect": function() {
            if (isOpen) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
            return ({
                "Menu.useEffect": function() {
                    document.body.classList.remove('menu-open');
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], [
        isOpen
    ]);
    var menuItems = [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-overlay ".concat(isOpen ? 'open' : ''),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/menu/Menu.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-wrapper ".concat(isOpen ? 'open' : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "menu-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: menuItems.map(function(item, index) {
                                var isActive = pathname === item.href || pathname === '/' && item.href === '/living-continuity';
                                var className = isActive ? 'menu-item menu-item-archive' : 'menu-item';
                                if (item.external) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: className,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/menu/Menu.jsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, _this)
                                    }, index, false, {
                                        fileName: "[project]/components/menu/Menu.jsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, _this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: className,
                                        onClick: onClose,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/menu/Menu.jsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, _this)
                                }, index, false, {
                                    fileName: "[project]/components/menu/Menu.jsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, _this);
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
_s(Menu, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu/MenuButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function MenuButton(param) {
    var onClick = param.onClick, _param_title = param.title, title = _param_title === void 0 ? 'A collective Inquiry' : _param_title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-button-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClick,
                    className: "menu-button",
                    "aria-label": "Open menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "menu-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-title-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = MenuButton;
var _c;
__turbopack_context__.k.register(_c, "MenuButton");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu/index.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Menu Module - Main Entry Point
 * 
 * Exports all menu-related components for easy importing
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuWrapper.jsx [app-client] (ecmascript)");
;
;
;
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu/Menu.jsx [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-client] (ecmascript)");
}),
"[project]/components/menu/MenuButton.jsx [app-client] (ecmascript) <export default as MenuButton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-client] (ecmascript)");
}),
"[project]/components/menu/MenuWrapper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/menu/index.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/components/menu/Menu.jsx [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuButton$3e$__ = __turbopack_context__.i("[project]/components/menu/MenuButton.jsx [app-client] (ecmascript) <export default as MenuButton>");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var getPageTitle = function(pathname) {
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
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), menuOpen = _useState[0], setMenuOpen = _useState[1];
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var pageTitle = getPageTitle(pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuButton$3e$__["MenuButton"], {
                    onClick: function() {
                        return setMenuOpen(true);
                    },
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$Menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                isOpen: menuOpen,
                onClose: function() {
                    return setMenuOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/components/menu/MenuWrapper.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MenuWrapper, "XeKBFCs+x77NsHWouRwtasyFFlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MenuWrapper;
var _c;
__turbopack_context__.k.register(_c, "MenuWrapper");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/gradient/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Define gradient colors for each page
var PAGE_GRADIENTS = {
    '/': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"]
    },
    '/living-continuity': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PINK_LIGHT"]
    },
    '/glossary': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    '/kit-of-parts': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ORANGE_2"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_ORANGE_2"]
    },
    '/circle': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    '/room': {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    },
    // Default gradient (fallback)
    "default": {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLUE_LIGHT"]
    }
};
/**
 * Converts hex color to RGB
 */ function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    ].map(function(x) {
        var hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
/**
 * Interpolates between two colors
 */ function interpolateColor(color1, color2, factor) {
    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);
    if (!rgb1 || !rgb2) return color1;
    var r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    var g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    var b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
    return rgbToHex(r, g, b);
}
/**
 * Creates a gradient string from a color
 */ function createGradient(color, direction) {
    // Convert hex to rgba with 0 opacity for transparency
    var rgb = hexToRgb(color);
    var transparent = rgb ? "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", 0)") : 'rgba(255, 255, 255, 0)';
    // Create intermediate stops with partial opacity for softer gradient
    var midStop1 = rgb ? "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", 0.5)") : 'rgba(255, 255, 255, 0.6)';
    var midStop2 = rgb ? "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", 0.2)") : 'rgba(255, 255, 255, 0.3)';
    if (direction === 'top') {
        return "linear-gradient(to bottom, ".concat(color, " 0%, ").concat(midStop1, " 40%, ").concat(midStop2, " 70%, ").concat(transparent, " 100%)");
    } else if (direction === 'bottom') {
        return "linear-gradient(to top, ".concat(color, " 0%, ").concat(midStop1, " 40%, ").concat(midStop2, " 70%, ").concat(transparent, " 100%)");
    } else if (direction === 'center') {
        // For center gradients, fade from transparent to color to transparent
        return "linear-gradient(to bottom, ".concat(transparent, " 0%, ").concat(midStop2, " 30%, ").concat(color, " 50%, ").concat(midStop2, " 70%, ").concat(transparent, " 100%)");
    } else {
        return "linear-gradient(to top, ".concat(color, " 0%, ").concat(midStop1, " 40%, ").concat(midStop2, " 70%, ").concat(transparent, " 100%)");
    }
}
function GradientController() {
    var _currentColorsRef_current, _currentColorsRef_current1;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var topGradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var bottomGradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Additional gradient refs for glossary page (4 sections)
    var glossaryGradient1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var glossaryGradient2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var glossaryGradient3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var glossaryGradient4Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var currentColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var targetColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var previousPathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var previousSelectedNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var basePageGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS["default"];
    var targetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode ? {
        top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_MINT"],
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_MINT"]
    } : basePageGradient;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GradientController.useEffect": function() {
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
                requestAnimationFrame({
                    "GradientController.useEffect": function() {
                        var isGlossary = pathname === '/glossary';
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
                    }
                }["GradientController.useEffect"]);
            }
        }
    }["GradientController.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GradientController.useEffect": function() {
            var _previousSelectedNodeRef_current;
            if (!isInitializedRef.current) return;
            var pathnameChanged = previousPathnameRef.current !== pathname;
            var _previousSelectedNodeRef_current_id;
            var previousNodeId = (_previousSelectedNodeRef_current_id = (_previousSelectedNodeRef_current = previousSelectedNodeRef.current) === null || _previousSelectedNodeRef_current === void 0 ? void 0 : _previousSelectedNodeRef_current.id) !== null && _previousSelectedNodeRef_current_id !== void 0 ? _previousSelectedNodeRef_current_id : null;
            var _selectedNode_id;
            var currentNodeId = (_selectedNode_id = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) !== null && _selectedNode_id !== void 0 ? _selectedNode_id : null;
            var selectedNodeChanged = previousNodeId !== currentNodeId;
            if (!pathnameChanged && !selectedNodeChanged) return;
            var baseGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS["default"];
            var newTargetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode ? {
                top: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_MINT"],
                bottom: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_MINT"]
            } : baseGradient;
            var targetTop = newTargetGradient.top;
            var targetBottom = newTargetGradient.bottom;
            if (!currentColorsRef.current) {
                currentColorsRef.current = {
                    top: baseGradient.top,
                    bottom: baseGradient.bottom
                };
            }
            var currentTop = currentColorsRef.current.top;
            var currentBottom = currentColorsRef.current.bottom;
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
            var isGlossary = pathname === '/glossary';
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
            var animate = {
                "GradientController.useEffect.animate": function(timestamp) {
                    if (!startTimeRef.current) {
                        startTimeRef.current = timestamp;
                    }
                    var elapsed = timestamp - startTimeRef.current;
                    var duration = 1000;
                    var progress = Math.min(elapsed / duration, 1);
                    var eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                    var currentTop = interpolateColor(currentColorsRef.current.top, targetColorsRef.current.top, eased);
                    var currentBottom = interpolateColor(currentColorsRef.current.bottom, targetColorsRef.current.bottom, eased);
                    var isGlossary = pathname === '/glossary';
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
                        var topGradient = topGradientRef.current;
                        var bottomGradient = bottomGradientRef.current;
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
                }
            }["GradientController.useEffect.animate"];
            animationFrameRef.current = requestAnimationFrame(animate);
            return ({
                "GradientController.useEffect": function() {
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["GradientController.useEffect"];
        }
    }["GradientController.useEffect"], [
        pathname,
        selectedNode
    ]);
    var initialTop = ((_currentColorsRef_current = currentColorsRef.current) === null || _currentColorsRef_current === void 0 ? void 0 : _currentColorsRef_current.top) || targetGradient.top;
    var initialBottom = ((_currentColorsRef_current1 = currentColorsRef.current) === null || _currentColorsRef_current1 === void 0 ? void 0 : _currentColorsRef_current1.bottom) || targetGradient.bottom;
    var isGlossaryPage = pathname === '/glossary';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isGlossaryPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            isGlossaryPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(GradientController, "zUt4+AxPz7V+OiGfEzhy6M/Hlys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = GradientController;
var _c;
__turbopack_context__.k.register(_c, "GradientController");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/homeButton/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function HomeButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home_button_wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = HomeButton;
var _c;
__turbopack_context__.k.register(_c, "HomeButton");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/homeTitle/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomeTitle() {
    _s();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedNodeStore', null), 1), selectedNode = _useStore[0];
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null), 2), highlightedTerm = _React_useState[0], setHighlightedTerm = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null), 2), highlightedArticle = _React_useState1[0], setHighlightedArticle = _React_useState1[1];
    var _React_useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null), 2), nodeData = _React_useState2[0], setNodeData = _React_useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HomeTitle.useEffect": function() {
            fetch('/data/nodes.json').then({
                "HomeTitle.useEffect": function(res) {
                    return res.json();
                }
            }["HomeTitle.useEffect"]).then({
                "HomeTitle.useEffect": function(data) {
                    setNodeData(data);
                }
            }["HomeTitle.useEffect"])["catch"]({
                "HomeTitle.useEffect": function(err) {
                    console.error('Failed to load node data:', err);
                }
            }["HomeTitle.useEffect"]);
        }
    }["HomeTitle.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HomeTitle.useEffect": function() {
            if (selectedNode && nodeData) {
                var _selectedNode_id, _selectedNode_id1;
                if ((_selectedNode_id = selectedNode.id) === null || _selectedNode_id === void 0 ? void 0 : _selectedNode_id.startsWith('G')) {
                    var _nodeData_glossary;
                    var glossaryTerm = (_nodeData_glossary = nodeData.glossary) === null || _nodeData_glossary === void 0 ? void 0 : _nodeData_glossary.find({
                        "HomeTitle.useEffect": function(g) {
                            return g.id === selectedNode.id;
                        }
                    }["HomeTitle.useEffect"]);
                    if (glossaryTerm) {
                        setHighlightedTerm(glossaryTerm.title || glossaryTerm.id);
                        setHighlightedArticle(null);
                    } else {
                        setHighlightedTerm(null);
                        setHighlightedArticle(null);
                    }
                } else if ((_selectedNode_id1 = selectedNode.id) === null || _selectedNode_id1 === void 0 ? void 0 : _selectedNode_id1.startsWith('A')) {
                    var _nodeData_articles;
                    var article = (_nodeData_articles = nodeData.articles) === null || _nodeData_articles === void 0 ? void 0 : _nodeData_articles.find({
                        "HomeTitle.useEffect": function(a) {
                            return a.id === selectedNode.id;
                        }
                    }["HomeTitle.useEffect"]);
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
        }
    }["HomeTitle.useEffect"], [
        selectedNode,
        nodeData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home_title_wrapper",
        children: [
            highlightedTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlighted_term",
                children: highlightedTerm
            }, void 0, false, {
                fileName: "[project]/components/homeTitle/index.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            highlightedArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(HomeTitle, "5QHYe9uroP+zZCEzZpEsy4KJQpI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = HomeTitle;
var _c;
__turbopack_context__.k.register(_c, "HomeTitle");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/InfoPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
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
;
;
function InfoPanel(param) {
    var _this = this;
    var isOpen = param.isOpen, onClose = param.onClose;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null), 2), infoData = _React_useState[0], setInfoData = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true), 2), loading = _React_useState1[0], setLoading = _React_useState1[1];
    // Prevent body scroll when panel is open
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InfoPanel.useEffect": function() {
            if (isOpen) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
            return ({
                "InfoPanel.useEffect": function() {
                    document.body.classList.remove('menu-open');
                }
            })["InfoPanel.useEffect"];
        }
    }["InfoPanel.useEffect"], [
        isOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InfoPanel.useEffect": function() {
            // Load info data from JSON
            var loadInfoData = {
                "InfoPanel.useEffect.loadInfoData": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "InfoPanel.useEffect.loadInfoData": function() {
                            var response, data, routeKey, routeInfo, error;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "InfoPanel.useEffect.loadInfoData": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                3,
                                                4,
                                                5
                                            ]);
                                            console.log('[InfoPanel] Loading info data for pathname:', pathname);
                                            return [
                                                4,
                                                fetch("/data/info.json?t=".concat(Date.now()))
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            if (!response.ok) {
                                                console.error('[InfoPanel] HTTP error:', response.status, response.statusText);
                                                throw new Error("HTTP ".concat(response.status, ": Failed to load info data"));
                                            }
                                            return [
                                                4,
                                                response.json()
                                            ];
                                        case 2:
                                            data = _state.sent();
                                            console.log('[InfoPanel] Info data loaded successfully:', data);
                                            // Get the route key (normalize pathname)
                                            routeKey = pathname === '/' ? '/' : pathname;
                                            routeInfo = data[routeKey] || data['/living-continuity']; // Fallback to landing page
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
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            error = _state.sent();
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
                                            return [
                                                3,
                                                5
                                            ];
                                        case 4:
                                            setLoading(false);
                                            console.log('[InfoPanel] Loading complete');
                                            return [
                                                7
                                            ];
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["InfoPanel.useEffect.loadInfoData"]);
                        }
                    }["InfoPanel.useEffect.loadInfoData"])();
                }
            }["InfoPanel.useEffect.loadInfoData"];
            if (isOpen) {
                setLoading(true);
                loadInfoData();
            }
        }
    }["InfoPanel.useEffect"], [
        pathname,
        isOpen
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
                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                    lineNumber: 102,
                    columnNumber: 16
                }, _this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: part
            }, index, false, {
                fileName: "[project]/components/navigation/InfoPanel.jsx",
                lineNumber: 104,
                columnNumber: 14
            }, _this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-panel-wrapper ".concat(isOpen ? 'open' : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-panel-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-panel-content",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/InfoPanel.jsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this) : infoData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "Info:"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                infoData.content && (typeof infoData.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: renderText(infoData.content)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/InfoPanel.jsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this) : Array.isArray(infoData.content) ? infoData.content.map(function(section, index) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: section.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: renderText(section.text)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/InfoPanel.jsx",
                                            lineNumber: 129,
                                            columnNumber: 40
                                        }, _this)
                                    }, index, false, {
                                        fileName: "[project]/components/navigation/InfoPanel.jsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, _this);
                                }) : null),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-panel-overlay ".concat(isOpen ? 'open' : ''),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/navigation/InfoPanel.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(InfoPanel, "jFiGrdbdqXUXhNRpicvptOyQHzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = InfoPanel;
var _c;
__turbopack_context__.k.register(_c, "InfoPanel");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/SubmitEntryPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitEntryPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
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
;
;
var slugifyTitle = function(title) {
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};
var deslugifyTitle = function(slug) {
    return slug.split('-').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};
function SubmitEntryPanel(param) {
    var isOpen = param.isOpen, onClose = param.onClose, _param_currentKeywordTitle = param.currentKeywordTitle, currentKeywordTitle = _param_currentKeywordTitle === void 0 ? 'self-determination' : _param_currentKeywordTitle, onSubmitRef = param.onSubmitRef;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), interpretation = _useState[0], setInterpretation = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), name = _useState1[0], setName = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isSubmitting = _useState2[0], setIsSubmitting = _useState2[1];
    var formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var isGlossaryPage = pathname === '/glossary';
    var savedScrollPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var getKeywordFromHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SubmitEntryPanel.useCallback[getKeywordFromHash]": function() {
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !isGlossaryPage) return currentKeywordTitle;
            var hash = window.location.hash.substring(1);
            if (hash && hash.endsWith('-submit')) {
                var keywordSlug = hash.replace('-submit', '');
                var allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = allGlossaryItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        var translations = item.querySelectorAll('[class*="glossaryTranslation"]');
                        if (translations.length > 0) {
                            var _translations__textContent;
                            var firstTranslation = (_translations__textContent = translations[0].textContent) === null || _translations__textContent === void 0 ? void 0 : _translations__textContent.trim();
                            if (firstTranslation && slugifyTitle(firstTranslation) === keywordSlug) {
                                return firstTranslation;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                            _iterator["return"]();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return deslugifyTitle(keywordSlug);
            }
            if (hash && !hash.endsWith('-submit')) {
                var allGlossaryItems1 = document.querySelectorAll('[data-keyword-id]');
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = allGlossaryItems1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var item1 = _step1.value;
                        var translations1 = item1.querySelectorAll('[class*="glossaryTranslation"]');
                        if (translations1.length > 0) {
                            var _translations__textContent1;
                            var firstTranslation1 = (_translations__textContent1 = translations1[0].textContent) === null || _translations__textContent1 === void 0 ? void 0 : _translations__textContent1.trim();
                            if (firstTranslation1 && slugifyTitle(firstTranslation1) === hash) {
                                return firstTranslation1;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                            _iterator1["return"]();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
            return currentKeywordTitle;
        }
    }["SubmitEntryPanel.useCallback[getKeywordFromHash]"], [
        currentKeywordTitle,
        isGlossaryPage
    ]);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentKeywordTitle), 2), effectiveKeywordTitle = _useState3[0], setEffectiveKeywordTitle = _useState3[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubmitEntryPanel.useEffect": function() {
            if (isOpen && isGlossaryPage) {
                var keyword = getKeywordFromHash();
                setEffectiveKeywordTitle(keyword);
            } else {
                setEffectiveKeywordTitle(currentKeywordTitle);
            }
        }
    }["SubmitEntryPanel.useEffect"], [
        isOpen,
        currentKeywordTitle,
        isGlossaryPage,
        getKeywordFromHash
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "SubmitEntryPanel.useEffect": function() {
            if (isOpen) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
            return ({
                "SubmitEntryPanel.useEffect": function() {
                    document.body.classList.remove('menu-open');
                }
            })["SubmitEntryPanel.useEffect"];
        }
    }["SubmitEntryPanel.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubmitEntryPanel.useEffect": function() {
            if (!isGlossaryPage) return;
            if (isOpen) {
                savedScrollPosition.current = window.scrollY || document.documentElement.scrollTop;
                document.body.style.position = 'fixed';
                document.body.style.top = "-".concat(savedScrollPosition.current, "px");
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
            } else {
                var scrollY = savedScrollPosition.current;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                document.body.setAttribute('data-restoring-scroll', 'true');
                requestAnimationFrame({
                    "SubmitEntryPanel.useEffect": function() {
                        window.scrollTo({
                            top: scrollY,
                            behavior: 'instant'
                        });
                        setTimeout({
                            "SubmitEntryPanel.useEffect": function() {
                                window.scrollTo({
                                    top: scrollY,
                                    behavior: 'instant'
                                });
                                setTimeout({
                                    "SubmitEntryPanel.useEffect": function() {
                                        document.body.removeAttribute('data-restoring-scroll');
                                    }
                                }["SubmitEntryPanel.useEffect"], 100);
                            }
                        }["SubmitEntryPanel.useEffect"], 50);
                    }
                }["SubmitEntryPanel.useEffect"]);
            }
            return ({
                "SubmitEntryPanel.useEffect": function() {
                    if (isGlossaryPage && !isOpen) {
                        var scrollY = savedScrollPosition.current;
                        document.body.style.position = '';
                        document.body.style.top = '';
                        document.body.style.width = '';
                        document.body.style.overflow = '';
                        requestAnimationFrame({
                            "SubmitEntryPanel.useEffect": function() {
                                window.scrollTo({
                                    top: scrollY,
                                    behavior: 'instant'
                                });
                            }
                        }["SubmitEntryPanel.useEffect"]);
                    }
                }
            })["SubmitEntryPanel.useEffect"];
        }
    }["SubmitEntryPanel.useEffect"], [
        isOpen,
        isGlossaryPage
    ]);
    var handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SubmitEntryPanel.useCallback[handleSubmit]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                "SubmitEntryPanel.useCallback[handleSubmit]": function() {
                    var formData, response, _$error, error;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                        "SubmitEntryPanel.useCallback[handleSubmit]": function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!interpretation.trim()) {
                                        return [
                                            2
                                        ];
                                    }
                                    setIsSubmitting(true);
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        7,
                                        8
                                    ]);
                                    formData = {
                                        interpretation: interpretation,
                                        name: name || null,
                                        keyword: effectiveKeywordTitle
                                    };
                                    return [
                                        4,
                                        fetch('/api/submit-entry', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(formData)
                                        })
                                    ];
                                case 2:
                                    response = _state.sent();
                                    if (!response.ok) return [
                                        3,
                                        3
                                    ];
                                    setInterpretation('');
                                    setName('');
                                    onClose();
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    return [
                                        4,
                                        response.json()
                                    ];
                                case 4:
                                    _$error = _state.sent();
                                    console.error('Failed to submit entry:', _$error);
                                    _state.label = 5;
                                case 5:
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    error = _state.sent();
                                    console.error('Error submitting entry:', error);
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    setIsSubmitting(false);
                                    return [
                                        7
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        }
                    }["SubmitEntryPanel.useCallback[handleSubmit]"]);
                }
            }["SubmitEntryPanel.useCallback[handleSubmit]"])();
        }
    }["SubmitEntryPanel.useCallback[handleSubmit]"], [
        interpretation,
        name,
        effectiveKeywordTitle,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubmitEntryPanel.useEffect": function() {
            if (onSubmitRef) {
                onSubmitRef.current = handleSubmit;
            }
        }
    }["SubmitEntryPanel.useEffect"], [
        onSubmitRef,
        handleSubmit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "submit-entry-panel-wrapper ".concat(isOpen ? 'open' : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "submit-entry-panel-close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_WHITE"],
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "submit-entry-panel-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            ref: formRef,
                            className: "submit-entry-form",
                            onSubmit: function(e) {
                                e.preventDefault();
                                handleSubmit();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "submit-entry-textarea submit-entry-interpretation",
                                    placeholder: "Type to Submit your interpretation of ".concat(effectiveKeywordTitle || 'this word'),
                                    rows: 10,
                                    value: interpretation,
                                    onChange: function(e) {
                                        return setInterpretation(e.target.value);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "submit-entry-input submit-entry-name",
                                    placeholder: "Name (Optional)",
                                    value: name,
                                    onChange: function(e) {
                                        return setName(e.target.value);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "submit-entry-privacy-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Data Privacy Consent:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "submit-entry-panel-overlay ".concat(isOpen ? 'open' : ''),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/navigation/SubmitEntryPanel.jsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SubmitEntryPanel, "k78luRQjdFRqWzGFAtDqk2cvQ2g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SubmitEntryPanel;
var _c;
__turbopack_context__.k.register(_c, "SubmitEntryPanel");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/InventoryPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/CrossButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function InventoryPanel(param) {
    var _this = this;
    var isOpen = param.isOpen, onClose = param.onClose, furnitureItems = param.furnitureItems, onItemClick = param.onItemClick, onRemoveItem = param.onRemoveItem;
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InventoryPanel.useEffect": function() {
            if (isOpen) {
                document.body.classList.add('inventory-open');
            } else {
                document.body.classList.remove('inventory-open');
            }
            return ({
                "InventoryPanel.useEffect": function() {
                    document.body.classList.remove('inventory-open');
                }
            })["InventoryPanel.useEffect"];
        }
    }["InventoryPanel.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inventory-wrapper ".concat(isOpen ? 'open' : ''),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inventory-close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$CrossButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_BLACK"],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "inventory-nav",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: furnitureItems.map(function(item, index) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inventory-item ".concat(item.active ? 'inventory-item-active' : ''),
                                    onClick: function() {
                                        return onItemClick(item.type);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inventory-item-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, _this),
                                        item.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inventory-item-remove",
                                            onClick: function(e) {
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
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, _this)
                            }, index, false, {
                                fileName: "[project]/components/navigation/InventoryPanel.jsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, _this);
                        })
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
_s(InventoryPanel, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = InventoryPanel;
var _c;
__turbopack_context__.k.register(_c, "InventoryPanel");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usestore-react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InfoPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/InfoPanel.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './IndexPanel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$SubmitEntryPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/SubmitEntryPanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InventoryPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/InventoryPanel.jsx [app-client] (ecmascript)");
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
function NavigationControls(param) {
    var camera = param.camera, setCamera = param.setCamera, _param_onSubmitEntry = param.onSubmitEntry, onSubmitEntry = _param_onSubmitEntry === void 0 ? null : _param_onSubmitEntry, _param_currentKeywordTitle = param.currentKeywordTitle, currentKeywordTitle = _param_currentKeywordTitle === void 0 ? null : _param_currentKeywordTitle;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    var _useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('cameraOptions'), 2), cameraOptions = _useStore[0], setCameraOptions = _useStore[1];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), infoPanelOpen = _useState[0], setInfoPanelOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), indexPanelOpen = _useState1[0], setIndexPanelOpen = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), submitEntryPanelOpen = _useState2[0], setSubmitEntryPanelOpen = _useState2[1];
    var submitFormRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var currentKeywordTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentKeywordTitle);
    var isGlossaryPage = pathname === '/glossary';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            currentKeywordTitleRef.current = currentKeywordTitle;
        }
    }["NavigationControls.useEffect"], [
        currentKeywordTitle
    ]);
    var isKitOfPartsPage = pathname === '/kit-of-parts';
    var isLivingContinuityPage = pathname === '/living-continuity' || pathname === '/';
    var isLandingPage = pathname === '/' || pathname === '/living-continuity';
    var _useStore1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_objectsState', false), 2), objects = _useStore1[0], setObjects = _useStore1[1];
    var _useStore2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_clickbathroom2', false), 2), bathroom = _useStore2[0], setBathroom = _useStore2[1];
    var _useStore3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_boxbedState', false), 2), boxbed = _useStore3[0], setBoxbed = _useStore3[1];
    var _useStore4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_frontState', false), 2), front = _useStore4[0], setFront = _useStore4[1];
    var _useStore5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_kitchenState', false), 2), kitchen = _useStore5[0], setKitchen = _useStore5[1];
    var _useStore6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_k2State', false), 2), k2 = _useStore6[0], setK2 = _useStore6[1];
    var _useStore7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_st1State', false), 2), st1 = _useStore7[0], setSt1 = _useStore7[1];
    var _useStore8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_st2State', false), 2), st2 = _useStore8[0], setSt2 = _useStore8[1];
    var _useStore9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_stairsState', false), 2), stairs = _useStore9[0], setStairs = _useStore9[1];
    var _useStore10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('kitOfParts_sceneRotation', false), 2), sceneRotation = _useStore10[0], setSceneRotation = _useStore10[1];
    var _useStore11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('livingContinuity_sceneRotation', false), 2), livingContinuityRotation = _useStore11[0], setLivingContinuityRotation = _useStore11[1];
    var _useStore12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('selectedObjectId', null), 1), selectedObjectId = _useStore12[0];
    var _useStore13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('objectRotationTrigger', 0), 2), setObjectRotationTrigger = _useStore13[1];
    var _useStore14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('objectPositionResetTrigger', 0), 2), setObjectPositionResetTrigger = _useStore14[1];
    var _useStore15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usestore$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('walkThroughActive', false), 2), walkThroughActive = _useStore15[0], setWalkThroughActive = _useStore15[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), cameFromLivingContinuity = _useState3[0], setCameFromLivingContinuity = _useState3[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && isGlossaryPage) {
                var timestamp = sessionStorage.getItem('fromLivingContinuity');
                if (timestamp) {
                    var timeDiff = Date.now() - parseInt(timestamp, 10);
                    var isRecentNavigation = timeDiff < 10000;
                    var hasValidReferrer = false;
                    try {
                        if (document.referrer) {
                            var referrerUrl = new URL(document.referrer);
                            hasValidReferrer = (referrerUrl.pathname === '/living-continuity' || referrerUrl.pathname === '/') && referrerUrl.origin === window.location.origin;
                        }
                    } catch (e) {
                        hasValidReferrer = false;
                    }
                    setCameFromLivingContinuity(isRecentNavigation && hasValidReferrer);
                } else {
                    setCameFromLivingContinuity(false);
                }
            } else if (("TURBOPACK compile-time value", "object") !== 'undefined' && !isGlossaryPage) {
                sessionStorage.removeItem('fromLivingContinuity');
            }
        }
    }["NavigationControls.useEffect"], [
        isGlossaryPage
    ]);
    var handleGoBack = function() {
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.removeItem('fromLivingContinuity');
        }
        window.location.href = '/living-continuity';
    };
    var handleInfoClick = function() {
        setInfoPanelOpen(!infoPanelOpen);
        if (indexPanelOpen) {
            setIndexPanelOpen(false);
        }
    };
    var handleIndexClick = function() {
        setIndexPanelOpen(!indexPanelOpen);
        if (infoPanelOpen) {
            setInfoPanelOpen(false);
        }
    };
    var handleTour = function() {
        setWalkThroughActive(!walkThroughActive);
    };
    var handleSaveImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationControls.useCallback[handleSaveImage]": function() {
            var mainContent = document.querySelector('main.kit-parts-main');
            if (!mainContent) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(mainContent, {
                cacheBust: true
            }).then({
                "NavigationControls.useCallback[handleSaveImage]": function(dataUrl) {
                    var link = document.createElement('a');
                    link.download = 'kit-of-parts.png';
                    link.href = dataUrl;
                    link.click();
                }
            }["NavigationControls.useCallback[handleSaveImage]"])["catch"]({
                "NavigationControls.useCallback[handleSaveImage]": function(err) {
                    console.log(err);
                }
            }["NavigationControls.useCallback[handleSaveImage]"]);
        }
    }["NavigationControls.useCallback[handleSaveImage]"], []);
    var slugifyTitleForUrl = function(title) {
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            if (!isGlossaryPage && submitEntryPanelOpen) {
                setSubmitEntryPanelOpen(false);
            }
        }
    }["NavigationControls.useEffect"], [
        isGlossaryPage,
        submitEntryPanelOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            if (!isGlossaryPage) return;
            if (!submitEntryPanelOpen) {
                var currentHash = ("TURBOPACK compile-time truthy", 1) ? window.location.hash : "TURBOPACK unreachable";
                if (currentHash.endsWith('-submit')) {
                    var keywordSlug = currentHash.replace('#', '').replace('-submit', '');
                    window.history.replaceState(null, '', "#".concat(keywordSlug));
                }
                return;
            }
        }
    }["NavigationControls.useEffect"], [
        submitEntryPanelOpen,
        currentKeywordTitle,
        pathname,
        router,
        isGlossaryPage
    ]);
    var slugifyTitle = function(title) {
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    var handleSubmitEntryClick = function() {
        if (submitEntryPanelOpen && submitFormRef.current) {
            submitFormRef.current();
        } else {
            if (isGlossaryPage && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                var hash = window.location.hash.substring(1);
                var keywordTitle = currentKeywordTitle || 'self-determination';
                if (hash && !hash.endsWith('-submit')) {
                    var keywordElement = document.getElementById(hash);
                    if (keywordElement) {
                        var translations = keywordElement.querySelectorAll('[class*="glossaryTranslation"]');
                        if (translations.length > 0) {
                            var _translations__textContent;
                            var firstTranslation = (_translations__textContent = translations[0].textContent) === null || _translations__textContent === void 0 ? void 0 : _translations__textContent.trim();
                            if (firstTranslation) {
                                keywordTitle = firstTranslation;
                                currentKeywordTitleRef.current = firstTranslation;
                            }
                        }
                    } else {
                        var allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
                        var centeredItem = null;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = allGlossaryItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var item = _step.value;
                                var rect = item.getBoundingClientRect();
                                var viewportCenter = window.innerHeight / 2;
                                var itemCenter = rect.top + rect.height / 2;
                                if (Math.abs(itemCenter - viewportCenter) < 100) {
                                    centeredItem = item;
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                    _iterator["return"]();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        if (centeredItem) {
                            var translations1 = centeredItem.querySelectorAll('[class*="glossaryTranslation"]');
                            if (translations1.length > 0) {
                                var _translations__textContent1;
                                var firstTranslation1 = (_translations__textContent1 = translations1[0].textContent) === null || _translations__textContent1 === void 0 ? void 0 : _translations__textContent1.trim();
                                if (firstTranslation1) {
                                    keywordTitle = firstTranslation1;
                                    currentKeywordTitleRef.current = firstTranslation1;
                                }
                            }
                        }
                    }
                } else {
                    var allGlossaryItems1 = document.querySelectorAll('[data-keyword-id]');
                    var centeredItem1 = null;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = allGlossaryItems1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var item1 = _step1.value;
                            var rect1 = item1.getBoundingClientRect();
                            var viewportCenter1 = window.innerHeight / 2;
                            var itemCenter1 = rect1.top + rect1.height / 2;
                            if (Math.abs(itemCenter1 - viewportCenter1) < 100) {
                                centeredItem1 = item1;
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                                _iterator1["return"]();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    if (centeredItem1) {
                        var translations2 = centeredItem1.querySelectorAll('[class*="glossaryTranslation"]');
                        if (translations2.length > 0) {
                            var _translations__textContent2;
                            var firstTranslation2 = (_translations__textContent2 = translations2[0].textContent) === null || _translations__textContent2 === void 0 ? void 0 : _translations__textContent2.trim();
                            if (firstTranslation2) {
                                keywordTitle = firstTranslation2;
                                currentKeywordTitleRef.current = firstTranslation2;
                            }
                        }
                    }
                }
                var keywordSlug = slugifyTitle(keywordTitle);
                window.history.replaceState(null, '', "#".concat(keywordSlug, "-submit"));
            }
            setSubmitEntryPanelOpen(true);
            if (onSubmitEntry) {
                onSubmitEntry();
            }
        }
    };
    var handleCloseSubmitPanel = function() {
        setSubmitEntryPanelOpen(false);
    };
    var handleInventoryClick = function() {
        if (isKitOfPartsPage) {
            setObjects(!objects);
        }
    };
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), hashInitialized = _useState4[0], setHashInitialized = _useState4[1];
    var updateURLHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationControls.useCallback[updateURLHash]": function() {
            if (!isKitOfPartsPage || !hashInitialized) return;
            var activeItems = [];
            if (bathroom) activeItems.push('bathroom');
            if (boxbed) activeItems.push('boxbed');
            if (front) activeItems.push('front');
            if (kitchen) activeItems.push('kitchen');
            if (k2) activeItems.push('k2');
            if (st1) activeItems.push('st1');
            if (st2) activeItems.push('st2');
            if (stairs) activeItems.push('stairs');
            var hash = activeItems.length > 0 ? "#".concat(activeItems.join('-')) : '';
            if ("TURBOPACK compile-time truthy", 1) {
                window.history.replaceState(null, '', "".concat(pathname).concat(hash));
            }
        }
    }["NavigationControls.useCallback[updateURLHash]"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            if (!isKitOfPartsPage || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            var hash = window.location.hash.slice(1);
            if (hash) {
                var items = hash.split('-');
                items.forEach({
                    "NavigationControls.useEffect": function(item) {
                        switch(item.trim()){
                            case 'bathroom':
                                setBathroom(true);
                                break;
                            case 'boxbed':
                                setBoxbed(true);
                                break;
                            case 'front':
                                setFront(true);
                                break;
                            case 'kitchen':
                                setKitchen(true);
                                break;
                            case 'k2':
                                setK2(true);
                                break;
                            case 'st1':
                                setSt1(true);
                                break;
                            case 'st2':
                                setSt2(true);
                                break;
                            case 'stairs':
                                setStairs(true);
                                break;
                            default:
                                break;
                        }
                    }
                }["NavigationControls.useEffect"]);
            } else {
                setBathroom(true);
                setBoxbed(true);
                setFront(true);
                setKitchen(true);
                setK2(true);
                setSt1(true);
                setSt2(true);
                setStairs(true);
                if ("TURBOPACK compile-time truthy", 1) {
                    window.history.replaceState(null, '', "".concat(pathname, "#bathroom-boxbed-front-kitchen-k2-st1-st2-stairs"));
                }
            }
            setHashInitialized(true);
        }
    }["NavigationControls.useEffect"], [
        isKitOfPartsPage,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControls.useEffect": function() {
            if (!isKitOfPartsPage || !hashInitialized) return;
            updateURLHash();
        }
    }["NavigationControls.useEffect"], [
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
    var handleInventoryItemClick = function(itemType) {
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
    var handleRemoveItem = function(itemType) {
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
    var handleRevert = function() {
        if (!isKitOfPartsPage) return;
        setBathroom(true);
        setBoxbed(true);
        setFront(true);
        setKitchen(true);
        setK2(true);
        setSt1(true);
        setSt2(true);
        setStairs(true);
        setObjectPositionResetTrigger(function(prev) {
            return prev + 1;
        });
    };
    var furnitureItems = isKitOfPartsPage ? [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isGlossaryPage && cameFromLivingContinuity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls-top-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "navigation-button navigation-button-go-back",
                    onClick: handleGoBack,
                    "aria-label": "Go back to living continuity",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "a collective inquiry"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 426,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/SVG/arrow.svg",
                            alt: "",
                            className: "navigation-button-go-back-arrow",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation/NavigationControls.jsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 420,
                columnNumber: 9
            }, this),
            isKitOfPartsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-inventory",
                        onClick: handleInventoryClick,
                        "aria-label": "Inventory",
                        children: "ELEMENTS"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-restart navigation-button-restart-mobile",
                        onClick: handleRevert,
                        "aria-label": "Restart",
                        children: "restart"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 437,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation-controls",
                children: [
                    isGlossaryPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-submit ".concat(submitEntryPanelOpen ? 'navigation-button-open' : ''),
                        onClick: handleSubmitEntryClick,
                        "aria-label": "Submit Entry",
                        children: "TAP TO SUBMIT YOUR ENTRY"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this) : isKitOfPartsPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-rotation ".concat(sceneRotation === true ? 'navigation-button-rotation-active' : ''),
                                onClick: function() {
                                    var currentValue = sceneRotation === true;
                                    setSceneRotation(!currentValue);
                                },
                                "aria-label": sceneRotation === true ? "Stop Rotation" : "Start Rotation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-text",
                                        children: sceneRotation === true ? 'focus' : 'rotate'
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-icon",
                                        children: sceneRotation === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 477,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 481,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-capture ".concat(submitEntryPanelOpen ? 'navigation-button-open' : ''),
                                onClick: handleSaveImage,
                                "aria-label": "Capture",
                                children: "capture"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-restart navigation-button-restart-desktop",
                                onClick: handleRevert,
                                "aria-label": "Restart",
                                children: "restart"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-rotation ".concat(livingContinuityRotation ? 'navigation-button-rotation-active' : ''),
                                onClick: function() {
                                    var currentValue = livingContinuityRotation !== null && livingContinuityRotation !== void 0 ? livingContinuityRotation : false;
                                    setLivingContinuityRotation(!currentValue);
                                },
                                "aria-label": livingContinuityRotation ? "Stop Rotation" : "Start Rotation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-text",
                                        children: livingContinuityRotation ? 'focus' : 'rotate'
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "navigation-button-rotation-icon",
                                        children: livingContinuityRotation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 515,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 514,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 30 30",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23",
                                                stroke: "white",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                                lineNumber: 519,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "navigation-button navigation-button-walk-through ".concat(walkThroughActive ? 'navigation-button-open' : '', " ").concat(submitEntryPanelOpen ? 'navigation-button-open' : ''),
                                onClick: handleTour,
                                "aria-label": walkThroughActive ? "Stop Walk Through" : "Start Walk Through",
                                children: "walk-through"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    isLivingContinuityPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-index",
                        onClick: handleIndexClick,
                        "aria-label": "Index",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "navigation-button-info-text",
                            children: "index"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/NavigationControls.jsx",
                            lineNumber: 539,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 534,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navigation-button navigation-button-pink",
                        onClick: handleInfoClick,
                        "aria-label": "Info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "navigation-button-info-text",
                                children: "info"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "navigation-button-info-icon",
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/NavigationControls.jsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation/NavigationControls.jsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            isLandingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndexPanel, {
                isOpen: indexPanelOpen,
                onClose: function() {
                    return setIndexPanelOpen(false);
                },
                onReopen: function() {
                    return setIndexPanelOpen(true);
                }
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 552,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InfoPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: infoPanelOpen,
                onClose: function() {
                    return setInfoPanelOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$SubmitEntryPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: submitEntryPanelOpen,
                onClose: handleCloseSubmitPanel,
                currentKeywordTitle: currentKeywordTitle || 'self-determination',
                onSubmitRef: submitFormRef
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            isKitOfPartsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$InventoryPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: objects,
                onClose: function() {
                    return setObjects(false);
                },
                furnitureItems: furnitureItems,
                onItemClick: handleInventoryItemClick,
                onRemoveItem: handleRemoveItem
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavigationControls.jsx",
                lineNumber: 566,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(NavigationControls, "2dZshEGmSeW5LG54T1x2HUdkf84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
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
_c = NavigationControls;
var _c;
__turbopack_context__.k.register(_c, "NavigationControls");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$appStores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/appStores.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu/MenuWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gradient$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/gradient/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeButton$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/homeButton/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeTitle$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/homeTitle/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript)");
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
function RootLayout(param) {
    var children = param.children;
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), isPageVisible = _useState[0], setIsPageVisible = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(children), 2), displayChildren = _useState1[0], setDisplayChildren = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), isInitialMount = _useState2[0], setIsInitialMount = _useState2[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                var rootElement = document.getElementById('root');
                if (rootElement) {
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAppElement('#root');
                    } catch (error) {
                        console.warn('Modal.setAppElement warning:', error);
                    }
                }
                var setVh = {
                    "RootLayout.useEffect.setVh": function() {
                        var vh = window.innerHeight * 0.01;
                        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
                    }
                }["RootLayout.useEffect.setVh"];
                setVh();
                window.addEventListener('resize', setVh);
                window.addEventListener('orientationchange', setVh);
                return ({
                    "RootLayout.useEffect": function() {
                        window.removeEventListener('resize', setVh);
                        window.removeEventListener('orientationchange', setVh);
                    }
                })["RootLayout.useEffect"];
            }
        }
    }["RootLayout.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": function() {
            // Skip transition on initial mount
            if (isInitialMount) {
                setIsInitialMount(false);
                return;
            }
            // Trigger fade-out when pathname changes
            setIsPageVisible(false);
            // After fade-out, update children and fade-in using requestAnimationFrame
            var rafId1 = null;
            var rafId2 = null;
            var rafId3 = null;
            var checkTimeRafId = null;
            var startTime = performance.now();
            var checkTime = {
                "RootLayout.useEffect.checkTime": function() {
                    if (performance.now() - startTime >= 350) {
                        rafId1 = requestAnimationFrame({
                            "RootLayout.useEffect.checkTime": function() {
                                rafId2 = requestAnimationFrame({
                                    "RootLayout.useEffect.checkTime": function() {
                                        setDisplayChildren(children);
                                        rafId3 = requestAnimationFrame({
                                            "RootLayout.useEffect.checkTime": function() {
                                                setIsPageVisible(true);
                                            }
                                        }["RootLayout.useEffect.checkTime"]);
                                    }
                                }["RootLayout.useEffect.checkTime"]);
                            }
                        }["RootLayout.useEffect.checkTime"]);
                    } else {
                        checkTimeRafId = requestAnimationFrame(checkTime);
                    }
                }
            }["RootLayout.useEffect.checkTime"];
            checkTimeRafId = requestAnimationFrame(checkTime);
            return ({
                "RootLayout.useEffect": function() {
                    if (rafId1) cancelAnimationFrame(rafId1);
                    if (rafId2) cancelAnimationFrame(rafId2);
                    if (rafId3) cancelAnimationFrame(rafId3);
                    if (checkTimeRafId) cancelAnimationFrame(checkTimeRafId);
                }
            })["RootLayout.useEffect"];
        }
    }["RootLayout.useEffect"], [
        pathname,
        children,
        isInitialMount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": function() {
            // Add page-specific class to body for gradient styling
            var body = document.body;
            var html = document.documentElement;
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
        }
    }["RootLayout.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Living Continuity"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Living Continuity - Interactive 3D Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#1C1C1C"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Living Continuity"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Living Continuity - Interactive 3D Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/SVG/rotate.svg",
                        type: "image/svg+xml"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                style: {
                    backgroundColor: 'var(--color-gray-dark-2)',
                    color: '#ffffff',
                    margin: 0,
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "elements-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gradient$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeButton$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/layout.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square top-left"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square top-right"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "corner-square bottom-left"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2f$MenuWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homeTitle$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(RootLayout, "MtbBhUs33alSXDkjwR0/O4gOdwc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_99285ea8._.js.map