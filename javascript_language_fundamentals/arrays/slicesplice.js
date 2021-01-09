function slice(array, begin, end) {
  let newArr = []
  if (end > array.length) {
    end = array.length
  }

  for (let index = begin; index < end; index++) {
    newArr.push(array[index])
  }

  return newArr
}

// slice([1, 2, 3], 1, 2);               // [2]
// slice([1, 2, 3], 2, 0);               // []
// slice([1, 2, 3], 5, 1);               // []
// slice([1, 2, 3], 0, 5);               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// slice(arr1, 1, 3);                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

// The splice function changes the contents of an array by deleting existing elements and/or adding new elements. 

// The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. 

// The function removes deleteCount number of elements from the array, beginning at the start index. 

// If any optional element arguments are provided, splice inserts them into the array beginning at the start index. 

// The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. 

// splice mutates the original array.


function splice(array, start, deleteCount, ...args) {
  let deletedItems = []
  let argsIndex = 0

  if (args.length === 0 ) {
    deletedItems = array.slice(start, start + deleteCount)
  } else if (args.length === 1 && deleteCount === 0) {
    let endElements = array.slice(start+deleteCount)
    array.length = array.length + 1
    endElementsIndex = 0 
    array[start] = args[0]
    for (let index = start + 1; endElements[endElementsIndex] !== undefined; index++) {
      array[index] = endElements[endElementsIndex]
      endElementsIndex += 1
    }
  } else if (args.length > 0) {
    for (let index = 0; deleteCount > 0; index++) {
      if (index >= start) {
        deletedItems.push(array[index])
        array[index] = args[argsIndex];
        deleteCount -= 1
        argsIndex += 1
      }
    }
  }

  return deletedItems
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
