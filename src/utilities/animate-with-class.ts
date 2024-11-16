/**
 * Applies a class to the specified element to animate it. The class is removed after the animation finishes or is
 * canceled, then the promise resolves. If applying the class doesn't trigger an animation, the promise resolves
 * immediately.
 */
export function animateWithClass(el: Element, className: string): Promise<void> {
  return new Promise<void>(resolve => {
    const controller = new AbortController();
    const { signal } = controller;
    const handleFinish = () => cleanup();

    const cleanup = () => {
      controller.abort();
      el.classList.remove(className);
      resolve();
    };

    el.classList.add(className);

    // Need to check after a microtask to ensure animations are registered
    queueMicrotask(() => {
      if (el.getAnimations().length === 0) {
        cleanup();
        return;
      }

      el.addEventListener('animationend', handleFinish, { once: true, signal });
      el.addEventListener('animationcancel', handleFinish, { once: true, signal });
    });
  });
}
