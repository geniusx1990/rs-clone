export const viewTask = () => {
    let taskId:number;
    window.addEventListener('click', () => {
       const viewBox=document.querySelector('.view-task-container') as HTMLElement;
       const checkboxs=document.querySelectorAll('.task-checkbox') as NodeListOf<HTMLInputElement>;
        const target = event?.target as HTMLElement;
        if (target.classList.contains('task-checkbox-text')) {
            // for(let i=0; i>checkboxs.length;i++){
            //     let checkbox=checkboxs[i];
            //     if (checkbox.checked===true){
                   
            //      }
            //      }
            
            if(taskId===+target.id){
                viewBox.classList.add('hover-task-container');
                
            }else{
                viewBox.classList.remove('hover-task-container')
            }
            
            taskId=+target.id;
         }
        if (target.classList.contains('view-task-container-close')) {
            viewBox.classList.add('hover-task-container')
        }
     })
    }