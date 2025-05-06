import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const wineSubcategories = [
  { name: 'Top Rated Wines Under $15', click: () => GroceryPage.wineUnder15, secure: () => SecurePage.topRatedWinesUnder15 },
  { name: 'Perfect Pairings', click: () => GroceryPage.winePairings, secure: () => SecurePage.perfectMealPairings },
  { name: 'White Wine', click: () => GroceryPage.whiteWine, secure: () => SecurePage.whiteWine },
  { name: 'Red Wine', click: () => GroceryPage.redWine, secure: () => SecurePage.redWine },
  { name: 'Rose Wine', click: () => GroceryPage.roseWine, secure: () => SecurePage.roseWine },
  { name: 'Champagne & Sparkling Wine', click: () => GroceryPage.sparklingWine, secure: () => SecurePage.sparklingWine },
  { name: 'Target Selects', click: () => GroceryPage.wineTargetSelects, secure: () => SecurePage.targetSelects },
];

describe('Wine Subcategory Secure Pages', () => {
  wineSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Wine subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.beverages.waitForClickable({ timeout: 10000 });
      await GroceryPage.beverages.click();
      await browser.pause(1000);

      await GroceryPage.wineBeerLiquor.scrollIntoView();
      await browser.pause(500);
      await GroceryPage.wineBeerLiquor.waitForClickable({ timeout: 10000 });
      await GroceryPage.wineBeerLiquor.click();
      await browser.pause(1000);

      await GroceryPage.wine.waitForClickable({ timeout: 10000 });
      await GroceryPage.wine.click();
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
