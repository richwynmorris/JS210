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

* When you pass in fewer arguments than there are parameters, the parameters that are missing an arguement default to `undefined`. In compariso to a method in Ruby, Javascript does not raise an error. This is more aking to a Proc object/block in Ruby. Moreover, you can pass in more arguments than there are parameters and function will ignore any additional arguments that are not assigned to parameters.

```Javascript
function addFive(a, b) {
  console.log(Number(a) + 5);
  console.log(Number(b) + 5);
}

addFive(3, 5)
// => 8
// => 10
addFive(3)
// => 8
// => NaN (This is a result of 8 + undefined) 
addFive(3,5,8)
// => 8
// => 10
// (last argument is ignored.)
```