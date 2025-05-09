//npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/Pantry.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Pantry Subcategories', () => {
  it('should navigate to and validate all base Pantry subcategory pages', async () => {
    const path = ['Grocery', 'Pantry'];
    const list = GroceryPage.pantryBaseList;
    await SecurePage.verifyAllSubcategories(path, list);
  });

  it('should navigate to and validate all Canned Goods subcategory pages', async () => {
    const path = ['Grocery', 'Pantry'];
    const nested = 'Canned & Packaged Foods';
    const list = GroceryPage.cannedSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });

  it('should navigate to and validate all Spices & Seasonings subcategory pages', async () => {
    const path = ['Grocery', 'Pantry'];
    const nested = 'Spices & Seasonings';
    const list = GroceryPage.spicesSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });

  it('should navigate to and validate all Baking Essentials subcategory pages', async () => {
    const path = ['Grocery', 'Pantry'];
    const nested = 'Baking Staples';
    const list = GroceryPage.bakingSubcategoriesList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });
});
