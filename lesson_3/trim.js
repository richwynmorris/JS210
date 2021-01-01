function trim(string) {
  
  let startingIndex
  let endingIndex
  
  // find starting index
  for (let index = 0; ; index++) {
     if (string[index] !== ' ') {
         startingIndex = index;
         break
         }
  }
  
  // find ending index
  for (let b_index = (string.length - 1); ; b_index -= 1) {
    if (string[b_index] !== ' ') {
        endingIndex = b_index
        break
    }
  }
  
  let trimmedWord = '';
  
  for (; endingIndex + 1 > startingIndex; startingIndex++) {
    trimmedWord += string[startingIndex];
  }
  
  console.log(trimmedWord);
  
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
