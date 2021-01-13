// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase(); // each element is reassigned a new value based on the return result of .toUpperCase. 
    // This does no affect array2's values as they are primitives and therefore cannot be mutated, only reassigned. 
  }
}

console.log(array2); // ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
