### Side Effects


There are 5 main attributes that define whether a function has a side effect. 

* It reassigns a nonlocal variable with a new value.
* It mutates an object that a non local variable is referencing.
* It raises an exception.
* It invokes another function that has a side effect.
* It reads or writes to to data entity that exists outside of the program.

To define whether a function has side effects we have to determine if the function is being used as intended. If it is, and it does one the above then we would say the function has a side effect. 

The following features define whether a function is being used in an unintended way. 

* An argument the function is expected is ommited from the call.
* If you pass a datatype as an argument to a function that the function is not expecting. E.g. an array when it's expecting a number.
* Calling the function before you have performed any required preparations. 

### Side effects - Mutating Objects

* Mutation take place in two different instances. 

Firstly it can happen when a function mutates an object that a non local variable is referencing. 

```js
let myArray = ['a', 'b', 'c', 'd']

function mutateMe() {
  myArray.pop() // function, when called, mutates the non local variable referencing an object in the global scope.
}
```

However, it can also happen when the argument in the body of the function also references the same pointer as the local variable that is passed in as an argument to the function call. This means that the argument in the body of the function can still mutate a non local variable without the function making reference to the non local variable. 

```js
let myArray = ['a', 'b', 'c', 'd']

function mutateMe(arr) { // arr references the same pointer as myArr
  arr.pop() // function, when called, mutates the non local variable referencing an object in the global scope.
}

mutateMe(myArray) // undefined
myArray // ['a', 'b', 'c']

```

### Side Effects - Input/Ouput

* Any time a function needs to perform either a input or output operation it is considered to hava side effect. 

This is a list of actions that can be considered to have input/output operations. 


*    Reading from a file on the system's disk
*   Writing to a file on the system's disk
*   Reading input from the keyboard
*   Writing to the console
*   Accessing a database
*   Updating the display on a web page
*   Reading data from a form on a web page
*   Sending data to a remote web site
*   Receiving data from a remote web site
*   Accessing system hardware such as:
        The mouse, trackpad, or other pointing devices
        The clock
        The random number generator
        The audio speakers
        The camera

* It is important to note that accepting user inputed data or outputing data to a console are also signs that function has input/output side effects. 

* Moreover, accessing the system date (`new Date()`) or using accessing the random number generator (`Math.rand()`) also produce side effects. 

### Side Effects - Exceptions

* If a function fails to perform an operation and raises and exception, it is said to have side effects. 

### Side Effects - Functions that call other functions that have side effects.

* If a function calls another function within it's body when it is invoked, and that function has a side effect, the originally called function is also said to have a side effect. 

```js
let myVar = 'Hello'

function orgFunc() {
  console.log(myVar) // orgFunc has a side effect because it invoked console.log() which has a side effect itself.
}
```

* NOTE: if the function calls another function within its scope that only has side effects that are local to function, then that function is said to have no side effects. It only has side effects if the operations that take place within the scope of the function impact the program outside of the local scope. 


### Rules About Functions 

Functions should do one of two things, return a value or produce a side effect. If you produce functions that do both you may end up using the function to gain a result but also end up producing an unexpected side effect. Or vice versa. 

It is also important to ensure that when the function returns a value, it should be a meaningful in the context of the calling code. 