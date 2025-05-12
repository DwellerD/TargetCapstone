import { $ } from '@wdio/globals';
import TargetPage from './targetPage.js';

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
    await TargetPage.open();
    await this.searchInput.waitForClickable({ timeout: 5000 });
    await this.searchInput.click();
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
    await item.waitForDisplayed({ timeout: 3000 });
    await item.waitForClickable({ timeout: 3000 });
    const term = await item.getText();
    await item.click();
    return term;
  }

  async clearSearch() {
    await this.searchInput.waitForDisplayed({ timeout: 3000 });
    await this.searchInput.click();

    const xButton = this.clearInputButton;
    if (await xButton.isDisplayed()) {
      await xButton.waitForClickable({ timeout: 3000 });
      await xButton.click();
    }

    await browser.waitUntil(
      async () =>
        (await this.clearRecentSearchesButton.isDisplayed()) &&
        (await this.clearRecentSearchesButton.isClickable()),
      {
        timeout: 5000,
        timeoutMsg: 'Clear recent searches button not ready',
      }
    );

    await this.clearRecentSearchesButton.click();
  }

  async validateUrlContains(term) {
    const normalized = term.toLowerCase().trim().replace(/\s+/g, '+');
    await browser.waitUntil(
      async () => (await browser.getUrl()).toLowerCase().includes(normalized),
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

  async validateNoResultsOrFallback() {
    try {
      await this.noResultsMessage.waitForDisplayed({ timeout: 3000 });
    } catch {
      const fallback = await this.searchFailureHeading;
      if (!(await fallback.isDisplayed())) {
        throw new Error('No fallback message or no-results message shown');
      }
    }
  }

  async validateAllTrendingItems() {
    for (let i = 0; i < 10; i++) {
      await this.openAndClickSearch();
      const term = await this.getAndClickTrendingItem(i);
      await this.validateUrlContains(term);
      await this.clearSearch();
    }
  }

  async validateSecurityInputs() {
    const dangerousChars = ['<', '>', '{', '}', '"', "'", '`', '\\', '|', ';'];
    for (const char of dangerousChars) {
      await this.openAndClickSearch();
      await this.searchInput.setValue(char);
      await this.magnifyingGlassButton.waitForClickable({ timeout: 3000 });
      await this.magnifyingGlassButton.click();
      await this.validateNoResultsOrFallback();
      await this.clearSearch();
    }
  }
  
}

export default new SearchBar();
