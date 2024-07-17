import { dashboardSelectors } from '../selectors/dashboardSelectors';

export default class DashboardSection {
    navigateToAdmin() {
        cy.get(dashboardSelectors.adminMenu).click();
    }
}
