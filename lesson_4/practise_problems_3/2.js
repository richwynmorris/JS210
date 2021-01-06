// Write a function that takes an array argument and returns a new array that contains all the argument's elements 
// in their original order followed by all the argument's elements in reverse order.

function orderReverse (arr) {
  let newArr = []
  let reverseArray = arr.slice().reverse()

  for (let index = 0; index < arr.length; index++) {
    newArr.push(arr[index]);
  }

  for (let index = 0; index < arr.length; index++) {
    newArr.push(reverseArray[index]);
  }

  return newArr
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(orderReverse(digits))