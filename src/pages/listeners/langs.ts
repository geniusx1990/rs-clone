export let lang = 'en';

export async function setCheckbox() {
  const langRu = await document.getElementById('ru') as HTMLInputElement;
  const langEn = await document.getElementById('en') as HTMLInputElement;

  if (langEn && langRu) {
    if (lang === 'ru') {
      langRu.checked = true;
    } else if (lang === 'en') {
      langEn.checked = true;
    }
  }
}
export const listenLangs = async () => {

  setCheckbox();

  window.addEventListener('change', () => {
    const target = event?.target as HTMLInputElement;
    if (target.classList.contains('lang__button')) {
      //start page
      const linkMain = document.querySelector('.nav-main') as HTMLElement;
      const linkHelp = document.querySelector('.nav-help') as HTMLElement;
      const linkLog = document.querySelector('.nav-log-in') as HTMLElement;
      const linkSignUp = document.querySelector('.nav-sign-up') as HTMLElement;
      const title = document.querySelector('.start__header') as HTMLElement;
      const startBtn = document.querySelector('.start__btn') as HTMLElement;
      const img = document.querySelector('.slider__img') as HTMLElement;
      //help page
      const helpTitle = document.querySelector('.help__header') as HTMLElement;
      //application-page
      const btnTaskOne = document.querySelector('.button-task-one') as HTMLElement;
      const btnTaskTwo = document.querySelector('.button-task-two') as HTMLElement;
      const taskAddInput = document.querySelector('.task-add-input-lang') as HTMLInputElement;
      const taskAddButton = document.querySelector('.task-add-button-lang') as HTMLButtonElement;
      const selectPersonal = document.querySelector('.option-select-personal') as HTMLElement;
      const selectWork = document.querySelector('.option-select-work') as HTMLElement;
      const selectTomorrow = document.querySelector('.option-select-tomorrow') as HTMLElement;
      const selectToday = document.querySelector('.option-select-today') as HTMLElement;
      const selectRemove = document.querySelector('.option-select-pr') as HTMLElement;
      const selectHigh = document.querySelector('.option-select-high') as HTMLElement;
      const selectMiddle = document.querySelector('.option-select-middle') as HTMLElement;
      const selectLow = document.querySelector('.option-select-low') as HTMLElement;
      const titleLang = document.querySelector('.task-title-lang') as HTMLElement;
      const taskLang = document.querySelector('.task-count-do-task') as HTMLElement;
      const doneLang = document.querySelector('.task-completed') as HTMLElement;
      const inbox = document.querySelector('.inbox-all') as HTMLElement;
      const list = document.querySelector('.inbox-list') as HTMLElement;

      const time = document.querySelector('.view-task-time-lang') as HTMLElement;
      const note = document.querySelector('.task-note-title-lang') as HTMLElement;
      const noteInput = document.querySelector('.task-note-input-lang') as HTMLInputElement;
      const btnYes = document.querySelector('.task-note-button-yes') as HTMLElement;
      const btnNo = document.querySelector('.task-note-button-no') as HTMLElement;
      const btnClose = document.querySelector('.view-task-container-close') as HTMLElement;
      const menuInbox = document.querySelectorAll('.menu-item-inbox');
      let menuInboxRu = ['Все задачи', 'Высокий приоритет', 'Низкий приоритет'];
      let menuInboxEn = ['All tasks', 'High priority', 'Low priority'];
      const menuList = document.querySelectorAll('.menu-item-list');
      

      if (target.id === 'ru') {
        lang = 'ru';
        if (img) {
          img.classList.remove('slider-en');
          img.classList.add('slider-ru');
        }
        if (linkHelp && linkLog && linkSignUp && linkMain) {
          linkMain.textContent = 'Главная'
          linkHelp.textContent = "Помощь";
          linkLog.textContent = 'Вход';
          linkSignUp.textContent = 'Регистрация';
        }
        if (title && startBtn) {
          title.textContent = 'Умное приложение для занятых людей!';
          startBtn.textContent = 'Регистрация';
        }
        if (helpTitle) {
          helpTitle.textContent = 'Умное приложение для занятых людей!';
        }
        if (btnTaskOne && btnTaskTwo) {
          btnTaskOne.textContent = 'Незавершенные';
          btnTaskTwo.textContent = 'Завершенные';
        }
        if (taskAddInput && taskAddButton) {
          taskAddInput.placeholder = 'Добавить задачу';
          taskAddButton.textContent = 'Добавить';
        }
        if (selectPersonal && selectWork) {
          selectPersonal.textContent = 'Личное';
          selectWork.textContent = 'Работа';
        }
        if (selectTomorrow && selectToday) {
          selectTomorrow.textContent = 'Завтра';
          selectToday.textContent = 'Сегодня';
        }
        if (selectRemove && selectHigh && selectMiddle && selectLow) {
          selectRemove.textContent = 'Убрать приоритет';
          selectHigh.textContent = 'Установить высокий приоритет';
          selectMiddle.textContent = 'Установить средний приоритет';
          selectLow.textContent = 'Установить низкий приоритет';
        }
        if (titleLang && taskLang && doneLang) {
          titleLang.innerHTML = 'Входящие';
          doneLang.innerHTML = 'завершено';
          taskLang.innerHTML = 'задач(и)';
        }
        if (inbox && list) {
          inbox.textContent = 'Входящие';
          list.textContent = 'Списки';
        }
        if (time && note && noteInput && btnYes && btnNo && btnClose) {
          time.innerHTML = 'срок';
          note.innerHTML = 'Заметки';
          noteInput.placeholder = 'Добавить заметку';
          btnNo.innerHTML = 'Отмена';
          btnYes.innerHTML = 'Сохранить';
          btnClose.textContent = 'закрыть';
        }
        if (menuInbox.length > 0) {
          for (let i = 0; i < menuInbox.length; i++) {
            menuInbox[i].textContent = menuInboxRu[i];
          }
        }
        if (menuList.length > 0) {
          for (let i = 0; i < menuList.length; i++) {
            // menuList[i].textContent = menuListRu[i];
          }
        }

      } else {
        lang = 'en';
        if (img) {
          img.classList.remove('slider-ru');
          img.classList.add('slider-en');
        }
        if (linkHelp && linkLog && linkSignUp && linkMain) {
          linkMain.textContent = 'Main';
          linkHelp.textContent = "Help";
          linkLog.textContent = 'Log in';
          linkSignUp.textContent = 'Sign Up for free';
        }
        if (title && startBtn) {
          title.textContent = 'The smart to-do app for busy people!';
          startBtn.textContent = 'Sign up';
        }
        if (helpTitle) {
          helpTitle.textContent = 'The smart to-do app for busy people!';
        }
        if (btnTaskOne && btnTaskTwo) {
          btnTaskOne.textContent = 'Incomplete';
          btnTaskTwo.textContent = 'Completed';
        }
        if (taskAddInput && taskAddButton) {
          taskAddInput.placeholder = 'Add a task';
          taskAddButton.textContent = 'Add';
        }
        if (selectPersonal && selectWork) {
          selectPersonal.textContent = 'Personal';
          selectWork.textContent = 'Work';
        }
        if (selectTomorrow && selectToday) {
          selectTomorrow.textContent = 'Tomorrow';
          selectToday.textContent = 'Today';
        }
        if (selectRemove && selectHigh && selectMiddle && selectLow) {
          selectRemove.textContent = 'Remove priority';
          selectHigh.textContent = 'Set high priority';
          selectMiddle.textContent = 'Set medium priority';
          selectLow.textContent = 'Set low priority';
        }
        if (titleLang) {
          titleLang.innerHTML = 'Inbox';
        }
        if (titleLang && taskLang && doneLang) {
          titleLang.innerHTML = 'Inbox';
          doneLang.innerHTML = 'completed';
          taskLang.innerHTML = 'tasks';
        }
        if (inbox && list) {
          inbox.textContent = 'Inbox';
          list.textContent = 'Lists';
        }
        if (time && note && noteInput && btnYes && btnNo && btnClose) {
          time.innerHTML = 'term';
          note.innerHTML = 'Notes';
          noteInput.placeholder = 'Add a note';
          btnNo.innerHTML = 'Cancel';
          btnYes.innerHTML = 'Save';
          btnClose.textContent = 'close';
        }
        if (menuInbox.length > 0) {
          for (let i = 0; i < menuInbox.length; i++) {
            menuInbox[i].textContent = menuInboxEn[i];
          }
        }
        if (menuList.length > 0) {
          for (let i = 0; i < menuList.length; i++) {
            // menuList[i].textContent = menuListEn[i];
          }
        }
      }
    }
  })
}
