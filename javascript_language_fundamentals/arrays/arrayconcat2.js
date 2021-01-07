function concat() {
  let newArr = arguments[0]

  for (let index = 1; index < arguments.length; index++) {
    if (Array.isArray(arguments[index])) {
      arguments[index].forEach(function(element) {
        newArr.push(element)
      });
    } else {
      newArr.push(arguments[index])
    }
  }
  return newArr
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]