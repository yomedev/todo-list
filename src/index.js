import taskFactory from "./taskFactory";
import { inputsOutputter } from "./inputsOutputter";
import storeFactory from "./storeFactory";
import storeDOMRenderer from "./storeDOMRenderer";

const btnAddTask = document.getElementById('addTask');
btnAddTask.addEventListener('click', addTaskHandler);

const dateInput = document.getElementById('dueDate');
dateInput.valueAsDate = new Date();

const arr = [
    taskFactory('Book', 'Read 10 pages of the book', new Date(2022, 4, 30), true),
    taskFactory('Cook', 'Cook the dinner', new Date(2022, 4, 28), true),
    taskFactory('Grocery', 'Go to the grocery store', new Date(2022, 4, 29), false),
];

const store = storeFactory(arr);
const renderer = storeDOMRenderer(store);
renderer.renderList().forEach(item => {
    item.addEventListener('dblclick', dblclickTaskHandler);
});

function addTaskHandler() {
    const inputs = inputsOutputter();
    const task = taskFactory(
        inputs.getTitleValue(),
        inputs.getDescValue(),
        inputs.getDateValue(),
        inputs.getPriorValue()
    );

    renderer.addItem(store.addToStore(task)).addEventListener('dblclick', dblclickTaskHandler);
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
