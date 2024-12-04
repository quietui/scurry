import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A graceful animation that unfurls elements like a flowing ribbon in 3D space. */
export function ribbon(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const rtl = options?.dir === 'rtl';

  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: `translateX(${rtl ? '100%' : '-100%'}) rotateY(${rtl ? -90 : 90}deg) scaleX(2) scaleY(0.5)`,
          filter: 'brightness(1.2)'
        },
        {
          opacity: 0.4,
          transform: `translateX(${rtl ? '50%' : '-50%'}) rotateY(${rtl ? -45 : 45}deg) scaleX(1.5) scaleY(0.7)`,
          filter: 'brightness(1.1)'
        },
        {
          opacity: 0.7,
          transform: `translateX(${rtl ? '25%' : '-25%'}) rotateY(${rtl ? -20 : 20}deg) scaleX(1.2) scaleY(0.9)`,
          filter: 'brightness(1.05)'
        },
        { opacity: 1, transform: 'translateX(0) rotateY(0) scale(1)', filter: 'brightness(1)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'translateX(0) rotateY(0) scale(1)', filter: 'brightness(1)' },
        {
          opacity: 0.7,
          transform: `translateX(${rtl ? '-25%' : '25%'}) rotateY(${rtl ? 20 : -20}deg) scaleX(1.2) scaleY(0.9)`,
          filter: 'brightness(1.05)'
        },
        {
          opacity: 0.4,
          transform: `translateX(${rtl ? '-50%' : '50%'}) rotateY(${rtl ? 45 : -45}deg) scaleX(1.5) scaleY(0.7)`,
          filter: 'brightness(1.1)'
        },
        {
          opacity: 0,
          transform: `translateX(${rtl ? '-100%' : '100%'}) rotateY(${rtl ? 90 : -90}deg) scaleX(2) scaleY(0.5)`,
          filter: 'brightness(1.2)'
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
