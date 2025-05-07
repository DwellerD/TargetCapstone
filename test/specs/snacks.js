import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const snackTests = [
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

const snackVarietySubcategories = [
  { name: 'Chip Multipacks', click: () => GroceryPage.chipMultipacks, secure: () => SecurePage.chipMultipacks },
  { name: 'Cookie Multipacks', click: () => GroceryPage.cookieMultipacks, secure: () => SecurePage.cookieMultipacks },
  { name: 'Cracker Multipacks', click: () => GroceryPage.crackerMultipacks, secure: () => SecurePage.crackerMultipacks },
  { name: 'Popcorn & Pretzel Multipacks', click: () => GroceryPage.popcornPretzelMultipacks, secure: () => SecurePage.popcornPretzelMultipacks },
  { name: 'Granola & Cereal Bars', click: () => GroceryPage.granolaCerealBars, secure: () => SecurePage.granolaCerealBars },
  { name: 'Fruit Snacks', click: () => GroceryPage.fruitSnacks, secure: () => SecurePage.fruitSnacks },
  { name: 'Applesauce & Fruit Cups', click: () => GroceryPage.appleSauceFruitCups, secure: () => SecurePage.appleSauceFruitCups },
];

const candySubcategories = [
  { name: 'Candy Variety Packs', click: () => GroceryPage.candyVarietyPacks, secure: () => SecurePage.candyVarietyPacks },
  { name: 'Premium Candy', click: () => GroceryPage.premiumCandy, secure: () => SecurePage.premiumCandy },
  { name: 'Chocolate Candy', click: () => GroceryPage.chocolateCandy, secure: () => SecurePage.chocolateCandy },
  { name: 'Gum & Mints', click: () => GroceryPage.gumMints, secure: () => SecurePage.gumMints },
  { name: 'Gummy & Chewy Candy', click: () => GroceryPage.gummyChewyCandy, secure: () => SecurePage.gummyChewyCandy },
  { name: 'Hard Candy', click: () => GroceryPage.hardCandy, secure: () => SecurePage.hardCandy },
];

describe('Snacks Full Flow: Snacks + Snack Variety + Candy', () => {
  snackTests.forEach(({ name, click, secure }) => {
    it(`should verify Snacks subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.snacks.click();
      await browser.pause(1000);

      const snackButton = click();
      await snackButton.waitForClickable({ timeout: 10000 });
      await snackButton.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });

  snackVarietySubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Snack Variety sub-subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.snacks.click();
      await browser.pause(1000);

      await GroceryPage.snackVarietyPacks.click();
      await browser.pause(1000);

      const subSnack = click();
      await subSnack.waitForClickable({ timeout: 10000 });
      await subSnack.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });

  candySubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Candy subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.snacks.click();
      await browser.pause(1000);

      await GroceryPage.candy.click();
      await browser.pause(1000);

      const candyButton = click();
      await candyButton.waitForClickable({ timeout: 10000 });
      await candyButton.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });
});
