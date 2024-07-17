
import LoginFormSection from '../sections/loginFormSection';

export default class LoginPage {
    constructor() {
        this.loginForm = new LoginFormSection();
    }

    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
}

