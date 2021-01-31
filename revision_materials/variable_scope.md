### Variable Scope

* A variables scope is dependent on where it is declared in the program. 

* Depending on the type of variable that is declared, and where it is declared in the program, can influence the scope and accessibility of the variable. 

* `let` and `const` variables are scoped at the block level. This means that they can only be accessed and modified within the block they are declared at. A block is defined through the use of curly braces. 

*  a block can be described as an executional piece of a code that is contained between curly braces. This means a function's curly braces can be considered a block and a conditional's body within curly braces can also be considered a block. 

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

* Variables that are declared without using the `let`, `const` and `var` keywords can cause issues. Any variable declared without these, by default, become global variables. They will ignore both the block and function scope entirely. 

* Javascript uses lexical scoping principles to detemine where to look for local variables the course code references. This means that the source code defines what scope the program is operating in. Firstly, Javascript checks the levels of scope from local to global to find the variable that is referenced in the code. This means a local variable declared with the same name as a variable declared in a global scope can shadow the variable in the outerscope. This is called variable shadowing. 

```js
let myVar = 'Hello!'

function testFunc() {
  let myVar = 'World!' // local declared variable shadows variable with the same name in the global scope. 
  console.log(myVar)
}

testFunc() // 'World!'
```

* This also means that the scope can be brought into existence by the source code without ever needing to be invoked.  

* Variable reassignment is also influenced by the scope that the JavaScript engine is running in. This means that is a variable is declared in the global scope, then if the same variable name is used within the scope of a function or block, it can reassign the value that the global scope variable is referencing. 

```js
let myVar = 'hello'

function testFunction() {
  myVar = 'Goodbye' // This scope has access to variables defined in the outerscope. This means the `myVar` will be reassigned.
}

console.log(myVar) // 'hello'
```

