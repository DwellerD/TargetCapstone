import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const breakfastTests = [
  { name: 'Breakfast & Cereal', click: () => GroceryPage.breakfastCereal, secure: () => SecurePage.breakfastCereal },
  { name: 'Organic Breakfast Cereal', click: () => GroceryPage.organicBreakfastCereal, secure: () => SecurePage.organicBreakfastCereal },
  { name: 'Cereal & Granola', click: () => GroceryPage.cerealGranola, secure: () => SecurePage.cerealGranola },
  { name: 'Oatmeal', click: () => GroceryPage.oatmeal, secure: () => SecurePage.oatmeal },
  { name: 'Pancake Mixes, Waffle Mixes & Syrup', click: () => GroceryPage.pancakeMixesSyrup, secure: () => SecurePage.pancakeMixesSyrup },
];

describe('Breakfast & Cereal Section Test', () => {
  breakfastTests.forEach(({ name, click, secure }) => {
    it(`should verify: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.breakfastCereal.click();
      await click().click();
      await secure().waitForDisplayed({ timeout: 10000 });
    });
  });
});
