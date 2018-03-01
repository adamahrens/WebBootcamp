var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("How old are you?");

var greeting = "Your full name is " + firstName + " " + lastName;
console.log(greeting);
console.log("You are " + age + " years old");

var element = document.getElementById("greeting");
element.innerHTML += greeting;
