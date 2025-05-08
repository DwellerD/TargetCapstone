import { $, $$ } from '@wdio/globals';

class SecurePage {
  async getPageByTitle(title) {
    const page = await $(`//h1[@data-test="page-title" and text()="${title}"]`);
    await page.waitForDisplayed({ timeout: 15000 });
    return page;
  }

  async verifyText(element, expectedText) {
    await expect(element).toHaveText(expectedText);
  }

  async clickAndVerifySubcategory(mainGroup, subcategory) {
    await this.navigateToSubmenu(mainGroup);
    const element = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${subcategory}"]`);
    await element.waitForExist({ timeout: 10000 });
    await element.scrollIntoView();
    await element.click();
    const title = await this.getPageByTitle(subcategory);
    await this.verifyText(title, subcategory);
  }

  async verifyAllSubcategoriesInGroup(mainGroup, subcategoryList) {
    for (const sub of subcategoryList) {
      await this.clickAndVerifySubcategory(mainGroup, sub);
    }
  }

  async verifyAllSubcategoriesInNestedGroup(mainGroup, nestedGroup, subcategoryList) {
    await this.navigateToSubmenu(mainGroup);
    const nestedElement = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${nestedGroup}"]`);
    await nestedElement.waitForExist({ timeout: 10000 });
    await nestedElement.scrollIntoView();
    await nestedElement.click();

    for (const sub of subcategoryList) {
      const element = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${sub}"]`);
      await element.waitForExist({ timeout: 10000 });
      await element.scrollIntoView();
      await element.click();
      const title = await this.getPageByTitle(sub);
      await this.verifyText(title, sub);

      await this.navigateToSubmenu(mainGroup);
      await nestedElement.waitForExist({ timeout: 10000 });
      await nestedElement.scrollIntoView();
      await nestedElement.click();
    }
  }

  async navigateToSubmenu(groupName) {
    await browser.url('https://www.target.com/');
    const categories = await $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]');
    await categories.waitForExist({ timeout: 10000 });
    await categories.click();

    const grocery = await $('//span[@class="styles_wrapper__YYaWP"][text()="Grocery"]');
    await grocery.waitForExist({ timeout: 10000 });
    await grocery.scrollIntoView();
    await grocery.click();

    const group = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${groupName}"]`);
    await group.waitForExist({ timeout: 10000 });
    await group.scrollIntoView();
    await group.click();
  }

  async navigateToFrozenMeatSubmenu() {
    await this.navigateToSubmenu('Frozen Foods');
    const meatMenu = await $('//span[@class="styles_wrapper__YYaWP"][text()="Frozen Meat, Poultry & Seafood"]');
    await meatMenu.waitForExist({ timeout: 10000 });
    await meatMenu.scrollIntoView();
    await meatMenu.click();
  }

  async clickAndVerifyFrozenMeatSubcategory(subcategory) {
    await this.navigateToFrozenMeatSubmenu();
    const item = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${subcategory}"]`);
    await item.waitForExist({ timeout: 10000 });
    await item.scrollIntoView();
    await item.click();
    const title = await this.getPageByTitle(subcategory);
    await this.verifyText(title, subcategory);
  }

  async clickAlcoholMenu(entryPoint) {
    await browser.url('https://www.target.com/');
    const categories = await $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]');
    await categories.waitForExist({ timeout: 10000 });
    await categories.click();

    const grocery = await $('//span[@class="styles_wrapper__YYaWP"][text()="Grocery"]');
    await grocery.waitForExist({ timeout: 10000 });
    await grocery.scrollIntoView();
    await grocery.click();

    const beverages = await $('//span[@class="styles_wrapper__YYaWP"][text()="Beverages"]');
    await beverages.waitForExist({ timeout: 10000 });
    await beverages.scrollIntoView();
    await beverages.click();

    const wineBeerLiquor = await $('//span[@class="styles_wrapper__YYaWP"][text()="Wine, Beer & Liquor"]');
    await wineBeerLiquor.waitForExist({ timeout: 10000 });
    await wineBeerLiquor.scrollIntoView();
    await wineBeerLiquor.click();

    const alcoholEntry = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${entryPoint}"]`);
    await alcoholEntry.waitForExist({ timeout: 10000 });
    await alcoholEntry.scrollIntoView();
    await alcoholEntry.click();
  }

  async verifyAlcoholSubcategories(entryPoint, subcategoryList) {
    for (const sub of subcategoryList) {
      await this.clickAlcoholMenu(entryPoint);
      const el = await $(`//span[@class="styles_wrapper__YYaWP"][text()="${sub}"]`);
      await el.waitForExist({ timeout: 10000 });
      await el.scrollIntoView();
      await el.click();
      const title = await this.getPageByTitle(sub);
      await this.verifyText(title, sub);
    }
  }
}

export default new SecurePage();
