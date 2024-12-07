import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Flash with scaling effect */
export function flash(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'scale(1)', opacity: '1' },
      { transform: 'scale(1.1)', opacity: '0.9', offset: 0.25 },
      { transform: 'scale(1)', opacity: '0.8', offset: 0.5 },
      { transform: 'scale(1.1)', opacity: '0.9', offset: 0.75 },
      { transform: 'scale(1)', opacity: '1' }
    ],
    easing: 'ease-in-out'
  };
}
