### Variable Scope

* Depending on the type of variable that is declared, and where it is declared in the program, can influence the scope and accessibility of the variable. 

* `let` and `const` variables are scoped at the block level. This means that they can only be accessed and modified within the block they are declared at. 

```js
function myFunction() {
  console.log(myVariable) 

  if (true) {
    let myVariable = 'Will I be output?'
  } else {
    let myVariable = 'What about this?'
  }

}

myFunction() // should return reference error.
```

* `var` as a declared variable can transcend block scope and is scoped at the function scope level. This means a `var` declared variable can be declared within an `if`...`else` block but is still accessible within the scope of the function. 

```js
function myFunction() {
  if (true) {
    var myVariable = 'Will I be output?'
  } else {
    var myVariable = 'What about this?'
  }
  
  console.log(myVariable) 
}

myFunction() // 'Will I be output?'
```

* Variables that are declared in the global scope are able to be referenced within the scope of a function, within the block contained within functions or even in a nested function. This is because each scope has access to the variables declared in its surrounding context.

```js
var myVariable = 'Hello' // Declared in the **global scope** --- This is the same result also with `let` and `const`

function myFunction() { // **function scope** 
  console.log(myVariable) // globally declared variable is accessible here!
  if (true) { // **block scope**
    console.log(myVariable + ', World') // **globally declared variable is accessible here**
  }
}

myFunction() // 'Hello'
             // 'Hello, World' 
```

* If a variable is declared with the same name as a variable that has been declared in the surrounding scope, the variable that is declared in the innerscope is a brand new variable that exists at the level of scope. Even though they both share the same name, javascript considers them seperate variables and thus they do not affect each other. 

```js
let variable;
function important() {
  let variable = 'hello';
}

important()
console.log(variable);
```

In the example above, the `let` variable is declared in the outer scope but is not assigned a value. Therefore, it is `unset`. On lines 57 - 60, the function `important` is decalred. On line 62, the `important` function is called. Once the function has been called, the javascript engine moves to line 59 and declares a new local variable, using the `let` keyword and assigns it the primitive string value of `'hello'`. This variable only exists at the function level as variables declared with `let` are constrained to the scope of the block they are declared in. As a result, when `console.log()` is called on line 63, the variable `variable` is still still unset. Therefore, then the variable is passed to `console.log()` as an argument, it returns undefined. 

The importanty distinction to remember here is that variables that declared using either `let` or `const` without explicitly being set a value are considered `unset`. However, when they are used in an operator, they still evaluate to `undefined`. `var` on the otherhand, is explicitly set the value of `undefined` during the hoisting process. 