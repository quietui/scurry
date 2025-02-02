import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A simple animation that rotates in and out vertically. */
export function rotateY(options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        { opacity: 0, rotate: '-60deg', translate: '0 -35%', scale: 0.85 },
        { opacity: 0.5, rotate: '-20deg', translate: '0 -15%', scale: 0.95 },
        { opacity: 1, rotate: '0deg', translate: '0 0', scale: 1 }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, rotate: '0deg', translate: '0 0', scale: 1 },
        { opacity: 0.5, rotate: '20deg', translate: '0 15%', scale: 0.95 },
        { opacity: 0, rotate: '60deg', translate: '0 35%', scale: 0.85 }
      ],
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };
}
