// In the following code, a user creates a person object literal and defines two methods 
// for returning the person's first and last names. What is the result when the user tries out the code on the last line?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`); // Functions must be called using the end parenthesis, otherwise the function
// itself is returned. In this case, the function is returned and interpolated into the string. In order to invoke the function as 
// intended you must use `person.firstName()`

console.log(`${person.firstName()} ${person.lastName()}`)