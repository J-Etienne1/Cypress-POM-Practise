export default class DashboardPage{
    navigateToAdmin() {
        cy.get("#menu_admin_viewAdminModule").click()
    }
}