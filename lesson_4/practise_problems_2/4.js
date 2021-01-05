function nthElementOf(arr, index) {
  console.log(arr[index])
}

let digits = [4, 8, 15, 16, 23, 42];

digits[-1] = -42; // <= sets a new value with key at '-1' as a string and the value assigned to it as a value. 
nthElementOf(digits, -1);
console.log(digits);
console.log(digits['-1']);    // Note that we are using a string here
console.log(digits[6]); // Is not accessible by traditional index value position.
console.log(digits.length); // Does not affect the length of the array despite being added to it. 