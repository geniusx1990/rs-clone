import Component from "../templates/component";
import { createEl } from "../templates/functions";

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }


  createHeader() {
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'header-wrapper';

    const logo = document.createElement('div');
    logo.className = 'header_logo';
    headerWrapper.append(logo);

    const logoTitle = createEl("div", "header__title", logo, "Remember the milk");

    headerWrapper.append(this.renderLinks());

    return headerWrapper;
  }


  renderLinks() {
    const navigation = document.createElement('nav');
    navigation.className = 'navigation';

    const html = `
    <ul class="navigation-list">
    <li class="navigation-item"><a href="#" class="nav-link nav-tour">Tour</a></li>
    <li class="navigation-item"><a href="#" class="nav-link nav-help">Help</a></li>
    <li class="navigation-item"><a href="#" class="nav-link nav-log-in">Log in</a></li>
    <li class="navigation-item"><a href="#" class="nav-link nav-sign-up">Sign Up for free</a></li>
  </ul>`;

    navigation.innerHTML = html;
    return navigation;

  }



  render() {

    const header = this.createHeader();
    this.container.append(header);
    return this.container;

  }


}

export default Header;
