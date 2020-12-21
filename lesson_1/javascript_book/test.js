let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(obj, keys = undefined) {
  newObject = {}
  if (keys !== undefined)
    keys.forEach(function(key) {
      newObject[key] = obj[key];
    })
  else {
    Object.assign(newObject, obj)
  }
  return newObject
}