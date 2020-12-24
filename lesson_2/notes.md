### Functions

* Functions always return `undefined` unless they explicitly contain a `return` statement. This means a function must return a value before it has finished exectuing otherwise `undefined` is returned by default. 

* Functions can be reassigned to other local variables suggesting that functions are not limited to the name that that are initially defined with. 

```Javascript
function timesByFive(num) {
  console.log(Number(num) * 5)
}

let thisNameIsBetter = timesByFive

thisNameIsBetter(5)
// => 5
```