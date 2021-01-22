const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// The reason the above prints out each message twice is a result of the if condition being executed on every iteration
// of the loop. As the var declaration is used on each iteration, it continues to reference the previous value assignment
// in the current iteration as the variable is hoisted initially at the global scope. As a result the if condition on line 21 
// returns a true as newSpecies has a value from the previous assignmeny and line 22 is executed again. This can be fixed by 
// using the `let` declaration on line 15 instead of var so that variable is scoped at the block level, not the global level.