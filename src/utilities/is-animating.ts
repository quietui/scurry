/** Determines if the specified element is currently animating. */
export function isAnimating(el: Element): boolean {
  return el.getAnimations().some(animation => animation.playState === 'running');
}
