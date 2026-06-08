// Sliding window log rate limiter
function createRateLimiter(maxRequests, interval) {
  const store = new Map(); // id → [timestamps]

  return function (id) {
    if (!store.has(id)) store.set(id, []);

    const now = Date.now();
    const timestamps = store.get(id);
    console.log("timestamps:", timestamps);

    // drop expired timestamps
    while (timestamps.length > 0 && timestamps[0] <= now - interval) {
      console.log("now:", now, "\ninterval:", interval, "\ndifference:", now - interval);
      timestamps.shift();
    }

    if (timestamps.length >= maxRequests) throw new Error(`Rate limit exceeded for ${id}`);

    timestamps.push(now);
    console.log(`✅ "${id}" allowed — ${timestamps.length}/${maxRequests} used`);
  };
}

// helper to catch logs
var safeLimiterCall = (id) => {
  try {
    limiter(id);
  } catch (err) {
    console.error(`❌ ${err.message}`);
  }
};

// allow max of 3 request per 5secs
const limiter = createRateLimiter(3, 5000);

// all 4 events fire at the same time
safeLimiterCall("user-1");
safeLimiterCall("user-1");
safeLimiterCall("user-1");
safeLimiterCall("user-1");
setTimeout(() => {
  safeLimiterCall("user-1");
}, 6000);

safeLimiterCall("user-2");
setTimeout(() => {
  safeLimiterCall("user-2");
}, 6000); // this event fires after 6secs
