console.log("\n___________ ⭐️📗 Callback ___________\n");
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

// ⚠️ Note: setTimeout / setInterval function automatically called

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
