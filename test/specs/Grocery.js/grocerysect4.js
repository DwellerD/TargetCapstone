import GroceryPage from '../../pageobjects/GroceryPage.js';

describe('[Target] Meat, Produce & Deli', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it('should validate all Meat & Seafood subcategory pages', async () => {
    await GroceryPage.validateGroup(['Meat & Seafood'], GroceryPage.meatSeafoodList);
  });

  it('should validate all Produce subcategory pages', async () => {
    await GroceryPage.validateGroup(['Produce'], GroceryPage.produceSubcategoriesList);
  });

  it('should validate all Deli subcategory pages', async () => {
    await GroceryPage.validateGroup(['Deli'], GroceryPage.deliSubcategoriesList);
  });

  it('should validate all Dairy subcategory pages', async () => {
    await GroceryPage.validateGroup(['Dairy'], GroceryPage.dairySubcategoriesList);
  });
});
