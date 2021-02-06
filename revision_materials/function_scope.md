### Function Scope

* Variable can be seperated into two different categories which decide their accessibility. There are global variables, which means they can be accessed anywhere in the program, and  there are local variables, which are only available at the lexical scope they have been declared at. This is the case when local variable are declared within the scope of a function. 

* When a variable is declared within the body of a function, it cannot be accessed from the global scope. If the program tries to reference it, it will return a `referenceError`. 

* Parameters are local variables that reference that values that are passed in as arguments to the function, at the point of function invocation. They are only accessible within the scope of the function while the function is being executed. When the function has returned, the local variables at that scope no longer exist until the function is invoked again at a later point. 

* Even when functions are nested inside one another, the nested function still has access to varirables declared in the global or surrounding scope. 

* If a block is used within the scope of a function, for example in the case of a `for` loop, the block will have acces to variables in it's surrounding and global scope. However, the function scope will not have access to any variables that are declared within the scope of the block. 

* If a function declares a variable using the `let`, `const` or `var` statements, and uses the same name as a variable that is declared at the global scope, the local variable of the same name will shadow the variable at the global scope and you will not be able to access the variable at the global scope. This is called variable shadowing.  

* To add a variable to the scope of a function you can:
- Use a function declaration name which creates a variable which references the function.
- Use parameters which act as local variables within the scope of the function. 
- Declare variables using the `let`, `const` and `var` statements.
- Use a class declaration which created a variable with the same name as the class which references the class object. 
