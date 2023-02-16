import Component from "../templates/component";
import { createEl } from "../templates/functions";


class HeaderApp extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
      }

      
  createHeader() {
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'header-wrapper';

    const logoMenu = createEl("div", "header__menu", headerWrapper);
    const inputHeder = createEl("input", "header__input", headerWrapper);   
    const logoSetings = createEl("div", "header__setings", headerWrapper);   
    
    logoSetings.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.removeItem("cookie"); //log out by removing cookie from local storage

      location.href = "../";
      console.log(localStorage.getItem('email'));

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


