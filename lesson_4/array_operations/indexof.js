function indexOf(array, element) {
  for(let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index
    }
  }
  return -1
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1