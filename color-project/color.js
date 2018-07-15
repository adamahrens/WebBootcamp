var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(180, 180, 180)", "rgb(10, 139, 70)", "rgb(111, 23, 79)"];
var squares = document.getElementsByClassName('square');
var pickedColor = colors[2];

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    console.log('Clicked a square');

    if (this.style.backgroundColor == pickedColor) {
      alert('You won!');
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}

document.getElementById('color-to-guess').textContent = pickedColor;
