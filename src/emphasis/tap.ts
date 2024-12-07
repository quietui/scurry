import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Gentle tapping motion up and down */
export function tap(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-12px)', offset: 0.15 },
      { transform: 'translateY(0)', offset: 0.3 },
      { transform: 'translateY(-6px)', offset: 0.45 },
      { transform: 'translateY(0)', offset: 0.6 }
    ],
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };
}
