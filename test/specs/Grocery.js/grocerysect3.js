import GroceryPage from '../../pageobjects/GroceryPage.js';

describe('[Target] Frozen Foods, Snacks & Pantry', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

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
});
