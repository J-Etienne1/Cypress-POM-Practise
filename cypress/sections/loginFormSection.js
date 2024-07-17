import { loginSelectors } from '../selectors/loginSelectors';

export default class LoginFormSection {
    fillUsername(username) {
        cy.get(loginSelectors.usernameInput).type(username);
    }

    fillPassword(password) {
        cy.get(loginSelectors.passwordInput).type(password);
    }

    submit() {
        cy.get(loginSelectors.submitButton).click();
    }
}
