import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Clear Input Button', () => {
  it('should clear input field using the "X" button', async () => {
    await TargetPage.open();
    await SearchBar.searchInput.setValue('coffee');
    await SearchBar.clearInputButton.click();

    const value = await SearchBar.searchInput.getValue();
    expect(value).toBe('');
  });
});
