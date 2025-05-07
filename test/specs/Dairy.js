import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const dairyTests = [
  { name: 'Eggs', click: () => GroceryPage.eggs, secure: () => SecurePage.eggs },
  { name: 'Butter & Margarine', click: () => GroceryPage.butterMargarine, secure: () => SecurePage.butterMargarine },
  { name: 'Cottage Cheese', click: () => GroceryPage.cottageCheese, secure: () => SecurePage.cottageCheese },
  { name: 'Cream & Whipped Toppings', click: () => GroceryPage.creamWhippedToppings, secure: () => SecurePage.creamWhippedToppings },
  { name: 'Cream Cheese', click: () => GroceryPage.creamCheese, secure: () => SecurePage.creamCheese },
  { name: 'Sour Cream & Dips', click: () => GroceryPage.sourCreamDips, secure: () => SecurePage.sourCreamDips },
  { name: 'Coffee Creamers', click: () => GroceryPage.coffeeCreamers, secure: () => SecurePage.coffeeCreamers },
];

describe('Dairy Subcategory Secure Pages', () => {
  dairyTests.forEach(({ name, click, secure }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.dairy.waitForClickable({ timeout: 10000 });
      await GroceryPage.dairy.click();
      await browser.pause(1000);

      const item = click();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);

      const page = secure();
      await page.waitForDisplayed({ timeout: 10000 });
    });
  });
});
