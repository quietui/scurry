import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description A subtle wobble animation for emphasis */
export function wobble(options?: Partial<QuietAnimationOptions>): QuietAnimation {
  const isRtl = options?.dir === 'rtl';
  return {
    keyframes: [
      { rotate: '0deg' },
      { rotate: isRtl ? '' : '4deg', offset: 0.15 },
      { rotate: isRtl ? '' : '-3deg', offset: 0.3 },
      { rotate: isRtl ? '' : '2.5deg', offset: 0.45 },
      { rotate: isRtl ? '' : '-1.5deg', offset: 0.6 },
      { rotate: isRtl ? '' : '1deg', offset: 0.75 },
      { rotate: isRtl ? '' : '-0.5deg', offset: 0.9 },
      { rotate: '0deg' }
    ],
    easing: 'cubic-bezier(0.36, 0, 0.66, 1)'
  };
}
