import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('Search Bar - Trending Items Verification', () => {
  it('should search and verify result header and URL for each trending item', async () => {
    await TargetPage.open();
    // await browser.pause(1000);

    await SearchBar.openAndClickSearch();
    // await browser.pause(1000);

    const trendingItems = await SearchBar.waitForTrendingItems();

    for (let i = 0; i < trendingItems.length; i++) {
      const updatedTrending = await SearchBar.trendingSearches;
      const element = updatedTrending[i];
      const term = await element.getText();

      await element.click();
      // await browser.pause(2000);

      await SearchBar.validateHeaderContains(term);
      await SearchBar.validateUrlContains(term);

      await SearchBar.clearSearch();
      // await browser.pause(1000);
      await SearchBar.openAndClickSearch();
      // await browser.pause(500);
    }
  });
});
