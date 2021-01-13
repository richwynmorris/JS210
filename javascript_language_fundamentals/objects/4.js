// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'. prop2 variable is assigned '456' on line 9. On line 11, the prop2 variable, 
// which returns '456' as a key is assigned the value of '678'. That's why the value is output as seen.  
console.log(myObject.prop2); // '456'  On line 10, the prop2 string key is reassiged a new value to that of '456'. This is
// then output to the console. 

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // {'funcProp': 'hello, '}
myObj[myFunc()] = 'world!';
console.log(myObj); // {'funcProp': 'world!'}