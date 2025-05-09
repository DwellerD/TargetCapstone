// npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/Deli.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Deli Subcategories', () => {
  it('should navigate to and validate all Deli subcategory pages', async () => {
    const path = ['Grocery', 'Deli'];
    const list = GroceryPage.deliSubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });

  it('should navigate to and validate all Artisan Cheese & Meat subcategory pages', async () => {
    const path = ['Grocery', 'Deli'];
    const nested = 'Artisan Cheese & Cured Meats';
    const list = GroceryPage.artisanSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });
});
