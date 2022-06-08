
const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + elf.weapon
  }
}

elf.attack()

// factory functions
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with " + weapon
    }
  }
}

const peter = createElf("Peter", "stones")
console.log(peter.attack())