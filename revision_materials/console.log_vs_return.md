### console.log() and Return

* `console.log()` is a method that can be passed an argument to be printed, or outputted, to a terminal.

* `console.log()` will output the value to the terminal, however, as an expression, it returns the value `undefined`.

* `return` is a statement that can be used, after performing an operation, return the value to the call location. 

* Functions by default always return the value `undefine`. The `return` statement also allows you to return a specified value from that function. 

* When the javascript engine meetings the `return` statment in operations, it evaluates the value that is expression passed to it, terminates and exits the function and returns the value to the caller. 

* This means that, unlike `console.log`, `return` does not output the value to console, it only returns the value to the caller. 

```js
let textVar = 1

console.log(testVar)
// 1
// => undefined
```

```js
let testVar = 1

function dummyFunction(arg) {
  return arg + 1
}

let result = dummyFunction(testVar)

console.log(result)
// 2
// => undefined
``` 