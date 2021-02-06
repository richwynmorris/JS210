### Primitives, type and type conversions.

* Primitives are a collection of datatypes that exist in javascript. They are:

* Number
* String
* Boolean
* Undefined
* Null. 

* Datatypes can be represented by *literals*. *Literals* are a means of associating a value with a particular datatype. 

```js
'hello world!' // = string literal
4 // = number literal
true // = boolean literal
undefined // = undefined literal
{hello: 'world'} // object literal
```

* In order to find out what datatype you're working with, you can use the `typeof` operator which will return the dataype of the value you passed in. The only surprsing results here is an an array will return `object` as does `null`. Everything else is as expected. 

### Numbers

* There are not different Number types for examples, integer, floating point, decimal point etc in Javascript. There is only one which is Number. This can be used for any real numbers and is implemented through the use of a floating point system. As a result of this, Javascript can run into issues when performing calculations using floating point numbers. It is recommending that you always work in the smallest integer number than can represent your value of units. 

* There are also three special value numbers which exist in JavaScript. They are:
- `infinity` = When you need number that is greater than any other number
- `-infinity` = when you need a number than is lower than any other number
- `NaN` = This is not a number and it the result of using a non number in a mathematical operation or performing an impossible mathematical operation like `0/0`

### Undefined and Null

* Both `undefined` and `null` represent an absence of value. However, `undefined` can occur implicitly when it a variable is not explicilty set a value. `null`, however, must be explicitly set as aliteral value for a variable. 

### Implicit Coercion 

* Implicit coercion is where one datatype is implicitly converted into another datatype in order to perform an operation. An example of this taking place can be seen when using th `+` operator with a String type and Number type

```js
'5' + 5 // '55'
```

The reason the above expression is surprising is because we would expect the operator in this context to perform an addition operation. However, when used with both the String and Number datatypes, this operation is actually called string concatantion. JavaScript implicitly converts the Number datatype into a string and than concatenates the string together. This is why it is always better to use Explicit coercion when working with different datatypes. 

#### The `+` operator

The `+` operator has some interesting behaviours. 

* When it is used in a unary context (one operand), it converts the value into a number. 

```js
+('123')        // 123
+(true)         // 1
+(false)        // 0
+('')           // 0
+(' ')          // 0
+('\n')         // 0
+(null)         // 0
+(undefined)    // NaN
+('a')          // NaN
+('1a')         // NaN
```

* When it is used  with two operands and one the operators is a string, it converts the numerical item into a string and concatanates them together into another string. 

```js
'123' + 123     // "123123" -- if a string is present, coerce for string concatenation
123 + '123'     // "123123"
null + 'a'      // "nulla" -- null is coerced to string
'' + true       // "true"
```

* When the two operands contain a combination of numbers, booleans, undefined or null, it converts the values to numbers and then add them together. Falsy values evaluate to `0` and truthy values evaluate to `1`. `undefined` is always coerced into `NaN` even through it is a falsy. 

* When one of the operands is an object, both the first and second operands are converted to strings and then concatanated together. 

```js
42 + {}                     // "42[object Object]"
```

* the non strict equality operators also perform implicit coercions to evaluate the equality of two operands. **PLEASE SEE loose_strict_equality.md for further details. 

### Explicit Coercion

* One of the ways you can convert a datatype to a different type is to use the appropriate expliction coercion functions like `Number()` or `String()`. 

* `Boolean()` as a function returns the boolean value of either true or false dependent on whether the argument passed is a falsy or a truthy. 

### Immutability of Primitives

* These primitives simple data structures and are immutable. This means they cannot be changed as values. If a variable is referencing a primitive, then any methods invoked upon them will return a new value but leave the original value unchanged. This means if you want to change the value a variable is referencing, you must explicitly reassign the value to the variable. No method or function in javascript will do this for you. 

```js
let myWord = 'hello'

if (true) {
  console.log(myWord.toUpperCase()) // method returns a new value but the variable is not reassigned new value. 
}

console.log(myWord)
```


### Primitives to Objects

As mentioned previously, primitives are immutable. However, we can still call methods on primitives and return a new value. This is because JavaScript comes with built in objects that have the same names as some of the primitives we have seen before. `String`, `Array`, `Math`, `Number`. In order to perform and operation on a primitive value, Javascript first needs to coerce the primitive into it's appropriate Object temporarily and performs the operation as required.

```js
let a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

let stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"
```