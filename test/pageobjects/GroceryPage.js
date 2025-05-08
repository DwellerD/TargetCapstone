import { $ } from '@wdio/globals';

class GroceryPage {
  get categoriesButton() {
    return $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]');
  }

  getItemByText(name) {
    return $(`//span[@class="styles_wrapper__YYaWP"][text()="${name}"]`);
  }

  get bakerySubcategoriesList() {
    return [
      'Breads',
      'Donuts & Pastries',
      'Cakes, Cookies & Pies',
      'Bagels & Muffins',
      'Tortillas, Pitas & Wraps',
      'Refrigerated Doughs',
      'Rolls & Buns',
      'Pizza Crusts',
    ];
  }

  get breakfastSubcategoriesList() {
    return [
      'Organic Breakfast & Cereal',
      'Cereal & Granola',
      'Oatmeal',
      'Pancake Mixes, Waffle Mixes & Syrup',
      'Toaster Pastries',
      'Granola & Cereal Bars',
    ];
  }

  get beveragesSubcategoriesList() {
    return [
      'Kids’ Multi-Pack Drinks',
      'Juice & Cider',
      'Soda & Pop',
      'Sports Drinks',
      'Water',
      'Energy Drinks',
      'Milk',
      'Milk Substitutes',
      'Tea',
      'Cocktail Mixers',
      'Cocoa',
      'Powdered & Liquid Drink Mixes',
      'Protein & Meal Replacement Drinks',
    ];
  }

  get coffeeSubcategoriesList() {
    return [
      'Ground Coffee',
      'K-Cups & Coffee Pods',
      'Whole Bean Coffee',
      'Espresso',
      'Coffee Creamers',
      'Cold Brew & Bottled Coffee',
      'Instant Coffee',
    ];
  }

  get wineSubcategoriesList() {
    return [
      'Top Rated Wines Under $15',
      'Perfect Pairings',
      'White Wine',
      'Red Wine',
      'Rose Wine',
      'Champagne & Sparkling Wine',
    ];
  }

  get beerSubcategoriesList() {
    return [
      'All Beer',
      'Craft Beer',
      'Domestic Beer',
      'Import Beer',
    ];
  }

  get liquorSubcategoriesList() {
    return [
      'Top Spirits',
      'Vodka',
      'Bourbon',
      'Whiskey',
      'Tequila',
      'Rum',
      'Gin',
      'Scotch',
      'Brandy & Cognac',
      'Liqueurs, Cordials & Schnapps',
      'Bar & Wine Tools',
    ];
  }

  get dairySubcategoriesList() {
    return [
      'Cheese',
      'Milk',
      'Eggs',
      'Yogurt',
      'Butter & Margarine',
      'Cottage Cheese',
      'Cream & Whipped Toppings',
      'Milk Substitutes',
      'Cream Cheese',
      'Refrigerated Doughs',
      'Sour Cream & Dips',
      'Coffee Creamers',
    ];
  }

  get deliSubcategoriesList() {
    return [
      'Prepared Salads & Sandwiches',
      'Fresh Dips, Salsas & Hummus',
      'Packaged Lunch Meat',
      'Prepared Meals & Sides',
      'Fresh Soups',
      'Snack Packs & On the Go Snacks',
      'Sliced Deli Meat & Deli Cheese',
      'Meal Kits',
      'Party Trays',
    ];
  }
  
  get artisanSubcategoriesList() {
    return [
      'Specialty Cheese',
      'Specialty Meats',
    ];
  }

  get frozenSectionsList() {
    return [
      'Frozen Single Serve Meals',
      'Frozen Family Meals',
      'Ice Cream & Novelties',
      'Frozen Pizza',
      'Frozen Breakfast Food',
      'Frozen Appetizers & Snacks',
      'Frozen Desserts',
      'Frozen Fruit',
      'Frozen Potatoes',
      'Frozen Vegetables',
      'Frozen Bread & Dough',
    ];
  }

  get frozenMeatPoultrySeafoodList() {
    return [
      'Frozen Chicken',
      'Frozen Beef',
      'Frozen Fish & Seafood',
      'Frozen Turkey',
      'Frozen Meatless Alternatives',
    ];
  }

  get meatSeafoodList() {
    return [
      'Beef',
      'Chicken',
      'Fish & Seafood',
      'Pork',
      'Turkey',
      'Bacon',
      'Sausages',
      'Hot Dogs',
      'Sliced Deli Meat & Deli Cheese',
      'Meatless Alternatives',
    ];
  }

  get pantryBaseList() {
    return [
      'Bulk Pantry',
      'Pasta, Rice & Grains',
      'Sauces & Marinades',
      'Condiments & Salad Dressings',
      'Peanut Butter & Jelly',
      'Soups, Broth & Chili',
      'Cooking Oil & Vinegar',
      'Emergency Food'
    ];
  }

  get cannedSubcategoriesList() {
    return [
      'Canned Fruit',
      'Canned Vegetables',
      'Canned Meat',
      'Canned Tuna & Seafood',
      'Olives, Pickles & Peppers'
    ];
  }

  get spicesSubcategoriesList() {
    return [
      'Breadcrumbs & Seasoned Coatings',
      'Herbs, Rubs & Spices',
      'Salt & Pepper'
    ];
  }

  get bakingSubcategoriesList() {
    return [
      'Nuts',
      'Dried Fruit & Raisins',
      'Baking Chips & Cocoa',
      'Baking Kits & Mixes',
      'Baking Powder, Baking Soda & Yeast',
      'Condensed & Powdered Milk',
      'Extracts & Food Coloring',
      'Flours & Meals',
      'Frosting & Icing',
      'Gelatin & Pudding',
      'Marshmallows',
      'Pie Crusts & Filling',
      'Sprinkles, Candles & Decorations',
      'Syrups & Sauces'
    ];
  }

  get produceSubcategoriesList() {
    return [
      'Berries',
      'Citrus',
      'Organic Produce',
      'Fresh Fruit',
      'Fresh Vegetables',
      'Salad Mixes',
      'Fresh Juices',
      'Fresh Dressings & Dips',
      'Fresh Flowers & Plants'
    ];
  }

  get snackSubcategoriesList() {
    return [
      'Chips', 'Cookies', 'Crackers', 'Nuts', 'Toaster Pastries', 'Trail & Snack Mixes',
      'Pretzels', 'Salsa & Dips', 'Popcorn', 'Dried Fruit & Raisins', 'Jerky & Meat Sticks',
      'Snack Cakes', 'Gelatin & Pudding'
    ];
  }

  get snackVarietySubcategoriesList() {
    return [
      'Chip Multipacks', 'Cookie Multipacks', 'Cracker Multipacks', 'Popcorn & Pretzel Multipacks',
      'Granola & Cereal Bars', 'Fruit Snacks', 'Applesauce & Fruit Cups'
    ];
  }

  get candySubcategoriesList() {
    return [
      'Candy Variety Packs', 'Premium Candy', 'Chocolate Candy', 'Gum & Mints',
      'Gummy & Chewy Candy', 'Hard Candy'
    ];
  }
  
}

export default new GroceryPage();
