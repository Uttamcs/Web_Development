// Looping Statements
// 1. for
// 2. while
// 3. do-while

// 1. for
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

// 2. while
let i = 0;
while (i < 5) {
  console.log("Hello World");
  i++;
}

// 3. do-while
let j = 0;
do {
  console.log("Hello World");
  j++;
} while (j < 5);

// 4. for-in
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
let cities = ["New York", "London", "Paris", "Tokyo"];
for (let city of cities) {
    console.log(city);
}

// for of
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);

// for each 
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(number) {
  sum += number;
});
console.log(sum);
