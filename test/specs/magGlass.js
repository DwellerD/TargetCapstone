import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('[Target] Search Bar - Magnifying Glass Button', () => {
  it('should return correct results after entering a term and clicking the magnifying glass', async () => {
    await TargetPage.open();
    await browser.pause(1000);

    await SearchBar.searchInput.waitForClickable({ timeout: 10000 });
    await SearchBar.searchInput.click();
    await browser.pause(500);

    const term = 'paper towels';
    await SearchBar.searchInput.setValue(term);
    await browser.pause(500);

    await SearchBar.magnifyingGlassButton.waitForClickable({ timeout: 10000 });
    await SearchBar.magnifyingGlassButton.click();
    await browser.pause(2000);

    const resultHeader = await SearchBar.searchResultsHeader;
    await resultHeader.waitForDisplayed({ timeout: 10000 });
    const headerText = await resultHeader.getText();

    expect(headerText.toLowerCase()).toContain('paper towels');

    const url = await browser.getUrl();
    expect(url).toContain('paper+towels');

    await SearchBar.searchInput.click();
    await SearchBar.clearInputButton.click();
    await SearchBar.clearRecentSearchesButton.click();
  });
});
