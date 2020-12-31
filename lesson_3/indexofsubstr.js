function indexOf (stringToCheck, substring) {
  let index = 0
  
  while (index < stringToCheck.length + 1) {
    if (stringToCheck[index] === substring[0]) {
      
      let count = 0
      let stcIndex = index
      
      for (let ssIndex = 0; ssIndex < substring.length; ssIndex++) {
        if (stringToCheck[stcIndex] === substring[ssIndex]) {
          count += 1
          stcIndex += 1
        }
      }
      
      if (count === substring.length) {
        return index
      }
      
    }
    
    index += 1
  }
  
  return -1
}

function lastIndexOf(stringToCheck, substring) {
  let index = (stringToCheck.length - 1)
  
  while (index > -1) {
    if (stringToCheck[index] === substring[0]) {
      
      let count = 0
      let stcIndex = index
      
      for (let ssIndex = 0; ssIndex < substring.length; ssIndex++) {
        if (stringToCheck[stcIndex] === substring[ssIndex]) {
          count += 1
          stcIndex += 1
        }
      }
      
      if (count === substring.length) {
        return index
      }
      
    }
    
    index -= 1
  }
  
  return -1
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1