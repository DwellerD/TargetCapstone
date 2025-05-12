//npx wdio run wdio.conf.js --spec ./test/specs/SearchBar.js/Negative.js 
//npx wdio run wdio.conf.js --spec test/specs/SearchBar.js/*
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Single Character Security Input Handling', () => {
  it('should validate all dangerous characters return no results or fallback messages', async () => {
    await SearchBar.validateSecurityInputs();
  });
});
