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
/***/ (function(module, exports) {

eval("const scrollTo = element => {\n    window.scroll({\n        behavior: 'smooth',\n        left: 0,\n        top: element.offsetTop\n    });\n};\n\n\n(() => {\n\n//scrolling page to sections\n    const anchors = document.querySelectorAll(\"a\");\n\n    anchors.forEach(a => {\n    a.addEventListener(\"click\", () => {\n        let href = a.getAttribute(\"href\");\n        let attr = href.slice(1, href.length);\n        scrollTo(document.getElementById(attr));\n    });\n\n});\n\n//slider\nconst prevDef = (e) => {\n    e.preventDefault();\n};\n\nconst a = document.getElementsByTagName(\"a\");\nconst cfImg = document.getElementsByClassName(\"coverflow__image\");\n\nlet scaleI = 0;\nfor (scaleI; scaleI < a.length; scaleI++) {\n    if (scaleI === 3) {\n        continue;\n    } else {\n        a[scaleI].style.cursor = \"default\";\n        a[scaleI].addEventListener(\"click\", prevDef);\n    }\n}\n\nconst forScale = (coverflowPos) => {\n    for (scaleI = 0; scaleI < a.length; scaleI++) {\n        a[scaleI].style.cursor = \"default\";\n        a[scaleI].addEventListener(\"click\", prevDef);\n    }\n    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {\n        if (cfImg[scaleI].getAttribute(\"data-coverflow-index\") == coverflowPos) {\n            cfImg[scaleI].parentElement.style.cursor = \"pointer\";\n            cfImg[scaleI].parentElement.removeEventListener(\"click\", prevDef);\n        }\n    }\n};\n\nconst setupCoverflow = (coverflowContainer) => {\n    let coverflowContainers;\n\n    if (typeof coverflowContainer !== \"undefined\") {\n        if (Array.isArray(coverflowContainer)) {\n            coverflowContainers = coverflowContainer;\n        } else {\n            coverflowContainers = [coverflowContainer];\n        }\n    } else {\n        coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));\n    }\n\n    coverflowContainers.forEach(containerElement => {\n        let coverflow = {};\n        let prevArrows, nextArrows;\n\n        coverflow.container = containerElement;\n        coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));\n        coverflow.position = Math.floor(coverflow.images.length / 2) + 1;\n\n        coverflow.images.forEach((coverflowImage, i) => {\n            coverflowImage.dataset.coverflowIndex = i + 1;\n        });\n\n        coverflow.container.dataset.coverflowPosition = coverflow.position;\n\n        prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"prev-arrow\"));\n        nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"next-arrow\"));\n\n        const setPrevImage = () => {\n            coverflow.position = Math.max(1, coverflow.position - 1);\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            forScale(coverflow.position);\n        };\n\n\n        const setNextImage = () => {\n            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            forScale(coverflow.position);\n        };\n\n        const jumpToImage = evt => {\n            coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            setTimeout(() => {\n                forScale(coverflow.position);\n            }, 1);\n        };\n\n        const onKeyPress = evt => {\n            switch (evt.which) {\n                case 37:\n                    setPrevImage();\n                    break;\n                case 39:\n                    setNextImage();\n                    break;\n            }\n        };\n\n        prevArrows.forEach(prevArrow => {\n            prevArrow.addEventListener('click', setPrevImage);\n        });\n        nextArrows.forEach(nextArrow => {\n            nextArrow.addEventListener('click', setNextImage);\n        });\n        coverflow.images.forEach(image => {\n            image.addEventListener('click', jumpToImage);\n        });\n        window.addEventListener('keyup', onKeyPress);\n    });\n};\n\n\n\nsetupCoverflow();\n\n})\n\n(() => {\n\n});\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsVG8gPSBlbGVtZW50ID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wXG4gICAgfSk7XG59O1xuXG5cbigoKSA9PiB7XG5cbi8vc2Nyb2xsaW5nIHBhZ2UgdG8gc2VjdGlvbnNcbiAgICBjb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbiAgICBhbmNob3JzLmZvckVhY2goYSA9PiB7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgaHJlZiA9IGEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgbGV0IGF0dHIgPSBocmVmLnNsaWNlKDEsIGhyZWYubGVuZ3RoKTtcbiAgICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cikpO1xuICAgIH0pO1xuXG59KTtcblxuLy9zbGlkZXJcbmNvbnN0IHByZXZEZWYgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG5jb25zdCBjZkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb3ZlcmZsb3dfX2ltYWdlXCIpO1xuXG5sZXQgc2NhbGVJID0gMDtcbmZvciAoc2NhbGVJOyBzY2FsZUkgPCBhLmxlbmd0aDsgc2NhbGVJKyspIHtcbiAgICBpZiAoc2NhbGVJID09PSAzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFbc2NhbGVJXS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgYVtzY2FsZUldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2RGVmKTtcbiAgICB9XG59XG5cbmNvbnN0IGZvclNjYWxlID0gKGNvdmVyZmxvd1BvcykgPT4ge1xuICAgIGZvciAoc2NhbGVJID0gMDsgc2NhbGVJIDwgYS5sZW5ndGg7IHNjYWxlSSsrKSB7XG4gICAgICAgIGFbc2NhbGVJXS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgYVtzY2FsZUldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2RGVmKTtcbiAgICB9XG4gICAgZm9yIChzY2FsZUkgPSAwOyBzY2FsZUkgPCBjZkltZy5sZW5ndGg7IHNjYWxlSSsrKSB7XG4gICAgICAgIGlmIChjZkltZ1tzY2FsZUldLmdldEF0dHJpYnV0ZShcImRhdGEtY292ZXJmbG93LWluZGV4XCIpID09IGNvdmVyZmxvd1Bvcykge1xuICAgICAgICAgICAgY2ZJbWdbc2NhbGVJXS5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgY2ZJbWdbc2NhbGVJXS5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2RGVmKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IHNldHVwQ292ZXJmbG93ID0gKGNvdmVyZmxvd0NvbnRhaW5lcikgPT4ge1xuICAgIGxldCBjb3ZlcmZsb3dDb250YWluZXJzO1xuXG4gICAgaWYgKHR5cGVvZiBjb3ZlcmZsb3dDb250YWluZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY292ZXJmbG93Q29udGFpbmVyKSkge1xuICAgICAgICAgICAgY292ZXJmbG93Q29udGFpbmVycyA9IGNvdmVyZmxvd0NvbnRhaW5lcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdmVyZmxvd0NvbnRhaW5lcnMgPSBbY292ZXJmbG93Q29udGFpbmVyXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdmVyZmxvd0NvbnRhaW5lcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY292ZXJmbG93JykpO1xuICAgIH1cblxuICAgIGNvdmVyZmxvd0NvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXJFbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGNvdmVyZmxvdyA9IHt9O1xuICAgICAgICBsZXQgcHJldkFycm93cywgbmV4dEFycm93cztcblxuICAgICAgICBjb3ZlcmZsb3cuY29udGFpbmVyID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgY292ZXJmbG93LmltYWdlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjb250YWluZXJFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdmVyZmxvd19faW1hZ2UnKSk7XG4gICAgICAgIGNvdmVyZmxvdy5wb3NpdGlvbiA9IE1hdGguZmxvb3IoY292ZXJmbG93LmltYWdlcy5sZW5ndGggLyAyKSArIDE7XG5cbiAgICAgICAgY292ZXJmbG93LmltYWdlcy5mb3JFYWNoKChjb3ZlcmZsb3dJbWFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgY292ZXJmbG93SW1hZ2UuZGF0YXNldC5jb3ZlcmZsb3dJbmRleCA9IGkgKyAxO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb3ZlcmZsb3cuY29udGFpbmVyLmRhdGFzZXQuY292ZXJmbG93UG9zaXRpb24gPSBjb3ZlcmZsb3cucG9zaXRpb247XG5cbiAgICAgICAgcHJldkFycm93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjb3ZlcmZsb3cuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmV2LWFycm93XCIpKTtcbiAgICAgICAgbmV4dEFycm93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjb3ZlcmZsb3cuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWFycm93XCIpKTtcblxuICAgICAgICBjb25zdCBzZXRQcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb3ZlcmZsb3cucG9zaXRpb24gPSBNYXRoLm1heCgxLCBjb3ZlcmZsb3cucG9zaXRpb24gLSAxKTtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIuZGF0YXNldC5jb3ZlcmZsb3dQb3NpdGlvbiA9IGNvdmVyZmxvdy5wb3NpdGlvbjtcbiAgICAgICAgICAgIGZvclNjYWxlKGNvdmVyZmxvdy5wb3NpdGlvbik7XG4gICAgICAgIH07XG5cblxuICAgICAgICBjb25zdCBzZXROZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb3ZlcmZsb3cucG9zaXRpb24gPSBNYXRoLm1pbihjb3ZlcmZsb3cuaW1hZ2VzLmxlbmd0aCwgY292ZXJmbG93LnBvc2l0aW9uICsgMSk7XG4gICAgICAgICAgICBjb3ZlcmZsb3cuY29udGFpbmVyLmRhdGFzZXQuY292ZXJmbG93UG9zaXRpb24gPSBjb3ZlcmZsb3cucG9zaXRpb247XG4gICAgICAgICAgICBmb3JTY2FsZShjb3ZlcmZsb3cucG9zaXRpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGp1bXBUb0ltYWdlID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5wb3NpdGlvbiA9IE1hdGgubWluKGNvdmVyZmxvdy5pbWFnZXMubGVuZ3RoLCBNYXRoLm1heCgxLCBldnQudGFyZ2V0LmRhdGFzZXQuY292ZXJmbG93SW5kZXgpKTtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIuZGF0YXNldC5jb3ZlcmZsb3dQb3NpdGlvbiA9IGNvdmVyZmxvdy5wb3NpdGlvbjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvclNjYWxlKGNvdmVyZmxvdy5wb3NpdGlvbik7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbktleVByZXNzID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZ0LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJldkltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwcmV2QXJyb3dzLmZvckVhY2gocHJldkFycm93ID0+IHtcbiAgICAgICAgICAgIHByZXZBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFByZXZJbWFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0QXJyb3dzLmZvckVhY2gobmV4dEFycm93ID0+IHtcbiAgICAgICAgICAgIG5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE5leHRJbWFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3ZlcmZsb3cuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBqdW1wVG9JbWFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVByZXNzKTtcbiAgICB9KTtcbn07XG5cblxuXG5zZXR1cENvdmVyZmxvdygpO1xuXG59KVxuXG4oKCkgPT4ge1xuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);