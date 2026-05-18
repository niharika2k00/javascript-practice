// A callback is a function passed as an argument to another function

function myFunction(callback) {
  setTimeout(() => {
    const data = { name: "Aman", age: 21 };
    callback(data);
  }, 3000);
}

myFunction((info) => {
  console.log("Data:", info);
});

// Syntax :
// setInterval(function, milliseconds)
// clearInterval(function_name)

// setTimeout(function, milliseconds)
// clearTimeout(function_name)

// setTimeout(function, delay, param1, param2, ...);
// setTimeout(clearInterval, 5000, interval); // shorthand
// setTimeout(greet, 1000, "Alice", "Engineer"); // ✅ short form

//  ⚠️ Note: setTimeout / setInterval function automatically called

function greet(name, profession) {
  console.log(`Hello, this is ${name} a ${profession}.`);
}

setInterval(() => {
  console.count("setInterval in action");
}, 2000);

// set an interval and stop it after 5 seconds
const interval = setInterval(() => {
  console.log("running every second...");
}, 1000);

setTimeout(() => {
  console.log("stopping after 5 sec");
  clearInterval(interval); // ❌ stopped!
}, 5000);

// set a timeout and cancel it before 3 seconds
const timer = setTimeout(() => {
  console.log("This will NOT run!");
}, 3000);

clearTimeout(timer); // ❌ cancelled!

// ------------------------------------------------
// build an OTP timer that stops when user submits
// ------------------------------------------------
let seconds = 30;

const otpTimer = setInterval(() => {
  console.log(`OTP expires in ${seconds}s`);
  seconds--;
  if (seconds < 1) {
    clearInterval(otpTimer);
    console.log("OTP expired!");
  }
}, 1000);

// and this otpTimer should be called onUserSubmit button
// function onUserSubmit() {  clearInterval(otpTimer); }

async function fetchData() {
  try {
    const response = await fetch("https://potterapi-fedeperin.vercel.app/en/houses");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

fetchData();

// ------------------------------------------------
// Encounter an issue, suggest various ways to solve this
// ------------------------------------------------
function placeOrder() {
  setTimeout(() => {
    return Math.random() * 10 <= 5 ? "Bag" : "Shoe";
  }, 2000);
}

let order = placeOrder();
console.log("Order is for: " + order); // undefined ⁉️ ISSUE

// To solve issue - we need to create Promise and handle this asynchronously .then() | async/await
// Method 1:
function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let item = Math.random() * 10 <= 5 ? "Bag" : "Shoe";
      resolve(item);
    }, 2000);
  });
}

placeOrder()
  .then((res) => console.log(`Order is for ${res}`))
  .catch((err) => console.log(err));

var getOrder = async () => {
  const order = await placeOrder();
  console.log("Order is for " + order); // ✅ Bag or Shoe
};
getOrder();
