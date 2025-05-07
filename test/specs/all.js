import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const allSubcategories = [
  { name: 'Grocery Deals', click: () => GroceryPage.groceryDeals, secure: () => SecurePage.groceryDeals },
  { name: 'Starbucks', click: () => GroceryPage.starbucks, secure: () => SecurePage.starbucks },
  { name: 'Eat Well Your Way', click: () => GroceryPage.eatWellYourWay, secure: () => SecurePage.eatWellYourWay },
  { name: 'Favorite Day', click: () => GroceryPage.favoriteDay, secure: () => SecurePage.favoriteDay },
  { name: 'Good & Gather', click: () => GroceryPage.goodAndGather, secure: () => SecurePage.goodAndGather },
  { name: 'Market Pantry', click: () => GroceryPage.marketPantry, secure: () => SecurePage.marketPantry },
  { name: 'Brunch Ideas', click: () => GroceryPage.brunchIdeas, secure: () => SecurePage.brunchIdeas },
  { name: 'Charcuterie Board Ideas', click: () => GroceryPage.characterBoardIdeas, secure: () => SecurePage.charcuterieBoardIdeas },
  { name: 'Dinner In Minutes', click: () => GroceryPage.dinnerInMinutes, secure: () => SecurePage.dinnerInMinutes },
  { name: 'Meal Kits', click: () => GroceryPage.mealKits, secure: () => SecurePage.mealKits },

  // Frozen Foods
  { name: 'Frozen foods kids', click: () => GroceryPage.frozenFoodsKids, secure: () => SecurePage.frozenFoodsKids },
  { name: 'Frozen Single Serve Meals', click: () => GroceryPage.frozenSingleServeMeals, secure: () => SecurePage.frozenSingleServeMeals },
  { name: 'Frozen Family Meals', click: () => GroceryPage.frozenFamilyMeals, secure: () => SecurePage.frozenFamilyMeals },
  { name: 'Ice Cream & Novelties', click: () => GroceryPage.iceCreamNovelties, secure: () => SecurePage.iceCreamAndNovelties },
  { name: 'Frozen Pizza', click: () => GroceryPage.frozenPizza, secure: () => SecurePage.frozenPizza },
  { name: 'Frozen Breakfast Food', click: () => GroceryPage.frozenBreakfastFood, secure: () => SecurePage.frozenBreakfastFood },
  { name: 'Frozen Chicken', click: () => GroceryPage.frozenChicken, secure: () => SecurePage.frozenChicken },
  { name: 'Frozen Beef', click: () => GroceryPage.frozenBeef, secure: () => SecurePage.frozenBeef },
  { name: 'Frozen Fish & Seafood', click: () => GroceryPage.frozenFishAndSeafood, secure: () => SecurePage.frozenFishAndSeafood },
  { name: 'Frozen Turkey', click: () => GroceryPage.frozenTurkey, secure: () => SecurePage.frozenTurkey },
  { name: 'Frozen Meatless Alternatives', click: () => GroceryPage.frozenMeatlessAlternatives, secure: () => SecurePage.frozenMeatlessAlternatives },
  { name: 'Frozen Appetizers & Snacks', click: () => GroceryPage.frozenAppetizersSnacks, secure: () => SecurePage.frozenAppetizersAndSnacks },
  { name: 'Frozen Desserts', click: () => GroceryPage.frozenDesserts, secure: () => SecurePage.frozenDesserts },
  { name: 'Frozen Fruit', click: () => GroceryPage.frozenFruit, secure: () => SecurePage.frozenFruit },
  { name: 'Frozen Potatoes', click: () => GroceryPage.frozenPotatoes, secure: () => SecurePage.frozenPotatoes },
  { name: 'Frozen Vegetables', click: () => GroceryPage.frozenVegetables, secure: () => SecurePage.frozenVegetables },
  { name: 'Frozen Bread & Dough', click: () => GroceryPage.frozenBreadDough, secure: () => SecurePage.frozenBreadAndDough },

  // Snacks
  { name: 'Snack Variety Packs', click: () => GroceryPage.snackVarietyPacks, secure: () => SecurePage.snackVarietyPacks },
  { name: 'Chips', click: () => GroceryPage.chips, secure: () => SecurePage.chips },
  { name: 'Cookies', click: () => GroceryPage.cookies, secure: () => SecurePage.cookies },
  { name: 'Crackers', click: () => GroceryPage.crackers, secure: () => SecurePage.crackers },
  { name: 'Nuts', click: () => GroceryPage.nuts, secure: () => SecurePage.nuts },
  { name: 'Toaster Pastries', click: () => GroceryPage.toasterPastries, secure: () => SecurePage.toasterPastries },
  { name: 'Trail & Snack Mixes', click: () => GroceryPage.trailSnackMixes, secure: () => SecurePage.trailAndSnackMixes },
  { name: 'Pretzels', click: () => GroceryPage.pretzels, secure: () => SecurePage.pretzels },
  { name: 'Salsa & Dips', click: () => GroceryPage.salsaDips, secure: () => SecurePage.salsaAndDips },
  { name: 'Granola & Cereal Bars', click: () => GroceryPage.granolaCerealBars, secure: () => SecurePage.granolaAndCerealBars },
  { name: 'Popcorn', click: () => GroceryPage.popcorn, secure: () => SecurePage.popcorn },
  { name: 'Candy', click: () => GroceryPage.candy, secure: () => SecurePage.candy },
  { name: 'Fruit Snacks', click: () => GroceryPage.fruitSnacks, secure: () => SecurePage.fruitSnacks },
  { name: 'Snack Packs On The Go Snacks', click: () => GroceryPage.snackPacksOnTheGo, secure: () => SecurePage.snackPacksOnTheGoSnacks },

  // Meat
  { name: 'Beef', click: () => GroceryPage.beef, secure: () => SecurePage.beef },
  { name: 'Chicken', click: () => GroceryPage.chicken, secure: () => SecurePage.chicken },
  { name: 'Fish & Seafood', click: () => GroceryPage.fishSeafood, secure: () => SecurePage.fishAndSeafood },
  { name: 'Pork', click: () => GroceryPage.pork, secure: () => SecurePage.pork },
  { name: 'Turkey', click: () => GroceryPage.turkey, secure: () => SecurePage.turkey },
  { name: 'Bacon', click: () => GroceryPage.bacon, secure: () => SecurePage.bacon },
  { name: 'Sausages', click: () => GroceryPage.sausage, secure: () => SecurePage.sausage },

  // Produce
  { name: 'Berries', click: () => GroceryPage.berries, secure: () => SecurePage.berries },
  { name: 'Citrus', click: () => GroceryPage.citrus, secure: () => SecurePage.citrus },
  { name: 'Organic Produce', click: () => GroceryPage.organicProduce, secure: () => SecurePage.organicProduce },
  { name: 'Fresh Fruit', click: () => GroceryPage.freshFruit, secure: () => SecurePage.freshFruit },
  { name: 'Fresh Vegetables', click: () => GroceryPage.freshVegetables, secure: () => SecurePage.freshVegetables },
  { name: 'Salad Mixes', click: () => GroceryPage.saladMixes, secure: () => SecurePage.saladMixes },
  { name: 'Fresh Juices', click: () => GroceryPage.freshJuices, secure: () => SecurePage.freshJuices },
  { name: 'Fresh Dressings & Dips', click: () => GroceryPage.freshDressingsDips, secure: () => SecurePage.freshDressingsAndDips },

  // Bakery
  { name: 'Breads', click: () => GroceryPage.breads, secure: () => SecurePage.breads },
  { name: 'Donuts & Pastries', click: () => GroceryPage.donutsPastries, secure: () => SecurePage.donutsPastries },
  { name: 'Cakes, Cookies & Pies', click: () => GroceryPage.cakesCookiesPies, secure: () => SecurePage.cakesCookiesPies },
  { name: 'Bagels & Muffins', click: () => GroceryPage.bagelsMuffins, secure: () => SecurePage.bagelsMuffins },

    // Beverages
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

      // Pantry
  { name: 'Bulk Pantry', click: () => GroceryPage.bulkPantry, secure: () => SecurePage.bulkPantry },
  { name: 'All Pantry', click: () => GroceryPage.pantry, secure: () => SecurePage.allPantry },
  { name: 'Boxed Meals & Side Dishes', click: () => GroceryPage.boxedMealsSideDishes, secure: () => SecurePage.boxedMealsSideDishesPantry },
  { name: 'Pasta, Rice & Grains', click: () => GroceryPage.pastaRiceGrains, secure: () => SecurePage.pastaRiceGrains },
  { name: 'Canned & Packaged Foods', click: () => GroceryPage.cannedPackagedFoods, secure: () => SecurePage.cannedPackagedFoods },
  { name: 'Sauces & Marinades', click: () => GroceryPage.saucesMarinades, secure: () => SecurePage.saucesMarinades },
  { name: 'Condiments & Salad Dressings', click: () => GroceryPage.condimentsDressings, secure: () => SecurePage.condimentsSaladDressings },
  { name: 'Peanut Butter & Jelly', click: () => GroceryPage.peanutButterJelly, secure: () => SecurePage.peanutButterJelly },
  { name: 'Salsa & Dips', click: () => GroceryPage.salsaDips, secure: () => SecurePage.salsaDipsPantry },
  { name: 'Soups, Broth & Chili', click: () => GroceryPage.soupsBrothChili, secure: () => SecurePage.soupsBrothChili },
  { name: 'Spices & Seasonings', click: () => GroceryPage.spicesSeasonings, secure: () => SecurePage.spicesSeasonings },
  { name: 'Baking Staples', click: () => GroceryPage.bakingStaples, secure: () => SecurePage.bakingStaples },
  { name: 'Cooking Oil & Vinegar', click: () => GroceryPage.cookingOilVinegar, secure: () => SecurePage.cookingOilVinegar },
  { name: 'Sugar & Sweeteners', click: () => GroceryPage.sugarSweeteners, secure: () => SecurePage.sugarSweeteners },
  { name: 'Applesauce & Fruit Cups', click: () => GroceryPage.applesauceFruitCups, secure: () => SecurePage.applesauceFruitCupsPantry },
  { name: 'Emergency Food', click: () => GroceryPage.emergencyFood, secure: () => SecurePage.emergencyFood },

    // Breakfast & Cereal
    { name: 'Organic Breakfast & Cereal', click: () => GroceryPage.organicBreakfastCereal, secure: () => SecurePage.organicBreakfastCereal },
    { name: 'Cereal & Granola', click: () => GroceryPage.cerealGranola, secure: () => SecurePage.cerealGranola },
    { name: 'Oatmeal', click: () => GroceryPage.oatmeal, secure: () => SecurePage.oatmeal },
    { name: 'Pancake Mixes, Waffle Mixes & Syrup', click: () => GroceryPage.pancakeMixesSyrup, secure: () => SecurePage.pancakeMixesSyrup },

      // Dairy
  { name: 'Eggs', click: () => GroceryPage.eggs, secure: () => SecurePage.eggs },
  { name: 'Butter & Margarine', click: () => GroceryPage.butterMargarine, secure: () => SecurePage.butterMargarine },
  { name: 'Cottage Cheese', click: () => GroceryPage.cottageCheese, secure: () => SecurePage.cottageCheese },
  { name: 'Cream & Whipped Toppings', click: () => GroceryPage.creamWhippedToppings, secure: () => SecurePage.creamWhippedToppings },
  { name: 'Cream Cheese', click: () => GroceryPage.creamCheese, secure: () => SecurePage.creamCheese },
  { name: 'Sour Cream & Dips', click: () => GroceryPage.sourCreamDips, secure: () => SecurePage.sourCreamDips },
  { name: 'Coffee Creamers', click: () => GroceryPage.coffeeCreamers, secure: () => SecurePage.coffeeCreamers },

    // Deli
    { name: 'Deli', click: () => GroceryPage.deli, secure: () => SecurePage.deli },
    { name: 'Prepared Salads & Sandwiches', click: () => GroceryPage.preparedSaladsSandwiches, secure: () => SecurePage.preparedSaladsSandwiches },
    { name: 'Fresh Dips, Salsas & Hummus', click: () => GroceryPage.freshDipsSalsasHummus, secure: () => SecurePage.freshDipsSalsasHummus },
    { name: 'Artisan Cheese & Meats', click: () => GroceryPage.artisanCheeseMeats, secure: () => SecurePage.artisanCheeseMeats },
    { name: 'Prepared Meals & Sides', click: () => GroceryPage.preparedMealsSides, secure: () => SecurePage.preparedMealsSides },
    { name: 'Fresh Soups', click: () => GroceryPage.freshSoups, secure: () => SecurePage.freshSoups },
    { name: 'Party Trays', click: () => GroceryPage.partyTrays, secure: () => SecurePage.partyTrays },

      // Wine & Alcohol
  { name: 'Wine', click: () => GroceryPage.wine, secure: () => SecurePage.wine },
  { name: 'Hard Seltzers & Canned Cocktails', click: () => GroceryPage.hardSeltzersCocktails, secure: () => SecurePage.hardSeltzersCannedCocktails },
  { name: 'Beer', click: () => GroceryPage.beer, secure: () => SecurePage.beer },
  { name: 'Liquor', click: () => GroceryPage.wineBeerLiquor, secure: () => SecurePage.liquor },
  { name: 'Cocktail Mixers', click: () => GroceryPage.cocktailMixers, secure: () => SecurePage.cocktailMixersLiquor },
  { name: 'Bar & Wine Tools', click: () => GroceryPage.barWineTools, secure: () => SecurePage.barWineTools },

    // Candy
    { name: 'Candy Variety Packs', click: () => GroceryPage.candyVarietyPacks, secure: () => SecurePage.candyVarietyPacks },
    { name: 'Premium Candy', click: () => GroceryPage.premiumCandy, secure: () => SecurePage.premiumCandy },
    { name: 'Chocolate Candy', click: () => GroceryPage.chocolateCandy, secure: () => SecurePage.chocolateCandy },
    { name: 'Gum & Mints', click: () => GroceryPage.gumMints, secure: () => SecurePage.gumMints },
    { name: 'Gummy & Chewy Candy', click: () => GroceryPage.gummyChewyCandy, secure: () => SecurePage.gummyChewyCandy },
    { name: 'Hard Candy', click: () => GroceryPage.hardCandy, secure: () => SecurePage.hardCandy },

      // Coffee
  { name: 'Ground Coffee', click: () => GroceryPage.groundCoffee, secure: () => SecurePage.groundCoffee },
  { name: 'K-Cups & Coffee Pods', click: () => GroceryPage.kcupsCoffeePods, secure: () => SecurePage.kcupsCoffeePods },
  { name: 'Whole Bean Coffee', click: () => GroceryPage.wholeBeanCoffee, secure: () => SecurePage.wholeBeanCoffee },
  { name: 'Espresso', click: () => GroceryPage.espresso, secure: () => SecurePage.espresso },
  { name: 'Cold Brew & Bottled Coffee', click: () => GroceryPage.coldBrewBottledCoffee, secure: () => SecurePage.coldBrewCoffee },
  { name: 'Instant Coffee', click: () => GroceryPage.instantCoffee, secure: () => SecurePage.instantCoffee },

    // Gifts
    { name: 'Food Gifts', click: () => GroceryPage.foodGifts, secure: () => SecurePage.foodGifts },

  
];

describe('All Grocery Subcategories Secure Pages', () => {
  allSubcategories.forEach(({ name, click, secure }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      // await browser.pause(1000);

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();
      // await browser.pause(1000);

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();
      // await browser.pause(1000);

      const element = click();
      await element.waitForClickable({ timeout: 10000 });
      await element.scrollIntoView();
      await element.click();
      // await browser.pause(1000);
      
      const secureElement = secure();
      await secureElement.waitForDisplayed({ timeout: 15000 });
      // await browser.pause(500);
    });
  });
});
