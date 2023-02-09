export const addTask = () => {
    let count=0;
     window.addEventListener('click', () => {
      const inputTask=document.querySelector('.task-add-input') as HTMLInputElement;
const taskBordBody=document.querySelector('.task-bord-body') as HTMLElement;
      const target = event?.target as HTMLButtonElement;
       if (target.classList.contains('task-add-button')) {
      if(inputTask.value.length>0){
         console.log(1)
         count=count+1;
const taskCont=document.createElement('div');
taskCont.classList.add('task-checkbox-container');
         const task=document.createElement('input') as HTMLInputElement;
         task.setAttribute("type", "checkbox");
         task.setAttribute("name", "task");
         task.classList.add('task-checkbox');
         task.value = inputTask.value;
         task.id=`checkbox ${count}`
        
         const taskText = document.createElement("label");
         taskText.classList.add("task-checkbox-text");
         taskText.innerHTML = inputTask.value;
         taskText.setAttribute("for", `checkbox ${count}`);

         taskCont.append(task,taskText)
         taskBordBody.append(taskCont)
         inputTask.value=''
      }
     }
    })
   
    document.addEventListener('keyup', () => {
        const inputTask=document.querySelector('.task-add-input') as HTMLInputElement;
const taskButton=document.querySelector('.task-add-button') as HTMLElement;
        if(inputTask.value.length>0){
            taskButton.classList.add('task-add-button-active')
        }else{
            taskButton.classList.remove('task-add-button-active')
        }
    })
  }
  