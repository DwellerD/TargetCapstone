class BottomLinks {
  // About Us
  get aboutTarget() { return $('[aria-label="About Target"]'); }
  get careers() { return $('[aria-label="Careers"]'); }
  get newsBlog() { return $('[aria-label="News & Blog"]'); }
  get targetBrands() { return $('[aria-label="Target Brands"]'); }
  get bullseyeShop() { return $('[aria-label="Bullseye Shop"]'); }
  get sustainability() { return $('[aria-label="Sustainability & Governance"]'); }
  get pressCenter() { return $('[aria-label="Press Center"]'); }
  get advertiseWithUs() { return $('[aria-label="Advertise with Us"]'); }
  get investors() { return $('[aria-label="Investors"]'); }
  get affiliatesPartners() { return $('[aria-label="Affiliates & Partners"]'); }
  get suppliers() { return $('[aria-label="Suppliers"]'); }
  get targetPlus() { return $('[aria-label="TargetPlus"]'); }

  // Help
  get targetHelp() { return $('[aria-label="Target Help"]'); }
  get returns() { return $('[aria-label="Returns"]'); }
  get trackOrders() { return $('[aria-label="Track Orders"]'); }
  get recalls() { return $('[aria-label="Recalls"]'); }
  get contactUs() { return $('[aria-label="Contact Us"]'); }
  get feedback() { return $('[aria-label="Feedback"]'); }
  get accessibility() { return $('[aria-label="Accessibility"]'); }
  get securityFraud() { return $('[aria-label="Security & Fraud"]'); }
  get teamMemberServices() { return $('[aria-label="Team Member Services"]'); }

  // Stores
  get findAStore() { return $('[aria-label="Find a Store"]'); }
  get clinic() { return $('[aria-label="Clinic"]'); }
  get pharmacy() { return $('[aria-label="Pharmacy"]'); }
  get optical() { return $('[aria-label="Optical"]'); }
  get moreInStoreServices() { return $('[aria-label="More In-Store Services"]'); }

  // Services
  get targetCircle() { return $('[aria-label="Target Circle™"]'); }
  get targetCircleCard() { return $('[aria-label="Target Circle™ Card"]'); }
  get targetCircle360() { return $('[aria-label="Target Circle 360™"]'); }
  get targetApp() { return $('[aria-label="Target App"]'); }
  get registry() { return $('[aria-label="Registry"]'); }
  get sameDayDelivery() { return $('[aria-label="Same Day Delivery"]'); }
  get orderPickup() { return $('[aria-label="Order Pickup"]'); }
  get driveUp() { return $('[aria-label="Drive Up"]'); }
  get freeTwoDayShipping() { return $('[aria-label="Free 2-Day Shipping"]'); }
  get shippingDelivery() { return $('[aria-label="Shipping & Delivery"]'); }
  get moreServices() { return $('[aria-label="More Services"]'); }
}

export default new BottomLinks();
