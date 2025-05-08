import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Bakery Subcategory Secure Pages', () => {
  it('should verify all subcategories under Bakery & Bread', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Bakery & Bread', GroceryPage.bakerySubcategoriesList);
  });
});
