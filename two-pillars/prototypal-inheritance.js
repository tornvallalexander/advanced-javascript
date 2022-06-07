let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire.`
    }
  },
}

let lizard = {
  name: "Kiki",
  fight() {
    return 1
  }
}

// also works:
// const singLizard = dragon.sing.bind(lizard)

// creating a chain --> lizard all the way up to dragon
lizard.__proto__ = dragon  // __proto__ is not something we should use, but demonstrates the basic idea

// looks up in the prototype chain
// lizard.sing()

dragon.isPrototypeOf(lizard)  // is dragon a prototype of lizard --> does lizard inherit from dragon?
for (let prop in lizard) {
  console.log(prop)
  // shows which properties are inherited, checks and goes up the prototype chain
  if (lizard.hasOwnProperty(prop)) {
    console.log("own: ", prop)
  }
}

/**
 * Prototypal inheritance is very performant, uses less memory --> keeping code DRY
 */
const testObj = {}
console.log(testObj.__proto__.__proto__)  // returns null because this is as far up the chain that we can go

/**
 * Let's take a look at functions
 */
function multiplyByFive(num) {
  return num * 5
}

// these two below are the same
// NOTE: __proto__ is simply a reference to `prototype` up the chain
console.log(multiplyByFive.__proto__)
console.log(Function.prototype)

const arr = []
arr.hasOwnProperty("map")  // false
arr.__proto__.hasOwnProperty("map")  // true

// the below are the same --> this is how we are able to be efficient with our memory --> write them once, use them everywhere!
Array.prototype
arr.__proto__

// create our own prototype
let human = {
  mortal: true
}
let socrates = Object.create(human)  // inherit
socrates.age = 45
console.log(socrates)
console.log(socrates.mortal)  // we go up the prototype chain

// the below are the same, JS creates the prototypes for both, moves up the chain
"string".prototype  // undefined
String.prototype

// Exercises
/**
 * Date object => to have new method .lastYear() which show you last year "YYYY" format
 *
 */
Date.prototype.lastYear = function() {
  console.log(this.getFullYear() - 1)
  return this.getFullYear() - 1
}

// how the fuck would you do that with arrow function?, no access to this keyword
/**
 * turns out: with arrow function, `this` is lexically scope, aka this is referring to the actual Date object that called
 * one of the rare cases where we want `this` to be determined at call time
 */
Date.prototype.lastYear2 = () => {
  // ???
}

new Date().lastYear()

Array.prototype.map = function() {
  const arr = []
  this.forEach(item => {
    arr.push(item + "🚀")
  })
  return arr
}

// this does not work, doesn't modify the item --> ANSWER: best not to modify array
Array.prototype.map2 = function() {
  this.forEach(item => {
    item = item + "🚀"
  })
  return this
}

console.log([1,2,3].map())
console.log([1,2,3].map2())
