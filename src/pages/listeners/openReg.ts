export const openRegistration = async () => {
  window.addEventListener('click', () => {

    const target = event?.target as HTMLElement;

    if (target.classList.contains('nav-sign-up') || target.classList.contains('start__btn')) {
      setTimeout(function () {
        const el = document.querySelector('.container') as HTMLElement;
        el.classList.add('active');
      }, 500)
    }
  })
}
