import { $ } from '@wdio/globals';
import TargetPage from './targetPage.js';

class GroceryPage {
  get categoriesButton() {
    return $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]');
  }

  getItemByText(name) {
    return $(`//span[@class="styles_wrapper__YYaWP"][text()="${name}"]`);
  }

  async clickAndValidateSubcategory(name) {
    const item = await this.getItemByText(name);
    await item.waitForExist({ timeout: 10000 });
    await item.waitForClickable({ timeout: 10000 });
    await item.scrollIntoView();
    await item.click();
    const title = await $('h1[data-test="page-title"]');
    await expect(title).toHaveText(name);
  }

  async openGrocerySection(name) {
    await TargetPage.open();
    await this.categoriesButton.waitForClickable({ timeout: 10000 });
    await this.categoriesButton.click();
    const grocery = await $('[data-id="5xt1a"]');
    await grocery.waitForClickable({ timeout: 10000 });
    await grocery.click();
    const section = await this.getItemByText(name);
    await section.waitForClickable({ timeout: 10000 });
    await section.click();
  }

  async openAlcoholSection(type) {
    await TargetPage.open();
    await this.categoriesButton.waitForClickable({ timeout: 10000 });
    await this.categoriesButton.click();
    const grocery = await $('[data-id="5xt1a"]');
    await grocery.waitForClickable({ timeout: 10000 });
    await grocery.click();
    const beverages = await this.getItemByText('Beverages');
    await beverages.waitForClickable({ timeout: 10000 });
    await beverages.click();
    const group = await this.getItemByText('Wine, Beer & Liquor');
    await group.waitForClickable({ timeout: 10000 });
    await group.click();
    const item = await this.getItemByText(type);
    await item.waitForClickable({ timeout: 10000 });
    await item.click();
  }

  async openBakerySection() { await this.openGrocerySection('Bakery & Bread'); }
  async openCandySection() { await this.openGrocerySection('Candy'); }
  async openFrozenSection() { await this.openGrocerySection('Frozen Foods'); }
  async openSnacksSection() { await this.openGrocerySection('Snacks'); }
  async openProduceSection() { await this.openGrocerySection('Produce'); }
  async openMeatSeafoodSection() { await this.openGrocerySection('Meat & Seafood'); }
  async openDeliSection() { await this.openGrocerySection('Deli'); }
  async openDairySection() { await this.openGrocerySection('Dairy'); }
  async openBreakfastSection() { await this.openGrocerySection('Breakfast & Cereal'); }
  async openPantrySection() { await this.openGrocerySection('Pantry'); }
  async openWineSection() { await this.openAlcoholSection('Wine'); }
  async openBeerSection() { await this.openAlcoholSection('Beer'); }
  async openLiquorSection() { await this.openAlcoholSection('Liquor'); }
  async openGroceryDealsSection() { await this.openGrocerySection('Grocery Deals'); }
  async openStarbucksSection() { await this.openGrocerySection('Starbucks'); }
  async openEatWellSection() { await this.openGrocerySection('Eat Well Your Way'); }
  async openMealIdeasSection() { await this.openGrocerySection('Meal Ideas'); }
  async openSnackPacksSection() { await this.openGrocerySection('Snack Packs & On the Go Snacks'); }
  async openFoodGiftsSection() { await this.openGrocerySection('Food Gifts'); }
  async openFreshFlowersSection() { await this.openGrocerySection('Fresh Flowers & Plants'); }

  async validateCandySubcategories() { for (const n of this.candySubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateSnackSubcategories() { for (const n of this.snackSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateBakerySubcategories() { for (const n of this.bakerySubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateFrozenSubcategories() { for (const n of this.frozenSectionsList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateFrozenMeatSubcategories() { for (const n of this.frozenMeatPoultrySeafoodList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateMeatSeafoodSubcategories() { for (const n of this.meatSeafoodList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateProduceSubcategories() { for (const n of this.produceSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateBreakfastSubcategories() { for (const n of this.breakfastSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validatePantryBaseSubcategories() { for (const n of this.pantryBaseList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateCannedSubcategories() { for (const n of this.cannedSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateSpicesSubcategories() { for (const n of this.spicesSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateBakingSubcategories() { for (const n of this.bakingSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateDairySubcategories() { for (const n of this.dairySubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateDeliSubcategories() { for (const n of this.deliSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }
  async validateArtisanSubcategories() { for (const n of this.artisanSubcategoriesList) await this.clickAndValidateSubcategory(n), await browser.back(); }

  get candySubcategoriesList() { return ['Candy Variety Packs','Premium Candy','Chocolate Candy','Gum & Mints','Gummy & Chewy Candy','Hard Candy']; }
  get snackSubcategoriesList() { return ['Chips','Cookies','Crackers','Nuts','Toaster Pastries','Trail & Snack Mixes','Pretzels','Salsa & Dips','Popcorn','Dried Fruit & Raisins','Jerky & Meat Sticks','Snack Cakes','Gelatin & Pudding']; }
  get bakerySubcategoriesList() { return ['Breads','Donuts & Pastries','Cakes, Cookies & Pies','Bagels & Muffins','Tortillas, Pitas & Wraps','Refrigerated Doughs','Rolls & Buns','Pizza Crusts']; }
  get frozenSectionsList() { return ['Frozen Single Serve Meals','Frozen Family Meals','Ice Cream & Novelties','Frozen Pizza','Frozen Breakfast Food','Frozen Appetizers & Snacks','Frozen Desserts','Frozen Fruit','Frozen Potatoes','Frozen Vegetables','Frozen Bread & Dough']; }
  get frozenMeatPoultrySeafoodList() { return ['Frozen Chicken','Frozen Beef','Frozen Fish & Seafood','Frozen Turkey','Frozen Meatless Alternatives']; }
  get meatSeafoodList() { return ['Beef','Chicken','Fish & Seafood','Pork','Turkey','Bacon','Sausages','Hot Dogs','Sliced Deli Meat & Deli Cheese','Meatless Alternatives']; }
  get produceSubcategoriesList() { return ['Berries','Citrus','Organic Produce','Fresh Fruit','Fresh Vegetables','Salad Mixes','Fresh Juices','Fresh Dressings & Dips','Fresh Flowers & Plants']; }
  get breakfastSubcategoriesList() { return ['Organic Breakfast & Cereal','Cereal & Granola','Oatmeal','Pancake Mixes, Waffle Mixes & Syrup','Toaster Pastries','Granola & Cereal Bars']; }
  get pantryBaseList() { return ['Bulk Pantry','Pasta, Rice & Grains','Sauces & Marinades','Condiments & Salad Dressings','Peanut Butter & Jelly','Soups, Broth & Chili','Cooking Oil & Vinegar','Emergency Food']; }
  get cannedSubcategoriesList() { return ['Canned Fruit','Canned Vegetables','Canned Meat','Canned Tuna & Seafood','Olives, Pickles & Peppers']; }
  get spicesSubcategoriesList() { return ['Breadcrumbs & Seasoned Coatings','Herbs, Rubs & Spices','Salt & Pepper']; }
  get bakingSubcategoriesList() { return ['Nuts','Dried Fruit & Raisins','Baking Chips & Cocoa','Baking Kits & Mixes','Baking Powder, Baking Soda & Yeast','Condensed & Powdered Milk','Extracts & Food Coloring','Flours & Meals','Frosting & Icing','Gelatin & Pudding','Marshmallows','Pie Crusts & Filling','Sprinkles, Candles & Decorations','Syrups & Sauces']; }
  get dairySubcategoriesList() { return ['Cheese','Milk','Eggs','Yogurt','Butter & Margarine','Cottage Cheese','Cream & Whipped Toppings','Milk Substitutes','Cream Cheese','Refrigerated Doughs','Sour Cream & Dips','Coffee Creamers']; }
  get deliSubcategoriesList() { return ['Prepared Salads & Sandwiches','Fresh Dips, Salsas & Hummus','Packaged Lunch Meat','Prepared Meals & Sides','Fresh Soups','Snack Packs & On the Go Snacks','Sliced Deli Meat & Deli Cheese','Meal Kits','Party Trays']; }
  get artisanSubcategoriesList() { return ['Specialty Cheese','Specialty Meats']; }
}

export default new GroceryPage();