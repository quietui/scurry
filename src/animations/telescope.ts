import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A telescopic animation that zooms elements from a distant perspective. */
export function telescope(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: 'perspective(1000px) rotateX(-30deg) translateZ(200px) scale(0.6)',
          filter: 'blur(20px)'
        },
        {
          opacity: 0.4,
          transform: 'perspective(1000px) rotateX(-20deg) translateZ(150px) scale(0.7)',
          filter: 'blur(15px)'
        },
        {
          opacity: 0.7,
          transform: 'perspective(1000px) rotateX(-10deg) translateZ(100px) scale(0.8)',
          filter: 'blur(10px)'
        },
        {
          opacity: 0.9,
          transform: 'perspective(1000px) rotateX(-5deg) translateZ(50px) scale(0.9)',
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          transform: 'perspective(1000px) rotateX(0) translateZ(0) scale(1)',
          filter: 'blur(0)'
        }
      ],
      easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'perspective(1000px) rotateX(0) translateZ(0) scale(1)',
          filter: 'blur(0)'
        },
        {
          opacity: 0.7,
          transform: 'perspective(1000px) rotateX(10deg) translateZ(100px) scale(1.2)',
          filter: 'blur(10px)'
        },
        {
          opacity: 0.4,
          transform: 'perspective(1000px) rotateX(20deg) translateZ(150px) scale(1.4)',
          filter: 'blur(15px)'
        },
        {
          opacity: 0,
          transform: 'perspective(1000px) rotateX(30deg) translateZ(200px) scale(1.6)',
          filter: 'blur(20px)'
        }
      ],
      easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
  };
}
