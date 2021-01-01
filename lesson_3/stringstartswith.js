function startsWith(string, searchString) {
  let checkString = ''
  for(let index = 0; index < searchString.length; index ++) {
    checkString += string[index] 
  }
  if (checkString === searchString) {
    return true
  }
  else {
    return false
  }
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false