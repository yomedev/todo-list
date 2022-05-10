import { createProjectInput, createProjectDelBtn, createProjectSaveBtn, createProjectCancelBtn } from "./Components";

const projectItemFactory = (project) => {

    const getProjectItemDemo = () => {
        return createProjectDelBtn();
    }

    const getProjectItemEdit = () => {
        const wrap = document.createElement('div');
        wrap.classList.add('flex', 'space-x-2');
        wrap.append(createProjectSaveBtn(), createProjectCancelBtn());
        return wrap;
    }

    return { getProjectItemDemo, getProjectItemEdit, createProjectCancelBtn }
}

export default projectItemFactory;