import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/SearchBar.js';

describe('[Target] Search Bar - Negative Input Handling', () => {
  it('should display a no results message for nonsense input', async () => {
    await TargetPage.open();
    await SearchBar.searchUsingMagnifyingGlass('xzyqplmno123');
    await SearchBar.validateNoResults();
  });
});
