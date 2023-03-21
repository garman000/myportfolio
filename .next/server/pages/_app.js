/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ga/gtag.js":
/*!************************!*\
  !*** ./lib/ga/gtag.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"G-CEVLTMQCXW\";\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2EvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGNBQWMsR0FBR0MsY0FBc0M7QUFFcEUsRUFBNEU7QUFDckUsS0FBSyxDQUFDRyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGNBQWMsRUFBRSxDQUFDO1FBQ3JDUSxTQUFTLEVBQUVILEdBQUc7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFRCxFQUE2RTtBQUN0RSxLQUFLLENBQUNJLEtBQUssSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM1RFAsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBTyxRQUFFRyxNQUFNLEVBQUUsQ0FBQztRQUM1QkksY0FBYyxFQUFFSCxRQUFRO1FBQ3hCSSxXQUFXLEVBQUVILEtBQUs7UUFDbEJDLEtBQUssRUFBRUEsS0FBSztJQUNkLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1vLXJlYWN0Ly4vbGliL2dhL2d0YWcuanM/MDY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRDtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXHJcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHtcclxuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICB9KTtcclxufTsiXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/ga/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_ga_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/ga/gtag */ \"./lib/ga/gtag.js\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const GA_MEASUREMENT_ID = \"G-CEVLTMQCXW\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: true,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n                        rel: \"stylesheet\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"img/favicon.ico\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"personal portfolio react template\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_ga_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}`,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${_lib_ga_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\garma\\\\Desktop\\\\Next.JS\\\\StevenGarman Portfolio\\\\resumo\\\\pages\\\\_app.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUNGO0FBQ0U7QUFDTTtTQUU3QkksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFDQyxpQkFBaUIsR0FBR0MsY0FBc0M7SUFDaEUsTUFBTSx1RUFDSFAsMkNBQVE7Ozs7Ozs7O2tGQUNORCxrREFBSTs7Ozs7Ozs7eUZBQ0ZXLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBOEI7Ozs7Ozs7O3lGQUN6REYsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQVk7d0JBQUNDLElBQUksRUFBQyxDQUEyQjt3QkFBQ0MsV0FBVzs7Ozs7Ozs7eUZBQ2xFSCxDQUFJO3dCQUNIRSxJQUFJLEVBQUMsQ0FBa0w7d0JBQ3ZMRCxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7eUZBRWpCRCxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWlCOzs7Ozs7Ozt5RkFDdENFLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBbUM7Ozs7Ozs7O3lGQUNuRUYsQ0FBSTt3QkFDSEMsSUFBSSxFQUFDLENBQVU7d0JBQ2ZDLE9BQU8sRUFBQyxDQUF1RDs7Ozs7Ozs7OztpRkFHbEVmLG9EQUFNO2dCQUNMZ0IsUUFBUSxFQUFDLENBQWtCO2dCQUMzQkMsR0FBRyxHQUFHLDRDQUE0QyxFQUFFaEIsd0RBQW1COzs7Ozs7OztpRkFFeEVELG9EQUFNO2dCQUNMZ0IsUUFBUSxFQUFDLENBQWtCO2dCQUMzQkcsdUJBQXVCLEVBQUUsQ0FBQztvQkFDeEJDLE1BQU0sR0FBRztnQkFRWCxDQUFDOzs7Ozs7Ozs7bUJBb0JZaEIsU0FBUzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsTUFBTSxTQUFTRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1vLXJlYWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSBcIi4uL2xpYi9nYS9ndGFnXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBHQV9NRUFTVVJFTUVOVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW4gLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJpbWcvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwZXJzb25hbCBwb3J0Zm9saW8gcmVhY3QgdGVtcGxhdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtndGFnLkdBX1RSQUNLSU5HX0lEfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7Z3RhZy5HQV9UUkFDS0lOR19JRH0nLCB7XHJcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3NcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cclxuICAgICAgICB7YFxyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICBmdW5jdGlvbiBndGFnKCl7d2luZG93LmRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgIGd0YWcoJ2NvbmZpZycsICcke0dBX01FQVNVUkVNRU5UX0lEfScpO1xyXG4gIGB9XHJcbiAgICAgIDwvU2NyaXB0PiAqL31cclxuXHJcbiAgICAgIHsvKiA8c2NyaXB0XHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUNFVkxUTVFDWFdcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0PlxyXG4gICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107IGZ1bmN0aW9uIGd0YWcoKVxyXG4gICAgICAgICAge2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyl9XHJcbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpOyBndGFnKCdjb25maWcnLCAnRy1DRVZMVE1RQ1hXJyk7XHJcbiAgICAgICAgPC9zY3JpcHQ+ICovfVxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkZyYWdtZW50IiwiU2NyaXB0IiwiZ3RhZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiR0FfTUVBU1VSRU1FTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Iiwic3RyYXRlZ3kiLCJzcmMiLCJHQV9UUkFDS0lOR19JRCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();