class TargetPage {
  async open() {
    await browser.url('https://www.target.com/');
    await $('#search').waitForExist({ timeout: 10000 });
  }
}

export default new TargetPage();
