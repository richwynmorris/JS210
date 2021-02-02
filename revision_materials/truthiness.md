### True and False vs Truthy and Falsy

* JavaScript is able to coerce any value into a boolean value. It can do this so conditional statements like `if`..`else` statements are executed dependent on what the conditional value evaluates to. This means any expression can evaluate to true or false. 

* Anything that evaluates to true is called a truthy. Anything that evaluates to false is called a falsy. 

* In JavaScript the following values are considered a falsy:

* 0/-0/0n
* ''
* false
* undefined
* null
* NaN

* Everything else in JavaScript evaluates to a true and is considered a truthy,

* Operators like `&&` and `||` which utilise short circuit evaluation can use truthy and falsy values to perform their operations. Moreover, they can also return a truthy or falsy value. This is always the value of the operand evaluated last. 

* The bang operator `!` converts the value its associated with to the opposite of it's truthy value. Using two bang operators, creates again converts the value again return it's evaluated result either `true` or `false`.

* Although all value either evaluate to either `true` or `false`, this does not mean that they strictly equal with one another.

* A truthy value will evaluate to `true` but it will not be strictly equal to the value of `true` itself. 

```js
true === 'a' // false
```

* When `true` and `false` are used with the non strict equality operator, they are implcitly coerced into into numbers, 1 for true and 0 for false

```js
1 == true // turns into 1 == 1
// => true

0 == false //  turns into 0 == 0
// => true 
```


```js
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // '3'
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true 
```