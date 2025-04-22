import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const deliTests = [
  { name: 'Prepared Salads & Sandwiches', click: () => GroceryPage.preparedSaladsSandwiches, secure: () => SecurePage.preparedSaladsSandwiches },
  { name: 'Fresh Dips, Salsas & Hummus', click: () => GroceryPage.freshDipsSalsasHummus, secure: () => SecurePage.freshDipsSalsasHummus },
  { name: 'Artisan Cheese & Meats', click: () => GroceryPage.artisanCheeseMeats, secure: () => SecurePage.artisanCheeseMeats },
  { name: 'Prepared Meals & Sides', click: () => GroceryPage.preparedMealsSides, secure: () => SecurePage.preparedMealsSides },
  { name: 'Fresh Soups', click: () => GroceryPage.freshSoups, secure: () => SecurePage.freshSoups },
  { name: 'Party Trays', click: () => GroceryPage.partyTrays, secure: () => SecurePage.partyTrays },
];

describe('Deli Subcategory Flow Test', () => {
  deliTests.forEach(({ name, click, secure }) => {
    it(`should verify Deli subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.deli.click();
      await click().click();
      await secure().waitForDisplayed({ timeout: 10000 });
    });
  });
});
