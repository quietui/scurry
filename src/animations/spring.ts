import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A lively animation that bounces elements into place with springy physics. */
export function spring(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, scale: 0.93, translate: '0 10px' },
        { opacity: 0.6, scale: 1.04, translate: '0 -5px' },
        { opacity: 0.8, scale: 0.98, translate: '0 3px' },
        { opacity: 0.9, scale: 1.02, translate: '0 -1px' },
        { opacity: 1, scale: 1, translate: '0 0' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, scale: 1, translate: '0 0' },
        { opacity: 0.8, scale: 1.02, translate: '0 3px' },
        { opacity: 0.6, scale: 0.98, translate: '0 6px' },
        { opacity: 0, scale: 0.93, translate: '0 10px' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
