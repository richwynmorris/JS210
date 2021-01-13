// Identify the bug in the following code. Don't run the code until after you've tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; 
myObject[a]; // This will not run, as the key passed to the operator is not a string object. Javascript 
            //  sees `a` as defined as a local variable in the outerscope. As this does not exist, an error is rasied.
myObject.a;


