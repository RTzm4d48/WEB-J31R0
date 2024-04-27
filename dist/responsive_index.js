/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/responsive/responsive-index/responsive_index.js":
/*!*******************************************************************!*\
  !*** ./static/js/responsive/responsive-index/responsive_index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_js_screen_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../static/js/screen_size.js */ \"./static/js/screen_size.js\");\n\r\n\r\nvar module_width = (0,_static_js_screen_size_js__WEBPACK_IMPORTED_MODULE_0__.screen_modules_size)()[1];\r\n\r\ndocument.getElementById(\"id_navbar\").style.height = module_width+'px';\r\n\n\n//# sourceURL=webpack://webj31r0/./static/js/responsive/responsive-index/responsive_index.js?");

/***/ }),

/***/ "./static/js/screen_size.js":
/*!**********************************!*\
  !*** ./static/js/screen_size.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screen_modules_size: () => (/* binding */ screen_modules_size)\n/* harmony export */ });\nfunction screen_modules_size() {\r\n    var wind_wid = window.innerWidth;\r\n    var wind_hei = window.innerHeight;\r\n\r\n    var width_module = (wind_wid / 21);\r\n    var width_rounded = width_module.toFixed(0); // REDONDEAMOS\r\n\r\n    var newModule_Y = ((wind_hei - (width_rounded * 10)) / width_rounded) / 2; //NUMERO DE NUEVAS FILAS DE MODULOS EN EL EJE Y\r\n    var newModule_Y_rounded = newModule_Y.toFixed(0); // REDONDEAMSO NUMERO DE NUEVAS FILAS DE MODULOS EN EL EJE Y\r\n\r\n    var width = width_rounded > 95 ? 95 : width_rounded; // TAMAÑO CON EL LIMITE DE 95px MAX\r\n\r\n    var size_list = [newModule_Y_rounded, width];\r\n    return size_list;\r\n}\n\n//# sourceURL=webpack://webj31r0/./static/js/screen_size.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/responsive/responsive-index/responsive_index.js");
/******/ 	
/******/ })()
;