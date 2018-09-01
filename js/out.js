/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);\n\n\nconst scrollTo = (element) => {\n    window.scroll({\n        behavior: 'smooth',\n        left: 0,\n        top: element.offsetTop\n    });\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    console.log(\"DOM LOADED\");\n    const anchors = document.querySelectorAll(\"a\");\n\n    anchors[0].addEventListener(\"click\", () => {\n           scrollTo(document.getElementById(\"about\"));\n       });\n\n    anchors[1].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"services\"));\n    });\n\n    anchors[2].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"aboutgallery\"));\n    });\n\n    anchors[3].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"maps\"));\n    });\n\n    anchors[4].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"contact\"));\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbmNvbnN0IHNjcm9sbFRvID0gKGVsZW1lbnQpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wXG4gICAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRPTSBMT0FERURcIik7XG4gICAgY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgYW5jaG9yc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICBzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpKTtcbiAgICAgICB9KTtcblxuICAgIGFuY2hvcnNbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2aWNlc1wiKSk7XG4gICAgfSk7XG5cbiAgICBhbmNob3JzWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRnYWxsZXJ5XCIpKTtcbiAgICB9KTtcblxuICAgIGFuY2hvcnNbM10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBzXCIpKTtcbiAgICB9KTtcblxuICAgIGFuY2hvcnNbNF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: \\n@media (width < 768px ){\\n       ^\\n      Unclosed parenthesis in media query expression\\n      in /home/ogar/My Projects/auto_perfect/src/scss/main.scss (line 17, column 9)\\n    at runLoaders (/home/ogar/My Projects/auto_perfect/node_modules/webpack/lib/NormalModule.js:195:19)\\n    at /home/ogar/My Projects/auto_perfect/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /home/ogar/My Projects/auto_perfect/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at context.callback (/home/ogar/My Projects/auto_perfect/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.asyncSassJobQueue.push [as callback] (/home/ogar/My Projects/auto_perfect/node_modules/sass-loader/lib/loader.js:55:13)\\n    at Object.done [as callback] (/home/ogar/My Projects/auto_perfect/node_modules/neo-async/async.js:7974:18)\\n    at options.error (/home/ogar/My Projects/auto_perfect/node_modules/node-sass/lib/index.js:294:32)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);