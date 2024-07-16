export default class AdminPage{
    clickAdd(){
        cy.get("input[id='btnAdd']").click();
    }


    fillEmployeeDetails(firstName, lastName, userName, password) {
        cy.get("input[id='firstName']").type(firstName);
        cy.get("input[id='lastName']").type(lastName);
        cy.get("input[id='userName']").type(userName);
        cy.get("input[id='password']").type(password);
        cy.get("input[id='re_password']").type(password);

    }

    save(){
        cy.get("input[id='btnsave']").click();
    }

}