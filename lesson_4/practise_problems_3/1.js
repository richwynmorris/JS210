// Write a function that creates and returns a new array from its array argument. 
// The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  let newArr = []
  for (let index = 1; index < arr.length; index += 2) {
    newArr.push(arr[index]);
  }

  return newArr 
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]