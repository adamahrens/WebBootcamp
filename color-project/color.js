var difficulty = 9;
var colors = randomColors(difficulty);
var pickedColor = pickRandomColor(colors);
var message = document.querySelector("#message");
var squares = document.getElementsByClassName('square');
var gameModes = document.getElementsByClassName('game-mode');
var colorToGuess = document.getElementById('color-to-guess');
var header = document.getElementsByTagName("h1")[0];
var newGameButton = document.querySelector("button");
var defaultBackground = "#232323"

setupGame();

// Listeners
for(var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(){
    if (this.style.backgroundColor == pickedColor) {
      setTextContent(message, "Correct");
      setColor(header, pickedColor);
      for(var i = 0; i < difficulty; i++) {
        setColor(squares[i], colors[i]);
        setColor(squares[i], pickedColor);
      }
      setTextContent(newGameButton, "Play Again");
    } else {
      setColor(this, defaultBackground);
      setTextContent(message, "Try Again");
    }
  });
}

for(var i =0; i < gameModes.length; i++) {
  gameModes[i].addEventListener("click", function(){
    difficulty = Number(this.value);
    setupGame();
  });
}

document.querySelector("button").addEventListener("click", function(){
  setupGame();
});

function setupGame() {
  colors = randomColors(difficulty);
  pickedColor = pickRandomColor(colors);
  setColors(squares, defaultBackground);
  setTextContent(colorToGuess, pickedColor);
  setTextContent(message, "");
  setTextContent(newGameButton, "New Colors");
  for(var i = 0; i < difficulty; i++) {
    squares[i].style.backgroundColor = colors[i];
    setColor(squares[i], colors[i]);
  }

  setColor(header, "steelblue");

  var easy = document.querySelector("#easy");
  var med = document.querySelector("#medium");
  var hard = document.querySelector("#hard");

  easy.classList.remove('selected');
  med.classList.remove('selected');
  hard.classList.remove('selected');

  switch(difficulty) {
    case 3:
      easy.classList.add('selected');
      break;
    case 6:
      med.classList.add('selected');
      break;
    case 9:
      hard.classList.add('selected');
      break;
  }
}

function setColors(arr, color) {
  for (var i= 0; i < arr.length; i++) {
    setColor(arr[i], color);
  }
}

function setColor(element, color) {
  element.style.backgroundColor = color;
}

function setTextContent(element, text) {
  element.textContent = text;
}

function pickRandomColor(colors) {
  var number = Math.floor(Math.random() * colors.length);
  return colors[number];
}

function randomColors(number) {
  var colors = [];
  for(var i = 0; i < number; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256)  ;
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    colors.push(rgb);
  }

  return colors;
}
