import TargetPage from '../pageobjects/targetPage.js';
import FooterLinks from '../pageobjects/FooterLinks.js';

const targetPage = new TargetPage();

describe('[Target] Footer Links', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await targetPage.navigateToHomePage();
    await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
  });

  it('should validate all About Us footer links', async () => {
    await FooterLinks.validateGroup(FooterLinks.aboutUsLinks);
  });

  it('should validate all Help footer links', async () => {
    await FooterLinks.validateGroup(FooterLinks.helpLinks);
  });

  it('should validate all Store footer links', async () => {
    await FooterLinks.validateGroup(FooterLinks.storeLinks);
  });

  it('should validate all Services footer links', async () => {
    await FooterLinks.validateGroup(FooterLinks.serviceLinks);
  });
});