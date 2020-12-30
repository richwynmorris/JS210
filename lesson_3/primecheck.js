function isPrime(num) {
  if (num <= 1) {
    return false
  }
  
  for (let index = 3; index < num; index += 2) {
    if (num % index === 0) {
      return false
    }  
  }
  return true
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false