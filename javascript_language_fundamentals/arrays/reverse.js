function reverse(inputForReversal) {
  let reverseArray = [];

  for (let index = inputForReversal.length - 1; index !== -1; index -= 1) {
    reverseArray.push(inputForReversal[index]);
  }

  if (typeof(inputForReversal) === 'string') {
    return reverseArray.join('');
  } else if (Array.isArray(inputForReversal)) {
    return reverseArray;
  }

  return 'Not a valid datatype'
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]