import { adminSelectors } from '../selectors/adminSelectors';

export default class AdminSection {
    editEmployee() {
        cy.get(adminSelectors.editButton).click();
    }

    fillEmployeeDetails(userName) {
        cy.get(adminSelectors.usernameInput).type(userName);
    }

    save() {
        cy.get(adminSelectors.saveButton).click();
    }
}
