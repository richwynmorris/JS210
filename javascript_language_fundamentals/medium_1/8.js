// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. 

// Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// This will not return the expected output as on line 11 the variable sum is not assiged a value. Therefore, on line 14
// when then reassignment operator is used to add the current value `sum` is referring to, it uses the value `undefined` as 
// the variable has not been assigned a value. Undefined when used with the '+' operator and integer returns NaN. This becomes the value
// that is assigned to sum. To fix this issue, you must assign the variable sum on line 11 with the integer value 0 so that the addition 
// operation on line 14 will work as expected. Moreover, you must explicitly return the `sum` variable or the function will return `undefined`.  