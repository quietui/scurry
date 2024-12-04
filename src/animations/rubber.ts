import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A springy animation that stretches and squashes elements like elastic rubber. */
export function rubber(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, scale: '2 0.5' },
        { opacity: 0.4, scale: '0.7 1.3' },
        { opacity: 0.6, scale: '1.3 0.8' },
        { opacity: 0.8, scale: '0.9 1.1' },
        { opacity: 0.9, scale: '1.1 0.9' },
        { opacity: 1, scale: '1 1' }
      ],
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    },
    exit: {
      keyframes: [
        { opacity: 1, scale: '1 1' },
        { opacity: 0.9, scale: '1.1 0.9' },
        { opacity: 0.8, scale: '0.9 1.1' },
        { opacity: 0.6, scale: '1.3 0.8' },
        { opacity: 0.4, scale: '0.7 1.3' },
        { opacity: 0, scale: '2 0.5' }
      ],
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  };
}
