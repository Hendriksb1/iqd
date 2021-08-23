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

/***/ "./src/js/adHeader.js":
/*!****************************!*\
  !*** ./src/js/adHeader.js ***!
  \****************************/
/***/ (() => {

eval("var ad = document.querySelector('.ad');\nvar adCloseBtn = document.querySelector('.ad__header');\n\nvar hideHeader = function hideHeader() {\n  ad.classList.add('ad--hidden');\n  ad.classList.remove('ad--active');\n};\n\nadCloseBtn.addEventListener(\"click\", hideHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hZEhlYWRlci5qcz9hZWMwIl0sIm5hbWVzIjpbImFkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRDbG9zZUJ0biIsImhpZGVIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7O0FBRUEsSUFBSUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QkosRUFBQUEsRUFBRSxDQUFDSyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsWUFBakI7QUFDQU4sRUFBQUEsRUFBRSxDQUFDSyxTQUFILENBQWFFLE1BQWIsQ0FBb0IsWUFBcEI7QUFDSCxDQUhEOztBQUtBSixVQUFVLENBQUNLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDSixVQUFyQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkJyk7XG5jb25zdCBhZENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkX19oZWFkZXInKTtcblxubGV0IGhpZGVIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgYWQuY2xhc3NMaXN0LmFkZCgnYWQtLWhpZGRlbicpXG4gICAgYWQuY2xhc3NMaXN0LnJlbW92ZSgnYWQtLWFjdGl2ZScpXG59XG5cbmFkQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVIZWFkZXIpOyJdLCJmaWxlIjoiLi9zcmMvanMvYWRIZWFkZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/adHeader.js\n");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ \"./src/js/fetch.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fetch_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer.js */ \"./src/js/observer.js\");\n/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_observer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _adHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adHeader.js */ \"./src/js/adHeader.js\");\n/* harmony import */ var _adHeader_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adHeader_js__WEBPACK_IMPORTED_MODULE_3__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBRUE7O0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xuXG4vKiBZb3VyIEpTIENvZGUgZ29lcyBoZXJlICovXG5cbi8qIERlbW8gSlMgKi9cbmltcG9ydCAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXIuanMnO1xuaW1wb3J0ICcuL2FkSGVhZGVyLmpzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/fetch.js":
/*!*************************!*\
  !*** ./src/js/fetch.js ***!
  \*************************/
/***/ (() => {

eval("var frames = document.getElementsByClassName(\"ad__frame\");\nvar url = \"https://dog.ceo/api/breeds/image/random\";\n\nfunction getRandomImage() {\n  // we are using fetch api to make rest api calls. you can use also axios or ajax.\n  // we are also using promises here. \n  fetch(url).then(function (response) {\n    // we get raw response. need to first convert it into json format so we can use the data easily\n    return response.json();\n  }).then(function (json) {\n    // now we got the json . we can use this to update any data in html \n    var imageUrl = json.message;\n\n    for (var index = 0; index < frames.length; index++) {\n      frames[index].setAttribute(\"src\", imageUrl);\n    }\n  }).catch(function (error) {\n    // if any error occurs like no internet connection then this callback will be called\n    console.log(error);\n  });\n}\n\ngetRandomImage();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9mZXRjaC5qcz9kMWZlIl0sIm5hbWVzIjpbImZyYW1lcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInVybCIsImdldFJhbmRvbUltYWdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaW1hZ2VVcmwiLCJtZXNzYWdlIiwiaW5kZXgiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUcseUNBQVo7O0FBRUEsU0FBU0MsY0FBVCxHQUEwQjtBQUV0QjtBQUNBO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ0YsR0FBRCxDQUFMLENBQ0tHLElBREwsQ0FDVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCO0FBQ0EsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQUpMLEVBS0tGLElBTEwsQ0FLVSxVQUFVRSxJQUFWLEVBQWdCO0FBQ2xCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQXBCOztBQUVBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBbkMsRUFBMkNELEtBQUssRUFBaEQsRUFBb0Q7QUFDaERYLE1BQUFBLE1BQU0sQ0FBQ1csS0FBRCxDQUFOLENBQWNFLFlBQWQsQ0FBMkIsS0FBM0IsRUFBa0NKLFFBQWxDO0FBQ0g7QUFFSixHQWJMLEVBY0tLLEtBZEwsQ0FjVyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsR0FqQkw7QUFrQkg7O0FBRURYLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRfX2ZyYW1lXCIpO1xuY29uc3QgdXJsID0gXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIjtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW1hZ2UoKSB7XG5cbiAgICAvLyB3ZSBhcmUgdXNpbmcgZmV0Y2ggYXBpIHRvIG1ha2UgcmVzdCBhcGkgY2FsbHMuIHlvdSBjYW4gdXNlIGFsc28gYXhpb3Mgb3IgYWpheC5cbiAgICAvLyB3ZSBhcmUgYWxzbyB1c2luZyBwcm9taXNlcyBoZXJlLiBcbiAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gd2UgZ2V0IHJhdyByZXNwb25zZS4gbmVlZCB0byBmaXJzdCBjb252ZXJ0IGl0IGludG8ganNvbiBmb3JtYXQgc28gd2UgY2FuIHVzZSB0aGUgZGF0YSBlYXNpbHlcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICAvLyBub3cgd2UgZ290IHRoZSBqc29uIC4gd2UgY2FuIHVzZSB0aGlzIHRvIHVwZGF0ZSBhbnkgZGF0YSBpbiBodG1sIFxuICAgICAgICAgICAgdmFyIGltYWdlVXJsID0ganNvbi5tZXNzYWdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGZyYW1lc1tpbmRleF0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlVXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGlmIGFueSBlcnJvciBvY2N1cnMgbGlrZSBubyBpbnRlcm5ldCBjb25uZWN0aW9uIHRoZW4gdGhpcyBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbn1cblxuZ2V0UmFuZG9tSW1hZ2UoKTtcblxuXG4iXSwiZmlsZSI6Ii4vc3JjL2pzL2ZldGNoLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fetch.js\n");

/***/ }),

/***/ "./src/js/observer.js":
/*!****************************!*\
  !*** ./src/js/observer.js ***!
  \****************************/
/***/ (() => {

eval("var adTop = document.querySelector('.ad');\nvar adFixed = document.querySelector('#ad__fixed');\nvar adSticky = document.querySelector('#ad__sticky');\nvar adStarts = document.querySelectorAll('.ad__start');\nvar adEnd = document.querySelector('.ad__end');\n\nvar handler = function handler(entries) {\n  // console.log(!entries[0].isIntersecting)\n  // entries is an array of observed dom nodes\n  // we're only interested in the first one at [0]\n  // because that's our .sentinal node.\n  // Here observe whether or not that node is in the viewport\n  if (!entries[0].isIntersecting) {\n    adTop.classList.add('ad--active');\n    adSticky.classList.toggle('ad__content--hidden');\n    adFixed.classList.toggle('ad__content--hidden');\n  } else {\n    adTop.classList.remove('ad--active'); // adSticky.classList.toggle('ad__content--hidden')\n    // adFixed.classList.add('ad__content--hidden')\n  }\n};\n\nvar handlerEnd = function handlerEnd(entries) {\n  console.log(entries); // entries is an array of observed dom nodes\n  // we're only interested in the first one at [0]\n  // because that's our .sentinal node.\n  // Here observe whether or not that node is in the viewport\n\n  if (!entries[0].isIntersecting) {\n    adTop.classList.remove('ad--active');\n    adFixed.classList.add('ad__content--hidden');\n    adSticky.classList.remove('ad__content--hidden');\n  } else {\n    console.log('now'); // adSticky.classList.toggle('ad__content--hidden')\n    // adFixed.classList.add('ad__content--hidden')\n  }\n}; // create the observer\n\n\nvar options = {\n  // this rootMargin could be calculated in a smart way\n  rootMargin: '480px',\n  threshold: 1.0\n};\nvar observer = new window.IntersectionObserver(handler);\nvar observerEnd = new window.IntersectionObserver(handlerEnd, options); // give the observer some dom nodes to keep an eye on\n\nadStarts.forEach(function (element) {\n  return observer.observe(element);\n});\nobserverEnd.observe(adEnd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9vYnNlcnZlci5qcz9hNTc2Il0sIm5hbWVzIjpbImFkVG9wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRGaXhlZCIsImFkU3RpY2t5IiwiYWRTdGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRFbmQiLCJoYW5kbGVyIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwicmVtb3ZlIiwiaGFuZGxlckVuZCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlckVuZCIsImZvckVhY2giLCJlbGVtZW50Iiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSxHQUFFSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBakI7QUFDQSxJQUFNQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUVBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBYTtBQUMzQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLGNBQWhCLEVBQWdDO0FBQzlCVixJQUFBQSxLQUFLLENBQUNXLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFlBQXBCO0FBQ0FSLElBQUFBLFFBQVEsQ0FBQ08sU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0FWLElBQUFBLE9BQU8sQ0FBQ1EsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIscUJBQXpCO0FBQ0QsR0FKRCxNQUlPO0FBQ0xiLElBQUFBLEtBQUssQ0FBQ1csU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsWUFBdkIsRUFESyxDQUVMO0FBQ0E7QUFDRDtBQUNGLENBaEJEOztBQWtCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTixPQUFELEVBQWE7QUFDNUJPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaLEVBRDRCLENBRzVCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxjQUFoQixFQUFnQztBQUM5QlYsSUFBQUEsS0FBSyxDQUFDVyxTQUFOLENBQWdCRyxNQUFoQixDQUF1QixZQUF2QjtBQUNBWCxJQUFBQSxPQUFPLENBQUNRLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHFCQUF0QjtBQUNBUixJQUFBQSxRQUFRLENBQUNPLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLHFCQUExQjtBQUNELEdBSkQsTUFJTztBQUNMRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBREssQ0FFTDtBQUNBO0FBQ0Q7QUFDRixDQWhCSCxDLENBa0JBOzs7QUFFQSxJQUFJQyxPQUFPLEdBQUc7QUFDWjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsT0FGQTtBQUdaQyxFQUFBQSxTQUFTLEVBQUU7QUFIQyxDQUFkO0FBTUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0Msb0JBQVgsQ0FBZ0NmLE9BQWhDLENBQWpCO0FBQ0EsSUFBTWdCLFdBQVcsR0FBRyxJQUFJRixNQUFNLENBQUNDLG9CQUFYLENBQWdDUixVQUFoQyxFQUE0Q0csT0FBNUMsQ0FBcEIsQyxDQUNBOztBQUVBYixRQUFRLENBQUNvQixPQUFULENBQWlCLFVBQUFDLE9BQU87QUFBQSxTQUFJTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJELE9BQWpCLENBQUo7QUFBQSxDQUF4QjtBQUVBRixXQUFXLENBQUNHLE9BQVosQ0FBb0JwQixLQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkJyk7XG5jb25zdCBhZEZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkX19maXhlZCcpO1xuY29uc3QgYWRTdGlja3k9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZF9fc3RpY2t5Jyk7XG5jb25zdCBhZFN0YXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZF9fc3RhcnQnKTtcbmNvbnN0IGFkRW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkX19lbmQnKTtcblxuY29uc3QgaGFuZGxlciA9IChlbnRyaWVzKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCFlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKVxuXG4gIC8vIGVudHJpZXMgaXMgYW4gYXJyYXkgb2Ygb2JzZXJ2ZWQgZG9tIG5vZGVzXG4gIC8vIHdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgZmlyc3Qgb25lIGF0IFswXVxuICAvLyBiZWNhdXNlIHRoYXQncyBvdXIgLnNlbnRpbmFsIG5vZGUuXG4gIC8vIEhlcmUgb2JzZXJ2ZSB3aGV0aGVyIG9yIG5vdCB0aGF0IG5vZGUgaXMgaW4gdGhlIHZpZXdwb3J0XG4gIGlmICghZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgIGFkVG9wLmNsYXNzTGlzdC5hZGQoJ2FkLS1hY3RpdmUnKVxuICAgIGFkU3RpY2t5LmNsYXNzTGlzdC50b2dnbGUoJ2FkX19jb250ZW50LS1oaWRkZW4nKVxuICAgIGFkRml4ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWRfX2NvbnRlbnQtLWhpZGRlbicpXG4gIH0gZWxzZSB7XG4gICAgYWRUb3AuY2xhc3NMaXN0LnJlbW92ZSgnYWQtLWFjdGl2ZScpXG4gICAgLy8gYWRTdGlja3kuY2xhc3NMaXN0LnRvZ2dsZSgnYWRfX2NvbnRlbnQtLWhpZGRlbicpXG4gICAgLy8gYWRGaXhlZC5jbGFzc0xpc3QuYWRkKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyRW5kID0gKGVudHJpZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbnRyaWVzKVxuICBcbiAgICAvLyBlbnRyaWVzIGlzIGFuIGFycmF5IG9mIG9ic2VydmVkIGRvbSBub2Rlc1xuICAgIC8vIHdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgZmlyc3Qgb25lIGF0IFswXVxuICAgIC8vIGJlY2F1c2UgdGhhdCdzIG91ciAuc2VudGluYWwgbm9kZS5cbiAgICAvLyBIZXJlIG9ic2VydmUgd2hldGhlciBvciBub3QgdGhhdCBub2RlIGlzIGluIHRoZSB2aWV3cG9ydFxuICAgIGlmICghZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgYWRUb3AuY2xhc3NMaXN0LnJlbW92ZSgnYWQtLWFjdGl2ZScpXG4gICAgICBhZEZpeGVkLmNsYXNzTGlzdC5hZGQoJ2FkX19jb250ZW50LS1oaWRkZW4nKVxuICAgICAgYWRTdGlja3kuY2xhc3NMaXN0LnJlbW92ZSgnYWRfX2NvbnRlbnQtLWhpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdub3cnKTtcbiAgICAgIC8vIGFkU3RpY2t5LmNsYXNzTGlzdC50b2dnbGUoJ2FkX19jb250ZW50LS1oaWRkZW4nKVxuICAgICAgLy8gYWRGaXhlZC5jbGFzc0xpc3QuYWRkKCdhZF9fY29udGVudC0taGlkZGVuJylcbiAgICB9XG4gIH1cblxuLy8gY3JlYXRlIHRoZSBvYnNlcnZlclxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgLy8gdGhpcyByb290TWFyZ2luIGNvdWxkIGJlIGNhbGN1bGF0ZWQgaW4gYSBzbWFydCB3YXlcbiAgcm9vdE1hcmdpbjogJzQ4MHB4JyxcbiAgdGhyZXNob2xkOiAxLjBcbn0gXG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVyKVxuY29uc3Qgb2JzZXJ2ZXJFbmQgPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXJFbmQsIG9wdGlvbnMpXG4vLyBnaXZlIHRoZSBvYnNlcnZlciBzb21lIGRvbSBub2RlcyB0byBrZWVwIGFuIGV5ZSBvblxuXG5hZFN0YXJ0cy5mb3JFYWNoKGVsZW1lbnQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSlcblxub2JzZXJ2ZXJFbmQub2JzZXJ2ZShhZEVuZCk7XG4iXSwiZmlsZSI6Ii4vc3JjL2pzL29ic2VydmVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/observer.js\n");

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