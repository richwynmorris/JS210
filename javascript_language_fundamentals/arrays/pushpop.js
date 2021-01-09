// In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. 
// The pop method removes the last element from an array and returns that element. If pop is called on an empty array, 
// it returns undefined. The push method, on the other hand, adds one or more elements to the end of an array and 
// returns the new length of the array.

// Examples:

function pop(array) {
  if (array.length === 0) {
    return undefined
  }

  let lastElement = array[array.length -1]

  array.length = array.length - 1

  return lastElement
}


function push() {
  let array = arguments[0]

  for (let index = 1; index < arguments.length; index++) {
    array[array.length] = arguments[index]
  }

  return array.length
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0