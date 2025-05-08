import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Alcohol Subcategory Secure Pages', () => {
  it('should verify all subcategories under Wine', async () => {
    await SecurePage.verifyAlcoholSubcategories('Wine', GroceryPage.wineSubcategoriesList);
  });

  it('should verify all subcategories under Beer', async () => {
    await SecurePage.verifyAlcoholSubcategories('Beer', GroceryPage.beerSubcategoriesList);
  });

  it('should verify all subcategories under Liquor', async () => {
    await SecurePage.verifyAlcoholSubcategories('Liquor', GroceryPage.liquorSubcategoriesList);
  });
});
