// Write a function that takes an array of arrays as an argument, 
// and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  let reducer = (accumulator, value) => accumulator + value
  let newArr = []

  arr.forEach(function(array) {
    newArr.push(array.reduce(reducer))
  });

  return newArr
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]