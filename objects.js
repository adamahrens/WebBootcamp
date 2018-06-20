
var person = ["Patrick", 30, "Iowa"];

var personObject = {
  name: "Patrick",
  age: 30,
  state: "Iowa"
};

console.log(personObject.name);
console.log(personObject["name"]);
console.log(personObject.state);

personObject.state = "Minnesota";
console.log(personObject.state);

personObject.isFun = true
console.log(personObject.isFun);

// Array
var people = [ { first: "Adam", last: "Ahrens" }, { first: "Leroy", last: "Jenkins" }];
var person1 = people[0];
var person2 = people[1];
console.log(person1.last);
console.log(person2.last);

var object = {
  friends: [{name: "Malfoy"}, {name: "Crabbe"}, {name: "Goyle"}],
  color: "baby blue",
  evil: true
};

console.log(object.friends[0].name);

function display() {
  var result = "You have";
  result += this.watched ? " watched" : " not seen";
  result += " \"";
  result += this.title;
  result += "\"";
  result += " - ";
  result += this.rating;
  result+= " stars"
  return result
}

function Movie(title, rating, hasWatched) {
  this.title = title;
  this.rating = rating;
  this.watched = hasWatched;

  // Another way to add methods
  this.output = display;
}

// One way to add methods
Movie.prototype.consoleDisplay = display;

var movies = [ new Movie("The Big Lebowski", 5, true),
               new Movie("Super Troopers", 5, true),
               new Movie("The Post", 0, false),
             ];
console.log(movies[0].title);

console.log("For Each...");
movies.forEach(function(movie) {
  console.log(movie.consoleDisplay());
  console.log(movie.output());
});
