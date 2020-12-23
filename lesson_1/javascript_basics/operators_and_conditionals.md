### Set a variable, apples, to 3. Set a second variable, bananas, to 5. Write a conditional using == that checks whether apples is equal to bananas. Log a message if true.

```Javascript
let apples = 3;
let bananas = 5;

if (apples == bananas) {
  console.log('Apples and Bananas match!');
}
```

### Set the value of bananas to the string value "3". Use the same conditional as the previous problem.

```Javascript
let apples = 3;
let bananas = '3';

if (apples == bananas) {
  console.log('Apples and Bananas match!');
}
```

### Change the conditional from the previous practice problem to use === instead. Why doesn't this one output a message?

```Javascript
let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Apples and Bananas match!');
}
```

The above does not output the message as the Number `3` and the String `'3'` are the not the same datatype. This is called string equality which checks that both the value and datatype are the same to evaluate to true. 

### Write an else clause that logs a different message if false.

```Javascript
let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Apples and Bananas match!');
} else {
  console.log('The fruits aren\'t equal!')
}
```

### Between the if and else clauses, insert an else if clause that checks whether apples == bananas. Log a message stating that the two are the same number but different types.

```Javascript
let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Apples and Bananas match!');
} else if (apples == bananas) {
  console.log('They have the same number but are different data types');
} else {
  console.log('The fruits aren\'t equal!')
}
```

### Move the else if clause into the else clause and change it to an if statement. After your if statement, append an else clause that outputs your "not strictly equal" message as before. 

```Javascript
let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Apples and Bananas match!');
} else {
  if (apples == bananas) {
    console.log('They have the same number but are different data types');
  } else {
    console.log('The fruits aren\'t equal!')
  }
}
```

### Set the variables apples and bananas to 3. Set a variable, areEqual, to the value of apples compared to bananas. This works the same way as the if statements we have been writing, but instead of an if and the condition in parentheses, we just use the condition from within the parentheses as the new value for our variable. Log the value of areEqual.

```Javascript
let apples = 3;
let bananas = 3;
let areEqual = (apples === bananas)

console.log(areEqual);
```


### Set the value of apples to 3 and bananas to undefined. Set a variable named eitherOr to the value of apples or bananas. This works the same as the previous problem, where you write the comparison as the assignment of the variable. Log the value of eitherOr.

```Javascript
let apples = 3;
let bananas = undefined;

let eitherOr = (apples || bananas)

console.log(eitherOr);
```

### Set the value of bananas to 1. Perform the same assignment for eitherOr. Log the value of eitherOr. Afterward, assign bananas || apples to the eitherOr variable. Note that the value is now the bananas variable instead of apples. JavaScript reads this statement from left to right. If the left-side has a truthy value, it is used. Otherwise, the right-side value is used.

```Javascript
let apples = 3;
let bananas = 1;

let eitherOr = (bananas || apples)

console.log(eitherOr);
```


### Create two new variables, lastName and familyMessage. Set lastName to your last name, then use a ternary that checks whether lastName is equal to your last name to set familyMessage to either "You're part of the family!" or "You're not family."

```Javascript
let lastName = 'Morris'
let familyMessage

familyMessage = lastName === 'Morris' ? "You're part of the family!" : "You're not family!"
```





