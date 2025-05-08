import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Negative Input Handling', () => {
  it('should display a no results message for a nonsense search term', async () => {
    await TargetPage.open();
    await SearchBar.searchUsingMagnifyingGlass('!@#$%^&*()');
    await SearchBar.validateNoResults();
  });
});
