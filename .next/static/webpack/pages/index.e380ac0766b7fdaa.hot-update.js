"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sliderProps.js":
/*!****************************!*\
  !*** ./src/sliderProps.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"portfolioSliderProps\": function() { return /* binding */ portfolioSliderProps; },\n/* harmony export */   \"customersSliderProps\": function() { return /* binding */ customersSliderProps; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,\n    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,\n    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,\n    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade\n]);\nvar portfolioSliderProps = {\n    slidesPerView: 3,\n    loop: true,\n    spaceBetween: 30,\n    speed: 1000,\n    autoplay: {\n        delay: 2500,\n        disableOnInteraction: false\n    },\n    navigation: {\n        nextEl: \".next\",\n        prevEl: \".prev\"\n    },\n    breakpoints: {\n        480: {\n            slidesPerView: 2\n        },\n        1400: {\n            slidesPerView: 3\n        }\n    }\n};\nvar customersSliderProps = {\n    slidesPerView: 1,\n    loop: true,\n    spaceBetween: 30,\n    speed: 1000,\n    // autoplay: {\n    //   delay: 2500,\n    //   disableOnInteraction: false,\n    // },\n    navigation: {\n        nextEl: \".next\",\n        prevEl: \".prev\"\n    }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGVyUHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtlO0FBQ2ZBLGtEQUFjLENBQUMsQ0FBQ0k7SUFBQUEsOENBQVU7SUFBRUQsOENBQVU7SUFBRUYsNENBQVE7SUFBRUMsOENBQVU7QUFBQSxDQUFDO0FBRXRELEdBQUssQ0FBQ0ksb0JBQW9CLEdBQUcsQ0FBQztJQUNuQ0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxvQkFBb0IsRUFBRSxLQUFLO0lBQzdCLENBQUM7SUFDREMsVUFBVSxFQUFFLENBQUM7UUFDWEMsTUFBTSxFQUFFLENBQU87UUFDZkMsTUFBTSxFQUFFLENBQU87SUFDakIsQ0FBQztJQUNEQyxXQUFXLEVBQUUsQ0FBQztRQUNaLEdBQUcsRUFBRSxDQUFDO1lBQ0pWLGFBQWEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQztZQUNMQSxhQUFhLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFDTSxHQUFLLENBQUNXLG9CQUFvQixHQUFHLENBQUM7SUFDbkNYLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsS0FBSyxFQUFFLElBQUk7SUFDWCxFQUFjO0lBQ2QsRUFBaUI7SUFDakIsRUFBaUM7SUFDakMsRUFBSztJQUNMSSxVQUFVLEVBQUUsQ0FBQztRQUNYQyxNQUFNLEVBQUUsQ0FBTztRQUNmQyxNQUFNLEVBQUUsQ0FBTztJQUNqQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2xpZGVyUHJvcHMuanM/NmM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyQ29yZSwge1xyXG4gIEF1dG9wbGF5LFxyXG4gIEVmZmVjdEZhZGUsXHJcbiAgTmF2aWdhdGlvbixcclxuICBQYWdpbmF0aW9uLFxyXG59IGZyb20gXCJzd2lwZXJcIjtcclxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb24sIE5hdmlnYXRpb24sIEF1dG9wbGF5LCBFZmZlY3RGYWRlXSk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9ydGZvbGlvU2xpZGVyUHJvcHMgPSB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiAyNTAwLFxyXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA0ODA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICAxNDAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lcnNTbGlkZXJQcm9wcyA9IHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBzcGVlZDogMTAwMCxcclxuICAvLyBhdXRvcGxheToge1xyXG4gIC8vICAgZGVsYXk6IDI1MDAsXHJcbiAgLy8gICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgLy8gfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLm5leHRcIixcclxuICAgIHByZXZFbDogXCIucHJldlwiLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwiQXV0b3BsYXkiLCJFZmZlY3RGYWRlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJwb3J0Zm9saW9TbGlkZXJQcm9wcyIsInNsaWRlc1BlclZpZXciLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwic3BlZWQiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJjdXN0b21lcnNTbGlkZXJQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sliderProps.js\n");

/***/ })

});