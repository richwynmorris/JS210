### Functions

* Functions always return `undefined` unless they explicitly contain a `return` statement. This means a function must return a value before it has finished exectuing otherwise `undefined` is returned by default. 

* Functions can be reassigned to other local variables suggesting that functions are not limited to the name that that are initially defined with. 

```Javascript
function timesByFive(num) {
  console.log(Number(num) * 5)
}

let thisNameIsBetter = timesByFive

thisNameIsBetter(5)
// => 5
```

* When you pass in fewer arguments than there are parameters, the parameters that are missing an arguement default to `undefined`. In compariso to a method in Ruby, Javascript does not raise an error. This is more aking to a Proc object/block in Ruby. Moreover, you can pass in more arguments than there are parameters and function will ignore any additional arguments that are not assigned to parameters.

```Javascript
function addFive(a, b) {
  console.log(Number(a) + 5);
  console.log(Number(b) + 5);
}

addFive(3, 5)
// => 8
// => 10
addFive(3)
// => 8
// => NaN (This is a result of 8 + undefined) 
addFive(3,5,8)
// => 8
// => 10
// (last argument is ignored.)
```
### Nested Functions

Funtions can be nested within one another. There is not limit with how many functions can be nested within one another and this provides enormous expressive power for Javascript. 


### Variable Scope

* Every function or block in javascript creates a new variable scope. 

* The global scope is the first level of scope that exists within a a Javascript program. Very small javascript application usually work within this scope. 

* The function scope is created with a function is defined. Local variables that are defined within the scope of a function are only accessible within the scope of that function. However, a function can access variables that have been defined in the global scope.

* local variables that are intialized in the global scope are even available within the scope of nested functions.

* block scopes can also access variables that are declared in the outerscope/s. However, local variables that are declared within the scope of a block are not accessible in the outerscope.

* When a function is defined, the function name also becomes a local variable at the level of the global scope.

* When searching for a local variable, Javascipt checks the local variable scope and works its way up the variable scoping levels before reaching the global scope. Javascript tries to find the variable in each scope and it returns the first variable it finds with the matching name. This can cause variabel shadowing. 

* If javascript cannot find a local variable that hasn't been declared, it will create one in the global scope instead so that a local variable can be assigned to it.

* To declare a function, you must use the `function` keyword before naming the function. The function automatically defines a variable by the same name whose type is function. The variable's value is the function itself. The variable obeys general scopes use and can be used in the same way any other variable can be used e.g. assigning a different variable with the same function. 

* An annonymous function is a function that is defined without a name this is often the value that is set to a variable that is declared explicitly.

* THe difference between a function declaration and a function expression is that a function declaration begins with the `function` keyword whereas a function expression has otherwise.

* Function expressions cannot be called unless they are assigned to a declared local variable.

* The arrow function is a shorthand way to write a function expression. Arrows functions are generally used for one line function definitions and allows the developer to remove the need for the opening and closing braces. 

```Javascript
let multiply = (a,b) => a * b;
```

* arrows functions are often used as callback functions which means they are passed to an additional function as an arguement. The return value of the callback function is then used by the primary function as an argument. 

* Hoisting the term used to describe how Javascript, prior to the execution phase, moves all declarations made, at the scope they are declared at, to the the top of their respection functions or blocks. This happens during what is  called the creation phase. Once the creation phase has been completed and all the variables have been hoisted, Javascript executed the program. This is why the you can call a function before its declaration in Javascript.

* If you try to access a variable defined with either `let` or `const` before it has been declared, it is not given a value and is in a state of being `unset`. However, if you try to access a variable that is defined using the `var` keyword, the variable will be assigned the value `undefined`.

* In the creation phase, function declarations are hoisted first before variable declarations.