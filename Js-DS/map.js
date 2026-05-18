console.log("\n ******************** MAP ********************\n");
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated withstring");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log("Size of the Map in Javascript : ", myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // .get(keyObj)  .get(keyFunc)

console.log(myMap.get("a string"));
console.log(myMap.get(keyObj)); //  correct
console.log(myMap.get({})); //  undefined   because keyObj !== {}  as DIFFERENT REFERENCE OF THE OBJECT in the Memory
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

var map1 = new Map();
map1.set("0", "zero");
map1.set(1, "one");
map1.set(2, "two");

// Ways to iterate [.values(), .keys(), .entries()]
for (const key of map1.keys()) {
  console.log(key); // 0 1 2
}

for (const [key, value] of map1.entries()) {
  console.log(key + " = " + value);
}

map1.forEach(function (value, key) {
  console.log(key + " = " + value);
});

const hashMap = new Map([
  ["01", "C++"],
  ["02", "Python"],
  ["03", "Javascript"],
]);

hashMap.set("04", "Java");

for (const [key, value] of hashMap.entries()) {
  console.log(key, " --> ", value);
}

console.log(hashMap.has("02"));

// https://www.geeksforgeeks.org/javascript/javascript-map/


