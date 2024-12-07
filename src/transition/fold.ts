import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A 3D animation that unfolds elements into view like opening a card. */
export function fold(_options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  return {
    enter: {
      keyframes: [
        {
          opacity: 0,
          transform: 'perspective(2000px) rotateX(90deg) translateY(-20px)',
          transformOrigin: 'top',
          perspectiveOrigin: '50% 0%'
        },
        {
          opacity: 1,
          transform: 'perspective(2000px) rotateX(0) translateY(0)',
          transformOrigin: 'top',
          perspectiveOrigin: '50% 0%'
        }
      ],
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)'
    },
    exit: {
      keyframes: [
        {
          opacity: 1,
          transform: 'perspective(2000px) rotateX(0) translateY(0)',
          transformOrigin: 'bottom',
          perspectiveOrigin: '50% 100%'
        },
        {
          opacity: 0,
          transform: 'perspective(2000px) rotateX(-90deg) translateY(20px)',
          transformOrigin: 'bottom',
          perspectiveOrigin: '50% 100%'
        }
      ],
      easing: 'cubic-bezier(0.32, 0, 0.67, 0)'
    }
  };
}
