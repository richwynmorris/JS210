function splitString(string, delimiter) {
  let checkSecondArg = delimiter
  let substr = ''
  
  //edge cases
  if (checkSecondArg === undefined) {
    console.log('ERROR: No delimiter')
    return
  }
  else if (delimiter === '') {
    for(let index = 0; string.length > index; index++ ) {
      console.log(string[index])
    }
  return;  
  }
  
  for(let index = 0; string.length + 1 > index; index++) {
    if (string[index] === delimiter || string[index] === undefined) {
      console.log(substr)
      substr = ''
    } else if (string[index] !== delimiter || string) {
     substr += string[index]
    }
  }
}

splitString('abc,123,hello world', ',')
// // logs:
// // abc
// // 123
// // hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o



splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello