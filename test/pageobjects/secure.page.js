import { $ } from '@wdio/globals';

class SecurePage {
  getItemByText(name) {
    return $(`//span[@class="styles_wrapper__YYaWP" and text()="${name}"]`);
  }

  async getPageTitleElement(title) {
    const el = await $(`//h1[@data-test="page-title" and text()="${title}"]`);
    await el.waitForDisplayed({ timeout: 15000 });
    return el;
  }

  async expectPageTitle(expected) {
    const el = await this.getPageTitleElement(expected);
    await expect(el).toHaveText(expected);
  }

  async openCategoryPath(path = []) {
    await browser.url('https://www.target.com/');
    const categories = await $('a[data-test="@web/Header/MainMenuLink"][aria-label="Categories"]');
    await categories.waitForExist({ timeout: 10000 });
    await categories.waitForClickable({ timeout: 10000 });
    await categories.click();

    for (const step of path) {
      const el = await this.getItemByText(step);
      await el.waitForExist({ timeout: 10000 });
      await el.waitForClickable({ timeout: 10000 });
      await el.scrollIntoView();
      await el.click();
    }
  }

  async clickAndVerifySubcategoryPath(path = [], subcategory) {
    await this.openCategoryPath(path);
    const item = await this.getItemByText(subcategory);
    await item.waitForExist({ timeout: 10000 });
    await item.waitForClickable({ timeout: 10000 });
    await item.scrollIntoView();
    await item.click();
    await this.expectPageTitle(subcategory);
  }

  async verifyAllSubcategories(path = [], list = []) {
    for (const sub of list) {
      await this.clickAndVerifySubcategoryPath(path, sub);
    }
  }

  async verifyNestedSubcategories(path = [], nested, list = []) {
    await this.openCategoryPath(path);
    const nestedGroup = await this.getItemByText(nested);
    await nestedGroup.waitForExist({ timeout: 10000 });
    await nestedGroup.waitForClickable({ timeout: 10000 });
    await nestedGroup.scrollIntoView();
    await nestedGroup.click();

    for (const sub of list) {
      const item = await this.getItemByText(sub);
      await item.waitForExist({ timeout: 10000 });
      await item.waitForClickable({ timeout: 10000 });
      await item.scrollIntoView();
      await item.click();
      await this.expectPageTitle(sub);

      await this.openCategoryPath(path);
      const nestedAgain = await this.getItemByText(nested);
      await nestedAgain.waitForExist({ timeout: 10000 });
      await nestedAgain.waitForClickable({ timeout: 10000 });
      await nestedAgain.scrollIntoView();
      await nestedAgain.click();
    }
  }
}

export default new SecurePage();
