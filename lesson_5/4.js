// Write a function named wordCount that takes a single String as an argument. 
// The function should return an Object that contains the counts of each word 
// that appears in the provided String. In the returned Object, you should use
// the words as keys, and the counts as values.


function wordCount(string) {
  let words = string.split(' ')
  let eachWordAndCount =  new Object()
  let index = 0 

  words.forEach(word => {
    let count = 0
    for(let i = index; i < words.length; i++) {
      if (word === words[i]) {
        count ++
      }
    }
    if (eachWordAndCount[word] === undefined) {
      eachWordAndCount[word] = count
    }
  });
 console.log(eachWordAndCount)
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }