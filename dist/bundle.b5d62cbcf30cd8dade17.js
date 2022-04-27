/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components.js":
/*!***************************!*\
  !*** ./src/Components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButtonElem": () => (/* binding */ createButtonElem),
/* harmony export */   "createCheckInputElem": () => (/* binding */ createCheckInputElem),
/* harmony export */   "createDateInputElem": () => (/* binding */ createDateInputElem),
/* harmony export */   "createTextElem": () => (/* binding */ createTextElem),
/* harmony export */   "createTextInputElem": () => (/* binding */ createTextInputElem)
/* harmony export */ });
var createTextElem = function createTextElem(text) {
  var _textElem$classList;

  var textElem = document.createElement('p');

  for (var _len = arguments.length, classList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classList[_key - 1] = arguments[_key];
  }

  (_textElem$classList = textElem.classList).add.apply(_textElem$classList, classList);

  textElem.textContent = text;
  return textElem;
};

var createTextInputElem = function createTextInputElem(placeholder, value) {
  var input = document.createElement('input');
  input.classList.add('px-1', 'bg-indigo-100', 'focus:outline-none');
  input.type = 'text';
  input.placeholder = placeholder;
  input.value = value;
  return input;
};

var createDateInputElem = function createDateInputElem(value) {
  var input = document.createElement('input');
  input.classList.add('bg-indigo-100', 'w-1/2', 'focus:outline-none');
  input.type = 'date';
  input.valueAsDate = value;
  return input;
};

var createCheckInputElem = function createCheckInputElem(checked) {
  var input = document.createElement('input');
  input.classList.add('w-5', 'h-5');
  input.type = 'checkbox';
  input.checked = checked;
  return input;
};

var createButtonElem = function createButtonElem(text) {
  var button = document.createElement('button');
  button.classList.add('p-1', 'w-1/2', 'bg-indigo-300', 'disabled:opacity-75');
  button.disabled = true;
  button.textContent = text;
  return button;
};



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
    return value;
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

/***/ "./src/listItemFactory.js":
/*!********************************!*\
  !*** ./src/listItemFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components.js */ "./src/Components.js");


var listItemFactory = function listItemFactory(task) {
  var item = document.createElement('li');
  item.classList.add('flex', 'flex-col', 'border-2', 'border-white', 'space-y-1', 'p-2');
  item.setAttribute('data-index', task.id);

  var getDemoItem = function getDemoItem() {
    item.classList.add('hover:p-3', 'hover:ease-in', 'duration-300');
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getTitle()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getDay(), 'text-sm', 'text-gray-500'));
    return item;
  };

  var getEditItem = function getEditItem() {
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Title', task.value.getTitle()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Description', task.value.getDesc()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDateInputElem)(task.value.getDate()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createCheckInputElem)(task.value.getIsPrior()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createButtonElem)('Save'));
    return item;
  };

  return {
    getDemoItem: getDemoItem,
    getEditItem: getEditItem
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemFactory);

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
/* harmony import */ var _listItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listItemFactory */ "./src/listItemFactory.js");


var storeDOMRenderer = function storeDOMRenderer(store) {
  var list = document.getElementById('taskList');

  var renderList = function renderList() {
    list.innerHTML = '';
    store.getStore().forEach(function (elem) {
      var item = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).getDemoItem();
      list.append(item);
    });
    return list.childNodes;
  };

  var replaceItem = function replaceItem(newItem, oldItem) {
    list.replaceChild(newItem, oldItem);
  };

  var addItem = function addItem(newItem) {
    list.append((0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem).getDemoItem());
  };

  return {
    renderList: renderList,
    addItem: addItem,
    replaceItem: replaceItem
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeDOMRenderer);

/***/ }),

/***/ "./src/storeFactory.js":
/*!*****************************!*\
  !*** ./src/storeFactory.js ***!
  \*****************************/
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
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = s.length > 0 ? s.map(function (item, index) {
    return {
      id: index,
      value: item
    };
  }) : [];

  var addToStore = function addToStore(task) {
    store.push({
      id: store.length,
      value: task
    });
  };

  var getStore = function getStore() {
    return _toConsumableArray(store);
  };

  var getItemByIndex = function getItemByIndex(i) {
    return store[i];
  };

  var getItemValueByIndex = function getItemValueByIndex(i) {
    return store[i].value;
  };

  var changeItemValue = function changeItemValue(i, task) {
    store[i].value = task;
  };

  var removeFromStore = function removeFromStore(i) {
    store.splice(i, 1);
    store.forEach(function (elem, index) {
      elem.id = index;
    });
  };

  return {
    addToStore: addToStore,
    getItemByIndex: getItemByIndex,
    getItemValueByIndex: getItemValueByIndex,
    changeItemValue: changeItemValue,
    getStore: getStore,
    removeFromStore: removeFromStore
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeFactory);

/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
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

  var getDay = function getDay() {
    return date.toLocaleDateString('en-US', {
      weekday: 'short'
    });
  };

  var getIsPrior = function getIsPrior() {
    return isPrior;
  }; // const getTask = () => ({ title, desc, date, isPrior });


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
    getDay: getDay,
    getIsPrior: getIsPrior,
    logTask: logTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

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
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _inputsOutputter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsOutputter */ "./src/inputsOutputter.js");
/* harmony import */ var _storeFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeFactory */ "./src/storeFactory.js");
/* harmony import */ var _storeDOMRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeDOMRenderer */ "./src/storeDOMRenderer.js");
/* harmony import */ var _listItemFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listItemFactory */ "./src/listItemFactory.js");





var btnAddTask = document.getElementById('addTask');
btnAddTask.addEventListener('click', addTaskHandler);
var dateInput = document.getElementById('dueDate');
dateInput.valueAsDate = new Date();
var arr = [(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Cook', 'Cook the dinner', new Date(2022, 4, 28), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Grocery', 'Go to the grocery store', new Date(2022, 4, 29), false)];
var store = (0,_storeFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(arr);
var renderer = (0,_storeDOMRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store);
renderer.renderList().forEach(function (item) {
  item.addEventListener('click', clickTaskHandler);
});

function addTaskHandler() {
  var inputs = (0,_inputsOutputter__WEBPACK_IMPORTED_MODULE_1__.inputsOutputter)();
  var task = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs.getTitleValue(), inputs.getDescValue(), inputs.getDateValue(), inputs.getPriorValue());
  store.addToStore(task);
  renderer.addItem({
    id: store.lenth - 1,
    value: task
  });
}

function clickTaskHandler(e) {
  var item = e.currentTarget;
  item.removeEventListener('click', clickTaskHandler);
  var index = item.getAttribute('data-index');
  var task = store.getItemByIndex(index);
  var newItem = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(task).getEditItem();
  renderer.replaceItem(newItem, item);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.b5d62cbcf30cd8dade17.js.map