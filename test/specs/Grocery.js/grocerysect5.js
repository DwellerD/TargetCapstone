import GroceryPage from '../../pageobjects/GroceryPage.js';

describe('[Target] Candy, Gifts & Flowers', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it('should validate all Candy subcategory pages', async () => {
    await GroceryPage.validateGroup(['Candy'], GroceryPage.candySubcategoriesList);
  });

  it('should validate all Food Gifts → Wine subcategory pages', async () => {
    await GroceryPage.validateGroup(['Food Gifts', 'Wine'], GroceryPage.wineSubcategoriesList);
  });

  it('should validate Snack Packs & On the Go Snacks page', async () => {
    await GroceryPage.navigateAndValidate(['Snack Packs & On the Go Snacks']);
  });

  it('should validate Fresh Flowers & Plants page', async () => {
    await GroceryPage.navigateAndValidate(['Fresh Flowers & Plants']);
  });
});
