console.log("\n___________ ⭐️📗 Array ___________\n");

// .toString()  .join()   .concat()   .flat()   .flatMap()   .push()  .pop()  .shift()   .unshift()   .splice()   .slice()   .some()   .map()   .filter()   .reduce()   .reverse()    .values()

var arr = ["mango", "apple", "lichi", "lemon", "custard"];
var num = [22, 18, 264, 6, 43, 58, 102];

console.log(arr.length);
console.log(arr.push("banana"));
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

// array.splice(idx, count, item1, item2,...) | update original array | return new array containing the deleted items
console.log(arr.splice(1, 2));

console.log("array: ", arr);
console.log("number", num);

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
fruits.fill("Kiwi", 2, 4);

const total = num.reduce((accumulator, curr) => accumulator + curr);
console.log("Sum of the num array: ", total);

// array.every(function(value, index, arr), thisValue) | return boolean if all element pass the test
let allNegative = num.every((curr, idx) => curr < 0);
console.log("Is all elements are negative ? ", allNegative);

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
console.log("number", num);

// -----------------------------------------------------------
//                CALL() , APPLY() , BIND()   METHOD        https://www.w3schools.com/js/js_function_bind.asp
// -----------------------------------------------------------
/*
    call() method takes arguments separately. Function passed as arguement has context of this, explicitly sets it and controls the execution context of the fn.s
    apply() method takes arguments as an array
*/
// const person1 = {
//   fname: "Niharika",
//   lname: "Dutta",
// };

// const person2 = {
//   fname: "Teddy",
//   lname: "Henfrey",
// };

// var display = function (place, method) {
//   console.log("Name =  " + this.fname + " " + this.lname, "in", place + ": Method @", method);
// };

// // func.call()  =>  1st parameter refers to the object[this], then rest refers as variables. Here, the func passed is referred to as this
// display.call(person1, "Denmark", "all()");
// display.call(person2);

// display.apply(person2, ["Copenhagen", "apply()"]);

// //  Bind => doesnt invoke the method directly, but it returns a copy of the function.
// let res = display.bind(person2, "Greenland", "bind");
// res();

// https://www.geeksforgeeks.org/javascript/javascript-array-methods/
