### What does this code log to the console? Why?

```Javascript
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
```

This logs `[1,4,3]` as both array 1 and array 2's pointers are referencing the same value which is the array object. As array1's value is altered with a reassigned element in the array, both array's still continue to reference the same location in the memory. As a result, array2 continues to point at the same location despite array1 changing a value within the array object.

### What do the following error message and stack trace tell you?

```
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
``` 

The stack trace indicates that on line 4, the `greeting` variable has not been defined and is not referencing any value. This is contained within the `hello` function.

### Write some code to output the square root of 37.

```Javascript
Console.log(Math.sqrt(37))
```

### Given a list of numbers, write some code to find and display the largest numeric value in the list.

List 	          Max
1, 6, 3, 2 	     6
-1, -6, -3, -2 	-1
2, 2 	           2

```Javascript
console.log(Math.max(1, 6, 3, 2))
console.log(Math.max(-1, -6, -3, -2))
console.log(Math.max(2,2))
```
### What does the following function do?

```Javascript
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
```

The function above splits the words into an array, reverses the array, iterates through the array and returns a new array with the values of each word. 


### Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

Example

```Javascript
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
```

```Javascript

function allMatches(array, regex) {
  matches = []
  array.forEach (function(word) {
    if (word.match(regex)) {
      matches.push(word);
    } 
  });
  return matches
}
```

### What is exception handling and what problem does it solve?

Exception handling provides the ability to run a program and, if an operation is not able to be executed, it will raise a custom message before continuing with the execution of the program. This prevents the application from raising an error message and ending the operation before it has been completed.It does this using the `try` and `catch` keywords.


#### Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

```Javascript
function isNotANumber(value) {
  return value !== value
}

console.log(isNotANumber([]))
console.log(isNotANumber('String'))
console.log(isNotANumber(10))
console.log(isNotANumber(NaN))
```

### Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

```Javascript
function isMinusZero(value) {
  return 1 / value === -Infinity;
}

console.log(isMinusZero(0))
console.log(isMinusZero(10))
console.log(isMinusZero(-0))
```

### What gets returned by y++ in the snippet, and why?

```Javscript
let y = "5"
> y++
```
10. The `++` symbol first converts the string to a number and returns the numerical value. It is not the same as `x = x + 1`




