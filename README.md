# WebBootcamp
WebBootcamp

Just a place to dump some code from Udemy course.

`use strict`
`this` not declared in an object will refer to the global context
`this` in a object will be the closet parent
Prevent adding global properties to this (window).  `this` in an object will look at the parent in which it's declared

```
var person = {
  firstName: 'Leroy',
  hello: function() {
    return 'Hello ' + this.firstName;
  },
  context: function() {
    return this === person;
  },
  dog: {
    bark: function() {
      return 'Woof! ' + this.firstName; // undefined since closest parent is dog object
    }
  }
}

person.hello();
person.context();
```

Need to use call, apply, and bind if we would want the dog to refer to person for `this`. call and apply only apply to functions

# Use Call to fix

```
var person = {
  firstName: 'Leroy',
  hello: function() {
    return 'Hello ' + this.firstName;
  },
  context: function() {
    return this === person;
  },
  dog: {
    bark: function() {
      return 'Woof! ' + this.firstName; // undefined since closest parent is dog object
    }
  }
}
person.dog.bark.call(person) // Returns Hello Leroy
```

Can be helpful if you want to DRY functions in similar objects
