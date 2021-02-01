### Pure Functions

* Pure functions must meet the 3 criteria below in order to be a pure function. 

1. It should have no side effects.
2. It should a value that is **dependent** on the argument that is passed to it.
3. When given the same set of arguments, it should always return the same value of the course of the function's lifetime. 

```js
function times2  = value => value * 2;
``` 
This means that for a pure function to be considered pure, it means that nothing outside the function can impact how the function operates over the course of the functions life time. 

* A functions lifetime starts when it is created and it ends when it is destoryed. For example, a nested function can only come into existence when the outer function is called. Once the outer function has finished executing and returned, in the nested function no longer exists. 

* It more accurate to descibe a function's call as eithe pure or impure as the function may behave differently dependent on arguments that are passed to the function. 

* For this reason, it is more accurate to asses if the function is pure when it is intended and that in practical terms it is only pure if it consistently produces the same result with the same set of arguments. 

* REMEMBER: a function is only considered pure if it **dependent** on the arguments that are passed to it. It the function returns a value consistently but does not engage with the arguments that are passed to it, then it is not a pure function. 

