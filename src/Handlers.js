import projectFactory from "./projectFactory";

function addProjectHandler(projectStore, renderer, projectSelect) {
    let project = projectFactory();

    document.getElementById('titleProjInput').addEventListener('input', e => {
        const title = project.changeTitle(e.target.value);
        document.getElementById('addProj').disabled = title.length < 3;
    });

    document.getElementById('addProj').addEventListener('click', e => {
        e.target.disabled = true;
        document.getElementById('titleProjInput').value = '';
        project = projectStore.addItem(project);
        fillSelectWithProjects(projectStore, projectSelect, projectSelect.value);
        if (projectStore.getSize() === 1) {
            console.log(renderer);
            renderer.changeProject(project);
            renderer.renderProject();
        }
        project = projectFactory();
    });
}

function deleteProjectHandler(projectStore, renderer, projectSelect) {
    document.addEventListener('click', e => {
        if (e.target.id === 'projDel') {
            projectStore.removeItem(projectSelect.value);
            const index = fillSelectWithProjects(projectStore, projectSelect);
            const project = projectStore.getSize() ? projectStore.getItemByIndex(index) : null;
            renderer.changeProject(project);
            renderer.renderProject();
        }
    });
}

function pickProjectHandler(projectStore, projectRenderer) {
    document.addEventListener('change', e => {
        if (e.target.id === 'projSelect') {
            const project = projectStore.getItemByIndex(e.target.value);
            projectRenderer.changeProject(project);
            projectRenderer.renderProject();
        }
    });
}

function editProjectHandler(projectStore, renderer, projectSelect) {
    document.addEventListener('focus', e => {
        if (e.target.id === 'projTitle') {
            renderer.changeToEdit();
        }
    }, true);

    document.addEventListener('click', e => {
        if (e.target.id === 'projClose') {
            renderer.changeToDemo();
        }
    });

    const title = { value: '' };
    const prevTitle = projectStore.getItemValueByIndex(projectSelect.value).getTitle();
    document.addEventListener('input', e => {
        if (e.target.id === 'projTitle') {
            title.value = e.target.value;
            document.getElementById('projSave').disabled = title.value.length < 3 || title.value === prevTitle;
        }
    });

    document.addEventListener('click', e => {
        if (e.target.id === 'projSave') {
            projectStore.getItemByIndex(projectSelect.value).value.changeTitle(title.value);
            fillSelectWithProjects(projectStore, projectSelect, projectSelect.value);

        }
    });
}

function getOptionForSelect(project) {
    const option = document.createElement('option');
    const title = project.value.getTitle();
    option.value = project.id;
    option.textContent = title;
    return option;
}

function fillSelectWithProjects(projectStore, select, value = 0) {
    select.innerHTML = '';
    projectStore.getStore().forEach(project => {
        select.append(getOptionForSelect(project));
    });
    select.value = value;
    return select.value;
}





export { addProjectHandler, deleteProjectHandler, pickProjectHandler, editProjectHandler, fillSelectWithProjects };