import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description A playful bounce that moves up and down. */
export function bounce(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-40px)', offset: 0.3 },
      { transform: 'translateY(0)', offset: 0.5 },
      { transform: 'translateY(-15px)', offset: 0.7 },
      { transform: 'translateY(0)', offset: 0.85 },
      { transform: 'translateY(-5px)', offset: 0.92 },
      { transform: 'translateY(0)' }
    ],
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };
}
