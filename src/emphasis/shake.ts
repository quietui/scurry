import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Quick side-to-side shake for emphasis */
export function shake(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { translate: '0 0', offset: 0 },
      { translate: '4% 0', offset: 0.1 },
      { translate: '-4% 0', offset: 0.2 },
      { translate: '4% 0', offset: 0.3 },
      { translate: '-4% 0', offset: 0.4 },
      { translate: '4% 0', offset: 0.5 },
      { translate: '0 0', offset: 0.6 },
      { translate: '0 0', offset: 1 }
    ],
    easing: 'linear'
  };
}
