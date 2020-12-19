### Exercise 1 
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

```Javascript
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

The code above will output:

```
1
```

The reason the above is output is the function `foo` is called on line 6. When the function is called, the `let` keyword is used to initialize a local variable within the innerscrope of the function. The local variable is assigned the integer 2 as it's value. As this is within the context of the function's block, it does not impact the global variable `bar` in the outerscrope, which continues to point at the integer 1. This function however does return `undefined`. As a result, when the console.log function is invoked on line 7, and the variable `bar` is passed to it as an arguement. It outputs the value `1` and returns `undefined`. 

### Exercise 4

What does the following code log to the console?

```Javascript
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
```

The above returns `undefined` as the function returns the expression that is a part of the `return` clause. Within the function, the `return` keyword is used on line 3, however, no statement is used alongside it. Therefore, Javascript returns `undefined. Nothing is logged to the console.

### Exercise 5

What does the following code log to the console?

```Javascript
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
```

The code above will return 'Yippeee!!!' as the the string 'Yippeee' is passed as an argument to the function and the function concatanates the string with an additional string`'!!!'`. However, as this result is not used in a console.log function, nothing is printed to the console.  