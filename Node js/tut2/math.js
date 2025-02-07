// // Best way to export function
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {add, sub};


// We can also export function by

exports.add = (a, b) => {
  return a + b;
}

exports.sub = (a, b) => {
    return a - b;
}

exports.mul = (a, b) => {
    return a * b;
}

exports.div = (a, b) => {
    return a / b;
}

exports.mod = (a, b) => {
    return a % b;
}
