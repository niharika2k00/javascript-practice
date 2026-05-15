console.log("Welcome to the Javascript World.");

var message;
console.log(message); // undefined
message = "The variable Has been hoisted";

// In JavaScript, all objects interact by REFERENCE when setting them equal to each other.
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); // Hello

/* background-image: linear-gradient(rgba(0, 0, 0, 0.882), rgba(0, 0, 0, 0.886)), url(./images/Cse.jpg);

.table-row:nth-child(even) {
  background: rgba(238, 238, 238, 0.116);
} */

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using call to invoke the function and specifying the context for 'this'
greet.call(person1); // Outputs: Hello, my name is Alice
greet.call(person2); // Outputs: Hello, my name is Bob
