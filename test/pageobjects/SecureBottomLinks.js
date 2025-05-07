import BottomLinks from './BottomLinks.js';

class SecureBottomLinks {
  footerLinks = [
    { label: 'About Target', element: () => BottomLinks.aboutTarget, urlPart: '/about' },
    { label: 'Careers', element: () => BottomLinks.careers, urlPart: '/careers' },
    { label: 'News & Blog', element: () => BottomLinks.newsBlog, urlPart: '/news-features' },
    { label: 'Target Brands', element: () => BottomLinks.targetBrands, urlPart: '/about/products-services/target-brands' },
    { label: 'Bullseye Shop', element: () => BottomLinks.bullseyeShop, urlPart: '^https://www\\.target\\.com' },
    { label: 'Sustainability & Governance', element: () => BottomLinks.sustainability, urlPart: '/sustainability-governance' },
    { label: 'Press Center', element: () => BottomLinks.pressCenter, urlPart: '/press' },
    { label: 'Advertise with Us', element: () => BottomLinks.advertiseWithUs, urlPart: 'roundel.com' },
    { label: 'Investors', element: () => BottomLinks.investors, urlPart: '/investors' },
    { label: 'Affiliates & Partners', element: () => BottomLinks.affiliatesPartners, urlPart: 'partners.target.com' },
    { label: 'Suppliers', element: () => BottomLinks.suppliers, urlPart: '/suppliers' },
    { label: 'TargetPlus', element: () => BottomLinks.targetPlus, urlPart: 'plus.target.com' },
    { label: 'Target Help', element: () => BottomLinks.targetHelp, urlPart: 'help.target.com' },
    { label: 'Returns', element: () => BottomLinks.returns, urlPart: '/returns' },
    { label: 'Track Orders', element: () => BottomLinks.trackOrders, urlPart: '/login/client_id=eco-web-1\\.0\\.0' },
    { label: 'Recalls', element: () => BottomLinks.recalls, urlPart: 'productrecallpage' },
    { label: 'Contact Us', element: () => BottomLinks.contactUs, urlPart: 'contactus' },
    { label: 'Feedback', element: () => BottomLinks.feedback, urlPart: '' },
    { label: 'Accessibility', element: () => BottomLinks.accessibility, urlPart: 'Accessibility' },
    { label: 'Security & Fraud', element: () => BottomLinks.securityFraud, urlPart: 'security.target.com' },
    { label: 'Team Member Services', element: () => BottomLinks.teamMemberServices, urlPart: '/team-member-services' },
    { label: 'Find a Store', element: () => BottomLinks.findAStore, urlPart: '/store-locator' },
    { label: 'Clinic', element: () => BottomLinks.clinic, urlPart: '/clinic' },
    { label: 'Pharmacy', element: () => BottomLinks.pharmacy, urlPart: '/pharmacy-health' },
    { label: 'Optical', element: () => BottomLinks.optical, urlPart: '/optical' },
    { label: 'More In-Store Services', element: () => BottomLinks.moreInStoreServices, urlPart: '/services' },
    { label: 'Target Circle™', element: () => BottomLinks.targetCircle, urlPart: '^https://www\\.target\\.com/target-circle.*' },
    { label: 'Target Circle™ Card', element: () => BottomLinks.targetCircleCard, urlPart: '/circlecard' },
    { label: 'Target Circle 360™', element: () => BottomLinks.targetCircle360, urlPart: '/target-circle-360' },
    { label: 'Target App', element: () => BottomLinks.targetApp, urlPart: '/target-app' },
    { label: 'Registry', element: () => BottomLinks.registry, urlPart: '/gift-registry' },
    { label: 'Same Day Delivery', element: () => BottomLinks.sameDayDelivery, urlPart: '/same-day-delivery' },
    { label: 'Order Pickup', element: () => BottomLinks.orderPickup, urlPart: '/order-pickup' },
    { label: 'Drive Up', element: () => BottomLinks.driveUp, urlPart: '/drive-up' },
    { label: 'Free 2-Day Shipping', element: () => BottomLinks.freeTwoDayShipping, urlPart: '/free-2-day-shipping' },
    { label: 'Shipping & Delivery', element: () => BottomLinks.shippingDelivery, urlPart: '/shipping-order-services' },
    { label: 'More Services', element: () => BottomLinks.moreServices, urlPart: '/services' },
  ];

  async scrollToFooter() {
    let lastHeight = 0;
    let currentHeight = await browser.execute(() => document.body.scrollHeight);
    while (currentHeight > lastHeight) {
      lastHeight = currentHeight;
      await browser.execute(() => window.scrollTo(0, document.body.scrollHeight - 400));
      // await browser.pause(1000);
      currentHeight = await browser.execute(() => document.body.scrollHeight);
    }
    // await browser.pause(1000);
  }

  async clickAndVerifyLink(link, urlPart) {
    await link.waitForDisplayed({ timeout: 10000 });
    await link.click();
    // await browser.pause(2000);
    const url = await browser.getUrl();
    expect(url).toMatch(new RegExp(urlPart));
  }
}

export default new SecureBottomLinks();
