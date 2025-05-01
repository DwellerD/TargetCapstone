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
  { name: 'Coffee', click: () => GroceryPage.coffee, secure: () => SecurePage.coffee },
  { name: 'Cocktail Mixers', click: () => GroceryPage.cocktailMixers, secure: () => SecurePage.cocktailMixers },
  { name: 'Cocoa', click: () => GroceryPage.cocoa, secure: () => SecurePage.cocoa },
  { name: 'Powdered & Liquid Drink Mixes', click: () => GroceryPage.drinkMixes, secure: () => SecurePage.drinkMixes },
  { name: 'Protein & Meal Replacement Drinks', click: () => GroceryPage.proteinDrinks, secure: () => SecurePage.proteinDrinks }
];

const wineBeerLiquorSub = [
  { name: 'Perfect Meal Pairings', click: () => GroceryPage.perfectMealPairings, secure: () => SecurePage.perfectMealPairings },
  { name: 'Top Rated Wines Under $15', click: () => GroceryPage.topRatedWinesUnder15, secure: () => SecurePage.topRatedWinesUnder15 },
  { name: '100 Calorie Or Less Drinks', click: () => GroceryPage.lowCalDrinks, secure: () => SecurePage.lowCalDrinks },
  { name: 'Wine', click: () => GroceryPage.wine, secure: () => SecurePage.wine },
  { name: 'Hard Seltzers & Canned Cocktails', click: () => GroceryPage.hardSeltzers, secure: () => SecurePage.hardSeltzers },
  { name: 'Beer', click: () => GroceryPage.beer, secure: () => SecurePage.beer },
  { name: 'Liquor', click: () => GroceryPage.liquor, secure: () => SecurePage.liquor },
  { name: 'Target Selects', click: () => GroceryPage.targetSelects, secure: () => SecurePage.targetSelects },
  { name: 'Non-Alcoholic Drinks', click: () => GroceryPage.nonAlcoholicDrinks, secure: () => SecurePage.nonAlcoholicDrinks },
  { name: 'Cocktail Mixers', click: () => GroceryPage.cocktailMixersSub, secure: () => SecurePage.cocktailMixersSub },
  { name: 'Bar & Wine Tools', click: () => GroceryPage.barWineTools, secure: () => SecurePage.barWineTools }
];

const wineSub = [
  { name: 'Top Rated Wines Under $15', click: () => GroceryPage.wineUnder15, secure: () => SecurePage.wineUnder15 },
  { name: 'Perfect Pairings', click: () => GroceryPage.winePairings, secure: () => SecurePage.winePairings },
  { name: 'White Wine', click: () => GroceryPage.whiteWine, secure: () => SecurePage.whiteWine },
  { name: 'Red Wine', click: () => GroceryPage.redWine, secure: () => SecurePage.redWine },
  { name: 'Rose Wine', click: () => GroceryPage.roseWine, secure: () => SecurePage.roseWine },
  { name: 'Champagne & Sparkling Wine', click: () => GroceryPage.sparklingWine, secure: () => SecurePage.sparklingWine },
  { name: 'Target Selects', click: () => GroceryPage.targetSelects, secure: () => SecurePage.targetSelects }
];

const beerSub = [
  { name: 'All Beer', click: () => GroceryPage.allBeer, secure: () => SecurePage.allBeer },
  { name: 'Craft Beer', click: () => GroceryPage.craftBeer, secure: () => SecurePage.craftBeer },
  { name: 'Domestic Beer', click: () => GroceryPage.domesticBeer, secure: () => SecurePage.domesticBeer },
  { name: 'Import Beer', click: () => GroceryPage.importBeer, secure: () => SecurePage.importBeer }
];

describe('Beverages Subcategory Secure Pages', () => {
  beveragesSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Beverages subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(300);
      await GroceryPage.categoriesButton.click();
      await browser.pause(300);
      await GroceryPage.groceryMain.click();
      await browser.pause(300);
      await GroceryPage.beverages.click();
      await browser.pause(300);
      const subcategory = click();
      await subcategory.waitForClickable({ timeout: 10000 });
      await subcategory.click();
      await browser.pause(300);
      await secure().waitForDisplayed({ timeout: 15000 });
      await browser.pause(300);
    });
  });

  wineBeerLiquorSub.forEach(({ name, click, secure }) => {
    it(`should verify Wine, Beer & Liquor subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(300);
      await GroceryPage.categoriesButton.click();
      await browser.pause(300);
      await GroceryPage.groceryMain.click();
      await browser.pause(300);
      await GroceryPage.beverages.click();
      await browser.pause(300);
      await GroceryPage.wineBeerLiquor.click();
      await browser.pause(300);
      const subcategory = click();
      await subcategory.waitForClickable({ timeout: 10000 });
      await subcategory.click();
      await browser.pause(300);
      await secure().waitForDisplayed({ timeout: 15000 });
      await browser.pause(300);
    });
  });

  wineSub.forEach(({ name, click, secure }) => {
    it(`should verify Wine subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(300);
      await GroceryPage.categoriesButton.click();
      await browser.pause(300);
      await GroceryPage.groceryMain.click();
      await browser.pause(300);
      await GroceryPage.beverages.click();
      await browser.pause(300);
      await GroceryPage.wineBeerLiquor.click();
      await browser.pause(300);
      await GroceryPage.wine.click();
      await browser.pause(300);
      const subcategory = click();
      await subcategory.waitForClickable({ timeout: 10000 });
      await subcategory.click();
      await browser.pause(300);
      await secure().waitForDisplayed({ timeout: 15000 });
      await browser.pause(300);
    });
  });

  beerSub.forEach(({ name, click, secure }) => {
    it(`should verify Beer subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(300);
      await GroceryPage.categoriesButton.click();
      await browser.pause(300);
      await GroceryPage.groceryMain.click();
      await browser.pause(300);
      await GroceryPage.beverages.click();
      await browser.pause(300);
      await GroceryPage.wineBeerLiquor.click();
      await browser.pause(300);
      await GroceryPage.beer.click();
      await browser.pause(300);
      const subcategory = click();
      await subcategory.waitForClickable({ timeout: 10000 });
      await subcategory.click();
      await browser.pause(300);
      await secure().waitForDisplayed({ timeout: 15000 });
      await browser.pause(300);
    });
  });
});
