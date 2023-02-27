import Component from "../templates/component";
import { createEl } from "../templates/functions";


class HeaderApp extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }
  renderLangs() {
    const el = document.createElement('div');

    el.classList.add('header__langs');

    const html = `
        <label class="lang__label lang-label-en" for="en">EN<input type="radio" class="lang__button" id="en" name="langs"></label>
        <label  class="lang__label lang-label-ru"for="ru">RU<input type="radio"  class="lang__button"id="ru" name="langs"></label>

        `;
    el.innerHTML = html;
    return el;
  }

  createHeader() {
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'header-wrapper';

    const logoMenu = createEl("div", "header__menu", headerWrapper);
    const inputHeder = createEl("input", "header__input", headerWrapper);
    const langHtml = this.renderLangs();

    headerWrapper.append(langHtml);
    const logoSetings = createEl("div", "header__setings", headerWrapper);


    logoSetings.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.removeItem("user_id")
      localStorage.removeItem("email")
      localStorage.removeItem("task_id")
      location.href = "../#main-page";
    })

    return headerWrapper;
  }



  render() {

    const header = this.createHeader();
    this.container.append(header);
    return this.container;

  }


}

export default HeaderApp;


