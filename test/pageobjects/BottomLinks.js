import { $ } from '@wdio/globals';

class BottomLinks {
  // This will dynamically select any link with an aria-label attribute
  getLinkByAriaLabel(ariaLabel) {
    return $(`[aria-label="${ariaLabel}"]`);
  }
}

export default new BottomLinks();
