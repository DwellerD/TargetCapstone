import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Meat & Seafood Subcategory Secure Pages', () => {
  it('should verify all subcategories under Meat & Seafood', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Meat & Seafood', GroceryPage.meatSeafoodList);
  });
});
