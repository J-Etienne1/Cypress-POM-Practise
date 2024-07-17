import LoginPage from "../../page-objects/LoginPage";
import DashboardPage from "../../page-objects/DashboardPage";
import AdminPage from "../../page-objects/AdminPage";

describe("OrangeHRM Login and create employee", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const adminPage = new AdminPage();

    it('should login and create a new employee record', () => {
        // Visit the login page amd login
        loginPage.visit();
        loginPage.fillUsername("Admin");
        loginPage.fillPassword("admin123");
        loginPage.submit();

        // Navigate to the Admin section
        dashboardPage.navigateToAdmin();

        // Edit an employee record
        adminPage.editEmployee();
        adminPage.fillEmployeeDetails("NCave");
        adminPage.save();
    });
})