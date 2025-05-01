import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const frozenSubcategories = [
  {
    name: 'Frozen Chicken',
    click: () => GroceryPage.frozenChicken,
    secure: () => SecurePage.frozenChicken,
  },
  {
    name: 'Frozen Beef',
    click: () => GroceryPage.frozenBeef,
    secure: () => SecurePage.frozenBeef,
  },
  {
    name: 'Frozen Fish & Seafood',
    click: () => GroceryPage.frozenFishAndSeafood,
    secure: () => SecurePage.frozenFishAndSeafood,
  },
  {
    name: 'Frozen Turkey',
    click: () => GroceryPage.frozenTurkey,
    secure: () => SecurePage.frozenTurkey,
  },
  {
    name: 'Frozen Meatless Alternatives',
    click: () => GroceryPage.frozenMeatlessAlternatives,
    secure: () => SecurePage.frozenMeatlessAlternatives,
  },
];

describe('Frozen Meat, Poultry & Seafood Subcategories Secure Pages', () => {
  frozenSubcategories.forEach(({ name, click, secure }) => {
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

      await GroceryPage.frozenFoods.scrollIntoView();
      await GroceryPage.frozenFoods.waitForClickable({ timeout: 10000 });
      await GroceryPage.frozenFoods.click();
      await browser.pause(1000);

      await GroceryPage.frozenMeatPoultrySeafood.scrollIntoView();
      await GroceryPage.frozenMeatPoultrySeafood.waitForClickable({ timeout: 10000 });
      await GroceryPage.frozenMeatPoultrySeafood.click();
      await browser.pause(1000);

      const item = click();
      await item.scrollIntoView();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);

      const secureTitle = secure();
      await secureTitle.waitForDisplayed({ timeout: 15000 });
    });
  });
});
