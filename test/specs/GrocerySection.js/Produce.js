import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

const produceSubcategories = [
  { name: 'Berries', click: () => GroceryPage.berries, secure: () => SecurePage.berries },
  { name: 'Citrus', click: () => GroceryPage.citrus, secure: () => SecurePage.citrus },
  { name: 'Organic Produce', click: () => GroceryPage.organicProduce, secure: () => SecurePage.organicProduce },
  { name: 'Fresh Fruit', click: () => GroceryPage.freshFruit, secure: () => SecurePage.freshFruit },
  { name: 'Fresh Vegetables', click: () => GroceryPage.freshVegetables, secure: () => SecurePage.freshVegetables },
  { name: 'Salad Mixes', click: () => GroceryPage.saladMixes, secure: () => SecurePage.saladMixes },
  { name: 'Fresh Juices', click: () => GroceryPage.freshJuices, secure: () => SecurePage.freshJuices },
  { name: 'Fresh Dressings & Dips', click: () => GroceryPage.freshDressingsDips, secure: () => SecurePage.freshDressingsAndDips },
  { name: 'Fresh Flowers & Plants', click: () => GroceryPage.freshFlowersPlants, secure: () => SecurePage.freshFlowersAndPlants },
];

describe('Produce Subcategory Secure Pages', () => {
  produceSubcategories.forEach(({ name, click, secure }) => {
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

      await GroceryPage.produce.waitForClickable({ timeout: 10000 });
      await GroceryPage.produce.click();
      await browser.pause(1000);

      const element = click();
      await element.waitForClickable({ timeout: 10000 });
      await element.click();
      await browser.pause(1000);

      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
    });
  });
});
