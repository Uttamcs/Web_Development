// Generator and iterators in JavaScript

// Generators are a special type of function in JavaScript that can be paused and resumed.
// They are created using a function* declaration and yield keyword.
// Generators are used to create iterators in JavaScript. An iterator is an object that can be iterated upon, meaning that you can traverse through all the values.
// Generators are useful when you want to create an object that can be iterated over, but you don’t want to store all the values in memory.

// Example 1
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
const gen2 = generator();
console.log(gen);

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen2.next()); // { value: 1, done: false }
console.log(gen2.next()); // { value: 2, done: false }
console.log(gen2.next()); // { value: 3, done: false }



// Iterators are objects that have a next method that returns the next value in the sequence. This method returns an object with two properties: value and done. The value property contains the next value in the sequence, while the done property is a boolean that indicates whether the sequence has ended.
// Iterators are used to iterate over the values in an object. You can create an iterator by defining a next method that returns the next value in the sequence.
// Iterators are used in JavaScript to iterate over the values in an object. You can create an iterator by defining a next method that returns the next value in the sequence.


// Example 1

const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
        next() {
            step++;
            if (step === 1) {
            return { value: 'This', done: false };
            } else if (step === 2) {
            return { value: 'is', done: false };
            } else if (step === 3) {
            return { value: 'iterable.', done: false };
            }
            return { value: undefined, done: true };
        }
        };
    }
};
    
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'This', done: false }
console.log(iterator.next()); // { value: 'is', done: false }
console.log(iterator.next()); // { value: 'iterable.', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

