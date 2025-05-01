import { $ } from '@wdio/globals';

class GroceryPage {
  // Search and Categories
  get searchBar() { return $('#search'); }
  get categoriesButton() { return $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]'); }

  // Grocery Main
  get groceryMain() { return $('a[data-id="5xt1a"]'); }
  get groceryDeals() { return $('[data-id="k4uyq"]'); }
  get starbucks() { return $('[data-id="5cofw"]'); }
  get eatWellYourWay() { return $('[data-id="nazlk"]'); }

  // Meal Ideas
  get mealIdeas() { return $('[data-id="n8wao"]'); }
  get mealSnackIdeasForKids() { return $('[data-id="xad8e"]'); }
  get brunchIdeas() { return $('[data-id="wa68u"]'); }
  get characterBoardIdeas() { return $('[data-id="sv5if"]'); }
  get dinnerInMinutes() { return $('[data-id="iuzzq"]'); }
  get exploreAllMealIdeas() { return $('a[href="/c/meal-ideas/-/N-n8wao"]'); }
  get mealKits() { return $('[data-id="fql6w"]'); }

  // Show More Categories
  get showMoreCategories() { return $$('.sc-a4adfc9f-3.fILnvl'); }
  get favoriteDay() { return $('[data-id="0ze3m"]'); }
  get goodAndGather() { return $('[data-id="6i8ko"]'); }
  get marketPantry() { return $('[data-id="5izh7"]'); }
  get hideMoreCategories() { return $$('.styles_ndsLink__GUaai.styles_onLight__QKcK7.styles_invertDecorate__Vx5Wz.sc-a4adfc9f-2.qeBME'); }

  // Explore All Buttons
  get exploreAllButtons() { return $$('.styles_ndsBaseButton__W8Gl7.styles_sm__4HXZ8.styles_smGap__J2VD0.styles_ndsButton__XOOOH.styles_sm__uXTs3.styles_filleddefault__7QnWt.h-display-flex'); }
  get securePageTitle() { return $$('[data-test="page-title"]'); }
  get backToGrocery() { return $$('[aria-label="back to Grocery"]'); }

  // Additional Selectors
  get cheese() { return $('[data-id="5xszk"]'); }
  get boxedMealsSideDishes() { return $('[data-id="5xsyf"]'); }
  get yogurt() { return $('[data-id="5xszf"]'); }
  get snacks() { return $('[data-id="5xsy9"]'); }
  get frozenBreakfastFood() { return $('[data-id="5xsza"]'); }
  get produce() { return $('[data-id="u7fty"]'); }
  get granolaCerealBars() { return $('[data-id="4ydo1"]'); }
  get packagedLunchMeat() { return $('[data-id="4tgi6"]'); }
  get frozenAppetizersSnacks() { return $('[data-id="5xszb"]'); }
  get fruitSnacks() { return $('[data-id="5xsy4"]'); }
  get snackPacksOnTheGo() { return $('[data-id="dhjbd"]'); }
  get applesauceFruitCups() { return $('[data-id="5xsy8"]'); }

  // Frozen Foods
  get frozenFoods() { return $('[data-id="5xszd"]'); }
get frozenFoodsKids() { return $('[data-id="rb4pu"]'); }
get exploreAllFrozenFoods() { return $('a[href="/c/frozen-foods-grocery/-/N-5xszd"]'); }
get frozenSingleServeMeals() { return $('[data-id="wdysv"]'); }
get frozenFamilyMeals() { return $('[data-id="a3dpa"]'); }
get iceCreamNovelties() { return $('[data-id="5xsz2"]'); }
get frozenPizza() { return $('[data-id="5xsz4"]'); }
get frozenBreakfastFood() { return $('[data-id="5xsza"]'); }
get frozenMeatPoultrySeafood() { return $('[data-id="5xsz5"]'); }
get frozenChicken() { return $('[data-id="zmsrg"]'); }
get frozenBeef() { return $('[data-id="1fu00"]'); }
get frozenMeatPoultrySeafood() { return $('[data-id="5xsz5"]');  } 
get frozenTurkey() { return $('[data-id="bmm3h"]'); }
get frozenMeatlessAlternatives() { return $('[data-id="7taqq"]'); }
get frozenAppetizersSnacks() { return $('[data-id="5xszb"]'); }
get frozenDesserts() { return $('[data-id="5xsz9"]'); }
get frozenFruit() { return $('[data-id="5xsz7"]'); }
get frozenPotatoes() { return $('[data-id="a479c"]'); }
get frozenVegetables() { return $('[data-id="5xsz3"]'); }
get frozenBreadDough() { return $('[data-id="4tglw"]'); }
get frozenFishAndSeafood() { return $('[data-id="cs8z5"]'); }



  // Snacks
  get snackVarietyPacks() { return $('[data-id="sjs32"]'); }
  get chips() { return $('[data-id="5xsy7"]'); }
  get cookies() { return $('[data-id="54v3e"]'); }
  get crackers() { return $('[data-id="5xsy6"]'); }
  get nuts() { return $('[data-id="tc851"]'); }
  get toasterPastries() { return $('[data-id="5xt0i"]'); }
  get trailSnackMixes() { return $('[data-id="5xsy1"]'); }
  get pretzels() { return $('[data-id="f7azc"]'); }
  get salsaDips() { return $('[data-id="5xsy5"]'); }
  get popcorn() { return $('[data-id="5xsy0"]'); }
  get candy() { return $('[data-id="5xt0d"]'); }
  get driedFruitRaisins() { return $('[data-id="5xt0y"]'); }
  get jerkyMeatSticks() { return $('[data-id="5xsy2"]'); }
  get snackCakes() { return $('[data-id="5xsxz"]'); }
  get gelatinPudding() { return $('[data-id="5xsy3"]'); }
  get candyVarietyPacks() { return $('[data-id="iomx6"]'); }
  get premiumCandy() { return $('[data-id="m4inq"]'); }
  get chocolateCandy() { return $('[data-id="5xt0b"]'); }
  get gumMints() { return $('[data-id="5xt0a"]'); }
  get gummyChewyCandy() { return $('[data-id="5xt09"]'); }
  get hardCandy() { return $('[data-id="5xt08"]'); }
  get granolaCerealBars() { return $('[data-id="4ydo1"]'); }
  get frozenAppetizersSnacks() { return $('[data-id="5xszb"]'); }
  get fruitSnacks() { return $('[data-id="5xsy4"]'); }
  get snackPacksOnTheGo() { return $('[data-id="dhjbd"]'); }
  get applesauceFruitCups() { return $('[data-id="5xsy8"]'); }
  get chipMultipacks() { return $('[data-id="7ker"]'); }
  get cookieMultipacks() { return $('[data-id="v247q"]'); }
  get crackerMultipacks() { return $('[data-id="95u1d"]'); }
  get popcornPretzelMultipacks() { return $('[data-id="55oea"]'); }
  get granolaCerealBars() { return $('[data-id="4ydo1"]'); }
  get fruitSnacks() { return $('[data-id="5xsy4"]'); }
  get appleSauceFruitCups() { return $('[data-id="5xsy8"]'); }
  
  

  // Meat and Seafood
  get meatSeafood() { return $('[data-id="5xsyh"]'); }
  get beef() { return $('[data-id="4tgi8"]'); }
  get chicken() { return $('[data-id="4tgi7"]'); }
  get fishSeafood() { return $('[data-id="4tgi0"]'); }
  get pork() { return $('[data-id="4tgi2"]'); }
  get turkey() { return $('[data-id="4tghz"]'); }
  get bacon() { return $('[data-id="4tgi9"]'); }
  get sausage() { return $('[data-id="p9cdq"]'); }
  get hotDogs() { return $('[data-id="4tgi5"]'); }
  get slicedDeliMeatCheese() { return $('[data-id="zomk2"]'); }
 
  // Meatless Alternatives
  get meatlessAlternatives() { return $('[data-id="4tgi3"]'); }

  // Produce
  get berries() { return $('[data-id="h0uds"]'); }
  get citrus() { return $('[data-id="ofsqb"]'); }
  get organicProduce() { return $('[data-id="h6rph"]'); }
  get freshFruit() { return $('[data-id="4tglt"]'); }
  get freshVegetables() { return $('[data-id="4tglh"]'); }
  get saladMixes() { return $('[data-id="by5pi"]'); }
  get freshJuices() { return $('[data-id="c5lky"]'); }
  get freshDressingsDips() { return $('[data-id="flfjt"]'); }
  get freshFlowersPlants() { return $('[data-id="2dei4"]'); }

  // Bakery & Bread
  get bakeryBread() { return $('[data-id="5xt19"]'); }
  get breads() { return $('[data-id="5xt18"]'); }
  get donutsPastries() { return $('[data-id="5xt15"]'); }
  get cakesCookiesPies() { return $('[data-id="5xt17"]'); }
  get bagelsMuffins() { return $('[data-id="4smkx"]'); }
  get tortillasWraps() { return $('[data-id="4ss7f"]'); }
  get refrigeratedDoughs() { return $('[data-id="4tgo6"]'); }
  get rollsBuns() { return $('[data-id="c51ff"]'); }
  get pizzaCrusts() { return $('[data-id="5xt14"]'); }

  // Beverages
  get beverages() { return $('[data-id="5xt0r"]'); }
  get kidsMultiPackDrinks() { return $('[data-id="5j6q6"]'); }
  get juiceCider() { return $('[data-id="5xt0o"]'); }
  get sodaPop() { return $('[data-id="5xt0m"]'); }
  get sportsDrinks() { return $('[data-id="75dvf"]'); }
  get water() { return $('[data-id="5xt0k"]'); }
  get energyDrinks() { return $('[data-id="4uez2"]'); }
  get milk() { return $('[data-id="5xszh"]'); }
  get milkSubstitutes() { return $('[data-id="zkvwk"]'); }
  get tea() { return $('[data-id="4yi5o"]'); }
  get wineBeerLiquor() { return $('[data-id="5n5q6"]'); }
  get coffee() { return $('[data-id="4yi5p"]'); }
  get cocktailMixers() { return $('[data-id="4uez3"]'); }
  get cocoa() { return $('[data-id="4yi5n"]'); }
  get drinkMixes() { return $('[data-id="5xt0n"]'); }
  get proteinDrinks() { return $('[data-id="4uez0"]'); }
  get perfectMealPairings() { return $('[data-id="10ab1"]'); }
  get topRatedWines() { return $('[data-id="ypj4e"]'); }
  get lowCalDrinks() { return $('[data-id="46b4e"]'); }
  get wine() { return $('[data-id="5xsxv"]'); }
  get seltzersCocktails() { return $('[data-id="mar4j"]'); }
  get beer() { return $('[data-id="5xsxx"]'); }
  get liquor() { return $('[data-id="5xsxw"]'); }
  get targetSelects() { return $('[data-id="iscgt"]'); }
  get nonAlcoholicDrinks() { return $('[data-id="gjl0q"]'); }
  get cocktailMixers() { return $('[data-id="4uez3"]'); }
  get barWineTools() { return $('[data-id="5xts9"]'); }
 // Wine, Beer & Liquor submenu
    get perfectMealPairings() { return $('[data-id="10ab1"]'); }
    get topRatedWinesUnder15() { return $('[data-id="ypj4e"]'); }
    get lowCalDrinks() { return $('[data-id="46b4e"]'); }
    get wine() { return $('[data-id="5xsxv"]'); }
    get hardSeltzers() { return $('[data-id="mar4j"]'); }
    get beer() { return $('[data-id="5xsxx"]'); }
    get liquor() { return $('[data-id="5xsxw"]'); }
    get targetSelects() { return $('[data-id="iscgt"]'); }
    get nonAlcoholicDrinks() { return $('[data-id="gjl0q"]'); }
    get cocktailMixersSub() { return $('[data-id="4uez3"]'); }
    get barWineTools() { return $('[data-id="5xts9"]'); }

    // Wine submenu
    get wineUnder15() { return $('[data-id="ypj4e"]'); }
    get winePairings() { return $('[data-id="kpr3f"]'); }
    get whiteWine() { return $('[data-id="yskry"]'); }
    get redWine() { return $('[data-id="fups0"]'); }
    get roseWine() { return $('[data-id="qqz02"]'); }
    get sparklingWine() { return $('[data-id="dd9ke"]'); }

    // Beer submenu
    get allBeer() { return $('[data-id="d7mti"]'); }
    get craftBeer() { return $('[data-id="o3thc"]'); }
    get domesticBeer() { return $('[data-id="jsxeu"]'); }
    get importBeer() { return $('[data-id="00g2y"]'); }

    //Coffee submenu
    get groundCoffee() { return $('[data-id="x2hqv"]'); }
    get kCupsCoffeePods() { return $('[data-id="6kpkn"]'); }
    get wholeBeanCoffee() { return $('[data-id="n8upo"]'); }
    get espresso() { return $('[data-id="2dpp9"]'); }
    get coffeeCreamers() { return $('[data-id="5xszv"]'); }
    get coldBrewBottledCoffee() { return $('[data-id="260b3"]'); }
    get instantCoffee() { return $('[data-id="05hso"]'); }
    //Liquor submenu
    get liquorTopSpirits() { return $('[data-id="y2mjk"]'); }
    get liquorVodka() { return $('[data-id="ln0x9"]'); }
    get liquorBourbon() { return $('[data-id="xxj34"]'); }
    get liquorWhiskey() { return $('[data-id="5xm96"]'); }
    get liquorTequila() { return $('[data-id="0091p"]'); }
    get liquorRum() { return $('[data-id="vazqx"]'); }
    get liquorGin() { return $('[data-id="9vaw3"]'); }
    get liquorScotch() { return $('[data-id="ar4qr"]'); }
    get liquorBrandyCognac() { return $('[data-id="hpmj8"]'); }
    get liquorCocktailMixers() { return $('[data-id="4uez3"]'); }
    get liquorLiqueursCordialsSchnapps() { return $('[data-id="fij4m"]'); }
    get liquorBarWineTools() { return $('[data-id="5xts9"]'); }


  // Pantry
  get pantry() { return $('[data-id="5xt13"]'); }
  get bulkPantry() { return $('[data-id="gev3n"]'); }
  get pastaRiceGrains() { return $('[data-id="5xsyc"]'); }
  get cannedPackagedFoods() { return $('[data-id="5xt05"]'); }
  get saucesMarinades() { return $('[data-id="4tg6h"]'); }
  get condimentsDressings() { return $('[data-id="5xszw"]'); }
  get peanutButterJelly() { return $('[data-id="5xszr"]'); }
  get soupsBrothChili() { return $('[data-id="5xszx"]'); }
  get spicesSeasonings() { return $('[data-id="5xszu"]'); }
  get bakingStaples() { return $('[data-id="4u9lv"]'); }
  get cookingOilVinegar() { return $('[data-id="4u9ly"]'); }
  get sugarSweeteners() { return $('[data-id="5xt0u"]'); }
  get emergencyFood() { return $('[data-id="4ykz6"]'); }
  get cannedFruit() { return $('[data-id="6peje"]'); }
  get cannedVegetables() { return $('[data-id="sl97t"]'); }
  get cannedMeat() { return $('[data-id="2m8ve"]'); }
  get cannedTunaSeafood() { return $('[data-id="7yq1l"]'); }
  get olivesPicklesPeppers() { return $('[data-id="40p8x"]'); }
  get breadcrumbsSeasonedCoatings() { return $('[data-id="4u9lh"]'); }
  get herbsRubsSpices() { return $('[data-id="4u9lf"]'); }
  get saltPepper() { return $('[data-id="4u9lg"]'); }
  get bakingNuts() { return $('[data-id="tc851"]'); }
  get bakingDriedFruitRaisins() { return $('[data-id="5xt0y"]'); }
  get sugarSweeteners() { return $('[data-id="5xt0u"]'); }
  get bakingChipsCocoa() { return $('[data-id="5xt12"]'); }
  get bakingKitsMixes() { return $('[data-id="5xt11"]'); }
  get bakingPowderSodaYeast() { return $('[data-id="5xt0s"]'); }
  get condensedPowderedMilk() { return $('[data-id="5xt03"]'); }
  get extractsFoodColoring() { return $('[data-id="4u9lt"]'); }
  get floursMeals() { return $('[data-id="4u9lu"]'); }
  get frostingIcing() { return $('[data-id="4u9ls"]'); }
  get bakingGelatinPudding() { return $('[data-id="5xsy3"]'); }
  get marshmallows() { return $('[data-id="5xt0v"]'); }
  get pieCrustsFilling() { return $('[data-id="4u9lr"]'); }
  get sprinklesCandlesDecorations() { return $('[data-id="5xt0z"]'); }
  get bakingSyrupsSauces() { return $('[data-id="5xt0w"]'); }
  

  // Breakfast & Cereal
  get breakfastCereal() { return $('[data-id="wo2mp"]'); }
  get organicBreakfastCereal() { return $('[data-id="qrydr"]'); }
  get cerealGranola() { return $('[data-id="5xt0g"]'); }
  get oatmeal() { return $('[data-id="8tu6y"]'); }
  get pancakeMixesSyrup() { return $('[data-id="5xt0f"]'); }

  // Dairy
  get dairy() { return $('[data-id="5xszm"]'); }
  get eggs() { return $('[data-id="5xszi"]'); }
  get butterMargarine() { return $('[data-id="5xszl"]'); }
  get cottageCheese() { return $('[data-id="4tgo9"]'); }
  get creamWhippedToppings() { return $('[data-id="5xszj"]'); }
  get creamCheese() { return $('[data-id="4tgo8"]'); }
  get sourCreamDips() { return $('[data-id="5xszg"]'); }
  get coffeeCreamers() { return $('[data-id="5xszv"]'); }

  // Deli
  get deli() { return $('[data-id="5hp74"]'); }
  get preparedSaladsSandwiches() { return $('[data-id="mdt7r"]'); }
  get freshDipsSalsasHummus() { return $('[data-id="cjg5k"]'); }
  get artisanCheeseMeats() { return $('[data-id="czzeu"]'); }
  get preparedMealsSides() { return $('[data-id="7dopp"]'); }
  get freshSoups() { return $('[data-id="p2osw"]'); }
  get partyTrays() { return $('[data-id="tgba0"]'); }

  // Wine & Alcohol
  get perfectMealPairings() { return $('[data-id="5xsxv"]'); }
  get topRatedWines() { return $('[data-id="mar4j"]'); }
  get drinksUnder100Cals() { return $('[data-id="5xsxx"]'); }
  get wine() { return $('[data-id="5xsxw"]'); }
  get hardSeltzersCocktails() { return $('[data-id="iscgt"]'); }
  get beer() { return $('[data-id="gjl0q"]'); }
  get barWineTools() { return $('[data-id="5xts9"]'); }

  // Candy
  get candyVarietyPacks() { return $('[data-id="iomx6"]'); }
  get easterCandy() { return $('[data-id="d3zst"]'); }
  get premiumCandy() { return $('[data-id="m4inq"]'); }
  get chocolateCandy() { return $('[data-id="5xt0b"]'); }
  get gumMints() { return $('[data-id="5xt0a"]'); }
  get gummyChewyCandy() { return $('[data-id="5xt09"]'); }
  get hardCandy() { return $('[data-id="5xt08"]'); }

  // Coffee Details
  get groundCoffee() { return $('[data-id="x2hqv"]'); }
  get kcupsCoffeePods() { return $('[data-id="6kpkn"]'); }
  get wholeBeanCoffee() { return $('[data-id="n8upo"]'); }
  get espresso() { return $('[data-id="2dpp9"]'); }
  get coldBrewBottledCoffee() { return $('[data-id="260b3"]'); }
  get instantCoffee() { return $('[data-id="05hso"]'); }

  // Gift
  get foodGifts() { return $('[data-id="54wac"]'); }
}

export default new GroceryPage();

 
