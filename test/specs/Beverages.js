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
  { name: 'Cocktail Mixers', click: () => GroceryPage.cocktailMixers, secure: () => SecurePage.cocktailMixers },
  { name: 'Cocoa', click: () => GroceryPage.cocoa, secure: () => SecurePage.cocoa },
  { name: 'Powdered & Liquid Drink Mixes', click: () => GroceryPage.drinkMixes, secure: () => SecurePage.drinkMixes },
  { name: 'Protein & Meal Replacement Drinks', click: () => GroceryPage.proteinDrinks, secure: () => SecurePage.proteinDrinks }
];

const coffeeSub = [
  { name: 'Ground Coffee', click: () => GroceryPage.groundCoffee, secure: () => SecurePage.groundCoffee },
  { name: 'K-Cups & Coffee Pods', click: () => GroceryPage.kCupsCoffeePods, secure: () => SecurePage.kCupsCoffeePods },
  { name: 'Whole Bean Coffee', click: () => GroceryPage.wholeBeanCoffee, secure: () => SecurePage.wholeBeanCoffee },
  { name: 'Espresso', click: () => GroceryPage.espresso, secure: () => SecurePage.espresso },
  { name: 'Coffee Creamers', click: () => GroceryPage.coffeeCreamers, secure: () => SecurePage.coffeeCreamers },
  { name: 'Cold Brew & Bottled Coffee', click: () => GroceryPage.coldBrewBottledCoffee, secure: () => SecurePage.coldBrewBottledCoffee },
  { name: 'Instant Coffee', click: () => GroceryPage.instantCoffee, secure: () => SecurePage.instantCoffee }
];

const wineSub = [
  { name: 'Top Rated Wines Under $15', click: () => GroceryPage.wineUnder15, secure: () => SecurePage.wineUnder15 },
  { name: 'Perfect Pairings', click: () => GroceryPage.winePairings, secure: () => SecurePage.winePairings },
  { name: 'White Wine', click: () => GroceryPage.whiteWine, secure: () => SecurePage.whiteWine },
  { name: 'Red Wine', click: () => GroceryPage.redWine, secure: () => SecurePage.redWine },
  { name: 'Rose Wine', click: () => GroceryPage.roseWine, secure: () => SecurePage.roseWine },
  { name: 'Champagne & Sparkling Wine', click: () => GroceryPage.sparklingWine, secure: () => SecurePage.sparklingWine }
];

const beerSub = [
  { name: 'All Beer', click: () => GroceryPage.allBeer, secure: () => SecurePage.allBeer },
  { name: 'Craft Beer', click: () => GroceryPage.craftBeer, secure: () => SecurePage.craftBeer },
  { name: 'Domestic Beer', click: () => GroceryPage.domesticBeer, secure: () => SecurePage.domesticBeer },
  { name: 'Import Beer', click: () => GroceryPage.importBeer, secure: () => SecurePage.importBeer }
];

const liquorSub = [
  { name: 'Top Spirits', click: () => GroceryPage.liquorTopSpirits, secure: () => SecurePage.liquorTopSpirits },
  { name: 'Vodka', click: () => GroceryPage.liquorVodka, secure: () => SecurePage.liquorVodka },
  { name: 'Bourbon', click: () => GroceryPage.liquorBourbon, secure: () => SecurePage.liquorBourbon },
  { name: 'Whiskey', click: () => GroceryPage.liquorWhiskey, secure: () => SecurePage.liquorWhiskey },
  { name: 'Tequila', click: () => GroceryPage.liquorTequila, secure: () => SecurePage.liquorTequila },
  { name: 'Rum', click: () => GroceryPage.liquorRum, secure: () => SecurePage.liquorRum },
  { name: 'Gin', click: () => GroceryPage.liquorGin, secure: () => SecurePage.liquorGin },
  { name: 'Scotch', click: () => GroceryPage.liquorScotch, secure: () => SecurePage.liquorScotch },
  { name: 'Brandy & Cognac', click: () => GroceryPage.liquorBrandyCognac, secure: () => SecurePage.liquorBrandyCognac },
  { name: 'Liqueurs, Cordials & Schnapps', click: () => GroceryPage.liquorLiqueursCordialsSchnapps, secure: () => SecurePage.liquorLiqueursCordialsSchnapps },
  { name: 'Bar & Wine Tools', click: () => GroceryPage.liquorBarWineTools, secure: () => SecurePage.liquorBarWineTools }
];

describe('Beverages Subcategory Secure Pages', () => {
  beveragesSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Beverages subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beverages.click();
      const sub = click();
      await sub.waitForDisplayed({ timeout: 10000 });
      await sub.waitForClickable({ timeout: 10000 });
      await browser.pause(500);
      await sub.click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });

  it('should open Coffee submenu', async () => {
    await browser.reloadSession();
    await TargetPage.open();
    await GroceryPage.categoriesButton.click();
    await GroceryPage.groceryMain.click();
    await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.beverages.click();
    await GroceryPage.coffee.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.coffee.click();
  });

  coffeeSub.forEach(({ name, click, secure }) => {
    it(`should verify Coffee subcategory: ${name}`, async () => {
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beverages.click();
      await GroceryPage.coffee.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.coffee.click();
      const sub = click();
      await sub.waitForDisplayed({ timeout: 10000 });
      await sub.waitForClickable({ timeout: 10000 });
      await browser.pause(500);
      await sub.click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });

  it('should open Wine submenu', async () => {
    await TargetPage.open();
    await GroceryPage.categoriesButton.click();
    await GroceryPage.groceryMain.click();
    await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.beverages.click();
    await GroceryPage.wineBeerLiquor.click();
    await GroceryPage.wine.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.wine.click();
  });

  wineSub.forEach(({ name, click, secure }) => {
    it(`should verify Wine subcategory: ${name}`, async () => {
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beverages.click();
      await GroceryPage.wineBeerLiquor.click();
      await GroceryPage.wine.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.wine.click();
      const sub = click();
      await sub.waitForDisplayed({ timeout: 10000 });
      await sub.waitForClickable({ timeout: 10000 });
      await browser.pause(500);
      await sub.click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });

  it('should open Beer submenu', async () => {
    await TargetPage.open();
    await GroceryPage.categoriesButton.click();
    await GroceryPage.groceryMain.click();
    await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.beverages.click();
    await GroceryPage.wineBeerLiquor.click();
    await GroceryPage.beer.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.beer.click();
  });

  beerSub.forEach(({ name, click, secure }) => {
    it(`should verify Beer subcategory: ${name}`, async () => {
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beverages.click();
      await GroceryPage.wineBeerLiquor.click();
      await GroceryPage.beer.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beer.click();
      const sub = click();
      await sub.waitForDisplayed({ timeout: 10000 });
      await sub.waitForClickable({ timeout: 10000 });
      await browser.pause(500);
      await sub.click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });

  it('should open Liquor submenu', async () => {
    await TargetPage.open();
    await GroceryPage.categoriesButton.click();
    await GroceryPage.groceryMain.click();
    await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.beverages.click();
    await GroceryPage.wineBeerLiquor.click();
    await GroceryPage.liquor.waitForDisplayed({ timeout: 10000 });
    await GroceryPage.liquor.click();
  });

  liquorSub.forEach(({ name, click, secure }) => {
    it(`should verify Liquor subcategory: ${name}`, async () => {
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.beverages.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.beverages.click();
      await GroceryPage.wineBeerLiquor.click();
      await GroceryPage.liquor.waitForDisplayed({ timeout: 10000 });
      await GroceryPage.liquor.click();
      const sub = click();
      await sub.waitForDisplayed({ timeout: 10000 });
      await sub.waitForClickable({ timeout: 10000 });
      await browser.pause(500);
      await sub.click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });
});
