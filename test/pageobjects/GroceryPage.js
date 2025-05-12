import { $ } from '@wdio/globals';
import TargetPage from './targetPage.js';

class GroceryPage {
  getItemByText(name) {
    return $(`//span[contains(@class, "styles_wrapper") and text()="${name}"]`);
  }

  async waitUntilVisibleAndClickable(element, timeout = 15000) {
    await browser.waitUntil(
      async () => (await element.isExisting()) && (await element.isDisplayed()) && (await element.isClickable()),
      { timeout }
    );
  }

  async openGroceryRoot() {
    await TargetPage.open();

    const categories = await $('a[aria-label="Categories"]');
    await this.waitUntilVisibleAndClickable(categories);
    await categories.click();

    const grocery = await $('[data-id="5xt1a"]');
    await this.waitUntilVisibleAndClickable(grocery);
    await grocery.click();
  }

  async navigateAndValidate(path = []) {
    await this.openGroceryRoot();

    for (const step of path) {
      const item = await this.getItemByText(step);
      await this.waitUntilVisibleAndClickable(item);
      await item.scrollIntoView();
      await item.moveTo();
      await item.click();
    }

    const final = path[path.length - 1];
    const title = await $('h1[data-test="page-title"]');
    await title.waitForDisplayed({ timeout: 20000 });
    await expect(title).toHaveText(final);
  }

  async validateGroup(path, subcategoryList) {
    for (const name of subcategoryList) {
      await this.navigateAndValidate([...path, name]);
    }
  }

  get frozenSectionsList() { return ['Frozen Single Serve Meals','Frozen Family Meals','Ice Cream & Novelties','Frozen Pizza','Frozen Breakfast Food','Frozen Appetizers & Snacks','Frozen Desserts','Frozen Fruit','Frozen Potatoes','Frozen Vegetables','Frozen Bread & Dough']; }
  get frozenMeatPoultrySeafoodList() { return ['Frozen Chicken','Frozen Beef','Frozen Fish & Seafood','Frozen Turkey','Frozen Meatless Alternatives']; }
  get snackSubcategoriesList() { return ['Chips','Cookies','Crackers','Nuts','Toaster Pastries','Trail & Snack Mixes','Pretzels','Salsa & Dips','Popcorn','Dried Fruit & Raisins','Jerky & Meat Sticks','Snack Cakes','Gelatin & Pudding']; }
  get snackVarietyNestedSubcategoriesList() { return ['Chip Multipacks','Cookie Multipacks','Cracker Multipacks','Popcorn & Pretzel Multipacks','Granola & Cereal Bars','Fruit Snacks','Applesauce & Fruit Cups']; }
  get meatSeafoodList() { return ['Beef','Chicken','Fish & Seafood','Pork','Turkey','Bacon','Sausages','Hot Dogs','Sliced Deli Meat & Deli Cheese','Meatless Alternatives']; }
  get produceSubcategoriesList() { return ['Berries','Citrus','Organic Produce','Fresh Fruit','Fresh Vegetables','Salad Mixes','Fresh Juices','Fresh Dressings & Dips','Fresh Flowers & Plants']; }
  get candySubcategoriesList() { return ['Candy Variety Packs','Premium Candy','Chocolate Candy','Gum & Mints','Gummy & Chewy Candy','Hard Candy']; }
  get bakerySubcategoriesList() { return ['Breads','Donuts & Pastries','Cakes, Cookies & Pies','Bagels & Muffins','Tortillas, Pitas & Wraps','Refrigerated Doughs','Rolls & Buns','Pizza Crusts']; }
  get breakfastSubcategoriesList() { return ['Organic Breakfast & Cereal','Cereal & Granola','Oatmeal','Pancake Mixes, Waffle Mixes & Syrup','Toaster Pastries','Granola & Cereal Bars']; }
  get cannedSubcategoriesList() { return ['Canned Fruit','Canned Vegetables','Canned Meat','Canned Tuna & Seafood','Olives, Pickles & Peppers']; }
  get spicesSubcategoriesList() { return ['Breadcrumbs & Seasoned Coatings','Herbs, Rubs & Spices','Salt & Pepper']; }
  get bakingSubcategoriesList() { return ['Nuts','Dried Fruit & Raisins','Baking Chips & Cocoa','Baking Kits & Mixes','Baking Powder, Baking Soda & Yeast','Condensed & Powdered Milk','Extracts & Food Coloring','Flours & Meals','Frosting & Icing','Gelatin & Pudding','Marshmallows','Pie Crusts & Filling','Sprinkles, Candles & Decorations','Syrups & Sauces']; }
  get dairySubcategoriesList() { return ['Cheese','Milk','Eggs','Yogurt','Butter & Margarine','Cottage Cheese','Cream & Whipped Toppings','Milk Substitutes','Cream Cheese','Refrigerated Doughs','Sour Cream & Dips','Coffee Creamers']; }
  get deliSubcategoriesList() { return ['Prepared Salads & Sandwiches','Fresh Dips, Salsas & Hummus','Packaged Lunch Meat','Prepared Meals & Sides','Fresh Soups','Snack Packs & On the Go Snacks','Sliced Deli Meat & Deli Cheese','Meal Kits','Party Trays']; }
  get artisanSubcategoriesList() { return ['Specialty Cheese','Specialty Meats']; }
  get beverageSubcategoriesList() { return ['Juice & Cider','Soda & Pop','Sports Drinks','Water','Energy Drinks','Milk','Milk Substitutes','Tea','Cocoa','Powdered & Liquid Drink Mixes','Protein & Meal Replacement Drinks']; }
  get coffeeSubcategoriesList() { return ['Ground Coffee','K-Cups & Coffee Pods','Whole Bean Coffee','Espresso','Coffee Creamers','Cold Brew & Bottled Coffee','Instant Coffee']; }
  get wineSubcategoriesList() { return ['White Wine','Red Wine','Rose Wine','Champagne & Sparkling Wine','Target Selects']; }
  get beerSubcategoriesList() { return ['Craft Beer','Domestic Beer','Import Beer']; }
  get liquorSubcategoriesList() { return ['Vodka','Bourbon','Whiskey','Tequila','Rum','Gin','Scotch','Brandy & Cognac','Cocktail Mixers','Liqueurs, Cordials & Schnapps','Bar & Wine Tools']; }
  get bakingStaplesList() { return ['Nuts','Dried Fruit & Raisins','Sugar & Sweeteners','Baking Chips & Cocoa','Baking Kits & Mixes','Baking Powder, Baking Soda & Yeast','Condensed & Powdered Milk','Extracts & Food Coloring','Flours & Meals','Frosting & Icing','Gelatin & Pudding','Marshmallows','Pie Crusts & Filling','Sprinkles, Candles & Decorations','Syrups & Sauces']; }
  get pantryBaseList() { return ['Bulk Pantry','Boxed Meals & Side Dishes','Pasta, Rice & Grains','Sauces & Marinades','Condiments & Salad Dressings','Peanut Butter & Jelly','Salsa & Dips','Soups, Broth & Chili','Cooking Oil & Vinegar','Sugar & Sweeteners','Applesauce & Fruit Cups','Emergency Food']; }
  get foodGiftsList() { return ['Wine']; }
}

export default new GroceryPage();
