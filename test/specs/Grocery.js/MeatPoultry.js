//npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/MeatPoultry.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Meat & Seafood Subcategories', () => {
  it('should navigate to and validate all Meat & Seafood subcategory pages', async () => {
    const path = ['Grocery', 'Meat & Seafood'];
    const list = GroceryPage.meatSeafoodList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
