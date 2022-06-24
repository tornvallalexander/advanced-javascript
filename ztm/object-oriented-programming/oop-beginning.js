
const elfObj = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + elfObj.weapon
  }
}

elfObj.attack()

// factory functions
const store = {
  attack() {
    return "attack with " + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(store)
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}

const peter = createElf("Peter", "stones")
// console.log(peter.attack())

// constructor functions
// we are constructing an elf
function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

// this is a case where we would not want to use arrow functions since this would point lexically appoint the `this`
// keyword to the window object. If we use a function, `this` instead refers to where the function was called from
Elf.prototype.attack = function() {
  return `attack with ${this.weapon}`
}

Elf.prototype.build = function() {
  const self = this;
  function building() {
    return self.name + " builds a house"  // common gotcha is creating new functions where `this` loses initial reference
  }
  return building()
}

// `new` keyword assigns this to the created obj
const sam = new Elf("Sam", "fire")
console.log(sam.attack())
console.log(sam.build())
