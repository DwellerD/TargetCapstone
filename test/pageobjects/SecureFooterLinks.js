import FooterLinks from './FooterLinks.js';

class SecureFooterLinks {
  footerLinks = [
    { label: 'About Target', urlPart: '/about' },
    { label: 'Careers', urlPart: '/careers' },
    { label: 'News & Blog', urlPart: '/news-features' },
    { label: 'Target Brands', urlPart: '/about/products-services/target-brands' },
    { label: 'Bullseye Shop', urlPart: 'target.com' },
    { label: 'Sustainability & Governance', urlPart: '/sustainability-governance' },
    { label: 'Press Center', urlPart: '/press' },
    { label: 'Advertise with Us', urlPart: 'roundel.com' },
    { label: 'Investors', urlPart: '/investors' },
    { label: 'Affiliates & Partners', urlPart: 'partners.target.com' },
    { label: 'Suppliers', urlPart: '/suppliers' },
    { label: 'TargetPlus', urlPart: 'plus.target.com' },
    { label: 'Target Help', urlPart: 'help.target.com' },
    { label: 'Returns', urlPart: '/returns' },
    { label: 'Track Orders', urlPart: 'client_id=ecom-web-1.0.0' },
    { label: 'Recalls', urlPart: 'productrecallpage' },
    { label: 'Contact Us', urlPart: 'contactus' },
    { label: 'Feedback', urlPart: '' },
    { label: 'Accessibility', urlPart: 'Accessibility' },
    { label: 'Security & Fraud', urlPart: 'security.target.com' },
    { label: 'Team Member Services', urlPart: '/team-member-services' },
    { label: 'Find a Store', urlPart: '/store-locator' },
    { label: 'Clinic', urlPart: '/clinic' },
    { label: 'Pharmacy', urlPart: '/pharmacy-health' },
    { label: 'Optical', urlPart: '/optical' },
    { label: 'More In-Store Services', urlPart: '/services' },
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

  async validateFooterLink(label, urlPart) {
    const link = await FooterLinks.getLinkByAriaLabel(label);
    await link.waitForClickable({ timeout: 10000 });

    if (label === 'Feedback' || label === 'Recalls') return;

    const prevHandles = await browser.getWindowHandles();
    const prevUrl = await browser.getUrl();
    await link.click();

    await browser.pause(1000);
    const newHandles = await browser.getWindowHandles();

    if (newHandles.length > prevHandles.length) {
      const newTab = newHandles.find(h => !prevHandles.includes(h));
      await browser.switchToWindow(newTab);
      await browser.waitUntil(
        async () => (await browser.getUrl()) !== prevUrl,
        {
          timeout: 15000,
          timeoutMsg: `Navigation did not complete for "${label}"`
        }
      );
    } else {
      await browser.waitUntil(
        async () => (await browser.getUrl()) !== prevUrl,
        {
          timeout: 15000,
          timeoutMsg: `Navigation did not complete for "${label}"`
        }
      );
    }

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toMatch(new RegExp(urlPart));
  }
}

export default new SecureFooterLinks();