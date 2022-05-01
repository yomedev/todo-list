import taskFactory from "./taskFactory";
import { inputsOutputter } from "./inputsOutputter";
import taskStoreFactory from "./taskStoreFactory";
import taskStoreRenderer from "./taskStoreRenderer";
import projectFactory from "./projectFactory";
import projectStoreFactory from "./projectStoreFactory";
import projectRenderer from "./projectRenderer";


// Global variables
document.getElementById('dueDate').valueAsDate = new Date();

const projectStore = projectStoreFactory([
    projectFactory('Common', taskStoreFactory([
        taskFactory('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true),
        taskFactory('Cook', 'Cook the dinner', new Date(2022, 5, 2), true),
        taskFactory('Grocery', 'Go to the grocery store', new Date(2022, 5, 1), false),
    ])),
    projectFactory('Working', taskStoreFactory([
        taskFactory('Web', 'Learn about a new technology', new Date(2022, 5, 1), true),
    ])),
    projectFactory('Training', taskStoreFactory([
        taskFactory('Running', 'Run 2 km at morning', new Date(2022, 5, 1), false),
        taskFactory('Gym', 'Train 2 hr session at evening', new Date(2022, 4, 30), true),
    ])),
]);

// Listeners


addTaskHandler();

document.getElementById('addProj').addEventListener('click', addProjectHandler);

const projectSelecter = document.getElementById('projSelecter');
const projectPicker = document.getElementById('projPicker');
projectPicker.addEventListener('input', pickProjectHandler);

projectStore.getStore().forEach(project => {
    addOptionToSelect(projectSelecter, project);
    addOptionToSelect(projectPicker, project);
});

let currentProject = projectStore.getItemValueByIndex(projectPicker.value)
const renderer = projectRenderer(currentProject);
const storeList = renderer.renderProject().getListItems();
storeList.forEach(item => {
    deleteTaskHandler(currentProject.getTaskStore(), item);
    dblclickTaskHandler(currentProject.getTaskStore(), item);
});

function addOptionToSelect(select, project) {
    const option = document.createElement('option');
    const title = project.value.getTitle();
    option.value = project.id;
    option.textContent = title;
    select.append(option);
}


// Handlers

function pickProjectHandler(e) {
    currentProject = projectStore.getItemValueByIndex(e.currentTarget.value)
    renderer.changeProject(currentProject);
    renderer.renderProject();
    storeList.forEach(item => {
        deleteTaskHandler(currentProject.getTaskStore(), item);
        dblclickTaskHandler(currentProject.getTaskStore(), item);
    });
}

function addProjectHandler() {
    const input = document.getElementById('titleProj');
    const value = input.value;
    input.value = '';
    const project = projectStore.addToStore(projectFactory(value));
    addOptionToSelect(projectSelecter, project);
    addOptionToSelect(projectPicker, project);
}



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
}


