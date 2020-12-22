function isMinusZero(value) {
  return 1 / value === -Infinity;
}

console.log(isMinusZero(0))
console.log(isMinusZero(10))
console.log(isMinusZero(-0))