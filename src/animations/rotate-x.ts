import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A simple animation that rotates in and out horizontally. */
export function rotateX(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        { opacity: 0, rotate: '-60deg', translate: `${rtl ? 35 : -35}% 0`, scale: 0.85 },
        { opacity: 0.5, rotate: '-20deg', translate: `${rtl ? 15 : -15}% 0`, scale: 0.95 },
        { opacity: 1, rotate: '0', translate: '0 0', scale: 1 }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, rotate: '0', translate: '0 0', scale: 1 },
        { opacity: 0.5, rotate: '20deg', translate: `${rtl ? -15 : 15}% 0`, scale: 0.95 },
        { opacity: 0, rotate: '60deg', translate: `${rtl ? -35 : 35}% 0`, scale: 0.85 }
      ],
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };
}
