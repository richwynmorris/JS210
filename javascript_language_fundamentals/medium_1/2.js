// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. 

// Read through the code shown below. Will it produce the expected result? Why or why not?

let i = 0; // variable 'i' initialized and set to the value 0
while (i < 10) { // while loop is executed with condition
  if (i % 3 === 0) { // if condition check the remainder of index modulo 3 is equal to 0.
    console.log(i); // logs the number to the console and returns undefined. 
  } else {
    i += 1; // index is reassgined its previous value plus 1
  }
}

// This will not output the expected result. It will instead output 0 repeatedly in an infinite loop. This is a result of index not being incremented in
// the if conditional statement, this leads to the if statement executing each time on the number 0 and the break condition of the 
// while statement never being met. 