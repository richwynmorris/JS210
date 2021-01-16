function integerToString(number) {
  let numbers = { 0:'0', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', };
  let string = [];

  for (let divider = 1; ; divider *= 10) {
    let key = Math.floor((number/divider) % 10)
    string.unshift(numbers[key])
    if (string.join('') == number) {
      return string.join('')
    }
  }

}

function signedIntegerToString(number) {
  switch (true) {
    case number < 0:
      return '-' + integerToString(number * -1)
    case number === 0:
      return '0'
    default:
      return '+' + integerToString(number);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"