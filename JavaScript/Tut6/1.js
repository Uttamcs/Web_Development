// Higher Order function and nested function in JS

// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }

// function processTeaOrder(teaFunction) {
//     return teaFunction('earl grey');
// }
// let teaOrder = processTeaOrder(makeTea);
// console.log(teaOrder);





function createTeaMaker(teaType) {
    return function (quantity) {
        return `Making ${quantity} cups of ${teaType}`;
    }
}

let teaMaker = createTeaMaker('Earl Grey');
let teaOrder = teaMaker(3);
console.log(teaOrder);