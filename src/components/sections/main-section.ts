import Component from "../templates/component";
import { createEl } from "../templates/functions";

class MainSection extends Component {
  slider: HTMLElement;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.slider = document.createElement('div');
    this.slider.classList.add('start__slider', 'slider');
  }
  makeHeader() {
    const header = document.createElement('div');

    header.className = 'start';
    createEl('h1', 'start__header', header, 'The smart to-do app for busy people!');
    createEl('button', 'btn start__btn', header, 'Sign up');
    this.slider.innerHTML = this.makeSliderBtn();
    header.append(this.slider);
    return header;
  }
  makeSliderBtn() {
    return `
    <div class="slider__btns">
      <input type="radio" id="btn-one" name="scales" checked>
      <input type="radio" id="btn-two" name="scales">
      <input type="radio" id="btn-three" name="scales">
      <input type="radio" id="btn-four" name="scales">
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
