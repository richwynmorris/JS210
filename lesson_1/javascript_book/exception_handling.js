let names = ['bob', 'joe', 'steve', undefined, 'frank']

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letter in it.`);
  } catch (exception) {
    console.log('something went wrong!')
  }
});