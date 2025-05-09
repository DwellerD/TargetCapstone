//
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Candy Subcategories', () => {
  it('should navigate to and validate all Candy subcategory pages', async () => {
    const path = ['Grocery', 'Candy'];
    const list = GroceryPage.candySubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
