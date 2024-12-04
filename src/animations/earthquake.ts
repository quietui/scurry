import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** An energetic animation that shakes elements into place with decreasing intensity. */
export function earthquake(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: `translate(${rtl ? 8 : -8}px, -8px) rotate(${rtl ? 5 : -5}deg)` },
        { opacity: 0.2, transform: `translate(${rtl ? -8 : 8}px, 8px) rotate(${rtl ? -5 : 5}deg)` },
        { opacity: 0.4, transform: `translate(${rtl ? 6 : -6}px, 6px) rotate(${rtl ? 4 : -4}deg)` },
        { opacity: 0.6, transform: `translate(${rtl ? -6 : 6}px, -6px) rotate(${rtl ? -4 : 4}deg)` },
        { opacity: 0.8, transform: `translate(${rtl ? 4 : -4}px, 4px) rotate(${rtl ? 2 : -2}deg)` },
        { opacity: 1, transform: 'translate(0, 0) rotate(0)' }
      ],
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'translate(0, 0) rotate(0)' },
        { opacity: 0.8, transform: `translate(${rtl ? -4 : 4}px, 4px) rotate(${rtl ? -2 : 2}deg)` },
        { opacity: 0.6, transform: `translate(${rtl ? 6 : -6}px, -6px) rotate(${rtl ? 3 : -3}deg)` },
        { opacity: 0.4, transform: `translate(${rtl ? -8 : 8}px, 8px) rotate(${rtl ? -4 : 4}deg)` },
        { opacity: 0, transform: `translate(${rtl ? 10 : -10}px, -10px) rotate(${rtl ? 5 : -5}deg)` }
      ],
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  };
}
