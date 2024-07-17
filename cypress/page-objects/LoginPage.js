
export default class LoginPage{
    visit(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    fillUsername(username){
        cy.get("input[name='username']").type(username);
    }

    fillPassword(password){
        cy.get("input[name='password']").type(password);
    }

    submit(){
        cy.get("button[type='submit']").click();
    }
}
