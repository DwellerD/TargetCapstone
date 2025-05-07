import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('[Target] Search Bar - Negative Input Handling', () => {
  it('should handle random characters input and show no results', async () => {
    await TargetPage.open();
    // await browser.pause(1000);

    const randomTerm = '!@#$%^&*()_+{}[]|:;<>,.?/~'; // Random characters input
    await SearchBar.searchUsingMagnifyingGlass(randomTerm);

    await SearchBar.validateNoResults(); // Validate no results message

    await SearchBar.clearSearch();
  });
});
