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

/**
 * func
 * currentMaxNum = 0
 * for loop -->
 * if currentNum > currentMaxNum
 * ---> currentMaxNum = currentNum
 * return currentMaxNUm
 */

const array = [1,2,3]
// unoptimized solution
function getMaxNumber(arr) {
  let currentMaxNum = 0
  arr.forEach(currentNum => {
    if (currentNum > currentMaxNum) {
      currentMaxNum = currentNum
    }
  })

  return currentMaxNum
}

function _getMaxNumber(arr) {
  console.log(Math.max(...arr))
  return Math.max.apply(null, arr)
}

console.log(getMaxNumber(array))
console.log(_getMaxNumber(array))

