import { inputsOutputter } from "./inputsOutputter";

const taskHandlerFactory = () => {
    console.log(projectStore);
    function addHandle(projectStore) {
        const inputs = inputsOutputter();
        const task = inputs.getTask();
        const projectId = inputs.getProjectValue().getProject();
        const project = projectStore.getItemValueByIndex(projectId);
        const taskStoreItem = project.addTask(task);
        const taskStore = project.getTaskStore();
        if (projectId === projectPicker.value) {
            const listItem = taskStoreRenderer(taskStore).addItem(taskStoreItem);
            deleteTaskHandler(project.getTaskStore(), listItem);
            dblclickTaskHandler(taskStore, taskStoreItem);
        }
    }

    return { addHandle, };
}

export default taskHandlerFactory;