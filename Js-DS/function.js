// -----------------------------------------------------------
//               ARRAY  ITERATION      https://www.w3schools.com/js/js_array_iteration.asp
// -----------------------------------------------------------
// every ()  :  array.every(function(currentValue, index, arr), thisValue)
var num = [2, 45, -100, 96, -32];
console.log("Result of every()  =>  ", num.every(allPositive)); //  false

function allPositive(ele, index, arr) {
  console.log("index: ", index);
  return ele > 0;
}

// forEach(val, index, arr);
num.forEach((val, idx) => {
  console.log(val);
});

//  map(val, index, arr);   Return: array
num.map((val, idx, arr) => {
  console.log(val);
});

//  filter(val, index, arr);   Return: array
var ans = num.filter((val, idx, arr) => {
  console.log(val); // 2 45 ....
});
console.log(ans); // []

//  find()  -->  returns the value of the first element that passes a test.
num.find((val, idx, arr) => {
  if (val > 20) return val;
});

//  array.includes(element, start)
let text = "hello world";
text.includes("world");

var arr = [1, 2, 3];
console.log([...arr, 5]); // [1 2 3 5] append element that doesn't change the original array

const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};
var updatedUser = { ...user, age: 20 }; // update age parameter value

//   slice ()  :   array.slice(start, end)         exclusive END.  [DONOT overwrite the original arr]
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1)); // ['Lemon', 'Apple']
console.log(fruits.slice(1, 4));

//  splice ()   :    array.splice(index, howMany, item1, ....., itemX)     ==>     REMOVES the element and REPLACE into a new array.
/*
    -  Overwrite the Original Array
    -  Add element at postion 2 & remove 1 element
*/
var prep = ["is", "at", "before", "after", "above"];
prep.splice(2, 1, "beneath", "near");
prep.splice(3); // equivalent to prep.splice(3 , 3)   overwrite with NULL
console.table(prep);

//   fill ()  :   array.fill(value, start, end)
/*
    -  Overwrite the Original Array a
    -  Replace the Element
*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

console.log(fruits);

// -----------------------------------------------------------
//                CALL() , APPLY() , BIND()   METHOD        https://www.w3schools.com/js/js_function_bind.asp
// -----------------------------------------------------------
/*
    call() method takes arguments separately. Function passed as arguement has context of this, explicitly sets it and controls the execution context of the fn.s
    apply() method takes arguments as an array
*/
const person1 = {
  fname: "Niharika",
  lname: "Dutta",
};

const person2 = {
  fname: "Teddy",
  lname: "Henfrey",
};

var display = function (place, method) {
  console.log("Name =  " + this.fname + " " + this.lname, "in", place + ": Method @", method);
};

// func.call()  =>  1st parameter refers to the object[this], then rest refers as variables. Here, the func passed is referred to as this
display.call(person1, "Denmark", "all()");
display.call(person2);

display.apply(person2, ["Copenhagen", "apply()"]);

//  Bind => doesnt invoke the method directly, but it returns a copy of the function.
let res = display.bind(person2, "Greenland", "bind");
res();
