import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Vibrate effect with decreasing intensity */
export function vibrate(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'translate(0)', offset: 0 },
      { transform: 'translate(-3px, 2px)', offset: 0.15 },
      { transform: 'translate(2px, -3px)', offset: 0.3 },
      { transform: 'translate(-2px, 1px)', offset: 0.5 },
      { transform: 'translate(1px, -1px)', offset: 0.7 },
      { transform: 'translate(-1px, 0)', offset: 0.85 },
      { transform: 'translate(0)', offset: 1 }
    ],
    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
  };
}
