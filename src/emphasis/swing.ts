import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Hinged swinging motion */
export function swing(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const isRtl = options?.dir === 'rtl';
  return {
    keyframes: [
      { transform: `rotate(0deg)`, transformOrigin: 'top center' },
      { transform: `rotate(${isRtl ? '-15deg' : '15deg'})`, offset: 0.2 },
      { transform: `rotate(${isRtl ? '10deg' : '-10deg'})`, offset: 0.4 },
      { transform: `rotate(${isRtl ? '-5deg' : '5deg'})`, offset: 0.6 },
      { transform: `rotate(${isRtl ? '5deg' : '-5deg'})`, offset: 0.8 },
      { transform: `rotate(0deg)` }
    ],
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.66)'
  };
}
