/**
 * Runs a Web Animation on an element, canceling any existing animations immediately. Returns a promise that resolves
 * when the animation completes gets canceled.
 */
export function animate(
  el: Element,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options: KeyframeAnimationOptions
): Promise<void> {
  return new Promise(resolve => {
    // Stop existing animations
    el.getAnimations().forEach(animation => animation.cancel());

    requestAnimationFrame(() => {
      // Start the new animation
      const animation = el.animate(keyframes, options);

      // Listen for finish/cancel to guarantee it resolves
      const handleComplete = () => {
        animation.removeEventListener('finish', handleComplete);
        animation.removeEventListener('cancel', handleComplete);
        resolve();
      };

      animation.addEventListener('finish', handleComplete);
      animation.addEventListener('cancel', handleComplete);
    });
  });
}
