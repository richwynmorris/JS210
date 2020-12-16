1) Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

```Javascript
'John ' + 'Doe'
```

2)Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

    thousands place is 4
    hundreds place is 9
    tens place is 3
    ones place is 6


```Javascipt
> 4936 % 10
6
> (4936 % 100 - (4936 % 10)) / 10
3
> (4936 % 1000 - (4936 % 100)) / 100
9
> (4936 % 10000 - (4936 % 1000)) / 1000
4
```

3) Identify the data type for each of the following values:

 * 'true' = String 
 * false = Boolean
 * 1.5 = Number
 * 2 = Number
 * undefined = Undefined
 * { foo: 'bar' } = Object 

4) Explain why this code logs '510' instead of 15.


```Javascript
console.log('5' + 10);
```

This logs '510' as Javascript's engine implicitly coercises the Number value into the String value by first converting the Number value to a String datatype and concatanating them together. This then returns the String value '510'. Whenever a '+' expression is used with a String operand, it always implicitly converts any Number type to a String to perform the concatanation.


5) Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

```Javascript
console.log(Number('5') + 10);
```

6) Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

```
The value of 5 + 10 is 15.
```

```Javascript
> console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
The value of 5 + 10 is 15
```

7) 

Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

``` Javascript
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
```

No error is raised. Instead Javascript returns an `undefined` object is the index position is out of bounds.

8) Create an array named names that contains a list of pet names. For instance:
Name
asta
butterscotch
pudding
neptune
darwin


```Javascript
let names = { astra: 'dog', butterscotch: 'cat', pudding: 'dog', neptune: 'fish', darwin: 'monkey' }
undefined
> names
{
  astra: 'dog',
  butterscotch: 'cat',
  pudding: 'dog',
  neptune: 'fish',
  darwin: 'monkey'
}
```

9) What value does the following expression evaluate to?

```Javascript
'foo' === 'Foo'
```

The above expression evaluates to `false` as the two string values are not equal through the use of the capital 'F' and lowercase 'f'.

10) What value does the following expression evaluate to?

```
parseInt('3.1415')
```

3. 


11) What value does the following expression evaluate to?

```Javascript
'12' < '9'
```

This will evaluate to `true` as Javascript will evaluate each character in each string, one by one, and compare them. On the first iteration, '1' < '9'. Javascript then converts the String values to Numbers and evaluates `1 < 9` as being `true`. If the datatypes in the expression were Numbers to begin with, it would evaluate to `false`. 