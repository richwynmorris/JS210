// Read through the following code. Currently, it does not log the expected result. Explain why this happens, 
// then refactor the code so that it works as expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The reason the value returns false is because the strict equality operator checks whether both arguments passed to it
// are either the same value or the same object. In this instance we're comparing two different objects that contain the same value.
// For the output to return, you must compare the values of both objects using the syntax below:

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person['name'] === otherPerson['name']);    // true