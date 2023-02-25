import Component from "../templates/component";
import { createEl } from "../templates/functions";
import Modal from '../../components/modal/modal';
import { lang } from "../../pages/listeners/langs";

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }


  createHeader() {
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'header-wrapper';

    const logo = document.createElement('div');
    logo.className = 'header_logo';
    const link = createEl("a", "header__link", logo) as HTMLLinkElement;
    link.href = '#main-page';

    headerWrapper.append(logo);
    const logoTitle = createEl("div", "header__title", logo, "Remember the milk");
    const linkTwo = createEl("a", "header__link", logoTitle) as HTMLLinkElement;
    linkTwo.href = '#main-page';

    headerWrapper.append(this.renderLangs());
    headerWrapper.append(this.renderLinks());

    return headerWrapper;
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

  renderLinks() {
    const navigation = document.createElement('nav');
    navigation.className = 'navigation';

    const navigationList = document.createElement('ul');
    navigationList.className = 'navigation-list';

    const arrClasses = ['nav-link nav-main', 'nav-link nav-help', 'nav-link nav-log-in', 'nav-link nav-sign-up'];
    let arrNames = ['Main', 'Help', 'Log in', 'Sign Up for free'];

    if (lang === 'en') {
      arrNames = ['Main', 'Help', 'Log in', 'Sign Up for free'];
    } else if (lang === 'ru') {
      arrNames = ['Главная', 'Помощь', 'Вход', 'Регистрация'];
    }


    arrClasses.forEach((num1, index) => {
      const num2 = arrNames[index];
      const liElement = document.createElement('li');
      liElement.className = 'navigation-item';


      const aElement = document.createElement(('a'));
      aElement.className = num1;
      aElement.textContent = num2;

      if (index === 0) {
        aElement.href = '#main-page';
      }
      if (index === 1) {
        aElement.href = '#help';
      }
      if (index === 2) {
        aElement.href = '#registration';
      }
      liElement.append(aElement);
      navigationList.append(liElement);
    })

    navigation.append(navigationList);

    return navigation;

  }



  render() {

    const header = this.createHeader();
    this.container.append(header);
    return this.container;

  }


}

export default Header;
