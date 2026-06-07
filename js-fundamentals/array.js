console.log("\n___________ ⭐️📗 Array ___________\n");

// .toString()  .join()   .concat()   .flat()   .flatMap()   .push()  .pop()  .shift()   .unshift()   .splice()   .slice()   .some()   .map()   .filter()   .reduce()   .reverse()    .values()

var arr = ["mango", "apple", "lichi", "lemon", "custard"];
var num = [22, 18, 264, 6, 43, 58, 102];

console.log(arr.length);
console.log(arr.push("banana")); // return new length
console.log(arr.toString());
console.log(arr.join("--"));
console.log(arr.concat(num));
console.log(num.reverse()); // update original array
console.log(arr.indexOf("guava")); // array.indexOf(item, start) | returns index (default start = 0) and -1 if not found
console.log(arr.includes("apple"));

const arr1 = [
  ["1", "2"],
  ["3", "4", "5", ["6"], "7"],
];
// array.flat([depth]) | return new array
console.log(arr1.flat(1)); // Infinity to flatten the array

// array.flatMap(function(value, index, arr), thisValue) | map + flat in one step
arr.flatMap((x) => [x, x * 2]);

arr.pop(); // remove an element from the end
arr.shift(); // remove an element from the front
num.unshift(99); // add an element at the front

// array.slice(start, end) [exclusive end] | return new array | no change in original array
let newArr = num.slice(1, 4);
console.log(newArr);

// ⚠️ Trick to remember:  part of the SLICE
// array.splice(idx, count, item1, item2,...) | update original array | return new array containing the deleted items
console.log(arr.splice(1, 2));

// array.some(function(value, index, arr), this) | return boolean | checks whether at least 1 item of the array satisfies the condition
let resOfSome = arr.some((val) => val == "apple");
console.log(resOfSome);

// array.filter(function(value, index, arr), thisValue) | return new array that passes the condition
let filteredArray = arr.filter((val) => val > 50);
console.log(filteredArray);

// array.find(function(value, index, arr),thisValue) | value of the first element that pass the test otherwise `undefined`
let isFound = arr.find(function (val, idx) {
  return val == "apple";
});
console.log("result of find(): ", isFound);

// array.reduce(function(accumulator, value, index, arr), initialValue) | total result from the last call of the callback function | accumulator = 0 default
const maxItem = num.reduce((accumulator, curr) => {
  return curr > accumulator ? curr : accumulator;
}, 0);
console.log("Max item: ", maxItem);

// array.fill(value, start, end) | return array
arr.fill("Kiwi", 2, 4);

const total = num.reduce((accumulator, curr) => accumulator + curr);
console.log("Sum of the num array: ", total);

// array.every(function(value, index, arr), thisValue) | return boolean if all element pass the test
let allNegative = num.every((curr, idx) => curr < 0);
console.log("Is all elements are negative ? ", allNegative);

// ⭐️🚨 Iteration Methods
// for...of
for (const item of arr) console.log(item);

// classic for loop
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// array.forEach(function(value, index, arr), thisValue)
arr.forEach((val, idx) => {
  console.log("key: ", idx, " value: ", val);
});

// array.map(function(value, index, arr), thisValue) | return new array
let doubled = num.map((val, idx) => {
  return val * 2;
});
console.log(doubled);

console.log("array: ", arr);
console.log("number: ", num);

// -----------------------------------------------------------
//                CALL()  APPLY()  BIND()  METHOD
// -----------------------------------------------------------
/*
functionName.call(this, arg1, arg2, ...);
First argument will be the reference of this

functionName.apply(this, [arg1, arg2, ...]);
Use apply() when your arguments are already stored in an array

const newFunction = functionName.bind(this, arg1, arg2, ...);
It returns a new function copy, but does not❌ run function immediately
*/

const person1 = {
  fname: "Teddy",
  lname: "Henfrey",
};

var displayDetails = function (place, method) {
  console.log("Name =  " + this.fname + " " + this.lname, "in", place + ": Method @" + method);
};

displayDetails.call(person1);
displayDetails.call(person1, "Denmark", "all()");
displayDetails.apply(person1);
displayDetails.apply(person1, ["Copenhagen", "apply()"]);

let newFunction = displayDetails.bind(person1, "Greenland", "bind");
newFunction();

// -----------------------------------------------------------
//                SPREAD OPERATOR
// -----------------------------------------------------------
let arr10 = [1, 2, 3];
let arr11 = [11, 13, 17];

let copy = [...arr10]; // [1,2,3]
let merged = [...arr10, arr11]; // merge arrays

const maxPrice = Math.max(...arr10);
let chars = [..."hello"]; // convert string to char array ['h','e','l','l','o']

const user = { name: "Alex", role: "User" };
const updatedUser = { ...user, role: "Admin", active: true }; // { name: "Alex", role: "Admin", active: true }
