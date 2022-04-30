import taskStoreRenderer from "./taskStoreRenderer";

const projectRenderer = (project) => {
    const header = document.getElementById('projHeader');
    const renderProject = () => {
        header.textContent = project.getTitle();
        const taskRenderer = taskStoreRenderer(project.getTaskStore())
        taskRenderer.renderList();
        return taskRenderer;
    }

    const changeProject = (proj) => {
        project = proj;
    }

    return { renderProject, changeProject };
}

export default projectRenderer;