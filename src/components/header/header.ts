import Component from "../templates/component";
import { createEl } from "../templates/functions";
import Modal from '../../components/modal/modal'

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

    const navigationList = document.createElement('ul');
    navigationList.className = 'navigation-list';

    const arrClasses = ['nav-link nav-tour', 'nav-link nav-help', 'nav-link nav-log-in', 'nav-link nav-sign-up'];
    const arrNames = ['Tour', 'Help', 'Log in', 'Sign Up for free'];

    arrClasses.forEach((num1, index) => {
      const num2 = arrNames[index];
      const liElement = document.createElement('li');
      liElement.className = 'navigation-item';


      const aElement = document.createElement(('a'));
      aElement.className = num1;
      aElement.textContent = num2;
      //aElement.href = '#';

      if (index == 2) {
        console.log(num2)

        aElement.addEventListener('click', () => {
          const modal = new Modal('div', 'modal');
          modal.render().style.display = 'block';
        })
      }

      liElement.append(aElement);
      navigationList.append(liElement);
    })

    navigation.append(navigationList);

    /*  const html = `
         <ul class="navigation-list">
         <li class="navigation-item"><a href="#" class="nav-link nav-tour">Tour</a></li>
         <li class="navigation-item"><a href="#" class="nav-link nav-help">Help</a></li>
         <li class="navigation-item"><a href="#" class="nav-link nav-log-in">Log in</a></li>
         <li class="navigation-item"><a href="#" class="nav-link nav-sign-up">Sign Up for free</a></li>
       </ul>`;
 
     navigation.innerHTML = html; */

    return navigation;

  }



  render() {

    const header = this.createHeader();
    this.container.append(header);
    return this.container;

  }


}

export default Header;
