function indexOf(array, element) {
  for(let index = array.length - 1; index > -1; index -= 1) {
    if (array[index] === element) {
      return index
    }
  }
  return -1
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1