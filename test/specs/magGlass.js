import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('[Target] Search Bar - Magnifying Glass Button', () => {
  it('should return correct results after entering a term and clicking the magnifying glass', async () => {
    await TargetPage.open();
    // await browser.pause(1000);

    const term = 'paper towels';
    await SearchBar.searchUsingMagnifyingGlass(term);

    await SearchBar.validateHeaderContains(term);
    await SearchBar.validateUrlContains(term);

    await SearchBar.clearSearch();
  });
});
