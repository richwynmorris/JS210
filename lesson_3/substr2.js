function substring(string, start, end) {
  if (start < 0 || isNaN(start)) {
    start = 0
  }
  
  if (end < 0) {
    end = 0
  }
  
  function postiveIntegers(string, start, end) {
    let newStr = ''
    for(let index = start; index < end; index++) {
      if (string[index] === undefined) {
        break
      }
      newStr += string[index]
    }
    return newStr
  }
  
  if (start > 0 && end > 0 && start < end) {
    console.log(postiveIntegers(string, start, end))
  }  else if (end === 0 && start !== end) {
    console.log(postiveIntegers(string, start, string.length))
  } else if (start > end) {
    console.log(postiveIntegers(string, end, start))
  } else if (end === undefined) {
    console.log(postiveIntegers(string, start, string.length))
  } else {
    console.log('')
  }
}
let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
