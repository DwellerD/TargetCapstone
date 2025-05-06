import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const frozenSections = [
  {
    name: 'Frozen Single Serve Meals',
    click: () => GroceryPage.frozenSingleServeMeals,
    secure: () => SecurePage.frozenSingleServeMeals,
  },
  {
    name: 'Frozen Family Meals',
    click: () => GroceryPage.frozenFamilyMeals,
    secure: () => SecurePage.frozenFamilyMeals,
  },
  {
    name: 'Ice Cream & Novelties',
    click: () => GroceryPage.iceCreamNovelties,
    secure: () => SecurePage.iceCreamAndNovelties,
  },
  {
    name: 'Frozen Pizza',
    click: () => GroceryPage.frozenPizza,
    secure: () => SecurePage.frozenPizza,
  },
  {
    name: 'Frozen Breakfast Food',
    click: () => GroceryPage.frozenBreakfastFood,
    secure: () => SecurePage.frozenBreakfastFood,
  },
  {
    name: 'Frozen Appetizers & Snacks',
    click: () => GroceryPage.frozenAppetizersSnacks,
    secure: () => SecurePage.frozenAppetizersAndSnacks,
  },
  {
    name: 'Frozen Desserts',
    click: () => GroceryPage.frozenDesserts,
    secure: () => SecurePage.frozenDesserts,
  },
  {
    name: 'Frozen Fruit',
    click: () => GroceryPage.frozenFruit,
    secure: () => SecurePage.frozenFruit,
  },
  {
    name: 'Frozen Potatoes',
    click: () => GroceryPage.frozenPotatoes,
    secure: () => SecurePage.frozenPotatoes,
  },
  {
    name: 'Frozen Vegetables',
    click: () => GroceryPage.frozenVegetables,
    secure: () => SecurePage.frozenVegetables,
  },
  {
    name: 'Frozen Bread & Dough',
    click: () => GroceryPage.frozenBreadDough,
    secure: () => SecurePage.frozenBreadAndDough,
  },
];

describe('Frozen Foods Secure Page Tests (No Meat/Poultry)', () => {
  frozenSections.forEach(({ name, click, secure }) => {
    it(`should verify ${name}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await GroceryPage.categoriesButton.waitForClickable({ timeout: 10000 });
      await GroceryPage.categoriesButton.click();
      await browser.pause(1000);

      await GroceryPage.groceryMain.waitForClickable({ timeout: 10000 });
      await GroceryPage.groceryMain.click();
      await browser.pause(1000);

      await GroceryPage.frozenFoods.scrollIntoView();
      await GroceryPage.frozenFoods.waitForClickable({ timeout: 10000 });
      await GroceryPage.frozenFoods.click();
      await browser.pause(1000);

      const sectionElement = click();
      await sectionElement.scrollIntoView();
      await sectionElement.waitForClickable({ timeout: 10000 });
      await sectionElement.click();
      await browser.pause(1000);

      const secureTitle = secure();
      await secureTitle.waitForDisplayed({ timeout: 15000 });
    });
  });
});

// Cannot read properties of undefined (reading 'waitForDisplayed')