console.log("\n___________ ⭐️📗 Map ___________\n");
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
console.log(myMap.get({})); //  undefined   because keyObj !== {}  as difference reference of the object in the Memory
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

// map initialisation
var hashMap = new Map();
hashMap.set("0", "zero");
hashMap.set(1, "one");
hashMap.set(2, "two");

const hashMap = new Map([
  ["01", "Java"],
  ["02", "Javascript"],
  ["03", "Python"],
]);

hashMap.set("04", "Ruby");
console.log(hashMap.has("02"));

// ways to iterate [.values(), .keys(), .entries()]
for (const key of hashMap.keys()) {
  console.log(key); // 0 1 2
}

for (const [key, value] of hashMap.entries()) {
  console.log(key + " = " + value);
}

hashMap.forEach(function (value, key) {
  console.log(key + " = " + value);
});

// https://www.geeksforgeeks.org/javascript/javascript-map/
