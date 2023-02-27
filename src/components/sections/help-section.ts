import Component from "../templates/component";
import { createEl } from "../templates/functions";
import { lang } from "../../pages/listeners/langs";

export class HelpSection extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);

  }
  makeHeader() {
    const header = document.createElement('div');

    header.className = 'start';
    const title = document.createElement('h1');

    title.classList.add('help__header');
    (lang === 'ru') ? title.textContent = 'Умное приложение для занятых людей!' : title.textContent = 'The smart to-do app for busy people!';
    header.append(title);
    return header;
  }
  render() {
    const header = this.makeHeader();
    this.container.append(header);
    return this.container;
  }
}

export default HelpSection;
