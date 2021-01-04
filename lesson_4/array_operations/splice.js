// Write a function named splice that accepts three arguments: an Array, 
// a start index, and the number of values to remove. The function should 
// remove values from the original Array, starting with the first index 
// and removing the specified number of values. The function should return 
// the removed values in a new Array.

// You may use functions that were answers to previous practice problems to 
// complete this problem, but do not use any built-in Array methods.

function pop(array) {
  if (array.length === 0) {
    return undefined
  }
  let lastItem = array[array.length - 1]
  array.length = array.length - 1 
  return lastItem
}

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
  let newArray = slice(array, startIndex, (startIndex + endIndex))
  let endElements = slice(array, (startIndex + endIndex), array.length)

  for(let index = array.length - 1; index > startIndex - 1; index -= 1) {
    pop(array)
  }

  for(let index = 0; index < endElements.length; index ++) {
    push(array, endElements[index])
  }

  return newArray
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]