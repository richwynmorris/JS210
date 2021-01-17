// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); //5

// The reason array.length continues to return the same value
// despite new elements being added to the array, is because the .length property only
// takes into account elements with a non negative integer used as a key. The elements 
// added to the array on line 7 and 11 are instead assigned to the array using a string value as a key.
// This is why, when the Object.keys method is invoked, it returns an array of each of the keys as elements
// in the array. However, each of these key-elements, are assigned a non negative integer to be used as an 
// index. When the length property is then called on the this array, is uses the index positions to count the elements.  

