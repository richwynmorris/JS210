// A user wrote a function that takes an array as an argument and returns its average. 

//Given the code below, the user expects the average function to return 5. 

// Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray)); // The user is incorrect, the return result will be 10. The user assigns two objects, with the keys
// `-1` and `-2`, to the array. As the for loop cycles through the negative numbers, the `i` variable is used to point to the keys to the return the value and
// add it to the sum .This then totals 20. However, the arrays length, depite holding 4 elements, only has a length of two. An arrays length
// only includes non negative integers, used as keys, as being a part of the Arrays length. As a result 2 is returned and that is used as the division 
// integer.