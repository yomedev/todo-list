
const taskStoreFactory = (store = []) => {
    const taskStore = store.length ? store.map((item, index) => ({ id: index, value: item })) : [];

    const addTaskToStore = (task) => taskStore[taskStore.push({ id: taskStore.length, value: task }) - 1];

    const getStore = () => taskStore;

    const getItemByIndex = (index) => taskStore[index];

    const getItemValueByIndex = (index) => taskStore[index].value;

    const changeItemValue = (index, task) => {
        taskStore[index].value = task;
        return taskStore[index];
    }

    const cloneTaskStore = () => taskStoreFactory(store);

    const removeFromStore = (index) => {
        const removed = store.splice(index, 1)[0];
        taskStore.forEach((elem, i) => {
            elem.id = i;
        });
        return removed;
    }

    return { addTaskToStore, getItemByIndex, getItemValueByIndex, changeItemValue, getStore, removeFromStore, cloneTaskStore };
}

export default taskStoreFactory;