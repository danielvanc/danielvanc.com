"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notes",{

/***/ "./src/pages/notes/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/notes/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ArticlesIndex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.jsx\");\n/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SimpleLayout */ \"./src/components/SimpleLayout.jsx\");\n/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/formatDate */ \"./src/lib/formatDate.js\");\n\n\n\n\n\nfunction Article(param) {\n    var article = param.article;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"md:grid md:grid-cols-4 md:items-baseline\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"md:col-span-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                        href: \"/notes/\".concat(article.slug),\n                        children: article.title\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Eyebrow, {\n                        as: \"time\",\n                        dateTime: article.date,\n                        className: \"md:hidden\",\n                        decorate: true,\n                        children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_4__.formatDate)(article.date)\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {\n                        children: article.description\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Cta, {\n                        children: \"Read article\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Eyebrow, {\n                as: \"time\",\n                dateTime: article.date,\n                className: \"mt-1 hidden md:block\",\n                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_4__.formatDate)(article.date)\n            }, void 0, false, {\n                fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Article;\nvar __N_SSG = true;\nfunction ArticlesIndex(param) {\n    var articles = param.articles;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Notes by Daniel Van Cuylenburg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"All of my current thoughts on web development, tech and life.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__.SimpleLayout, {\n                title: \"Writing on web and front-end dev, tech, and life .\",\n                intro: \"All of my long-form thoughts, updated where necessary, collected in chronological order.\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex max-w-3xl flex-col space-y-16\",\n                        children: articles.map(function(article) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                article: article\n                            }, article.slug, false, {\n                                fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dan/dev/danielvanc.com/src/pages/notes/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c1 = ArticlesIndex;\nvar _c, _c1;\n$RefreshReg$(_c, \"Article\");\n$RefreshReg$(_c1, \"ArticlesIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbm90ZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBRVk7QUFDZ0I7QUFFWDtBQUU3QyxTQUFTSSxPQUFPLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTztJQUN4QixxQkFDRSw4REFBQ0EsU0FBTztRQUFDQyxTQUFTLEVBQUMsMENBQTBDOzswQkFDM0QsOERBQUNMLGtEQUFJO2dCQUFDSyxTQUFTLEVBQUMsZUFBZTs7a0NBQzdCLDhEQUFDTCx3REFBVTt3QkFBQ08sSUFBSSxFQUFFLFNBQVEsQ0FBZSxPQUFiSCxPQUFPLENBQUNJLElBQUksQ0FBRTtrQ0FBR0osT0FBTyxDQUFDSyxLQUFLOzs7Ozs0QkFBYztrQ0FDeEUsOERBQUNULDBEQUFZO3dCQUNYVyxFQUFFLEVBQUMsTUFBTTt3QkFDVEMsUUFBUSxFQUFFUixPQUFPLENBQUNTLElBQUk7d0JBQ3RCUixTQUFTLEVBQUMsV0FBVzt3QkFDckJTLFFBQVE7a0NBRVBaLDJEQUFVLENBQUNFLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDOzs7Ozs0QkFDWjtrQ0FDZiw4REFBQ2IsOERBQWdCO2tDQUFFSSxPQUFPLENBQUNZLFdBQVc7Ozs7OzRCQUFvQjtrQ0FDMUQsOERBQUNoQixzREFBUTtrQ0FBQyxjQUFZOzs7Ozs0QkFBVzs7Ozs7O29CQUM1QjswQkFDUCw4REFBQ0EsMERBQVk7Z0JBQ1hXLEVBQUUsRUFBQyxNQUFNO2dCQUNUQyxRQUFRLEVBQUVSLE9BQU8sQ0FBQ1MsSUFBSTtnQkFDdEJSLFNBQVMsRUFBQyxzQkFBc0I7MEJBRS9CSCwyREFBVSxDQUFDRSxPQUFPLENBQUNTLElBQUksQ0FBQzs7Ozs7b0JBQ1o7Ozs7OztZQUNQLENBQ1g7Q0FDRjtBQXpCUVYsS0FBQUEsT0FBTzs7QUEyQkQsU0FBU2UsYUFBYSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQzlDLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJOztrQ0FDSCw4REFBQ1UsT0FBSztrQ0FBQyxnQ0FBOEI7Ozs7OzRCQUFRO2tDQUM3Qyw4REFBQ1csTUFBSTt3QkFDSEMsSUFBSSxFQUFDLGFBQWE7d0JBQ2xCQyxPQUFPLEVBQUMsK0RBQStEOzs7Ozs0QkFDdkU7Ozs7OztvQkFDRzswQkFDUCw4REFBQ3JCLGtFQUFZO2dCQUNYUSxLQUFLLEVBQUMsb0RBQW9EO2dCQUMxRGMsS0FBSyxFQUFDLDBGQUEwRjswQkFFaEcsNEVBQUNDLEtBQUc7b0JBQUNuQixTQUFTLEVBQUMsbUVBQW1FOzhCQUNoRiw0RUFBQ21CLEtBQUc7d0JBQUNuQixTQUFTLEVBQUMsb0NBQW9DO2tDQUNoRGMsUUFBUSxDQUFDTSxHQUFHLENBQUMsU0FBQ3JCLE9BQU87aURBQ3BCLDhEQUFDRCxPQUFPO2dDQUFvQkMsT0FBTyxFQUFFQSxPQUFPOytCQUE5QkEsT0FBTyxDQUFDSSxJQUFJOzs7O3FDQUFzQjt5QkFDakQsQ0FBQzs7Ozs7NEJBQ0U7Ozs7O3dCQUNGOzs7OztvQkFDTzs7b0JBQ2QsQ0FDSjtDQUNGO0FBeEJ1QlUsTUFBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbm90ZXMvaW5kZXguanN4P2E4OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgeyBTaW1wbGVMYXlvdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvU2ltcGxlTGF5b3V0J1xuaW1wb3J0IHsgZ2V0QWxsQXJ0aWNsZXMgfSBmcm9tICdAL2xpYi9nZXRBbGxBcnRpY2xlcydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAL2xpYi9mb3JtYXREYXRlJ1xuXG5mdW5jdGlvbiBBcnRpY2xlKHsgYXJ0aWNsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtNCBtZDppdGVtcy1iYXNlbGluZVwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tM1wiPlxuICAgICAgICA8Q2FyZC5UaXRsZSBocmVmPXtgL25vdGVzLyR7YXJ0aWNsZS5zbHVnfWB9PnthcnRpY2xlLnRpdGxlfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgPENhcmQuRXllYnJvd1xuICAgICAgICAgIGFzPVwidGltZVwiXG4gICAgICAgICAgZGF0ZVRpbWU9e2FydGljbGUuZGF0ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIlxuICAgICAgICAgIGRlY29yYXRlXG4gICAgICAgID5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZShhcnRpY2xlLmRhdGUpfVxuICAgICAgICA8L0NhcmQuRXllYnJvdz5cbiAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+e2FydGljbGUuZGVzY3JpcHRpb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICA8Q2FyZC5DdGE+UmVhZCBhcnRpY2xlPC9DYXJkLkN0YT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxDYXJkLkV5ZWJyb3dcbiAgICAgICAgYXM9XCJ0aW1lXCJcbiAgICAgICAgZGF0ZVRpbWU9e2FydGljbGUuZGF0ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBoaWRkZW4gbWQ6YmxvY2tcIlxuICAgICAgPlxuICAgICAgICB7Zm9ybWF0RGF0ZShhcnRpY2xlLmRhdGUpfVxuICAgICAgPC9DYXJkLkV5ZWJyb3c+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzSW5kZXgoeyBhcnRpY2xlcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Tm90ZXMgYnkgRGFuaWVsIFZhbiBDdXlsZW5idXJnPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJBbGwgb2YgbXkgY3VycmVudCB0aG91Z2h0cyBvbiB3ZWIgZGV2ZWxvcG1lbnQsIHRlY2ggYW5kIGxpZmUuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTaW1wbGVMYXlvdXRcbiAgICAgICAgdGl0bGU9XCJXcml0aW5nIG9uIHdlYiBhbmQgZnJvbnQtZW5kIGRldiwgdGVjaCwgYW5kIGxpZmUgLlwiXG4gICAgICAgIGludHJvPVwiQWxsIG9mIG15IGxvbmctZm9ybSB0aG91Z2h0cywgdXBkYXRlZCB3aGVyZSBuZWNlc3NhcnksIGNvbGxlY3RlZCBpbiBjaHJvbm9sb2dpY2FsIG9yZGVyLlwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Ym9yZGVyLWwgbWQ6Ym9yZGVyLXppbmMtMTAwIG1kOnBsLTYgbWQ6ZGFyazpib3JkZXItemluYy03MDAvNDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWF4LXctM3hsIGZsZXgtY29sIHNwYWNlLXktMTZcIj5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICAgICAgPEFydGljbGUga2V5PXthcnRpY2xlLnNsdWd9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NpbXBsZUxheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiAoYXdhaXQgZ2V0QWxsQXJ0aWNsZXMoKSkubWFwKCh7IGNvbXBvbmVudCwgLi4ubWV0YSB9KSA9PiBtZXRhKSxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcmQiLCJTaW1wbGVMYXlvdXQiLCJmb3JtYXREYXRlIiwiQXJ0aWNsZSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJUaXRsZSIsImhyZWYiLCJzbHVnIiwidGl0bGUiLCJFeWVicm93IiwiYXMiLCJkYXRlVGltZSIsImRhdGUiLCJkZWNvcmF0ZSIsIkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJDdGEiLCJBcnRpY2xlc0luZGV4IiwiYXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJpbnRybyIsImRpdiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/notes/index.jsx\n"));

/***/ })

});