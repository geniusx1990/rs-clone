import Component from "../templates/component";
import { createEl } from "../templates/functions";
import { getUserID } from "../../requests";
import { makeTask } from "../../pages/listeners/addtask";
import {getAlltasksForOneUser} from "../../requests"

export interface ArrTasks{
    id:number;
    title:string;
    user_id:number;
    content:string;
    completed:string
}
class AppSection extends Component {
    menu: HTMLElement;

    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.menu = document.createElement('div');
        this.menu.classList.add('start__menu', 'menu');
    }

    makeMenu() {
    const headerMenu = document.createElement('div');
    headerMenu.className = 'header-menu';

    const logo = document.createElement('div');
    logo.className = 'header_logo';
    headerMenu.append(logo);

    const logoTitle = createEl("div", "header__title", logo, "Remember the milk");
        
    const x='Входящие';
    const y ='Списки';
    const arrNames = ['Все задачи', 'Сегодня', 'Завтра', 'Неделя'];
    const arrList = ['Личное', 'Работа'];
  
    this.menu.append(this.renderMenu(x,arrNames))
    this.menu.append(this.renderMenu(y,arrList))

    headerMenu.append(this.menu);    
    return headerMenu;
}

renderMenu(x:string, arrNames:Array<string>) {
    const headerMenu = document.createElement('div');
    headerMenu.className = 'header-in-menu';
    const headerMenuButtonCont = document.createElement('div');
    headerMenuButtonCont.className = 'header-menu-button-cont';
    const headerMenuButton = document.createElement('div');
    headerMenuButton.className = 'header-menu-button';
    const headerMenuButtonTitle = document.createElement('div');
    headerMenuButtonTitle.className = 'header-menu-button-title';
    headerMenuButtonTitle.innerHTML=x;
    headerMenuButtonCont.append(headerMenuButton,headerMenuButtonTitle)
    const inMenuList = document.createElement('ul');
    inMenuList.className = 'in-menu-list show';
    headerMenuButton.onclick=function w() {
        inMenuList.classList.toggle("show");
        headerMenu.classList.toggle("show-menu");
        headerMenuButton.classList.toggle("show-button");
}
    arrNames.forEach((name) => {
        const liElement = document.createElement('li');
      liElement.className = 'menu-item';
      liElement.textContent = name;
      inMenuList.append(liElement);
    })
    headerMenu.append(headerMenuButtonCont,inMenuList)
    return headerMenu;
  }

 makeTaskBord(){
    const taskBord = document.createElement('div');
    taskBord.className = 'task-bord';

    const taskBordHeder=document.createElement('div');
    taskBordHeder.classList.add('header-task-bord');

    const taskBordButton=document.createElement('div');
    taskBordButton.classList.add('button-task-bord');
    const taskDo = document.createElement('button');
    taskDo.className = 'button-task';
    taskDo.textContent='Незавершенные'
    const taskDone = document.createElement('button');
    taskDone.className = 'button-task';
    taskDone.textContent='Завершенные'

    taskBordButton.append(taskDo, taskDone);
const taskButton=this.createTaskButton()
    const taskAddContainer=document.createElement('div');
    taskAddContainer.classList.add('task-add-container');

    const taskAddInput =document.createElement('input');
    taskAddInput.classList.add('task-add-input');
    taskAddInput.setAttribute('type','text');
    taskAddInput.placeholder='Добавить задачу';
    const taskAddButton = document.createElement('button');
    taskAddButton.className = 'task-add-button';
        
    taskAddButton.textContent='Добавить';
    taskAddContainer.append(taskAddInput,taskAddButton);

    taskBordHeder.append(taskBordButton, taskButton,taskAddContainer);
     
const taskBordBody=document.createElement('div');
taskBordBody.classList.add('task-bord-body');


// let id ="1"//тут нужно получать айдишник юзера
// let taskArray:[ArrTasks]=getAlltasksForOneUser(id);

// for (let i=0;i<taskArray.length;i++){
//     let task =makeTask(taskArray[i].id, taskArray[i].title)
//     taskBordBody.append(task)
// }


    const token = localStorage.getItem("cookie");

    if (token) {
        console.log(token)
        const email = JSON.stringify(localStorage.getItem('email'));
        getUserID(email.slice(1, email.length-1));
        }

    taskBord.append(taskBordHeder,taskBordBody)
    return taskBord;
 }

 createTaskButton(){
    const taskButton=document.createElement('div');
    taskButton.classList.add('task-button-container');
    const taskButtonDoneDelite=document.createElement('div');
    taskButtonDoneDelite.classList.add('task-button-done-delite');
    const buttonDone = createEl("button", "button-task-done", taskButtonDoneDelite);
    const buttonDelite = createEl("button", "button-task-delite", taskButtonDoneDelite);
    const taskButtonSelect=document.createElement('div');
    taskButtonSelect.classList.add('task-button-select');
    const taskButtonSelectPriorety=document.createElement('select');
    taskButtonSelectPriorety.classList.add('task-select');
    const SelectPriorety1 = createEl("option", "option-select", taskButtonSelectPriorety, 'Убрать приоритет');
    const SelectPriorety2 = createEl("option", "option-select", taskButtonSelectPriorety, 'Установить высокий приоритет');
    const SelectPriorety3 = createEl("option", "option-select", taskButtonSelectPriorety, 'Установить средний приоритет');
    const SelectPriorety4 = createEl("option", "option-select", taskButtonSelectPriorety, 'Установить низкий приоритет');
        const taskButtonSelectList=document.createElement('select');
    taskButtonSelectList.classList.add('task-select');
    const SelectList1 = createEl("option", "option-select", taskButtonSelectList, 'Личное');
    const SelectListy2 = createEl("option", "option-select", taskButtonSelectList, 'Работа');
    const taskButtonSelectTime=document.createElement('select');
    taskButtonSelectTime.classList.add('task-select');
    const SelectTime1 = createEl("option", "option-select", taskButtonSelectTime, 'Сегодня');
    const SelectTime2 = createEl("option", "option-select", taskButtonSelectTime, 'Завтра');

taskButtonSelect.append(taskButtonSelectPriorety,taskButtonSelectList,taskButtonSelectTime)
    taskButton.append(taskButtonDoneDelite,taskButtonSelect)
    return taskButton;
 }

 makeInfoBord(){
    const infoBord = document.createElement('div');
    infoBord.className = 'info-bord';

    const titleTask=document.createElement('div');
    titleTask.classList.add('task-title');
    titleTask.innerHTML='Входящие';

    const titleTaskList=document.createElement('div');
    titleTaskList.classList.add('task-title-list');
    
    const titleTaskDo=document.createElement('div');
    titleTaskDo.classList.add('task-title-container');
    const titleTaskDoTitle=document.createElement('div');
    titleTaskDoTitle.classList.add('task-title-do');
    titleTaskDoTitle.innerHTML='0'
    const titleTaskDoCount=document.createElement('div');
    titleTaskDoCount.classList.add('task-count-do');
    titleTaskDoCount.innerHTML='задач(и)'
    titleTaskDo.append(titleTaskDoTitle, titleTaskDoCount);

    const titleTaskDone=document.createElement('div');
    titleTaskDone.classList.add('task-title-container');
    const titleTaskDoneTitle=document.createElement('div');
    titleTaskDoneTitle.classList.add('task-title-do');
    titleTaskDoneTitle.innerHTML='0'
    const titleTaskDoneCount=document.createElement('div');
    titleTaskDoneCount.classList.add('task-count-do');
    titleTaskDoneCount.innerHTML='завершено'
    titleTaskDone.append(titleTaskDoneTitle, titleTaskDoneCount);

    titleTaskList.append(titleTaskDo, titleTaskDone);
    infoBord.append(titleTask, titleTaskList);
    return infoBord;
 }

makeViewTask(){
const viewTaskContainer=document.createElement('div');
viewTaskContainer.classList.add('view-task-container');
viewTaskContainer.classList.add('hover-task-container');
const viewTaskContainerClose=document.createElement('div');
viewTaskContainerClose.classList.add('view-task-container-close');
viewTaskContainerClose.innerHTML='закрыть'
const viewTaskContainerCloseX=document.createElement('span');
viewTaskContainerCloseX.classList.add('view-task-container-closeX');
viewTaskContainerCloseX.innerHTML='x'
viewTaskContainerClose.append(viewTaskContainerCloseX);
const viewTaskTitle=document.createElement('div');
viewTaskTitle.classList.add('view-task-title');
const taskPriority=document.createElement('div');
taskPriority.classList.add('task-priority-container'); 
const viewTaskTitleName=document.createElement('div');
viewTaskTitleName.classList.add('view-task-title-name');
const viewTaskTime=document.createElement('div');
viewTaskTime.classList.add('view-task-time');
viewTaskTime.innerHTML='срок';
const viewTaskTimeValue=document.createElement('div');
viewTaskTimeValue.classList.add('view-task-time-value');
viewTaskTime.append(viewTaskTimeValue);
const viewTaskNoteContainer=document.createElement('div');
viewTaskNoteContainer.classList.add('task-note-container'); 
const viewTaskNoteTitle=document.createElement('div');
viewTaskNoteTitle.classList.add('task-note-title');
viewTaskNoteTitle.innerHTML='Заметки';
const viewTaskNoteInputContainer=document.createElement('div');
viewTaskNoteInputContainer.classList.add('task-note-input-container');
const viewTaskNoteInputImg=document.createElement('div');
viewTaskNoteInputImg.classList.add('task-note-input-img');
const viewTaskNoteInput=document.createElement('input');
viewTaskNoteInput.classList.add('task-note-input');
viewTaskNoteInput.setAttribute('type','text');
viewTaskNoteInput.placeholder='Добавить заметку';
const viewTaskNoteButtonContainer=document.createElement('div');
viewTaskNoteButtonContainer.classList.add('task-note-button-container');
const viewTaskNoteButtonYes=document.createElement('button');
viewTaskNoteButtonYes.classList.add('task-note-button-yes');
viewTaskNoteButtonYes.innerHTML='Сохранить'
const viewTaskNoteButtonNo=document.createElement('button');
viewTaskNoteButtonNo.classList.add('task-note-button-no');
viewTaskNoteButtonNo.innerHTML='Отмена'
const viewTaskNote=document.createElement('div');
viewTaskNote.classList.add('task-note-view');
viewTaskNoteButtonContainer.append(viewTaskNoteButtonYes,viewTaskNoteButtonNo)
viewTaskNoteInputContainer.append(viewTaskNoteInputImg,viewTaskNoteInput)
viewTaskNoteContainer.append(viewTaskNoteTitle,viewTaskNoteInputContainer,viewTaskNoteButtonContainer)
viewTaskTitle.append(taskPriority,viewTaskTitleName)
viewTaskContainer.append(viewTaskContainerClose,viewTaskTitle,viewTaskTime,viewTaskNoteContainer,viewTaskNote)
return viewTaskContainer
}

    render() {
        const menu = this.makeMenu();
    const task =this.makeTaskBord();
    const list =this.makeInfoBord();
    const view =this.makeViewTask();
    list.append(view)
        this.container.append(menu, task, list);
        return this.container;
      }
}
export default AppSection;



