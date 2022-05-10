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
/* harmony export */   "createProjectCancelBtn": () => (/* binding */ createProjectCancelBtn),
/* harmony export */   "createProjectDelBtn": () => (/* binding */ createProjectDelBtn),
/* harmony export */   "createProjectInput": () => (/* binding */ createProjectInput),
/* harmony export */   "createProjectSaveBtn": () => (/* binding */ createProjectSaveBtn),
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

var createProjectInput = function createProjectInput() {
  var input = document.createElement('input');
  input.type = 'text';
  input.classList.add('w-40', 'bg-transparent', 'p-2', 'mr-2', 'text-xl', 'font-bold', 'outline-none', 'hover:bg-indigo-100', 'focus:bg-indigo-100');
  input.setAttribute('id', 'projTitle');
  return input;
};

var createProjectDelBtn = function createProjectDelBtn() {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-24', 'bg-red-300', 'text-lg');
  button.setAttribute('id', 'projDel');
  button.textContent = "Delete";
  return button;
};

var createProjectSaveBtn = function createProjectSaveBtn() {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-16', 'bg-indigo-300', 'text-lg');
  button.setAttribute('id', 'projSave');
  button.textContent = "Save";
  return button;
};

var createProjectCancelBtn = function createProjectCancelBtn() {
  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('p-1', 'w-16', 'bg-green-300', 'text-lg');
  button.setAttribute('id', 'projCancel');
  button.textContent = "Cancel";
  return button;
};



/***/ }),

/***/ "./src/Handlers.js":
/*!*************************!*\
  !*** ./src/Handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectHandler": () => (/* binding */ addProjectHandler),
/* harmony export */   "deleteProjectHandler": () => (/* binding */ deleteProjectHandler),
/* harmony export */   "editProjectHandler": () => (/* binding */ editProjectHandler),
/* harmony export */   "fillSelectWithProjects": () => (/* binding */ fillSelectWithProjects),
/* harmony export */   "pickProjectHandler": () => (/* binding */ pickProjectHandler)
/* harmony export */ });
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ "./src/projectFactory.js");


function addProjectHandler(projectStore, renderer, projectSelect) {
  var project = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.getElementById('titleProjInput').addEventListener('input', function (e) {
    var title = project.changeTitle(e.target.value);
    document.getElementById('addProj').disabled = title.length < 3;
  });
  document.getElementById('addProj').addEventListener('click', function (e) {
    e.target.disabled = true;
    document.getElementById('titleProjInput').value = '';
    project = projectStore.addItem(project);
    fillSelectWithProjects(projectStore, projectSelect, projectSelect.value);

    if (projectStore.getSize() === 1) {
      console.log(renderer);
      renderer.changeProject(project);
      renderer.renderProject();
    }

    project = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}

function deleteProjectHandler(projectStore, renderer, projectSelect) {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'projDel') {
      projectStore.removeItem(projectSelect.value);
      var index = fillSelectWithProjects(projectStore, projectSelect);
      var project = projectStore.getSize() ? projectStore.getItemByIndex(index) : null;
      renderer.changeProject(project);
      renderer.renderProject();
    }
  });
}

function pickProjectHandler(projectStore, projectRenderer) {
  document.addEventListener('change', function (e) {
    if (e.target.id === 'projSelect') {
      var project = projectStore.getItemByIndex(e.target.value);
      projectRenderer.changeProject(project);
      projectRenderer.renderProject();
    }
  });
}

function editProjectHandler(projectStore, renderer, projectSelect) {
  document.addEventListener('focus', function (e) {
    if (e.target.id === 'projTitle') {
      renderer.changeToEdit();
    }
  }, true);
  document.addEventListener('click', function (e) {
    if (e.target.id === 'projClose') {
      renderer.changeToDemo();
    }
  });
  var title = {
    value: ''
  };
  var prevTitle = projectStore.getItemValueByIndex(projectSelect.value).getTitle();
  document.addEventListener('input', function (e) {
    if (e.target.id === 'projTitle') {
      title.value = e.target.value;
      document.getElementById('projSave').disabled = title.value.length < 3 || title.value === prevTitle;
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.id === 'projSave') {
      projectStore.getItemByIndex(projectSelect.value).value.changeTitle(title.value);
      fillSelectWithProjects(projectStore, projectSelect, projectSelect.value);
    }
  });
}

function getOptionForSelect(project) {
  var option = document.createElement('option');
  var title = project.value.getTitle();
  option.value = project.id;
  option.textContent = title;
  return option;
}

function fillSelectWithProjects(projectStore, select) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  select.innerHTML = '';
  projectStore.getStore().forEach(function (project) {
    select.append(getOptionForSelect(project));
  });
  select.value = value;
  return select.value;
}



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
    item.append((0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getTitle()), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElem)(task.value.getDueDay(), 'text-sm', 'text-gray-500'), (0,_Components_js__WEBPACK_IMPORTED_MODULE_0__.createDelButton)());
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
/* harmony import */ var _storeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeFactory */ "./src/storeFactory.js");


var projectFactory = function projectFactory() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var taskStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_storeFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var getTitle = function getTitle() {
    return title;
  };

  var getTaskStore = function getTaskStore() {
    return taskStore.cloneStore();
  };

  var changeTitle = function changeTitle(titleArg) {
    title = titleArg;
    return title;
  };

  var addTask = function addTask(task) {
    return taskStore.addItemToStore(task);
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

/***/ "./src/projectItemFactory.js":
/*!***********************************!*\
  !*** ./src/projectItemFactory.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./src/Components.js");


var projectItemFactory = function projectItemFactory(project) {
  var getProjectItemDemo = function getProjectItemDemo() {
    return (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createProjectDelBtn)();
  };

  var getProjectItemEdit = function getProjectItemEdit() {
    var wrap = document.createElement('div');
    wrap.classList.add('flex', 'space-x-2');
    wrap.append((0,_Components__WEBPACK_IMPORTED_MODULE_0__.createProjectSaveBtn)(), (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createProjectCancelBtn)());
    return wrap;
  };

  return {
    getProjectItemDemo: getProjectItemDemo,
    getProjectItemEdit: getProjectItemEdit,
    createProjectCancelBtn: _Components__WEBPACK_IMPORTED_MODULE_0__.createProjectCancelBtn
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectItemFactory);

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
/* harmony import */ var _projectItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItemFactory */ "./src/projectItemFactory.js");
/* harmony import */ var _taskStoreRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskStoreRenderer */ "./src/taskStoreRenderer.js");



var projectRenderer = function projectRenderer(project) {
  var panel = document.getElementById('projPanel');

  var renderProject = function renderProject() {
    panel.innerHTML = '';

    if (project != null) {
      var input = document.createElement('input');
      input.value = project.value.getTitle();
      input.classList.add('w-1/2');
      input.id = 'projTitle';
      panel.append(input);
      panel.append(getDemo());
    }
  };

  var changeToDemo = function changeToDemo() {
    panel.replaceChild(getDemo(), panel.lastElementChild);
  };

  var changeToEdit = function changeToEdit() {
    panel.replaceChild(getEdit(), panel.lastElementChild);
  };

  var getEdit = function getEdit() {
    var div = document.createElement('div');
    div.classList.add('flex', 'space-x-4');
    div.append(getButton('projSave', 'Save', true), getButton('projClose', 'Close'));
    return div;
  };

  var getDemo = function getDemo() {
    var div = document.createElement('div');
    div.append(getButton('projDel', 'Delete'));
    return div;
  };

  var getButton = function getButton(id, title) {
    var isDisabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var button = document.createElement('button');
    button.id = id;
    button.disabled = isDisabled;
    button.classList.add('border-2');
    button.textContent = title;
    return button;
  };

  var changeProject = function changeProject(projectArg) {
    project = projectArg;
  };

  return {
    renderProject: renderProject,
    changeProject: changeProject,
    changeToEdit: changeToEdit,
    changeToDemo: changeToDemo
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectRenderer);

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storeFactory = function storeFactory() {
  var storeArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = storeArg.length ? storeArg.map(function (item, index) {
    return {
      id: index,
      value: item
    };
  }) : [];

  var addItem = function addItem(item) {
    return _objectSpread({}, store[store.push({
      id: store.length,
      value: item
    }) - 1]);
  };

  var getStore = function getStore() {
    return _toConsumableArray(store);
  };

  var cloneStore = function cloneStore() {
    return storeFactory(storeArg);
  };

  var getItemByIndex = function getItemByIndex(index) {
    return _objectSpread({}, store[index]);
  };

  var getItemValueByIndex = function getItemValueByIndex(index) {
    return _objectSpread({}, store[index].value);
  };

  var changeItemValue = function changeItemValue(index, value) {
    store[index].value = value;
    return _objectSpread({}, store[index]);
  };

  var removeItem = function removeItem(index) {
    var removed = store.splice(index, 1)[0];
    store.forEach(function (elem, i) {
      elem.id = i;
    });
    return removed;
  };

  var getSize = function getSize() {
    return store.length;
  };

  return {
    addItem: addItem,
    getStore: getStore,
    cloneStore: cloneStore,
    getItemByIndex: getItemByIndex,
    getItemValueByIndex: getItemValueByIndex,
    changeItemValue: changeItemValue,
    removeItem: removeItem,
    getSize: getSize
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
var taskFactory = function taskFactory(task, description, dueDate, priority) {
  var getTitle = function getTitle() {
    return task;
  };

  var getDescription = function getDescription() {
    return description;
  };

  var getDueDate = function getDueDate() {
    return dueDate;
  };

  var getDueDay = function getDueDay() {
    return dueDate.toLocaleDateString('en-US', {
      weekday: 'short'
    });
  };

  var getPrioriry = function getPrioriry() {
    return priority;
  };

  var getTask = function getTask() {
    task, description, dueDate, priority;
  };

  var cloneTask = function cloneTask() {
    return taskFactory(task, description, dueDate, priority);
  };

  var changeTitle = function changeTitle(taskArg) {
    task = taskArg;
    return task;
  };

  var changeDescription = function changeDescription(descriptionArg) {
    description = descriptionArg;
    return description;
  };

  var changeDueDate = function changeDueDate(dueDateArg) {
    dueDate = dueDateArg;
    return dueDate;
  };

  var changePrior = function changePrior(priorityArg) {
    priority = priorityArg;
    return priority;
  };

  return {
    getTitle: getTitle,
    getDescription: getDescription,
    getDueDate: getDueDate,
    getDueDay: getDueDay,
    getPrioriry: getPrioriry,
    getTask: getTask,
    changeDueDate: changeDueDate,
    changeDescription: changeDescription,
    changePrior: changePrior,
    changeTitle: changeTitle,
    cloneTask: cloneTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

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
/* harmony import */ var _taskStoreRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskStoreRenderer */ "./src/taskStoreRenderer.js");
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFactory */ "./src/projectFactory.js");
/* harmony import */ var _projectRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectRenderer */ "./src/projectRenderer.js");
/* harmony import */ var _storeFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeFactory */ "./src/storeFactory.js");
/* harmony import */ var _Handlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Handlers */ "./src/Handlers.js");






 // Global variables

document.getElementById('taskDateInput').valueAsDate = new Date();
var projectStore = (0,_storeFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([(0,_projectFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Common', (0,_storeFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Cook', 'Cook the dinner', new Date(2022, 5, 2), true), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Grocery', 'Go to the grocery store', new Date(2022, 5, 1), false)])), (0,_projectFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Working', (0,_storeFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Web', 'Learn about a new technology', new Date(2022, 5, 1), true)])), (0,_projectFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Training', (0,_storeFactory__WEBPACK_IMPORTED_MODULE_5__["default"])([(0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Running', 'Run 2 km at morning', new Date(2022, 5, 1), false), (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Gym', 'Train 2 hr session at evening', new Date(2022, 4, 30), true)]))]);
var projectSelect = document.getElementById('projSelect');
(0,_Handlers__WEBPACK_IMPORTED_MODULE_6__.fillSelectWithProjects)(projectStore, projectSelect);
var renderer = (0,_projectRenderer__WEBPACK_IMPORTED_MODULE_4__["default"])(projectStore.getItemByIndex(projectSelect.value));
renderer.renderProject(); // Handlers

(0,_Handlers__WEBPACK_IMPORTED_MODULE_6__.addProjectHandler)(projectStore, renderer, projectSelect);
(0,_Handlers__WEBPACK_IMPORTED_MODULE_6__.deleteProjectHandler)(projectStore, renderer, projectSelect);
(0,_Handlers__WEBPACK_IMPORTED_MODULE_6__.pickProjectHandler)(projectStore, renderer);
(0,_Handlers__WEBPACK_IMPORTED_MODULE_6__.editProjectHandler)(projectStore, renderer, projectSelect);
/*
// Handlers

function addTaskHandler() {
    document.getElementById('addTask').addEventListener('click', () => {
        const inputs = inputsOutputter();
        const task = taskFactory(
            inputs.getTitleValue(),
            inputs.getDescValue(),
            inputs.getDateValue(),
            inputs.getPriorValue()
        );
        const projectId = inputs.getProjectValue().getProject();
        const project = projectStore.getItemValueByIndex(projectId);
        const taskStoreItem = project.addTask(task);
        const taskStore = project.getTaskStore();
        if (projectId === projectPicker.value) {
            const listItem = taskStoreRenderer(taskStore).addItem(taskStoreItem);
            deleteTaskHandler(project.getTaskStore(), listItem);
            dblclickTaskHandler(taskStore, listItem);
        }
    });
}

function deleteTaskHandler(store, item) {
    item.getElementsByTagName('button')[0].addEventListener('click', (e) => {
        store.removeFromStore(item.getAttribute('data-index'));
        taskStoreRenderer(store).removeItem(item);
    });
}

function dblclickTaskHandler(store, item) {
    const taskRenderer = taskStoreRenderer(store);

    item.addEventListener('dblclick', () => {
        taskRenderer.getListItems().forEach((item, index) => {
            if (item.getAttribute('id') === 'edit') {
                item = taskRenderer.changeItemToDemo(taskRenderer.getItemByIndex(index));
                dblclickTaskHandler(store, item);
            }
        })
        item.removeEventListener('dblclick', dblclickTaskHandler);
        item = taskRenderer.changeItemToEdit(item);
        const task = store.getItemValueByIndex(item.getAttribute('data-index'));
        saveEditHandler(store, item, editInputsHandler(task.cloneTask(), task));
        closeTaskHandler(store, item);
    });
}

const saveEditHandler = (store, item, task) => {
    document.getElementById('saveBtn').addEventListener('click', (e) => {
        store.changeItemValue(e.currentTarget.parentElement.getAttribute('data-index'), task);
        item = taskStoreRenderer(store).changeItemToDemo(item);
        dblclickTaskHandler(store, item);
        deleteTaskHandler(store, item);
    });
}

const closeTaskHandler = (store, item) => {
    document.getElementById('closeBtn').addEventListener('click', () => {
        item = taskStoreRenderer(store).changeItemToDemo(item);
        dblclickTaskHandler(store, item);
        deleteTaskHandler(store, item);
    })
}

const editInputsHandler = (newTask, task) => {
    document.getElementById('editTitle').addEventListener('input', (e) => {
        document.getElementById('saveBtn').disabled = (newTask.changeTitle(e.currentTarget.value) === task.getTitle() || newTask.getTitle().length < 1);
    });

    document.getElementById('editDesc').addEventListener('input', (e) => {
        document.getElementById('saveBtn').disabled = newTask.changeDesc(e.currentTarget.value) === task.getDesc();
    });

    document.getElementById('editDueDate').addEventListener('input', (e) => {
        document.getElementById('saveBtn').disabled = newTask.changeDate(e.currentTarget.valueAsDate) === task.getDate();
    });

    document.getElementById('editPrior').addEventListener('input', (e) => {
        document.getElementById('saveBtn').disabled = newTask.changePrior(e.currentTarget.checked) === task.getIsPrior();
    });

    return newTask;
}*/
})();

/******/ })()
;
//# sourceMappingURL=bundle.87f653e387600432f97d.js.map