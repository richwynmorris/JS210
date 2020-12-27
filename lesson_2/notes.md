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