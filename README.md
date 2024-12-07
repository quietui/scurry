# Scurry Animations

Scurry provides unique animations designed for use with the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

Transitional animations are ideal for adding and removing objects, as they feature custom keyframes and easings for entering and exiting. Also included are several emphasis animations that are great for drawing attention to in-place objects.

Built for [Quiet UI](https://quietui.org/).

## Installation

```bash
npm install @quietui/scurry
```

## Importing animations

**To import an animation using a bundler:**

```js
import { bounce, tornado } from '@quietui/scurry';
```

**To import an animation using a browser,** use the full path for each animation. Importing `index.js` will force the browser to load every animation in the library. Make sure to adjust the path to wherever the library is being hosted.

```js
import { bounce } from '/dist/emphasis/drift.js';
import { tornado } from '/dist/transitions/drift.js';
```

To see a complete list of animations, refer to [`src/animations`](https://github.com/quietui/scurry/tree/main/src/animations). If you want to use the public CDN, you can [browse the animations here](https://www.jsdelivr.com/package/npm/@quietui/scurry?tab=files&path=dist%2Fanimations).

## Using animations

To get the keyframes and easings for each emphasis animation, call the imported function. An optional argument lets you choose the animation's directionality. To apply the animation, use the [`Element.animate()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method.

### Emphasis

Emphasis animations return a `QuietAnimation` object with `keyframes` and `easing` properties.

```ts
import { bounce } from '@quietui/scurry';

const box = document.getElementById('box');
const { keyframes, easing } = bounce({ dir: 'ltr' });

// Animate it
await box.animate(keyframes, {
  easing,
  duration: 1500
}).finished;

// The animations have finished!
```

### Transitions

Transition animations return a `QuietTransitionAnimation` object that has an `enter` and `exit` property, both of which contain `keyframes` and `easing` properties.

```ts
import { tornado } from '@quietui/scurry';

const box = document.getElementById('box');
const { enter, exit } = tornado({ dir: 'ltr' });

// Animate in
await box.animate(enter.keyframes, {
  easing: enter.easing,
  duration: 1500
}).finished;

// Animate out
await box.animate(exit.keyframes, {
  easing: exit.easing,
  duration: 1500
}).finished;

// The animations have finished!
```

## The animation manifest

In some cases, it might be useful to get a list of all animations provided by the library without importing them all. You can use the manifest to get a list of all animations, grouped by category.

```ts
import { animations } from '@quietui/scurry/dist/manifest.js';

// List all animations
animations.forEach(animation => {
  console.log(
    // The name of the animation
    animation.name,
    // A description of the animation
    animation.description,
    // The type of animation
    animation.type,
    // The path to the animation, relative to the library's root
    animation.path
  );
});

// List only emphasis animations
animations
  .filter(animation => animation.type === 'emphasis')
  .forEach(animation => {
    console.log(animation.name);
  });
```

## Do you accept PRs?

Yes! This library is designed to be expanded so pull requests are welcome. All submissions will be vetted for quality to make sure the animations are a good fit for the library. Even the best animations may require a few iteration cycles. Unfortunately, not all animations will be accepted.

If you're not sure if an animation makes sense for this library, [open an issue and ask](https://github.com/quietui/scurry/issues)!

## Developing

The developer sandbox will automatically run the project in watch mode, spin up an HTTP server, and open a browser to help you test animations more easily.

To spin up the sandbox for development, run:

```sh
npm start
```

To build the project, run:

```sh
npm run build
```

To update dependencies, run:

```sh
npm run check-updates
```

To create a new animation, add it to `src/emphasis` or `src/transition` and restart the dev server. The index and manifest are updated automatically at build time.
