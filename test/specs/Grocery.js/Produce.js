import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Produce Subcategory Secure Pages', () => {
  it('should verify all subcategories under Produce', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Produce', GroceryPage.produceSubcategoriesList);
  });
});
