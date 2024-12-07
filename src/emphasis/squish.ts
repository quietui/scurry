import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Jelly-like squish effect */
export function squish(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'scale(1, 1)' },
      { transform: 'scale(1.3, 0.7)', offset: 0.25 },
      { transform: 'scale(0.75, 1.3)', offset: 0.5 },
      { transform: 'scale(1.1, 0.9)', offset: 0.75 },
      { transform: 'scale(0.95, 1.05)', offset: 0.85 },
      { transform: 'scale(1, 1)' }
    ],
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
  };
}
