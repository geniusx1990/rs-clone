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
          linkSignUp.textContent = 'Sign Up';
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
      }
    }
  })
}
