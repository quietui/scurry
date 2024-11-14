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

/**
 * Applies a class to the specified element to animate it. The class is removed after the animation finishes or is
 * canceled, then the promise resolves. If applying the class doesn't trigger an animation, the promise resolves
 * immediately.
 */
export function animateWithClass(el: Element, className: string) {
  return new Promise<void>(resolve => {
    const controller = new AbortController();

    el.classList.add(className);

    // If no animations are queued after adding the class, there's nothing to do
    if (el.getAnimations().length === 0) {
      resolve();
    }

    // Wait for the animation to end
    el.addEventListener(
      'animationend',
      () => {
        el.classList.remove(className);
        controller.abort();
        resolve();
      },
      { once: true }
    );

    // If the animation is canceled, abort and resolve
    el.addEventListener(
      'animationcancel',
      () => {
        el.classList.remove(className);
        controller.abort();
        resolve();
      },
      { once: true, signal: controller.signal }
    );
  });
}
