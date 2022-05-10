import projectItemFactory from "./projectItemFactory";
import taskStoreRenderer from "./taskStoreRenderer";

const projectRenderer = project => {
    const panel = document.getElementById('projPanel');
    const renderProject = () => {
        panel.innerHTML = '';
        if (project != null) {
            const input = document.createElement('input');
            input.value = project.value.getTitle();
            input.classList.add('w-1/2');
            input.id = 'projTitle';
            panel.append(input);
            panel.append(getDemo());
        }
    }

    const changeToDemo = () => {
        panel.replaceChild(getDemo(), panel.lastElementChild);
    }

    const changeToEdit = () => {
        panel.replaceChild(getEdit(), panel.lastElementChild);
    }

    const getEdit = () => {
        const div = document.createElement('div');
        div.classList.add('flex', 'space-x-4')
        div.append(getButton('projSave', 'Save', true), getButton('projClose', 'Close'));
        return div;
    }

    const getDemo = () => {
        const div = document.createElement('div');
        div.append(getButton('projDel', 'Delete'));
        return div;
    }

    const getButton = (id, title, isDisabled = false) => {
        const button = document.createElement('button');
        button.id = id;
        button.disabled = isDisabled;
        button.classList.add('border-2');
        button.textContent = title;
        return button;
    }

    const changeProject = projectArg => {
        project = projectArg;
    }

    return { renderProject, changeProject, changeToEdit, changeToDemo };
}

export default projectRenderer;