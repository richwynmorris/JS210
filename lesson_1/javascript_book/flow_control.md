### Exercise 1 
What values do the following expressions evaluate to?

```Javascript
false || (true && false); // => false
true || (1 + 2); //  true 
(1 + 2) || true; //  3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true
```
### Exercise 2

Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

```Javascript
let x = 48

function evenOrOdd (num) {
  if ((num % 2) === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}

evenOrOdd(x)
```

### Exercise 3

Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

```Javascript
let x = 'hello'

function evenOrOdd (num) {
  if (num % 2 === 0 && num === Number(num)) {
    console.log('even');
  } else if (num !== Number(num)) {
      console.log("Please enter a valid integer");
  }
    else {
      console.log('odd')
    }
}

evenOrOdd(x)
```

### Exercise 4

What does the following code log to the console, and why?

```Javascript
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
```

The code above will output the following:

```
Product2
Product3
Product not found! 
```

The happens as a result of the `break;` statement being absent in the case statements. As a result, each console.log function is executed, once the case statment has been matched, and following strings are output to the console regardless. 

### Exercise 5

Refactor this statement to use an if statement instead.

```Javascript
return foo() ? 'bar' : qux();
```

```Javascript
if (foo()) {
  return 'bar';
} else {
  return qux();
}
```

### Exercise 6

What does this code output to the console?

```Javascript
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
```

The output from the console is `Not Empty`. This is because an empty array, whilst being empty, is still a truthy. Therefore, Javascript on line 2 evalutates to `true` and executes the console.log function by passing in the string `'Not Empty'` this is then output to the console. 

### Exercise 7

Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
Solution

```Javascript
word_to_check = 'hello world'

function allCapsWord (word) {
  if (word.length > 10 ) {
    return word.toUpperCase()
  } else {
    return word
  }
}

console.log(allCapsWord("Hello World"));
```

### Exercise 8

Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

```Javascript
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
```

```Javascript
function(num) {
  switch (num) {
    case (num > 0 && num <= 50):
      console.log(`${num} is between 0 and 50`);
      break;
    default
      console.log('test default');  
  }
}
```