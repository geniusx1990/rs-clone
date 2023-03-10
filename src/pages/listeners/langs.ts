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
      const select = document.querySelector('.option-select') as HTMLElement;
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
      let menuInboxRu = ['?????? ????????????', '?????????????? ??????????????????', '???????????? ??????????????????'];
      let menuInboxEn = ['All tasks', 'High priority', 'Low priority'];
      const menuList = document.querySelectorAll('.menu-item-list');
      

      if (target.id === 'ru') {
        lang = 'ru';
        if (img) {
          img.classList.remove('slider-en');
          img.classList.add('slider-ru');
        }
        if (linkHelp && linkLog && linkSignUp && linkMain) {
          linkMain.textContent = '??????????????'
          linkHelp.textContent = "????????????";
          linkLog.textContent = '????????';
          linkSignUp.textContent = '??????????????????????';
        }
        if (title && startBtn) {
          title.textContent = '?????????? ???????????????????? ?????? ?????????????? ??????????!';
          startBtn.textContent = '??????????????????????';
        }
        if (helpTitle) {
          helpTitle.textContent = '?????????? ???????????????????? ?????? ?????????????? ??????????!';
        }
        if (btnTaskTwo) {
          btnTaskTwo.textContent = '??????????????????????';
        }
        if (btnTaskOne) {
          btnTaskOne.textContent = '????????????';
        }

        if (taskAddInput && taskAddButton) {
          taskAddInput.placeholder = '???????????????? ????????????';
          taskAddButton.textContent = '????????????????';
        }
        if (selectPersonal && selectWork) {
          selectPersonal.textContent = '????????????';
          selectWork.textContent = '????????????';
        }
        if (selectTomorrow && selectToday) {
          selectTomorrow.textContent = '????????????';
          selectToday.textContent = '??????????????';
        }
        if (select&&selectRemove && selectHigh && selectLow) {
          select.textContent = '?????????????? ??????????????????';
          selectRemove.textContent = '???????????? ??????????????????';
          selectHigh.textContent = '???????????????????? ?????????????? ??????????????????';
          selectLow.textContent = '???????????????????? ???????????? ??????????????????';
        }
        if (titleLang && taskLang && doneLang) {
          titleLang.innerHTML = '????????????????';
          doneLang.innerHTML = '??????????????????';
          taskLang.innerHTML = '??????????(??)';
        }
        if (list) {
          list.textContent = '????????????';
        }
        if (inbox) {
          inbox.textContent = '??????????????????';
        }
        if (time && btnNo) {
          time.innerHTML = '????????';

          btnNo.innerHTML = '????????????';
        }
        if (note && noteInput) {
          note.innerHTML = '??????????????';
          noteInput.placeholder = '???????????????? ??????????????';
        }
        if (btnYes) {
          btnYes.innerHTML = '??????????????????';
        }
        if (btnClose) {
          btnClose.textContent = '??????????????';
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
        if (btnTaskTwo) {
          btnTaskTwo.textContent = 'Completed';
        }
        if (btnTaskOne) {
          btnTaskOne.textContent = 'Tasks';
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
        if (select && selectRemove && selectHigh && selectLow) {
          select.textContent = 'Choose a priority';
          selectRemove.textContent = 'Remove priority';
          selectHigh.textContent = 'Set high priority';
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
        if (list) {
          list.textContent = 'Lists';
        }
        if (inbox) {
          inbox.textContent = 'Priority';
        }
        if (time && btnNo) {
          time.innerHTML = 'term';
          btnNo.innerHTML = 'Cancel';
        }
        if (note && noteInput) {
          note.innerHTML = 'Notes';
          noteInput.placeholder = 'Add a note';
        }
        if (btnYes) {
          btnYes.innerHTML = 'Save';
        }
        if (btnClose) {
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
