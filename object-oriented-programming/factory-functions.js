
const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + elf.weapon
  }
}

elf.attack()

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
console.log(peter.attack())