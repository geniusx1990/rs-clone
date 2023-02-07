import Component from "../templates/component";

class Footer extends Component {
  constructor(tagName: string, clasName: string) {
    super(tagName, clasName);
  }


  makeFooter() {
    return `
    <div class="footer__container">
    <div class="footer__author ">
    <span>&copy; 2023</span>
      </div>
    <a href="https://github.com/geniusx1990" class="footer__link">geniusx1990</a>
    <a href="https://github.com/inni-ast" class="footer__link">inni-ast</a>
    <a href="https://github.com/angelica-zb" class="footer__link">angelica-zb</a>
  <div class="footer__rss">
    <a href="https://rs.school/js/" class="footer__link">
      <img src="https://rs.school/images/rs_school.svg" class="footer__rss-img" alt="RSS logo">
    </a>
  </div>
  </div>
    `;
  }


  render() {
    const footer = this.makeFooter();

    this.container.innerHTML = footer;
    return this.container;
  }
}

export default Footer;
