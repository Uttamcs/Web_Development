const fs = require("fs");

// // Sync...

// fs.writeFileSync('./test.txt', "hello there... I'm Uttam");


// Async...

// fs.writeFile('./test.txt', "hello there.... I'm Uttam", (err) => {})


// const result = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(result);


// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// })

// fs.appendFileSync('./test.txt', "Hii I'm Uttam Kumar\n");
// fs.appendFileSync('./test.txt', `${Date.now().toLocaleString()} Hey there \n`)

// To copy the file
// fs.cpSync('./test.txt', './copy.txt')

// To delete / unlink file
fs.unlinkSync('./copy.txt')