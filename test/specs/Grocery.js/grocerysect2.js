import GroceryPage from '../../pageobjects/GroceryPage.js';

describe('[Target] Beverages, Coffee, and Liquor', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it('should validate all Beverages subcategory pages', async () => {
    await GroceryPage.validateGroup(['Beverages'], GroceryPage.beverageSubcategoriesList);
  });

  it('should validate all Coffee subcategory pages', async () => {
    await GroceryPage.validateGroup(['Beverages', 'Coffee'], GroceryPage.coffeeSubcategoriesList);
  });

  it('should validate all Wine subcategory pages', async () => {
    await GroceryPage.validateGroup(['Beverages', 'Wine, Beer & Liquor', 'Wine'], GroceryPage.wineSubcategoriesList);
  });

  it('should validate all Beer subcategory pages', async () => {
    await GroceryPage.validateGroup(['Beverages', 'Wine, Beer & Liquor', 'Beer'], GroceryPage.beerSubcategoriesList);
  });

  it('should validate all Liquor subcategory pages', async () => {
    await GroceryPage.validateGroup(['Beverages', 'Wine, Beer & Liquor', 'Liquor'], GroceryPage.liquorSubcategoriesList);
  });
});
