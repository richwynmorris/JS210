//In the previous exercise, the value of the reference gets copied. 
// For this exercise, only the values of the array should be copied, 
// but not the reference. Implement two alternative ways of doing this.

//Here is the code from the previous exercise:

// Method 1:
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Method 2
let myArray = [1, 2, 3, 4];
const myOtherArray = [].concat(myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);