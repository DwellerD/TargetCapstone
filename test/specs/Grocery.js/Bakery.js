import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Bakery Subcategories', () => {
  it('should navigate to and validate all Bakery subcategory pages', async () => {
    const path = ['Grocery', 'Bakery & Bread'];
    const list = GroceryPage.bakerySubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
