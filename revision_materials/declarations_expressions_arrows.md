### Function declarations, function expressions and arrow functions

* A function declaration is a way of defining a function. It is acheived through prepending the function definition with the declaration`function`. This function declaration means that the function is available to call prior to being defined in the script of the program. This is due to Javascript first hoisting the function prior to executing the program. The name of the function is also the name of the variable that is used to reference the function and the prepended `function` declaration makes that variable's type `function`. Function declarations are always hoisted prior to declared local variables. 

* Another way to define a function is by using a function expression. A function expression is an annonymous function that is assigned to a declared local variable explicitly.  The variable name is then used in the program to invoke the function. One of the distinct differences between this and function declarations, is a function expression cannot be invoked prior to its definition. This is due to hoisting taking place prior to the program's execution . The declared local variable is hoisted and set to the value of `undefined`. However, it is not assigned the value of the function expression until this happens explciitly in the program's execution. If the function is invoked prior to this, Javascript will throw an initialization error. Function expressions use apply the declared variables set of rules when it comed to hoisting.  

* Functions can be used in this way as Javascript as considered **first class functions**, which, as they are considered objects in javascript, means they can be passed around, used as arguements and even used as return values from within other functions. 

* Any function that does not begin with the word **function** is a function expression. Even if that function looks like declaration but it preceeded by something else like parenthesis or a `return` statement. 

* Another form of function is called a `named function` this is an annoynmous function that is given a name after the function declaration. However, the name of the function is only accessible within the scope of the function. This is useful for two reasons. Firstly, for using recursion within the function and secondly for identifying any bugs that may be associated with a functions operation. Javascript will return the name of the function that is operating incorrectly. 

* Arrow functions perform implicit return values. This means that the `return` statement can be omitted from the function body, **only** when the arrow function contains one expression. Any more than one expression in the body of the arrow function means that the value must be returned explicitly. 

* Arrow functions only allow the removal of the `function` declaration and, when the expression can be contained on one line, the curly braces. 

```js
addNumbers = (a, b) => a + b; 
```

* Arrow functions are often used as callback functions in conjunction with Javascript methods. 

```js
[1,2,3].map((num) => num * 2)
```

