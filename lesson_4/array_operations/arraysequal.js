// Write a function named arraysEqual that takes two arrays as arguments. The function should return true 
// if the arrays contain the same values, or false if they do not.

// Test the function with arrays that contain number, string, and boolean values. 
// Don't worry about handling arrays that contain other Arrays or Objects.

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }

  let result = true 

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      result = false
      break
    }
  }

  return result
}


console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false