// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.
// Note that repeatedCharacters does a bit more than simply count the frequency of each character: 
// it determines the counts, but only returns counts for characters that have a count of 2 or more. It also ignores the case.


function repeatedCharacters(string) {
  let letterCount = new Object();

  let letters = string.toLowerCase().split('');

  letters.forEach(letter => {
    letterCount[letter] = 0;
  })

  letters.forEach(letter => {
    if (Object.keys(letterCount).includes(letter)) {
      letterCount[letter] += 1;
    }
  })

  Object.keys(letterCount).forEach(key => {
    if (letterCount[key] === 1) {
      delete letterCount[key];
    }
  });

  return letterCount;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

