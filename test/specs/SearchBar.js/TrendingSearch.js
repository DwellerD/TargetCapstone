import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/SearchBar.js';

describe('[Target] Search Bar - Trending Items Verification', () => {
  it('should verify each trending item updates the header and URL', async () => {
    await TargetPage.open();
    await SearchBar.openAndClickSearch();

    const trendingItems = await SearchBar.waitForTrendingItems();

    for (let i = 0; i < trendingItems.length; i++) {
      if (i > 0 && i % 5 === 0) {
        await browser.reloadSession();
        await TargetPage.open();
        await SearchBar.openAndClickSearch();
      }

      const term = await trendingItems[i].getText();
      await trendingItems[i].click();

      await SearchBar.validateHeaderContains(term);
      await SearchBar.validateUrlContains(term);

      await SearchBar.clearSearch();
      await SearchBar.openAndClickSearch();
    }
  });
});
