function toLowerCase(string) {
  let newStr = ''
  
  for (let index = 0; index < string.length; index++) {
    if (isNaN(Number(string[index]))) {
      let letter = string[index];
      let asciiNumeric = letter.charCodeAt(0);         // 65
      asciiNumeric += 32;
      if (asciiNumeric > 122) {
        newStr += string[index];
      }
      else {
        let dcletter = String.fromCharCode(asciiNumeric);
        newStr += dcletter;
      }
    }
    else {
      newStr += string[index]
    }
  }
  console.log(newStr)
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef