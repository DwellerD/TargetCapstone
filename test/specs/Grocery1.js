import GroceryPage from '../pageobjects/GroceryPage.js';

describe('[Target] Grocery Section - Full Validation', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  // Bakery & Breakfast
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

  // Beverages, Coffee & Liquor
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

  // Frozen, Snacks & Pantry
  it('should validate all Frozen Foods subcategory pages', async () => {
    await GroceryPage.validateGroup(['Frozen Foods'], GroceryPage.frozenSectionsList);
  });

  it('should validate all Frozen Meat, Poultry & Seafood subcategory pages', async () => {
    await GroceryPage.validateGroup(['Frozen Foods', 'Frozen Meat, Poultry & Seafood'], GroceryPage.frozenMeatPoultrySeafoodList);
  });

  it('should validate all Snacks subcategory pages', async () => {
    await GroceryPage.validateGroup(['Snacks'], GroceryPage.snackSubcategoriesList);
  });

  it('should validate all nested Snack Variety Packs subcategory pages', async () => {
    await GroceryPage.validateGroup(['Snacks', 'Snack Variety Packs'], GroceryPage.snackVarietyNestedSubcategoriesList);
  });

  it('should validate all Pantry subcategory pages', async () => {
    await GroceryPage.validateGroup(['Pantry'], GroceryPage.pantryBaseList);
  });

  it('should validate all Spices & Seasonings subcategory pages', async () => {
    await GroceryPage.validateGroup(['Pantry', 'Spices & Seasonings'], GroceryPage.spicesSubcategoriesList);
  });

  // Meat, Produce & Deli
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

  // Candy, Gifts & Flowers
  it('should validate all Candy subcategory pages', async () => {
    await GroceryPage.validateGroup(['Candy'], GroceryPage.candySubcategoriesList);
  });

  it('should validate Food Gifts → Wine subcategory pages', async () => {
    await GroceryPage.validateGroup(['Food Gifts', 'Wine'], GroceryPage.wineSubcategoriesList);
  });

  it('should validate Snack Packs & On the Go Snacks page', async () => {
    await GroceryPage.navigateAndValidate(['Snack Packs & On the Go Snacks']);
  });

  it('should validate Fresh Flowers & Plants page', async () => {
    await GroceryPage.navigateAndValidate(['Fresh Flowers & Plants']);
  });
});
