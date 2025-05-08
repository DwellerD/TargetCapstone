import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Magnifying Glass Button', () => {
  it('should search for a term using the magnifying glass', async () => {
    const term = 'laptop';

    await TargetPage.open();
    await SearchBar.searchUsingMagnifyingGlass(term);
    await SearchBar.validateHeaderContains(term);
    await SearchBar.validateUrlContains(term);
  });
});
