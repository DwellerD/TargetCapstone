import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const frozenSubcategories = GroceryPage.frozenMeatPoultrySeafoodList.map(name => ({
  name,
  secureTitle: name
}));

describe('Frozen Meat, Poultry & Seafood Subcategories Secure Pages', () => {
  frozenSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      // await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText('Grocery').click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText('Frozen Foods').click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText('Frozen Meat, Poultry & Seafood').click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText(name).click();
      // await browser.pause(1000);

      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
      // await browser.pause(500);
    });
  });
});
