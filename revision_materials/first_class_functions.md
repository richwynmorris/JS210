### First Class Functions

* All functions in Javascript are considered first-class functions. First-class functions are objects. This means they can be assigned to declared variables, be passed as arguments to other functions and even be used in functions as return values. This means we don't have to use the same scope as the function's defintition to call the function. It can be called at a different scope.

* A higher order function is a function that operates on another function. Therefore, a function that either receives a function as an argument or returns a function as an expression, can be considered a higher order function. As functions in javascript are considered first class objects, this means a higher order function can implement and  return functions within their body. 

* First class functions keep their lexical scope with them at the point of definition. This is referred to as the function's closure. Even if the function is invoked at different scope in the program from it's definition, it still has access to any variables that are declared within the lexical scope of the function's definition. This closure acts like a envelope that is attached to the function object. This envelope contains variables that point to the original variable contained at the function defintition level. These 'envelope' variables do not reference specfic values, but instead point to the original variable contained in the function's definition.

```js
function fullGreeting() {
  let name = 'Richard'
  return function() {
    console.log(`Hello there, ${name}`)
  }
}


let testGreeting = fullGreeting()

testGreeting()
```
