//npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/frozenFoods.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Frozen Foods Subcategories', () => {
  it('should navigate to and validate all Frozen Foods subcategory pages', async () => {
    const path = ['Grocery', 'Frozen Foods'];
    const list = GroceryPage.frozenSectionsList;
    await SecurePage.verifyAllSubcategories(path, list);
  });

  it('should navigate to and validate all Frozen Meat, Poultry & Seafood subcategory pages', async () => {
    const path = ['Grocery', 'Frozen Foods'];
    const nested = 'Frozen Meat, Poultry & Seafood';
    const list = GroceryPage.frozenMeatPoultrySeafoodList;
    await SecurePage.verifyNestedSubcategories(path, nested, list);
  });
});
