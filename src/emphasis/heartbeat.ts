import type { QuietAnimation, QuietAnimationOptions } from '../types.js';

/** @description Heartbeat-like pulsing effect */
export function heartbeat(_options?: Partial<QuietAnimationOptions>): QuietAnimation {
  return {
    keyframes: [
      { transform: 'scale(1)', offset: 0 },
      { transform: 'scale(1.12)', offset: 0.15 },
      { transform: 'scale(1)', offset: 0.3 },
      { transform: 'scale(1.06)', offset: 0.45 },
      { transform: 'scale(1)', offset: 0.6 }
    ],
    easing: 'cubic-bezier(0.25, 0, 0.35, .5)'
  };
}
