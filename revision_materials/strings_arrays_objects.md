## Array Methods

### Array.forEach()

* `forEach` is an array method that iterates over each element in an array and passes it to a callback function.

* The return value of `forEach` is `undefined`.

```js
['1', '2', '3', '4'].forEach(element => console.log(Number(element) + 2))
// 3
// 4
// 5
// 6
// undefined
```

* `forEach` does not mutate the array it is called upon but the execution in the function's body may call a function that does so. 

* `forEach` is similar it's use as a `for` loop but is specifically intended to be used with Array objects.

### Array.map()

* `map()` is an an Array method which returns a new array based on the results of a function call that each element, contained in the calling array, is passed to. 

* `map()` does not mutate the calling array but instead returns a new one. To capture the new array value, you must a local variable to the result of the `map()` invocation. 

* The callback function used in the `map()` method must explicitly return the value in it's block, if the function body covers more than one line. If it does not, the callback function will return `undefined` as default on each iteration. This will be the assigned value used in the new array object that is returned.

```js
let myArray = [1, 2, 3, 4]

let myVar = myArray.map(function(element) {
  element += 1 
  element += 1
})

console.log(myVar) // [ undefined, undefined, undefined, undefined ]
console.log(myArray) // [ 1, 2, 3, 4 ]
```


### Array.filter()

* `filter()` is an Array method that iterates over elements in an array and passes each one to it's callback function. The `filter()` method then captures the returned values, that it has evaluated to meet the functions conditions, and returns a new array object with the new values. 

* `filter()` does not mutate the calling array object. 


### Array.find()

* The `find()` method returns the first element in an array that meets a given condition contained within a callback function. Once the condition has been met, the method returns the element that meets the condition and exits the iteration of the array. 

* The `find()` method is useful for iterating through large arrays that contain alot of data. 


### Object.keys()

* The `Object.keys()` method creates and returns an array object, containing the keys as elements, from the passed in object. 

* This is a useful method, as you can iterate through the returned array from `Object.keys()` and use the elements as keys in bracket notation to access the values in an object. 

```js
let myObj = {1: 'hello', 2:' ', 3: 'world', 4:'!' }

Object.keys(myObj).forEach(function(element) {
  console.log(myObj[element])
})
```

