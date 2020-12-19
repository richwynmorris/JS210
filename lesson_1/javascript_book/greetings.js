let rlSync = require('readline-sync')

function get_names() {
  let firstName = rlSync.question('What is your first name?\n')
  let lastName = rlSync.question('What is your last name?\n')
  return `Greetings, ${firstName} ${lastName}!`
}

greeting = get_names()

console.log(greeting)