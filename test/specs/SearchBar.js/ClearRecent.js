import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Clear Recent Searches', () => {
  it('should clear recent searches after interaction', async () => {
    await TargetPage.open();
    await SearchBar.searchUsingMagnifyingGlass('milk');
    await TargetPage.open();
    await SearchBar.clearSearch();
  });
});
