import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Dairy Subcategory Secure Pages', () => {
  it('should verify all subcategories under Dairy', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Dairy', GroceryPage.dairySubcategoriesList);
  });
});
