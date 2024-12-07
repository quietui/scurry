import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Smooth scaling up and down with elastic feel */
export function pop(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)', offset: 0.2 },
      { transform: 'scale(0.95)', offset: 0.4 },
      { transform: 'scale(1.05)', offset: 0.6 },
      { transform: 'scale(1)' }
    ],
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  };
}
