# Scurry

Animations, easings, and utilities for use with the Web Animations API.

Built for [Quiet UI](https://quietui.org/).

## Installation

```bash
npm install @quietui/scurry
```

## Importing animations

To import an animation:

```js
import { tada } from '@quietui/scurry';
```

**Note:** if you're importing directly from a browser, use the full path to prevent the entire library from loading. Make sure to replace `@quiet/scurry` with the path to the library, either a CDN or a local folder.

```js
import { tada } from '/path/to/scurry/dist/animations/tada.js';
import { easeInOut } from '/path/to/scurry/dist/easings/ease-in-out.js';
```

<details>
  <summary>Show all available animations</summary>
  <ul>
    <li>back-in-down</li>
    <li>back-in-left</li>
    <li>back-in-right</li>
    <li>back-in-up</li>
    <li>back-out-down</li>
    <li>back-out-left</li>
    <li>back-out-right</li>
    <li>back-out-up</li>
    <li>bounce-in-down</li>
    <li>bounce-in-left</li>
    <li>bounce-in-right</li>
    <li>bounce-in-up</li>
    <li>bounce-in</li>
    <li>bounce-out-down</li>
    <li>bounce-out-left</li>
    <li>bounce-out-right</li>
    <li>bounce-out-up</li>
    <li>bounce-out</li>
    <li>bounce</li>
    <li>fade-in-bottom-left</li>
    <li>fade-in-bottom-right</li>
    <li>fade-in-down-big</li>
    <li>fade-in-down</li>
    <li>fade-in-left-big</li>
    <li>fade-in-left</li>
    <li>fade-in-right-big</li>
    <li>fade-in-right</li>
    <li>fade-in-top-left</li>
    <li>fade-in-top-right</li>
    <li>fade-in-up-big</li>
    <li>fade-in-up</li>
    <li>fade-in</li>
    <li>fade-out-bottom-left</li>
    <li>fade-out-bottom-right</li>
    <li>fade-out-down-big</li>
    <li>fade-out-down</li>
    <li>fade-out-left-big</li>
    <li>fade-out-left</li>
    <li>fade-out-right-big</li>
    <li>fade-out-right</li>
    <li>fade-out-top-left</li>
    <li>fade-out-top-right</li>
    <li>fade-out-up-big</li>
    <li>fade-out-up</li>
    <li>fade-out</li>
    <li>flash</li>
    <li>flip-in-x</li>
    <li>flip-in-y</li>
    <li>flip-out-x</li>
    <li>flip-out-y</li>
    <li>flip</li>
    <li>head-shake</li>
    <li>heart-beat</li>
    <li>hinge</li>
    <li>jack-in-the-box</li>
    <li>jello</li>
    <li>light-speed-in-left</li>
    <li>light-speed-in-right</li>
    <li>light-speed-out-left</li>
    <li>light-speed-out-right</li>
    <li>pulse</li>
    <li>roll-in</li>
    <li>roll-out</li>
    <li>rotate-in-down-left</li>
    <li>rotate-in-down-right</li>
    <li>rotate-in-up-left</li>
    <li>rotate-in-up-right</li>
    <li>rotate-in</li>
    <li>rotate-out-down-left</li>
    <li>rotate-out-down-right</li>
    <li>rotate-out-up-left</li>
    <li>rotate-out-up-right</li>
    <li>rotate-out</li>
    <li>rubber-band</li>
    <li>shake-x</li>
    <li>shake-y</li>
    <li>shake</li>
    <li>slide-in-down</li>
    <li>slide-in-left</li>
    <li>slide-in-right</li>
    <li>slide-in-up</li>
    <li>slide-out-down</li>
    <li>slide-out-left</li>
    <li>slide-out-right</li>
    <li>slide-out-up</li>
    <li>swing</li>
    <li>tada</li>
    <li>wobble</li>
    <li>zoom-in-down</li>
    <li>zoom-in-left</li>
    <li>zoom-in-right</li>
    <li>zoom-in-up</li>
    <li>zoom-in</li>
    <li>zoom-out-down</li>
    <li>zoom-out-left</li>
    <li>zoom-out-right</li>
    <li>zoom-out-up</li>
    <li>zoom-out</li>
  </ul>
</details>

## Importing easings

To import an easing:

```js
import { easeInOut } from '@quietui/scurry';
```

<details>
  <summary>Show all available easings</summary>
  <ul>
    <li>ease-in-sine</li>
    <li>ease-out-sine</li>
    <li>ease-in-out-sine</li>
    <li>ease-in-quad</li>
    <li>ease-out-quad</li>
    <li>ease-in-out-quad</li>
    <li>ease-in-cubic</li>
    <li>ease-out-cubic</li>
    <li>ease-in-out-cubic</li>
    <li>ease-in-quart</li>
    <li>ease-out-quart</li>
    <li>ease-in-out-quart</li>
    <li>ease-in-quint</li>
    <li>ease-out-quint</li>
    <li>ease-in-out-quint</li>
    <li>ease-in-expo</li>
    <li>ease-out-expo</li>
    <li>ease-in-out-expo</li>
    <li>ease-in-circ</li>
    <li>ease-out-circ</li>
    <li>ease-in-out-circ</li>
    <li>ease-in-back</li>
    <li>ease-out-back</li>
    <li>ease-in-out-back</li>
  </ul>  
</details>

## Using with the Web Animations API

To animate an element directly with the Web Animations API:

```js
import { flip, easeInSine } from '@quietui/scurry';

const el = document.getElementById('my-element');

el.animate(flip, {
  duration: 1500,
  iterations: Infinity,
  easing: easeInSine
});
```

## Attribution

- Animations are based on the timeless [Animate.css](https://animate.style/) library.
