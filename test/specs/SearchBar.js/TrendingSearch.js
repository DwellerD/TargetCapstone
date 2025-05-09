import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - All Trending Items Verification (Low Memory)', () => {
  it('should verify each trending item updates the URL correctly', async () => {
    for (let i = 0; i < 10; i++) {
      await TargetPage.open();
      await SearchBar.openAndClickSearch();

      const term = await SearchBar.getAndClickTrendingItem(i);

      await SearchBar.validateUrlContains(term);
      await SearchBar.clearSearch();
    }
  });
});
