import TargetPage from '../pageobjects/targetPage.js';
import GroceryPage from '../pageobjects/GroceryPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const snackTests = GroceryPage.snackSubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const snackVarietyTests = GroceryPage.snackVarietySubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

const candyTests = GroceryPage.candySubcategoriesList.map(name => ({
  name,
  secureTitle: name
}));

// describe('Snacks Subcategory Secure Pages', () => {
//   snackTests.forEach(({ name, secureTitle }) => {
//     it(`should verify ${name}`, async () => {
//       await browser.reloadSession();
//       await TargetPage.open();
//       // await browser.pause(1000);

//       await GroceryPage.categoriesButton.click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText('Grocery').click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText('Snacks').click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText(name).click();
//       // await browser.pause(1000);

//       await SecurePage.getPageByitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
//       // await browser.pause(500);
//     });
//   });
// });

describe('Snack Variety Subcategory Secure Pages', () => {

  it ('should verify Chip Multipacks link goes to page', async () => {
    await SecurePage.clickOnSnack('Chip Multipacks')
  })
  
  it ('should verify snack link goes to page', async () => {
    await SecurePage.clickOnAllSnacks()
  })
  // snackVarietyTests.forEach(({ name, secureTitle }) => {
  //   it(`should verify ${name}`, async () => {
  //     await browser.reloadSession();
  //     await TargetPage.open();
  //     // await browser.pause(1000);

  //     await GroceryPage.categoriesButton.click();
  //     // await browser.pause(1000);

  //     await GroceryPage.getItemByText('Grocery').click();
  //     // await browser.pause(1000);

  //     await GroceryPage.getItemByText('Snacks').click();
  //     // await browser.pause(1000);

  //     await GroceryPage.getItemByText('Snack Variety').click();
  //     // await browser.pause(1000);

  //     await GroceryPage.getItemByText(name).click();
  //     // await browser.pause(1000);

  //     await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
  //     // await browser.pause(500);
  //     const element = $('//h1[@data-test="page-title"]')
  //     await SecurePage.verifyText(element, secureTitle)
});


// describe('Candy Subcategory Secure Pages', () => {
//   candyTests.forEach(({ name, secureTitle }) => {
//     it(`should verify ${name}`, async () => {
//       await browser.reloadSession();
//       await TargetPage.open();
//       // await browser.pause(1000);

//       await GroceryPage.categoriesButton.click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText('Grocery').click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText('Snacks').click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText('Candy').click();
//       // await browser.pause(1000);

//       await GroceryPage.getItemByText(name).click();
//       // await browser.pause(1000);

//       await SecurePage.getPageByTitle(secureTitle).then(el => el.waitForDisplayed({ timeout: 15000 }));
//       // await browser.pause(500);
//     });
//   });
// });
