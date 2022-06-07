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