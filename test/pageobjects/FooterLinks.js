import { $ } from '@wdio/globals';

class FooterLinks {
  getLinkByAriaLabel(name) {
    return $(`[aria-label="${name}"]`);
  }

  async validateGroup(linkList) {
    for (const { label, urlPart } of linkList) {
      const link = await this.getLinkByAriaLabel(label);

      await link.waitForExist({ timeout: 10000 });
      await link.waitForDisplayed({ timeout: 10000 });
      await link.waitForClickable({ timeout: 10000 });
      await link.scrollIntoView();
      await link.click();

      await browser.waitUntil(
        async () => (await browser.getUrl()) !== 'https://www.target.com/',
        {
          timeout: 10000,
          timeoutMsg: `Navigation did not occur for ${label}`,
        }
      );

      const url = await browser.getUrl();
      expect(decodeURIComponent(url)).toContain(urlPart);

      await browser.back();

      await browser.waitUntil(
        async () => (await browser.getUrl()) === 'https://www.target.com/',
        {
          timeout: 10000,
          timeoutMsg: 'Failed to return to Target homepage after navigating back',
        }
      );

      await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
    }
  }

  get aboutUsLinks() {
    return [
      { label: 'About Target', urlPart: '/about' },
      { label: 'Careers', urlPart: '/careers' },
      { label: 'News & Blog', urlPart: '/news-features' },
      { label: 'Target Brands', urlPart: '/about/products-services/target-brands' },
      { label: 'Sustainability & Governance', urlPart: '/sustainability-governance' },
      { label: 'Press Center', urlPart: '/press' },
      { label: 'Investors', urlPart: '/investors' },
      { label: 'Affiliates & Partners', urlPart: 'partners.target.com' },
      { label: 'Suppliers', urlPart: '/suppliers' },
      { label: 'TargetPlus', urlPart: 'plus.target.com' }
    ];
  }

  get helpLinks() {
    return [
      { label: 'Target Help', urlPart: 'help.target.com' },
      { label: 'Returns', urlPart: '/returns' },
      { label: 'Track Orders', urlPart: 'client_id=ecom-web-1.0.0' },
      { label: 'Recalls', urlPart: 'productrecallpage' },
      { label: 'Contact Us', urlPart: 'contactus.target.com' },
      { label: 'Accessibility', urlPart: 'Accessibility' },
      { label: 'Security & Fraud', urlPart: 'security.target.com' },
      { label: 'Team Member Services', urlPart: '/team-member-services' }
    ];
  }

  get storeLinks() {
    return [
      { label: 'Find a Store', urlPart: '/store-locator' },
      { label: 'Clinic', urlPart: '/clinic' },
      { label: 'Pharmacy', urlPart: '/pharmacy-health' },
      { label: 'Optical', urlPart: '/optical' },
      { label: 'More In-Store Services', urlPart: '/services' }
    ];
  }

  get serviceLinks() {
    return [
      { label: 'Target Circle™', urlPart: '/target-circle' },
      { label: 'Target Circle™ Card', urlPart: '/circlecard' },
      { label: 'Target Circle 360™', urlPart: '/target-circle-360' },
      { label: 'Target App', urlPart: '/target-app' },
      { label: 'Registry', urlPart: '/gift-registry' },
      { label: 'Same Day Delivery', urlPart: '/same-day-delivery' },
      { label: 'Order Pickup', urlPart: '/order-pickup' },
      { label: 'Drive Up', urlPart: '/drive-up' },
      { label: 'Free 2-Day Shipping', urlPart: '/free-2-day-shipping' },
      { label: 'Shipping & Delivery', urlPart: '/shipping-order-services' },
      { label: 'More Services', urlPart: '/services' }
    ];
  }
}

export default new FooterLinks();
