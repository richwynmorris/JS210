### Problem 1

```Javascript
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

### Answer:
`Undefined` - The reason that the return result is undefined is because the function `say` is hoisted during the creation phase. This means that the local variable `a` is also hoisted as a part of its block. As it uses the `var` statement, it sets the local variable `a`'s value to `undefined`. As the `if` statement does not run upon the function invocation on line 9. As a result, when the console.log function is executed and `a` is passed to it as an argument, it outputs `undefined`. 

### Problem 2

```Javascript
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

### Answer
ReferenceError - This will raise a reference error as the local variable `a`, once hoisted in the creation phase, will have no value or be 'unset'. As the `if` statement does not run, the local variable `a` remains without a value. This means a ReferenceError will be raised once it is passed an an argument to the console.log function. 


### Problem 3

```Javascript
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
```

### Answer:

hello
ReferenceError

The variable `a` is defined with the value of `unset` in the creation phase when all functions and variables are hoisted. The variable 'a' is then reassigned the value of the string 'hello'. THis is then passed to to the console.log function. However, as the variable is declared in the body of the function, it is not available in the outerscope. As a result. when the variable `a` is passed the console.log function it returns a Reference Error.

### Problem 4

```Javascript
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);
```

### Answer
hello
hello 

This is the output as on line 10 when the function is called, a has not been declared and thus a global variable is created which has no value until it is assigned a value on line 2, where it is reassigned the value of the string object `hello` the if block does not run but within this block a `let` statements is used. The scope of this `let` statement is limited as it scoped at the block level. 

### Problem 5
```Javascript
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
```

### Answer
4

The reason the above is 4 is becuase the variable `a` is declared at the global level and then assigned the value of the string object `'hello'`. WIthin the `for` loop statments variable `a` is redeclared, something `let` and `const` cannot do, to the value of varable index. This loops 4 times and is incremented each time. The variable `a` is then passed to the console.log function and is outputted. 

### Problem 6

```Javascript
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);
```

### Answer
hello

The reasons the output is as above is a result of the global variable `a` being declared on line 1 with the value of `hello`. Within the `for` loop block, a local variable `a` is declared within the block using the `let` statement. Variables that are declared with the `let` statement are scoped at the block level and thus a new local variable `a` is assigned the value of index, which after 4 iterations is at the value of 4. However, this does not impact the variable `a` which is scoped at the global scope level.

### Problem 7 

```Javascript
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);
```

### Answer
4
3


### Problem 8

```Javascript
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);
```

### Answer
superNested
global

The superNested function reassigns the local variable `a` that is declared on line 4 to `superNested` on line 8. This is returned from the checkScope function and passed to the console.log function. As variables that are declared with the `var` keyword are scoped at the function and global level, variable `a` declared on line 4 of the function `checkScope` does not impact variable `a` declared in the outermost scope/global level. 

### Problem 9 

```Javascript
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
```

### Answer
outer
outer
outer
inner

The reason the above output is as is is a result of passing the local variable `a` as an argument to the setScope() function. Although the local variable is passed to the function, it is the function paramter that is assigned a new value, not the local variable itself. As a result, the variable `a` declared on line 1 continues to reference the string object `outer`. The variable `b` , however, is reassigned the the new string value `inner` on line 12.

### Problem 10

```Javascript
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
```

### Answer
50
60
15

### Problem 11

```Javascript
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
```

### Answer
outer
TypeError

The variable `setScope` is hoistered and set to the value of `undefined`. This means that when the secScope function is called on line 4 as function, it returns a TypeError as the variable has yet to be assigned a function. It is important to note that while a variable may be initialized in the creation phase, the function is not accessible until it has been assigned as a value to the variable that acts as the functions name. 

