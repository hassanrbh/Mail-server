/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/inbox.js":
/*!*********************************!*\
  !*** ./src/components/inbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inbox\": () => (/* binding */ inbox)\n/* harmony export */ });\n/* harmony import */ var _data_message_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/message_store */ \"./src/data/message_store.js\");\n\n\nlet inbox = {\n    render: () => {\n        let container = document.createElement('ul');\n        container.className = \"messages\";\n        debugger\n        _data_message_store__WEBPACK_IMPORTED_MODULE_0__.messageStore.getInboxMessage().forEach((message) => {\n            container.appendChild(renderMessage(message));\n        })\n        return container;\n    },\n    renderMessage: (message) => {\n        let node = document.createElement('li');\n        console.log(node);\n        node.className = \"message\";\n        let renderto = undefined.renderTo(message);\n        console.log(renderto);\n        node.innerHTML = renderto;\n        console.log(node)\n        return node;\n    },\n    renderTo: (message) => {\n        let span_1 = `<span class=\"from\">${message.from}</span>`;\n        let span_2 = `<span class=\"subject\">${message.subject}</span>`;\n        let span_3 = `<span class=\"body\">${message.body}</span>`;\n\n        return `${span_1} ${span_2} ${span_3}`\n    }\n}\n\n//# sourceURL=webpack://skeleton-13/./src/components/inbox.js?");

/***/ }),

/***/ "./src/data/message_store.js":
/*!***********************************!*\
  !*** ./src/data/message_store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messageStore\": () => (/* binding */ messageStore)\n/* harmony export */ });\nlet messages = {\n    sent: [{\n            to: \"friend@mail.com\",\n            subject: \"Check this out\",\n            body: \"It's so cool\"\n        },\n        {\n            to: \"person@mail.com\",\n            subject: \"zzz\",\n            body: \"so booring\"\n        }\n    ],\n    inbox: [{\n            from: \"grandma@mail.com\",\n            subject: \"Fwd: Fwd: Fwd: Check this out\",\n            body: \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n        },\n        {\n            from: \"person@mail.com\",\n            subject: \"Questionnaire\",\n            body: \"Take this free quiz win $1000 dollars\"\n        }\n    ]\n};\n\nlet messageStore = {\n    getInboxMessage: () => {\n        return messages.inbox;\n    },\n    getSendMessages: () => {\n        return messages.sent;\n    }\n};\n\n//# sourceURL=webpack://skeleton-13/./src/data/message_store.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inbox */ \"./src/components/inbox.js\");\n\n\n\nlet routes = {\n    \"inbox\": _components_inbox__WEBPACK_IMPORTED_MODULE_1__.inbox,\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let content = document.querySelector(\".content\");\n    let router = new (_router__WEBPACK_IMPORTED_MODULE_0___default())(content, routes);\n    router.start();\n\n    let sidebar_nav = document.querySelector(\".sidebar-nav\");\n    sidebar_nav.childNodes.forEach((node) => {\n        node.addEventListener(\"click\", (e) => {\n            let target_el = e.target.textContent.toLowerCase();\n            window.location.hash = target_el;\n        })\n    })\n})\n\n//# sourceURL=webpack://skeleton-13/./src/index.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n    constructor(node, routes) {\n        this.node = node;\n        this.routes = routes;\n    }\n\n    start() {\n        this.render();\n        window.addEventListener(\"hashchange\", () => {\n            this.render();\n        });\n    }\n\n    activeRoute() {\n        let curr_route = window.location.hash.substring(1);\n        let component = this.routes[curr_route]\n        return component;\n    }\n\n    render() {\n        this.node.innerHTML = \"\";\n        let component = this.activeRoute();\n        if (component) {\n            this.node.appendChild(component.render());\n        }\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://skeleton-13/./src/router.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;