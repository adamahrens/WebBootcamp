// Constructor functions
function House(bedrooms, bathrooms, sqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.sqft = sqft;
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    return this.name + ' just barked! Woof!';
  };
}

// Mutliple Constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.wheels = 4;
}

function Motorcycle(make, model, year) {
  // Changing value of this to Motorcycle when calling Car
  Car.call(this, make, model, year);
  this.wheels = 2;
}

console.log('----- Start ----!');
var house = new House(4,3,2900);
var trix = new Dog('Trix', 6);
console.log(trix.bark());
console.log(house);
console.log('----- End ----!');
