function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element == false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// The reason line 15 returns true instead of false is because of the use of the abstract equality operator. As a result of 
// `==` in the operation, when the value `0` is checked for equality against false on the fourth iteration, it returns true. 
// To remedy this, you need to use the strict equality operator which will only return true if both values are exactly the same.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) { // using string equality operator
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true