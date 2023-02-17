import App from '../app/app';

export const closeModal = () => {
  window.addEventListener('click', () => {

    const target = event?.target as HTMLElement;

    if (target.closest('.registration') && !target.closest('.container')) {

      App.renderNewPage('main-page');

    }

  })
}

