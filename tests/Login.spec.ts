import { test, expect } from './fixtures/pages.fixture';
import { users } from './test-data/users';

test('login test', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(inventoryPage.productsTitle).toBeVisible();
});

test('Invalid Login test', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(loginPage.errorMessage).toHaveText(
        'Epic sadface: Username and password do not match any user in this service'
    );
});

test('Login & then Logout test', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(inventoryPage.productsTitle).toBeVisible();
    await inventoryPage.logout();
    await expect(inventoryPage.loginHeader).toBeVisible();
});

test('Locked Out User Login test', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(loginPage.errorMessage).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.'
    );
});
