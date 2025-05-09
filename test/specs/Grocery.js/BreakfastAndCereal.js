import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Breakfast & Cereal Subcategories', () => {
  it('should navigate to and validate all Breakfast & Cereal subcategory pages', async () => {
    const path = ['Grocery', 'Breakfast & Cereal'];
    const list = GroceryPage.breakfastSubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
