import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const breakfastTests = [
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
      await browser.pause(1000);

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.breakfastCereal.waitForClickable({ timeout: 10000 });
      await GroceryPage.breakfastCereal.click();
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
