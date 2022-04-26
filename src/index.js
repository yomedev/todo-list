import taskFactory from "./task";
import { inputsOutputter } from "./inputsOutputter";
import storeFactory from "./tasksStore";
import storeDOMRenderer from "./storeDOMRenderer";


const btnAddTask = document.getElementById('addTask');
btnAddTask.addEventListener('click', addTaskHandler);
const dateInput = document.getElementById('dueDate');
dateInput.valueAsDate = new Date();
const arr = [
    taskFactory('Book', 'Read 10 pages of the book', 'Fri', true),
    taskFactory('Cook', 'Cook the dinner', 'Mon', true),
    taskFactory('Store', 'Go to store', 'Thu', false),
];
const store = storeFactory(arr);
const renderer = storeDOMRenderer(store);
renderer.renderDOM();
function addTaskHandler() {
    const inputs = inputsOutputter();
    const task = taskFactory(
        inputs.getTitleValue(),
        inputs.getDescValue(),
        inputs.getDateValue(),
        inputs.getPriorValue()
    );

    store.addToStore(task);
    renderer.renderDOM();
    // store.logStore();
}





