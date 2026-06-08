console.log("\n___________ ⭐️📘 Debouncing ___________\n");

// Debounce: delay fn until user stops triggering for `delay` ms.
// Use case: search input, resize, autosave.

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    console.log(...args);
    clearTimeout(timerId);
    // args is an array so using .apply() not .call()
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function search(query) {
  console.log("API call:", query);
}

const debouncedSearch = debounce(search, 300);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react"); // only this fires after 300ms pause

/*
KEY POINTS:
- Closure holds `timerId` across calls.
- clearTimeout resets the wait on every call.
- `apply(this, args)` preserves context + arguments.
- Debounce vs Throttle:
    Debounce → fire after user stops (search box)
    Throttle → fire at fixed interval (scroll, resize)
*/
