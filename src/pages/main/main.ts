import Page from '../../components/templates/page'
import Header from '../../components/header/header';
import MainSection from '../../components/sections/main-section';
import Footer from '../../components/footer/footer'

class MainPage extends Page {
  private header: Header;
  private section: MainSection;
  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.header = new Header('header', 'header-container');
    this.section = new MainSection('section', 'main-section');
    this.footer = new Footer('footer', 'footer')
  }
  render() {
    this.container.append(this.header.render());
    this.container.append(this.section.render());
    this.container.append(this.footer.render());

    return this.container

  }
}

export default MainPage;
