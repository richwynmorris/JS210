### Exercises 1

In the following code, what are the final length values for array1, array2, array3, array4, and array5?

```Javascript
let array1 = [1, 2, undefined, 4]; // => 4

let array2 = [1];
array2.length = 5; // => 5

let array3 = [];
array3[-1] = [1]; // => 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // => 3

let array5 = [];
array5[100] = 3; // => 101
```

### Exercise 2

Log all of the even values from myArray to the console.

```Javascript
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
```

Expected Output

6
4
2
4
16
0

```Javascript
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(number) {
  if (number % 2 === 0) {
  console.log(number);
  }
}); 
```

### Exercise 3
Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

```Javascript
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(array) {
  array.forEach(function(number) {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
}); 
```

### Exercise 4

In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example
```Javascript
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
```

Expected Output
```Javascript
[
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]
```

```Javascript
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

oddsNEvens = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd'
  }
});

console.log(oddsNEvens);
```

### Exercise 5

Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

Example

```Javascript
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
```

You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.

```Javascript
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
```

### Exercise 6

Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

```Javascript
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.

```Javascript
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) { 
 return array.map(string => string.length).filter(function(num) {
   return num % 2 !== 0
 })
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```

### Exercise 7

Use reduce to compute the sum of the squares of all of the numbers in an array:

```Javascript
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
```

Note that 83 is 3*3 + 5*5 + 7*7.

```Javascript
function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0)
}
```

### Exercise 8

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

```Javascript
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

```Javascript
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    if (element.length % 2 !== 0) {
      accumulator.push(element.length);
    }
   
  return accumulator
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```

### Exercise 9

Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

```Javascript
> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];
```

Return true or false depending on each result.

```Javascript
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkArrayFor3(array) {
  return array.includes(3)
}

console.log(checkArrayFor3(numbers1))
console.log(checkArrayFor3(numbers2))
console.log(checkArrayFor3(numbers3))
```
### Exercise 10 

Write some code to replace the value 6 in the following array with 606:

```Javascript
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
```

You don't have to search the array. Just write an assignment that replaces the 6

```Javascript
arr[1][3] = 606
```