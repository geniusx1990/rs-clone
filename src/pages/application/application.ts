import Page from '../../components/templates/page'
import HeaderApp from '../../components/header/header-app';
import AppSection from '../../components/sections/app-section';
import Footer from '../../components/footer/footer'

class ApplicationPage extends Page {
    private header: HeaderApp;
    private footer: Footer;
    private section: AppSection;

    constructor(id: string) {
        super(id);
        this.header = new HeaderApp('header', 'header-container');
        this.section = new AppSection('section', 'main-section');
        this.footer = new Footer('footer', 'footer')
    }

    render() {
        this.container.append(this.header.render());
        this.container.append(this.section.render());
        this.container.append(this.footer.render());

        return this.container;

    }
}

export default ApplicationPage;