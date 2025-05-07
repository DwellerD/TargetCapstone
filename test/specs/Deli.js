import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const deliTests = [
  { name: 'Prepared Salads & Sandwiches', click: () => GroceryPage.preparedSaladsSandwiches, secure: () => SecurePage.preparedSaladsSandwiches },
  { name: 'Fresh Dips, Salsas & Hummus', click: () => GroceryPage.freshDipsSalsasHummus, secure: () => SecurePage.freshDipsSalsasHummus },
  { name: 'Prepared Meals & Sides', click: () => GroceryPage.preparedMealsSides, secure: () => SecurePage.preparedMealsSides },
  { name: 'Fresh Soups', click: () => GroceryPage.freshSoups, secure: () => SecurePage.freshSoups },
  { name: 'Party Trays', click: () => GroceryPage.partyTrays, secure: () => SecurePage.partyTrays },
];

const artisanSubmenu = [
  { name: 'Specialty Cheese', click: () => GroceryPage.specialtyCheese, secure: () => SecurePage.specialtyCheese },
  { name: 'Specialty Meat', click: () => GroceryPage.specialtyMeat, secure: () => SecurePage.specialtyMeat },
];

describe('Deli Subcategory Flow Test', () => {
  deliTests.forEach(({ name, click, secure }) => {
    it(`should verify Deli subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.deli.click();
      await browser.pause(1000);

      await click().click();
      await browser.pause(1000);

      await secure().waitForDisplayed({ timeout: 10000 });
    });
  });

  artisanSubmenu.forEach(({ name, click, secure }) => {
    it(`should verify Artisan submenu: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.deli.click();
      await browser.pause(1000);

      await GroceryPage.artisanCheeseMeats.click();
      await browser.pause(1000);

      await click().click();
      await browser.pause(1000);

      await secure().waitForDisplayed({ timeout: 10000 });
    });
  });
});
