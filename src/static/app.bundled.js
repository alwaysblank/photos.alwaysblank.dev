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

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||\"[object Arguments]\"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}!function(t,e){\"object\"===( false?undefined:_typeof(exports))&&\"undefined\"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){\"use strict\";var t=\"undefined\"!=typeof window,e=t&&!(\"onscroll\"in window)||\"undefined\"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&\"IntersectionObserver\"in window,r=t&&\"classList\"in document.createElement(\"p\"),o={elements_selector:\"img\",container:e||t?document:null,threshold:300,thresholds:null,data_src:\"src\",data_srcset:\"srcset\",data_sizes:\"sizes\",data_bg:\"bg\",class_loading:\"loading\",class_loaded:\"loaded\",class_error:\"error\",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,r=new t(e);try{n=new CustomEvent(\"LazyLoad::Initialized\",{detail:{instance:r}})}catch(t){(n=document.createEvent(\"CustomEvent\")).initCustomEvent(\"LazyLoad::Initialized\",!1,!1,{instance:r})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute(\"data-\"+e)},s=function(t,e,n){var r=\"data-\"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},c=function(t){return\"true\"===i(t,\"was-processed\")},l=function(t,e){return s(t,\"ll-timeout\",e)},u=function(t){return i(t,\"ll-timeout\")},d=function(t,e,n,r){t&&(void 0===r?void 0===n?t(e):t(e,n):t(e,n,r))},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)\"SOURCE\"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,\"sizes\",i(t,e.data_sizes)),v(t,\"srcset\",i(t,e.data_srcset)),v(t,\"src\",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&\"PICTURE\"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,\"src\",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,\"src\",i(t,e.data_src))}),v(t,\"src\",i(t,e.data_src)),t.load()}},g=function(t,e){var n,r,o=e._settings,a=t.tagName,s=m[a];if(s)return s(t,o),f(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=i(t,e.data_src),r=i(t,e.data_bg);n&&(t.style.backgroundImage='url(\"'.concat(n,'\")')),r&&(t.style.backgroundImage=r)}(t,o)},y=function(t,e){r?t.classList.add(e):t.className+=(t.className?\" \":\"\")+e},h=function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp(\"(^|\\\\s+)\"+e+\"(\\\\s+|$)\"),\" \").replace(/^\\s+/,\"\").replace(/\\s+$/,\"\")},p=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,\"load\",e),E(t,\"loadeddata\",e),E(t,\"error\",n)},A=function(t,e,n){var r=n._settings,o=e?r.class_loaded:r.class_error,a=e?r.callback_loaded:r.callback_error,i=t.target;h(i,r.class_loading),y(i,o),d(a,i,n),f(n,-1)},I=function(t,e){var n=function n(o){A(o,!0,e),w(t,n,r)},r=function r(o){A(o,!1,e),w(t,n,r)};!function(t,e,n){p(t,\"load\",e),p(t,\"loadeddata\",e),p(t,\"error\",n)}(t,n,r)},k=[\"IMG\",\"IFRAME\",\"VIDEO\"],L=function(t,e){var n=e._observer;S(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){L(t,e),O(t)},n),l(t,r))},S=function(t,e,n){var r=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),y(t,r.class_loading)),g(t,e),function(t){s(t,\"was-processed\",\"true\")}(t),d(r.callback_reveal,t,e),d(r.callback_set,t,e))},z=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var r=n._settings;d(r.callback_enter,t,e,n),r.load_delay?x(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var r=n._settings;d(r.callback_exit,t,e,n),r.load_delay&&O(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+\"px\"}),!0);var e},C=[\"IMG\",\"IFRAME\"],N=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t){var e=t._settings;_toConsumableArray(e.container.querySelectorAll(\".\"+e.class_error)).forEach(function(t){h(t,e.class_error),function(t){s(t,\"was-processed\",null)}(t)}),t.update()},R=function(e,n){var r;this._settings=function(t){return _extends({},o,t)}(e),this._loadingCount=0,z(this),this.update(n),r=this,t&&window.addEventListener(\"online\",function(t){M(r)})};return R.prototype={update:function(t){var n,r=this,o=this._settings;(this._elements=N(t,o),!e&&this._observer)?(function(t){return t.use_native&&\"loading\"in HTMLImageElement.prototype}(o)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute(\"loading\",\"lazy\"),S(t,n))}),this._elements=N(t,o)),this._elements.forEach(function(t){r._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){S(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});\n//# sourceMappingURL=lazyload.min.js.map\n\n\n//# sourceURL=webpack:///./node_modules/vanilla-lazyload/dist/lazyload.min.js?");

/***/ }),

/***/ "./src/_assets/scripts/app.js":
/*!************************************!*\
  !*** ./src/_assets/scripts/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ \"./node_modules/vanilla-lazyload/dist/lazyload.min.js\");\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);\nconst basicLightbox = __webpack_require__(/*! basiclightbox */ \"./node_modules/basiclightbox/dist/basicLightbox.min.js\");\n\n\n/**\n * Set up lightbox\n */\n\ndocument.querySelectorAll(`[data-lightbox]`).forEach(el => {\n  el.addEventListener(`click`, e => {\n    e.preventDefault();\n    basicLightbox.create(`\n      <img width=\"1280\" src=\"${el.href}\">\n    `).show();\n  });\n});\n/**\n * Set up lazyloading\n */\n\nnew vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({\n  use_native: true,\n  elements_selector: `[data-srcset]`\n});\n\n//# sourceURL=webpack:///./src/_assets/scripts/app.js?");

/***/ })

/******/ });