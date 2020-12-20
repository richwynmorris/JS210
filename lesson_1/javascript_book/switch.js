let rlSync = require('readline-sync')
let a = Number(rlSync.question("Set a value of 'a'\n"))

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break
}