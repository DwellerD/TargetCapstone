import TargetPage from '../../pageobjects/targetPage.js';
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Security Test', () => {
    const securityInputs = [
        '<script>alert("xss")</script>',
        "' OR '1'='1",
        '" onmouseover="alert(1)"',
        '`rm -rf /`',
        'DROP TABLE users;',
        '\\u2603\\u20AC\\u221E' // Replaces emojis with safe Unicode
    ];

    for (const term of securityInputs) {
        it(`should safely handle input: ${term}`, async () => {
            await browser.reloadSession();
            await TargetPage.open();
            await SearchBar.searchUsingMagnifyingGlass(term);
            await SearchBar.validateSecuritySearchURL();
        });
    }
});
