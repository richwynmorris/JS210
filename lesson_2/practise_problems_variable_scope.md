### Please predict the output of the following programs, and explain why they output what they do.

### Problem 1

```Javascript
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

### Answer:

```Javascript
// Output:
// 'outer'
// 'inner'
// 'outer'
```

This demonstrates how variables that are declared at different scopes operate at different levels.
On line 8, the output of the console.log method is the string `'outer'`. This is because the variable `a` is declared at the global scope and is passed to the console.log function as an argument on line 8. 

On line 9, the `testScope` function is executed and a new local variable `a` is declared on line 4 in the `testScope` function. On line 5, the local variable `a` is passed to the console.log function as an argument and the string value `inner` is output to the console. 

As the local variable `a` is declared within the scope of `testScope` is does not alter the value of the local variable `a` in the outer scope and, as a result, on line 10, the output of the console.log function is `outer`. 


### Problem 2

```Javascript
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

### Answer

```Javascript
// 'outer'
// 'inner'
// 'inner'
```

One line 1, local variable `a` is declared with the value of the string object `'outer'` at the global scope. On lines 3-6, the function `testScope` is declared. On line 8, the console.log function is passed the variable `a` as an argument and it outputs the string value `'outer'`. On line 9, the `testScope` method is called and the variable `a` is reassigned to the value of the string object `inner`. This is passed to the console.log function as an argument and `'inner'` is output to the console. Functions are able to reach into its outerscope/s to retrieve variables that have been defined. However, the outerscope/s outside of the function scope cannot access variables that are defined within the body of the function. In this instance, `a` in the global scope is able to be reassigned a new value. On line 10, the console.log function is called and the variable `a` is passed to it as an argument. As `a` was reassigned a new value on line 5, and thus the new value is output.   

### Problem 3

```Javascript
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();
```

### Answer

```Javascript
// `empty`
// 'play station'
// 'computer'
```

### Problem 4

```Javascript
function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

### Answer
```Javascript
// hi
```

The reason this returns `hi` is the variable `a` is assigned the value 'hi' when  the`hello` function in run. As the variable is not declared using `let` or `const` it is available at the global level. 

### Problem 5

```Javascript
function hello() {
  let a = 'hello';
}

hello();
console.log(a);
```

### Answer
ReferenceError = the variable `a` is declared within the scope of the function which means it is not available at the global level. This means that when the argument `a` is passed to the console.log function on line 6 an error is defined as the variable has not been declared. 

### Problem 6

```Javascript
console.log(a);

var a = 1;
```

### Answer
This outputs `undefined` as the the variable `a` is declared and set to `undefined` in the creation phase prior to Javascript executing the code. This means that when `a` is passed to the console.log function it outputs `undefined`. On line 3, the local variable `a` is then set to the value of 1. 


### Problem 7

```Javascript
console.log(a);

let a = 1;
```

### Answer
ReferenceError - The local variable `a` is declared in the creation phase and when the console.log has it passed to it as an argument, it is unable to output the value to the console as the variable is `unset` as it is contained in the temporal dead zone. As a result, an error is raised. 

### Problem 8

```Javascript
console.log(a);

function hello() {
  a = 1;
}
```
### Answer

Error - After hoisting the function `hello`, the variable `a` exists within the body of the function. However, as it is never called it does not exist in the global scope. As a result, when the variable `a` is passed to the console.log function as an arguement, Javascript does not recognise that `a` is a valid variable with a value and thus returns a Reference Error. 

