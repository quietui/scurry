import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A celestial animation that swirls elements into position along a circular path. */
export function orbit(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'rotate(360deg) translateX(100px) rotate(-360deg) scale(0.5)' },
        { opacity: 0.4, transform: 'rotate(240deg) translateX(60px) rotate(-240deg) scale(0.8)' },
        { opacity: 0.7, transform: 'rotate(120deg) translateX(30px) rotate(-120deg) scale(0.9)' },
        { opacity: 1, transform: 'rotate(0deg) translateX(0) rotate(0deg) scale(1)' }
      ],
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'rotate(0deg) translateX(0) rotate(0deg) scale(1)' },
        { opacity: 0.7, transform: 'rotate(-120deg) translateX(30px) rotate(120deg) scale(0.9)' },
        { opacity: 0.4, transform: 'rotate(-240deg) translateX(60px) rotate(240deg) scale(0.8)' },
        { opacity: 0, transform: 'rotate(-360deg) translateX(100px) rotate(360deg) scale(0.5)' }
      ],
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };
}
