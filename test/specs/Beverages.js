import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const beveragesSubcategories = [
  { name: 'Kids’ Multi-Pack Drinks', click: () => GroceryPage.kidsMultiPackDrinks, secure: () => SecurePage.kidsMultiPackDrinks },
  { name: 'Juice & Cider', click: () => GroceryPage.juiceCider, secure: () => SecurePage.juiceCider },
  { name: 'Soda & Pop', click: () => GroceryPage.sodaPop, secure: () => SecurePage.sodaPop },
  { name: 'Sports Drinks', click: () => GroceryPage.sportsDrinks, secure: () => SecurePage.sportsDrinks },
  { name: 'Water', click: () => GroceryPage.water, secure: () => SecurePage.water },
  { name: 'Energy Drinks', click: () => GroceryPage.energyDrinks, secure: () => SecurePage.energyDrinks },
  { name: 'Milk', click: () => GroceryPage.milk, secure: () => SecurePage.milk },
  { name: 'Milk Substitutes', click: () => GroceryPage.milkSubstitutes, secure: () => SecurePage.milkSubstitutes },
  { name: 'Tea', click: () => GroceryPage.tea, secure: () => SecurePage.tea },
  { name: 'Wine, Beer & Liquor', click: () => GroceryPage.wineBeerLiquor, secure: () => SecurePage.wineBeerLiquor },
  { name: 'Coffee', click: () => GroceryPage.coffee, secure: () => SecurePage.coffee },
  { name: 'Cocktail Mixers', click: () => GroceryPage.cocktailMixers, secure: () => SecurePage.cocktailMixers },
  { name: 'Cocoa', click: () => GroceryPage.cocoa, secure: () => SecurePage.cocoa },
  { name: 'Powdered & Liquid Drink Mixes', click: () => GroceryPage.drinkMixes, secure: () => SecurePage.drinkMixes },
  { name: 'Protein & Meal Replacement Drinks', click: () => GroceryPage.proteinDrinks, secure: () => SecurePage.proteinDrinks },
];

describe('Beverages Subcategory Secure Pages', () => {
  beveragesSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Beverages subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.click();
      await click().waitForClickable({ timeout: 10000 });
      await click().click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });
});

//there are subcatagories in the coffee section