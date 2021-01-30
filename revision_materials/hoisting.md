### Hoisting 

* There are two main phases that Javascript goes trough when executing any code. These two phrases are known as the **creation** phase and the **execution** phase. 

* During the **creation phase** JavaScript effectively moves all declared variables, functions and classes to the top of their respective scopes before executing any code. This is why functions declarations can be executed in the program before their definition in the program. This process is called `hoisting`.

```js
console.log(addTwo(2))

function addTwo(num) {
  return 2 + num
}
```
* When we refer to the top level of the file, the function scope is reffered to as the module scope.

* Even though the hoisting process takes place, it is important to identify that JavaScript does not change or rearrange the program in any way, it only acts as though it was changed. 

* When `let` and `const` variables are declared, at the point in which they are hoisted to in the creation phase, they are left in a `unset` state. This means if you try to reference the variable before it has been assigned a value, it will return a `referenceErrror`. 

* Variable that are declared with the `var` keyword, at the point in which they are hoisted in the creation phase, are assigned the value of `undefined`. Therefore, if the `var` variable is used prior to being assigned its intended value, the `var` declared variable will return `undefined`.

* These variables that are declared but not set initial values are said to live in the **temporal dead zone**

* Function declarations are also hoisted, as are their body and contents, in the creation phase. It is important to note that the variable is created in function declaration, that references the function, is assigned the value of the function when it is hoisted. Therefore, declared functions can be called before they are defined in the program. 

* Function expressions, however, act differently are they are assigned as a value to a declared variable. Therefore, they follow the hoisting rules regarding delcared variables. Thus, the variable will be hoisted in the creation phase and either be unset or undefined. However, you will not be able to call the function until the the declared variable is assigned the function expression as a value in the program's sequence. 

* Hoisting also takes place witin function scope. This means that nested functions can be hoisted within the scope of a function block. 

* When functions are declared within the scope of a `if` or `else` block, the results can be unpredictable. If the block is executed, the function becomes undefined. Moreover, the behaviour is not standardized an, as a result, it can cause unpredictable behaviours, 

* When both function declarations and declared variables are hoisted, function declarations are hoisted first.

* If a function declaration and `var` variable declaration have the same name, it is assumed the function declaration is hoisted first. When the variable is reassinged to a different value, the variable no longer references the original function, but instead references a new value. This is reassignment taking place. 

* variables that are declared with either `let` or `const` cannot share the same name as a declared function. 

### Best Practises 

* Avoid using var. Only use `let` and `const`. 
* If you have to use `var`, declare the variable at the top of it's scope.
* Assign `let` and `const` their required value as to close to their first usage as possible.
* Declare functions before using them. 