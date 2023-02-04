import Component from "../templates/component";
import './header.css'

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }


    createHeader() {
        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'header-wrapper';

        const logo = document.createElement('div');
        logo.className = 'header_logo';
        headerWrapper.append(logo)
        headerWrapper.append(this.renderLinks());

        return headerWrapper;
    }


    renderLinks() {
        const navigation = document.createElement('nav');
        navigation.className = 'navigation';

        const ulList = document.createElement('ul');
        ulList.className = 'navigation-list';

        const arrNameLinks = ['Tour', 'Help', 'Log in', 'Sign Up for free'];

        arrNameLinks.forEach(link => {
            const liElement = document.createElement('li');
            liElement.className = 'navigation-item';
            const linkElement = document.createElement('a');
            linkElement.href = ''
            linkElement.textContent = link;
            liElement.append(linkElement);
            ulList.append(liElement);
        })

        navigation.append(ulList);

        return navigation;

    }



    render() {

        const header = this.createHeader();
        this.container.append(header);
        return this.container;

    }


}

export default Header;