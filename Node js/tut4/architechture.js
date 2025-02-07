// Architecture of Node JS

// Blocking and Non-Blocking

// Blocking means synchronus function
console.log(1);
const fs = require("fs");
const os = require("os");

// // Synchronus function
// const result = fs.readFileSync('./contact.txt', 'utf-8');

// Asyncronus means non blocking -> It will to execute other line to execute while async function will execute
fs.readFile('./contact.txt', 'utf-8', (err, result) => {
    console.log(result);
});
console.log(2);
console.log(3);
console.log(5);


console.log(os.cpus().length);