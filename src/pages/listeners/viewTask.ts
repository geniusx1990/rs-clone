import { ITask } from "../../components/sections/app-section";
import { getAlltasksForOneUser, deleteTask } from "../../requests";

export const onCheckBoxChangeHandler = () => {
    const allTask = document.querySelectorAll('.task-checkbox');
    //console.log(allTask);
    allTask.forEach(task => {
        task.addEventListener('change', (event) => {
            const taskCheckBox = (event.target as HTMLInputElement);
            const taskContainer = <HTMLElement>taskCheckBox.parentElement;
            let task_id = +(event.target as HTMLInputElement).id;
            let user_id = +(localStorage.getItem('user_id') as string);



            getAlltasksForOneUser(user_id).then((tasks: ITask[]) => {
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i];
                    if (task.id === task_id) {
                        const viewTaskTitle = document.querySelector('.view-task-title') as HTMLElement;
                        viewTaskTitle.innerHTML = task.title
                    }
                }
            })
        })
    })
}

export const viewTask = () => {
    let checkedNum = 0;
    window.addEventListener('click', () => {
        const viewBox = document.querySelector('.view-task-container') as HTMLElement;
        const checkboxs = document.querySelectorAll('.task-checkbox') as NodeListOf<HTMLInputElement>;
        const checkboxsCont = document.querySelectorAll('.task-checkbox-container') as NodeListOf<HTMLInputElement>;
        const target = event?.target as HTMLElement;
        if (target.classList.contains('task-checkbox-text')) {
            viewBox.classList.remove('hover-task-container');

            for (let i = 0; i < checkboxs.length; i++) {
                let checkbox = checkboxs[i];
                checkboxsCont[i].classList.remove('task-checkbox-container-active');
                localStorage.setItem('task_id', (<HTMLInputElement>target).id)


                if (checkbox.checked) {
                    checkedNum = +checkbox.id
                    checkbox.checked = false
                }
                if (checkedNum === +target.id) {
                    checkedNum = 0
                    viewBox.classList.add('hover-task-container');

                    setTimeout(() => {
                        for (let i = 0; i < checkboxs.length; i++) {
                            let checkbox = checkboxs[i];
                            checkboxsCont[i].classList.remove('task-checkbox-container-active');
                            checkbox.checked = false;
                            localStorage.removeItem('task_id')

                        }
                    }, 0);
                }

            }
            const taskContainer = <HTMLElement>target.parentElement;
            taskContainer.classList.add('task-checkbox-container-active');

        }
        if (target.classList.contains('view-task-container-close')) {
            viewBox.classList.add('hover-task-container');
            for (let i = 0; i < checkboxs.length; i++) {
                let checkbox = checkboxs[i];
                checkboxsCont[i].classList.remove('task-checkbox-container-active');
                checkbox.checked = false;

            }
        }
    })
}


