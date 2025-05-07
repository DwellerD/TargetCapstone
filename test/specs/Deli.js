import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const deliSubcategories = GroceryPage.deliSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const artisanSubcategories = GroceryPage.artisanSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

describe('Deli Subcategory Secure Pages', () => {
  deliSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      // await browser.pause(1000);

      await GroceryPage.categoriesButton.click();
      // await browser.pause(1000);

      await GroceryPage.groceryMain.click();
      // await browser.pause(1000);

      await GroceryPage.deli.click();
      // await browser.pause(1000);

      // Check if it's Artisan Cheese & Cured Meats, handle artisan subcategories separately
      if (name === 'Artisan Cheese & Cured Meats') {
        await GroceryPage.artisanCheeseMeats.click();
        // await browser.pause(1000);

        // Handle artisan subcategories
        artisanSubcategories.forEach(async ({ name, secureTitle }) => {
          const subcategoryElement = await GroceryPage.getItemByText(name);
          await subcategoryElement.waitForClickable({ timeout: 10000 });
          await subcategoryElement.click();
          // await browser.pause(1000);

          const securePageTitle = await SecurePage.getPageByTitle(secureTitle);
          await securePageTitle.waitForDisplayed({ timeout: 15000 });
          // await browser.pause(500);
        });
      } else {
        // For other deli subcategories
        const subcategoryElement = await GroceryPage.getItemByText(name);
        await subcategoryElement.waitForClickable({ timeout: 10000 });
        await subcategoryElement.click();
        // await browser.pause(1000);

        const securePageTitle = await SecurePage.getPageByTitle(secureTitle);
        await securePageTitle.waitForDisplayed({ timeout: 15000 });
        // await browser.pause(500);
      }
    });
  });
});
