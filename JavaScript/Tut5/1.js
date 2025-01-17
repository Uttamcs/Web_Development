// // Functions in JS
// function  greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }
// greet('John', 'Smith');

// function square(number) {
//     return number * number;
// }
// let number = square(2);
// console.log(number);


// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }
// let teaOrder = makeTea('Earl Grey');
// console.log(teaOrder);



// function orderTea(teaType){
//     function confirmOrder(){
//         console.log(`Order confirmed for ${teaType}`);
//     }
//     confirmOrder();
// }

// let orderConfirmation = orderTea('Earl Grey');
// console.log(orderConfirmation);


// // Arrow function
// function greet() { }  // -> regular function
// const greet = function () { };  // -> function expression
// () => { }  // -> arrow function


// const calculateTotal = (price, quantity) => {
//     return price * quantity;
// }


const calculateTotal = (price, quantity = 1) => price * quantity;
let totalCost = calculateTotal(499 * 100)
console.log(totalCost);

