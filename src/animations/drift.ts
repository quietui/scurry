import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A gentle animation that makes elements float into view with a subtle blur effect. */
export function drift(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: `translate(${rtl ? 100 : -100}px, 50px) rotate(${rtl ? 15 : -15}deg) scale(0.9)`,
          filter: 'blur(10px)'
        },
        {
          opacity: 0.3,
          transform: `translate(${rtl ? 50 : -50}px, 25px) rotate(${rtl ? 8 : -8}deg) scale(0.95)`,
          filter: 'blur(6px)'
        },
        {
          opacity: 0.6,
          transform: `translate(${rtl ? 25 : -25}px, 12px) rotate(${rtl ? 4 : -4}deg) scale(0.97)`,
          filter: 'blur(4px)'
        },
        {
          opacity: 0.8,
          transform: `translate(${rtl ? 10 : -10}px, 5px) rotate(${rtl ? 2 : -2}deg) scale(0.99)`,
          filter: 'blur(2px)'
        },
        {
          opacity: 1,
          transform: 'translate(0, 0) rotate(0) scale(1)',
          filter: 'blur(0)'
        }
      ],
      easing: 'cubic-bezier(0.4, 0.1, 0.3, 1)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'translate(0, 0) rotate(0) scale(1)',
          filter: 'blur(0)'
        },
        {
          opacity: 0.8,
          transform: `translate(${rtl ? -10 : 10}px, -5px) rotate(${rtl ? -2 : 2}deg) scale(1.01)`,
          filter: 'blur(2px)'
        },
        {
          opacity: 0.6,
          transform: `translate(${rtl ? -25 : 25}px, -12px) rotate(${rtl ? -4 : 4}deg) scale(1.02)`,
          filter: 'blur(4px)'
        },
        {
          opacity: 0.3,
          transform: `translate(${rtl ? -50 : 50}px, -25px) rotate(${rtl ? -8 : 8}deg) scale(1.05)`,
          filter: 'blur(6px)'
        },
        {
          opacity: 0,
          transform: `translate(${rtl ? -100 : 100}px, -50px) rotate(${rtl ? -15 : 15}deg) scale(1.1)`,
          filter: 'blur(10px)'
        }
      ],
      easing: 'cubic-bezier(0.4, 0.1, 0.3, 1)'
    }
  };
}
