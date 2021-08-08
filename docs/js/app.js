/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.js */ \"./src/js/demo.js\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xuXG4vKiBZb3VyIEpTIENvZGUgZ29lcyBoZXJlICovXG5cbi8qIERlbW8gSlMgKi9cbmltcG9ydCAnLi9kZW1vLmpzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/***/ (() => {

eval("var adTop = document.querySelector('.ad');\nvar adFixed = document.querySelector('#ad__fixed');\nvar adSticky = document.querySelector('#ad__sticky');\nvar adStarts = document.querySelectorAll('.ad__start');\nvar adEnd = document.querySelector('.ad__end');\n\nvar handler = function handler(entries) {\n  console.log(!entries[0].isIntersecting); // entries is an array of observed dom nodes\n  // we're only interested in the first one at [0]\n  // because that's our .sentinal node.\n  // Here observe whether or not that node is in the viewport\n\n  if (!entries[0].isIntersecting) {\n    adTop.classList.add('ad--sticky');\n    adSticky.classList.toggle('ad__content--hidden');\n    adFixed.classList.toggle('ad__content--hidden');\n  } else {\n    adTop.classList.remove('ad--sticky'); // adSticky.classList.toggle('ad__content--hidden')\n    // adFixed.classList.add('ad__content--hidden')\n  }\n};\n\nvar handlerEnd = function handlerEnd(entries) {\n  console.log(!entries[0].isIntersecting); // entries is an array of observed dom nodes\n  // we're only interested in the first one at [0]\n  // because that's our .sentinal node.\n  // Here observe whether or not that node is in the viewport\n\n  if (!entries[0].isIntersecting) {\n    adFixed.classList.add('ad__content--hidden');\n    adSticky.classList.remove('ad__content--hidden');\n  } else {// adSticky.classList.toggle('ad__content--hidden')\n    // adFixed.classList.add('ad__content--hidden')\n  }\n}; // create the observer\n\n\nvar observer = new window.IntersectionObserver(handler);\nvar observerEnd = new window.IntersectionObserver(handlerEnd); // give the observer some dom nodes to keep an eye on\n\nadStarts.forEach(function (element) {\n  return observer.observe(element);\n});\nobserverEnd.observe(adEnd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9kZW1vLmpzP2MzNDgiXSwibmFtZXMiOlsiYWRUb3AiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZEZpeGVkIiwiYWRTdGlja3kiLCJhZFN0YXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZEVuZCIsImhhbmRsZXIiLCJlbnRyaWVzIiwiY29uc29sZSIsImxvZyIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwicmVtb3ZlIiwiaGFuZGxlckVuZCIsIm9ic2VydmVyIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlckVuZCIsImZvckVhY2giLCJlbGVtZW50Iiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSxHQUFFSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBakI7QUFDQSxJQUFNQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUdBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBYTtBQUMzQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxjQUF4QixFQUQyQixDQUczQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLENBQUNILE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csY0FBaEIsRUFBZ0M7QUFDOUJaLElBQUFBLEtBQUssQ0FBQ2EsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsWUFBcEI7QUFDQVYsSUFBQUEsUUFBUSxDQUFDUyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixxQkFBMUI7QUFDQVosSUFBQUEsT0FBTyxDQUFDVSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixxQkFBekI7QUFDRCxHQUpELE1BSU87QUFDTGYsSUFBQUEsS0FBSyxDQUFDYSxTQUFOLENBQWdCRyxNQUFoQixDQUF1QixZQUF2QixFQURLLENBRUw7QUFDQTtBQUNEO0FBQ0YsQ0FoQkQ7O0FBa0JBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNSLE9BQUQsRUFBYTtBQUM1QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxjQUF4QixFQUQ0QixDQUc1QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLENBQUNILE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csY0FBaEIsRUFBZ0M7QUFDOUJULElBQUFBLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IscUJBQXRCO0FBQ0FWLElBQUFBLFFBQVEsQ0FBQ1MsU0FBVCxDQUFtQkcsTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0QsR0FIRCxNQUdPLENBQ0w7QUFDQTtBQUNEO0FBQ0YsQ0FkSCxDLENBZ0JBOzs7QUFDQSxJQUFNRSxRQUFRLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxvQkFBWCxDQUFnQ1osT0FBaEMsQ0FBakI7QUFDQSxJQUFNYSxXQUFXLEdBQUcsSUFBSUYsTUFBTSxDQUFDQyxvQkFBWCxDQUFnQ0gsVUFBaEMsQ0FBcEIsQyxDQUNBOztBQUVBWixRQUFRLENBQUNpQixPQUFULENBQWlCLFVBQUFDLE9BQU87QUFBQSxTQUFJTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJELE9BQWpCLENBQUo7QUFBQSxDQUF4QjtBQUVBRixXQUFXLENBQUNHLE9BQVosQ0FBb0JqQixLQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkJyk7XG5jb25zdCBhZEZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkX19maXhlZCcpO1xuY29uc3QgYWRTdGlja3k9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZF9fc3RpY2t5Jyk7XG5jb25zdCBhZFN0YXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZF9fc3RhcnQnKTtcbmNvbnN0IGFkRW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkX19lbmQnKTtcblxuXG5jb25zdCBoYW5kbGVyID0gKGVudHJpZXMpID0+IHtcbiAgY29uc29sZS5sb2coIWVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpXG5cbiAgLy8gZW50cmllcyBpcyBhbiBhcnJheSBvZiBvYnNlcnZlZCBkb20gbm9kZXNcbiAgLy8gd2UncmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSBmaXJzdCBvbmUgYXQgWzBdXG4gIC8vIGJlY2F1c2UgdGhhdCdzIG91ciAuc2VudGluYWwgbm9kZS5cbiAgLy8gSGVyZSBvYnNlcnZlIHdoZXRoZXIgb3Igbm90IHRoYXQgbm9kZSBpcyBpbiB0aGUgdmlld3BvcnRcbiAgaWYgKCFlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgYWRUb3AuY2xhc3NMaXN0LmFkZCgnYWQtLXN0aWNreScpXG4gICAgYWRTdGlja3kuY2xhc3NMaXN0LnRvZ2dsZSgnYWRfX2NvbnRlbnQtLWhpZGRlbicpXG4gICAgYWRGaXhlZC5jbGFzc0xpc3QudG9nZ2xlKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgfSBlbHNlIHtcbiAgICBhZFRvcC5jbGFzc0xpc3QucmVtb3ZlKCdhZC0tc3RpY2t5JylcbiAgICAvLyBhZFN0aWNreS5jbGFzc0xpc3QudG9nZ2xlKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgICAvLyBhZEZpeGVkLmNsYXNzTGlzdC5hZGQoJ2FkX19jb250ZW50LS1oaWRkZW4nKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZXJFbmQgPSAoZW50cmllcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCFlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKVxuICBcbiAgICAvLyBlbnRyaWVzIGlzIGFuIGFycmF5IG9mIG9ic2VydmVkIGRvbSBub2Rlc1xuICAgIC8vIHdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgZmlyc3Qgb25lIGF0IFswXVxuICAgIC8vIGJlY2F1c2UgdGhhdCdzIG91ciAuc2VudGluYWwgbm9kZS5cbiAgICAvLyBIZXJlIG9ic2VydmUgd2hldGhlciBvciBub3QgdGhhdCBub2RlIGlzIGluIHRoZSB2aWV3cG9ydFxuICAgIGlmICghZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgYWRGaXhlZC5jbGFzc0xpc3QuYWRkKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgICAgIGFkU3RpY2t5LmNsYXNzTGlzdC5yZW1vdmUoJ2FkX19jb250ZW50LS1oaWRkZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZFN0aWNreS5jbGFzc0xpc3QudG9nZ2xlKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgICAgIC8vIGFkRml4ZWQuY2xhc3NMaXN0LmFkZCgnYWRfX2NvbnRlbnQtLWhpZGRlbicpXG4gICAgfVxuICB9XG5cbi8vIGNyZWF0ZSB0aGUgb2JzZXJ2ZXJcbmNvbnN0IG9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVyKVxuY29uc3Qgb2JzZXJ2ZXJFbmQgPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXJFbmQpXG4vLyBnaXZlIHRoZSBvYnNlcnZlciBzb21lIGRvbSBub2RlcyB0byBrZWVwIGFuIGV5ZSBvblxuXG5hZFN0YXJ0cy5mb3JFYWNoKGVsZW1lbnQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSlcblxub2JzZXJ2ZXJFbmQub2JzZXJ2ZShhZEVuZCk7XG5cblxuXG5cblxuIl0sImZpbGUiOiIuL3NyYy9qcy9kZW1vLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/demo.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;