// Constructor function in js

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// function car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// let myCar = new car("Toyota", "Camry", 2022);
// console.log(myCar);

// let myCar2 = new car("Honda", "Civic", 2021);
// console.log(myCar2);
// let myCar3 = new car("Ford", "Mustang", 2023);
// console.log(myCar3);
// let myCar4 = new car("Chevrolet", "Corvette", 2024);
// console.log(myCar4);



// function tea(type) {
//     this.type = type;
//     this.describe = function () {
//         return `I drink ${this.type} tea.`;
//     }
// }

// let lemonTea = new tea("Lemon");
// console.log(lemonTea.describe());


// function Animal(species) {
//     this.species = species;
//     this.speak = function () {
//         return `The ${this.species} makes a sound.`;
//     }
// }

// Animal.prototype.eat = function () {
//     return `The ${this.species} is eating.`;
// }

// let dog = new Animal("Dog");
// console.log(dog.eat());
// console.log(dog.speak());
// let cat = new Animal("cat");
// console.log(cat.eat());
// console.log(cat.speak());


function drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new");
    }
    this.name = name;
}

let tea = new drink("tea");
let coffee = new drink("coffee");
console.log(tea.name);