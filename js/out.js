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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZDNlNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);\n\n\nconsole.log(\"sds\");\nconst scrollTo = (element) => {\n    window.scroll({\n        behavior: 'smooth',\n        left: 0,\n        top: element.offsetTop\n    });\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    document.getElementById(\"toggle\").addEventListener(\"click\", () => {\n       this.classList.add(\"active\");\n       document.getElementById(\"overlay\").classList.add(\"open\");\n    });\n\n    // $('#toggle').click(function() {\n    //     $(this).toggleClass('active');\n    //     $('#overlay').toggleClass('open');\n    // });\n\n    //scrolling page to sections\n    const anchors = document.querySelectorAll(\"a\");\n\n    anchors[0].addEventListener(\"click\", () => {\n           scrollTo(document.getElementById(\"about\"));\n       });\n\n    anchors[1].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"services\"));\n    });\n\n    anchors[2].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"gallery\"));\n    });\n\n    anchors[3].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"maps\"));\n    });\n\n    anchors[4].addEventListener(\"click\", () => {\n        scrollTo(document.getElementById(\"contact\"));\n    });\n\n    //slider\n    const prevDef = (e) => {\n        e.preventDefault();\n    };\n\n    const a = document.getElementsByTagName(\"a\");\n    const cfImg = document.getElementsByClassName(\"coverflow__image\")\n\n    let scaleI = 0;\n    for (scaleI; scaleI < a.length; scaleI++) {\n        if (scaleI === 3) {\n            continue;\n        } else {\n            a[scaleI].style.cursor = \"default\";\n            a[scaleI].addEventListener(\"click\", prevDef);\n        }\n    }\n\n\n\n    const forScale = (coverflowPos) => {\n        for (scaleI = 0; scaleI < a.length; scaleI++) {\n            a[scaleI].style.cursor = \"default\";\n            a[scaleI].addEventListener(\"click\", prevDef);\n        }\n        for (scaleI = 0; scaleI < cfImg.length; scaleI++) {\n            if (cfImg[scaleI].getAttribute(\"data-coverflow-index\") == coverflowPos) {\n                cfImg[scaleI].parentElement.style.cursor = \"pointer\";\n                cfImg[scaleI].parentElement.removeEventListener(\"click\", prevDef);\n            }\n        }\n    };\n\n    const setupCoverflow = (coverflowContainer) => {\n        let coverflowContainers;\n\n        if (typeof coverflowContainer !== \"undefined\") {\n            if (Array.isArray(coverflowContainer)) {\n                coverflowContainers = coverflowContainer;\n            } else {\n                coverflowContainers = [coverflowContainer];\n            }\n        } else {\n            coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));\n        }\n\n        coverflowContainers.forEach(containerElement => {\n            let coverflow = {};\n            let prevArrows, nextArrows;\n\n            coverflow.container = containerElement;\n            coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));\n            coverflow.position = Math.floor(coverflow.images.length / 2) + 1;\n\n            coverflow.images.forEach((coverflowImage, i) => {\n                coverflowImage.dataset.coverflowIndex = i + 1;\n            });\n\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n\n            prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"prev-arrow\"));\n            nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"next-arrow\"));\n\n            const setPrevImage = () => {\n                coverflow.position = Math.max(1, coverflow.position - 1);\n                coverflow.container.dataset.coverflowPosition = coverflow.position;\n                forScale(coverflow.position);\n            };\n\n\n            const setNextImage = () => {\n                coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);\n                coverflow.container.dataset.coverflowPosition = coverflow.position;\n                forScale(coverflow.position);\n            };\n\n            const jumpToImage = evt => {\n                coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));\n                coverflow.container.dataset.coverflowPosition = coverflow.position;\n                setTimeout(() => {\n                    forScale(coverflow.position);\n                }, 1);\n            };\n\n            const onKeyPress = evt => {\n                switch (evt.which) {\n                    case 37:\n                        setPrevImage();\n                        break;\n                    case 39:\n                        setNextImage();\n                        break;\n                }\n            };\n\n            prevArrows.forEach(prevArrow => {\n                prevArrow.addEventListener('click', setPrevImage);\n            });\n            nextArrows.forEach(nextArrow => {\n                nextArrow.addEventListener('click', setNextImage);\n            });\n            coverflow.images.forEach(image => {\n                image.addEventListener('click', jumpToImage);\n            });\n            window.addEventListener('keyup', onKeyPress);\n        });\n    };\n\n\n    setupCoverflow();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbmNvbnNvbGUubG9nKFwic2RzXCIpO1xuY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3BcbiAgICB9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICB9KTtcblxuICAgIC8vICQoJyN0b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAvLyB9KTtcblxuICAgIC8vc2Nyb2xsaW5nIHBhZ2UgdG8gc2VjdGlvbnNcbiAgICBjb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbiAgICBhbmNob3JzWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgIHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikpO1xuICAgICAgIH0pO1xuXG4gICAgYW5jaG9yc1sxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZpY2VzXCIpKTtcbiAgICB9KTtcblxuICAgIGFuY2hvcnNbMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYWxsZXJ5XCIpKTtcbiAgICB9KTtcblxuICAgIGFuY2hvcnNbM10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBzXCIpKTtcbiAgICB9KTtcblxuICAgIGFuY2hvcnNbNF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpKTtcbiAgICB9KTtcblxuICAgIC8vc2xpZGVyXG4gICAgY29uc3QgcHJldkRlZiA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKTtcbiAgICBjb25zdCBjZkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb3ZlcmZsb3dfX2ltYWdlXCIpXG5cbiAgICBsZXQgc2NhbGVJID0gMDtcbiAgICBmb3IgKHNjYWxlSTsgc2NhbGVJIDwgYS5sZW5ndGg7IHNjYWxlSSsrKSB7XG4gICAgICAgIGlmIChzY2FsZUkgPT09IDMpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYVtzY2FsZUldLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgYVtzY2FsZUldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2RGVmKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBmb3JTY2FsZSA9IChjb3ZlcmZsb3dQb3MpID0+IHtcbiAgICAgICAgZm9yIChzY2FsZUkgPSAwOyBzY2FsZUkgPCBhLmxlbmd0aDsgc2NhbGVJKyspIHtcbiAgICAgICAgICAgIGFbc2NhbGVJXS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgIGFbc2NhbGVJXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldkRlZik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzY2FsZUkgPSAwOyBzY2FsZUkgPCBjZkltZy5sZW5ndGg7IHNjYWxlSSsrKSB7XG4gICAgICAgICAgICBpZiAoY2ZJbWdbc2NhbGVJXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvdmVyZmxvdy1pbmRleFwiKSA9PSBjb3ZlcmZsb3dQb3MpIHtcbiAgICAgICAgICAgICAgICBjZkltZ1tzY2FsZUldLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgY2ZJbWdbc2NhbGVJXS5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2RGVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cENvdmVyZmxvdyA9IChjb3ZlcmZsb3dDb250YWluZXIpID0+IHtcbiAgICAgICAgbGV0IGNvdmVyZmxvd0NvbnRhaW5lcnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb3ZlcmZsb3dDb250YWluZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvdmVyZmxvd0NvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBjb3ZlcmZsb3dDb250YWluZXJzID0gY292ZXJmbG93Q29udGFpbmVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3ZlcmZsb3dDb250YWluZXJzID0gW2NvdmVyZmxvd0NvbnRhaW5lcl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3ZlcmZsb3dDb250YWluZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdmVyZmxvdycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdmVyZmxvd0NvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXJFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBjb3ZlcmZsb3cgPSB7fTtcbiAgICAgICAgICAgIGxldCBwcmV2QXJyb3dzLCBuZXh0QXJyb3dzO1xuXG4gICAgICAgICAgICBjb3ZlcmZsb3cuY29udGFpbmVyID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5pbWFnZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY29udGFpbmVyRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3ZlcmZsb3dfX2ltYWdlJykpO1xuICAgICAgICAgICAgY292ZXJmbG93LnBvc2l0aW9uID0gTWF0aC5mbG9vcihjb3ZlcmZsb3cuaW1hZ2VzLmxlbmd0aCAvIDIpICsgMTtcblxuICAgICAgICAgICAgY292ZXJmbG93LmltYWdlcy5mb3JFYWNoKChjb3ZlcmZsb3dJbWFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdmVyZmxvd0ltYWdlLmRhdGFzZXQuY292ZXJmbG93SW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3ZlcmZsb3cuY29udGFpbmVyLmRhdGFzZXQuY292ZXJmbG93UG9zaXRpb24gPSBjb3ZlcmZsb3cucG9zaXRpb247XG5cbiAgICAgICAgICAgIHByZXZBcnJvd3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY292ZXJmbG93LmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJldi1hcnJvd1wiKSk7XG4gICAgICAgICAgICBuZXh0QXJyb3dzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvdmVyZmxvdy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtYXJyb3dcIikpO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRQcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY292ZXJmbG93LnBvc2l0aW9uID0gTWF0aC5tYXgoMSwgY292ZXJmbG93LnBvc2l0aW9uIC0gMSk7XG4gICAgICAgICAgICAgICAgY292ZXJmbG93LmNvbnRhaW5lci5kYXRhc2V0LmNvdmVyZmxvd1Bvc2l0aW9uID0gY292ZXJmbG93LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGZvclNjYWxlKGNvdmVyZmxvdy5wb3NpdGlvbik7XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHNldE5leHRJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb3ZlcmZsb3cucG9zaXRpb24gPSBNYXRoLm1pbihjb3ZlcmZsb3cuaW1hZ2VzLmxlbmd0aCwgY292ZXJmbG93LnBvc2l0aW9uICsgMSk7XG4gICAgICAgICAgICAgICAgY292ZXJmbG93LmNvbnRhaW5lci5kYXRhc2V0LmNvdmVyZmxvd1Bvc2l0aW9uID0gY292ZXJmbG93LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGZvclNjYWxlKGNvdmVyZmxvdy5wb3NpdGlvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBqdW1wVG9JbWFnZSA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgY292ZXJmbG93LnBvc2l0aW9uID0gTWF0aC5taW4oY292ZXJmbG93LmltYWdlcy5sZW5ndGgsIE1hdGgubWF4KDEsIGV2dC50YXJnZXQuZGF0YXNldC5jb3ZlcmZsb3dJbmRleCkpO1xuICAgICAgICAgICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIuZGF0YXNldC5jb3ZlcmZsb3dQb3NpdGlvbiA9IGNvdmVyZmxvdy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yU2NhbGUoY292ZXJmbG93LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9uS2V5UHJlc3MgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZ0LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmV2SW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcmV2QXJyb3dzLmZvckVhY2gocHJldkFycm93ID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRQcmV2SW1hZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0QXJyb3dzLmZvckVhY2gobmV4dEFycm93ID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXROZXh0SW1hZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb3ZlcmZsb3cuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywganVtcFRvSW1hZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVByZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgc2V0dXBDb3ZlcmZsb3coKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);