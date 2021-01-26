### Assignments and Comparison

* Initial variable assignment in javascript is achieved using an **initalizer**. An initializer is the expression in javascript that takes place to the  right of the `=` operator. The initializer only exists when a newly declared variable is assigned an initial value. 

* The return value of the intial assignment is always `undefined`.

* Once the variable has been assigned a value, when it is reassigned, it returns the new value the variable is referencing. In this instance the `=` operator is referred to as an `assignment operator`

* When a variable is assigned the value of another variable. It will instead reference the value, that the variable it has been assigned to, is pointing at. This means that variables are not deeply linked to one another. 

* When assigning a variable without using the `let` or `const` declarations, Javascript automatically creates the variable at the level of the global scope. This can be the common cause of undesirable bugs in a program. 

* Constants cannot change the value that they reference after they have been declared. This is why it important to assign the constant with an initializer at the point of declaration in the program.

* As JavaScript is a dynamically typed language, it does not restirct the variable with a specific datatype. This means any variable can reference a value of any datatype. 

* Comparison operators compare the values that are passed to them as operands and return a boolean value, either `true` or `false`. If both the operands are of different datatypes, JavaScript will implicitly try to coerce them into different values to perform the operation. This can cause significant issues when used with the loose equality operators `!=` and `==` as the results can be unexpected, leading to bugs in the program. It is suggested to always use the strict equality operators as they do not coerce the operands into different datatypes to equate them. They only compare them strictly by their datatype and value. 

* The comparison operators are `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=`. 

* Strings can compared just as numbers. JavaScript performs this operaton by comparing the string elements in sequence evaluating them lexicographically. It returns the last evaluated comparison between letters at the same index position in both strings. 

```js
'ac' > 'ab'
// 'a' > 'a'  === false
// 'c' > 'b' === true
// returns true. 
``` 

* When using the non strict equality operator, the follow rules are applied.
  - When one operand is a Strings and the other is a Number, the string is converted to a number. An empty string is considered 0.
  - When one operand is boolean, the boolean is converted to a number, either 1 or 0.
  - When one operand is `null` and the other is `undefined` this returns true.
  - When `null` and `undefined` are compared to anything other than above and themselves, they return `false`.
  - When one of the operands is `NaN` is always returns `false`. 
