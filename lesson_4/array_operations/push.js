// Write a function named push that accepts two arguments: an Array and any other value. 
// The function should append the second argument to the end of the Array, and return the new length of the Array.

let array = [0,1,2]

function push(array, newVal) {
  array[(array.length)] = newVal
  return array.length 
}

console.log(push(array, 3))
console.log(array)