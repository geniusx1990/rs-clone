import App from '../app/app';

export const closeModal = () => {
  window.addEventListener('click', () => {

    const target = event?.target as HTMLElement;

    if (target.closest('.registration') && !target.closest('.container')) {

      location.href = "../#main-page"
      // App.renderNewPage('main-page');

    }

  })
}

