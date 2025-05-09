import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/SearchBar.js';

describe('[Target] Search Bar - Magnifying Glass Button', () => {
  it('should search using magnifying glass and validate the result', async () => {
    await TargetPage.open();
    await SearchBar.searchUsingMagnifyingGlass('outdoor pillows');
    await SearchBar.validateHeaderContains('outdoor pillows');
    await SearchBar.validateUrlContains('outdoor pillows');
  });
});
