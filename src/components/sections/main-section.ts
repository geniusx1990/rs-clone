import Component from "../templates/component";
import { createEl } from "../templates/functions";
import { lang } from "../../pages/listeners/langs";

export class MainSection extends Component {
  slider: HTMLElement;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.slider = document.createElement('div');
    this.slider.classList.add('start__slider', 'slider');
  }
  makeHeader() {
    const header = document.createElement('div');

    header.className = 'start';
    (lang === 'en') ? createEl('h1', 'start__header', header, 'The smart to-do app for busy people!') :
      createEl('h1', 'start__header', header, 'Умное приложение для занятых людей!');

    (lang === 'en') ? createEl('button', 'btn start__btn', header, 'Sign up') :
      createEl('button', 'btn start__btn', header, 'Регистрация');
    this.slider.innerHTML = this.makeSliderBtn();
    header.append(this.slider);
    return header;
  }

  makeSliderBtn() {
    return `
    <div class="slider__image">
      <div class="slider__img slider-en slider__one" preload="lazy"></div>
    </div>
    <div class="slider__btns">
      <input type="radio" class="slider__button" id="btn-one" name="scales" checked>
      <input type="radio"  class="slider__button"id="btn-two" name="scales">
      <input type="radio" class="slider__button" id="btn-three" name="scales">
      <input type="radio"  class="slider__button"id="btn-four" name="scales">
    </div>
    `
  }
  render() {
    const header = this.makeHeader();

    this.container.append(header);
    return this.container;
  }
}

export default MainSection;
