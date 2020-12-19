rlSync = require("readline-sync");
number1 = rlSync.question('Enter the first number:');
number2 = rlSync.question('Enter the second number:');

function multiply (num1, num2) {
  return num1 * num2 
}

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`)
