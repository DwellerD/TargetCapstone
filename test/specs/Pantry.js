import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const pantryBaseSubcategories = [
  { name: 'Bulk Pantry', click: () => GroceryPage.bulkPantry, secure: () => SecurePage.bulkPantry },
  { name: 'Pasta, Rice & Grains', click: () => GroceryPage.pastaRiceGrains, secure: () => SecurePage.pastaRiceGrains },
  { name: 'Sauces & Marinades', click: () => GroceryPage.saucesMarinades, secure: () => SecurePage.saucesMarinades },
  { name: 'Condiments & Salad Dressings', click: () => GroceryPage.condimentsDressings, secure: () => SecurePage.condimentsSaladDressings },
  { name: 'Peanut Butter & Jelly', click: () => GroceryPage.peanutButterJelly, secure: () => SecurePage.peanutButterJelly },
  { name: 'Soups, Broth & Chili', click: () => GroceryPage.soupsBrothChili, secure: () => SecurePage.soupsBrothChili },
  { name: 'Cooking Oil & Vinegar', click: () => GroceryPage.cookingOilVinegar, secure: () => SecurePage.cookingOilVinegar },
  { name: 'Emergency Food', click: () => GroceryPage.emergencyFood, secure: () => SecurePage.emergencyFood },
];

const cannedSubcategories = [
  { name: 'Canned Fruit', click: () => GroceryPage.cannedFruit, secure: () => SecurePage.cannedFruit },
  { name: 'Canned Vegetables', click: () => GroceryPage.cannedVegetables, secure: () => SecurePage.cannedVegetables },
  { name: 'Canned Meat', click: () => GroceryPage.cannedMeat, secure: () => SecurePage.cannedMeat },
  { name: 'Canned Tuna & Seafood', click: () => GroceryPage.cannedTunaSeafood, secure: () => SecurePage.cannedTunaSeafood },
  { name: 'Olives, Pickles & Peppers', click: () => GroceryPage.olivesPicklesPeppers, secure: () => SecurePage.olivesPicklesPeppers },
];

const spicesSubcategories = [
  { name: 'Breadcrumbs & Seasoned Coatings', click: () => GroceryPage.breadcrumbsSeasonedCoatings, secure: () => SecurePage.breadcrumbsSeasonedCoatings },
  { name: 'Herbs Rubs & Spices', click: () => GroceryPage.herbsRubsSpices, secure: () => SecurePage.herbsRubsSpices },
  { name: 'Salt & Pepper', click: () => GroceryPage.saltPepper, secure: () => SecurePage.saltPepper },
];

const bakingSubcategories = [
  { name: 'Nuts', click: () => GroceryPage.bakingNuts, secure: () => SecurePage.bakingNuts },
  { name: 'Dried Fruit & Raisins', click: () => GroceryPage.bakingDriedFruitRaisins, secure: () => SecurePage.bakingDriedFruitRaisins },
  { name: 'Baking Chips & Cocoa', click: () => GroceryPage.bakingChipsCocoa, secure: () => SecurePage.bakingChipsCocoa },
  { name: 'Baking Kits & Mixes', click: () => GroceryPage.bakingKitsMixes, secure: () => SecurePage.bakingKitsMixes },
  { name: 'Baking Powder, Baking Soda & Yeast', click: () => GroceryPage.bakingPowderSodaYeast, secure: () => SecurePage.bakingPowderSodaYeast },
  { name: 'Condensed & Powdered Milk', click: () => GroceryPage.condensedPowderedMilk, secure: () => SecurePage.condensedPowderedMilk },
  { name: 'Extracts & Food Coloring', click: () => GroceryPage.extractsFoodColoring, secure: () => SecurePage.extractsFoodColoring },
  { name: 'Flours & Meals', click: () => GroceryPage.floursMeals, secure: () => SecurePage.floursMeals },
  { name: 'Frosting & Icing', click: () => GroceryPage.frostingIcing, secure: () => SecurePage.frostingIcing },
  { name: 'Gelatin & Pudding', click: () => GroceryPage.bakingGelatinPudding, secure: () => SecurePage.bakingGelatinPudding },
  { name: 'Marshmallows', click: () => GroceryPage.marshmallows, secure: () => SecurePage.marshmallows },
  { name: 'Pie Crusts & Filling', click: () => GroceryPage.pieCrustsFilling, secure: () => SecurePage.pieCrustsFilling },
  { name: 'Sprinkles, Candles & Decorations', click: () => GroceryPage.sprinklesCandlesDecorations, secure: () => SecurePage.sprinklesCandlesDecorations },
  { name: 'Syrups & Sauces', click: () => GroceryPage.bakingSyrupsSauces, secure: () => SecurePage.bakingSyrupsSauces },
];

describe('Pantry Base Subcategory Secure Pages', () => {
  pantryBaseSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Pantry subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);
      await GroceryPage.pantry.click();
      await browser.pause(1000);
      const item = click();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);
      const header = secure();
      await header.waitForDisplayed({ timeout: 15000 });
    });
  });
});

describe('Pantry → Canned & Packaged Subcategories', () => {
  cannedSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Canned section: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);
      await GroceryPage.pantry.click();
      await browser.pause(1000);
      await GroceryPage.cannedPackagedFoods.click();
      await browser.pause(1000);
      const item = click();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);
      const header = secure();
      await header.waitForDisplayed({ timeout: 15000 });
    });
  });
});

describe('Pantry → Spices & Seasonings Subcategories', () => {
  spicesSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Spices section: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);
      await GroceryPage.pantry.click();
      await browser.pause(1000);
      await GroceryPage.spicesSeasonings.click();
      await browser.pause(1000);
      const item = click();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);
      const header = secure();
      await header.waitForDisplayed({ timeout: 15000 });
    });
  });
});

describe('Pantry → Baking Staples Subcategories', () => {
  bakingSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Baking section: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);
      await GroceryPage.pantry.click();
      await browser.pause(1000);
      await GroceryPage.bakingStaples.click();
      await browser.pause(1000);
      const item = click();
      await item.waitForClickable({ timeout: 10000 });
      await item.click();
      await browser.pause(1000);
      const header = secure();
      await header.waitForDisplayed({ timeout: 15000 });
    });
  });
});
