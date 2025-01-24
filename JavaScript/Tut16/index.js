// Prototypal Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, ${this.name}`);
}

const person1 = new Person('John');
const person2 = new Person('Jane');
person1.greet();
person2.greet();