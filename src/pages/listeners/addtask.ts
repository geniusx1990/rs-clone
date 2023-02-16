import {addTaskIntoTable, getAlltasksForOneUser} from '../../requests'
export const addTask = () => {
    let count = 0;
    window.addEventListener('click', () => {
        const inputTask = document.querySelector('.task-add-input') as HTMLInputElement;
        const taskBordBody = document.querySelector('.task-bord-body') as HTMLElement;
        const target = event?.target as HTMLButtonElement;
        if (target.classList.contains('task-add-button')) {
            addTaskIntoTable(inputTask.value, 'content: string', 'completed: string', '1');
            console.log(getAlltasksForOneUser('1'));
            if (inputTask.value.length > 0) {
                count = count + 1;
                const taskPriority = document.createElement('div');
                taskPriority.classList.add('task-priority-container');
                const taskCont = document.createElement('div');
                taskCont.classList.add('task-checkbox-container');
                const task = document.createElement('input') as HTMLInputElement;
                task.setAttribute("type", "checkbox");
                task.setAttribute("name", "task");
                task.classList.add('task-checkbox');
                task.value = inputTask.value;
                task.id = `${count}`
                const taskText = document.createElement("label");
                taskText.classList.add("task-checkbox-text");
                taskText.innerHTML = inputTask.value;
                taskText.setAttribute("for", `${count}`);
                taskText.id = `${count}`
                taskCont.append(taskPriority, task, taskText)
                taskBordBody.append(taskCont)
                inputTask.value = ''
                target.classList.remove('task-add-button-active')
            }
        }
    })
    document.addEventListener('keyup', () => {
        const inputTask = document.querySelector('.task-add-input') as HTMLInputElement;
        const taskButton = document.querySelector('.task-add-button') as HTMLElement;
        if (inputTask.value.length > 0) {
            taskButton.classList.add('task-add-button-active')
        } else {
            taskButton.classList.remove('task-add-button-active')
        }
    })
}

