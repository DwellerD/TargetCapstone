import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

const meatSubcategories = [
  { name: 'Beef', click: () => GroceryPage.beef, secure: () => SecurePage.beef },
  { name: 'Chicken', click: () => GroceryPage.chicken, secure: () => SecurePage.chicken },
  { name: 'Fish & Seafood', click: () => GroceryPage.fishSeafood, secure: () => SecurePage.fishAndSeafood },
  { name: 'Pork', click: () => GroceryPage.pork, secure: () => SecurePage.pork },
  { name: 'Turkey', click: () => GroceryPage.turkey, secure: () => SecurePage.turkey },
  { name: 'Bacon', click: () => GroceryPage.bacon, secure: () => SecurePage.bacon },
  { name: 'Sausage', click: () => GroceryPage.sausage, secure: () => SecurePage.sausage },
  { name: 'Hot Dogs', click: () => GroceryPage.hotDogs, secure: () => SecurePage.hotDogs },
  { name: 'Sliced Deli Meat & Cheese', click: () => GroceryPage.slicedDeliMeatCheese, secure: () => SecurePage.slicedDeliMeatAndCheese },
  { name: 'Meatless Alternatives', click: () => GroceryPage.meatlessAlternatives, secure: () => SecurePage.meatlessAlternatives },
];

describe('Meat & Seafood Category Secure Page Test', () => {
  meatSubcategories.forEach(({ name, click, secure }) => {
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

      await GroceryPage.meatSeafood.waitForClickable({ timeout: 10000 });
      await GroceryPage.meatSeafood.click();
      await browser.pause(1000);

      const button = click();
      await button.waitForClickable({ timeout: 10000 });
      await button.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });
});
