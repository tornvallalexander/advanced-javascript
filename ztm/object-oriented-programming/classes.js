// ES6 classes

// class is actually just syntactic sugar in JavaScript, it still uses the new keyword under the hood
// can be created with Object.create() --> pure prototypal inheritance
class Character {
  // runs everytime we instantiate
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  // attack is shared by all instances of the class. The reason we don't put it in the constructor is to avoid it being
  // instantiated every time we create a new instance of the class. Way better memory-wise.
  attack() {
    return `attack with ${this.weapon}`
  }
}
// way cleaner than what we did before... one location for everything
// extending classes
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  greeting() {
    return `Hello, I am a ${this.color} Ogre!`
  }
}

class Elf extends Character {
  constructor(name, weapon, hair) {
    super(name, weapon)
    this.hair = hair
  }
  greeting() {
    return `Hello, I am a ${this.hair} Elf!`
  }
  _supposedToBePrivate() {
    return `the underscore is meant to signal that a class is private in JS --> before we had support for private in JS`
  }
  // we can now use private class methods in JavaScript with the `#` prefix
  static #private() {
    return `This is a private method`
  }
}

// peter is an instance --> whenever we call a class we create an instance
const peter = new Elf("Peter", "stones", "blonde")
console.log(peter.greeting())

const brian = new Ogre("Brian", "tree", "green")
console.log(brian.greeting())