var playerOneScore = 0;
var playerTwoScore = 0;
var maxGames = 5;
var playerOneWinner = false;
var playerTwoWinner = false;

// Listeners
document.getElementById('playerOne').addEventListener("click", function(){
  // Increment player one score
  if (hasWinner() == false) {
    playerOneScore += 1;
    calculateWinner();
    updateDisplay();
  }
});

document.getElementById('playerTwo').addEventListener("click", function(){
  // Increment player one score
  if (hasWinner() == false) {
    playerTwoScore += 1;
    calculateWinner();
    updateDisplay();
  }
});

document.getElementById('reset').addEventListener("click", function(){
  reset();
  updateDisplay();
});

document.getElementById('numberInput').addEventListener("change", function() {
  maxGames = Number(this.value);
  document.getElementById("numberOfGames").textContent = "Playing to: " + maxGames;
  reset();
  updateDisplay();
});

// Logic
function calculateWinner() {
  if (playerOneScore == maxGames) {
    playerOneWinner = true;
  } else if (playerTwoScore == maxGames) {
    playerTwoWinner = true;
  }
}

function reset() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneWinner = false;
  playerTwoWinner = false;
  document.querySelector("#playerOneScore").classList.remove("winner");
  document.querySelector("#playerTwoScore").classList.remove("winner");
}

function hasWinner() {
  return playerOneWinner || playerTwoWinner;
}

function updateDisplay() {
  var p1 = document.querySelector("#playerOneScore");
  var p2 = document.querySelector("#playerTwoScore");
  p1.textContent = playerOneScore
  p2.textContent = playerTwoScore

  if (hasWinner()) {
    if (playerOneWinner) {
      p1.classList.add("winner");
    } else {
      p2.classList.add("winner");
    }
  }
}
