function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// The issue above is that the nested function `gereateRandomInt` is wrapped in parenthesis. This means
// that the variable winningNumber cannot be assigned the return value from the function execution because
// the function does not exist at the same scope level as the placeABet function. It is a unnamed function
// despite having a name, because it is not declared. To resolve this issue, you can remove the parenthesis 
// around the function which then makes the function accessible and able to execute.
