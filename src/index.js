import taskFactory from "./taskFactory";
import { inputsOutputter } from "./inputsOutputter";
import taskStoreFactory from "./taskStoreFactory";
import taskStoreRenderer from "./taskStoreRenderer";
import projectFactory from "./projectFactory";
import projectStoreFactory from "./projectStoreFactory";
import projectRenderer from "./projectRenderer";


// Global variables
document.getElementById('dueDate').valueAsDate = new Date();

const commonTasks = [
    taskFactory('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true),
    taskFactory('Cook', 'Cook the dinner', new Date(2022, 5, 2), true),
    taskFactory('Grocery', 'Go to the grocery store', new Date(2022, 5, 1), false),
];

const workingTasks = [
    taskFactory('Web', 'Learn about a new technology', new Date(2022, 5, 1), true),
];

const trainingTasks = [
    taskFactory('Running', 'Run 2 km at morning', new Date(2022, 5, 1), false),
    taskFactory('Gym', 'Train 2 hr session at evening', new Date(2022, 4, 30), true),
];

const commonTaskStore = taskStoreFactory(commonTasks);
const trainingTaskStore = taskStoreFactory(trainingTasks);
const workingTaskStore = taskStoreFactory(workingTasks);

const projectStore = projectStoreFactory([
    projectFactory('Common', commonTaskStore),
    projectFactory('Working', workingTaskStore),
    projectFactory('Training', trainingTaskStore),
]);

// Listeners
document.getElementById('addTask').addEventListener('click', addTaskHandler);
document.getElementById('addProj').addEventListener('click', addProjectHandler);

const projectSelecter = document.getElementById('projSelecter');
const projectPicker = document.getElementById('projPicker');
projectPicker.addEventListener('input', pickProjectHandler);
projectStore.getStore().forEach((project) => {
    addOptionToSelect(projectSelecter, project);
    addOptionToSelect(projectPicker, project);
});

const renderer = projectRenderer(projectStore.getItemValueByIndex(projectPicker.value));


const taskRenderer = renderer.renderProject();
console.log(taskRenderer);

function addOptionToSelect(select, project) {
    const option = document.createElement('option');
    const title = project.value.getTitle();
    option.value = project.id;
    option.textContent = title;
    select.append(option);
}


// Handlers

function pickProjectHandler(e) {
    renderer.changeProject(projectStore.getItemValueByIndex(e.currentTarget.value));
    renderer.renderProject();
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
    const inputs = inputsOutputter();
    const task = taskFactory(
        inputs.getTitleValue(),
        inputs.getDescValue(),
        inputs.getDateValue(),
        inputs.getPriorValue()
    );
    
    const project = projectStore.getItemValueByIndex(inputs.getProjectValue().getProject());
    project.addTask(task);
    const store = project.getTaskStore();
    console.log(store.getStore());
    
    // store.addToStore(task)
    // const item = renderer.addItem();
    // item.addEventListener('dblclick', dblclickTaskHandler);
    // deleteHandler(item);
}

function deleteHandler(item) {
    item.getElementsByTagName('button')[0].addEventListener('click', (e) => {
        store.removeFromStore(item.getAttribute('data-index'));
        renderer.removeItem(item);
    });
}

function dblclickTaskHandler(e) {
    let item = e.currentTarget;
    item.removeEventListener('dblclick', dblclickTaskHandler);
    item = renderer.changeItemToEdit(item);
    const task = store.getItemValueByIndex(item.getAttribute('data-index'));
    saveEditHandler(item, editInputsHandler(task.cloneTask(), task));
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

const saveEditHandler = (item, task) => {
    document.getElementById('saveBtn').addEventListener('click', (e) => {
        store.changeItemValue(e.currentTarget.parentElement.getAttribute('data-index'), task);
        renderer.changeItemToDemo(item).addEventListener('dblclick', dblclickTaskHandler);
    });
}
