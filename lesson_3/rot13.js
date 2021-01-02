function rot13(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
  const upcaseAlphabet = alphabet.toUpperCase();
  let newStr = '';
  let index
  
  string.split('').forEach(function(letter) {
    if (alphabet.includes(letter.toLowerCase()) === false) {
      newStr += letter;
    } else if (letter === letter.toUpperCase()) {
      index = upcaseAlphabet.indexOf(letter) + 13;
      newStr += upcaseAlphabet[index];
    } else {
      index = alphabet.indexOf(letter) + 13;
      newStr += alphabet[index];
    }
  });

  return newStr
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));