import { stopAnimations } from './stop-animations.js';

/**
 * Runs a Web Animation on an element, canceling any existing animations immediately. Returns a promise that resolves
 * when the animation completes gets canceled.
 */
export async function animate(
  el: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
): Promise<void> {
  // Stop existing animations
  await stopAnimations(el);

  // Start the new one
  const animation = el.animate(keyframes, options);

  // Return after finish/cancel and always resolve
  return new Promise(resolve => {
    const finishHandler = () => {
      animation.removeEventListener('finish', finishHandler);
      animation.removeEventListener('cancel', finishHandler);
      resolve();
    };

    animation.addEventListener('finish', finishHandler);
    animation.addEventListener('cancel', finishHandler);
  });
}
