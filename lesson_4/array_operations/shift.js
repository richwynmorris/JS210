// Write a function named shift that accepts one argument: an Array. 
// The function should remove the first value from the beginning of 
// the Array and return it.

function shift(array) {
  shiftElement = array[0]
  for(let index = 0; index < array.length; index++) {
    array[index] = array[index + 1];
  }
  array.length = array.length - 1
  return shiftElement
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
