function stringToSignedInteger(string) {
  let digits = string.split('').reverse();
  let number = 0;
  let sign = '';
  let multiplyer = 1;

  if (digits.includes('-') || digits.includes('+')){
    sign = digits.pop();
  }
    
  for (let index = 0; digits[index] !== undefined; index++) {
    number += (digits[index] * multiplyer);
    multiplyer *= 10;
  }

  if (sign === '-') {
    number *= -1;
  }
  
  return number
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
