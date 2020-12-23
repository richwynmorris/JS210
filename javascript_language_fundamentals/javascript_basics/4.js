const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?
// 'Bob Bob'

// The reason the above is printed out withint the toUpperCase method modifying the variabele name is because the method
// returns a new value but does not modify the existing value. If it did, an error would raise as you cannot modify a a cosnstant's
// value once it has been set. 

let newName = name.toUpperCase();
console.log(newName) // => BOB