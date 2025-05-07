import { $ } from '@wdio/globals';

class SearchBar {
    get searchInput() { return $('#search'); }
    get clearInputButton() { return $$('.sc-d6ee3fa-4.hsicep')[0]; }
    get trendingSearches() { return $$('.sc-6e2eb6e3-1.hgtqQR'); }
    get searchResultsHeader() { return $('.h-text-bs.h-display-flex.h-flex-align-center.h-text-grayDark.h-margin-l-x2'); }
    get clearRecentSearchesButton() { return $('#search-clear-history'); }
    get magnifyingGlassButton() { return $$('.sc-b51b5b29-0.cEbXXT')[0]; }
  }
  
  export default new SearchBar();
  