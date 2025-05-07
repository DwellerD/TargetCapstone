import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('[Target] Search Bar - Security Test', () => {
  it('should not accept script injections or break the search functionality', async () => {
    await TargetPage.open();
    // await browser.pause(1000);

    const maliciousInput = '<script>alert("Hacked")</script>'; 
    await SearchBar.searchUsingMagnifyingGlass(maliciousInput);

    await SearchBar.validateNoResults(); 
    await SearchBar.clearSearch();
  });
});
