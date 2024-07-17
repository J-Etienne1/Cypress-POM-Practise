export default class AdminPage{
    editEmployee(){
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    }

    fillEmployeeDetails( userName) {

        cy.get(':nth-child(2) > .oxd-input').type(userName)

    }

    save(){
        cy.get('.oxd-button--secondary').click();
    }

}
