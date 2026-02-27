module.exports = [
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
"[project]/components/navigation/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript)");
;
}),
"[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript) <export default as NavigationControls>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript)");
}),
"[project]/components/glossary/contributions/contributions.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/components/glossary/contributions/Contributions.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/contributions.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/contributions.json (json)");
'use client';
;
;
;
;
const Contributions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Contributions({ currentKeywordId, glossaryData, onSubmitClick }, ref) {
    const [showSubmitForm, setShowSubmitForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            openSubmitForm: ()=>{
                setShowSubmitForm(true);
            }
        }));
    const currentKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!currentKeywordId || !glossaryData || glossaryData.length === 0) {
            return null;
        }
        return glossaryData.find((k)=>k.id === currentKeywordId);
    }, [
        currentKeywordId,
        glossaryData
    ]);
    const keywordTitle = currentKeyword?.title || 'self-determination';
    const keywordId = currentKeyword?.id || 'G1';
    const hasInterpretations = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__["default"][keywordId] !== undefined;
    const interpretations = hasInterpretations ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$json__$28$json$29$__["default"][keywordId].interpretations : [];
    const handleSubmitClick = ()=>{
        const submitButton = document.querySelector('.navigation-button.navigation-button-submit');
        if (submitButton) {
            submitButton.click();
        } else {
            setShowSubmitForm(true);
            if (onSubmitClick) {
                onSubmitClick();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contributionsContainer,
        children: showSubmitForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitForm,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Submit Your Interpretation"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                    onClick: handleSubmitClick,
                    children: [
                        "Share your interpretation of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keywordName,
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
        }, this) : hasInterpretations ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interpretationsContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Interpretations:"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interpretationsList,
                    children: interpretations.map((interpretation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interpretationItem,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interpretationText,
                                        children: [
                                            interpretation.content,
                                            " - ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: interpretation.author
                                            }, void 0, false, {
                                                fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                                lineNumber: 59,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this),
                                index < interpretations.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interpretationDivider
                                }, void 0, false, {
                                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, interpretation.id, true, {
                            fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this))
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
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    children: "Interpretations:"
                }, void 0, false, {
                    fileName: "[project]/components/glossary/contributions/Contributions.jsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                    onClick: handleSubmitClick,
                    children: [
                        "Submit your interpretation of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$contributions$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keywordName,
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
});
const __TURBOPACK__default__export__ = Contributions;
}),
"[project]/components/glossary/glossary.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/components/glossary/GlossaryList.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlossaryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/treeModals/archiveModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/navigation/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavigationControls$3e$__ = __turbopack_context__.i("[project]/components/navigation/NavigationControls.jsx [app-ssr] (ecmascript) <export default as NavigationControls>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$_setup$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/_setup/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$Contributions$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/glossary/contributions/Contributions.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/glossary/glossary.module.scss [app-ssr] (css module)");
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
// Generate alphabet array A-Z and #
const alphabet = [
    ...Array(26)
].map((_, i)=>String.fromCharCode(65 + i));
alphabet.push('#');
// Get first letter of keyword (English translation)
const getFirstLetter = (keyword)=>{
    const firstChar = keyword.title.charAt(0).toUpperCase();
    return /[A-Z]/.test(firstChar) ? firstChar : '#';
};
// Language display order for translations
const LANGUAGE_ORDER = [
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
const LANGUAGE_LABELS = {
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
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [centeredKeywordId, setCenteredKeywordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const centeredKeywordIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [glossaryData, setGlossaryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const alphabetBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [alphabetPreview, setAlphabetPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const alphabetTouchActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const updateCenteredKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((keywordId)=>{
        centeredKeywordIdRef.current = keywordId;
        setCenteredKeywordId(keywordId);
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && keywordId && glossaryData.length > 0) //TURBOPACK unreachable
        ;
    }, [
        glossaryData
    ]);
    const scrollToElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((element, keywordId, retryCount = 0)=>{
        if (!element || retryCount > 15) {
            isProgrammaticScroll.current = false;
            isScrollingRef.current = false;
            return;
        }
        isProgrammaticScroll.current = true;
        isScrollingRef.current = true;
        requestAnimationFrame(()=>{
            const itemRect = element.getBoundingClientRect();
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const itemTop = itemRect.top + currentScrollTop;
            const itemHeight = itemRect.height;
            const viewportHeight = window.innerHeight;
            const targetScrollTop = Math.max(0, itemTop - viewportHeight / 2 + itemHeight / 2);
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
            scrollTimeoutRef.current = setTimeout(()=>{
                const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const newItemRect = element.getBoundingClientRect();
                const newItemTop = newItemRect.top + newScrollTop;
                const newTargetScrollTop = Math.max(0, newItemTop - viewportHeight / 2 + itemHeight / 2);
                const distance = Math.abs(newScrollTop - newTargetScrollTop);
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
                    setTimeout(()=>{
                        isProgrammaticScroll.current = false;
                        isScrollingRef.current = false;
                    }, 200);
                }
            }, 1200);
        });
    }, [
        updateCenteredKeyword
    ]);
    const [allArticles, setAllArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedArticle, setSelectedArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articleModalOpen, setArticleModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contributionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isProgrammaticScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollVelocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [keywordsWithArticles, setKeywordsWithArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        'G6',
        'G8',
        'G9',
        'G10',
        'G11',
        'G22',
        'G30',
        'G52'
    ]);
    const isOverContributionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isOverGlossaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const contributionsRefElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const LANDING_PAGE_NODE_ID = 'A1';
    const currentKeywordTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!centeredKeywordId || !glossaryData.length) {
            return 'self-determination';
        }
        const keyword = glossaryData.find((k)=>k.id === centeredKeywordId);
        return keyword?.title || 'self-determination';
    }, [
        centeredKeywordId,
        glossaryData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        centeredKeywordIdRef.current = centeredKeywordId;
    }, [
        centeredKeywordId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const body = document.body;
        const html = document.documentElement;
        body.classList.add('glossary-page');
        html.classList.add('glossary-page');
        return ()=>{
            body.classList.remove('glossary-page');
            html.classList.remove('glossary-page');
        };
    }, []);
    const handleHashNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((hash)=>{
        if (!hash || !glossaryData.length) return;
        // Prevent interference from other scroll handlers
        if (isScrollingRef.current || isProgrammaticScroll.current) {
            return;
        }
        if (hash.endsWith('-submit')) {
            const keywordSlug = hash.replace('-submit', '');
            const keyword = getKeywordBySlug(keywordSlug);
            if (keyword) {
                const attemptScroll = (attempt = 0)=>{
                    if (attempt > 30) {
                        isProgrammaticScroll.current = false;
                        isScrollingRef.current = false;
                        return;
                    }
                    const element = document.getElementById(keyword.id) || itemRefs.current[keyword.id];
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.height > 0 && rect.width > 0) {
                            // Ensure we're not already scrolling
                            if (!isScrollingRef.current && !isProgrammaticScroll.current) {
                                scrollToElement(element, keyword.id);
                            }
                        } else {
                            setTimeout(()=>attemptScroll(attempt + 1), 100);
                        }
                    } else {
                        setTimeout(()=>attemptScroll(attempt + 1), 100);
                    }
                };
                // Longer delay when coming from modal to ensure DOM is ready
                setTimeout(()=>attemptScroll(), 500);
            }
            return;
        }
        const keyword = getKeywordBySlug(hash);
        if (keyword) {
            const attemptScroll = (attempt = 0)=>{
                if (attempt > 30) {
                    isProgrammaticScroll.current = false;
                    isScrollingRef.current = false;
                    return;
                }
                const element = document.getElementById(keyword.id) || itemRefs.current[keyword.id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.height > 0 && rect.width > 0) {
                        // Ensure we're not already scrolling
                        if (!isScrollingRef.current && !isProgrammaticScroll.current) {
                            scrollToElement(element, keyword.id);
                        }
                    } else {
                        setTimeout(()=>attemptScroll(attempt + 1), 100);
                    }
                } else {
                    setTimeout(()=>attemptScroll(attempt + 1), 100);
                }
            };
            // Longer delay when coming from modal to ensure DOM is ready
            setTimeout(()=>attemptScroll(), 500);
            return;
        }
    }, [
        glossaryData,
        scrollToElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const hash = undefined;
        const handleHashChange = undefined;
    }, [
        glossaryData.length,
        handleHashNavigation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const hash = undefined;
        const isKeywordId = undefined;
        const findArticleByHash = undefined;
        const article = undefined;
    }, [
        glossaryData,
        allArticles
    ]);
    // Load glossary data and articles from both files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        Promise.all([
            fetch('/data/glossary.json').then((res)=>res.json()),
            fetch('/data/nodes.json').then((res)=>res.json())
        ]).then(([glossaryData, nodesData])=>{
            // Set articles
            if (nodesData && nodesData.articles) {
                setAllArticles(nodesData.articles);
            }
            // Merge glossary data with connections from nodes.json
            if (glossaryData && glossaryData.glossary && nodesData && nodesData.glossary) {
                const glossaryMap = new Map();
                nodesData.glossary.forEach((item)=>{
                    glossaryMap.set(item.id, item.connections || []);
                });
                const formattedData = glossaryData.glossary.map((item)=>({
                        id: item.id,
                        title: item.title,
                        glossaryId: item.id,
                        connections: glossaryMap.get(item.id) || item.connections || [],
                        translations: item.translations || {}
                    }));
                setGlossaryData(formattedData);
            } else if (glossaryData && glossaryData.glossary) {
                const formattedData = glossaryData.glossary.map((item)=>({
                        id: item.id,
                        title: item.title,
                        glossaryId: item.id,
                        connections: item.connections || [],
                        translations: item.translations || {}
                    }));
                setGlossaryData(formattedData);
            }
            // Get landing page keywords
            if (nodesData && nodesData.articles) {
                const landingPageArticle = nodesData.articles.find((article)=>article.id === LANDING_PAGE_NODE_ID);
                if (landingPageArticle && landingPageArticle.connections) {
                    const landingPageKeywords = landingPageArticle.connections.filter((conn)=>conn.startsWith('G')).slice(0, 5);
                    if (landingPageKeywords.length > 0) {
                        setKeywordsWithArticles((prev)=>{
                            const combined = [
                                ...prev,
                                ...landingPageKeywords
                            ];
                            return [
                                ...new Set(combined)
                            ];
                        });
                    }
                }
            }
        }).catch((err)=>console.error('Failed to load data:', err));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && glossaryData && glossaryData.length > 0) //TURBOPACK unreachable
        ;
    }, [
        glossaryData.length
    ]);
    // Get related articles for the centered keyword - show for all keywords with connections
    const relatedArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!centeredKeywordId) {
            return [];
        }
        // Find the current keyword in glossary data
        const currentKeyword = glossaryData.find((k)=>k.id === centeredKeywordId);
        if (!currentKeyword) {
            return [];
        }
        // Show articles for any keyword that has connections
        if (!currentKeyword.connections || currentKeyword.connections.length === 0) {
            return [];
        }
        // Get articles that match the connections
        const articleIds = currentKeyword.connections;
        const articles = allArticles.filter((article)=>articleIds.includes(article.id)).map((article)=>{
            const keywords = article.keywords && article.keywords.length > 0 ? article.keywords : article.connectionKeywords ? article.connectionKeywords.map((keyword, index)=>{
                const connectionId = article.connections && article.connections[index];
                if (connectionId) {
                    const keywordInGlossary = glossaryData.find((k)=>k.id === connectionId);
                    if (keywordInGlossary) {
                        const keywordSlug = slugifyTitle(keywordInGlossary.title);
                        return {
                            text: keyword,
                            link: `/glossary#${keywordSlug}`
                        };
                    }
                }
                return {
                    text: keyword,
                    link: null
                };
            }) : [];
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
        });
        return articles;
    }, [
        centeredKeywordId,
        glossaryData,
        allArticles
    ]);
    // Group keywords by first letter
    const groupedKeywords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const groups = {};
        glossaryData.forEach((keyword)=>{
            const letter = getFirstLetter(keyword);
            if (!groups[letter]) {
                groups[letter] = [];
            }
            groups[letter].push(keyword);
        });
        return groups;
    }, [
        glossaryData
    ]);
    // Flatten all keywords in display order (as they appear on screen)
    const allKeywordsInOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const ordered = [];
        const sortedLetters = Object.keys(groupedKeywords).sort((a, b)=>{
            if (a === '#') return 1;
            if (b === '#') return -1;
            return a.localeCompare(b);
        });
        sortedLetters.forEach((letter)=>{
            const keywords = groupedKeywords[letter];
            if (keywords && keywords.length > 0) {
                const sortedKeywords = [
                    ...keywords
                ].sort((a, b)=>a.title.localeCompare(b.title));
                ordered.push(...sortedKeywords);
            }
        });
        return ordered;
    }, [
        groupedKeywords
    ]);
    // Ensure a keyword is always selected when keywords are available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (allKeywordsInOrder.length === 0) return;
        const checkAndSetKeyword = ()=>{
            if (isProgrammaticScroll.current) return;
            const getCurrentKeyword = ()=>{
                const viewportCenter = window.innerHeight / 2;
                let nearestKeyword = null;
                let minDistance = Infinity;
                let firstVisibleKeyword = null;
                allKeywordsInOrder.forEach((keyword)=>{
                    const itemElement = itemRefs.current[keyword.id];
                    if (itemElement) {
                        const itemRect = itemElement.getBoundingClientRect();
                        const itemCenter = itemRect.top + itemRect.height / 2;
                        const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                        if (distanceFromCenter < minDistance) {
                            minDistance = distanceFromCenter;
                            nearestKeyword = keyword;
                        }
                        if (!firstVisibleKeyword && itemRect.top < window.innerHeight && itemRect.bottom > 0) {
                            firstVisibleKeyword = keyword;
                        }
                    }
                });
                return nearestKeyword || firstVisibleKeyword || allKeywordsInOrder[0];
            };
            const currentId = centeredKeywordIdRef.current;
            if (currentId) {
                const keywordExists = allKeywordsInOrder.some((k)=>k.id === currentId);
                if (keywordExists) return;
            }
            const keyword = getCurrentKeyword();
            if (keyword) {
                updateCenteredKeyword(keyword.id);
            } else if (allKeywordsInOrder.length > 0) {
                updateCenteredKeyword(allKeywordsInOrder[0].id);
            }
        };
        const timeoutId = setTimeout(checkAndSetKeyword, 300);
        return ()=>clearTimeout(timeoutId);
    }, [
        allKeywordsInOrder.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (allKeywordsInOrder.length === 0) return;
        const snapToNearestCard = (scrollTop)=>{
            if (allKeywordsInOrder.length === 0 || isScrollingRef.current || isProgrammaticScroll.current) return;
            const viewportCenter = window.innerHeight / 2;
            let nearestKeyword = null;
            let minDistance = Infinity;
            allKeywordsInOrder.forEach((keyword)=>{
                const itemElement = itemRefs.current[keyword.id];
                if (itemElement) {
                    const itemRect = itemElement.getBoundingClientRect();
                    const itemCenter = itemRect.top + itemRect.height / 2;
                    const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                    if (distanceFromCenter < minDistance) {
                        minDistance = distanceFromCenter;
                        nearestKeyword = keyword;
                    }
                }
            });
            if (nearestKeyword) {
                const itemElement = itemRefs.current[nearestKeyword.id];
                if (itemElement) {
                    isScrollingRef.current = true;
                    isProgrammaticScroll.current = true;
                    const itemRect = itemElement.getBoundingClientRect();
                    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const itemTop = itemRect.top + currentScrollTop;
                    const itemHeight = itemRect.height;
                    const viewportHeight = window.innerHeight;
                    const targetScrollTop = itemTop - viewportHeight / 2 + itemHeight / 2;
                    window.scrollTo({
                        top: targetScrollTop,
                        behavior: 'smooth'
                    });
                    updateCenteredKeyword(nearestKeyword.id);
                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }
                    scrollTimeoutRef.current = setTimeout(()=>{
                        isScrollingRef.current = false;
                        isProgrammaticScroll.current = false;
                    }, 500);
                }
            }
        };
        let ticking = false;
        let lastScrollTop = 0;
        let scrollEndTimer = null;
        const getCurrentKeyword = ()=>{
            const isMobile = listRef.current && window.innerWidth <= 812;
            let viewportCenter;
            let containerRect;
            if (isMobile && listRef.current) {
                containerRect = listRef.current.getBoundingClientRect();
                viewportCenter = containerRect.top + containerRect.height / 2;
            } else {
                viewportCenter = window.innerHeight / 2;
            }
            let nearestKeyword = null;
            let minDistance = Infinity;
            let mostVisibleKeyword = null;
            let maxVisibleArea = 0;
            allKeywordsInOrder.forEach((keyword)=>{
                const itemElement = itemRefs.current[keyword.id];
                if (itemElement) {
                    const itemRect = itemElement.getBoundingClientRect();
                    const itemCenter = itemRect.top + itemRect.height / 2;
                    const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
                    if (distanceFromCenter < minDistance) {
                        minDistance = distanceFromCenter;
                        nearestKeyword = keyword;
                    }
                    if (isMobile && containerRect) {
                        const visibleTop = Math.max(itemRect.top, containerRect.top);
                        const visibleBottom = Math.min(itemRect.bottom, containerRect.bottom);
                        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                        const visibleArea = visibleHeight / itemRect.height;
                        if (visibleArea > maxVisibleArea && visibleArea > 0.3) {
                            maxVisibleArea = visibleArea;
                            mostVisibleKeyword = keyword;
                        }
                    } else {
                        const visibleTop = Math.max(itemRect.top, 0);
                        const visibleBottom = Math.min(itemRect.bottom, window.innerHeight);
                        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                        const visibleArea = visibleHeight / itemRect.height;
                        if (visibleArea > maxVisibleArea && visibleArea > 0.3) {
                            maxVisibleArea = visibleArea;
                            mostVisibleKeyword = keyword;
                        }
                    }
                }
            });
            return mostVisibleKeyword || nearestKeyword || (allKeywordsInOrder.length > 0 ? allKeywordsInOrder[0] : null);
        };
        const handleScroll = ()=>{
            if (document.body.hasAttribute('data-restoring-scroll')) {
                ticking = false;
                return;
            }
            // Don't interfere with programmatic scrolling from hash navigation
            if (isProgrammaticScroll.current || isScrollingRef.current) {
                ticking = false;
                return;
            }
            const isMobile = listRef.current && window.innerWidth <= 812;
            const currentScrollTop = isMobile && listRef.current ? listRef.current.scrollTop : window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
            if (allKeywordsInOrder.length === 0) {
                ticking = false;
                return;
            }
            // On mobile, update more frequently for better responsiveness
            if (isMobile) {
                const visibleKeyword = getCurrentKeyword();
                if (visibleKeyword && visibleKeyword.id !== centeredKeywordIdRef.current) {
                    updateCenteredKeyword(visibleKeyword.id);
                }
            } else {
                if (scrollDelta < 5) {
                    ticking = false;
                    return;
                }
                const visibleKeyword = getCurrentKeyword();
                if (visibleKeyword && visibleKeyword.id !== centeredKeywordIdRef.current) {
                    updateCenteredKeyword(visibleKeyword.id);
                }
            }
            lastScrollTop = currentScrollTop;
            ticking = false;
        };
        const onScroll = ()=>{
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };
        const handleScrollEnd = ()=>{
            if (isProgrammaticScroll.current || isScrollingRef.current) return;
            // Always update on scroll end to ensure correct item is highlighted
            const visibleKeyword = getCurrentKeyword();
            if (visibleKeyword) {
                updateCenteredKeyword(visibleKeyword.id);
            }
        };
        const handleMouseMove = (e)=>{
            const x = e.clientX || 0;
            const y = e.clientY || 0;
            isOverContributionsRef.current = checkIfOverContributions(x, y);
            isOverGlossaryRef.current = checkIfOverGlossary(x, y);
        };
        const handleTouchMove = (e)=>{
            if (e.touches && e.touches.length > 0) {
                const touch = e.touches[0];
                const x = touch.clientX || 0;
                const y = touch.clientY || 0;
                isOverContributionsRef.current = checkIfOverContributions(x, y);
                isOverGlossaryRef.current = checkIfOverGlossary(x, y);
            }
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };
        const isMobile = window.innerWidth <= 812;
        let scrollEndTimeout = null;
        const onScrollWithEndDetection = ()=>{
            onScroll();
            if (scrollEndTimeout) {
                clearTimeout(scrollEndTimeout);
            }
            scrollEndTimeout = setTimeout(()=>{
                handleScrollEnd();
            }, 150);
        };
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
        const ensureKeywordSelected = ()=>{
            if (allKeywordsInOrder.length === 0) return;
            const keyword = getCurrentKeyword();
            if (keyword) {
                updateCenteredKeyword(keyword.id);
            } else if (allKeywordsInOrder.length > 0) {
                updateCenteredKeyword(allKeywordsInOrder[0].id);
            }
        };
        setTimeout(()=>{
            if (!isProgrammaticScroll.current) {
                handleScroll();
            }
            ensureKeywordSelected();
        }, 100);
        return ()=>{
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
        };
    }, [
        allKeywordsInOrder,
        groupedKeywords
    ]);
    const scrollToSection = (letter)=>{
        const keywords = groupedKeywords[letter];
        if (keywords && keywords.length > 0) {
            const firstKeywordId = keywords[0].id;
            const attemptScroll = (attempt = 0)=>{
                if (attempt > 20) return;
                const itemElement = itemRefs.current[firstKeywordId] || document.getElementById(firstKeywordId);
                if (itemElement) {
                    const isMobile = window.innerWidth <= 812;
                    if (isMobile && listRef.current) {
                        isProgrammaticScroll.current = true;
                        const containerRect = listRef.current.getBoundingClientRect();
                        const itemRect = itemElement.getBoundingClientRect();
                        const scrollTop = listRef.current.scrollTop;
                        const containerHeight = containerRect.height;
                        const itemHeight = itemRect.height;
                        const itemTopRelative = itemRect.top - containerRect.top + scrollTop;
                        const targetScrollTop = itemTopRelative - containerHeight / 2 + itemHeight / 2;
                        listRef.current.scrollTo({
                            top: Math.max(0, targetScrollTop),
                            behavior: 'smooth'
                        });
                        updateCenteredKeyword(firstKeywordId);
                        setTimeout(()=>{
                            isProgrammaticScroll.current = false;
                        }, 500);
                    } else {
                        scrollToElement(itemElement, firstKeywordId);
                    }
                } else {
                    setTimeout(()=>attemptScroll(attempt + 1), 50);
                }
            };
            attemptScroll();
        }
    };
    const getLetterFromTouch = (clientY)=>{
        if (!alphabetBarRef.current) return null;
        const barRect = alphabetBarRef.current.getBoundingClientRect();
        const buttons = alphabetBarRef.current.querySelectorAll('button:not(:disabled)');
        if (buttons.length === 0) return null;
        let closestLetter = null;
        let minDistance = Infinity;
        buttons.forEach((button)=>{
            const buttonRect = button.getBoundingClientRect();
            const buttonCenter = buttonRect.top + buttonRect.height / 2;
            const distance = Math.abs(clientY - buttonCenter);
            if (distance < minDistance && clientY >= buttonRect.top && clientY <= buttonRect.bottom) {
                minDistance = distance;
                closestLetter = button.textContent.trim();
            }
        });
        return closestLetter;
    };
    const handleAlphabetTouchStart = (e)=>{
        alphabetTouchActiveRef.current = true;
        const touch = e.touches[0];
        const letter = getLetterFromTouch(touch.clientY);
        if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
            setAlphabetPreview(letter);
            scrollToSection(letter);
        }
    };
    const handleAlphabetTouchMove = (e)=>{
        if (!alphabetTouchActiveRef.current) return;
        e.preventDefault();
        const touch = e.touches[0];
        const letter = getLetterFromTouch(touch.clientY);
        if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
            setAlphabetPreview(letter);
            scrollToSection(letter);
        }
    };
    const handleAlphabetTouchEnd = ()=>{
        alphabetTouchActiveRef.current = false;
        setTimeout(()=>{
            setAlphabetPreview(null);
        }, 300);
    };
    const scrollToKeyword = (keywordId)=>{
        if (isProgrammaticScroll.current || isScrollingRef.current) return;
        const itemElement = itemRefs.current[keywordId];
        if (itemElement) {
            scrollToElement(itemElement, keywordId);
        }
    };
    const handleMouseEnterGlossary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        isOverContributionsRef.current = false;
        isOverGlossaryRef.current = true;
    }, []);
    const checkIfOverContributions = (x, y)=>{
        if (!contributionsRefElement.current) {
            const contributionsContainer = document.querySelector('[class*="contributionsContainer"]');
            if (contributionsContainer) {
                contributionsRefElement.current = contributionsContainer;
            }
        }
        if (contributionsRefElement.current) {
            const rect = contributionsRefElement.current.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        }
        return false;
    };
    const checkIfOverGlossary = (x, y)=>{
        const elementToCheck = listRef.current || containerRef.current;
        if (elementToCheck) {
            const rect = elementToCheck.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        }
        return false;
    };
    const handleMouseLeaveGlossary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const x = e?.clientX || e?.nativeEvent?.clientX || 0;
        const y = e?.clientY || e?.nativeEvent?.clientY || 0;
        isOverContributionsRef.current = checkIfOverContributions(x, y);
        isOverGlossaryRef.current = checkIfOverGlossary(x, y);
    }, []);
    // Handle submit click - open submit form in Contributions component
    const handleSubmitClick = ()=>{
        if (contributionsRef.current) {
            contributionsRef.current.openSubmitForm();
        }
    };
    const slugifyTitle = (title)=>{
        return title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    };
    const getKeywordBySlug = (slug)=>{
        return glossaryData.find((k)=>slugifyTitle(k.title) === slug);
    };
    // Handle article image click - open modal
    const handleArticleClick = (article)=>{
        setSelectedArticle(article);
        setArticleModalOpen(true);
        if (article.title) {
            const hash = slugifyTitle(article.title);
            window.history.pushState(null, '', `#${hash}`);
        }
    };
    // Close article modal
    const handleCloseArticleModal = ()=>{
        setArticleModalOpen(false);
        setSelectedArticle(null);
        if (window.location.hash) {
            window.history.pushState(null, '', window.location.pathname);
        }
    };
    const articleImagesStackContent = relatedArticles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImagesStack,
        children: relatedArticles.map((article)=>{
            const isSelected = selectedArticle && selectedArticle.id === article.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImageWrapper} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : ''} ${!article.imageUrl ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePlaceholder : ''}`,
                onClick: ()=>handleArticleClick(article),
                children: article.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: article.imageUrl,
                            alt: "",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImagePlaceholder} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImage}`,
                            "aria-hidden": "true",
                            loading: "eager"
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                            lineNumber: 1040,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: article.imageUrl,
                            alt: article.title || article.id,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImageFull}`,
                            loading: "lazy",
                            onError: (e)=>{
                                e.target.style.display = 'none';
                                const placeholder = e.target.previousElementSibling;
                                if (placeholder) {
                                    placeholder.style.display = 'none';
                                }
                                const wrapper = e.target.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImageWrapper}`);
                                if (wrapper) {
                                    wrapper.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePlaceholder);
                                }
                            },
                            onLoad: (e)=>{
                                e.target.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageLoaded);
                                const placeholder = e.target.previousElementSibling;
                                if (placeholder && placeholder.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleImagePlaceholder)) {
                                    placeholder.style.opacity = '0';
                                    setTimeout(()=>{
                                        placeholder.style.display = 'none';
                                    }, 200);
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                            lineNumber: 1047,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/glossary/GlossaryList.jsx",
                    lineNumber: 1039,
                    columnNumber: 15
                }, this) : null
            }, article.id, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1032,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/glossary/GlossaryList.jsx",
        lineNumber: 1028,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryContainer,
        ref: containerRef,
        children: [
            ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : articleImagesStackContent,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: articleModalOpen,
                onRequestClose: handleCloseArticleModal,
                contentLabel: "Article Modal",
                className: "archive-modal-content",
                overlayClassName: "archive-modal-overlay",
                shouldCloseOnOverlayClick: true,
                shouldCloseOnEsc: true,
                bodyOpenClassName: "archive-modal-open",
                htmlOpenClassName: "archive-modal-open",
                children: selectedArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$treeModals$2f$archiveModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryList,
                ref: listRef,
                onMouseEnter: handleMouseEnterGlossary,
                onMouseLeave: handleMouseLeaveGlossary,
                onTouchStart: (e)=>{
                    isOverContributionsRef.current = false;
                },
                onTouchMove: (e)=>{
                    isOverContributionsRef.current = false;
                },
                onWheel: (e)=>{
                    isOverContributionsRef.current = false;
                },
                children: alphabet.map((letter)=>{
                    const keywords = groupedKeywords[letter];
                    if (!keywords || keywords.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>sectionRefs.current[letter] = el,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossarySection,
                        children: keywords.map((keyword, index)=>{
                            const isCentered = centeredKeywordId === keyword.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: keyword.id,
                                ref: (el)=>itemRefs.current[keyword.id] = el,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryItem} ${isCentered ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryItemCentered : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryItemDimmed}`,
                                onClick: ()=>scrollToKeyword(keyword.id),
                                "data-keyword-id": keyword.id,
                                "data-index": keyword.index,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryItemNumber,
                                        children: keyword.index
                                    }, void 0, false, {
                                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                                        lineNumber: 1153,
                                        columnNumber: 21
                                    }, this),
                                    LANGUAGE_ORDER.map((langKey, langIndex)=>{
                                        const translation = keyword.translations[langKey];
                                        if (!translation) return null;
                                        const isLast = langIndex === LANGUAGE_ORDER.length - 1 || !LANGUAGE_ORDER.slice(langIndex + 1).some((nextLang)=>keyword.translations[nextLang]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryTranslation} ${!isLast ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glossaryTranslationWithBorder : ''}`,
                                            children: translation
                                        }, langKey, false, {
                                            fileName: "[project]/components/glossary/GlossaryList.jsx",
                                            lineNumber: 1160,
                                            columnNumber: 25
                                        }, this);
                                    })
                                ]
                            }, keyword.id, true, {
                                fileName: "[project]/components/glossary/GlossaryList.jsx",
                                lineNumber: 1143,
                                columnNumber: 19
                            }, this);
                        })
                    }, letter, false, {
                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                        lineNumber: 1135,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].alphabetBar,
                ref: alphabetBarRef,
                onTouchStart: handleAlphabetTouchStart,
                onTouchMove: handleAlphabetTouchMove,
                onTouchEnd: handleAlphabetTouchEnd,
                children: alphabet.map((letter)=>{
                    const hasKeywords = groupedKeywords[letter] && groupedKeywords[letter].length > 0;
                    const currentKeyword = centeredKeywordId ? glossaryData.find((k)=>k.id === centeredKeywordId) : null;
                    const currentLetter = currentKeyword ? getFirstLetter(currentKeyword) : null;
                    const isActive = currentLetter === letter;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].alphabetLetter} ${!hasKeywords ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].alphabetLetterDisabled : ''} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].alphabetLetterActive : ''}`,
                        onClick: ()=>hasKeywords && scrollToSection(letter),
                        disabled: !hasKeywords,
                        children: letter
                    }, letter, false, {
                        fileName: "[project]/components/glossary/GlossaryList.jsx",
                        lineNumber: 1187,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1174,
                columnNumber: 7
            }, this),
            alphabetPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$glossary$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].alphabetPreview,
                children: alphabetPreview
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1201,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavigationControls$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavigationControls$3e$__["NavigationControls"], {
                onSubmitEntry: handleSubmitClick,
                currentKeywordTitle: currentKeywordTitle
            }, void 0, false, {
                fileName: "[project]/components/glossary/GlossaryList.jsx",
                lineNumber: 1207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$contributions$2f$Contributions$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/app/glossary/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Glossary page route (/glossary) - Next.js App Router
 * 
 * This page displays the glossary content with keywords in multiple languages.
 */ __turbopack_context__.s([
    "default",
    ()=>GlossaryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$GlossaryList$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/glossary/GlossaryList.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function GlossaryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$glossary$2f$GlossaryList$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/glossary/page.js",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_d959f45b._.js.map