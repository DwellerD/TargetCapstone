export default class TargetPage {
  async navigateToHomePage() {
    await browser.url('https://www.target.com/');
    await $('#search').waitForExist({ timeout: 10000 });
  }
}
