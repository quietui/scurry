/**
 * Runs a Web Animation on an element, canceling any existing animations immediately. Returns a promise that resolves
 * when the animation completes gets canceled.
 */
export function animate(
  element: HTMLElement,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options: KeyframeAnimationOptions
): Promise<void> {
  // Cancel existing animations
  element.getAnimations().forEach(animation => animation.cancel());

  // Create abort controller for cleanup
  const abortController = new AbortController();
  const { signal } = abortController;

  return new Promise<void>(resolve => {
    const animation = element.animate(keyframes, options);

    // When the animation completes
    element.addEventListener(
      'animationend',
      () => {
        try {
          abortController.abort();
        } finally {
          resolve();
        }
      },
      { signal }
    );

    // When the animation gets canceled
    element.addEventListener(
      'animationcancel',
      () => {
        try {
          abortController.abort();
        } finally {
          resolve();
        }
      },
      { signal }
    );

    // Handle cases where the animation might end without firing events
    animation.finished
      .then(() => {
        try {
          abortController.abort();
        } finally {
          resolve();
        }
      })
      .catch(error => {
        try {
          abortController.abort();
        } finally {
          resolve();
        }
      });
  });
}
