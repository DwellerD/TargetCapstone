import { $ } from '@wdio/globals';

class SearchBar {
  get searchInput() { return $('#search'); }

  get clearInputButton() { return $$('.sc-d6ee3fa-4.hsicep')[0]; }

  get trendingSearches() { return $$('.sc-6e2eb6e3-1.hgtqQR'); }

  get searchResultsHeader() {
    return $('.h-text-bs.h-display-flex.h-flex-align-center.h-text-grayDark.h-margin-l-x2');
  }

  get clearRecentSearchesButton() { return $('#search-clear-history'); }

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
    return await this.trendingSearches;
  }

  async validateHeaderContains(term) {
    const header = await this.searchResultsHeader;
    await header.waitForDisplayed({ timeout: 10000 });
    const text = await header.getText();
    if (!text.toLowerCase().includes(term.toLowerCase())) {
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

  async searchUsingMagnifyingGlass(term) {
    await this.searchInput.waitForClickable({ timeout: 10000 });
    await this.searchInput.setValue(term);
    const button = this.magnifyingGlassButton;
    await button.waitForExist({ timeout: 10000 });
    await button.scrollIntoView();
    await button.waitForClickable({ timeout: 10000 });
    await button.click();
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
    await this.searchInput.waitForClickable({ timeout: 10000 });
    await this.searchInput.click();
    await this.clearInputButton.waitForClickable({ timeout: 10000 });
    await this.clearInputButton.click();
    await this.clearRecentSearchesButton.waitForClickable({ timeout: 10000 });
    await this.clearRecentSearchesButton.click();
  }
}

export default new SearchBar();
