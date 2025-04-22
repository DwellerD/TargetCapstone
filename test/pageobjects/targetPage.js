import { browser } from '@wdio/globals';

class TargetPage {
  async open() {
    await browser.url('https://www.target.com/');
  }
}

export default new TargetPage();
