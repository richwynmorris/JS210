// Write a function that accepts two arguments, an array and an integer index position, 
// and returns the element at the given index. What happens if the index is greater than 
// the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index]
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return? = `Undefined`
nthElementOf(digits, -1);  // what does this return? = `Undefined`