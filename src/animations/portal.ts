import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** A sci-fi animation that warps elements through a dimensional gateway. */
export function portal(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    enter: {
      keyframes: [
        { opacity: 0, transform: 'scale(2.5, 0.2) rotate(45deg)', filter: 'blur(20px) saturate(200%)' },
        { opacity: 0.3, transform: 'scale(1.5, 0.6) rotate(25deg)', filter: 'blur(15px) saturate(175%)' },
        { opacity: 0.6, transform: 'scale(1.2, 0.8) rotate(10deg)', filter: 'blur(10px) saturate(150%)' },
        { opacity: 0.8, transform: 'scale(1.1, 0.9) rotate(5deg)', filter: 'blur(5px) saturate(125%)' },
        { opacity: 1, transform: 'scale(1) rotate(0)', filter: 'blur(0) saturate(100%)' }
      ],
      easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    exit: {
      keyframes: [
        { opacity: 1, transform: 'scale(1) rotate(0)', filter: 'blur(0) saturate(100%)' },
        { opacity: 0.7, transform: 'scale(1.2, 0.8) rotate(-10deg)', filter: 'blur(10px) saturate(150%)' },
        { opacity: 0.3, transform: 'scale(0.5, 1.5) rotate(-25deg)', filter: 'blur(15px) saturate(175%)' },
        { opacity: 0, transform: 'scale(0.2, 2.5) rotate(-45deg)', filter: 'blur(20px) saturate(200%)' }
      ],
      easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
  };
}
