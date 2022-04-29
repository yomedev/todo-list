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
/* harmony export */   "createDelButton": () => (/* binding */ createDelButton),
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

var createTextInputElem = function createTextInputElem(placeholder, value, id) {
  var input = document.createElement('input');
  input.classList.add('px-1', 'bg-indigo-100', 'focus:outline-none');
  input.setAttribute('id', id);
  input.type = 'text';
  input.placeholder = placeholder;
  input.value = value;
  return input;
};

var createDateInputElem = function createDateInputElem(value, id) {
  var input = document.createElement('input');
  input.classList.add('bg-indigo-100', 'w-1/2', 'focus:outline-none');
  input.setAttribute('id', id);
  input.type = 'date';
  input.valueAsDate = value;
  return input;
};

var createCheckInputElem = function createCheckInputElem(checked, id) {
  var input = document.createElement('input');
  input.classList.add('w-5', 'h-5');
  input.setAttribute('id', id);
  input.type = 'checkbox';
  input.checked = checked;
  return input;
};

var createButtonElem = function createButtonElem(text, id) {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-1/2', 'bg-indigo-300');
  button.setAttribute('id', id);
  button.disabled = true;
  button.textContent = text;
  return button;
};

var createDelButton = function createDelButton() {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-1/2', 'bg-red-300');
  button.setAttribute('id', 'delBtn');
  button.textContent = "Delete";
  return button;
};

var createSelect = function createSelect() {
  var select = document.createElement('select');
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
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getTitle()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getDay(), 'text-sm', 'text-gray-500'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDelButton)());
    return item;
  };

  var getEditItem = function getEditItem() {
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Title', task.value.getTitle(), 'editTitle'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Description', task.value.getDesc(), 'editDesc'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDateInputElem)(task.value.getDate(), 'editDueDate'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createCheckInputElem)(task.value.getIsPrior(), 'editPrior'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createButtonElem)('Save', 'saveBtn'));
    return item;
  };

  return {
    getDemoItem: getDemoItem,
    getEditItem: getEditItem
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemFactory);

/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
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

var projectFactory = function projectFactory(title) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var getTitle = function getTitle() {
    return title;
  };

  var getTasks = function getTasks() {
    return _toConsumableArray(store);
  };

  var changeTitle = function changeTitle(t) {
    title = t;
  };

  var addTask = function addTask(task) {
    store.addToStore(task);
  };

  return {
    getTitle: getTitle,
    getTasks: getTasks,
    changeTitle: changeTitle,
    addTask: addTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/projectStoreFactory.js":
/*!************************************!*\
  !*** ./src/projectStoreFactory.js ***!
  \************************************/
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

var projectStoreFactory = function projectStoreFactory() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var addToStore = function addToStore(project) {
    return store.push(project);
  };

  var getStore = function getStore() {
    return _toConsumableArray(store);
  };

  return {
    addToStore: addToStore,
    getStore: getStore
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectStoreFactory);

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
  };

  var cloneTask = function cloneTask() {
    return taskFactory(title, desc, date, isPrior);
  };

  var changeTitle = function changeTitle(t) {
    title = t;
    return title;
  };

  var changeDesc = function changeDesc(d) {
    desc = d;
  };

  var changeDate = function changeDate(d) {
    date = d;
  };

  var changePrior = function changePrior(p) {
    isPrior = p;
  };

  return {
    getTitle: getTitle,
    getDesc: getDesc,
    getDate: getDate,
    getDay: getDay,
    getIsPrior: getIsPrior,
    changeDate: changeDate,
    changeDesc: changeDesc,
    changePrior: changePrior,
    changeTitle: changeTitle,
    cloneTask: cloneTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ }),

/***/ "./src/taskStoreFactory.js":
/*!*********************************!*\
  !*** ./src/taskStoreFactory.js ***!
  \*********************************/
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

var taskStoreFactory = function taskStoreFactory() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = s.length > 0 ? s.map(function (item, index) {
    return {
      id: index,
      value: item
    };
  }) : [];

  var addToStore = function addToStore(task) {
    return store[store.push({
      id: store.length,
      value: task
    })];
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
    var removed = store.splice(i, 1)[0];
    store.forEach(function (elem, index) {
      elem.id = index;
    });
    return removed;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskStoreFactory);

/***/ }),

/***/ "./src/taskStoreRenderer.js":
/*!**********************************!*\
  !*** ./src/taskStoreRenderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listItemFactory */ "./src/listItemFactory.js");


var taskStoreRenderer = function taskStoreRenderer(store) {
  var list = document.getElementById('taskList');

  var renderList = function renderList() {
    list.innerHTML = '';
    store.getStore().forEach(function (elem) {
      var item = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).getDemoItem();
      list.append(item);
    });
    return list.childNodes;
  };

  var changeItemToEdit = function changeItemToEdit(demo) {
    var index = demo.getAttribute('data-index');
    var task = store.getItemByIndex(index);
    var edit = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(task).getEditItem();
    list.replaceChild(edit, demo);
    return edit;
  };

  var changeItemToDemo = function changeItemToDemo(edit) {
    var index = edit.getAttribute('data-index');
    var task = store.getItemByIndex(index);
    var demo = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(task).getDemoItem();
    list.replaceChild(demo, edit);
    return demo;
  };

  var addItem = function addItem(task) {
    var item = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(task).getDemoItem();
    list.append(item);
    return item;
  };

  var removeItem = function removeItem(item) {
    list.removeChild(item);
    list.childNodes.forEach(function (elem, i) {
      elem.setAttribute('data-index', i);
    });
    return item;
  };

  var getList = function getList() {
    return list;
  };

  return {
    renderList: renderList,
    addItem: addItem,
    changeItemToEdit: changeItemToEdit,
    changeItemToDemo: changeItemToDemo,
    removeItem: removeItem,
    getList: getList
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskStoreRenderer);

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
/* harmony import */ var _taskStoreFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskStoreFactory */ "./src/taskStoreFactory.js");
/* harmony import */ var _taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStoreRenderer */ "./src/taskStoreRenderer.js");
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectFactory */ "./src/projectFactory.js");
/* harmony import */ var _projectStoreFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectStoreFactory */ "./src/projectStoreFactory.js");





 // Global variables

var dateInput = document.getElementById('dueDate');
dateInput.valueAsDate = new Date();
var arr = [(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Cook', 'Cook the dinner', new Date(2022, 4, 28), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Grocery', 'Go to the grocery store', new Date(2022, 4, 29), false)];
var store = (0,_taskStoreFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(arr);
var commonProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])('Common', store);
var projectStore = (0,_projectStoreFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([commonProject]); // Listeners

document.getElementById('addTask').addEventListener('click', addTaskHandler);
document.getElementById('addProj').addEventListener('click', addProjectHandler);
document.getElementById('openProj').addEventListener('click', openProjectHandler);
var renderer = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store);
renderer.renderList().forEach(function (item) {
  item.addEventListener('dblclick', dblclickTaskHandler);
  deleteHandler(item);
});
var projectSelecter = document.getElementById('projSelecter');
var projectList = document.getElementById('projList');
projectStore.getStore().forEach(function (project) {
  var option = document.createElement('option');
  var title = project.getTitle();
  option.value = title;
  option.textContent = title;
  projectSelecter.append(option);
  var listItem = document.createElement('li');
  listItem.classList.add('text-lg', 'p-2', 'w-full', 'h-full', 'hover:bg-indigo-400', 'cursor-pointer');
  listItem.textContent = title;
  projectList.append(listItem);
}); // Handlers

function addProjectHandler() {
  projectStore.addToStore((0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(document.getElementById('titleProj').value));
}

function openProjectHandler() {
  document.getElementById('projList').classList.toggle('hidden');
  document.getElementById('projList').classList.toggle('flex');
}

function deleteHandler(item) {
  item.getElementsByTagName('button')[0].addEventListener('click', function (e) {
    store.removeFromStore(item.getAttribute('data-index'));
    renderer.removeItem(item);
  });
}

function addTaskHandler() {
  var inputs = (0,_inputsOutputter__WEBPACK_IMPORTED_MODULE_1__.inputsOutputter)();
  var task = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs.getTitleValue(), inputs.getDescValue(), inputs.getDateValue(), inputs.getPriorValue());
  renderer.addItem(store.addToStore(task)).addEventListener('dblclick', dblclickTaskHandler);
}

function dblclickTaskHandler(e) {
  var item = e.currentTarget;
  item.removeEventListener('dblclick', dblclickTaskHandler);
  item = renderer.changeItemToEdit(item);
  var task = store.getItemValueByIndex(item.getAttribute('data-index'));
  saveEditHandler(item, editInputsHandler(task.cloneTask(), task));
}

var editInputsHandler = function editInputsHandler(newTask, task) {
  document.getElementById('editTitle').addEventListener('input', function (e) {
    document.getElementById('saveBtn').disabled = newTask.changeTitle(e.currentTarget.value) === task.getTitle() || newTask.getTitle().length < 1;
  });
  document.getElementById('editDesc').addEventListener('input', function (e) {
    document.getElementById('saveBtn').disabled = newTask.changeDesc(e.currentTarget.value) === task.getDesc();
  });
  document.getElementById('editDueDate').addEventListener('input', function (e) {
    document.getElementById('saveBtn').disabled = newTask.changeDate(e.currentTarget.valueAsDate) === task.getDate();
  });
  document.getElementById('editPrior').addEventListener('input', function (e) {
    document.getElementById('saveBtn').disabled = newTask.changePrior(e.currentTarget.checked) === task.getIsPrior();
  });
  return newTask;
};

var saveEditHandler = function saveEditHandler(item, task) {
  document.getElementById('saveBtn').addEventListener('click', function (e) {
    store.changeItemValue(e.currentTarget.parentElement.getAttribute('data-index'), task);
    renderer.changeItemToDemo(item).addEventListener('dblclick', dblclickTaskHandler);
  });
};
})();

/******/ })()
;
//# sourceMappingURL=bundle.427d6800d0886081657d.js.map