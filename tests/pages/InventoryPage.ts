import {Page, Locator} from '@playwright/test';

export class InventoryPage {

readonly page: Page;
readonly productsTitle: Locator;
readonly menuButton: Locator;
readonly logoutButton: Locator;
readonly loginHeader: Locator;

constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.loginHeader = page.getByText('Swag Labs');
}

async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
}
}