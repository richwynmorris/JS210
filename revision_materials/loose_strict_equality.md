### Loose and Strict Equality 

* Comparison operators that check for equality always return a boolean value. 

* These comparison operators take operands, which are the values on the left and right side of the operator. 

* `===` - This operator is known as the `strict equality operator` (or identity operator) and it check if both operands are exactly equvilalent and equal to one another in relation to value and datatype. If they are both equal as described previouslt, then the operator return `true`, otherwise `false`.  

* `!==` - This operator is known as the `strict inequality operator`. If both operators are strictly inequal, the the operator returns `true`. If they are strictly equal, the operator returns `false`

* `==` - This operator is known as the `non-strict equality operator` or the `loose equality operator`. It checks for equality, however, it only does this after coercing one of the operands to the others datatype before checking for equality. The `==` operator returns `true` if the final comparison, after coercion, is equal. Otherwise, `false`. This can lead to unexpected results such as `'2' == 2` returning `true`. For this reason, Launch School recommends not using them in your code. 

* `!=` - This operator is known as the `non-strict inquality operator` or the `loose inequality operator`. It works in a similar fashion to the above operator, in that it coerces operand to the same type as another operand. However, the results are inversed. If the result of the comparison is inequal, the operator returns `true`. If it is equal, it returns `false`.

* When either `!=` or `==` is used in an expression, it implicilty coerces one operand to the other's type. The datatypes used in the expression will dictate how JavaScript implicitly coerces the datatypes. 

* If one of the operands is a string and the other is a number, Javascript converts the string to a number. 
- (When the string is empty e.g. `''`. Javascripts coerces this to the number `0`.)

* When one of the operands is a boolean, it is coverted to a number. If it is true, it is converted to `1` and `0` if it is false. 

* When one operand is `undefined` and the other is `null`, the `non-strict equality operator` returns `true`. This is not the case the the `strict equality operator`.

* If both operands are `null`, or  both operands are `undefined` the non-strict equality operator will return `true`. 

* If either `null` or `undefined` are compared to anything else, they return `false`.

* If `NaN` is compared to anything else, including itself, it returns false. The only way you can check is a value is either equal to `NaN` is by using the `Number.isNaN()` method and passing a value as an argument. `NaN` is only value that is not equal to itself. 

### Best Practise 

* Always use strict equality operators. 
* Always use explicity type coercions. 


