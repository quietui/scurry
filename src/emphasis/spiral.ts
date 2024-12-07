import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Spirals with a smooth rotation */
export function spiral(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const rtl = options?.dir === 'rtl';
  return {
    keyframes: [
      { scale: 0.95, rotate: `${rtl ? 180 : -180}deg` },
      { scale: 1, rotate: '0deg' }
    ],
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  };
}
