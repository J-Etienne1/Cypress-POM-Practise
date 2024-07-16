export default class DashboardPage{
    navigateToAdmin() {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    }
}