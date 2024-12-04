# Scurry Animations

Scurry provides unique animations designed for use with the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). These animations are ideal for enter and exit transitions, but work great in many other scenarios as well. Each animation ships with enter and exit keyframes and recommended easings for each transition.

Built for [Quiet UI](https://quietui.org/).

## Installation

```bash
npm install @quietui/scurry
```

## Importing animations

**To import an animation using a bundler:**

```js
import { drift, elevator, glitch } from '@quietui/scurry';
```

**To import an animation using a browser,** use the full path for each animation. Importing `index.js` will force the browser to load every animation in the library. Make sure to adjust the path to wherever the library is being hosted.

```js
import { drift } from '/dist/animations/drift.js';
import { elevator } from '/dist/animations/elevator.js';
import { glitch } from '/dist/animations/glitch.js';
```

To see a complete list of animations, refer to [`src/animations`](https://github.com/quietui/scurry/tree/main/src/animations). If you want to use the public CDN, you can [browse the animations here](https://www.jsdelivr.com/package/npm/@quietui/scurry?tab=files&path=dist%2Fanimations).

## Enter and exit animations

To get the keyframes and easings for each animation, call the function you just imported. An optional argument lets you choose the animation's directionality. To apply the animation, use the [`Element.animate()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method.

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

In some cases, it might be useful to get a list of all animations provided by the library. You can use the manifest to get a list of all animations.

```ts
import { animations } from '@quietui/scurry/dist/manifest.js';

// Log every available animation
for (const [name, details] of Object.entries(animations)) {
  console.log(name, details.description, details.path);
}
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
