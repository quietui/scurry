import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A subtle animation that scales elements up from below with a gentle overshoot. */
export function scale(_options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, scale: 0.92, translate: '0 15px' },
        { opacity: 1, scale: 1.03, translate: '0 -2px' },
        { opacity: 1, scale: 1, translate: '0 0' }
      ],
      easing: 'cubic-bezier(0.33, 1.2, 0.66, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, scale: 1, translate: '0 0' },
        { opacity: 0.5, scale: 0.95, translate: '0 5px' },
        { opacity: 0, scale: 0.9, translate: '0 10px' }
      ],
      easing: 'cubic-bezier(0.33, 0, 0.67, 0.2)'
    }
  };
}
