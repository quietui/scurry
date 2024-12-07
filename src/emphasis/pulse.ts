import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description A pulsing scale animation for emphasis. */
export function pulse(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { scale: 1, offset: 0 },
      { scale: 1.04, offset: 0.2 },
      { scale: 0.98, offset: 0.45 },
      { scale: 1.01, offset: 0.7 },
      { scale: 1, offset: 1 }
    ],
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };
}
