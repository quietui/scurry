import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A hypnotic animation that draws elements from a swirling dimensional portal. */
export function vortex(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: 'perspective(1000px) rotateX(60deg) rotateY(60deg) scale(2)',
          filter: 'blur(30px) brightness(2)'
        },
        {
          opacity: 0.3,
          transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg) scale(1.5)',
          filter: 'blur(20px) brightness(1.7)'
        },
        {
          opacity: 0.6,
          transform: 'perspective(1000px) rotateX(30deg) rotateY(30deg) scale(1.2)',
          filter: 'blur(10px) brightness(1.4)'
        },
        {
          opacity: 1,
          transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
          filter: 'blur(0) brightness(1)'
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
          filter: 'blur(0) brightness(1)'
        },
        {
          opacity: 0.7,
          transform: 'perspective(1000px) rotateX(30deg) rotateY(30deg) scale(1.2)',
          filter: 'blur(10px) brightness(1.2)'
        },
        {
          opacity: 0.4,
          transform: 'perspective(1000px) rotateX(60deg) rotateY(60deg) scale(1.5)',
          filter: 'blur(20px) brightness(1.5)'
        },
        {
          opacity: 0,
          transform: 'perspective(1000px) rotateX(90deg) rotateY(90deg) scale(2)',
          filter: 'blur(30px) brightness(2)'
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
