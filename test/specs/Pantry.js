import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const pantrySubcategories = [
  { name: 'Bulk Pantry', click: () => GroceryPage.bulkPantry, secure: () => SecurePage.bulkPantry },
  { name: 'All Pantry', click: () => GroceryPage.pantry, secure: () => SecurePage.allPantry },
  { name: 'Pasta, Rice & Grains', click: () => GroceryPage.pastaRiceGrains, secure: () => SecurePage.pastaRiceGrains },
  { name: 'Canned & Packaged Foods', click: () => GroceryPage.cannedPackagedFoods, secure: () => SecurePage.cannedPackagedFoods },
  { name: 'Sauces & Marinades', click: () => GroceryPage.saucesMarinades, secure: () => SecurePage.saucesMarinades },
  { name: 'Condiments & Salad Dressings', click: () => GroceryPage.condimentsDressings, secure: () => SecurePage.condimentsSaladDressings },
  { name: 'Peanut Butter & Jelly', click: () => GroceryPage.peanutButterJelly, secure: () => SecurePage.peanutButterJelly },
  { name: 'Soups, Broth & Chili', click: () => GroceryPage.soupsBrothChili, secure: () => SecurePage.soupsBrothChili },
  { name: 'Spices & Seasonings', click: () => GroceryPage.spicesSeasonings, secure: () => SecurePage.spicesSeasonings },
  { name: 'Baking Staples', click: () => GroceryPage.bakingStaples, secure: () => SecurePage.bakingStaples },
  { name: 'Cooking Oil & Vinegar', click: () => GroceryPage.cookingOilVinegar, secure: () => SecurePage.cookingOilVinegar },
  { name: 'Sugar & Sweeteners', click: () => GroceryPage.sugarSweeteners, secure: () => SecurePage.sugarSweeteners },
  { name: 'Emergency Food', click: () => GroceryPage.emergencyFood, secure: () => SecurePage.emergencyFood }
];

describe('Pantry Subcategory Secure Pages', () => {
  pantrySubcategories.forEach(({ name, click, secure }) => {
    it(`should verify Pantry subcategory: ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await GroceryPage.categoriesButton.click();
      await GroceryPage.groceryMain.click();
      await GroceryPage.pantry.click();
      await click().waitForClickable({ timeout: 10000 });
      await click().click();
      await secure().waitForDisplayed({ timeout: 15000 });
    });
  });
});
