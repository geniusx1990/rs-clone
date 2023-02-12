import Page from '../../components/templates/page'
import SignIn from '../../components/signin/singin';
import './registration.css'

class RegistrationPage extends Page {
    private signForm: SignIn;
   

    constructor(id: string) {
        super(id);
        this.signForm = new SignIn('div', 'container');
    }



    render() {
        this.container.append(this.signForm.render());
        return this.container
    }
}

export default RegistrationPage;