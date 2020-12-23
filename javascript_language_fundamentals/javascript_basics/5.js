// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

rlSync = require('readline-sync');

first_num = Number(rlSync.question("==> Enter the first number:"))

second_num = Number(rlSync.question("==> Enter the second number:"))

console.log(`${first_num} + ${second_num} = ${first_num + second_num}`)
console.log(`${first_num} - ${second_num} = ${first_num - second_num}`)
console.log(`${first_num} * ${second_num} = ${first_num * second_num}`)
console.log(`${first_num} / ${second_num} = ${first_num / second_num}`)
console.log(`${first_num} % ${second_num} = ${first_num % second_num}`)
console.log(`${first_num} ** ${second_num} = ${first_num ** second_num}`)