(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/navigation/index.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript) <export default as NavigationControls>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript)");
}),
"[project]/components/glossary/contributions/contributions.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelButton": "contributions-module-scss-module__Q4w9yG__cancelButton",
  "contributionsContainer": "contributions-module-scss-module__Q4w9yG__contributionsContainer",
  "emptyState": "contributions-module-scss-module__Q4w9yG__emptyState",
  "form": "contributions-module-scss-module__Q4w9yG__form",
  "formActions": "contributions-module-scss-module__Q4w9yG__formActions",
  "interpretationDivider": "contributions-module-scss-module__Q4w9yG__interpretationDivider",
  "interpretationItem": "contributions-module-scss-module__Q4w9yG__interpretationItem",
  "interpretationText": "contributions-module-scss-module__Q4w9yG__interpretationText",
  "interpretationsContent": "contributions-module-scss-module__Q4w9yG__interpretationsContent",
  "interpretationsList": "contributions-module-scss-module__Q4w9yG__interpretationsList",
  "keywordName": "contributions-module-scss-module__Q4w9yG__keywordName",
  "submit-entry-form": "contributions-module-scss-module__Q4w9yG__submit-entry-form",
  "submitButton": "contributions-module-scss-module__Q4w9yG__submitButton",
  "submitForm": "contributions-module-scss-module__Q4w9yG__submitForm",
  "subtitle": "contributions-module-scss-module__Q4w9yG__subtitle",
  "textarea": "contributions-module-scss-module__Q4w9yG__textarea",
  "title": "contributions-module-scss-module__Q4w9yG__title",
});
}),
"[project]/components/glossary/contributions/contributions.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"G4":{"title":"crisis","interpretations":[{"id":1,"content":"When something happens unexpectedly and then causes issues. [originally submitted in Malayalam]","author":"Community Contributor"},{"id":2,"content":"It's a stable or freezed situation, can't move forward as normal","author":"Community Contributor"}]},"G1":{"title":"self-determination","interpretations":[{"id":1,"content":"Being dedicated and motivated to complete a task or goal","author":"Community Contributor"}]},"G2":{"title":"solidarity","interpretations":[{"id":1,"content":"When we are supporting or staying with a group or human thats facing difficult[y]","author":"Community Contributor"}]},"G7":{"title":"erasure","interpretations":[{"id":1,"content":"No identity, a blank space, taking away from a person/space.","author":"Community Contributor"}]},"G9":{"title":"distribution","interpretations":[{"id":1,"content":"Giving eachother","author":"Community Contributor"}]},"G10":{"title":"adapt","interpretations":[{"id":1,"content":"Evolving to a space or anything, and suiting as per the spec.","author":"Community Contributor"}]},"G11":{"title":"participate","interpretations":[{"id":1,"content":"To engage and contribute to an activity or setting","author":"Community Contributor"}]},"G12":{"title":"accessibility","interpretations":[{"id":1,"content":"Easy to obtain","author":"Community Contributor"}]},"G13":{"title":"community","interpretations":[{"id":1,"content":"A social group","author":"Community Contributor"}]},"G14":{"title":"neighbourhood","interpretations":[{"id":1,"content":"The surrounding area or community you live in","author":"Community Contributor"}]},"G15":{"title":"suburban","interpretations":[{"id":1,"content":"Less dense, less populated. peaceful, segregated, fresher air, urban openness, not too convenient for commuting","author":"Community Contributor"}]},"G19":{"title":"narrative","interpretations":[{"id":1,"content":"A story told about a specific event, person or phenomenon","author":"Community Contributor"}]},"G20":{"title":"native","interpretations":[{"id":1,"content":"Someone or something originally from a place, indigenous to that place","author":"Community Contributor"}]},"G21":{"title":"citizen","interpretations":[{"id":1,"content":"A person who is a native of the land or has been in it for generations and has integrated to the society and is part of its culture + traditions","author":"Community Contributor"}]},"G22":{"title":"migrant","interpretations":[{"id":1,"content":"Travel to another country or a person travelling to another country","author":"Community Contributor"}]},"G23":{"title":"foreigner","interpretations":[{"id":1,"content":"People who came from the outside [originally submitted in Malayalam]","author":"Community Contributor"}]},"G24":{"title":"neighbor","interpretations":[{"id":1,"content":"People who live around your home","author":"Community Contributor"}]},"G25":{"title":"density","interpretations":[{"id":1,"content":"How much something can hold","author":"Community Contributor"}]},"G26":{"title":"consumption","interpretations":[{"id":1,"content":"Using space, opportunities. Also used in negative context such as using people, getting consumed by unhealthy environment, useless things etc.","author":"Community Contributor"}]},"G28":{"title":"racial bias","interpretations":[{"id":1,"content":"Thinking someone else is a certain way and has certain beliefs despite not knowing them at all.","author":"Community Contributor"}]},"G29":{"title":"hierarchy","interpretations":[{"id":1,"content":"A system based on differences in power or status","author":"Community Contributor"}]},"G31":{"title":"unregulated","interpretations":[{"id":1,"content":"Not having a regulation or not given a regulation by the authority","author":"Community Contributor"}]}});}),
"[project]/components/glossary/contributions/Contributions.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/contributions.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/contributions.json (json)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var Contributions = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function Contributions(param, ref) {
    var _this = this;
    var currentKeywordId = param.currentKeywordId, glossaryData = param.glossaryData, onSubmitClick = param.onSubmitClick;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), showSubmitForm = _useState[0], setShowSubmitForm = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Contributions.Contributions.useImperativeHandle": function() {
            return {
                openSubmitForm: ({
                    "Contributions.Contributions.useImperativeHandle": function() {
                        setShowSubmitForm(true);
                    }
                })["Contributions.Contributions.useImperativeHandle"]
            };
        }
    }["Contributions.Contributions.useImperativeHandle"]);
    var currentKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Contributions.Contributions.useMemo[currentKeyword]": function() {
            if (!currentKeywordId || !glossaryData || glossaryData.length === 0) {
                return null;
            }
            return glossaryData.find({
                "Contributions.Contributions.useMemo[currentKeyword]": function(k) {
                    return k.id === currentKeywordId;
                }
            }["Contributions.Contributions.useMemo[currentKeyword]"]);
        }
    }["Contributions.Contributions.useMemo[currentKeyword]"], [
        currentKeywordId,
        glossaryData
    ]);
    var keywordTitle = (currentKeyword === null || currentKeyword === void 0 ? void 0 : currentKeyword.title) || 'self-determination';
    var keywordId = (currentKeyword === null || currentKeyword === void 0 ? void 0 : currentKeyword.id) || 'G1';
    var hasInterpretations = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__["default"][keywordId] !== undefined;
    var interpretations = hasInterpretations ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__["default"][keywordId].interpretations : [];
    var handleSubmitClick = function() {
        var submitButton = document.querySelector('.navigation-button.navigation-button-submit');
        if (submitButton) {
            submitButton.click();
        } else {
            setShowSubmitForm(true);
            if (onSubmitClick) {
                onSubmitClick();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contributionsContainer,
        children: showSubmitForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitForm,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Submit Your Interpretation"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                    onClick: handleSubmitClick,
                    children: [
                        "Share your interpretation of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keywordName,
                            children: keywordTitle
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
            lineNumber: 43,
            columnNumber: 9
        }, this) : hasInterpretations ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].interpretationsContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Interpretations:"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].interpretationsList,
                    children: interpretations.map(function(interpretation, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].interpretationItem,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].interpretationText,
                                        children: [
                                            interpretation.content,
                                            " - ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: interpretation.author
                                            }, void 0, false, {
                                                fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                                lineNumber: 59,
                                                columnNumber: 48
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, _this),
                                index < interpretations.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].interpretationDivider
                                }, void 0, false, {
                                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, _this)
                            ]
                        }, interpretation.id, true, {
                            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
            lineNumber: 52,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Interpretations:"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                    onClick: handleSubmitClick,
                    children: [
                        "Submit your interpretation of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keywordName,
                            children: keywordTitle
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/glossary/contributions/Contributions.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}, "P8Uyl1RcEXB7zokUL8MGhMr9zVQ=")), "P8Uyl1RcEXB7zokUL8MGhMr9zVQ=");
_c1 = Contributions;
const __TURBOPACK__default__export__ = Contributions;
var _c, _c1;
__turbopack_context__.k.register(_c, "Contributions$forwardRef");
__turbopack_context__.k.register(_c1, "Contributions");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/glossary/glossary.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "alphabetBar": "glossary-module-scss-module__TSyjpq__alphabetBar",
  "alphabetLetter": "glossary-module-scss-module__TSyjpq__alphabetLetter",
  "alphabetLetterActive": "glossary-module-scss-module__TSyjpq__alphabetLetterActive",
  "alphabetLetterDisabled": "glossary-module-scss-module__TSyjpq__alphabetLetterDisabled",
  "articleImage": "glossary-module-scss-module__TSyjpq__articleImage",
  "articleImageFull": "glossary-module-scss-module__TSyjpq__articleImageFull",
  "articleImagePlaceholder": "glossary-module-scss-module__TSyjpq__articleImagePlaceholder",
  "articleImageWrapper": "glossary-module-scss-module__TSyjpq__articleImageWrapper",
  "articleImagesStack": "glossary-module-scss-module__TSyjpq__articleImagesStack",
  "glossaryContainer": "glossary-module-scss-module__TSyjpq__glossaryContainer",
  "glossaryItem": "glossary-module-scss-module__TSyjpq__glossaryItem",
  "glossaryItemCentered": "glossary-module-scss-module__TSyjpq__glossaryItemCentered",
  "glossaryItemDimmed": "glossary-module-scss-module__TSyjpq__glossaryItemDimmed",
  "glossaryItemNoGap": "glossary-module-scss-module__TSyjpq__glossaryItemNoGap",
  "glossaryItemNumber": "glossary-module-scss-module__TSyjpq__glossaryItemNumber",
  "glossaryList": "glossary-module-scss-module__TSyjpq__glossaryList",
  "glossarySection": "glossary-module-scss-module__TSyjpq__glossarySection",
  "glossaryTranslation": "glossary-module-scss-module__TSyjpq__glossaryTranslation",
  "goBackArrow": "glossary-module-scss-module__TSyjpq__goBackArrow",
  "goBackButton": "glossary-module-scss-module__TSyjpq__goBackButton",
  "imageContainer": "glossary-module-scss-module__TSyjpq__imageContainer",
  "imageLoaded": "glossary-module-scss-module__TSyjpq__imageLoaded",
  "imagePlaceholder": "glossary-module-scss-module__TSyjpq__imagePlaceholder",
  "selected": "glossary-module-scss-module__TSyjpq__selected",
});
}),
"[project]/components/glossary/GlossaryList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlossaryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeModals/archiveModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/navigation/index.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NavigationControls$3e$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-client] (ecmascript) <export default as NavigationControls>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$Contributions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/Contributions.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/glossary/glossary.module.scss [app-client] (css module)");
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
;
;
;
;
// Generate alphabet array A-Z and #
var alphabet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Array(26)).map(function(_, i) {
    return String.fromCharCode(65 + i);
});
alphabet.push('#');
// Get first letter of keyword (English translation)
var getFirstLetter = function(keyword) {
    var firstChar = keyword.title.charAt(0).toUpperCase();
    return /[A-Z]/.test(firstChar) ? firstChar : '#';
};
// Language display order for translations
var LANGUAGE_ORDER = [
    'eng',
    'arabic',
    'hindi',
    'urdu',
    'tagalog',
    'farsi',
    'nepali',
    'bengali',
    'malayalam'
];
// Language labels for display (optional, if needed)
var LANGUAGE_LABELS = {
    eng: 'English',
    arabic: 'Arabic',
    hindi: 'Hindi',
    urdu: 'Urdu',
    tagalog: 'Tagalog',
    farsi: 'Farsi',
    nepali: 'Nepali',
    bengali: 'Bengali',
    malayalam: 'Malayalam'
};
function GlossaryList() {
    var _this = this;
    _s();
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    var itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), centeredKeywordId = _useState[0], setCenteredKeywordId = _useState[1];
    var centeredKeywordIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), glossaryData = _useState1[0], setGlossaryData = _useState1[1];
    var alphabetBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), alphabetPreview = _useState2[0], setAlphabetPreview = _useState2[1];
    var alphabetTouchActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var updateCenteredKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryList.useCallback[updateCenteredKeyword]": function(keywordId) {
            centeredKeywordIdRef.current = keywordId;
            setCenteredKeywordId(keywordId);
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && keywordId && glossaryData.length > 0) {
                var keyword = glossaryData.find({
                    "GlossaryList.useCallback[updateCenteredKeyword].keyword": function(k) {
                        return k.id === keywordId;
                    }
                }["GlossaryList.useCallback[updateCenteredKeyword].keyword"]);
                if (keyword) {
                    var keywordSlug = slugifyTitle(keyword.title);
                    var currentHash = window.location.hash.substring(1);
                    if (!currentHash.endsWith('-submit') && currentHash !== keywordSlug) {
                        window.history.replaceState(null, '', "#".concat(keywordSlug));
                    }
                }
            }
        }
    }["GlossaryList.useCallback[updateCenteredKeyword]"], [
        glossaryData
    ]);
    var scrollToElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryList.useCallback[scrollToElement]": function(element, keywordId) {
            var retryCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            if (!element || retryCount > 15) {
                isProgrammaticScroll.current = false;
                isScrollingRef.current = false;
                return;
            }
            isProgrammaticScroll.current = true;
            isScrollingRef.current = true;
            requestAnimationFrame({
                "GlossaryList.useCallback[scrollToElement]": function() {
                    var itemRect = element.getBoundingClientRect();
                    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var itemTop = itemRect.top + currentScrollTop;
                    var itemHeight = itemRect.height;
                    var viewportHeight = window.innerHeight;
                    var targetScrollTop = Math.max(0, itemTop - viewportHeight / 2 + itemHeight / 2);
                    if (Math.abs(currentScrollTop - targetScrollTop) < 3) {
                        updateCenteredKeyword(keywordId);
                        isProgrammaticScroll.current = false;
                        isScrollingRef.current = false;
                        return;
                    }
                    window.scrollTo({
                        top: targetScrollTop,
                        behavior: 'smooth'
                    });
                    updateCenteredKeyword(keywordId);
                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }
                    scrollTimeoutRef.current = setTimeout({
                        "GlossaryList.useCallback[scrollToElement]": function() {
                            var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            var newItemRect = element.getBoundingClientRect();
                            var newItemTop = newItemRect.top + newScrollTop;
                            var newTargetScrollTop = Math.max(0, newItemTop - viewportHeight / 2 + itemHeight / 2);
                            var distance = Math.abs(newScrollTop - newTargetScrollTop);
                            if (distance > 5 && retryCount < 10) {
                                scrollToElement(element, keywordId, retryCount + 1);
                            } else {
                                // Final scroll to exact position
                                window.scrollTo({
                                    top: newTargetScrollTop,
                                    behavior: 'auto'
                                });
                                updateCenteredKeyword(keywordId);
                                // Keep flags set a bit longer to prevent snap-to-nearest interference
                                setTimeout({
                                    "GlossaryList.useCallback[scrollToElement]": function() {
                                        isProgrammaticScroll.current = false;
                                        isScrollingRef.current = false;
                                    }
                                }["GlossaryList.useCallback[scrollToElement]"], 200);
                            }
                        }
                    }["GlossaryList.useCallback[scrollToElement]"], 1200);
                }
            }["GlossaryList.useCallback[scrollToElement]"]);
        }
    }["GlossaryList.useCallback[scrollToElement]"], [
        updateCenteredKeyword
    ]);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), allArticles = _useState3[0], setAllArticles = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedArticle = _useState4[0], setSelectedArticle = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), articleModalOpen = _useState5[0], setArticleModalOpen = _useState5[1];
    var contributionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isProgrammaticScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var scrollVelocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var lastScrollTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var lastScrollTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var isScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'G6',
        'G8',
        'G9',
        'G10',
        'G11',
        'G22',
        'G30',
        'G52'
    ]), 2), keywordsWithArticles = _useState6[0], setKeywordsWithArticles = _useState6[1];
    var isOverContributionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var isOverGlossaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var contributionsRefElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var LANDING_PAGE_NODE_ID = 'A1';
    var currentKeywordTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryList.useMemo[currentKeywordTitle]": function() {
            if (!centeredKeywordId || !glossaryData.length) {
                return 'self-determination';
            }
            var keyword = glossaryData.find({
                "GlossaryList.useMemo[currentKeywordTitle].keyword": function(k) {
                    return k.id === centeredKeywordId;
                }
            }["GlossaryList.useMemo[currentKeywordTitle].keyword"]);
            return (keyword === null || keyword === void 0 ? void 0 : keyword.title) || 'self-determination';
        }
    }["GlossaryList.useMemo[currentKeywordTitle]"], [
        centeredKeywordId,
        glossaryData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            centeredKeywordIdRef.current = centeredKeywordId;
        }
    }["GlossaryList.useEffect"], [
        centeredKeywordId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            var body = document.body;
            var html = document.documentElement;
            body.classList.add('glossary-page');
            html.classList.add('glossary-page');
            return ({
                "GlossaryList.useEffect": function() {
                    body.classList.remove('glossary-page');
                    html.classList.remove('glossary-page');
                }
            })["GlossaryList.useEffect"];
        }
    }["GlossaryList.useEffect"], []);
    var handleHashNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryList.useCallback[handleHashNavigation]": function(hash) {
            if (!hash || !glossaryData.length) return;
            // Prevent interference from other scroll handlers
            if (isScrollingRef.current || isProgrammaticScroll.current) {
                return;
            }
            if (hash.endsWith('-submit')) {
                var keywordSlug = hash.replace('-submit', '');
                var keyword = getKeywordBySlug(keywordSlug);
                if (keyword) {
                    var attemptScroll = {
                        "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                            var attempt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                            if (attempt > 30) {
                                isProgrammaticScroll.current = false;
                                isScrollingRef.current = false;
                                return;
                            }
                            var element = document.getElementById(keyword.id) || itemRefs.current[keyword.id];
                            if (element) {
                                var rect = element.getBoundingClientRect();
                                if (rect.height > 0 && rect.width > 0) {
                                    // Ensure we're not already scrolling
                                    if (!isScrollingRef.current && !isProgrammaticScroll.current) {
                                        scrollToElement(element, keyword.id);
                                    }
                                } else {
                                    setTimeout({
                                        "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                                            return attemptScroll(attempt + 1);
                                        }
                                    }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"], 100);
                                }
                            } else {
                                setTimeout({
                                    "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                                        return attemptScroll(attempt + 1);
                                    }
                                }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"], 100);
                            }
                        }
                    }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"];
                    // Longer delay when coming from modal to ensure DOM is ready
                    setTimeout({
                        "GlossaryList.useCallback[handleHashNavigation]": function() {
                            return attemptScroll();
                        }
                    }["GlossaryList.useCallback[handleHashNavigation]"], 500);
                }
                return;
            }
            var keyword1 = getKeywordBySlug(hash);
            if (keyword1) {
                var attemptScroll1 = {
                    "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                        var attempt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                        if (attempt > 30) {
                            isProgrammaticScroll.current = false;
                            isScrollingRef.current = false;
                            return;
                        }
                        var element = document.getElementById(keyword1.id) || itemRefs.current[keyword1.id];
                        if (element) {
                            var rect = element.getBoundingClientRect();
                            if (rect.height > 0 && rect.width > 0) {
                                // Ensure we're not already scrolling
                                if (!isScrollingRef.current && !isProgrammaticScroll.current) {
                                    scrollToElement(element, keyword1.id);
                                }
                            } else {
                                setTimeout({
                                    "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                                        return attemptScroll1(attempt + 1);
                                    }
                                }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"], 100);
                            }
                        } else {
                            setTimeout({
                                "GlossaryList.useCallback[handleHashNavigation].attemptScroll": function() {
                                    return attemptScroll1(attempt + 1);
                                }
                            }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"], 100);
                        }
                    }
                }["GlossaryList.useCallback[handleHashNavigation].attemptScroll"];
                // Longer delay when coming from modal to ensure DOM is ready
                setTimeout({
                    "GlossaryList.useCallback[handleHashNavigation]": function() {
                        return attemptScroll1();
                    }
                }["GlossaryList.useCallback[handleHashNavigation]"], 500);
                return;
            }
        }
    }["GlossaryList.useCallback[handleHashNavigation]"], [
        glossaryData,
        scrollToElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !glossaryData.length) return;
            var hash = window.location.hash.substring(1);
            if (hash) {
                handleHashNavigation(hash);
            }
            var handleHashChange = {
                "GlossaryList.useEffect.handleHashChange": function() {
                    var newHash = window.location.hash.substring(1);
                    if (newHash) {
                        handleHashNavigation(newHash);
                    }
                }
            }["GlossaryList.useEffect.handleHashChange"];
            window.addEventListener('hashchange', handleHashChange);
            return ({
                "GlossaryList.useEffect": function() {
                    window.removeEventListener('hashchange', handleHashChange);
                }
            })["GlossaryList.useEffect"];
        }
    }["GlossaryList.useEffect"], [
        glossaryData.length,
        handleHashNavigation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !glossaryData.length || !allArticles.length) return;
            var hash = window.location.hash.substring(1);
            if (!hash) return;
            var isKeywordId = glossaryData.some({
                "GlossaryList.useEffect.isKeywordId": function(k) {
                    return k.id === hash;
                }
            }["GlossaryList.useEffect.isKeywordId"]);
            if (isKeywordId) return;
            var findArticleByHash = {
                "GlossaryList.useEffect.findArticleByHash": function() {
                    return allArticles.find({
                        "GlossaryList.useEffect.findArticleByHash": function(article) {
                            if (!article.title) return false;
                            var articleHash = slugifyTitle(article.title);
                            return articleHash === hash;
                        }
                    }["GlossaryList.useEffect.findArticleByHash"]);
                }
            }["GlossaryList.useEffect.findArticleByHash"];
            var article = findArticleByHash();
            if (article) {
                setTimeout({
                    "GlossaryList.useEffect": function() {
                        var keywords = article.keywords && article.keywords.length > 0 ? article.keywords : article.connectionKeywords ? article.connectionKeywords.map({
                            "GlossaryList.useEffect": function(keyword, index) {
                                var connectionId = article.connections && article.connections[index];
                                if (connectionId) {
                                    var keywordInGlossary = glossaryData.find({
                                        "GlossaryList.useEffect.keywordInGlossary": function(k) {
                                            return k.id === connectionId;
                                        }
                                    }["GlossaryList.useEffect.keywordInGlossary"]);
                                    if (keywordInGlossary) {
                                        var keywordSlug = slugifyTitle(keywordInGlossary.title);
                                        return {
                                            text: keyword,
                                            link: "/glossary#".concat(keywordSlug)
                                        };
                                    }
                                }
                                return {
                                    text: keyword,
                                    link: null
                                };
                            }
                        }["GlossaryList.useEffect"]) : [];
                        setSelectedArticle({
                            id: article.id,
                            title: article.title,
                            author: article.author,
                            imageUrl: article.imageUrl,
                            content: article.content,
                            authorBio: article.authorBio || '',
                            keywords: keywords,
                            connectionKeywords: article.connectionKeywords || []
                        });
                        setArticleModalOpen(true);
                    }
                }["GlossaryList.useEffect"], 1000);
            }
        }
    }["GlossaryList.useEffect"], [
        glossaryData,
        allArticles
    ]);
    // Load glossary data and articles from both files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            Promise.all([
                fetch('/data/glossary.json').then({
                    "GlossaryList.useEffect": function(res) {
                        return res.json();
                    }
                }["GlossaryList.useEffect"]),
                fetch('/data/nodes.json').then({
                    "GlossaryList.useEffect": function(res) {
                        return res.json();
                    }
                }["GlossaryList.useEffect"])
            ]).then({
                "GlossaryList.useEffect": function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), glossaryData = _param[0], nodesData = _param[1];
                    // Set articles
                    if (nodesData && nodesData.articles) {
                        setAllArticles(nodesData.articles);
                    }
                    // Merge glossary data with connections from nodes.json
                    if (glossaryData && glossaryData.glossary && nodesData && nodesData.glossary) {
                        var glossaryMap = new Map();
                        nodesData.glossary.forEach({
                            "GlossaryList.useEffect": function(item) {
                                glossaryMap.set(item.id, item.connections || []);
                            }
                        }["GlossaryList.useEffect"]);
                        var formattedData = glossaryData.glossary.map({
                            "GlossaryList.useEffect.formattedData": function(item) {
                                return {
                                    id: item.id,
                                    title: item.title,
                                    glossaryId: item.id,
                                    connections: glossaryMap.get(item.id) || item.connections || [],
                                    translations: item.translations || {}
                                };
                            }
                        }["GlossaryList.useEffect.formattedData"]);
                        setGlossaryData(formattedData);
                    } else if (glossaryData && glossaryData.glossary) {
                        var formattedData1 = glossaryData.glossary.map({
                            "GlossaryList.useEffect.formattedData": function(item) {
                                return {
                                    id: item.id,
                                    title: item.title,
                                    glossaryId: item.id,
                                    connections: item.connections || [],
                                    translations: item.translations || {}
                                };
                            }
                        }["GlossaryList.useEffect.formattedData"]);
                        setGlossaryData(formattedData1);
                    }
                    // Get landing page keywords
                    if (nodesData && nodesData.articles) {
                        var landingPageArticle = nodesData.articles.find({
                            "GlossaryList.useEffect.landingPageArticle": function(article) {
                                return article.id === LANDING_PAGE_NODE_ID;
                            }
                        }["GlossaryList.useEffect.landingPageArticle"]);
                        if (landingPageArticle && landingPageArticle.connections) {
                            var landingPageKeywords = landingPageArticle.connections.filter({
                                "GlossaryList.useEffect.landingPageKeywords": function(conn) {
                                    return conn.startsWith('G');
                                }
                            }["GlossaryList.useEffect.landingPageKeywords"]).slice(0, 5);
                            if (landingPageKeywords.length > 0) {
                                setKeywordsWithArticles({
                                    "GlossaryList.useEffect": function(prev) {
                                        var combined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(landingPageKeywords));
                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(combined));
                                    }
                                }["GlossaryList.useEffect"]);
                            }
                        }
                    }
                }
            }["GlossaryList.useEffect"])["catch"]({
                "GlossaryList.useEffect": function(err) {
                    return console.error('Failed to load data:', err);
                }
            }["GlossaryList.useEffect"]);
        }
    }["GlossaryList.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && glossaryData && glossaryData.length > 0) {
                // This effect is handled by the hashchange listener above
                // Only handle initial load if no hash is present
                if (!window.location.hash) {
                    setTimeout({
                        "GlossaryList.useEffect": function() {
                            var groups = {};
                            glossaryData.forEach({
                                "GlossaryList.useEffect": function(keyword) {
                                    var letter = getFirstLetter(keyword);
                                    if (!groups[letter]) {
                                        groups[letter] = [];
                                    }
                                    groups[letter].push(keyword);
                                }
                            }["GlossaryList.useEffect"]);
                            Object.keys(groups).forEach({
                                "GlossaryList.useEffect": function(letter) {
                                    groups[letter].sort({
                                        "GlossaryList.useEffect": function(a, b) {
                                            return a.title.localeCompare(b.title);
                                        }
                                    }["GlossaryList.useEffect"]);
                                }
                            }["GlossaryList.useEffect"]);
                            var sortedLetters = Object.keys(groups).sort({
                                "GlossaryList.useEffect.sortedLetters": function(a, b) {
                                    if (a === '#') return 1;
                                    if (b === '#') return -1;
                                    return a.localeCompare(b);
                                }
                            }["GlossaryList.useEffect.sortedLetters"]);
                            var firstLetter = sortedLetters[0];
                            var firstKeyword = groups[firstLetter] && groups[firstLetter][0];
                            if (firstKeyword) {
                                var element = document.getElementById(firstKeyword.id) || itemRefs.current[firstKeyword.id];
                                if (element) {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'instant'
                                    });
                                    setTimeout({
                                        "GlossaryList.useEffect": function() {
                                            scrollToElement(element, firstKeyword.id);
                                        }
                                    }["GlossaryList.useEffect"], 50);
                                }
                            }
                        }
                    }["GlossaryList.useEffect"], 200);
                }
            }
        }
    }["GlossaryList.useEffect"], [
        glossaryData.length
    ]);
    // Get related articles for the centered keyword - show for all keywords with connections
    var relatedArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryList.useMemo[relatedArticles]": function() {
            if (!centeredKeywordId) {
                return [];
            }
            // Find the current keyword in glossary data
            var currentKeyword = glossaryData.find({
                "GlossaryList.useMemo[relatedArticles].currentKeyword": function(k) {
                    return k.id === centeredKeywordId;
                }
            }["GlossaryList.useMemo[relatedArticles].currentKeyword"]);
            if (!currentKeyword) {
                return [];
            }
            // Show articles for any keyword that has connections
            if (!currentKeyword.connections || currentKeyword.connections.length === 0) {
                return [];
            }
            // Get articles that match the connections
            var articleIds = currentKeyword.connections;
            var articles = allArticles.filter({
                "GlossaryList.useMemo[relatedArticles].articles": function(article) {
                    return articleIds.includes(article.id);
                }
            }["GlossaryList.useMemo[relatedArticles].articles"]).map({
                "GlossaryList.useMemo[relatedArticles].articles": function(article) {
                    var keywords = article.keywords && article.keywords.length > 0 ? article.keywords : article.connectionKeywords ? article.connectionKeywords.map({
                        "GlossaryList.useMemo[relatedArticles].articles": function(keyword, index) {
                            var connectionId = article.connections && article.connections[index];
                            if (connectionId) {
                                var keywordInGlossary = glossaryData.find({
                                    "GlossaryList.useMemo[relatedArticles].articles.keywordInGlossary": function(k) {
                                        return k.id === connectionId;
                                    }
                                }["GlossaryList.useMemo[relatedArticles].articles.keywordInGlossary"]);
                                if (keywordInGlossary) {
                                    var keywordSlug = slugifyTitle(keywordInGlossary.title);
                                    return {
                                        text: keyword,
                                        link: "/glossary#".concat(keywordSlug)
                                    };
                                }
                            }
                            return {
                                text: keyword,
                                link: null
                            };
                        }
                    }["GlossaryList.useMemo[relatedArticles].articles"]) : [];
                    return {
                        id: article.id,
                        title: article.title,
                        author: article.author,
                        imageUrl: article.imageUrl,
                        content: article.content,
                        authorBio: article.authorBio || '',
                        keywords: keywords,
                        connectionKeywords: article.connectionKeywords || []
                    };
                }
            }["GlossaryList.useMemo[relatedArticles].articles"]);
            return articles;
        }
    }["GlossaryList.useMemo[relatedArticles]"], [
        centeredKeywordId,
        glossaryData,
        allArticles
    ]);
    // Group keywords by first letter
    var groupedKeywords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryList.useMemo[groupedKeywords]": function() {
            var groups = {};
            glossaryData.forEach({
                "GlossaryList.useMemo[groupedKeywords]": function(keyword) {
                    var letter = getFirstLetter(keyword);
                    if (!groups[letter]) {
                        groups[letter] = [];
                    }
                    groups[letter].push(keyword);
                }
            }["GlossaryList.useMemo[groupedKeywords]"]);
            return groups;
        }
    }["GlossaryList.useMemo[groupedKeywords]"], [
        glossaryData
    ]);
    // Flatten all keywords in display order (as they appear on screen)
    var allKeywordsInOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryList.useMemo[allKeywordsInOrder]": function() {
            var ordered = [];
            var sortedLetters = Object.keys(groupedKeywords).sort({
                "GlossaryList.useMemo[allKeywordsInOrder].sortedLetters": function(a, b) {
                    if (a === '#') return 1;
                    if (b === '#') return -1;
                    return a.localeCompare(b);
                }
            }["GlossaryList.useMemo[allKeywordsInOrder].sortedLetters"]);
            sortedLetters.forEach({
                "GlossaryList.useMemo[allKeywordsInOrder]": function(letter) {
                    var keywords = groupedKeywords[letter];
                    if (keywords && keywords.length > 0) {
                        var _ordered;
                        var sortedKeywords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keywords).sort({
                            "GlossaryList.useMemo[allKeywordsInOrder].sortedKeywords": function(a, b) {
                                return a.title.localeCompare(b.title);
                            }
                        }["GlossaryList.useMemo[allKeywordsInOrder].sortedKeywords"]);
                        (_ordered = ordered).push.apply(_ordered, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sortedKeywords));
                    }
                }
            }["GlossaryList.useMemo[allKeywordsInOrder]"]);
            return ordered;
        }
    }["GlossaryList.useMemo[allKeywordsInOrder]"], [
        groupedKeywords
    ]);
    // Ensure a keyword is always selected when keywords are available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            if (allKeywordsInOrder.length === 0) return;
            var checkAndSetKeyword = {
                "GlossaryList.useEffect.checkAndSetKeyword": function() {
                    if (isProgrammaticScroll.current) return;
                    var getCurrentKeyword = {
                        "GlossaryList.useEffect.checkAndSetKeyword.getCurrentKeyword": function() {
                            var viewportCenter = window.innerHeight / 2;
                            var nearestKeyword = null;
                            var minDistance = Infinity;
                            var firstVisibleKeyword = null;
                            allKeywordsInOrder.forEach({
                                "GlossaryList.useEffect.checkAndSetKeyword.getCurrentKeyword": function(keyword) {
                                    var itemElement = itemRefs.current[keyword.id];
                                    if (itemElement) {
                                        var itemRect = itemElement.getBoundingClientRect();
                                        var itemCenter = itemRect.top + itemRect.height / 2;
                                        var distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                                        if (distanceFromCenter < minDistance) {
                                            minDistance = distanceFromCenter;
                                            nearestKeyword = keyword;
                                        }
                                        if (!firstVisibleKeyword && itemRect.top < window.innerHeight && itemRect.bottom > 0) {
                                            firstVisibleKeyword = keyword;
                                        }
                                    }
                                }
                            }["GlossaryList.useEffect.checkAndSetKeyword.getCurrentKeyword"]);
                            return nearestKeyword || firstVisibleKeyword || allKeywordsInOrder[0];
                        }
                    }["GlossaryList.useEffect.checkAndSetKeyword.getCurrentKeyword"];
                    var currentId = centeredKeywordIdRef.current;
                    if (currentId) {
                        var keywordExists = allKeywordsInOrder.some({
                            "GlossaryList.useEffect.checkAndSetKeyword.keywordExists": function(k) {
                                return k.id === currentId;
                            }
                        }["GlossaryList.useEffect.checkAndSetKeyword.keywordExists"]);
                        if (keywordExists) return;
                    }
                    var keyword = getCurrentKeyword();
                    if (keyword) {
                        updateCenteredKeyword(keyword.id);
                    } else if (allKeywordsInOrder.length > 0) {
                        updateCenteredKeyword(allKeywordsInOrder[0].id);
                    }
                }
            }["GlossaryList.useEffect.checkAndSetKeyword"];
            var timeoutId = setTimeout(checkAndSetKeyword, 300);
            return ({
                "GlossaryList.useEffect": function() {
                    return clearTimeout(timeoutId);
                }
            })["GlossaryList.useEffect"];
        }
    }["GlossaryList.useEffect"], [
        allKeywordsInOrder.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryList.useEffect": function() {
            if (allKeywordsInOrder.length === 0) return;
            var snapToNearestCard = {
                "GlossaryList.useEffect.snapToNearestCard": function(scrollTop) {
                    if (allKeywordsInOrder.length === 0 || isScrollingRef.current || isProgrammaticScroll.current) return;
                    var viewportCenter = window.innerHeight / 2;
                    var nearestKeyword = null;
                    var minDistance = Infinity;
                    allKeywordsInOrder.forEach({
                        "GlossaryList.useEffect.snapToNearestCard": function(keyword) {
                            var itemElement = itemRefs.current[keyword.id];
                            if (itemElement) {
                                var itemRect = itemElement.getBoundingClientRect();
                                var itemCenter = itemRect.top + itemRect.height / 2;
                                var distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                                if (distanceFromCenter < minDistance) {
                                    minDistance = distanceFromCenter;
                                    nearestKeyword = keyword;
                                }
                            }
                        }
                    }["GlossaryList.useEffect.snapToNearestCard"]);
                    if (nearestKeyword) {
                        var itemElement = itemRefs.current[nearestKeyword.id];
                        if (itemElement) {
                            isScrollingRef.current = true;
                            isProgrammaticScroll.current = true;
                            var itemRect = itemElement.getBoundingClientRect();
                            var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            var itemTop = itemRect.top + currentScrollTop;
                            var itemHeight = itemRect.height;
                            var viewportHeight = window.innerHeight;
                            var targetScrollTop = itemTop - viewportHeight / 2 + itemHeight / 2;
                            window.scrollTo({
                                top: targetScrollTop,
                                behavior: 'smooth'
                            });
                            updateCenteredKeyword(nearestKeyword.id);
                            if (scrollTimeoutRef.current) {
                                clearTimeout(scrollTimeoutRef.current);
                            }
                            scrollTimeoutRef.current = setTimeout({
                                "GlossaryList.useEffect.snapToNearestCard": function() {
                                    isScrollingRef.current = false;
                                    isProgrammaticScroll.current = false;
                                }
                            }["GlossaryList.useEffect.snapToNearestCard"], 500);
                        }
                    }
                }
            }["GlossaryList.useEffect.snapToNearestCard"];
            var ticking = false;
            var lastScrollTop = 0;
            var scrollEndTimer = null;
            var getCurrentKeyword = {
                "GlossaryList.useEffect.getCurrentKeyword": function() {
                    var isMobile = listRef.current && window.innerWidth <= 812;
                    var viewportCenter;
                    var containerRect;
                    if (isMobile && listRef.current) {
                        containerRect = listRef.current.getBoundingClientRect();
                        viewportCenter = containerRect.top + containerRect.height / 2;
                    } else {
                        viewportCenter = window.innerHeight / 2;
                    }
                    var nearestKeyword = null;
                    var minDistance = Infinity;
                    var mostVisibleKeyword = null;
                    var maxVisibleArea = 0;
                    allKeywordsInOrder.forEach({
                        "GlossaryList.useEffect.getCurrentKeyword": function(keyword) {
                            var itemElement = itemRefs.current[keyword.id];
                            if (itemElement) {
                                var itemRect = itemElement.getBoundingClientRect();
                                var itemCenter = itemRect.top + itemRect.height / 2;
                                var distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                                if (distanceFromCenter < minDistance) {
                                    minDistance = distanceFromCenter;
                                    nearestKeyword = keyword;
                                }
                                if (isMobile && containerRect) {
                                    var visibleTop = Math.max(itemRect.top, containerRect.top);
                                    var visibleBottom = Math.min(itemRect.bottom, containerRect.bottom);
                                    var visibleHeight = Math.max(0, visibleBottom - visibleTop);
                                    var visibleArea = visibleHeight / itemRect.height;
                                    if (visibleArea > maxVisibleArea && visibleArea > 0.3) {
                                        maxVisibleArea = visibleArea;
                                        mostVisibleKeyword = keyword;
                                    }
                                } else {
                                    var visibleTop1 = Math.max(itemRect.top, 0);
                                    var visibleBottom1 = Math.min(itemRect.bottom, window.innerHeight);
                                    var visibleHeight1 = Math.max(0, visibleBottom1 - visibleTop1);
                                    var visibleArea1 = visibleHeight1 / itemRect.height;
                                    if (visibleArea1 > maxVisibleArea && visibleArea1 > 0.3) {
                                        maxVisibleArea = visibleArea1;
                                        mostVisibleKeyword = keyword;
                                    }
                                }
                            }
                        }
                    }["GlossaryList.useEffect.getCurrentKeyword"]);
                    return mostVisibleKeyword || nearestKeyword || (allKeywordsInOrder.length > 0 ? allKeywordsInOrder[0] : null);
                }
            }["GlossaryList.useEffect.getCurrentKeyword"];
            var handleScroll = {
                "GlossaryList.useEffect.handleScroll": function() {
                    if (document.body.hasAttribute('data-restoring-scroll')) {
                        ticking = false;
                        return;
                    }
                    // Don't interfere with programmatic scrolling from hash navigation
                    if (isProgrammaticScroll.current || isScrollingRef.current) {
                        ticking = false;
                        return;
                    }
                    var isMobile = listRef.current && window.innerWidth <= 812;
                    var currentScrollTop = isMobile && listRef.current ? listRef.current.scrollTop : window.pageYOffset || document.documentElement.scrollTop;
                    var scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
                    if (allKeywordsInOrder.length === 0) {
                        ticking = false;
                        return;
                    }
                    // On mobile, update more frequently for better responsiveness
                    if (isMobile) {
                        var visibleKeyword = getCurrentKeyword();
                        if (visibleKeyword && visibleKeyword.id !== centeredKeywordIdRef.current) {
                            updateCenteredKeyword(visibleKeyword.id);
                        }
                    } else {
                        if (scrollDelta < 5) {
                            ticking = false;
                            return;
                        }
                        var visibleKeyword1 = getCurrentKeyword();
                        if (visibleKeyword1 && visibleKeyword1.id !== centeredKeywordIdRef.current) {
                            updateCenteredKeyword(visibleKeyword1.id);
                        }
                    }
                    lastScrollTop = currentScrollTop;
                    ticking = false;
                }
            }["GlossaryList.useEffect.handleScroll"];
            var onScroll = {
                "GlossaryList.useEffect.onScroll": function() {
                    if (!ticking) {
                        window.requestAnimationFrame(handleScroll);
                        ticking = true;
                    }
                }
            }["GlossaryList.useEffect.onScroll"];
            var handleScrollEnd = {
                "GlossaryList.useEffect.handleScrollEnd": function() {
                    if (isProgrammaticScroll.current || isScrollingRef.current) return;
                    // Always update on scroll end to ensure correct item is highlighted
                    var visibleKeyword = getCurrentKeyword();
                    if (visibleKeyword) {
                        updateCenteredKeyword(visibleKeyword.id);
                    }
                }
            }["GlossaryList.useEffect.handleScrollEnd"];
            var handleMouseMove = {
                "GlossaryList.useEffect.handleMouseMove": function(e) {
                    var x = e.clientX || 0;
                    var y = e.clientY || 0;
                    isOverContributionsRef.current = checkIfOverContributions(x, y);
                    isOverGlossaryRef.current = checkIfOverGlossary(x, y);
                }
            }["GlossaryList.useEffect.handleMouseMove"];
            var handleTouchMove = {
                "GlossaryList.useEffect.handleTouchMove": function(e) {
                    if (e.touches && e.touches.length > 0) {
                        var touch = e.touches[0];
                        var x = touch.clientX || 0;
                        var y = touch.clientY || 0;
                        isOverContributionsRef.current = checkIfOverContributions(x, y);
                        isOverGlossaryRef.current = checkIfOverGlossary(x, y);
                    }
                    if (!ticking) {
                        window.requestAnimationFrame(handleScroll);
                        ticking = true;
                    }
                }
            }["GlossaryList.useEffect.handleTouchMove"];
            var isMobile = window.innerWidth <= 812;
            var scrollEndTimeout = null;
            var onScrollWithEndDetection = {
                "GlossaryList.useEffect.onScrollWithEndDetection": function() {
                    onScroll();
                    if (scrollEndTimeout) {
                        clearTimeout(scrollEndTimeout);
                    }
                    scrollEndTimeout = setTimeout({
                        "GlossaryList.useEffect.onScrollWithEndDetection": function() {
                            handleScrollEnd();
                        }
                    }["GlossaryList.useEffect.onScrollWithEndDetection"], 150);
                }
            }["GlossaryList.useEffect.onScrollWithEndDetection"];
            if (isMobile && listRef.current) {
                listRef.current.addEventListener('scroll', onScrollWithEndDetection, {
                    passive: true
                });
            } else {
                window.addEventListener('scroll', onScrollWithEndDetection, {
                    passive: true
                });
            }
            window.addEventListener('touchmove', handleTouchMove, {
                passive: true
            });
            window.addEventListener('resize', onScroll, {
                passive: true
            });
            window.addEventListener('mousemove', handleMouseMove, {
                passive: true
            });
            var ensureKeywordSelected = {
                "GlossaryList.useEffect.ensureKeywordSelected": function() {
                    if (allKeywordsInOrder.length === 0) return;
                    var keyword = getCurrentKeyword();
                    if (keyword) {
                        updateCenteredKeyword(keyword.id);
                    } else if (allKeywordsInOrder.length > 0) {
                        updateCenteredKeyword(allKeywordsInOrder[0].id);
                    }
                }
            }["GlossaryList.useEffect.ensureKeywordSelected"];
            setTimeout({
                "GlossaryList.useEffect": function() {
                    if (!isProgrammaticScroll.current) {
                        handleScroll();
                    }
                    ensureKeywordSelected();
                }
            }["GlossaryList.useEffect"], 100);
            return ({
                "GlossaryList.useEffect": function() {
                    if (isMobile && listRef.current) {
                        listRef.current.removeEventListener('scroll', onScrollWithEndDetection);
                    } else {
                        window.removeEventListener('scroll', onScrollWithEndDetection);
                    }
                    window.removeEventListener('touchmove', handleTouchMove);
                    window.removeEventListener('resize', onScroll);
                    window.removeEventListener('mousemove', handleMouseMove);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    if (scrollEndTimeout) {
                        clearTimeout(scrollEndTimeout);
                    }
                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }
                }
            })["GlossaryList.useEffect"];
        }
    }["GlossaryList.useEffect"], [
        allKeywordsInOrder,
        groupedKeywords
    ]);
    var scrollToSection = function(letter) {
        var keywords = groupedKeywords[letter];
        if (keywords && keywords.length > 0) {
            var firstKeywordId = keywords[0].id;
            var attemptScroll = function() {
                var attempt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                if (attempt > 20) return;
                var itemElement = itemRefs.current[firstKeywordId] || document.getElementById(firstKeywordId);
                if (itemElement) {
                    var isMobile = window.innerWidth <= 812;
                    if (isMobile && listRef.current) {
                        isProgrammaticScroll.current = true;
                        var containerRect = listRef.current.getBoundingClientRect();
                        var itemRect = itemElement.getBoundingClientRect();
                        var scrollTop = listRef.current.scrollTop;
                        var containerHeight = containerRect.height;
                        var itemHeight = itemRect.height;
                        var itemTopRelative = itemRect.top - containerRect.top + scrollTop;
                        var targetScrollTop = itemTopRelative - containerHeight / 2 + itemHeight / 2;
                        listRef.current.scrollTo({
                            top: Math.max(0, targetScrollTop),
                            behavior: 'smooth'
                        });
                        updateCenteredKeyword(firstKeywordId);
                        setTimeout(function() {
                            isProgrammaticScroll.current = false;
                        }, 500);
                    } else {
                        scrollToElement(itemElement, firstKeywordId);
                    }
                } else {
                    setTimeout(function() {
                        return attemptScroll(attempt + 1);
                    }, 50);
                }
            };
            attemptScroll();
        }
    };
    var getLetterFromTouch = function(clientY) {
        if (!alphabetBarRef.current) return null;
        var barRect = alphabetBarRef.current.getBoundingClientRect();
        var buttons = alphabetBarRef.current.querySelectorAll('button:not(:disabled)');
        if (buttons.length === 0) return null;
        var closestLetter = null;
        var minDistance = Infinity;
        buttons.forEach(function(button) {
            var buttonRect = button.getBoundingClientRect();
            var buttonCenter = buttonRect.top + buttonRect.height / 2;
            var distance = Math.abs(clientY - buttonCenter);
            if (distance < minDistance && clientY >= buttonRect.top && clientY <= buttonRect.bottom) {
                minDistance = distance;
                closestLetter = button.textContent.trim();
            }
        });
        return closestLetter;
    };
    var handleAlphabetTouchStart = function(e) {
        alphabetTouchActiveRef.current = true;
        var touch = e.touches[0];
        var letter = getLetterFromTouch(touch.clientY);
        if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
            setAlphabetPreview(letter);
            scrollToSection(letter);
        }
    };
    var handleAlphabetTouchMove = function(e) {
        if (!alphabetTouchActiveRef.current) return;
        e.preventDefault();
        var touch = e.touches[0];
        var letter = getLetterFromTouch(touch.clientY);
        if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
            setAlphabetPreview(letter);
            scrollToSection(letter);
        }
    };
    var handleAlphabetTouchEnd = function() {
        alphabetTouchActiveRef.current = false;
        setTimeout(function() {
            setAlphabetPreview(null);
        }, 300);
    };
    var scrollToKeyword = function(keywordId) {
        if (isProgrammaticScroll.current || isScrollingRef.current) return;
        var itemElement = itemRefs.current[keywordId];
        if (itemElement) {
            scrollToElement(itemElement, keywordId);
        }
    };
    var handleMouseEnterGlossary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryList.useCallback[handleMouseEnterGlossary]": function() {
            isOverContributionsRef.current = false;
            isOverGlossaryRef.current = true;
        }
    }["GlossaryList.useCallback[handleMouseEnterGlossary]"], []);
    var checkIfOverContributions = function(x, y) {
        if (!contributionsRefElement.current) {
            var contributionsContainer = document.querySelector('[class*="contributionsContainer"]');
            if (contributionsContainer) {
                contributionsRefElement.current = contributionsContainer;
            }
        }
        if (contributionsRefElement.current) {
            var rect = contributionsRefElement.current.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        }
        return false;
    };
    var checkIfOverGlossary = function(x, y) {
        var elementToCheck = listRef.current || containerRef.current;
        if (elementToCheck) {
            var rect = elementToCheck.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        }
        return false;
    };
    var handleMouseLeaveGlossary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlossaryList.useCallback[handleMouseLeaveGlossary]": function(e) {
            var _e_nativeEvent, _e_nativeEvent1;
            var x = (e === null || e === void 0 ? void 0 : e.clientX) || (e === null || e === void 0 ? void 0 : (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : _e_nativeEvent.clientX) || 0;
            var y = (e === null || e === void 0 ? void 0 : e.clientY) || (e === null || e === void 0 ? void 0 : (_e_nativeEvent1 = e.nativeEvent) === null || _e_nativeEvent1 === void 0 ? void 0 : _e_nativeEvent1.clientY) || 0;
            isOverContributionsRef.current = checkIfOverContributions(x, y);
            isOverGlossaryRef.current = checkIfOverGlossary(x, y);
        }
    }["GlossaryList.useCallback[handleMouseLeaveGlossary]"], []);
    // Handle submit click - open submit form in Contributions component
    var handleSubmitClick = function() {
        if (contributionsRef.current) {
            contributionsRef.current.openSubmitForm();
        }
    };
    var slugifyTitle = function(title) {
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    var getKeywordBySlug = function(slug) {
        return glossaryData.find(function(k) {
            return slugifyTitle(k.title) === slug;
        });
    };
    // Handle article image click - open modal
    var handleArticleClick = function(article) {
        setSelectedArticle(article);
        setArticleModalOpen(true);
        if (article.title) {
            var hash = slugifyTitle(article.title);
            window.history.pushState(null, '', "#".concat(hash));
        }
    };
    // Close article modal
    var handleCloseArticleModal = function() {
        setArticleModalOpen(false);
        setSelectedArticle(null);
        if (window.location.hash) {
            window.history.pushState(null, '', window.location.pathname);
        }
    };
    var articleImagesStackContent = relatedArticles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImagesStack,
        children: relatedArticles.map(function(article) {
            var isSelected = selectedArticle && selectedArticle.id === article.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImageWrapper, " ").concat(isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : '', " ").concat(!article.imageUrl ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder : ''),
                onClick: function() {
                    return handleArticleClick(article);
                },
                children: article.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: article.imageUrl,
                            alt: "",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImagePlaceholder, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImage),
                            "aria-hidden": "true",
                            loading: "eager"
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                            lineNumber: 1040,
                            columnNumber: 17
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: article.imageUrl,
                            alt: article.title || article.id,
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImage, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImageFull),
                            loading: "lazy",
                            onError: function(e) {
                                e.target.style.display = 'none';
                                var placeholder = e.target.previousElementSibling;
                                if (placeholder) {
                                    placeholder.style.display = 'none';
                                }
                                var wrapper = e.target.closest(".".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImageWrapper));
                                if (wrapper) {
                                    wrapper.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder);
                                }
                            },
                            onLoad: function(e) {
                                e.target.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageLoaded);
                                var placeholder = e.target.previousElementSibling;
                                if (placeholder && placeholder.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleImagePlaceholder)) {
                                    placeholder.style.opacity = '0';
                                    setTimeout(function() {
                                        placeholder.style.display = 'none';
                                    }, 200);
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                            lineNumber: 1047,
                            columnNumber: 17
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/glossary/GlossaryList.jsx",
                    lineNumber: 1039,
                    columnNumber: 15
                }, _this) : null
            }, article.id, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1032,
                columnNumber: 11
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/components/glossary/GlossaryList.jsx",
        lineNumber: 1028,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryContainer,
        ref: containerRef,
        children: [
            ("TURBOPACK compile-time value", "object") !== 'undefined' && articleImagesStackContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(articleImagesStackContent, document.body) : articleImagesStackContent,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: articleModalOpen,
                onRequestClose: handleCloseArticleModal,
                contentLabel: "Article Modal",
                className: "archive-modal-content",
                overlayClassName: "archive-modal-overlay",
                shouldCloseOnOverlayClick: true,
                shouldCloseOnEsc: true,
                bodyOpenClassName: "archive-modal-open",
                htmlOpenClassName: "archive-modal-open",
                children: selectedArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: selectedArticle.title,
                    author: selectedArticle.author,
                    content: selectedArticle.content,
                    img: selectedArticle.imageUrl,
                    authorBio: selectedArticle.authorBio,
                    keywords: selectedArticle.keywords,
                    closeModal: handleCloseArticleModal
                }, void 0, false, {
                    fileName: "[project]/components/glossary/GlossaryList.jsx",
                    lineNumber: 1102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1090,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryList,
                ref: listRef,
                onMouseEnter: handleMouseEnterGlossary,
                onMouseLeave: handleMouseLeaveGlossary,
                onTouchStart: function(e) {
                    isOverContributionsRef.current = false;
                },
                onTouchMove: function(e) {
                    isOverContributionsRef.current = false;
                },
                onWheel: function(e) {
                    isOverContributionsRef.current = false;
                },
                children: alphabet.map(function(letter) {
                    var keywords = groupedKeywords[letter];
                    if (!keywords || keywords.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: function(el) {
                            return sectionRefs.current[letter] = el;
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossarySection,
                        children: keywords.map(function(keyword, index) {
                            var isCentered = centeredKeywordId === keyword.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: keyword.id,
                                ref: function(el) {
                                    return itemRefs.current[keyword.id] = el;
                                },
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryItem, " ").concat(isCentered ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryItemCentered : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryItemDimmed),
                                onClick: function() {
                                    return scrollToKeyword(keyword.id);
                                },
                                "data-keyword-id": keyword.id,
                                "data-index": keyword.index,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryItemNumber,
                                        children: keyword.index
                                    }, void 0, false, {
                                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                                        lineNumber: 1153,
                                        columnNumber: 21
                                    }, _this),
                                    LANGUAGE_ORDER.map(function(langKey, langIndex) {
                                        var translation = keyword.translations[langKey];
                                        if (!translation) return null;
                                        var isLast = langIndex === LANGUAGE_ORDER.length - 1 || !LANGUAGE_ORDER.slice(langIndex + 1).some(function(nextLang) {
                                            return keyword.translations[nextLang];
                                        });
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryTranslation, " ").concat(!isLast ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glossaryTranslationWithBorder : ''),
                                            children: translation
                                        }, langKey, false, {
                                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                                            lineNumber: 1160,
                                            columnNumber: 25
                                        }, _this);
                                    })
                                ]
                            }, keyword.id, true, {
                                fileName: "[project]/components/glossary/GlossaryList.jsx",
                                lineNumber: 1143,
                                columnNumber: 19
                            }, _this);
                        })
                    }, letter, false, {
                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                        lineNumber: 1135,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alphabetBar,
                ref: alphabetBarRef,
                onTouchStart: handleAlphabetTouchStart,
                onTouchMove: handleAlphabetTouchMove,
                onTouchEnd: handleAlphabetTouchEnd,
                children: alphabet.map(function(letter) {
                    var hasKeywords = groupedKeywords[letter] && groupedKeywords[letter].length > 0;
                    var currentKeyword = centeredKeywordId ? glossaryData.find(function(k) {
                        return k.id === centeredKeywordId;
                    }) : null;
                    var currentLetter = currentKeyword ? getFirstLetter(currentKeyword) : null;
                    var isActive = currentLetter === letter;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alphabetLetter, " ").concat(!hasKeywords ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alphabetLetterDisabled : '', " ").concat(isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alphabetLetterActive : ''),
                        onClick: function() {
                            return hasKeywords && scrollToSection(letter);
                        },
                        disabled: !hasKeywords,
                        children: letter
                    }, letter, false, {
                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                        lineNumber: 1187,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1174,
                columnNumber: 7
            }, this),
            alphabetPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alphabetPreview,
                children: alphabetPreview
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1201,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NavigationControls$3e$__["NavigationControls"], {
                onSubmitEntry: handleSubmitClick,
                currentKeywordTitle: currentKeywordTitle
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$Contributions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: contributionsRef,
                currentKeywordId: centeredKeywordId,
                glossaryData: glossaryData,
                onSubmitClick: handleSubmitClick
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/glossary/GlossaryList.jsx",
        lineNumber: 1083,
        columnNumber: 5
    }, this);
}
_s(GlossaryList, "9muWI9o1pZCeBO8YlRd4Qbk5vPs=");
_c = GlossaryList;
var _c;
__turbopack_context__.k.register(_c, "GlossaryList");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/glossary/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Glossary page route (/glossary) - Next.js App Router
 * 
 * This page displays the glossary content with keywords in multiple languages.
 */ __turbopack_context__.s([
    "default",
    ()=>GlossaryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$GlossaryList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/glossary/GlossaryList.jsx [app-client] (ecmascript)");
'use client';
;
;
;
function GlossaryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$GlossaryList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/glossary/page.js",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = GlossaryPage;
var _c;
__turbopack_context__.k.register(_c, "GlossaryPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2dba7065._.js.map