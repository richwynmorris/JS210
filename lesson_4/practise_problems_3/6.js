// Write a function that takes a sorted array of integers as an argument, 
// and returns an array that includes all the missing integers (in order) 
// between the first and last elements of the argument.


function missing(arr) {
  if (arr.length < 2) {
    return []
  }

  let newArr = []

  for (let index = (arr[0] + 1); index < arr[arr.length - 1]; index++) {
    if (!arr.includes(index)) {
      newArr.push(index)
    }
  }
  return newArr
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
