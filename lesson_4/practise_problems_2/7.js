// Using the function from the previous problem, What happens if you pass a count greater than the length of the array?
// How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr
  }
  return arr.slice(arr.length - count)
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 8));    // returns [23, 42] => If the count is bigger than the length of the array, it instead calculate 
                                    // the index position based on the function calculation, which is a negatve index position starting from the last element, 
                                    // rather than returning the entire array.