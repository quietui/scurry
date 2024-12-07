/** The interface for Quiet animations. */
export interface QuietAnimation {
  /** The keyframes to use for the animation. */
  keyframes: Keyframe[];
  /** The recommended easing function for this animation. */
  easing: string;
}

/** Transition animations that feature custom enter and exit animations. */
export interface QuietTransitionAnimation {
  /** The animation to use when entering. */
  enter: QuietAnimation;
  /** The animation to use when exiting. */
  exit: QuietAnimation;
}

/* Animation options */
export interface QuietAnimationOptions {
  /** The directionality to use with the animation. */
  dir: 'ltr' | 'rtl';
}
