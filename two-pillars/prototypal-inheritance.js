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
lizard.__proto__ = dragon

// looks up in the prototype chain
// lizard.sing()

dragon.isPrototypeOf(lizard)  // is dragon a prototype of lizard --> does lizard inherit from dragon?
for (let prop in lizard) {
  console.log(prop)
  if (lizard.hasOwnProperty(prop)) {
    console.log("own: ", prop)
  }
}