import Page from '../../components/templates/page'

class ApplicationPage extends Page {

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle('application-page');
        this.container.append(title);

        return this.container;

    }
}

export default ApplicationPage;