export default class AdminPage{
    clickAdd(){
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }


    fillEmployeeDetails(employeeName, userName, password) {
        // Type employee name
        cy.get('.oxd-autocomplete-text-input > input').type(employeeName);

        // Wait for the dropdown to appear and then select the employee name
        cy.get('.oxd-autocomplete-dropdown')
            .should('be.visible')
        cy.wait(3000);
        cy.contains('.oxd-autocomplete-dropdown',employeeName).click()



        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)

        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

    }

    selectUserRole(role) {
        // Click to open the dropdown
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        // Select the role from the dropdown
        cy.contains('.oxd-select-dropdown > *', role).click();
    }

    selectUserStatus(status) {
        // Click to open the dropdown
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        // Select the status from the dropdown
        cy.contains('.oxd-select-dropdown > *', status).click();
    }

    save(){
        cy.get('.oxd-button--secondary').click();
    }

}
