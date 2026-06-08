console.log("\n___________ ⭐️📘 Throttling ___________\n");

// Throttle: fire fn at most once every `delay` ms, ignore extra calls in between.
// Use case: scroll, mousemove, button spam, API rate limit.

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// No matter how fast user scrolls, fires max once per seconds
function logScroll(pos) {
  console.log("Scroll position:", pos);
}

const throttledScroll = throttle(logScroll, 1000);

throttledScroll(10); // fires
throttledScroll(20); // ignored
throttledScroll(30); // ignored
setTimeout(() => throttledScroll(40), 1100); // fires after 1s

/*
KEY POINTS:
- Closure holds `lastCall` timestamp across calls.
- Compare `Date.now() - lastCall` against `delay`.
- `apply(this, args)` preserves context + arguments.
- Debounce vs Throttle:
    Debounce → wait until user stops (search box)
    Throttle → fire at fixed interval (scroll, resize)
*/
