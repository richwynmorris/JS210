// Write a function named copyProperties that takes two Objects as arguments. 
// The function should copy all properties from the first object to the second. 
// The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
  Object.keys(obj1).forEach(key => {
    obj2[key] = obj1[key]
  });
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }