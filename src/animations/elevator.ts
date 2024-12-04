import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A smooth animation that lifts elements into view like an ascending elevator. */
export function elevator(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, translate: '0 100%', scale: 0.95 },
        { opacity: 0.5, translate: '0 50%', scale: 0.97 },
        { opacity: 0.8, translate: '0 15%', scale: 0.99 },
        { opacity: 1, translate: '0 0', scale: 1 }
      ],
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, translate: '0 0', scale: 1 },
        { opacity: 0.8, translate: '0 -15%', scale: 0.99 },
        { opacity: 0.5, translate: '0 -50%', scale: 0.97 },
        { opacity: 0, translate: '0 -100%', scale: 0.95 }
      ],
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)'
    }
  };
}
