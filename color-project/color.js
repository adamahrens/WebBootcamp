var colors = randomColors(6);
var pickedColor = pickRandomColor(colors);
var message = document.querySelector("#message");
var squares = document.getElementsByClassName('square');
document.getElementById('color-to-guess').textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    if (this.style.backgroundColor == pickedColor) {
      message.textContent = "Correct!";
      setColors(squares, pickedColor);
      setColor(document.getElementsByTagName("h1")[0], pickedColor);
    } else {
      setColor(this, "#232323");
      message.textContent = "Try Again";
    }
  });
}

function setColors(arr, color) {
  for (var i= 0; i < arr.length; i++) {
    setColor(arr[i], color);
  }
}

function setColor(element, color) {
  element.style.backgroundColor = color;
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
