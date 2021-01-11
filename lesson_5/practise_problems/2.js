// Write a function named incrementProperty that takes two arguments: an Object and a String. 
// If the Object contains a property with the specified name, the function should increment the value of that property. 
// If the property does not exist, the function should add a new property with a value of 1. 
// The function should return the new value of the property.

function incrementProperty(obj, str) {
  for (prop in obj) {
    if (prop === str) {
      obj[prop] += 1
    } else if (prop !== str && obj[str] === undefined ) {
      obj[str] = 1
    } else {
      continue
    }
    return obj[str]
  }
}


let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }