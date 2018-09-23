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

eval("const scrollTo = (element) => {\n    window.scroll({\n        behavior: 'smooth',\n        left: 0,\n        top: element.offsetTop\n    });\n};\n\n\n(() => {\n\n//scrolling page to sections\n    const anchors = document.querySelectorAll(\"a\");\n\n    anchors.forEach(a => {\n    a.addEventListener(\"click\", () => {\n        let href = a.getAttribute(\"href\");\n        let attr = href.slice(1, href.length);\n        scrollTo(document.getElementById(attr));\n    });\n\n});\n\n//slider\nconst prevDef = (e) => {\n    e.preventDefault();\n};\n\nconst a = document.getElementsByTagName(\"a\");\nconst cfImg = document.getElementsByClassName(\"coverflow__image\");\n\nlet scaleI = 0;\nfor (scaleI; scaleI < a.length; scaleI++) {\n    if (scaleI === 3) {\n        continue;\n    } else {\n        a[scaleI].style.cursor = \"default\";\n        a[scaleI].addEventListener(\"click\", prevDef);\n    }\n}\n\nconst forScale = (coverflowPos) => {\n    for (scaleI = 0; scaleI < a.length; scaleI++) {\n        a[scaleI].style.cursor = \"default\";\n        a[scaleI].addEventListener(\"click\", prevDef);\n    }\n    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {\n        if (cfImg[scaleI].getAttribute(\"data-coverflow-index\") == coverflowPos) {\n            cfImg[scaleI].parentElement.style.cursor = \"pointer\";\n            cfImg[scaleI].parentElement.removeEventListener(\"click\", prevDef);\n        }\n    }\n};\n\nconst setupCoverflow = (coverflowContainer) => {\n    let coverflowContainers;\n\n    if (typeof coverflowContainer !== \"undefined\") {\n        if (Array.isArray(coverflowContainer)) {\n            coverflowContainers = coverflowContainer;\n        } else {\n            coverflowContainers = [coverflowContainer];\n        }\n    } else {\n        coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));\n    }\n\n    coverflowContainers.forEach(containerElement => {\n        let coverflow = {};\n        let prevArrows, nextArrows;\n\n        coverflow.container = containerElement;\n        coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));\n        coverflow.position = Math.floor(coverflow.images.length / 2) + 1;\n\n        coverflow.images.forEach((coverflowImage, i) => {\n            coverflowImage.dataset.coverflowIndex = i + 1;\n        });\n\n        coverflow.container.dataset.coverflowPosition = coverflow.position;\n\n        prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"prev-arrow\"));\n        nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName(\"next-arrow\"));\n\n        const setPrevImage = () => {\n            coverflow.position = Math.max(1, coverflow.position - 1);\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            forScale(coverflow.position);\n        };\n\n\n        const setNextImage = () => {\n            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            forScale(coverflow.position);\n        };\n\n        const jumpToImage = evt => {\n            coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));\n            coverflow.container.dataset.coverflowPosition = coverflow.position;\n            setTimeout(() => {\n                forScale(coverflow.position);\n            }, 1);\n        };\n\n        const onKeyPress = evt => {\n            switch (evt.which) {\n                case 37:\n                    setPrevImage();\n                    break;\n                case 39:\n                    setNextImage();\n                    break;\n            }\n        };\n\n        prevArrows.forEach(prevArrow => {\n            prevArrow.addEventListener('click', setPrevImage);\n        });\n        nextArrows.forEach(nextArrow => {\n            nextArrow.addEventListener('click', setNextImage);\n        });\n        coverflow.images.forEach(image => {\n            image.addEventListener('click', jumpToImage);\n        });\n        window.addEventListener('keyup', onKeyPress);\n    });\n};\n\n\n\nsetupCoverflow();\n\n})\n\n(() => {\n\n});\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7OztBQUlBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3BcbiAgICB9KTtcbn07XG5cblxuKCgpID0+IHtcblxuLy9zY3JvbGxpbmcgcGFnZSB0byBzZWN0aW9uc1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGFuY2hvcnMuZm9yRWFjaChhID0+IHtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBocmVmID0gYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICBsZXQgYXR0ciA9IGhyZWYuc2xpY2UoMSwgaHJlZi5sZW5ndGgpO1xuICAgICAgICBzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyKSk7XG4gICAgfSk7XG5cbn0pO1xuXG4vL3NsaWRlclxuY29uc3QgcHJldkRlZiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuY29uc3QgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKTtcbmNvbnN0IGNmSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvdmVyZmxvd19faW1hZ2VcIik7XG5cbmxldCBzY2FsZUkgPSAwO1xuZm9yIChzY2FsZUk7IHNjYWxlSSA8IGEubGVuZ3RoOyBzY2FsZUkrKykge1xuICAgIGlmIChzY2FsZUkgPT09IDMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYVtzY2FsZUldLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBhW3NjYWxlSV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZEZWYpO1xuICAgIH1cbn1cblxuY29uc3QgZm9yU2NhbGUgPSAoY292ZXJmbG93UG9zKSA9PiB7XG4gICAgZm9yIChzY2FsZUkgPSAwOyBzY2FsZUkgPCBhLmxlbmd0aDsgc2NhbGVJKyspIHtcbiAgICAgICAgYVtzY2FsZUldLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBhW3NjYWxlSV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZEZWYpO1xuICAgIH1cbiAgICBmb3IgKHNjYWxlSSA9IDA7IHNjYWxlSSA8IGNmSW1nLmxlbmd0aDsgc2NhbGVJKyspIHtcbiAgICAgICAgaWYgKGNmSW1nW3NjYWxlSV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb3ZlcmZsb3ctaW5kZXhcIikgPT0gY292ZXJmbG93UG9zKSB7XG4gICAgICAgICAgICBjZkltZ1tzY2FsZUldLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICBjZkltZ1tzY2FsZUldLnBhcmVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZEZWYpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3Qgc2V0dXBDb3ZlcmZsb3cgPSAoY292ZXJmbG93Q29udGFpbmVyKSA9PiB7XG4gICAgbGV0IGNvdmVyZmxvd0NvbnRhaW5lcnM7XG5cbiAgICBpZiAodHlwZW9mIGNvdmVyZmxvd0NvbnRhaW5lciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb3ZlcmZsb3dDb250YWluZXIpKSB7XG4gICAgICAgICAgICBjb3ZlcmZsb3dDb250YWluZXJzID0gY292ZXJmbG93Q29udGFpbmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY292ZXJmbG93Q29udGFpbmVycyA9IFtjb3ZlcmZsb3dDb250YWluZXJdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY292ZXJmbG93Q29udGFpbmVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3ZlcmZsb3cnKSk7XG4gICAgfVxuXG4gICAgY292ZXJmbG93Q29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lckVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgY292ZXJmbG93ID0ge307XG4gICAgICAgIGxldCBwcmV2QXJyb3dzLCBuZXh0QXJyb3dzO1xuXG4gICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIgPSBjb250YWluZXJFbGVtZW50O1xuICAgICAgICBjb3ZlcmZsb3cuaW1hZ2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvbnRhaW5lckVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY292ZXJmbG93X19pbWFnZScpKTtcbiAgICAgICAgY292ZXJmbG93LnBvc2l0aW9uID0gTWF0aC5mbG9vcihjb3ZlcmZsb3cuaW1hZ2VzLmxlbmd0aCAvIDIpICsgMTtcblxuICAgICAgICBjb3ZlcmZsb3cuaW1hZ2VzLmZvckVhY2goKGNvdmVyZmxvd0ltYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb3ZlcmZsb3dJbWFnZS5kYXRhc2V0LmNvdmVyZmxvd0luZGV4ID0gaSArIDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIuZGF0YXNldC5jb3ZlcmZsb3dQb3NpdGlvbiA9IGNvdmVyZmxvdy5wb3NpdGlvbjtcblxuICAgICAgICBwcmV2QXJyb3dzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvdmVyZmxvdy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZXYtYXJyb3dcIikpO1xuICAgICAgICBuZXh0QXJyb3dzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvdmVyZmxvdy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtYXJyb3dcIikpO1xuXG4gICAgICAgIGNvbnN0IHNldFByZXZJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5wb3NpdGlvbiA9IE1hdGgubWF4KDEsIGNvdmVyZmxvdy5wb3NpdGlvbiAtIDEpO1xuICAgICAgICAgICAgY292ZXJmbG93LmNvbnRhaW5lci5kYXRhc2V0LmNvdmVyZmxvd1Bvc2l0aW9uID0gY292ZXJmbG93LnBvc2l0aW9uO1xuICAgICAgICAgICAgZm9yU2NhbGUoY292ZXJmbG93LnBvc2l0aW9uKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IHNldE5leHRJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5wb3NpdGlvbiA9IE1hdGgubWluKGNvdmVyZmxvdy5pbWFnZXMubGVuZ3RoLCBjb3ZlcmZsb3cucG9zaXRpb24gKyAxKTtcbiAgICAgICAgICAgIGNvdmVyZmxvdy5jb250YWluZXIuZGF0YXNldC5jb3ZlcmZsb3dQb3NpdGlvbiA9IGNvdmVyZmxvdy5wb3NpdGlvbjtcbiAgICAgICAgICAgIGZvclNjYWxlKGNvdmVyZmxvdy5wb3NpdGlvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QganVtcFRvSW1hZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgY292ZXJmbG93LnBvc2l0aW9uID0gTWF0aC5taW4oY292ZXJmbG93LmltYWdlcy5sZW5ndGgsIE1hdGgubWF4KDEsIGV2dC50YXJnZXQuZGF0YXNldC5jb3ZlcmZsb3dJbmRleCkpO1xuICAgICAgICAgICAgY292ZXJmbG93LmNvbnRhaW5lci5kYXRhc2V0LmNvdmVyZmxvd1Bvc2l0aW9uID0gY292ZXJmbG93LnBvc2l0aW9uO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yU2NhbGUoY292ZXJmbG93LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uS2V5UHJlc3MgPSBldnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBzZXRQcmV2SW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHByZXZBcnJvd3MuZm9yRWFjaChwcmV2QXJyb3cgPT4ge1xuICAgICAgICAgICAgcHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0UHJldkltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRBcnJvd3MuZm9yRWFjaChuZXh0QXJyb3cgPT4ge1xuICAgICAgICAgICAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0TmV4dEltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdmVyZmxvdy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGp1bXBUb0ltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uS2V5UHJlc3MpO1xuICAgIH0pO1xufTtcblxuXG5cbnNldHVwQ292ZXJmbG93KCk7XG5cbn0pXG5cbigoKSA9PiB7XG5cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);