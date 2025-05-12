import GroceryPage from '../../pageobjects/GroceryPage.js';

describe('[Target] Bakery & Breakfast', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it('should validate all Bakery & Bread subcategory pages', async () => {
    await GroceryPage.validateGroup(['Bakery & Bread'], GroceryPage.bakerySubcategoriesList);
  });

  it('should validate all Breakfast & Cereal subcategory pages', async () => {
    await GroceryPage.validateGroup(['Breakfast & Cereal'], GroceryPage.breakfastSubcategoriesList);
  });

  it('should validate all Baking Staples subcategory pages', async () => {
    await GroceryPage.validateGroup(['Pantry', 'Baking Staples'], GroceryPage.bakingStaplesList);
  });

  it('should validate all Canned & Packaged Foods subcategory pages', async () => {
    await GroceryPage.validateGroup(['Pantry', 'Canned & Packaged Foods'], GroceryPage.cannedSubcategoriesList);
  });
});
