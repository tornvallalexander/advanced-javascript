/**
 * call(), apply(), bind()
 */

function a() {
  console.log("hi")
}

a.call()  // all functions have call() method, a() is just a shorthand

const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2
  }
}

const archer = {
  name: "Robin Hood",
  health: 30,
}

console.log(archer)
wizard.heal.call(archer, 20, 10)  // lets us use functions defined in object on other object --> changes the `this` keyword
console.log(archer)
wizard.heal.apply(archer, [20, 10])  // apply() does the same thing as call() except it accepts an array instead
console.log(archer)
const healArcher = wizard.heal.bind(archer, 20, 10)  // bind() returns a function with the `this` keyword set
healArcher()
console.log(archer)
