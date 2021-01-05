// Write a function that accepts two arrays as arguments and returns an array with the first 
// element from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  let newArr = []
  newArr.push(beginningArr.shift())
  newArr.push(endingArr.pop())  
  return newArr
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
console.log(endsOf([], []))