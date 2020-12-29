### Closures Notes

*  What is a closure?
   A closure is a combination of a function and the variables that are contained in the lexical scope of the function, including class and function names.

   In essence a function defintion and its scope become a single entity called a closure. This means you can use any variable that's in the lexical scope of the function when it is defined, even if those variables aren't available where the function is being invoked.

*   What is in a closure?
    A closure is a collection of all the variables that are declared within the body of the function at the time of creation.

*   When is a closure created?
    A closure is created at the time of function execution. This means the variables that are declared within the function do not exist until the function has been called. Once it has been called, the closure is added to the stack and the Javascript engine executes the function body. Once the body either returns a value or object using the `return` statement, or it meets the end of the body definition by the closing brace `}`, the closure is deleted and popped off the stack.

*   What is the relationship between closures and scope?
    A closure encapsulates all variables that are declared within the scope that the Javascript environment is currently running in at that time. If the Javascript engine is operating at the global level, it has access to any local variables that are declared in that lexical scope. Moreover, if Javascript is running in a function body execution environment, it only has access to the local variables that declared at that scope. 
    
*   What do we mean when we say that closures are defined lexically?

    Closures are defined by the lexical scope that the Javascript engine is operating in. This means that closures are not defined by the where the function is being invoked from but instead by where the function is defined in the structure of the program.

*   What is partial function application?
    A partial function application is a function that returns an additional function from within its body which can be assigned to a variable. This means arguments can be passed to the function at a later time for the function to be executed. Partial functions demonstrate the closure capability of Javascript as the closure itself can be passed to another local variable to be executed at a later time. However, this local variable also has access to the closure that is associated within the function. 