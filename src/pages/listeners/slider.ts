export const listenSlider = () => {
  window.addEventListener('change', () => {
    const target = event?.target as HTMLInputElement;
    if (target.classList.contains('slider__button')) {
      const el = document.querySelector('.slider__img') as HTMLElement;

      if (target.id === 'btn-one') {
        el.classList.remove('slider__two', 'slider__three', 'slider__four');
        el.classList.add('slider__one');
        document.body.style.background = '#4169E1';
      } else if (target.id === 'btn-two') {
        el.classList.remove('slider__one', 'slider__three', 'slider__four');
        el.classList.add('slider__two');
        document.body.style.background = '#1E90FF';
      }
      else if (target.id === 'btn-three') {
        el.classList.remove('slider__one', 'slider__two', 'slider__four');
        el.classList.add('slider__three');
        document.body.style.background = '#8A2BE2';
      } else if (target.id === 'btn-four') {
        el.classList.remove('slider__one', 'slider__two', 'slider__three');
        el.classList.add('slider__four');
        document.body.style.background = '#32CD32';
      }
    }
  })
}
