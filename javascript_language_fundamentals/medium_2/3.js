// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// 45


// let startingBalance
// const chicken
// const chickenQuantity
// function totalPayable 
// startingBalance = 1
// startingBalance = 5
// console.log
// startingBalance = 10
// console.log 