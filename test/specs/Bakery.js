import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const bakeryBreadSubcategories = [
  { name: 'Breads', click: () => GroceryPage.breads, secure: () => SecurePage.breads },
  { name: 'Donuts & Pastries', click: () => GroceryPage.donutsPastries, secure: () => SecurePage.donutsPastries },
  { name: 'Cakes, Cookies & Pies', click: () => GroceryPage.cakesCookiesPies, secure: () => SecurePage.cakesCookiesPies },
  { name: 'Bagels & Muffins', click: () => GroceryPage.bagelsMuffins, secure: () => SecurePage.bagelsMuffins },
  { name: 'Tortillas, Pitas & Wraps', click: () => GroceryPage.tortillasWraps, secure: () => SecurePage.tortillasWraps },
  { name: 'Refrigerated Doughs', click: () => GroceryPage.refrigeratedDoughs, secure: () => SecurePage.refrigeratedDoughs },
  { name: 'Rolls & Buns', click: () => GroceryPage.rollsBuns, secure: () => SecurePage.rollsBuns },
  { name: 'Pizza Crusts', click: () => GroceryPage.pizzaCrusts, secure: () => SecurePage.pizzaCrusts },
];

describe('Bakery & Bread Subcategory Secure Pages', () => {
  bakeryBreadSubcategories.forEach(({ name, click, secure }) => {
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

      await GroceryPage.bakeryBread.waitForClickable({ timeout: 10000 });
      await GroceryPage.bakeryBread.click();
      await browser.pause(1000);

      const element = click();
      await element.waitForClickable({ timeout: 10000 });
      await element.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
      await browser.pause(500);
    });
  });
});
