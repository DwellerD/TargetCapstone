//npx wdio run wdio.conf.js --spec ./test/specs/Grocery.js/Produce.js
import GroceryPage from '../../pageobjects/GroceryPage.js';
import SecurePage from '../../pageobjects/secure.page.js';

describe('[Target] Produce Subcategories', () => {
  it('should navigate to and validate all Produce subcategory pages', async () => {
    const path = ['Grocery', 'Produce'];
    const list = GroceryPage.produceSubcategoriesList;
    await SecurePage.verifyAllSubcategories(path, list);
  });
});
