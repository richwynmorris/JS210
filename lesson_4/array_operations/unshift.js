// Write a function named unshift that accepts two arguments: an Array and a value. 
// The function should insert the value at the beginning of the Array, and return 
// the new length of the array. You will need a for loop for this problem.

function unshift(array, value) {
  array.length = array.length + 1
  for(let index = array.length -1; index > -1; index -= 1) {
    if (index === 0 ) {
      array[index] = value;
    } else {
      array[index] = array[index - 1]
    }
  }
  return array.length
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]