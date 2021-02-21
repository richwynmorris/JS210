let rlSyn = require('readline-sync')
let answer = rlSyn.question('What\' your name?\n')

if (answer.endsWith('!')) {
  console.log(`HELLO ${answer.toUpperCase().slice(0, -1)}, WHY ARE WE SHOUTING?`)
} else {
  console.log(`Hello ${answer}, nice to meet you.`)
}