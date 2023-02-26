import Component from "../templates/component";
import { createEl } from "../templates/functions";
import { addPostIntoTable, getAllPostsForOneTask, getUserID } from "../../requests";
import { addTaskIntoTable, getAlltasksForOneUser, deleteTask, updateTask } from '../../requests'
import { onCheckBoxChangeHandler } from "../../pages/listeners/viewTask";
import { lang } from "../../pages/listeners/langs";
export interface ITask {
  id: number;
  title: string;
  user_id: number;
  content: string;
  completed: string
}

export interface IPost {
  id: number;
  content: string;
  task_id: number;
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
    let x = 'Входящие';
    let y = 'Списки';
    let arrNames = ['Все задачи', 'Сегодня', 'Завтра', 'Неделя'];
    let arrList = ['Личное', 'Работа'];

    if (lang === 'ru') {
      x = 'Входящие';
      y = 'Списки';
      arrNames = ['Все задачи', 'Сегодня', 'Завтра', 'Неделя'];
      arrList = ['Личное', 'Работа'];
    } else if (lang === 'en') {
      x = 'Inbox';
      y = 'Lists';
      arrNames = ['All tasks', 'Today', 'Tomorrow', 'This week'];
      arrList = ['Personal', 'Work'];
    }


    this.menu.append(this.renderMenu(x, arrNames, 'menu-item-inbox', 'inbox-all'))
    this.menu.append(this.renderMenu(y, arrList, 'menu-item-list', 'inbox-list'))

    headerMenu.append(this.menu);
    return headerMenu;
  }

  renderMenu(x: string, arrNames: Array<string>, nameEl: string, title: string) {
    const headerMenu = document.createElement('div');
    headerMenu.className = 'header-in-menu';
    const headerMenuButtonCont = document.createElement('div');
    headerMenuButtonCont.className = 'header-menu-button-cont';
    const headerMenuButton = document.createElement('div');
    headerMenuButton.className = 'header-menu-button';
    const headerMenuButtonTitle = document.createElement('div');
    headerMenuButtonTitle.className = 'header-menu-button-title';
    headerMenuButtonTitle.classList.add(title);
    headerMenuButtonTitle.innerHTML = x;
    headerMenuButtonCont.append(headerMenuButton, headerMenuButtonTitle)
    const inMenuList = document.createElement('ul');
    inMenuList.className = 'in-menu-list show';
    headerMenuButton.onclick = function w() {
      inMenuList.classList.toggle("show");
      headerMenu.classList.toggle("show-menu");
      headerMenuButton.classList.toggle("show-button");
    }
    arrNames.forEach((name) => {
      const liElement = document.createElement('li');
      liElement.className = nameEl;
      liElement.textContent = name;
      inMenuList.append(liElement);
    })
    headerMenu.append(headerMenuButtonCont, inMenuList)
    return headerMenu;
  }


  appendTask(task: ITask) {
    const taskBordBody = document.querySelector('.task-bord-body') as HTMLElement;
    const taskContainer = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskCheckBox = document.createElement('input') as HTMLInputElement;
    const taskText = document.createElement("label");

    taskContainer.classList.add('task-checkbox-container');
    taskPriority.classList.add('task-priority-container');
    taskCheckBox.setAttribute("type", "checkbox");
    taskCheckBox.setAttribute("name", "task");
    taskCheckBox.classList.add('task-checkbox');
    taskCheckBox.value = task.title;
    taskCheckBox.id = `${task.id}`
    taskText.classList.add("task-checkbox-text");
    taskText.innerHTML = task.title;
    taskText.setAttribute("for", `${task.id}`);
    taskText.id = `${task.id}`
    taskContainer.append(taskPriority, taskCheckBox, taskText)
    taskBordBody.append(taskContainer);

  }


  makeTaskBord() {
    const taskBord = document.createElement('div');
    taskBord.className = 'task-bord';

    const taskBordHeder = document.createElement('div');
    taskBordHeder.classList.add('header-task-bord');

    const taskBordButton = document.createElement('div');
    taskBordButton.classList.add('button-task-bord');
    const taskDo = document.createElement('button');
    taskDo.className = 'button-task';
    taskDo.classList.add('button-task-one');
    (lang === 'ru') ? taskDo.textContent = 'Незавершенные' : taskDo.textContent = 'Incomplete';
    const taskDone = document.createElement('button');
    taskDone.className = 'button-task';
    taskDone.classList.add('button-task-two');
    (lang === 'ru') ? taskDone.textContent = 'Завершенные' : taskDone.textContent = 'Completed';


    taskBordButton.append(taskDo, taskDone);
    const taskButton = this.createTaskButton()
    const taskAddContainer = document.createElement('div');
    taskAddContainer.classList.add('task-add-container');

    const taskAddInput = document.createElement('input');
    taskAddInput.classList.add('task-add-input', 'task-add-input-lang');
    taskAddInput.setAttribute('type', 'text');
    (lang === 'ru') ? taskAddInput.placeholder = 'Добавить задачу' :
      taskAddInput.placeholder = 'Add a task';
    const taskAddButton = document.createElement('button');
    taskAddButton.classList.add('task-add-button', 'task-add-button-lang');
    (lang === 'ru') ? taskAddButton.textContent = 'Добавить' :
      taskAddButton.textContent = 'Add';

    /////
    let user_id = +(localStorage.getItem('user_id') as string);

    taskAddButton.addEventListener('click', () => {

      if (taskAddInput.value.length > 0) {
        taskAddButton.classList.remove('task-add-button-active');
        let task: Partial<ITask> = {
          title: taskAddInput.value,
          user_id: user_id,
          content: 'content',
          completed: 'not completed'
        }
        addTaskIntoTable(task)
          .then((data: ITask) => {
            this.appendTask(data);
            taskAddInput.value = ''
            taskAddButton.classList.remove('task-add-button-active')
            onCheckBoxChangeHandler();
          })
      }
    })
    taskAddInput.addEventListener('keyup', () => {
      const inputTask = document.querySelector('.task-add-input') as HTMLInputElement;
      const taskButton = document.querySelector('.task-add-button') as HTMLElement;
      if (inputTask.value.length > 0) {
        taskButton.classList.add('task-add-button-active')
      } else {
        taskButton.classList.remove('task-add-button-active')
      }
    })


    ////



    taskAddContainer.append(taskAddInput, taskAddButton);

    taskBordHeder.append(taskBordButton, taskButton, taskAddContainer);

    const taskBordBody = document.createElement('div');
    taskBordBody.classList.add('task-bord-body');



    getAlltasksForOneUser(user_id).then((tasks: ITask[]) => {
      tasks.forEach((task: ITask) => {
        const taskContainer = document.createElement('div');
        const taskPriority = document.createElement('div');
        const taskCheckBox = document.createElement('input') as HTMLInputElement;
        const taskText = document.createElement("label");

        taskContainer.classList.add('task-checkbox-container');
        taskPriority.classList.add('task-priority-container');
        taskCheckBox.setAttribute("type", "checkbox");
        taskCheckBox.setAttribute("name", "task");
        taskCheckBox.classList.add('task-checkbox');
        taskCheckBox.value = task.title;
        taskCheckBox.id = `${task.id}`
        taskText.classList.add("task-checkbox-text");
        if (task.completed === 'completed') {
          taskText.classList.add('task-done');
        }

        taskText.innerHTML = task.title;
        taskText.setAttribute("for", `${task.id}`);
        taskText.id = `${task.id}`
        taskContainer.append(taskPriority, taskCheckBox, taskText)
        taskBordBody.append(taskContainer);
      })
      onCheckBoxChangeHandler();
    })
    taskBord.append(taskBordHeder, taskBordBody)
    return taskBord;
  }

  createTaskButton() {
    const taskButton = document.createElement('div');
    taskButton.classList.add('task-button-container');
    const taskButtonDoneDelite = document.createElement('div');
    taskButtonDoneDelite.classList.add('task-button-done-delite');
    const buttonDone = createEl("button", "button-task-done", taskButtonDoneDelite);

    buttonDone.addEventListener('click', () => {
      let task_id = localStorage.getItem('task_id');

      if (task_id !== null) {
        let task: Partial<ITask> = {
          id: Number(task_id),
          completed: 'completed'
        }
        updateTask(task)
        const allTask = document.querySelectorAll('.task-checkbox-text');
        allTask.forEach(task => {
          if (task.id === task_id) {
            console.log(task)
            task.classList.add('task-done')
          }
        })

        console.log(task);

      }
    })

    const buttonDelite = createEl("button", "button-task-delite", taskButtonDoneDelite);


    buttonDelite.addEventListener('click', () => {
      let task_id = localStorage.getItem('task_id');
      if (task_id !== null) {
        deleteTask(Number(task_id))
        const containerClose = document.querySelector('.view-task-container');
        containerClose?.classList.add('hover-task-container')
        const allTask = document.querySelectorAll('.task-checkbox');
        allTask.forEach(task => {
          if (task.id === task_id) {
            task.parentElement?.remove();
          }
        })

      }
    })


    const taskButtonSelect = document.createElement('div');
    taskButtonSelect.classList.add('task-button-select');
    const taskButtonSelectPriorety = document.createElement('select');
    taskButtonSelectPriorety.classList.add('task-select');
    if (lang === 'ru') {
      const SelectPriorety1 = createEl("option", "option-select option-select-pr", taskButtonSelectPriorety, 'Убрать приоритет');
      const SelectPriorety2 = createEl("option", "option-select option-select-high", taskButtonSelectPriorety, 'Установить высокий приоритет');
      const SelectPriorety3 = createEl("option", "option-select option-select-middle", taskButtonSelectPriorety, 'Установить средний приоритет');
      const SelectPriorety4 = createEl("option", "option-select option-select-low", taskButtonSelectPriorety, 'Установить низкий приоритет');
    } else if (lang === 'en') {
      const SelectPriorety1 = createEl("option", "option-select option-select-pr", taskButtonSelectPriorety, 'Remove priority');
      const SelectPriorety2 = createEl("option", "option-select option-select-high", taskButtonSelectPriorety, 'Set high priority');
      const SelectPriorety3 = createEl("option", "option-select option-select-middle", taskButtonSelectPriorety, 'Set medium priority');
      const SelectPriorety4 = createEl("option", "option-select option-select-low", taskButtonSelectPriorety, 'Set low priority');
    }
    const taskButtonSelectList = document.createElement('select');
    taskButtonSelectList.classList.add('task-select');
    if (lang === 'ru') {
      const SelectList1 = createEl("option", "option-select option-select-personal", taskButtonSelectList, 'Личное');
      const SelectListy2 = createEl("option", "option-select option-select-work", taskButtonSelectList, 'Работа');
    } else if (lang === 'en') {
      const SelectList1 = createEl("option", "option-select option-select-personal", taskButtonSelectList, 'Personal');
      const SelectListy2 = createEl("option", "option-select option-select-work", taskButtonSelectList, 'Work');
    }

    const taskButtonSelectTime = document.createElement('select');
    taskButtonSelectTime.classList.add('task-select');
    if (lang === 'ru') {
      const SelectTime1 = createEl("option", "option-select option-select-today", taskButtonSelectTime, 'Сегодня');
      const SelectTime2 = createEl("option", "option-select option-select-tomorrow", taskButtonSelectTime, 'Завтра');
    } else if (lang === 'en') {
      const SelectTime1 = createEl("option", "option-select option-select-today", taskButtonSelectTime, 'Today');
      const SelectTime2 = createEl("option", "option-select option-select-tomorrow", taskButtonSelectTime, 'Tomorrow');
    }
    taskButtonSelect.append(taskButtonSelectPriorety, taskButtonSelectList, taskButtonSelectTime)
    taskButton.append(taskButtonDoneDelite, taskButtonSelect)
    return taskButton;
  }

  makeInfoBord() {
    const infoBord = document.createElement('div');
    infoBord.className = 'info-bord';

    const titleTask = document.createElement('div');
    titleTask.classList.add('task-title', 'task-title-lang');
    (lang === 'ru') ? titleTask.innerHTML = 'Входящие' :
      titleTask.innerHTML = 'Inbox';

    const titleTaskList = document.createElement('div');
    titleTaskList.classList.add('task-title-list');

    const titleTaskDo = document.createElement('div');
    titleTaskDo.classList.add('task-title-container');
    const titleTaskDoTitle = document.createElement('div');
    titleTaskDoTitle.classList.add('task-title-do');
    titleTaskDoTitle.innerHTML = '0'
    const titleTaskDoCount = document.createElement('div');
    titleTaskDoCount.classList.add('task-count-do', 'task-count-do-task');
    (lang === 'ru') ? titleTaskDoCount.innerHTML = 'задач(и)' :
      titleTaskDoCount.innerHTML = 'tasks';

    titleTaskDo.append(titleTaskDoTitle, titleTaskDoCount);

    const titleTaskDone = document.createElement('div');
    titleTaskDone.classList.add('task-title-container');
    const titleTaskDoneTitle = document.createElement('div');
    titleTaskDoneTitle.classList.add('task-title-do');
    titleTaskDoneTitle.innerHTML = '0'
    const titleTaskDoneCount = document.createElement('div');
    titleTaskDoneCount.classList.add('task-count-do', 'task-completed');
    (lang === 'ru') ? titleTaskDoneCount.innerHTML = 'завершено' :
      titleTaskDoneCount.innerHTML = 'completed';
    titleTaskDone.append(titleTaskDoneTitle, titleTaskDoneCount);

    titleTaskList.append(titleTaskDo, titleTaskDone);
    infoBord.append(titleTask, titleTaskList);
    return infoBord;
  }

  makeViewTask() {
    const viewTaskContainer = document.createElement('div');
    viewTaskContainer.classList.add('view-task-container');
    viewTaskContainer.classList.add('hover-task-container');
    const viewTaskContainerClose = document.createElement('div');
    viewTaskContainerClose.classList.add('view-task-container-close');
    (lang === 'ru') ? viewTaskContainerClose.textContent = 'закрыть' :
      viewTaskContainerClose.textContent = 'close';
    const viewTaskContainerCloseX = document.createElement('span');
    viewTaskContainerCloseX.classList.add('view-task-container-closeX');
    viewTaskContainerCloseX.innerHTML = 'x'
    viewTaskContainerClose.append(viewTaskContainerCloseX);
    const viewTaskTitle = document.createElement('div');
    viewTaskTitle.classList.add('view-task-title');
    const taskPriority = document.createElement('div');
    taskPriority.classList.add('task-priority-container');
    const viewTaskTitleName = document.createElement('div');
    viewTaskTitleName.classList.add('view-task-title-name');
    const viewTaskTime = document.createElement('div');
    viewTaskTime.classList.add('view-task-time', 'view-task-time-lang');
    (lang === 'ru') ? viewTaskTime.innerHTML = 'срок' :
      viewTaskTime.innerHTML = 'term';
    const viewTaskTimeValue = document.createElement('div');
    viewTaskTimeValue.classList.add('view-task-time-value');
    viewTaskTime.append(viewTaskTimeValue);
    const viewTaskNoteContainer = document.createElement('div');
    viewTaskNoteContainer.classList.add('task-note-container');
    const viewTaskNoteTitle = document.createElement('div');
    viewTaskNoteTitle.classList.add('task-note-title', 'task-note-title-lang');
    (lang === 'ru') ? viewTaskNoteTitle.innerHTML = 'Заметки' :
      viewTaskNoteTitle.innerHTML = 'Notes';
    const viewTaskNoteInputContainer = document.createElement('div');
    viewTaskNoteInputContainer.classList.add('task-note-input-container');
    const viewTaskNoteInputImg = document.createElement('div');
    viewTaskNoteInputImg.classList.add('task-note-input-img');
    const viewTaskNoteInput = document.createElement('input');
    viewTaskNoteInput.classList.add('task-note-input', 'task-note-input-lang');
    viewTaskNoteInput.setAttribute('type', 'text');
    (lang === 'ru') ? viewTaskNoteInput.placeholder = 'Добавить заметку' :
      viewTaskNoteInput.placeholder = 'Add a note';
    const viewTaskNoteButtonContainer = document.createElement('div');
    viewTaskNoteButtonContainer.classList.add('task-note-button-container');
    const viewTaskNoteButtonYes = document.createElement('button');
    viewTaskNoteButtonYes.classList.add('task-note-button-yes');
    (lang === 'ru') ? viewTaskNoteButtonYes.innerHTML = 'Сохранить' :
      viewTaskNoteButtonYes.innerHTML = 'Save';

      let task_id = +(localStorage.getItem('task_id') as string);

    viewTaskNoteButtonYes.addEventListener('click', () => {
      let task_id = +(localStorage.getItem('task_id') as string);

      if (viewTaskNoteInput.value.length > 0) {
        let post: Partial<IPost> = {
          content: viewTaskNoteInput.value,
          task_id: task_id
        }
        addPostIntoTable(post)
          .then((data: IPost) => {
            this.appendNote(data);
            viewTaskNoteInput.value = '';
            viewTaskNoteButtonYes.classList.remove('task-add-button-active');
          }
          )

      }
      console.log('aaa')
    })

    viewTaskNoteInput.addEventListener('keyup', () => {
      const inputNote = document.querySelector('.task-note-input') as HTMLInputElement;
      const noteButton = document.querySelector('.task-note-button-yes') as HTMLElement;
      if (inputNote.value.length > 0) {
        noteButton.classList.add('task-add-button-active')
      } else {
        noteButton.classList.remove('task-add-button-active')
      }
    })

    const viewTaskNoteButtonNo = document.createElement('button');
    viewTaskNoteButtonNo.classList.add('task-note-button-no');
    (lang === 'ru') ? viewTaskNoteButtonNo.innerHTML = 'Отмена' :
      viewTaskNoteButtonNo.innerHTML = 'Cancel';
    const viewTaskNote = document.createElement('div');
    viewTaskNote.classList.add('task-note-view');
    //let task_id = +(localStorage.getItem('task_id') as string);

/*     getAllPostsForOneTask(task_id).then((posts: IPost[]) => {
      posts.forEach((post: IPost) => {
        const noteBordBody = document.querySelector('.task-note-view') as HTMLElement;
        const noteContainer = document.createElement('div');
        const noteText = document.createElement('div');

        noteContainer.classList.add('note-container');
        noteText.classList.add('note-text');
        noteText.textContent = post.content;

        noteContainer.append(noteText)

        noteBordBody.append(noteContainer);

      })
    })
 */
    viewTaskNoteButtonContainer.append(viewTaskNoteButtonYes, viewTaskNoteButtonNo)
    viewTaskNoteInputContainer.append(viewTaskNoteInputImg, viewTaskNoteInput)
    viewTaskNoteContainer.append(viewTaskNoteTitle, viewTaskNoteInputContainer, viewTaskNoteButtonContainer)
    viewTaskTitle.append(taskPriority, viewTaskTitleName)
    viewTaskContainer.append(viewTaskContainerClose, viewTaskTitle, viewTaskTime, viewTaskNoteContainer, viewTaskNote)
    return viewTaskContainer
  }

  appendNote(post: IPost) {
    const noteBordBody = document.querySelector('.task-note-view') as HTMLElement;
    const viewTaskNoteInput = <HTMLInputElement>document.querySelector('.task-note-input')
    const noteContainer = document.createElement('div');
    const noteText = document.createElement('div');

    noteContainer.classList.add('note-container');
    noteText.classList.add('note-text');
    noteBordBody.innerHTML = '';

    noteText.innerHTML = viewTaskNoteInput.value;
    noteContainer.append(noteText)

    noteBordBody.append(noteContainer);

  }

  render() {
    const menu = this.makeMenu();
    const task = this.makeTaskBord();
    const list = this.makeInfoBord();
    const view = this.makeViewTask();
    list.append(view)
    this.container.append(menu, task, list);
    return this.container;
  }
}
export default AppSection;



