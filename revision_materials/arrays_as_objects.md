#### Arrays as Objects

* An array is a basic collection type that uses an ordered index. This index is made up non-negative integers. Arrays are heterogenous which means that can store a variety of datatypes within their structure. Arrays are constructed using
square bracket notation. 

* Arrays are actually Objects and this can be verified through the `typeof` function which returns the datatype of the value passed to it as an argument. 

```js
typeof([])
// => object
```

* In order to identify if an object is an Array, you can call the `Array.isArray()` method, which evaluates the value passed to
it and returns a boolean value, either `true` or `false` dependent on whether the object is an Array. 

* Arrays as Objects, use as a zero based index to access and modify data held at those indexes. It does this through bracket notation.

* Arrays automaticaly generate a `length` property which is always the value of the highest index value in the array, plus 1. This can be returned by calling the `length` proprty on the object. The `length` property does not count the number of elements that are contained within an array. 

```js
[1, '2', { 3:'hello' }, 4].length // => 4
```

* The `length` property can be reassigned explicitly with a different value. If the length property is reassigned to a value higher than it's current value, unassigned index properties become available to the array but default to empty. When called using bracket notation, they return `undefined` as they have no value attached to them.

* It is important to note, however, that although these gaps in the array return `undefined` they do not actually hold the value of `undefined`. They are simply empty. An array with empty slots is known as an sparse array. 

* The `length` property does not take into account any slots in the array that have an `empty` value. 

* The length property does not take into account elements of the array that are assigned non-negative values as index properties. 

```js
let array = [1,2,3]

array['-4'] = 4

array.length
// 3

console.log(array)
// [1, 2, 3, '-4': 4]

```

* If you want to count the length of the array, but also include values that have been assigned without using a non negative index, you need to use the `Object.values(example)` method to return an array of values associated with each key and then call the `length` method on this array.

```js
Object.values(array).length
```

* A value in an array that is assigned a non negative integer as its property is considered an `element`. You can still assign properties with values to an array that are not non negative integers, however, built in array methods will not include these in their operations as they are not considered elements of the array. 

* An array can technically be considered empty, using the length property, despite containing propeties and values that are assigned to the array without using a non negative integer. 

```js
let array = []

array['-1'] = 'is this included?'
array['-2'] = 'how about this?'

array.length // 0
console.log(array) // ['-1':'is this included?', '-2':'how about this?']
```

If you want to ensure that an array is empty of any values, it is more accurate to use the `Object.keys()` method and pass the object as an argument. This will return the properties that are contained within the array. You can then use the `length` property to determine the number of elements are are contained within the array. 

```js
Object.keys(array).length
``` 


* Arrays are more appropriate to use over standard objects when needing to keep data in a specific order. Morover, if the data
needs to be organised using labels, it is better to use Objects. 