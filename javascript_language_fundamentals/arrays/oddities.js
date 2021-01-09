// The oddities function takes an array as an argument and returns a new array containing every other element from the input array. 

// The values in the returned array are the first (index 0), third, fifth, and so on, elements of the input array. 

// The program below uses the array returned by oddities as part of a comparison. Can you explain the results of these comparisons?

// Examples:

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// The reason the above does note return true is because the array object returned by the array is not the same object as the array
// stored in the memory. The strict equality operator checks whether two objects are the same object and as both objects have different
// object id's the equality operator returns false despite both objects containig the same values. 