// Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}


// Line 7 = 'Hello' => myBoolean evaluates to true as true is a truthy and thus the if conditional is executed.
// Line 11 = Nothing => myString evaluates to true but it is prefaixed with `!`. This converts the the truthy value to false and 
// as false is a falsey the if conditional is not executed. 
// Line 15 = 'World' => The array object evaluates to a truthy but is prefixed with two bang operators. This evaluates to `true`. 
// As a result, the if statement is executed.
// Lines 19 = '!' => myOtherString is an empty sting which evaluates to a falsy. However, as the statement uses a `||` conditional,
// both variables are evaluated. As myArray evaluates to a truthy, the if statement is executed. 
