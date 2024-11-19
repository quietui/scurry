/** Immediately cancels all animations running on the specified element. */
export function stopAnimations(el: Element): Promise<void> {
  const animations = el.getAnimations();
  animations.forEach(animation => animation.cancel());

  // Wait a moment for finish/cancel handlers to run before we resolve
  return new Promise(resolve => {
    requestAnimationFrame(() => resolve());
  });
}
