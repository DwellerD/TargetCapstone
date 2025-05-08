import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Beverages Subcategory Secure Pages', () => {
  it('should verify all subcategories under Beverages', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Beverages', GroceryPage.beveragesSubcategoriesList);
  });

  it('should verify all subcategories under Coffee', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Coffee', GroceryPage.coffeeSubcategoriesList);
  });

  it('should verify all subcategories under Wine', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Wine', GroceryPage.wineSubcategoriesList);
  });

  it('should verify all subcategories under Beer', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Beer', GroceryPage.beerSubcategoriesList);
  });

  it('should verify all subcategories under Liquor', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Liquor', GroceryPage.liquorSubcategoriesList);
  });
});
