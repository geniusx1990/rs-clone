import Page from '../../components/templates/page'
import Header from '../../components/header/header';
import HelpSection from '../../components/sections/help-section';
import Footer from '../../components/footer/footer'

class HelpPage extends Page {
  private header: Header;
  private section: HelpSection;
  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.header = new Header('header', 'header-container');
    this.section = new HelpSection('section', 'help-section');
    this.footer = new Footer('footer', 'footer')
  }



  render() {
    this.container.append(this.header.render());
    this.container.append(this.section.render());
    this.container.append(this.footer.render());
    return this.container;

  }
}

export default HelpPage;
