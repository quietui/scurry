import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A playful animation that makes elements hop into view like a jumping frog. */
export function frog(_options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: 'translateY(100px) scaleY(0.5) scaleX(1.2)',
          filter: 'brightness(0.8)'
        },
        {
          opacity: 0.2,
          transform: 'translateY(50px) scaleY(0.8) scaleX(1.1)',
          filter: 'brightness(0.9)'
        },
        {
          opacity: 0.4,
          transform: 'translateY(-20px) scaleY(1.2) scaleX(0.8)',
          filter: 'brightness(1.1)'
        },
        {
          opacity: 0.6,
          transform: 'translateY(-30px) scaleY(1.3) scaleX(0.7)',
          filter: 'brightness(1.2)'
        },
        {
          opacity: 0.8,
          transform: 'translateY(-15px) scaleY(1.1) scaleX(0.9)',
          filter: 'brightness(1.1)'
        },
        {
          opacity: 0.9,
          transform: 'translateY(-5px) scaleY(1.05) scaleX(0.95)',
          filter: 'brightness(1.05)'
        },
        {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          filter: 'brightness(1)'
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          filter: 'brightness(1)'
        },
        {
          opacity: 0.9,
          transform: 'translateY(-5px) scaleY(1.05) scaleX(0.95)',
          filter: 'brightness(1.05)'
        },
        {
          opacity: 0.7,
          transform: 'translateY(-25px) scaleY(1.2) scaleX(0.8)',
          filter: 'brightness(1.1)'
        },
        {
          opacity: 0.5,
          transform: 'translateY(-35px) scaleY(1.3) scaleX(0.7)',
          filter: 'brightness(1.2)'
        },
        {
          opacity: 0.2,
          transform: 'translateY(50px) scaleY(0.8) scaleX(1.1)',
          filter: 'brightness(0.9)'
        },
        {
          opacity: 0,
          transform: 'translateY(100px) scaleY(0.5) scaleX(1.2)',
          filter: 'brightness(0.8)'
        }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
