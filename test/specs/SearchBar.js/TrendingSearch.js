//npx wdio run wdio.conf.js --spec ./test/specs/SearchBar.js/TrendingSearch.js
//npx wdio run wdio.conf.js --spec test/specs/SearchBar.js/*
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Trending Search Verification', () => {
  it('should validate all trending search items update the result URL', async () => {
    await SearchBar.validateAllTrendingItems();
  });
});
