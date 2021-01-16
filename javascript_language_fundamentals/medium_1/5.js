// What will the following code snippets log?
// Code Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// "The total value is 15"

// ------------------------------------------------------------

// Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// "The total value is NaN"


// -------------------------------------------------------------

// Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// The total value is 15

// ----------------------------------------------------------------

// Code Snippet 4

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Error is returned as both the couter and function(counter) have the same variable name. 

// Variables in javascript cannot have the duplicate names. 
