import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Spiral rotation that maintains position */
export function spin(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const isRtl = options?.dir === 'rtl';
  return {
    keyframes: [{ transform: 'rotate(0deg)' }, { transform: `rotate(${isRtl ? '-360deg' : '360deg'})` }],
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };
}
