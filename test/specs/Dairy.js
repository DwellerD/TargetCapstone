import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const dairyTests = GroceryPage.dairySubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

describe('Dairy Subcategory Secure Pages', () => {
  dairyTests.forEach(({ name, secureTitle }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      // await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText('Grocery').click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText('Dairy').click();
      // await browser.pause(1000);

      await GroceryPage.getItemByText(name).click();
      // await browser.pause(1000);

      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
      // await browser.pause(500);
    });
  });
});
