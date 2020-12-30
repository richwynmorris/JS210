let password = 'password'
let numberOfAttempts = 0

while (numberOfAttempts < 4) {
  attempt = prompt('What is your password')

  if (attempt === password) {
    console.log("You have successfully logged in.")
    break
  }
  numberOfAttempts += 1
}

if (numberOfAttempts > 3) {
  console.log("You have been denied access.")
}
