import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A playful animation that renders an intentional glitch on the way in and out. */
export function glitch(options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: `translate(${rtl ? 10 : -10}%, -5%) skew(${rtl ? -20 : 20}deg, ${rtl ? 10 : -10}deg)`,
          filter: 'hue-rotate(90deg) saturate(200%)'
        },
        {
          opacity: 0.3,
          transform: `translate(${rtl ? -15 : 15}%, 10%) skew(${rtl ? 15 : -15}deg, ${rtl ? -5 : 5}deg)`,
          filter: 'hue-rotate(-70deg) saturate(150%)'
        },
        {
          opacity: 0.6,
          transform: `translate(${rtl ? 7 : -7}%, 3%) skew(${rtl ? -10 : 10}deg, ${rtl ? 5 : -5}deg)`,
          filter: 'hue-rotate(50deg) saturate(125%)'
        },
        {
          opacity: 0.8,
          transform: `translate(${rtl ? -3 : 3}%, -2%) skew(${rtl ? 5 : -5}deg, ${rtl ? -2 : 2}deg)`,
          filter: 'hue-rotate(-20deg) saturate(110%)'
        },
        {
          opacity: 1,
          transform: 'translate(0, 0) skew(0, 0)',
          filter: 'hue-rotate(0) saturate(100%)'
        }
      ],
      easing: 'steps(5, end)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'translate(0, 0) skew(0, 0)',
          filter: 'hue-rotate(0) saturate(100%)'
        },
        {
          opacity: 0.8,
          transform: `translate(${rtl ? -5 : 5}%, 5%) skew(${rtl ? -10 : 10}deg, ${rtl ? -5 : 5}deg)`,
          filter: 'hue-rotate(45deg) saturate(150%)'
        },
        {
          opacity: 0.5,
          transform: `translate(${rtl ? 15 : -15}%, -10%) skew(${rtl ? 15 : -15}deg, ${rtl ? 10 : -10}deg)`,
          filter: 'hue-rotate(-90deg) saturate(200%)'
        },
        {
          opacity: 0,
          transform: `translate(${rtl ? -20 : 20}%, 15%) skew(${rtl ? -20 : 20}deg, ${rtl ? -15 : 15}deg)`,
          filter: 'hue-rotate(180deg) saturate(300%)'
        }
      ],
      easing: 'steps(4, end)'
    }
  };
}
