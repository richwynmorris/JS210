### Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

```
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
``` 

```Javascript
let name = "Victor"

> console.log(`Good Morning, ${name}`)
Good Morning, Victor
undefined
> console.log(`Good Afternoon, ${name}`)
Good Afternoon, Victor
undefined
> console.log(`Good Evening, ${name}`)
Good Evening, Victor
undefined
``` 

### Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```
You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
```

```Javascript
age = 20

console.log(`You are ${age} years old`)

console.log("In 10 years, you will be " + (age + 10) + " years old.");
console.log("In 20 years, you will be " + (age + 20) + " years old.");
console.log("In 30 years, you will be " + (age + 30) + " years old.");
console.log("In 40 years, you will be " + (age + 40) + " years old.");
```

### What happens when you run the following program? Why do we get that result?

```Javacript
{
  let foo = 'bar';
}

console.log(foo);
``` 

The console returns an error as the local variable `foo` is initialized within the scope of a block. As the `console.log()` log method is being invoked from the outerscope of where the variable `foo` is initialized it is not accessible and thus raises an uncaught reference error.  

### What happens when you run the following code? Why?

```Javascript
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
``` 

The following code will intially print the following statements: 

Good Morning, Victor
Good Afternoon, Victor
Good Evening, Victor

On line 6, the program tries to change the value that the constant `NAME` is referencing. Constants are immutable once they have been assigneed a value and, as a result of the program trying to alter what `NAME` is referencing, Javascript raises an uncaught type error. After the error has been raised, Javascript continues excuting the console.log statement on lines 7 - 9. As the constant `NAME` is still referencing 'Victor', the output is repeated as it was originally. 

### Take a look at this code snippet:

```Javascript
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

What does this program log to the console? Why?

The output of the program above is `'bar'`. The reason behind this is the local variable `foo` is initialized on line 1 with the value of `'bar'`. On lines 2 - 4, the block is executed. On line 3, a new local variable is initialized using the `let` keyword. This variable, which exists only within the context of the block, has the same name as `foo` and points to the value `'qux'`. As this variable only exists within the variable scope of the block it does not impact what the variable `foo` is referencing in the outerscope. As a resullt, `foo` in the outscope continues to reference the string `'bar'` and this is what is output by the method. The `console.log()` method returns `undefined`. 


### Will this program produce an error when run? Why or why not?

```Javascript
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

```
This program will not return an error as the const `FOO` is intialized with the value of `qux` within the context of a block. As a result, the const `FOO` that is initialized in the outerscope with the value of `'bar'` is not impacted and continues to reference it's value. This demonstates the concept of local variable scoping rules. 
