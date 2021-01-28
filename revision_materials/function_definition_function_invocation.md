### Function Defintition and Function Invocation

* To define a function you must use the reserved keyword `function`. Once you have used the `function` keyword, you need to place an opening and closing pathenthesis after it `()`. This is then followed by curly braces which is the body of the function. Statments placed within these curly braces are considered a part of the function. You may also use a name after the `function` keyword to create a function declaration. Moreover, you may add a list of parameters, seperated with commas, within the parenthesis to reference arguments passed to the function. 

* If you wish you pass data outside the scope of the function to perform an operation on within the context of the function, you can pass the data as an argument to the function. This argument is placed in the parenthesis. 

* For any arguments that you intend to be passed to the function, you must first provide a parameter. A parameter will reference the variables that are passed as arguments to the function and allow the function to interact with the values that are associated to those arguments. Parameters are considered local variables as they are only available within the scope of the function body. Within the function's body the parameters shift from being called parameters to being called arguments. 

* There are three ways to define a function; using a declaration, assigning an annonymous function expression to a declared local variable and using an arrow function. **See declarations_expressions_arrows.md for further explanation** 

* The standard way to invoke a function is to use parenthesis `()` after the function name. 

* With function invocation, all functions evaluate to a value. Unless the value is explicitly returned by the function, the function will return `undefined`. When a function is invoked, when it meets the `return` statement, it evaluates the given expression, terminates the function and returns the value of the last evaluated expression. 

* When functions are invoked without corresponding arguments to be assigned to the parameters, Javascript does not raise an error. Instead the parameters reference `undefined` within the scope of the function. Moreover, if there are more arguments passed to the function than there are parameters, JS simply ignores these arguments and it does not raise an error.  

* function invocations can be passed as arguments to other functions. The return value of the function invocation will then be used as an argument in a seperate function invocation. 




