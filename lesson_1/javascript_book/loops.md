### Exercise 1

Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

```Javascript
let age = 20

console.log(`You are ${age} years old`)

for (let age_calc = 10; age_calc < 40; age_calc += 10) {
  console.log(`In ${age_calc} years, you will be ` + (age + age_calc) + " years old.");
}
```

### Exercise 2

Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

```
n! 	Expansion 	      Result
1! 	1 	                1
2! 	1 * 2 	            2
3! 	1 * 2 * 3 	        6
4! 	1 * 2 * 3 * 4       24
5! 	1 * 2 * 3 * 4 * 5 	120
```

Use a loop of some kind to solve this. Don't use recursion; we'll do that later.

You may assume that the argument is always a positive integer.

```Javascript

function factorial(num) {
  product = 1;

  for (let counter = num; counter > 0; counter -= 1) {
    product *= counter;
  }

  return product
}
```

### Exercise 3

The following code causes an infinite loop (a loop that never stops iterating). Why?

```Javascript
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

The code enter an infinite loop as on line 3, the conditional for the `while` statement is an assignment. Assignments return the value that has been assigned which is a truthy. As a result, the while statment always reassigns the value of counter to `1` and thus it never increments. 

### Exercise 4

Does the following code produce an error? Why or why not? What output does this code send to the console?

```Javascript
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
```
The code above will not produce an error as all the fields in a for loop are optional. Moreover, the code above includes an auto incrementing feature on line 3 to keep track of the `i` variable and its value. Upon reaching the value 5, the `for` loop will end.

### Exercise 5

The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

```Javascript
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
```

### Exercise 6
Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

```Javascript

function factorial(num) {
  if (num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
```