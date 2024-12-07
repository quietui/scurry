import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A dramatic animation that makes elements burst into view with a bright, energetic effect. */
export function explode(_options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'scale(0.1)', filter: 'blur(20px) brightness(2)' },
        { opacity: 0.3, transform: 'scale(0.4)', filter: 'blur(15px) brightness(1.7)' },
        { opacity: 0.6, transform: 'scale(0.7)', filter: 'blur(10px) brightness(1.4)' },
        { opacity: 0.8, transform: 'scale(0.9)', filter: 'blur(5px) brightness(1.2)' },
        { opacity: 1, transform: 'scale(1)', filter: 'blur(0) brightness(1)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'scale(1)', filter: 'blur(0) brightness(1)' },
        { opacity: 0.8, transform: 'scale(1.1)', filter: 'blur(5px) brightness(1.2)' },
        { opacity: 0.6, transform: 'scale(1.3)', filter: 'blur(10px) brightness(1.4)' },
        { opacity: 0.3, transform: 'scale(1.6)', filter: 'blur(15px) brightness(1.7)' },
        { opacity: 0, transform: 'scale(2)', filter: 'blur(20px) brightness(2)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
