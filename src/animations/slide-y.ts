import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A simple animation that slides in and out vertically. */
export function slideY(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, translate: '0 -35%', scale: 0.98 },
        { opacity: 0.6, translate: '0 -15%', scale: 0.99 },
        { opacity: 1, translate: '0 0', scale: 1 }
      ],
      easing: 'cubic-bezier(0.32, 0.72, 0, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, translate: '0 0', scale: 1 },
        { opacity: 0.3, translate: '0 15%', scale: 0.99 },
        { opacity: 0, translate: '0 35%', scale: 0.98 }
      ],
      easing: 'cubic-bezier(0.32, 0, 0.67, 0)'
    }
  };
}
