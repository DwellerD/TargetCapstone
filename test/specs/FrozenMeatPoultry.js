import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const frozenSubcategories = [
  {
    name: 'Frozen Chicken',
    click: () => GroceryPage.frozenChicken.click(),
    secure: () => SecurePage.frozenChicken,
  },
  {
    name: 'Frozen Beef',
    click: () => GroceryPage.frozenBeef.click(),
    secure: () => SecurePage.frozenBeef,
  },
  {
    name: 'Frozen Fish & Seafood',
    click: () => GroceryPage.frozenFishAndSeafood.click(),
    secure: () => SecurePage.frozenFishAndSeafood,
  },
  {
    name: 'Frozen Turkey',
    click: () => GroceryPage.frozenTurkey.click(),
    secure: () => SecurePage.frozenTurkey,
  },
  {
    name: 'Frozen Meatless Alternatives',
    click: () => GroceryPage.frozenMeatlessAlternatives.click(),
    secure: () => SecurePage.frozenMeatlessAlternatives,
  },
];

describe('Frozen Meat, Poultry & Seafood Subcategories Secure Pages', () => {
  frozenSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.frozenFoods.click();
      await GroceryPage.frozenMeatPoultrySeafood.click();
      await click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });
});
