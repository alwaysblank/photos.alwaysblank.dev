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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/basiclightbox/dist/basicLightbox.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/basiclightbox/dist/basicLightbox.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;var require;!function(e){if(true)module.exports=e();else {}}(function(){return function i(c,u,a){function s(n,e){if(!u[n]){if(!c[n]){var t=\"function\"==typeof require&&require;if(!e&&t)return require(n,!0);if(l)return l(n,!0);var o=new Error(\"Cannot find module '\"+n+\"'\");throw o.code=\"MODULE_NOT_FOUND\",o}var r=u[n]={exports:{}};c[n][0].call(r.exports,function(e){return s(c[n][1][e]||e)},r,r.exports,i,c,u,a)}return u[n].exports}for(var l=\"function\"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.create=t.visible=void 0;var u=function(e){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=document.createElement(\"div\");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},a=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},c=function(e){return null!=(e=e||document.querySelector(\".basicLightbox\"))&&!0===e.ownerDocument.body.contains(e)};t.visible=c;t.create=function(e,o){var r=function(e,n){var t=u('\\n\\t\\t<div class=\"basicLightbox '.concat(n.className,'\">\\n\\t\\t\\t<div class=\"basicLightbox__placeholder\" role=\"dialog\"></div>\\n\\t\\t</div>\\n\\t')),o=t.querySelector(\".basicLightbox__placeholder\");e.forEach(function(e){return o.appendChild(e)});var r=a(o,\"IMG\"),i=a(o,\"VIDEO\"),c=a(o,\"IFRAME\");return!0===r&&t.classList.add(\"basicLightbox--img\"),!0===i&&t.classList.add(\"basicLightbox--video\"),!0===c&&t.classList.add(\"basicLightbox--iframe\"),t}(e=function(e){var n=\"string\"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error(\"Content must be a DOM element/node or string\");return!0===n?Array.from(u(e,!0)):\"TEMPLATE\"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),o=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=\"\"),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),\"boolean\"!=typeof e.closable)throw new Error(\"Property `closable` must be a boolean\");if(\"string\"!=typeof e.className)throw new Error(\"Property `className` must be a string\");if(\"function\"!=typeof e.onShow)throw new Error(\"Property `onShow` must be a function\");if(\"function\"!=typeof e.onClose)throw new Error(\"Property `onClose` must be a function\");return e}(o)),n=function(e){return!1!==o.onClose(i)&&(t=function(){if(\"function\"==typeof e)return e(i)},(n=r).classList.remove(\"basicLightbox--visible\"),setTimeout(function(){return!1===c(n)||n.parentElement.removeChild(n),t()},410),!0);var n,t};!0===o.closable&&r.addEventListener(\"click\",function(e){e.target===r&&n()});var i={element:function(){return r},visible:function(){return c(r)},show:function(e){return!1!==o.onShow(i)&&(n=r,t=function(){if(\"function\"==typeof e)return e(i)},document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add(\"basicLightbox--visible\"),t()})},10),!0);var n,t},close:n};return i}},{}]},{},[1])(1)});\n\n//# sourceURL=webpack:///./node_modules/basiclightbox/dist/basicLightbox.min.js?");

/***/ }),

/***/ "./src/_assets/scripts/app.js":
/*!************************************!*\
  !*** ./src/_assets/scripts/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const basicLightbox = __webpack_require__(/*! basiclightbox */ \"./node_modules/basiclightbox/dist/basicLightbox.min.js\");\n\ndocument.querySelectorAll(`[data-lightbox]`).forEach(el => {\n  el.addEventListener(`click`, e => {\n    e.preventDefault();\n    basicLightbox.create(`\n      <img width=\"1280\" src=\"${el.href}\">\n    `).show();\n  });\n});\n\n//# sourceURL=webpack:///./src/_assets/scripts/app.js?");

/***/ })

/******/ });