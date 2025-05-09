import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Dairy Subcategories', () => {
  it('should navigate to and validate all Dairy subcategory pages', async () => {
    const path = ['Grocery', 'Dairy'];
    const list = GroceryPage.dairySubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
