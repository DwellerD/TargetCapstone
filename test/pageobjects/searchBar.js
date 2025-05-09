import { $ } from '@wdio/globals';

class SearchBar {
  get searchInput() {
    return $('#search');
  }

  get trendingSearches() {
    return $$('.sc-6e2eb6e3-1.hgtqQR');
  }

  get searchResultsHeader() {
    return $('.h-text-bs.h-display-flex.h-flex-align-center.h-text-grayDark.h-margin-l-x2');
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

  async openAndClickSearch() {
    await this.searchInput.waitForClickable({ timeout: 10000 });
    await this.searchInput.click();
  }

  async waitForTrendingItems() {
    await browser.waitUntil(
      async () => (await this.trendingSearches.length) > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Trending items did not appear within 10 seconds',
      }
    );
    return Array.from(this.trendingSearches);
  }

  async getTrendingSearches() {
    await this.openAndClickSearch();
    return this.waitForTrendingItems();
  }

  async clickTrendingItemByIndex(index) {
    const updatedTrending = await this.waitForTrendingItems();
    const element = updatedTrending[index];
    const term = await element.getText();
    await element.click();
    return term;
  }

  async validateHeaderContains(term) {
    const header = await this.searchResultsHeader;
    await header.waitForDisplayed({ timeout: 10000 });
    const text = await header.getText();
    const cleaned = text.toLowerCase().replace(/for\s+“|”/g, '').trim();
    const normalized = term.toLowerCase().trim();
    if (!cleaned.includes(normalized)) {
      throw new Error(`Header "${text}" does not include "${term}"`);
    }
  }

  async validateUrlContains(term) {
    const currentUrl = await browser.getUrl();
    const normalized = term.toLowerCase().replace(/\s+/g, '+');
    if (!currentUrl.toLowerCase().includes(normalized)) {
      throw new Error(`URL "${currentUrl}" does not include "${normalized}"`);
    }
  }

  async validateNoResults() {
    const message = await this.noResultsMessage;
    await message.waitForDisplayed({ timeout: 10000 });
    const text = await message.getText();
    if (!text.toLowerCase().includes('no results')) {
      throw new Error(`Expected a no-results message but got: "${text}"`);
    }
  }

  async clearSearch() {
    await this.searchInput.click();
    await this.clearInputButton.click();
    await this.clearRecentSearchesButton.click();
  }
}

export default new SearchBar();
