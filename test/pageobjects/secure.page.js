import { $ } from '@wdio/globals';

class SecurePage {
  get groceryDeals() { return $('//h1[@data-test="page-title" and text()="Grocery Deals"]'); }
  get starbucks() { return $('//h1[@data-test="page-title" and text()="Starbucks"]'); }
  get eatWellYourWay() { return $('//h1[@data-test="page-title" and text()="Eat Well Your Way"]'); }
  get favoriteDay() { return $('//h1[@data-test="page-title" and text()="Favorite Day"]'); }
  get goodAndGather() { return $('//h1[@data-test="page-title" and text()="Good & Gather"]'); }
  get marketPantry() { return $('//h1[@data-test="page-title" and text()="Market Pantry"]'); }
  get brunchIdeas() { return $('//h1[@data-test="page-title" and text()="Brunch Ideas"]'); }
  get charcuterieBoardIdeas() { return $('//h1[@data-test="page-title" and text()="Charcuterie Board Ideas"]'); }
  get dinnerInMinutes() { return $('//h1[@data-test="page-title" and text()="Dinner In Minutes"]'); }
  get mealKits() { return $('//h1[@data-test="page-title" and text()="Meal Kits"]'); }

  get frozenFoodsKids() { return $('//h1[@data-test="page-title" and text()="Frozen foods kids"]'); }
  get frozenSingleServeMeals() { return $('//h1[@data-test="page-title" and text()="Frozen Single Serve Meals"]'); }
  get frozenFamilyMeals() { return $('//h1[@data-test="page-title" and text()="Frozen Family Meals"]'); }
  get iceCreamAndNovelties() { return $('//h1[@data-test="page-title" and text()="Ice Cream & Novelties"]'); }
  get frozenPizza() { return $('//h1[@data-test="page-title" and text()="Frozen Pizza"]'); }
  get frozenBreakfastFood() { return $('//h1[@data-test="page-title" and text()="Frozen Breakfast Food"]'); }
  get frozenChicken() { return $('//h1[@data-test="page-title" and text()="Frozen Chicken"]'); }
  get frozenBeef() { return $('//h1[@data-test="page-title" and text()="Frozen Beef"]'); }
  get frozenFishAndSeafood() { return $('//h1[@data-test="page-title" and text()="Frozen Fish & Seafood"]'); }
  get frozenTurkey() { return $('//h1[@data-test="page-title" and text()="Frozen Turkey"]'); }
  get frozenMeatlessAlternatives() { return $('//h1[@data-test="page-title" and text()="Frozen Meatless Alternatives"]'); }  
  get frozenAppetizersAndSnacks() { return $('//h1[@data-test="page-title" and text()="Frozen Appetizers & Snacks"]'); }
  get frozenDesserts() { return $('//h1[@data-test="page-title" and text()="Frozen Desserts"]'); }
  get frozenFruit() { return $('//h1[@data-test="page-title" and text()="Frozen Fruit"]'); }
  get frozenPotatoes() { return $('//h1[@data-test="page-title" and text()="Frozen Potatoes"]'); }
  get frozenVegetables() { return $('//h1[@data-test="page-title" and text()="Frozen Vegetables"]'); }
  get frozenBreadAndDough() { return $('//h1[@data-test="page-title" and text()="Frozen Bread & Dough"]'); }

    //Snacks

  get snackVarietyPacks() { return $('//h1[@data-test="page-title" and text()="Snack Variety Packs"]'); }
  get chips() { return $('//h1[@data-test="page-title" and text()="Chips"]'); }
  get cookies() { return $('//h1[@data-test="page-title" and text()="Cookies"]'); }
  get crackers() { return $('//h1[@data-test="page-title" and text()="Crackers"]'); }
  get nuts() { return $('//h1[@data-test="page-title" and text()="Nuts"]'); }
  get toasterPastries() { return $('//h1[@data-test="page-title" and text()="Toaster Pastries"]'); }
  get trailAndSnackMixes() { return $('//h1[@data-test="page-title" and text()="Trail & Snack Mixes"]'); }
  get pretzels() { return $('//h1[@data-test="page-title" and text()="Pretzels"]'); }
  get salsaAndDips() { return $('//h1[@data-test="page-title" and text()="Salsa & Dips"]'); }
  get granolaAndCerealBars() { return $('//h1[@data-test="page-title" and text()="Granola & Cereal Bars"]'); }
  get popcorn() { return $('//h1[@data-test="page-title" and text()="Popcorn"]'); }
  get candy() { return $('//h1[@data-test="page-title" and text()="Candy"]'); }
  get fruitSnacks() { return $('//h1[@data-test="page-title" and text()="Fruit Snacks"]'); }
  get snackPacksOnTheGoSnacks() { return $('//h1[@data-test="page-title" and text()="Snack Packs On The Go Snacks"]'); }
  get driedFruitAndRaisins() { return $('//h1[@data-test="page-title" and text()="Dried Fruit & Raisins"]'); }
  get jerkyAndMeatSticks() { return $('//h1[@data-test="page-title" and text()="Jerky & Meat Sticks"]'); }
  get snackCakes() { return $('//h1[@data-test="page-title" and text()="Snack Cakes"]'); }
  get appleSauceAndFruitCups() { return $('//h1[@data-test="page-title" and text()="Apple Sauce & Fruit Cups"]'); }
  get gelatinAndPudding() { return $('//h1[@data-test="page-title" and text()="Gelatin & Pudding"]'); }
  get candyVarietyPacks() { return $('//h1[@data-test="page-title" and text()="Candy Variety Packs"]'); }
  get premiumCandy() { return $('//h1[@data-test="page-title" and text()="Premium Candy"]'); }
  get chocolateCandy() { return $('//h1[@data-test="page-title" and text()="Chocolate Candy"]'); }
  get gumMints() { return $('//h1[@data-test="page-title" and text()="Gum & Mints"]'); }
  get gummyChewyCandy() { return $('//h1[@data-test="page-title" and text()="Gummy & Chewy Candy"]'); }
  get hardCandy() { return $('//h1[@data-test="page-title" and text()="Hard Candy"]'); }
  get frozenAppetizersAndSnacks() { return $('//h1[@data-test="page-title" and text()="Frozen Appetizers & Snacks"]'); }
  get chipMultipacks() { return $('//h1[@data-test="page-title" and text()="Chip Multipacks"]'); }
  get cookieMultipacks() { return $('//h1[@data-test="page-title" and text()="Cookie Multipacks"]'); }
  get crackerMultipacks() { return $('//h1[@data-test="page-title" and text()="Cracker Multipacks"]'); }
  get popcornPretzelMultipacks() { return $('//h1[@data-test="page-title" and text()="Popcorn & Pretzel Multipacks"]'); }
  get granolaCerealBars() { return $('//h1[@data-test="page-title" and text()="Granola & Cereal Bars"]'); }
  get fruitSnacks() { return $('//h1[@data-test="page-title" and text()="Fruit Snacks"]'); }
  get appleSauceFruitCups() { return $('//h1[@data-test="page-title" and text()="Applesauce & Fruit Cups"]'); }
  
  //Meat and Seafoods

  get beef() { return $('//h1[@data-test="page-title" and text()="Beef"]'); }
  get chicken() { return $('//h1[@data-test="page-title" and text()="Chicken"]'); }
  get fishAndSeafood() { return $('//h1[@data-test="page-title" and text()="Fish & Seafood"]'); }
  get packagedLunchMeat() { return $('//h1[@data-test="page-title" and text()="Packaged Lunch Meat"]'); }
  get pork() { return $('//h1[@data-test="page-title" and text()="Pork"]'); }
  get turkey() { return $('//h1[@data-test="page-title" and text()="Turkey"]'); }
  get bacon() { return $('//h1[@data-test="page-title" and text()="Bacon"]'); }
  get sausage() { return $('//h1[@data-test="page-title" and text()="Sausages"]'); }
  get hotDogs() { return $('//h1[@data-test="page-title" and text()="Hot Dogs"]'); }
  get slicedDeliMeatAndCheese() { return $('//h1[@data-test="page-title" and text()="Sliced Deli Meat & Deli Cheese"]'); }
  get meatlessAlternatives() { return $('//h1[@data-test="page-title" and text()="Meatless Alternatives"]'); }

  //Produce

  get berries() { return $('//h1[@data-test="page-title" and text()="Berries"]'); }
  get citrus() { return $('//h1[@data-test="page-title" and text()="Citrus"]'); }
  get organicProduce() { return $('//h1[@data-test="page-title" and text()="Organic Produce"]'); }
  get freshFruit() { return $('//h1[@data-test="page-title" and text()="Fresh Fruit"]'); }
  get freshVegetables() { return $('//h1[@data-test="page-title" and text()="Fresh Vegetables"]'); }
  get saladMixes() { return $('//h1[@data-test="page-title" and text()="Salad Mixes"]'); }
  get freshJuices() { return $('//h1[@data-test="page-title" and text()="Fresh Juices"]'); }
  get freshDressingsAndDips() { return $('//h1[@data-test="page-title" and text()="Fresh Dressings & Dips"]'); }
  get freshFlowersAndPlants() { return $('//h1[@data-test="page-title" and text()="Fresh Flowers & Plants"]'); }

//Bakery and bread

  get breads() { return $('//h1[@data-test="page-title" and text()="Breads"]'); }
  get donutsPastries() { return $('//h1[@data-test="page-title" and text()="Donuts & Pastries"]'); }
  get cakesCookiesPies() { return $('//h1[@data-test="page-title" and text()="Cakes, Cookies & Pies"]'); }
  get bagelsMuffins() { return $('//h1[@data-test="page-title" and text()="Bagels & Muffins"]'); }
  get tortillasWraps() { return $('//h1[@data-test="page-title" and text()="Tortillas, Pitas & Wraps"]'); }
  get refrigeratedDoughs() { return $('//h1[@data-test="page-title" and text()="Refrigerated Doughs"]'); }
  get rollsBuns() { return $('//h1[@data-test="page-title" and text()="Rolls & Buns"]'); }
  get pizzaCrusts() { return $('//h1[@data-test="page-title" and text()="Pizza Crusts"]'); }

  //Beverages

  get kidsMultiPackDrinks() { return $('//h1[@data-test="page-title" and text()="Kids’ Multi-Pack Drinks"]'); }
  get juiceCider() { return $('//h1[@data-test="page-title" and text()="Juice & Cider"]'); }
  get sodaPop() { return $('//h1[@data-test="page-title" and text()="Soda & Pop"]'); }
  get sportsDrinks() { return $('//h1[@data-test="page-title" and text()="Sports Drinks"]'); }
  get water() { return $('//h1[@data-test="page-title" and text()="Water"]'); }
  get energyDrinks() { return $('//h1[@data-test="page-title" and text()="Energy Drinks"]'); }
  get milk() { return $('//h1[@data-test="page-title" and text()="Milk"]'); }
  get milkSubstitutes() { return $('//h1[@data-test="page-title" and text()="Milk Substitutes"]'); }
  get tea() { return $('//h1[@data-test="page-title" and text()="Tea"]'); }
  get wineBeerLiquor() { return $('//h1[@data-test="page-title" and text()="Wine, Beer & Liquor"]'); }
  get coffee() { return $('//h1[@data-test="page-title" and text()="Coffee"]'); }
  get cocktailMixers() { return $('//h1[@data-test="page-title" and text()="Cocktail Mixers"]'); }
  get cocoa() { return $('//h1[@data-test="page-title" and text()="Cocoa"]'); }
  get drinkMixes() { return $('//h1[@data-test="page-title" and text()="Powdered & Liquid Drink Mixes"]'); }
  get proteinDrinks() { return $('//h1[@data-test="page-title" and text()="Protein & Meal Replacement Drinks"]'); }
  get perfectMealPairings() { return $('//h1[@data-test="page-title" and text()="Perfect Meal Pairings"]'); }
  get topRatedWines() { return $('//h1[@data-test="page-title" and text()="Top Rated Wines Under $15"]'); }
  get lowCalDrinks() { return $('//h1[@data-test="page-title" and text()="100 Calorie Or Less Drinks"]'); }
  get wine() { return $('//h1[@data-test="page-title" and text()="Wine"]'); }
  get seltzersCocktails() { return $('//h1[@data-test="page-title" and text()="Hard Seltzers & Canned Cocktails"]'); }
  get beer() { return $('//h1[@data-test="page-title" and text()="Beer"]'); }
  get liquor() { return $('//h1[@data-test="page-title" and text()="Liquor"]'); }
  get targetSelects() { return $('//h1[@data-test="page-title" and text()="Target Selects"]'); }
  get nonAlcoholicDrinks() { return $('//h1[@data-test="page-title" and text()="Non-Alcoholic Drinks"]'); }
  get cocktailMixers() { return $('//h1[@data-test="page-title" and text()="Cocktail Mixers"]'); }
  get barWineTools() { return $('//h1[@data-test="page-title" and text()="Bar & Wine Tools"]'); }
    // Wine, Beer & Liquor submenu
get perfectMealPairings() { return $('//h1[text()="Perfect Meal Pairings"]'); }
get topRatedWinesUnder15() { return $('//h1[text()="Top Rated Wines Under $15"]'); }
get lowCalDrinks() { return $('//h1[contains(text(),"100 Calorie")]'); }
get wine() { return $('//h1[text()="Wine"]'); }
get hardSeltzers() { return $('//h1[text()="Hard Seltzers & Canned Cocktails"]'); }
get beer() { return $('//h1[text()="Beer"]'); }
get liquor() { return $('//h1[text()="Liquor"]'); }
get targetSelects() { return $('//h1[text()="Target Selects"]'); }
get nonAlcoholicDrinks() { return $('//h1[text()="Non-Alcoholic Drinks"]'); }
get cocktailMixersSub() { return $('//h1[text()="Cocktail Mixers"]'); }
get barWineTools() { return $('//h1[text()="Bar & Wine Tools"]'); }

// Wine submenu
get wineUnder15() { return $('//h1[text()="Top Rated Wines Under $15"]'); }
get winePairings() { return $('//h1[text()="Perfect Pairings"]'); }
get whiteWine() { return $('//h1[text()="White Wine"]'); }
get redWine() { return $('//h1[text()="Red Wine"]'); }
get roseWine() { return $('//h1[text()="Rose Wine"]'); }
get sparklingWine() { return $('//h1[text()="Champagne & Sparkling Wine"]'); }

// Beer submenu
get allBeer() { return $('//h1[text()="All Beer"]'); }
get craftBeer() { return $('//h1[text()="Craft Beer"]'); }
get domesticBeer() { return $('//h1[text()="Domestic Beer"]'); }
get importBeer() { return $('//h1[text()="Import Beer"]'); }

//Coffee submenu
get groundCoffee() { return $('//h1[@data-test="page-title" and text()="Ground Coffee"]'); }
get kCupsCoffeePods() { return $('//h1[@data-test="page-title" and text()="K-Cups & Coffee Pods"]'); }
get wholeBeanCoffee() { return $('//h1[@data-test="page-title" and text()="Whole Bean Coffee"]'); }
get espresso() { return $('//h1[@data-test="page-title" and text()="Espresso"]'); }
get coffeeCreamers() { return $('//h1[@data-test="page-title" and text()="Coffee Creamers"]'); }
get coldBrewBottledCoffee() { return $('//h1[@data-test="page-title" and text()="Cold Brew & Bottled Coffee"]'); }
get instantCoffee() { return $('//h1[@data-test="page-title" and text()="Instant Coffee"]'); }

  //Pantry

  get bulkPantry() { return $('//h1[@data-test="page-title" and text()="Bulk Pantry"]'); }
  get allPantry() { return $('//h1[@data-test="page-title" and text()="All Pantry"]'); }
  get boxedMealsSideDishesPantry() { return $('//h1[@data-test="page-title" and text()="Boxed Meals & Side Dishes"]'); }
  get pastaRiceGrains() { return $('//h1[@data-test="page-title" and text()="Pasta, Rice & Grains"]'); }
  get cannedPackagedFoods() { return $('//h1[@data-test="page-title" and text()="Canned & Packaged Foods"]'); }
  get saucesMarinades() { return $('//h1[@data-test="page-title" and text()="Sauces & Marinades"]'); }
  get condimentsSaladDressings() { return $('//h1[@data-test="page-title" and text()="Condiments & Salad Dressings"]'); }
  get peanutButterJelly() { return $('//h1[@data-test="page-title" and text()="Peanut Butter & Jelly"]'); }
  get salsaDipsPantry() { return $('//h1[@data-test="page-title" and text()="Salsa & Dips"]'); }
  get soupsBrothChili() { return $('//h1[@data-test="page-title" and text()="Soups, Broth & Chili"]'); }
  get spicesSeasonings() { return $('//h1[@data-test="page-title" and text()="Spices & Seasonings"]'); }
  get bakingStaples() { return $('//h1[@data-test="page-title" and text()="Baking Staples"]'); }
  get cookingOilVinegar() { return $('//h1[@data-test="page-title" and text()="Cooking Oil & Vinegar"]'); }
  get sugarSweeteners() { return $('//h1[@data-test="page-title" and text()="Sugar & Sweeteners"]'); }
  get applesauceFruitCupsPantry() { return $('//h1[@data-test="page-title" and text()="Applesauce & Fruit Cups"]'); }
  get emergencyFood() { return $('//h1[@data-test="page-title" and text()="Emergency Food"]'); }
  get cannedFruit() { return $('//h1[@data-test="page-title" and text()="Canned Fruit"]'); }
  get cannedVegetables() { return $('//h1[@data-test="page-title" and text()="Canned Vegetables"]'); }
  get cannedMeat() { return $('//h1[@data-test="page-title" and text()="Canned Meat"]'); }
  get cannedTunaSeafood() { return $('//h1[@data-test="page-title" and text()="Canned Tuna & Seafood"]'); }
  get olivesPicklesPeppers() { return $('//h1[@data-test="page-title" and text()="Olives, Pickles & Peppers"]'); }
  get breadcrumbsSeasonedCoatings() { return $('//h1[@data-test="page-title" and text()="Breadcrumbs & Seasoned Coatings"]'); }
  get herbsRubsSpices() { return $('//h1[@data-test="page-title" and text()="Herbs, Rubs & Spices"]'); }
  get saltPepper() { return $('//h1[@data-test="page-title" and text()="Salt & Pepper"]'); }
  get bakingNuts() { return $('//h1[@data-test="page-title" and text()="Nuts"]'); }
  get bakingDriedFruitRaisins() { return $('//h1[@data-test="page-title" and text()="Dried Fruit & Raisins"]'); }
  get sugarSweeteners() { return $('//h1[@data-test="page-title" and text()="Sugar & Sweeteners"]'); }
  get bakingChipsCocoa() { return $('//h1[@data-test="page-title" and text()="Baking Chips & Cocoa"]'); }
  get bakingKitsMixes() { return $('//h1[@data-test="page-title" and text()="Baking Kits & Mixes"]'); }
  get bakingPowderSodaYeast() { return $('//h1[@data-test="page-title" and text()="Baking Powder, Baking Soda & Yeast"]'); }
  get condensedPowderedMilk() { return $('//h1[@data-test="page-title" and text()="Condensed & Powdered Milk"]'); }
  get extractsFoodColoring() { return $('//h1[@data-test="page-title" and text()="Extracts & Food Coloring"]'); }
  get floursMeals() { return $('//h1[@data-test="page-title" and text()="Flours & Meals"]'); }
  get frostingIcing() { return $('//h1[@data-test="page-title" and text()="Frosting & Icing"]'); }
  get bakingGelatinPudding() { return $('//h1[@data-test="page-title" and text()="Gelatin & Pudding"]'); }
  get marshmallows() { return $('//h1[@data-test="page-title" and text()="Marshmallows"]'); }
  get pieCrustsFilling() { return $('//h1[@data-test="page-title" and text()="Pie Crusts & Filling"]'); }
  get sprinklesCandlesDecorations() { return $('//h1[@data-test="page-title" and text()="Sprinkles, Candles & Decorations"]'); }
  get bakingSyrupsSauces() { return $('//h1[@data-test="page-title" and text()="Syrups & Sauces"]'); }
  
  
  //Deli

  get allDeli() { return $('//h1[@data-test="page-title" and text()="All Deli"]'); }
  get preparedSaladsSandwiches() { return $('//h1[@data-test="page-title" and text()="Prepared Salads & Sandwiches"]'); }
  get freshDipsSalsasHummus() { return $('//h1[@data-test="page-title" and text()="Fresh Dips, Salsas & Hummus"]'); }
  get artisanCheeseCuredMeats() { return $('//h1[@data-test="page-title" and text()="Artisan Cheese & Cured Meats"]'); }
  get preparedMealsSides() { return $('//h1[@data-test="page-title" and text()="Prepared Meals & Sides"]'); }
  get freshSoups() { return $('//h1[@data-test="page-title" and text()="Fresh Soups"]'); }
  get snackPacksOnTheGoDeli() { return $('//h1[@data-test="page-title" and text()="Snack Packs & On the Go Snacks"]'); }
  get slicedDeliMeatCheese() { return $('//h1[@data-test="page-title" and text()="Sliced Deli Meat & Deli Cheese"]'); }
  get mealKitsDeli() { return $('//h1[@data-test="page-title" and text()="Meal Kits"]'); }
  get partyTrays() { return $('//h1[@data-test="page-title" and text()="Party Trays"]'); }

  //Wine & alchohol

  get wine() { return $('//h1[@data-test="page-title" and text()="Wine"]'); }
  get hardSeltzersCannedCocktails() { return $('//h1[@data-test="page-title" and text()="Hard Seltzers & Canned Cocktails"]'); }
  get beer() { return $('//h1[@data-test="page-title" and text()="Beer"]'); }
  get liquor() { return $('//h1[@data-test="page-title" and text()="Liquor"]'); }
  get targetSelects() { return $('//h1[@data-test="page-title" and text()="Target Selects"]'); }
  get nonAlcoholicDrinks() { return $('//h1[@data-test="page-title" and text()="Non-Alcoholic Drinks"]'); }
  get cocktailMixersLiquor() { return $('//h1[@data-test="page-title" and text()="Cocktail Mixers"]'); }
  get barWineTools() { return $('//h1[@data-test="page-title" and text()="Bar & Wine Tools"]'); }
 
  //Candy

  get chocolateCandy() { return $('//h1[@data-test="page-title" and text()="Chocolate Candy"]'); }
  get gumMints() { return $('//h1[@data-test="page-title" and text()="Gum & Mints"]'); }
  get gummyChewyCandy() { return $('//h1[@data-test="page-title" and text()="Gummy & Chewy Candy"]'); }
  get hardCandy() { return $('//h1[@data-test="page-title" and text()="Hard Candy"]'); }

  // Coffee Details

  get groundCoffee() { return $('//h1[@data-test="page-title" and text()="Ground Coffee"]'); }
  get kcupsCoffeePods() { return $('//h1[@data-test="page-title" and text()="K-Cups & Coffee Pods"]'); }
  get wholeBeanCoffee() { return $('//h1[@data-test="page-title" and text()="Whole Bean Coffee"]'); }
  get espresso() { return $('//h1[@data-test="page-title" and text()="Espresso"]'); }
  get coldBrewCoffee() { return $('//h1[@data-test="page-title" and text()="Cold Brew & Bottled Coffee"]'); }
  get instantCoffee() { return $('//h1[@data-test="page-title" and text()="Instant Coffee"]'); }
  get coffeeCreamers() { return $('//h1[@data-test="page-title" and text()="Coffee Creamers"]'); }

  // Breakfast & Cereal

  get organicBreakfastCereal() { return $('//h1[@data-test="page-title" and text()="Organic Breakfast & Cereal"]'); }
  get cerealGranola() { return $('//h1[@data-test="page-title" and text()="Cereal & Granola"]'); }
  get oatmeal() { return $('//h1[@data-test="page-title" and text()="Oatmeal"]'); }
  get pancakeMixesSyrup() { return $('//h1[@data-test="page-title" and text()="Pancake Mixes, Waffle Mixes & Syrup"]'); }
  
  // Dairy

  get eggs() { return $('//h1[@data-test="page-title" and text()="Eggs"]'); }
  get butterMargarine() { return $('//h1[@data-test="page-title" and text()="Butter & Margarine"]'); }
  get cottageCheese() { return $('//h1[@data-test="page-title" and text()="Cottage Cheese"]'); }
  get creamWhippedToppings() { return $('//h1[@data-test="page-title" and text()="Cream & Whipped Toppings"]'); }
  get creamCheese() { return $('//h1[@data-test="page-title" and text()="Cream Cheese"]'); }
  get sourCreamDips() { return $('//h1[@data-test="page-title" and text()="Sour Cream & Dips"]'); }
  get coffeeCreamers() { return $('//h1[@data-test="page-title" and text()="Coffee Creamers"]'); }
  
 //Deli

  get deli() { return $('//h1[@data-test="page-title" and text()="Deli"]'); }
  get artisanCheeseMeats() { return $('//h1[@data-test="page-title" and text()="Artisan Cheese & Meats"]'); }
  get preparedSaladsSandwiches() { return $('//h1[@data-test="page-title" and text()="Prepared Salads & Sandwiches"]'); }
  get freshDipsSalsasHummus() { return $('//h1[@data-test="page-title" and text()="Fresh Dips, Salsas & Hummus"]'); }
  get preparedMealsSides() { return $('//h1[@data-test="page-title" and text()="Prepared Meals & Sides"]'); }
  get freshSoups() { return $('//h1[@data-test="page-title" and text()="Fresh Soups"]'); }
  get partyTrays() { return $('//h1[@data-test="page-title" and text()="Party Trays"]'); }


  get foodGifts() { return $('//h1[@data-test="page-title" and text()="Food Gifts"]'); }
  async expectPageTitle(expectedTitle) {
    const title = await $('h1[data-test="page-title"]');
  
    await title.waitForDisplayed({ timeout: 10000 });
  
    await browser.waitUntil(
      async () => {
        const text = await title.getText();
        return text && text !== 'Homepage';
      },
      {
        timeout: 10000,
        timeoutMsg: 'Secure page title did not load properly (still showing "Homepage")',
      }
    );
  
    // Tiny pause to allow final render (helps with flickering cases)
    await browser.pause(300);
  
    const actualText = await title.getText();
    if (actualText !== expectedTitle) {
      throw new Error(`Expected title "${expectedTitle}" but got "${actualText}"`);
    }
  }
  
  
  
  

}

export default new SecurePage();
