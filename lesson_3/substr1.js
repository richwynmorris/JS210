function substr(string, start, length) {
  let newStr = ''
  
  let index
  let reverseIndex = (string.length + start)
  let reverseEndPoint = (reverseIndex + length)
  
  
  if (start > 0) {
    for(index = start; index < length + 1; index++) {
      if (string[index] === undefined) {
        break
      } else {
        newStr += string[index];
      }
    }
  } else if (start < 0) {
      for(index = reverseIndex; index < reverseEndPoint; index++) {
      newStr += string[index];
    }
  } 
  console.log(newStr)
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""