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

        const close = document.createElement('div');
        close.className = 'close';

        const closeSpan1 = document.createElement('span');
        closeSpan1.className = 'modal__close-line'
        const closeSpan2 = document.createElement('span');
        closeSpan2.className = 'modal__close-line'

        close.append(closeSpan1, closeSpan2);

        close.addEventListener('click', () => {
            const modal = <HTMLElement>document.querySelector('.modal');
            modal.style.display = 'none';
        })

        window.addEventListener('click', (e) => {
            const target = <HTMLElement>e.target;
            if (target.classList.contains('modal')) {
                target.style.display = 'none';
            }
        })

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
