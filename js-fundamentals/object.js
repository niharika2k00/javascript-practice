console.log("\n___________ ⭐️📗 Object ___________\n");

const student = {
  name: "Jack",
  age: 22,
  hobbies: ["reading", "guiter", "coding"],
};

// initialise
student.name = "Alice";
student["place"] = "Japan";

// ⭐️🚨 Iteration Methods [.values(), .keys(), .entries()]
for (let [key, value] of Object.entries(student)) {
  console.log(key + " - " + value);
}

for (const value of Object.values(student)) {
  console.log(value);
}

for (const key of Object.keys(student)) {
  console.log(key);
}

for (const key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key, student[key]);
  }
}

// returns array
Object.keys(student).forEach((key) => {
  console.log(key);
});

Object.entries(student).map((item, idx) => {
  console.log(item, "key: ", item[0], "value: ", item[1]);
});
