function randomInteger(min, max) {
  if (min > max) {
    let temp = min
    min = max
    max = temp
  } else if (min === max) {
    return max
  }
 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomInteger(5, 10))
console.log(randomInteger(10, 5))
console.log(randomInteger(10, 10))