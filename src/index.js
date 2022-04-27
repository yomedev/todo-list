import taskFactory from "./taskFactory";
import { inputsOutputter } from "./inputsOutputter";
import storeFactory from "./storeFactory";
import storeDOMRenderer from "./storeDOMRenderer";
import listItemFactory from "./listItemFactory";


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
    item.addEventListener('click', clickTaskHandler);
});

function addTaskHandler() {
    const inputs = inputsOutputter();
    const task = taskFactory(
        inputs.getTitleValue(),
        inputs.getDescValue(),
        inputs.getDateValue(),
        inputs.getPriorValue()
    );

    store.addToStore(task);
    renderer.addItem({id: store.lenth - 1, value: task});
}

function clickTaskHandler(e) {
    let item = e.currentTarget;
    item.removeEventListener('click', clickTaskHandler);
    const index = item.getAttribute('data-index');
    const task = store.getItemByIndex(index);
    const newItem = listItemFactory(task).getEditItem();
    
    renderer.replaceItem(newItem, item);
}







