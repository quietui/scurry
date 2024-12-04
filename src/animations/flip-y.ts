import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A 3D animation that flips elements into view along their vertical axis. */
export function flipY(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'perspective(1000px) translateZ(100px) rotateX(90deg)' },
        { opacity: 1, transform: 'perspective(1000px) translateZ(0) rotateX(0deg)' }
      ],
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'perspective(1000px) translateZ(0) rotateX(0deg)' },
        { opacity: 0, transform: 'perspective(1000px) translateZ(100px) rotateX(-90deg)' }
      ],
      easing: 'cubic-bezier(0.32, 0, 0.67, 0)'
    }
  };
}
