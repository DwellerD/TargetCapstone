import { $ } from '@wdio/globals';

class BottomLinks {
  getLinkByAriaLabel(ariaLabel) {
    return $(`[aria-label="${ariaLabel}"]`);
  }
}

export default new BottomLinks();
