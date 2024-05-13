// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startGame() {
    const secretNumber = generateRandomNumber(1, 100);
    let attempts = 5;
  
    while (attempts > 0) {
      const guess = parseInt(prompt("Guess the number between 1 and 100:"));
  
      if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
      }
  
      if (guess === secretNumber) {
        alert("Congratulations! You've guessed the number!");
        return; // End the game if the guess is correct
      } else if (guess < secretNumber) {
        alert("The number is high.");
      } else {
        alert("The number is low.");
      }
  
      attempts--;
    }
  
    // If all attempts are used up
    alert("Game over! The correct number was " + secretNumber + ".");
  }
  
  // Start the game
  startGame();