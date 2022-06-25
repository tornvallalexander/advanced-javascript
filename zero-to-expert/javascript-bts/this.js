
// this keyword is a special keyword that is created for every execution context
// it points to the object that is currently being executed
// depends on how the function is called

// method: this = <Object that is calling the method>
// simple function call: this = (window) undefined
// arrow function: this = <this of the surrounding function (lexical this), gets picked up from the outer lexical scope>
// event listener: this = <DOM element that the handler is attached to>

// what `this` keyword is not: does not point to the function itself, and also not its variable environment

const calcAge = function(birthYear) {
  console.log(this);  // undefined
  return 2037 - birthYear;
}
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(this);  // points to the outer lexical scope, which is the window object
  return 2037 - birthYear;
}
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this);  // points to the object itself (the jonas object) --> jonas is the owner of the method
    return 2037 - this.year;
  }
}
jonas.calcAge();


const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;  // will work 100% correctly since matilda is the owner of the method when called with matilda.calcAge()

const f = jonas.calcAge;
f() // undefined

const f2 = jonas.calcAge.bind(matilda);
f2() // 20, this will work correctly