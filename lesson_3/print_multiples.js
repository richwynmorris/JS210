function logMultiples(num) {
  let multiples = []
  for (let index = 0; index <= 100; index ++) {
    if (index % num === 0 && index % 2 !== 0) {
      multiples.push(index)
    }
  }
  multiples.reverse().forEach(num => {
    console.log(num)    
  });
}

logMultiples(17)
console.log(' ')
logMultiples(21)
