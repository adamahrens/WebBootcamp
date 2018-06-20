var secret = 4;
var correctlyGuessed = false;

while(correctlyGuessed === false) {
  // prompt returns a string
  var guess = prompt("Guess a number");
  var numberGuess = Number(guess);

  if (secret === numberGuess) {
    alert("You got the correct number!");
    correctlyGuessed = true;
  } else if (numberGuess < secret) {
    alert("Too low!");
  } else {
    alert("Too high");
  }
}

for (var count = 0; count <= 25; count++) {
  if (count % 5 === 0) {
    
  }
}
