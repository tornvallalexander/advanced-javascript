// this is the object that the function is a property of

/**
 * 1: gives methods access to their object
 * 2: execute same code for multiple objects
 * the `this` reference depends on **where** it is called. --> it is dynamically scoped
 * arrow functions will bind the `this` keyword (it is lexically bound)
 */

const obj = {
  name: "Billy",
  sing() {
    return `lalala ${this.name}`  // kind of equivalent to run `lalala ${obj.name}`
  },
  singAgain() {
    return this.sing() + "!"
  }
}

function importantPerson() {
  console.log(this.name)
}

const name = "Sunny"
// will reference to the correct one due to using this keyword --> references the parent obj
const obj1 = {
  name: "Cassy",
  importantPerson,
}
const obj2= {
  name: "Jacob",
  importantPerson,
}

console.log(obj.sing())
console.log(obj.singAgain())

obj1.importantPerson()
obj2.importantPerson()
