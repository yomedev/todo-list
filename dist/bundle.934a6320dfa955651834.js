/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMElementFactory.js":
/*!**********************************!*\
  !*** ./src/DOMElementFactory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOMElementFactory = function DOMElementFactory() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var element = document.createElement(tag);
  classList.forEach(function (item) {
    element.classList.add(item);
  });

  var addClass = function addClass(className) {
    element.classList.add(className);
  };

  var addToElement = function addToElement(elem) {
    element.append(elem);
  };

  var getElement = function getElement() {
    return element;
  };

  var addContent = function addContent(content) {
    element.textContent = content;
  };

  return {
    addClass: addClass,
    addToElement: addToElement,
    getElement: getElement,
    addContent: addContent
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMElementFactory);

/***/ }),

/***/ "./src/inputsOutputter.js":
/*!********************************!*\
  !*** ./src/inputsOutputter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputsOutputter": () => (/* binding */ inputsOutputter)
/* harmony export */ });
var inputsOutputter = function inputsOutputter() {
  var getTitleValue = function getTitleValue() {
    return inputTextOutputter('title').getText();
  };

  var getDescValue = function getDescValue() {
    return inputTextOutputter('desc').getText();
  };

  var getDateValue = function getDateValue() {
    return inputDateOutputter().getDate();
  };

  var getPriorValue = function getPriorValue() {
    return inputCheckOutputter().getCheck();
  };

  return {
    getTitleValue: getTitleValue,
    getDescValue: getDescValue,
    getDateValue: getDateValue,
    getPriorValue: getPriorValue
  };
};

var inputTextOutputter = function inputTextOutputter(id) {
  var input = document.getElementById(id);
  var value = input.value;
  input.value = '';

  var getText = function getText() {
    return value;
  };

  return {
    getText: getText
  };
};

var inputDateOutputter = function inputDateOutputter() {
  var input = document.getElementById('dueDate');
  var value = new Date(input.valueAsDate);
  input.valueAsDate = new Date();

  var getDate = function getDate() {
    return value.toLocaleDateString('en-US', {
      weekday: 'short'
    });
  };

  return {
    getDate: getDate
  };
};

function inputCheckOutputter() {
  var input = document.getElementById('isPrioritized');
  var value = input.checked;
  input.checked = false;

  var getCheck = function getCheck() {
    return value;
  };

  return {
    getCheck: getCheck
  };
}



/***/ }),

/***/ "./src/storeDOMRenderer.js":
/*!*********************************!*\
  !*** ./src/storeDOMRenderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMElementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElementFactory */ "./src/DOMElementFactory.js");


var storeDOMRenderer = function storeDOMRenderer(store) {
  var list = document.getElementById('taskList');

  var renderDOM = function renderDOM() {
    list.innerHTML = '';
    store.getStore().forEach(function (element) {
      var item = (0,_DOMElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', ['flex', 'flex-col', 'justify-between', 'border-2', 'border-white', 'px-3', 'mb-1', 'hover:px-4', 'hover:py-1', 'hover:ease-in', 'duration-300']);
      var title = (0,_DOMElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('p', ['text-lg']);
      title.addContent(element.getTitle());
      ;
      item.addToElement(title.getElement());
      var date = (0,_DOMElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('p', ['text-sm', 'text-gray-500']);
      date.addContent(element.getDate());
      item.addToElement(date.getElement());
      list.append(item.getElement());
    });
  };

  return {
    renderDOM: renderDOM
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeDOMRenderer);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var taskFactory = function taskFactory(title, desc, date, isPrior) {
  var getTitle = function getTitle() {
    return title;
  };

  var getDesc = function getDesc() {
    return desc;
  };

  var getDate = function getDate() {
    return date;
  };

  var getIsPrior = function getIsPrior() {
    return isPrior;
  };

  var logTask = function logTask() {
    console.log("title: ".concat(title));
    console.log("desc: ".concat(desc));
    console.log("date: ".concat(date));
    console.log("isPrior: ".concat(isPrior));
  };

  return {
    getTitle: getTitle,
    getDesc: getDesc,
    getDate: getDate,
    getIsPrior: getIsPrior,
    logTask: logTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ }),

/***/ "./src/tasksStore.js":
/*!***************************!*\
  !*** ./src/tasksStore.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var storeFactory = function storeFactory() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = arr;

  var addToStore = function addToStore(task) {
    store.push(task);
  };

  var logStore = function logStore() {
    store.forEach(function (item) {
      console.log('---------------');
      item.logTask();
    });
  };

  var getStore = function getStore() {
    return _toConsumableArray(store);
  };

  var getItemByIndex = function getItemByIndex(i) {
    return store[i];
  };

  return {
    addToStore: addToStore,
    logStore: logStore,
    getItemByIndex: getItemByIndex,
    getStore: getStore
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeFactory);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _inputsOutputter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsOutputter */ "./src/inputsOutputter.js");
/* harmony import */ var _tasksStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksStore */ "./src/tasksStore.js");
/* harmony import */ var _storeDOMRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeDOMRenderer */ "./src/storeDOMRenderer.js");




var btnAddTask = document.getElementById('addTask');
btnAddTask.addEventListener('click', addTaskHandler);
var dateInput = document.getElementById('dueDate');
dateInput.valueAsDate = new Date();
var arr = [(0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])('Book', 'Read 10 pages of the book', 'Fri', true), (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])('Cook', 'Cook the dinner', 'Mon', true), (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])('Store', 'Go to store', 'Thu', false)];
var store = (0,_tasksStore__WEBPACK_IMPORTED_MODULE_2__["default"])(arr);
var renderer = (0,_storeDOMRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store);
renderer.renderDOM();

function addTaskHandler() {
  var inputs = (0,_inputsOutputter__WEBPACK_IMPORTED_MODULE_1__.inputsOutputter)();
  var task = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs.getTitleValue(), inputs.getDescValue(), inputs.getDateValue(), inputs.getPriorValue());
  store.addToStore(task);
  renderer.renderDOM(); // store.logStore();
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.934a6320dfa955651834.js.map