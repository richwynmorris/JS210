// Write a function that accepts an array as the first argument and an integer value, count, as the second. 
// It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  let newArray = []
  let index = 0

  while (index < count) {
    newArray.push(arr[index])
    index++
  }

  return newArray
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]