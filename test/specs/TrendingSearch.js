import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('Search Bar - Trending Items Verification', () => {
  it('should search and verify result header and URL for each trending item', async () => {
    await TargetPage.open();
    await browser.pause(1000);

    await SearchBar.searchInput.waitForClickable({ timeout: 10000 });
    await SearchBar.searchInput.click();
    await browser.pause(1000);

    await browser.waitUntil(
      async () => (await SearchBar.trendingSearches.length) > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Trending items did not appear within 10 seconds',
      }
    );

    const trendingItems = await SearchBar.trendingSearches;

    for (let i = 0; i < trendingItems.length; i++) {
      const updatedTrendingItems = await SearchBar.trendingSearches; // refresh each time
      const termElement = updatedTrendingItems[i];
      const searchTerm = await termElement.getText();

      await termElement.click();
      await browser.pause(2000);

      const header = await SearchBar.searchResultsHeader;
      await header.waitForDisplayed({ timeout: 10000 });

      const headerText = await header.getText();
      expect(headerText.toLowerCase()).toContain(searchTerm.toLowerCase());

      const currentUrl = await browser.getUrl();
      const normalizedTerm = searchTerm.toLowerCase().replace(/\s+/g, '+');
      expect(currentUrl.toLowerCase()).toContain(normalizedTerm);

      await SearchBar.searchInput.click();
      await SearchBar.clearInputButton.click();
      await SearchBar.clearRecentSearchesButton.click();
      await browser.pause(1000); // short delay before next iteration

      await SearchBar.searchInput.click();
      await browser.pause(500);
    }
  });
});
