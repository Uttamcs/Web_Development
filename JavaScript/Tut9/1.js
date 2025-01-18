let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        return `${this.make}  started making  ${this.model} in ${this.year}`;
    }
}
// console.log(car.printDescription());



function person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new person("John", 25);
// console.log(john.name);


function animal(type) {
    this.type = type;
}

animal.prototype.speak = function() {
    return `The ${this.type} makes a sound.`;
}

Array.prototype.uttam = function () {
    return `Custom method ${this}`;
}

let myArr = [1, 2, 3];
// console.log(myArr.uttam());

let myNewArr = [4, 2, 6, 2, 1];
// console.log(myNewArr.uttam());


class vehicle {
    constructor(type, model) {
        this.type = type;
        this.model = model;
    }

    getDescription() {
        return `This ${this.type} is ${this.model}`;
    }
}

class Car extends vehicle {
    drive() {
        return `Driving a ${this.model}`;
    }
}

// let myCar = new Car('BMW', '745li');
// console.log(myCar.drive());
// console.log(myCar.getDescription());


let vehOne = new vehicle('Toyata', 'Fortuner');
console.log(vehOne.getDescription());
