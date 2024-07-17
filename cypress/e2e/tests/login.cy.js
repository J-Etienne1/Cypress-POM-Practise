import LoginPage from '../../page-objects/LoginPage';
import DashboardPage from '../../page-objects/DashboardPage';
import AdminPage from '../../page-objects/AdminPage';

describe("OrangeHRM Login and edit employee", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const adminPage = new AdminPage();

    it('should login and edit an employee record', () => {
        // Visit the login page and login
        loginPage.visit();
        loginPage.loginForm.fillUsername("Admin");
        loginPage.loginForm.fillPassword("admin123");
        loginPage.loginForm.submit();

        // Navigate to the Admin section
        dashboardPage.dashboardSection.navigateToAdmin();

        // Edit an employee record
        adminPage.adminSection.editEmployee();
        adminPage.adminSection.fillEmployeeDetails("NCave");
        adminPage.adminSection.save();
    });
});
