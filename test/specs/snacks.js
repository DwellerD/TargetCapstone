import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const snackTests = [
  { name: 'Snack Variety Packs', click: () => GroceryPage.snackVarietyPacks, secure: () => SecurePage.snackVarietyPacks },
  { name: 'Chips', click: () => GroceryPage.chips, secure: () => SecurePage.chips },
  { name: 'Cookies', click: () => GroceryPage.cookies, secure: () => SecurePage.cookies },
  { name: 'Crackers', click: () => GroceryPage.crackers, secure: () => SecurePage.crackers },
  { name: 'Nuts', click: () => GroceryPage.nuts, secure: () => SecurePage.nuts },
  { name: 'Toaster Pastries', click: () => GroceryPage.toasterPastries, secure: () => SecurePage.toasterPastries },
  { name: 'Trail & Snack Mixes', click: () => GroceryPage.trailSnackMixes, secure: () => SecurePage.trailAndSnackMixes },
  { name: 'Pretzels', click: () => GroceryPage.pretzels, secure: () => SecurePage.pretzels },
  { name: 'Salsa & Dips', click: () => GroceryPage.salsaDips, secure: () => SecurePage.salsaAndDips },
  { name: 'Popcorn', click: () => GroceryPage.popcorn, secure: () => SecurePage.popcorn },
  { name: 'Dried Fruit & Raisins', click: () => GroceryPage.driedFruitRaisins, secure: () => SecurePage.driedFruitAndRaisins },
  { name: 'Jerky & Meat Sticks', click: () => GroceryPage.jerkyMeatSticks, secure: () => SecurePage.jerkyAndMeatSticks },
  { name: 'Snack Cakes', click: () => GroceryPage.snackCakes, secure: () => SecurePage.snackCakes },
  { name: 'Gelatin & Pudding', click: () => GroceryPage.gelatinPudding, secure: () => SecurePage.gelatinAndPudding },
];

const candySubcategories = [
  { name: 'Candy Variety Packs', click: () => GroceryPage.candyVarietyPacks, secure: () => SecurePage.candyVarietyPacks },
  { name: 'Premium Candy', click: () => GroceryPage.premiumCandy, secure: () => SecurePage.premiumCandy },
  { name: 'Chocolate Candy', click: () => GroceryPage.chocolateCandy, secure: () => SecurePage.chocolateCandy },
  { name: 'Gum & Mints', click: () => GroceryPage.gumMints, secure: () => SecurePage.gumMints },
  { name: 'Gummy & Chewy Candy', click: () => GroceryPage.gummyChewyCandy, secure: () => SecurePage.gummyChewyCandy },
  { name: 'Hard Candy', click: () => GroceryPage.hardCandy, secure: () => SecurePage.hardCandy },
];

describe('Snacks and Candy Combined Flow', () => {
  snackTests.forEach(({ name, click, secure }) => {
    it(`should verify Snacks category: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();

      await GroceryPage.snacks.waitForClickable({ timeout: 10000 });
      await GroceryPage.snacks.click();

      const snackButton = click();
      await snackButton.waitForClickable({ timeout: 10000 });
      await snackButton.click();

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });

  candySubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Candy subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();

      await GroceryPage.snacks.waitForClickable({ timeout: 10000 });
      await GroceryPage.snacks.click();

      await GroceryPage.candy.waitForClickable({ timeout: 10000 });
      await GroceryPage.candy.click();

      const candyButton = click();
      await candyButton.waitForClickable({ timeout: 10000 });
      await candyButton.click();

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });
});
