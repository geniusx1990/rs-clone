export const listenLangs = () => {
  window.addEventListener('change', () => {
    const target = event?.target as HTMLInputElement;
    if (target.classList.contains('lang__button')) {

      const linkHelp = document.querySelector('.nav-help') as HTMLElement;
      const linkLog = document.querySelector('.nav-log-in') as HTMLElement;
      const linkSignUp = document.querySelector('.nav-sign-up') as HTMLElement;
      const title = document.querySelector('.start__header') as HTMLElement;
      const startBtn = document.querySelector('.start__btn') as HTMLElement;
      const img = document.querySelector('.slider__img') as HTMLElement;

      if (target.id === 'ru') {
        img.classList.remove('slider-en');
        img.classList.add('slider-ru');
        linkHelp.textContent = "Помощь";
        linkLog.textContent = 'Вход';
        linkSignUp.textContent = 'Регистрация';
        title.textContent = 'Умное приложение для занятых людей!';
        startBtn.textContent = 'Регистрация';
      } else {
        img.classList.remove('slider-ru');
        img.classList.add('slider-en');
        linkHelp.textContent = "Help";
        linkLog.textContent = 'Log in';
        linkSignUp.textContent = 'Sign Up';
        title.textContent = 'The smart to-do app for busy people!';
        startBtn.textContent = 'Sign up';
      }
    }
  })
}
