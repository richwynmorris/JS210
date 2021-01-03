// Write a function named splice that accepts three arguments: an Array, 
// a start index, and the number of values to remove. The function should 
// remove values from the original Array, starting with the first index 
// and removing the specified number of values. The function should return 
// the removed values in a new Array.

// You may use functions that were answers to previous practice problems to 
// complete this problem, but do not use any built-in Array methods.

function push(array, newVal) {
  array[(array.length)] = newVal
  return array.length 
}

function slice(array, startIndex, endIndex) {
  let newArray = []
  for(let index = startIndex; index < endIndex; index++) {
    push(newArray, array[index])
  }
  return newArray
}

function splice(array, startIndex, endIndex) {
  let newArray = []
  for(let index = startIndex; index < endIndex; index++) {
    push(newArray, array[index])
  }
  return newArray
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]