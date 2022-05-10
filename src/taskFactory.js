
const taskFactory = (task, description, dueDate, priority) => {

    const getTitle = () => task;

    const getDescription = () => description;

    const getDueDate = () => dueDate;

    const getDueDay = () => dueDate.toLocaleDateString('en-US', { weekday: 'short', });

    const getPrioriry = () => priority;

    const getTask = () => {task, description, dueDate, priority};

    const cloneTask = () => taskFactory(task, description, dueDate, priority);

    const changeTitle = (taskArg) => {
        task = taskArg;
        return task;
    }
    const changeDescription = (descriptionArg) => {
        description = descriptionArg;
        return description;
    }
    const changeDueDate = (dueDateArg) => {
        dueDate = dueDateArg;
        return dueDate;
    }
    const changePrior = (priorityArg) => {
        priority = priorityArg;
        return priority;
    }
    

    return { getTitle, getDescription, getDueDate, getDueDay, getPrioriry, getTask, changeDueDate, changeDescription, changePrior, changeTitle, cloneTask};
}

export default taskFactory;