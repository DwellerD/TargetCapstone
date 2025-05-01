import TargetPage from '../pageobjects/targetPage.js';
import SecureBottomLinks from '../pageobjects/SecureBottomLinks.js';

describe('Footer Link Selectors Visibility and Navigation Test', () => {
  SecureBottomLinks.footerLinks.forEach(({ label, element, urlPart }, index) => {
    it(`should verify footer link #${index + 1}: ${label}`, async () => {
      await browser.reloadSession();
      await TargetPage.open();
      await browser.pause(1000);

      await SecureBottomLinks.scrollToFooter();
      await SecureBottomLinks.clickAndVerifyLink(element(), urlPart);
    });
  });
});
