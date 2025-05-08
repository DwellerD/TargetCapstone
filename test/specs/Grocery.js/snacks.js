import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

const mainSnacks = GroceryPage.snackSubcategoriesList;
const snackVariety = GroceryPage.snackVarietySubcategoriesList;
const candy = GroceryPage.candySubcategoriesList;

describe('Snacks Subcategory Secure Pages', () => {
  it('should verify all Snacks subcategories', async () => {
    await SecurePage.verifyAllSubcategoriesInGroup('Snacks', mainSnacks);
  });

  it('should verify all Candy subcategories', async () => {
    await SecurePage.verifyAllSubcategoriesInNestedGroup('Snacks', 'Candy', candy);
  });

  it('should verify all Snack Variety Packs subcategories', async () => {
    await SecurePage.verifyAllSubcategoriesInNestedGroup('Snacks', 'Snack Variety Packs', snackVariety);
  });
});
