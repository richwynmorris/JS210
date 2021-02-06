

let rlSync = require('readline-sync')

let bill = rlSync.question('What is the bill?\n')

let tipPercentage = rlSync.question('What is the tip percentage?\n')

let tip = ((bill / 100) * tipPercentage).toFixed(2)
let total = Number(tip) + Number(bill)

console.log(`The tip is $${tip}.`)
console.log(`The total is $${total.toFixed(2)}`)