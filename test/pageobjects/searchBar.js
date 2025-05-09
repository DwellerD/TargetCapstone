import { $ } from '@wdio/globals';

class SearchBar {
  get searchInput() {
    return $('#search');
  }

  get trendingSearches() {
    return $$('.sc-6e2eb6e3-1.hgtqQR');
  }

  get clearInputButton() {
    return $$('.sc-d6ee3fa-4.hsicep')[0];
  }

  get clearRecentSearchesButton() {
    return $('#search-clear-history');
  }

  get magnifyingGlassButton() {
    return $('button[data-test="@web/Search/SearchButton"]');
  }

  get noResultsMessage() {
    return $('div=No results found');
  }

  get searchFailureHeading() {
    return $('h2[data-test="nullLowRecoveryKeyword"]');
  }

  async openAndClickSearch() {
    await this.searchInput.waitForClickable({ timeout: 5000 });
    await this.searchInput.click();
  }

  async waitForTrendingItems() {
    await browser.waitUntil(
      async () => (await this.trendingSearches.length) > 0,
      {
        timeout: 5000,
        timeoutMsg: 'Trending items did not appear within 5 seconds',
      }
    );
    return Array.from(this.trendingSearches);
  }

  async waitForTrendingItem(index) {
    await browser.waitUntil(
      async () => (await this.trendingSearches).length > index,
      {
        timeout: 5000,
        timeoutMsg: `Trending item at index ${index} did not appear in time`,
      }
    );
  }

  async getAndClickTrendingItem(index) {
    await this.waitForTrendingItem(index);
    const items = await this.trendingSearches;
    const item = items[index];
    const term = await item.getText();
    await item.click();
    return term;
  }

  async clearSearch() {
    await this.searchInput.waitForDisplayed({ timeout: 3000 });
    await this.searchInput.click();

    await browser.waitUntil(
      async () => (await this.clearRecentSearchesButton.isDisplayed()),
      {
        timeout: 3000,
        timeoutMsg: 'Clear recent searches button not visible',
      }
    );

    await this.clearRecentSearchesButton.waitForClickable({ timeout: 3000 });
    await this.clearRecentSearchesButton.click();
  }

  async typeAndClearWithX(term) {
    await this.searchInput.waitForDisplayed({ timeout: 3000 });
    await this.searchInput.setValue(term);

    const xButton = this.clearInputButton;
    await xButton.waitForClickable({ timeout: 3000 });
    await xButton.click();

    const value = await this.searchInput.getValue();
    if (value !== '') {
      throw new Error(`Input not cleared. Current value: "${value}"`);
    }
  }

  async searchUsingMagnifyingGlass(term) {
    await this.searchInput.waitForDisplayed({ timeout: 3000 });
    await this.searchInput.setValue(term);
    await this.magnifyingGlassButton.waitForClickable({ timeout: 3000 });
    await this.magnifyingGlassButton.click();
  }

  async validateNoResults() {
    const message = await this.noResultsMessage;
    await message.waitForDisplayed({ timeout: 3000 });
    const text = await message.getText();
    if (!text.toLowerCase().includes('no results')) {
      throw new Error(`Expected a no-results message but got: "${text}"`);
    }
  }

  async validateUrlContains(term) {
    const normalized = encodeURIComponent(term.toLowerCase().trim().replace(/\s+/g, '+'));

    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.toLowerCase().includes(normalized);
      },
      {
        timeout: 5000,
        timeoutMsg: `URL did not update to include "${normalized}"`,
      }
    );

    const finalUrl = await browser.getUrl();
    if (!finalUrl.toLowerCase().includes(normalized)) {
      throw new Error(`URL "${finalUrl}" does not include "${normalized}"`);
    }
  }

  async expectSearchFailureMessageVisible() {
    const elements = await $$('h2[data-test="nullLowRecoveryKeyword"]');
    if (elements.length === 0) {
      throw new Error(`Search failure message not found`);
    }

    const isDisplayed = await elements[0].isDisplayed();
    if (!isDisplayed) {
      throw new Error(`Search failure message exists but is not visible`);
    }
  }

  async searchAndValidate(term) {
    await this.searchUsingMagnifyingGlass(term);

    try {
      await this.validateNoResults();
      console.log(`[Search Result] "${term}" → No Results Found`);
    } catch {
      try {
        await this.expectSearchFailureMessageVisible();
        console.log(`[Search Result] "${term}" → Search Failure Message`);
      } catch {
        await this.validateUrlContains(term);
        console.log(`[Search Result] "${term}" → Valid Result`);
      }
    }
  }
}

export default new SearchBar();
