import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const pantryBaseSubcategories = GroceryPage.pantryBaseList.map(name => ({
  name,
  secureTitle: name
}));

const cannedSubcategories = GroceryPage.cannedSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const spicesSubcategories = GroceryPage.spicesSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const bakingSubcategories = GroceryPage.bakingSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const navigateToSubcategory = async (subcategoryName) => {
  await browser.reloadSession();
  await TargetPage.open();
  // await browser.pause(1000);
  await GroceryPage.categoriesButton.click();
  // await browser.pause(1000);
  await GroceryPage.getItemByText('Grocery').click();
  // await browser.pause(1000);
  await GroceryPage.getItemByText('Pantry').click();
  // await browser.pause(1000);
  await GroceryPage.getItemByText(subcategoryName).click();
  // await browser.pause(1000);
};

describe('Pantry Base Subcategory Secure Pages', () => {
  pantryBaseSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify Pantry subcategory: ${name}`, async () => {
      await navigateToSubcategory(name);
      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
    });
  });
});

describe('Pantry → Canned & Packaged Subcategories', () => {
  cannedSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify Canned section: ${name}`, async () => {
      await navigateToSubcategory('Canned & Packaged Foods');
      await GroceryPage.getItemByText(name).click();
      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
    });
  });
});

describe('Pantry → Spices & Seasonings Subcategories', () => {
  spicesSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify Spices section: ${name}`, async () => {
      await navigateToSubcategory('Spices & Seasonings');
      await GroceryPage.getItemByText(name).click();
      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
    });
  });
});

describe('Pantry → Baking Staples Subcategories', () => {
  bakingSubcategories.forEach(({ name, secureTitle }) => {
    it(`should verify Baking section: ${name}`, async () => {
      await navigateToSubcategory('Baking Staples');
      await GroceryPage.getItemByText(name).click();
      await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
    });
  });
});
