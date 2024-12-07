import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A whirling animation that spirals elements through space like a twister. */
export function tornado(options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          rotate: `${rtl ? '180deg' : '-180deg'}`,
          scale: 0.2,
          translate: `${rtl ? '100%' : '-100%'} 100%`
        },
        {
          opacity: 0.4,
          rotate: `${rtl ? '90deg' : '-90deg'}`,
          scale: 0.6,
          translate: `${rtl ? '50%' : '-50%'} 50%`
        },
        {
          opacity: 0.8,
          rotate: `${rtl ? '45deg' : '-45deg'}`,
          scale: 0.8,
          translate: `${rtl ? '25%' : '-25%'} 25%`
        },
        { opacity: 1, rotate: '0deg', scale: 1, translate: '0 0' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, rotate: '0deg', scale: 1, translate: '0 0' },
        {
          opacity: 0.8,
          rotate: `${rtl ? '-45deg' : '45deg'}`,
          scale: 0.8,
          translate: `${rtl ? '-25%' : '25%'} -25%`
        },
        {
          opacity: 0.4,
          rotate: `${rtl ? '-90deg' : '90deg'}`,
          scale: 0.6,
          translate: `${rtl ? '-50%' : '50%'} -50%`
        },
        {
          opacity: 0,
          rotate: `${rtl ? '-180deg' : '180deg'}`,
          scale: 0.2,
          translate: `${rtl ? '-100%' : '100%'} -100%`
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
