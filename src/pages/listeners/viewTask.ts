export const onCheckBoxChangeHandler = () => {
    const allTask = document.querySelectorAll('.task-checkbox');
    console.log(allTask);
    allTask.forEach(task => {
        task.addEventListener('change', (event) => {
            const taskCheckBox = (event.target as HTMLInputElement);
            const taskContainer = <HTMLElement>taskCheckBox.parentElement;
            taskContainer.classList.toggle('task-checkbox-container-active');
            
            console.log((event.target as HTMLInputElement).id);
        })
    })
    
   /*  .addEventListener('click', () => {
        const viewBox = document.querySelector('.view-task-container') as HTMLElement;
        const checkboxs = document.querySelectorAll('.task-checkbox') as NodeListOf<HTMLInputElement>;
        const checkboxsCont = document.querySelectorAll('.task-checkbox-container') as NodeListOf<HTMLInputElement>;
        const target = event?.target as HTMLElement;
        if (target.classList.contains('task-checkbox-text')) {
            


            checkedNum = +target.id
            viewBox.classList.remove('hover-task-container');
            for (let i = 0; i < checkboxs.length; i++) {
                let checkbox = checkboxs[i];
                if ((checkedNum - 1) !== i) {
                    checkboxsCont[i].classList.remove('task-checkbox-container-active')
                    checkbox.checked = false;
                } else {
                    checkboxsCont[i].classList.add('task-checkbox-container-active')
                }
                if (checkbox.checked) {
                    viewBox.classList.add('hover-task-container')
                    checkboxsCont[i].classList.remove('task-checkbox-container-active')
                }
            }
        }
        if (target.classList.contains('view-task-container-close')) {
            viewBox.classList.add('hover-task-container');
            for (let i = 0; i < checkboxs.length; i++) {
                let checkbox = checkboxs[i];
                checkboxsCont[i].classList.remove('task-checkbox-container-active');
                checkbox.checked = false;

            }
        }
    }) */
}


function checked(checkboxs: NodeListOf<HTMLInputElement>): number {
    let check = 0;
    for (let i = 0; i < checkboxs.length; i++) {
        let checkbox = checkboxs[i];
        if (checkbox.checked === true) {
            check++;
        }
    }
    return check
}