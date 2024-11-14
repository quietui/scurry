/**
 * Applies a class to the specified element to animate it. The class is removed after the animation finishes or is
 * canceled, then the promise resolves. If applying the class doesn't trigger an animation, the promise resolves
 * immediately.
 */
export default function animateWithClass(el: Element, className: string) {
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
