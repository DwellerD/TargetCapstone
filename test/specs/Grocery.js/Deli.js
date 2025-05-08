import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Deli Subcategory Secure Pages', () => {
  it('should verify all subcategories under Deli', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Deli', GroceryPage.deliSubcategoriesList);
  });

  it('should verify all subcategories under Artisan Cheese & Cured Meats', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInNestedGroup(
      'Deli',
      'Artisan Cheese & Cured Meats',
      GroceryPage.artisanSubcategoriesList
    );
  });
});
