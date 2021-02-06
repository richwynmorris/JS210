### What's the difference between a statement and an expression?

* Expressions are any code that resolves to a value. The most common expressions either evalaute to a string, number or boolean. 

```js
1 + 1; // 2
'Hello' + ' World!'; // 'Hello World!'
'a' > 'b' // false
```

* When a variable is reassigned a new value this is considered an expression as it returns a value. 

```js
let a; 

a = 'hello'; // returns 'hello'. Expressions can exists whereever there is a value allowed. 
```

* Statements, however, do not necessarily return a useful value and more concerned with the the execution of the program. Examples of statements include variable declarations e.g. `let`, `const`,`var`, `if...else`, `for`, `while`. 

* Statements always evaluate to `undefined` unlike expressions. Moreover, they are different to expressions as they cannot be used as part of another expression. 

* Statements can use expressions but they are still statements. We can see this primrily in instances where a variable is declared and uses an initializer. The initializer is still an expression although its considered to only be a part of the wider statement. 

```js
let a = 2 * 2 // This is a statmenet that uses an initializer. The initializer itself is an expression. Howeverm the line of code is considered a statement as the declaration returns `undefined`.
```

