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

lizard.__proto__ = dragon
for (let prop in lizard) {
  console.log(prop)
  if (lizard.hasOwnProperty(prop)) {
    console.log("own: ", prop)
  }
}