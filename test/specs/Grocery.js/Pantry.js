import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Pantry Subcategory Secure Pages', () => {
  it('should verify all subcategories under Pantry', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Pantry', GroceryPage.pantryBaseList);
  });

  it('should verify all subcategories under Canned & Packaged Foods', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInNestedGroup('Pantry', 'Canned & Packaged Foods', GroceryPage.cannedSubcategoriesList);
  });

  it('should verify all subcategories under Spices & Seasonings', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInNestedGroup('Pantry', 'Spices & Seasonings', GroceryPage.spicesSubcategoriesList);
  });

  it('should verify all subcategories under Baking Staples', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInNestedGroup('Pantry', 'Baking Staples', GroceryPage.bakingSubcategoriesList);
  });
});
