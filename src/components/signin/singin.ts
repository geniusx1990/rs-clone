import Component from "../templates/component";
import { apiURL } from '../../type'
class SignIn extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    createSignForm() {
        const signIn = <HTMLElement>document.createElement('div');
        signIn.className = 'user sign-in-container'

        const quoteBox = <HTMLElement>document.createElement('div');
        quoteBox.className = 'quote-container';

        const quote = <HTMLElement>document.createElement('h3');
        quote.textContent = `“I am rather like a mosquito in a nudist camp; I know what I want to do, but I don’t know where to begin.”`;

        const athour = <HTMLElement>document.createElement('p');
        athour.textContent = '- David Allen';

        quoteBox.append(quote, athour);


        const formBox = <HTMLElement>document.createElement('div');
        formBox.className = 'form-container';

        const formSignIn = <HTMLElement>document.createElement('form');

        const titleSign = <HTMLElement>document.createElement('h3');
        titleSign.textContent = 'Sign In';

        //inputs SignIn

        const mailSignIn = <HTMLInputElement>document.createElement('input');
        mailSignIn.className = 'mail-sign-in';
        mailSignIn.type = 'email';
        mailSignIn.placeholder = 'Email'
        mailSignIn.setAttribute('required', '');

        const passwordInput = <HTMLInputElement>document.createElement('input');
        passwordInput.className = 'password-sign-in';
        passwordInput.type = 'password'
        passwordInput.placeholder = 'Password';
        passwordInput.setAttribute('required', '');

        const submitSignIn = <HTMLInputElement>document.createElement('input');
        submitSignIn.className = 'button-sign-in';
        submitSignIn.type = 'submit';
        submitSignIn.value = 'Sign In';

        const linktoSignUp = <HTMLElement>document.createElement('a');
        linktoSignUp.className = 'sign-up-link'
        linktoSignUp.textContent = 'Sign Up';
        linktoSignUp.setAttribute('href', '#registration');

        linktoSignUp.addEventListener('click', () => {

            const element = <HTMLElement>document.querySelector('.container');
            element.classList.toggle('active');
        })

        const signInText = <HTMLElement>document.createElement('p');
        signInText.className = 'signin';
        signInText.textContent = "Don't have an account ?"

        signInText.append(linktoSignUp);
        formSignIn.append(titleSign, mailSignIn, passwordInput, submitSignIn, signInText)
        formBox.append(formSignIn)
        signIn.append(quoteBox, formBox)

        

        const token = localStorage.getItem("cookie");

        if (token) {
            alert('URA')
        }


        submitSignIn.addEventListener('click', (event) => {
            event.preventDefault()

            const email = mailSignIn.value;
            const password = passwordInput.value;

            fetch(`${apiURL}/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
                .then((res) => res.json())
                .then((data) => {
                    const token = data.token;

                    if (data.error) {
                        alert(`${data.error}`)
                    }
                    else if (token) {
                        localStorage.setItem("cookie", token);
                        location.href = "../#application-page";

                    }

                })
                .catch((err) => {
                    
                    alert('Error Signing In, please try again.')
                });

        })

        return signIn
    }



    createSignUpForm() {
        const signUp = <HTMLElement>document.createElement('div');
        signUp.className = 'user signupBx'

        const quoteBox = <HTMLElement>document.createElement('div');
        quoteBox.className = 'quote-container';

        const quote = <HTMLElement>document.createElement('h3');
        quote.textContent = `“A journey of a thousand miles begins with a single step.”`;

        const athour = <HTMLElement>document.createElement('p');
        athour.textContent = '- Laozi';

        quoteBox.append(quote, athour);

        const formBox = <HTMLElement>document.createElement('div');
        formBox.className = 'form-container';

        const formSignUp = <HTMLElement>document.createElement('form');

        const titleSignUp = <HTMLElement>document.createElement('h3');
        titleSignUp.textContent = 'Create an account';

        //inputs SignUp

        const nameInpit = <HTMLInputElement>document.createElement('input');
        nameInpit.className = 'name';
        nameInpit.type = 'text';
        nameInpit.placeholder = 'Username'
        nameInpit.setAttribute('required', '');

        const mailSignUp = <HTMLInputElement>document.createElement('input');
        mailSignUp.className = 'mail-sign-up';
        mailSignUp.type = 'email';
        mailSignUp.placeholder = 'Email Address'
        mailSignUp.setAttribute('required', '');

        const phoneInput = <HTMLInputElement>document.createElement('input');
        phoneInput.className = 'phone';
        phoneInput.type = 'tel'
        phoneInput.placeholder = 'Contact';
        phoneInput.setAttribute('id', 'phone');
        phoneInput.setAttribute('required', '');



        const passwordInput = <HTMLInputElement>document.createElement('input');
        passwordInput.className = 'password-input-first';
        passwordInput.type = 'password'
        passwordInput.placeholder = 'Create Password';
        passwordInput.setAttribute('required', '');


        const passwordInputConfim = <HTMLInputElement>document.createElement('input');
        passwordInputConfim.className = 'password-input-second';
        passwordInputConfim.type = 'password'
        passwordInputConfim.placeholder = 'Confirm Password';
        passwordInputConfim.setAttribute('required', '');

        const submitSignUp = <HTMLInputElement>document.createElement('input');
        submitSignUp.className = 'button-sign-up';
        submitSignUp.type = 'submit';
        submitSignUp.value = 'Sign Up';


        submitSignUp.addEventListener('click', (event) => {
            event.preventDefault();
            const name = nameInpit.value;
            const email = mailSignUp.value;
            const phonenumber = phoneInput.value;
            const password = passwordInput.value;
            const retypedPassword = passwordInputConfim.value;

            if (password !== retypedPassword) {
                alert('wrong password, please check both passwords');
                return;
            }

            fetch(`${apiURL}/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phonenumber, password }),
            })
                .then((res) =>
                    (res.json()))
                .then((data) => {
                    if (data.error) {
                        alert(`${data.error}`)
                    }

                    else {
                        alert('Account created. Signing in please.')
                    }
                })
                .catch((err) => {
                    alert('Error Signing up, try again.')
                });

        })


        const linktoSignUp = <HTMLElement>document.createElement('a');
        linktoSignUp.textContent = 'Sign Up';

        const signInText = <HTMLElement>document.createElement('p');
        signInText.className = 'signin';
        signInText.textContent = "Don't have an account ?"

        const link = document.createElement('a');


        link.append(submitSignUp);

        const linktoSignSin = <HTMLElement>document.createElement('a');
        linktoSignSin.textContent = 'Sign In';
        linktoSignSin.className = 'sign-up-link';
        linktoSignSin.addEventListener('click', () => {

            const element = <HTMLElement>document.querySelector('.container');
            element.classList.toggle('active');
        })


        const signUpText = <HTMLElement>document.createElement('p');
        signUpText.className = 'signup';
        signUpText.textContent = "Already have an account ?"

        signInText.append(linktoSignSin);
        formSignUp.append(titleSignUp, nameInpit, mailSignUp, phoneInput, passwordInput, passwordInputConfim, link, signInText)
        formBox.append(formSignUp)
        signUp.append(formBox, quoteBox)


        return signUp;

    }

    render() {
        const signForm = this.createSignForm();
        const signUpForm = this.createSignUpForm();
        this.container.append(signForm, signUpForm);
        return this.container;

    }


}

export default SignIn;