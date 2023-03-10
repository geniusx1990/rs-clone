import Component from "../templates/component";
import { lang } from "../../pages/listeners/langs";
import { apiURL } from '../../type';
import { userLogIn, userRegister, getAlltasksForOneUser } from '../../requests';
import { createEl } from "../templates/functions";

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
    quote.className = 'quote-text';

    if (lang === 'en') {
      quote.textContent = `“I am rather like a mosquito in a nudist camp; I know what I want to do, but I don’t know where to begin.”`;
    } else {
      quote.textContent = `“Я скорее как комар в нудистском лагере. Я знаю, чем хочу заниматься, но не знаю, с чего начать.”`;
    }

    const athour = <HTMLElement>document.createElement('p');
    athour.className = 'quote-author';
    (lang === 'en') ? athour.textContent = '- David Allen' : athour.textContent = '- Дэвид Аллен'


    quoteBox.append(quote, athour);


    const formBox = <HTMLElement>document.createElement('div');
    formBox.className = 'form-container';
    createEl('div', 'registration__image', formBox);

    const formSignIn = <HTMLElement>document.createElement('form');

    const titleSign = <HTMLElement>document.createElement('h3');
    (lang === 'en') ? titleSign.textContent = 'Sign In' : titleSign.textContent = 'Вход'

    //inputs SignIn

    const mailSignIn = <HTMLInputElement>document.createElement('input');
    mailSignIn.className = 'mail-sign-in';
    mailSignIn.type = 'email';
    mailSignIn.setAttribute('required', '');
    (lang === 'en') ? mailSignIn.placeholder = 'Email' : mailSignIn.placeholder = 'Ваша почта'

    const passwordInput = <HTMLInputElement>document.createElement('input');
    passwordInput.className = 'password-sign-in';
    passwordInput.type = 'password';
    (lang === 'en') ? passwordInput.placeholder = 'Password' : passwordInput.placeholder = 'Пароль'
    passwordInput.setAttribute('required', '');

    const submitSignIn = <HTMLInputElement>document.createElement('input');
    submitSignIn.className = 'button-sign-in';
    submitSignIn.type = 'submit';
    (lang === 'en') ? submitSignIn.value = 'Sign In' : submitSignIn.value = 'Вход'

    const linktoSignUp = <HTMLElement>document.createElement('a');
    linktoSignUp.className = 'sign-up-link';
    (lang === 'en') ? linktoSignUp.textContent = 'Sign Up' : linktoSignUp.textContent = 'Регистрация'
    linktoSignUp.setAttribute('href', '#registration');

    linktoSignUp.addEventListener('click', () => {

      const element = <HTMLElement>document.querySelector('.container');
      element.classList.toggle('active');
    })

    const signInText = <HTMLElement>document.createElement('p');
    signInText.className = 'signin';
    (lang === 'en') ? signInText.textContent = "Don't have an account ?" : signInText.textContent = "У Вас еще нет аккаунта ?"

    signInText.append(linktoSignUp);
    formSignIn.append(titleSign, mailSignIn, passwordInput, submitSignIn, signInText)
    formBox.append(formSignIn)
    signIn.append(quoteBox, formBox)


    submitSignIn.addEventListener('click', (event) => {
      event.preventDefault()

      const email = mailSignIn.value;
      const password = passwordInput.value;

      userLogIn(email, password); // POST request;

    })

    return signIn
  }



  createSignUpForm() {
    const signUp = <HTMLElement>document.createElement('div');
    signUp.className = 'user signupBx'

    const quoteBox = <HTMLElement>document.createElement('div');
    quoteBox.className = 'quote-container';

    const quote = <HTMLElement>document.createElement('h3');
    (lang === 'en') ? quote.textContent = `“A journey of a thousand miles begins with a single step.”` :
      quote.textContent = `"Путешествие в тысячу миль начинается с одного шага."`;

    const athour = <HTMLElement>document.createElement('p');
    (lang === 'en') ? athour.textContent = '- Laozi' : athour.textContent = '- Лао-цзы'

    quoteBox.append(quote, athour);

    const formBox = <HTMLElement>document.createElement('div');
    formBox.className = 'form-container';

    const formSignUp = <HTMLElement>document.createElement('form');

    const titleSignUp = <HTMLElement>document.createElement('h3');
    (lang === 'en') ? titleSignUp.textContent = 'Create an account' : titleSignUp.textContent = 'Создать аккаунт'

    //inputs SignUp

    const nameInpit = <HTMLInputElement>document.createElement('input');
    nameInpit.className = 'name';
    nameInpit.type = 'text';
    (lang === 'en') ? nameInpit.placeholder = 'Username' : nameInpit.placeholder = 'Логин';
    nameInpit.setAttribute('required', '');

    const mailSignUp = <HTMLInputElement>document.createElement('input');
    mailSignUp.className = 'mail-sign-up';
    mailSignUp.type = 'email';
    (lang === 'en') ? mailSignUp.placeholder = 'Email Address' : mailSignUp.placeholder = 'Ваша почта'
    mailSignUp.setAttribute('required', '');

    const phoneInput = <HTMLInputElement>document.createElement('input');
    phoneInput.className = 'phone';
    phoneInput.type = 'tel';
    (lang === 'en') ? phoneInput.placeholder = 'Contact' : phoneInput.placeholder = 'Ваш телефон';
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('required', '');



    const passwordInput = <HTMLInputElement>document.createElement('input');
    passwordInput.className = 'password-input-first';
    passwordInput.type = 'password';
    (lang === 'en') ? passwordInput.placeholder = 'Create Password' : passwordInput.placeholder = 'Ввести пароль';
    passwordInput.setAttribute('required', '');


    const passwordInputConfim = <HTMLInputElement>document.createElement('input');
    passwordInputConfim.className = 'password-input-second';
    passwordInputConfim.type = 'password';
    (lang === 'en') ? passwordInputConfim.placeholder = 'Confirm Password' : passwordInputConfim.placeholder = 'Подтвердить пароль';
    passwordInputConfim.setAttribute('required', '');

    const submitSignUp = <HTMLInputElement>document.createElement('input');
    submitSignUp.className = 'button-sign-up';
    submitSignUp.type = 'submit';
    (lang === 'en') ? submitSignUp.value = 'Sign Up' : submitSignUp.value = 'Регистрация';


    submitSignUp.addEventListener('click', (event) => {
      event.preventDefault();
      const name = nameInpit.value;
      const email = mailSignUp.value;
      const phonenumber = phoneInput.value;
      const password = passwordInput.value;
      const retypedPassword = passwordInputConfim.value;

      if (password !== retypedPassword) {
        (lang === 'en') ? alert('Wrong password, please check both passwords.') :
          alert('Неверный пароль, сверьте оба пароля.');
        return;
      }

      userRegister(name, email, phonenumber, password); // POST request

    })


    const linktoSignUp = <HTMLElement>document.createElement('a');
    (lang === 'en') ? linktoSignUp.textContent = 'Sign Up' : linktoSignUp.textContent = 'Регистрация';

    const signInText = <HTMLElement>document.createElement('p');
    signInText.className = 'signin';
    (lang === 'en') ? signInText.textContent = "Do you have an account ?" :
      signInText.textContent = "У Вас уже есть аккаунт?"

    const link = document.createElement('a');


    link.append(submitSignUp);

    const linktoSignSin = <HTMLElement>document.createElement('a');
    (lang === 'en') ? linktoSignSin.textContent = 'Sign In' : linktoSignSin.textContent = 'Вход'
    linktoSignSin.className = 'sign-up-link';
    linktoSignSin.addEventListener('click', () => {

      const element = <HTMLElement>document.querySelector('.container');
      element.classList.toggle('active');
    })


    const signUpText = <HTMLElement>document.createElement('p');
    signUpText.className = 'signup';
    (lang === 'en') ? signUpText.textContent = "Already have an account ?" :
      signUpText.textContent = "У Вас уже есть аккаунт?";

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
