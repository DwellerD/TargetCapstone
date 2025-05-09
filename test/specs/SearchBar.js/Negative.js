import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

const singleCharInputs = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '[', ']', '{', '}', '|', '\\', '/', ':', ';', '"',
  ',', '.', '?', '-', '+', '=', '~', '`', '<', '>',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

describe('[Target] Search Bar - Single Non-Letter Character Handling', () => {
  for (const char of singleCharInputs) {
    it(`should handle input "${char}" without breaking search`, async () => {
      await TargetPage.open();
      await SearchBar.searchAndValidate(char);
    });
  }
});
