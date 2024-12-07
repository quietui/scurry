import type { QuietAnimationOptions, QuietTransitionAnimation } from '../types.js';

/** @description A mesmerizing animation that spins elements into view with prismatic color shifts. */
export function kaleidoscope(_options?: Partial<QuietAnimationOptions>): QuietTransitionAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'rotate(180deg) scale(0.3)', filter: 'hue-rotate(90deg) blur(10px)' },
        { opacity: 0.3, transform: 'rotate(135deg) scale(0.5)', filter: 'hue-rotate(60deg) blur(8px)' },
        { opacity: 0.6, transform: 'rotate(90deg) scale(0.7)', filter: 'hue-rotate(30deg) blur(6px)' },
        { opacity: 0.8, transform: 'rotate(45deg) scale(0.9)', filter: 'hue-rotate(15deg) blur(3px)' },
        { opacity: 1, transform: 'rotate(0) scale(1)', filter: 'hue-rotate(0) blur(0)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'rotate(0) scale(1)', filter: 'hue-rotate(0) blur(0)' },
        { opacity: 0.8, transform: 'rotate(-45deg) scale(1.1)', filter: 'hue-rotate(15deg) blur(3px)' },
        { opacity: 0.6, transform: 'rotate(-90deg) scale(1.3)', filter: 'hue-rotate(30deg) blur(6px)' },
        { opacity: 0.3, transform: 'rotate(-135deg) scale(1.5)', filter: 'hue-rotate(60deg) blur(8px)' },
        { opacity: 0, transform: 'rotate(-180deg) scale(1.7)', filter: 'hue-rotate(90deg) blur(10px)' }
      ],
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  };
}
