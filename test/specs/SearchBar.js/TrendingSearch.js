import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Trending Items Verification', () => {
  it('should search and verify result header and URL for each trending item', async () => {
    await TargetPage.open();
    await SearchBar.openAndClickSearch();

    const trendingItems = await SearchBar.waitForTrendingItems();

    for (let i = 0; i < trendingItems.length; i++) {
      const updatedTrending = await SearchBar.waitForTrendingItems();
      const element = updatedTrending[i];
      const term = await element.getText();

      await element.click();

      await SearchBar.validateHeaderContains(term);
      await SearchBar.validateUrlContains(term);

      await SearchBar.clearSearch();
      await SearchBar.openAndClickSearch();
    }
  });
});
