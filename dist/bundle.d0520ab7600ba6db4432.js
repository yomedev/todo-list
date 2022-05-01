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
/* harmony export */   "createCloseButton": () => (/* binding */ createCloseButton),
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

var createCloseButton = function createCloseButton() {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-1/2', 'bg-green-300');
  button.setAttribute('id', 'closeBtn');
  button.textContent = "Close";
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
  var title = inputTextOutputter('title').getText();
  var desc = inputTextOutputter('desc').getText();
  var date = inputDateOutputter().getDate();
  var isPrior = inputCheckOutputter().getCheck();

  var getTitleValue = function getTitleValue() {
    return title;
  };

  var getDescValue = function getDescValue() {
    return desc;
  };

  var getDateValue = function getDateValue() {
    return date;
  };

  var getPriorValue = function getPriorValue() {
    return isPrior;
  };

  var getProjectValue = function getProjectValue() {
    return inputSelectOutputter();
  };

  var getTask = function getTask() {
    return {
      title: title,
      desc: desc,
      date: date,
      isPrior: isPrior
    };
  };

  return {
    getTitleValue: getTitleValue,
    getDescValue: getDescValue,
    getDateValue: getDateValue,
    getPriorValue: getPriorValue,
    getProjectValue: getProjectValue,
    getTask: getTask
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

var inputSelectOutputter = function inputSelectOutputter() {
  var select = document.getElementById('projSelecter');

  var getProject = function getProject() {
    return select.value;
  };

  return {
    getProject: getProject
  };
};



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
    item.setAttribute('id', 'demo');
    item.classList.add('hover:p-3', 'hover:ease-in', 'duration-300');
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getTitle()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getDay(), 'text-sm', 'text-gray-500'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDelButton)());
    return item;
  };

  var getEditItem = function getEditItem() {
    item.setAttribute('id', 'edit');
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Title', task.value.getTitle(), 'editTitle'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextInputElem)('Description', task.value.getDesc(), 'editDesc'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDateInputElem)(task.value.getDate(), 'editDueDate'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createCheckInputElem)(task.value.getIsPrior(), 'editPrior'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createButtonElem)('Save', 'saveBtn'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createCloseButton)());
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
/* harmony import */ var _taskStoreFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskStoreFactory */ "./src/taskStoreFactory.js");


var projectFactory = function projectFactory(title) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_taskStoreFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var getTitle = function getTitle() {
    return title;
  };

  var getTaskStore = function getTaskStore() {
    return store;
  };

  var changeTitle = function changeTitle(t) {
    title = t;
  };

  var addTask = function addTask(task) {
    return store.addToStore(task);
  };

  return {
    getTitle: getTitle,
    getTaskStore: getTaskStore,
    changeTitle: changeTitle,
    addTask: addTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/projectRenderer.js":
/*!********************************!*\
  !*** ./src/projectRenderer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskStoreRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskStoreRenderer */ "./src/taskStoreRenderer.js");


var projectRenderer = function projectRenderer(project) {
  var header = document.getElementById('projHeader');

  var renderProject = function renderProject() {
    header.textContent = project.getTitle();
    var taskRenderer = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_0__["default"])(project.getTaskStore());
    taskRenderer.renderList();
    return taskRenderer;
  };

  var changeProject = function changeProject(proj) {
    project = proj;
  };

  return {
    renderProject: renderProject,
    changeProject: changeProject
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectRenderer);

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
var projectStoreFactory = function projectStoreFactory() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = s.length > 0 ? s.map(function (item, index) {
    return {
      id: index,
      value: item
    };
  }) : [];

  var addToStore = function addToStore(project) {
    return store[store.push({
      id: store.length,
      value: project
    }) - 1];
  };

  var getStore = function getStore() {
    return store;
  };

  var cloneStore = function cloneStore() {
    return projectStoreFactory(s);
  };

  var getItemByIndex = function getItemByIndex(index) {
    return store[index];
  };

  var getItemValueByIndex = function getItemValueByIndex(index) {
    return store[index].value;
  };

  return {
    addToStore: addToStore,
    getStore: getStore,
    cloneStore: cloneStore,
    getItemByIndex: getItemByIndex,
    getItemValueByIndex: getItemValueByIndex
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

  var getTask = function getTask() {
    title, desc, data, isPrior;
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
    getTask: getTask,
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
    }) - 1];
  };

  var getStore = function getStore() {
    return store;
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

  var cloneTaskStore = function cloneTaskStore() {
    return taskStoreFactory(s);
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
    removeFromStore: removeFromStore,
    cloneTaskStore: cloneTaskStore
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

  var getListItems = function getListItems() {
    return list.childNodes;
  };

  var getItemByIndex = function getItemByIndex(index) {
    return list.childNodes.item(index);
  };

  return {
    renderList: renderList,
    addItem: addItem,
    changeItemToEdit: changeItemToEdit,
    changeItemToDemo: changeItemToDemo,
    removeItem: removeItem,
    getListItems: getListItems,
    getItemByIndex: getItemByIndex
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
/* harmony import */ var _projectRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectRenderer */ "./src/projectRenderer.js");






 // Global variables

document.getElementById('dueDate').valueAsDate = new Date();
var projectStore = (0,_projectStoreFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([(0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])('Common', (0,_taskStoreFactory__WEBPACK_IMPORTED_MODULE_2__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Cook', 'Cook the dinner', new Date(2022, 5, 2), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Grocery', 'Go to the grocery store', new Date(2022, 5, 1), false)])), (0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])('Working', (0,_taskStoreFactory__WEBPACK_IMPORTED_MODULE_2__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Web', 'Learn about a new technology', new Date(2022, 5, 1), true)])), (0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])('Training', (0,_taskStoreFactory__WEBPACK_IMPORTED_MODULE_2__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Running', 'Run 2 km at morning', new Date(2022, 5, 1), false), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Gym', 'Train 2 hr session at evening', new Date(2022, 4, 30), true)]))]); // Listeners

addTaskHandler();
document.getElementById('addProj').addEventListener('click', addProjectHandler);
var projectSelecter = document.getElementById('projSelecter');
var projectPicker = document.getElementById('projPicker');
projectPicker.addEventListener('input', pickProjectHandler);
projectStore.getStore().forEach(function (project) {
  addOptionToSelect(projectSelecter, project);
  addOptionToSelect(projectPicker, project);
});
var currentProject = projectStore.getItemValueByIndex(projectPicker.value);
var renderer = (0,_projectRenderer__WEBPACK_IMPORTED_MODULE_6__["default"])(currentProject);
var storeList = renderer.renderProject().getListItems();
storeList.forEach(function (item) {
  deleteTaskHandler(currentProject.getTaskStore(), item);
  dblclickTaskHandler(currentProject.getTaskStore(), item);
});

function addOptionToSelect(select, project) {
  var option = document.createElement('option');
  var title = project.value.getTitle();
  option.value = project.id;
  option.textContent = title;
  select.append(option);
} // Handlers


function pickProjectHandler(e) {
  currentProject = projectStore.getItemValueByIndex(e.currentTarget.value);
  renderer.changeProject(currentProject);
  renderer.renderProject();
  storeList.forEach(function (item) {
    deleteTaskHandler(currentProject.getTaskStore(), item);
    dblclickTaskHandler(currentProject.getTaskStore(), item);
  });
}

function addProjectHandler() {
  var input = document.getElementById('titleProj');
  var value = input.value;
  input.value = '';
  var project = projectStore.addToStore((0,_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(value));
  addOptionToSelect(projectSelecter, project);
  addOptionToSelect(projectPicker, project);
}

function addTaskHandler() {
  document.getElementById('addTask').addEventListener('click', function () {
    var inputs = (0,_inputsOutputter__WEBPACK_IMPORTED_MODULE_1__.inputsOutputter)();
    var task = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs.getTitleValue(), inputs.getDescValue(), inputs.getDateValue(), inputs.getPriorValue());
    var projectId = inputs.getProjectValue().getProject();
    var project = projectStore.getItemValueByIndex(projectId);
    var taskStoreItem = project.addTask(task);
    var taskStore = project.getTaskStore();

    if (projectId === projectPicker.value) {
      var listItem = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(taskStore).addItem(taskStoreItem);
      deleteTaskHandler(project.getTaskStore(), listItem);
      dblclickTaskHandler(taskStore, listItem);
    }
  });
}

function deleteTaskHandler(store, item) {
  item.getElementsByTagName('button')[0].addEventListener('click', function (e) {
    store.removeFromStore(item.getAttribute('data-index'));
    (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store).removeItem(item);
  });
}

function dblclickTaskHandler(store, item) {
  var taskRenderer = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store);
  item.addEventListener('dblclick', function () {
    taskRenderer.getListItems().forEach(function (item, index) {
      if (item.getAttribute('id') === 'edit') {
        item = taskRenderer.changeItemToDemo(taskRenderer.getItemByIndex(index));
        dblclickTaskHandler(store, item);
      }
    });
    item.removeEventListener('dblclick', dblclickTaskHandler);
    item = taskRenderer.changeItemToEdit(item);
    var task = store.getItemValueByIndex(item.getAttribute('data-index'));
    saveEditHandler(store, item, editInputsHandler(task.cloneTask(), task));
    closeTaskHandler(store, item);
  });
}

var saveEditHandler = function saveEditHandler(store, item, task) {
  document.getElementById('saveBtn').addEventListener('click', function (e) {
    store.changeItemValue(e.currentTarget.parentElement.getAttribute('data-index'), task);
    item = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store).changeItemToDemo(item);
    dblclickTaskHandler(store, item);
    deleteTaskHandler(store, item);
  });
};

var closeTaskHandler = function closeTaskHandler(store, item) {
  document.getElementById('closeBtn').addEventListener('click', function () {
    item = (0,_taskStoreRenderer__WEBPACK_IMPORTED_MODULE_3__["default"])(store).changeItemToDemo(item);
    dblclickTaskHandler(store, item);
    deleteTaskHandler(store, item);
  });
};

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.d0520ab7600ba6db4432.js.map