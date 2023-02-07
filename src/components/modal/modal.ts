import Component from "../templates/component";
import { createEl } from "../templates/functions";
import './modal.css'

class Modal extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }


    createModal() {
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const close = document.createElement('span');
        close.className = 'close';
        close.textContent = 'X;';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = 'email';
        inputEmail.placeholder = 'E-mail';

        const inputPassword = document.createElement('input');
        inputPassword.type = 'password';
        inputPassword.name = 'password';
        inputPassword.placeholder = 'password';

        modalContent.append(close, inputEmail, inputPassword);

        return modalContent;

    }




    render() {
        const modalWindow = this.createModal();
        this.container.append(modalWindow);
        document.body.prepend(this.container);

        return this.container;

    }


}

export default Modal;
