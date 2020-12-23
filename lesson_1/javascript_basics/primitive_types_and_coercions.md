#### The result of the following calculation is a string. Using type coercion, correct the calculation to produce the numeric result instead.

```Javascript
let x = '13';
let y = 9;

console.log(x + y);
```

```Javascript
console.log(Number(x) + y);
```

### Using the same block of JavaScript, change the addition operator to a multiplication operator and leave x as a string. Will the result be a string or a number?

The output will be a number as the multiplication operator coercises the string into a numerical value before performing the operation.

### Convert the three parts of this telephone number to strings to produce a valid phone number.

```Javascript
let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa + nxx + num);
```

```Javascript
console.log(String(npa) + '-' + String(nxx) + '-' + String(num))
```

### The toString method is yet another way to convert values to strings. Try using toString to convert a boolean and an array to a String. Did you get the result you expected?

```Javascript
let bool = true;
let arr = [1, 2, 3];
```

```Javascript
console.log(bool.toString() === 'true') // I was expecting this value as it converts the boolean to the string type which is equal to the string 'true'.
console.log(arr.toString() === '1,2,3') // This was more surprising as it appearst that when an array is converted into a string is looses the square parenthesis and returns the contents as a string only. 
```
