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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"