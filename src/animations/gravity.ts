import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A bouncy animation that drops elements into place with natural physics. */
export function gravity(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'translateY(-200px) scale(0.7)', filter: 'blur(8px)' },
        { opacity: 0.5, transform: 'translateY(20px) scale(1.1)', filter: 'blur(4px)' },
        { opacity: 0.7, transform: 'translateY(-10px) scale(0.95)', filter: 'blur(2px)' },
        { opacity: 0.9, transform: 'translateY(5px) scale(1.02)', filter: 'blur(1px)' },
        { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        { opacity: 0.7, transform: 'translateY(10px) scale(1.1)', filter: 'blur(2px)' },
        { opacity: 0.5, transform: 'translateY(20px) scale(0.95)', filter: 'blur(4px)' },
        { opacity: 0, transform: 'translateY(200px) scale(0.9)', filter: 'blur(8px)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
