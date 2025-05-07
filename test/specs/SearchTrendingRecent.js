import TargetPage from '../pageobjects/targetPage.js';
import SearchBar from '../pageobjects/searchBar.js';

describe('Search Bar - Trending and Recent Searches', () => {
  it('should show recent search after using a trending item, then clear it', async () => {
    await TargetPage.open();
    await browser.pause(1000);

    await SearchBar.searchInput.click();
    await browser.pause(1000);

    const trendingItems = await $$('.sc-6e2eb6e3-1.hgtqQR');
    if (!trendingItems.length) throw new Error('No trending items found');

    const firstItem = trendingItems[0];
    const term = await firstItem.getText();
    await firstItem.click();
    await browser.pause(2000);

    await SearchBar.searchInput.click();
    await browser.pause(1000);

    const recentItems = await $$('.sc-6e2eb6e3-1.hgtqQR');
    const recentTexts = [];
    for (let el of recentItems) {
      recentTexts.push(await el.getText());
    }

    expect(recentTexts).toContain(term);

    await SearchBar.clearRecentSearchesButton.waitForClickable({ timeout: 5000 });
    await SearchBar.clearRecentSearchesButton.click();
    await browser.pause(1000);

    const clearedItems = await $$('.sc-6e2eb6e3-1.hgtqQR');
    const clearedTexts = [];
    for (let el of clearedItems) {
      clearedTexts.push(await el.getText());
    }

    expect(clearedTexts).not.toContain(term);
  });
});
