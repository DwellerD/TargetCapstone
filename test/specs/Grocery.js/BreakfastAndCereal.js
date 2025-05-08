import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Breakfast & Cereal Subcategory Secure Pages', () => {
  it('should verify all subcategories under Breakfast & Cereal', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Breakfast & Cereal', GroceryPage.breakfastSubcategoriesList);
  });
});
