import { $, $$ } from '@wdio/globals';

class SecurePage {
  async getSubCategories() {
    const subCategories = await $$('//h2[@data-test="subcategory-title"]');
    return subCategories;
  }

  async getPageByTitle(title) {
    const page = await $(`//h1[@data-test="page-title" and text()="${title}"]`);
    await page.waitForDisplayed();
    return page;
  }

  async verifyPageTitle(title) {
    const page = await this.getPageByTitle(title);
    return page.isDisplayed();
  }

  async waitForPageToLoad() {
    const page = await $('body');
    await page.waitForDisplayed({ timeout: 5000 });
  }
  async verifyText (element, expectedText) {
    await expect(element).toHaveText(expectedText)
  }
  // Suggestion
  async navigateToSnacksMenu () {
    await browser.url('https://www.target.com/')
    await $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]').click()
    await $('//span[@class="styles_wrapper__YYaWP"][text()="Grocery"]').click()
    await $('//span[@class="styles_wrapper__YYaWP"][text()="Snacks"]').click()
    await $('//span[@class="styles_wrapper__YYaWP"][text()="Snack Variety Packs"]').click()
  }
  async clickOnAllSnacks() {
    const snacks = ['Chip Multipacks', 'Cookie Multipacks', 'Cracker Multipacks', 'Popcorn & Pretzel Multipacks','Granola & Cereal Bars', 'Fruit Snacks', 'Applesauce & Fruit Cups']
    for (const snack of snacks) {
      await this.navigateToSnacksMenu()
      await $(`//span[@class="styles_wrapper__YYaWP"][text()="${snack}"]`).click()
      const title = $('//h1[@data-test="page-title"]')
      await this.verifyText(title, snack)
    }
  }
  async clickOnSnack(snack) {
    await this.navigateToSnacksMenu()
    await $(`//span[@class="styles_wrapper__YYaWP"][text()="${snack}"]`).click()
    const title = $('//h1[@data-test="page-title"]')
    await this.verifyText(title, snack)
  }
}

export default new SecurePage();
