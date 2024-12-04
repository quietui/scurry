/** The interface for Scurry animations. */
export interface QuietAnimation {
  /** The animation and timing function to use when animating in. */
  enter: {
    keyframes: Keyframe[];
    easing: string;
  };

  /** The animation and timing function to use when animating out. */
  exit: {
    keyframes: Keyframe[];
    easing: string;
  };
}

/* Animation options */
export interface QuietAnimationOptions {
  /** The directionality to use with the animation. */
  dir: 'ltr' | 'rtl';
}
