function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting;

    console.log(`${greeting}, ${name}!`);
  }
}

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// The issue here is the `randdomGreeting function is not being invoked with the use of parenthesis. This instead returns a string object
// containing the  literal function which is assigned to the `greeting constant`. This is then interpolated in the string which is passed to the 
// console.log() function. Moreover, the randomGreeting method does not explicitly return its intended value so instead it returns `undefined`.
// The solution below remedies these issues. 

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');