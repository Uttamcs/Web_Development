// this context

const Person =  {
    name : "Uttam",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};


Person.greet(); // Hello, Uttam
const greetFunction = Person.greet;
greetFunction(); // Hello, undefined


// to set the this context to the object itself, we can use the bind method
const greetFunctionBinded = Person.greet.bind(Person);
greetFunctionBinded(); // Hello, Uttam

// The bind method creates a new function that, when called, has its this keyword set to the provided value, in this case, the Person object.
// The bind method is used to set the this context of a function permanently. It creates a new function with the same body and scope as the original function but with a fixed this value.