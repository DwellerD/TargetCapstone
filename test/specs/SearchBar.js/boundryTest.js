import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

const boundaryInputs = [
  'a'.repeat(255),
  'a'.repeat(1000),
  '!'.repeat(500),
  'I am one with the force the force is with me'.repeat(20),
  'Ω≈ç√∫˜µ≤≥÷'.repeat(50),
  ' '.repeat(200),
  'a b c d e f g h i j k l m n o'.repeat(20)
];

describe('[Target] Search Bar - Boundary Input Handling', () => {
  for (const input of boundaryInputs) {
    const preview = input.length > 20 ? input.slice(0, 20) + '…' : input;
    it(`should handle input: "${preview}"`, async () => {
      await TargetPage.open();
      await SearchBar.searchAndValidate(input);
    });
  }
});
