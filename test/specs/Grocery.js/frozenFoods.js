import TargetPage from '../../pageobjects/targetPage.js';
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('Frozen Foods Subcategory Secure Pages', () => {
  it('should verify all subcategories under Frozen Foods', async () => {
    await TargetPage.open();
    await SecurePage.verifyAllSubcategoriesInGroup('Frozen Foods', GroceryPage.frozenSectionsList);
  });

  it('should verify all subcategories under Frozen Meat, Poultry & Seafood', async () => {
    for (const item of GroceryPage.frozenMeatPoultrySeafoodList) {
      await SecurePage.clickAndVerifyFrozenMeatSubcategory(item);
    }
  });
});
