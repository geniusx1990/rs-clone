import Component from "../templates/component";
import { createEl } from "../templates/functions";

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

    const taskAddContainer=document.createElement('div');
    taskAddContainer.classList.add('task-add-container');

    const taskAddInput =document.createElement('input');
    taskAddInput.classList.add('task-add-input');
    taskAddInput.placeholder='Добавить задачу';
    const taskAddButton = document.createElement('button');
    taskAddButton.className = 'task-add-button';
        
    taskAddButton.textContent='Добавить';
    taskAddContainer.append(taskAddInput,taskAddButton);

    taskBordHeder.append(taskBordButton,taskAddContainer);
     
const taskBordBody=document.createElement('div');
taskBordBody.classList.add('task-bord-body');

    taskBord.append(taskBordHeder,taskBordBody)
    return taskBord;
 }

 createTask(task:string){
    const taskAdd=document.createElement('checkbox');
    taskAdd.className = 'task-add';
    taskAdd.textContent=task;
return taskAdd;
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

    render() {
        const menu = this.makeMenu();
    const task =this.makeTaskBord();
    const list =this.makeInfoBord()

        this.container.append(menu, task, list);
        return this.container;
      }
}
export default AppSection;



