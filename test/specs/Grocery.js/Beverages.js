import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Beverages Subcategories', () => {
  it('should validate all top-level Beverages subcategory pages', async () => {
    const path = ['Grocery', 'Beverages'];
    const list = GroceryPage.beveragesSubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });

  it('should validate Wine subcategories', async () => {
    const path = ['Grocery', 'Beverages', 'Wine, Beer & Liquor'];
    const wine = GroceryPage.wineSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, 'Wine', wine);
  });

  it('should validate Beer subcategories', async () => {
    const path = ['Grocery', 'Beverages', 'Wine, Beer & Liquor'];
    const beer = GroceryPage.beerSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, 'Beer', beer);
  });

  it('should validate Liquor subcategories', async () => {
    const path = ['Grocery', 'Beverages', 'Wine, Beer & Liquor'];
    const liquor = GroceryPage.liquorSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, 'Liquor', liquor);
  });
});
