//   -------    SNIPPET - 0  [ let vs var in setTimeout ]  -----------

// ✅ let → block scoped → new `i` binding per iteration
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output: 0 1 2 3 4

// ❌ var → function scoped → all callbacks share the same `i`
// by the time they fire, loop is done → i = 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 5 5 5 5 5

//   -------    SNIPPET - 1  [ Closure + let mutation in loop ]  -----------
// fun() increments i before setTimeout fires, then decrements after print
// let is block-scoped to the for loop → shared across iterations
function a() {
  for (let i = 0; i < 3; i++) {
    function fun() {
      i++;
      setTimeout(() => {
        console.log(i--);
      }, 400);
    }

    fun(i);
  }
}

a();
// Output: 1 3

//   -------    SNIPPET - 2  [ Closure — captures reference, not value ]  -----------
// fun() closes over the OUTER `let i = 0` (global-ish), NOT the for-loop's `let i`
// All 3 calls share the same outer i → incremented 3 times before setTimeout fires
let i = 0;
function fun() {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  // this `i` is a separate block-scoped variable
  fun();
}
// Output: 3 2 1
// WHY: closure holds a REFERENCE to outer i, not a copy.
//      All 3 setTimeout callbacks share the same outer i (=3 by the time they fire),
//      then each call decrements it → 3, 2, 1

//   -------    SNIPPET - 3  [ Argument passing creates a COPY ]  -----------
// i is passed as argument → each call gets its own local copy → no shared reference
function fun(i) {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  fun(i); // passes 0, 1, 2 as separate copies
}
// Output: 1 2 3

// ⚠️ var + shared reference → race condition
var i = 0;
function fun() {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 1000);
}

for (i = 0; i < 3; i++) {
  fun();
}
// Output: 4 3  (fun increments i to 4 before loop ends, then callbacks fire)

//   -------    SNIPPET - 4  [ IIFE — variable scope ]  -----------
// IIFE: Immediately Invoked Function Expression → runs once, creates own scope

// var a = (b = 42) → b is implicitly global (no var/let), a is function-scoped
(function () {
  var a = (b = 42); // b leaks to global, a stays local
})();

console.log(b); // 42        — b is global
console.log(typeof b); // "number"
console.log(typeof a); // "undefined" — a not in scope, typeof won't throw
console.log(a); // ReferenceError: a is not defined

// catch block scope: var is function-scoped (not catch-scoped)
// x declared with var inside catch → hoisted to IIFE function scope
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2; // var x hoisted to function scope; y too
    console.log(x); // 1
  }
  console.log(x); // undefined — var x exists but catch param shadowed it; now undefined
  console.log(y); // 2 — var y hoisted to function scope
})();
// Output: 1 → undefined → 2

// IIFE returning a value via inner arrow function
function aa() {
  return (() => 0)();
}
console.log(aa()); // 0

//   -------    SNIPPET - 5  [ IIFE fix for var + setTimeout ]  -----------

// ❌ var is function-scoped → all callbacks close over the same i
// loop finishes (i=5) before any setTimeout fires
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // shared reference → always 5
  }, i * 1000);
}
// Output: 5 5 5 5 5

// ✅ IIFE wraps each iteration → argument x is a COPY of i at that moment
function fun() {
  for (var i = 0; i < 5; i++) {
    (function (x) {
      // x = 0,1,2,3,4 — new scope per iteration
      setTimeout(function () {
        console.log(x); // own copy, unaffected by i changing
      }, x * 1000);
    })(i);
  }
}

fun();
// Output: 0 1 2 3 4
// 📌 Key: passing i as argument creates a VALUE COPY in x → closure over x, not i

//   -------    SNIPPET - 6  [ typeof, comparison chaining, ASI ]  -----------

// typeof always returns a string → typeof of any string = "string"
console.log(typeof typeof 1); // "string"  →  typeof 1 = "number", typeof "number" = "string"

// Comparison operators are left-to-right; result of first (boolean) feeds into second
console.log(1 < 2 < 3); // true  → (1<2)=true → true<3 → 1<3 → true
console.log(3 > 2 > 1); // false → (3>2)=true → true>1 → 1>1 → false

// ✅ object on same line as return → returned correctly
function foo1() {
  return {
    bar: "hello",
  };
}
console.log(foo1()); // { bar: "hello" }

// ❌ ASI (Automatic Semicolon Insertion) inserts `;` after `return`
// everything below return is dead code
function foo2() {
  return; // ← ASI adds semicolon here → returns undefined
  {
    bar: "hello";
  }
}
console.log(foo2()); // undefined

//   -------    SNIPPET - 7  [ Closure — returning inner function ]  -----------
// y() closes over x()'s scope → even after x() finishes, y still has access to b
function x() {
  var a = 200,
    b = 500;

  function y() {
    console.log("Lexical scope access:", b); // b = 500, from x's scope
  }

  return y; // return function reference, not invocation
}

var closure = x(); // x() runs and returns y; x's execution context is gone
console.log(closure); // [Function: y]
closure(); // still logs 500 — closure preserved x's scope

x()(); // same: create + immediately invoke inner function

//   -------    SNIPPET - 8  [ Function Notations ]  -----------

// 1. Function Declaration — hoisted fully, can be called before definition
function a() {
  console.log("Hello");
}
a();

// 2. Function Expression — assigned to var; NOT hoisted (var is, but value isn't)
var b = function () {
  console.log("Hello");
};
b();

// 3. Named Function Expression — name (abc) accessible only inside the function body
var c = function abc() {
  console.log("Named Function");
};
c(); // ✅ works via variable c
// abc() // ❌ ReferenceError — abc not in outer scope

// 4. First-Class Function — functions treated as values: assign, pass, return
var d = function (param) {
  return function abc(param) {
    // returns a function
    var xp = 1;
    console.log(param + xp);
  };
};

console.log(d("Developer")); // logs the inner function reference

//   -------    SNIPPET - 9  [ Event Loop — callback queue vs call stack ]  -----------
// setTimeout goes to Web API → callback queue → runs AFTER call stack is empty
setTimeout(() => {
  console.log("Inside Timer");
}, [5000]);

// x() is sync → goes on call stack immediately → y() called inline
function x(y) {
  console.log("Inside X");
  y(); // callback invoked synchronously inside x
}

x(function y() {
  console.log("Y");
});

// Output:
// Inside X      ← sync
// Y             ← sync (callback passed to x, called immediately)
// Inside Timer  ← async (after 5s, from callback queue)

//   -------    SNIPPET - 10  [ Block scope: var vs let/const ]  -----------
// var → global/function scoped; let/const → block scoped — different scope levels
var a = 22;
let b = 44; // Script scope
{
  var a = 100; // Global scope; even though 'a' is also inside block{...}
  let b = 200; // Block scope
  const c = 300; // Block scope

  console.log(a); // 100
  console.log(b); // 200 ← Block scoped 'b'
  console.log(c); // 300
}
console.log(a, b); // 100 44 ← Script scoped 'b'

//   -------    SNIPPET - 11  [ Hoisting — var undefined vs let ReferenceError ]  -----------
// var: hoisted + initialized undefined; let: TDZ → ReferenceError before declaration
var c = 21;
var girl = function () {
  console.log(c); // undefined — var c hoisted but not yet assigned
  var c = 20;
};
girl();

var c = 21;
var girl = function () {
  console.log(c); // ReferenceError — let is in TDZ, not initialized
  let c = 20;
};
girl();

//   -------    SNIPPET - 12  [ Array.reduce() — filter + map in one pass ]  -----------
// reduce(callback, initialValue) → accumulate acc across all elements
const users = [
  {
    name: "Oswald",
    age: 24,
  },
  {
    name: "Henry",
    age: 32,
  },
  {
    name: "Daisy",
    age: 14,
  },
  {
    name: "Johnny",
    age: 51,
  },
];

const result = users.reduce((acc, currValue) => {
  if (currValue.age < 30) acc.push(currValue.name);

  return acc;
}, []);

console.log("Result : ", result);

//   -------    SNIPPET - 13  [ Object.freeze() — shallow immutability ]  -----------
// freeze() prevents property modification; throws in strict mode, silently fails otherwise
const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // expected output: 42

//   -------    SNIPPET - 14  [ Event loop — setTimeout(0) deferred after sync code ]  -----------
// setTimeout(0) goes to callback queue → fires AFTER all sync code completes
console.log("Before");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 0);

console.log("After");

// Output:
// Before
// After
// Inside SetTimeOut  ← setTimeout(0) still deferred to next event loop tick

//   -------    SNIPPET - 15  [ Higher Order Function ]  -----------
// A function that accepts functions as parameters and/or returns a function
// Example 1
var radiusArr = [1, 2, 3, 4];

function Area(radius) {
  return (Math.PI * radius * radius).toFixed(2); // Pi * r * r
}

var calculate = function (radiusArr, Operation) {
  var res = [];
  var len = radiusArr.length;
  for (var i = 0; i < len; i++) res.push(Operation(radiusArr[i])); //  Area(radiusArr[i])

  return res;
};

console.log(calculate(radiusArr, Area)); // Higher Order Function

// Example 2
function nestedfunc() {
  console.log("this is nestedfunc");
}

function hof(func) {
  console.log("this is original func");
  func();
}

hof(nestedfunc);

//   -------    SNIPPET - 16  [ this — arrow vs regular function ]  -----------
// arrow function inherits `this` from enclosing lexical scope (not the calling object)
const obj = {
  name: "John",
  mystry: function () {
    const nestedObj = {
      name: "Fizz",
      logName: () => {
        console.log(this.name); // `this` = outer obj (John), NOT nestedObj (Fizz)
      },
    };

    nestedObj.logName();
  },
};

obj.mystry(); // John — arrow fn uses `this` from mystry's scope (obj)
// if logName were function() {...}, `this` would be nestedObj → "Fizz"

var mom_name = "Bobby";

const parent = {
  mom_name: "Chimpu",
  mother: () => {
    mom_name = "Lorry"; // modifies global mom_name (no `this.` prefix)
    return `${this.mom_name} is my mother.`; // `this` = global/window → undefined
  },
};

console.log(parent.mother());
// arrow fn `this` = global scope → this.mom_name is undefined (strict) or window.mom_name

const cart = ["dress", "shoes", "laptop", "softtoy"];

//   -------    SNIPPET - 17  [ Callback Hell — nested callbacks ]  -----------
// each async step depends on the previous → deeply nested, hard to read/maintain
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function () {
    getDetails(orderId);
  });
});

//   -------    SNIPPET - 18  [ Promise Chaining ]  -----------
// .then() returns a new promise → chain instead of nest; .catch() handles any rejection
var id = "demo@6";
const promise = isValid(id);

promise
  .then(function (data) {
    console.log(data); // log for resolve
    return data;
  })
  .then((data) => {
    return promise1(data); // returning promise obj
  })
  .then((res) => {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

function isValid(id) {
  const pr = new Promise(function (resolve, reject) {
    if (check(id)) {
      setTimeout(function () {
        resolve(id);
      }, 5000);
    } else {
      const err = new Error("Validation failed!");
      reject(err);
    }
  });

  console.log(pr);
  return pr;
}

function check(id) {
  if (id.includes("@") || id.includes("#") || id.includes("$")) return true;
  return false;
}

function promise1(info) {
  if (info)
    return new Promise(function (resolve, reject) {
      resolve("Ahh! success.");
    });

  return null;
}

//   -------    SNIPPET - 19  [ Memoization — cache expensive fn results ]  -----------
// cache results by stringified args → skip recomputation on repeated calls
var memoizedFunc = (func, params) => {
  const res = {};
  return function (...args) {
    console.log(args);
    var argsCache = JSON.stringify(args); // [2312, 1029]

    if (!res[argsCache]) {
      res[argsCache] = func(params || this, ...args);
    } else return res[argsCache];
  };
};

const messyFunc = (num1, num2) => {
  for (var i = 0; i <= 1000000000; i++) {}
  return num1 * num2;
};

const result = memoizedFunc(messyFunc);

console.time("First func call");
console.log(result(2312, 1029)); // messyFunc(num1, num2)
console.timeEnd("First func call");

console.time("Second func call");
console.log(result(2312, 1029)); // cache hit → instant
console.timeEnd("Second func call");
