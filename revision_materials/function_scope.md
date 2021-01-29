### Function Scope

* Variable can be seperated into two different categories which impact their accessibility. There are global variables, which means they can be accessed anywhere in the program, and local variables, which are only available at the lexical scope they have been decalred at. This is the case when local variable are declared within the scope of a function. 

* When a variable is declared within the body of a function, it cannot be accessed from the global scope. If the program tries to reference it, it will return a ReferenceError. 

* Parameters are local variables that reference that values that are passed as arguments to the function at the point of invocation. They are only accessible within the scope of the function. When the function has returned, the local variables at that scope no longer exist until the function it invoked at a later point. 

* Even when functions are nested inside one another, the nested function still has access to varirables declared in the global or surrounding scope. 

* If a block is used within the scope of a function, for example in the case of a for loop, the block will have acces to variables in it's surrounding scope. However, the function will not have access to any variables that are declared within the block. 

* If a function declares a variable using the `let` or `const` statements, and uses the same name as a variable that is declared at the global scope, the the local variable of the same name will shadow the variable at the global scope and you will not be able to access the variable at the global scope. This is called variable shadowing. 

* To add a variable to the scope of a function you can:
- Use a function declaration name which creates a variable which references the function.
- Use parameters which act as local variables within the scope of the function. 
- Declare variables using the `let`, `const` and `var` statements.
- Use a class declaration which created a variable with the same name as the class which references the class object.  