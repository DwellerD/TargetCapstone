//npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/snacks.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Snacks Subcategories', () => {
  it('should navigate to and validate all main Snacks subcategory pages', async () => {
    const path = ['Grocery', 'Snacks'];
    const list = GroceryPage.snackSubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });

  it('should navigate to and validate all Snack Variety Packs subcategory pages', async () => {
    const path = ['Grocery', 'Snacks'];
    const nested = 'Snack Variety Packs';
    const list = GroceryPage.snackVarietySubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });
});
