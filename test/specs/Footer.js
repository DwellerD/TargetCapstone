import TargetPage from '../pageobjects/targetPage.js';
import SecureFooterLinks from '../pageobjects/SecureFooterLinks.js';

describe('[Target] Footer Links - Secure Page Validation', () => {
  for (const { label, urlPart } of SecureFooterLinks.footerLinks) {
    it(`should validate footer link: ${label}`, async () => {
      await TargetPage.open();
      await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
      await browser.pause(1000);
      await SecureFooterLinks.validateFooterLink(label, urlPart);
    });
  }
});