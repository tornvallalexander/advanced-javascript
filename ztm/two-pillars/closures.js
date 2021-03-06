function a() {
  let grandpa = "grandpa"
  return b = () => {
    let father = "father"
    return c = () => {
      let son = "son"
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(a()()())
// function has access to all the variables outside the function with the closure
// closures are also called `lexical scoping`
// the javascript engine already knows which function has access to which variables,
// even before running that function
// these are added to the memory heap

const boo = (string) => (name1) => (name2) => `${string} ${name1} ${name2}`
console.log(boo("hello")("there")("!"))

// Exercise
function callMeMaybe() {
  // this callback function in setTimeout still has access to the variable that is later defined in the function
  // this is due to closure. The returned function should always have access to all the variables in the parent
  // function
  setTimeout(() => {
    console.log(callMe)
  }, 4000)
  const callMe = "Hi! I am now here!"  // note that this is nothing to do with hoisting --> it is a const, not a var
}

callMeMaybe()

// Closures are good because they are
// 1. Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("👍")
  return bigArray[index]
}

// calling this a lot of times will be very slow and inefficient
heavyDuty(692)

// solution (without polluting global scope)
function heavyDuty2() {
  const bigArray = new Array(7000).fill("👍")
  return (index) => bigArray[index]
}

const getItemFromArray = heavyDuty2()
getItemFromArray(692)

// 2. Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0
  const passTime = () => timeWithoutDestruction++
  const totalPeaceTime = () => timeWithoutDestruction
  const launch = () => {
    timeWithoutDestruction = -1
    return "BOOM!"
  }
  setInterval(passTime, 1000)
  return {
    totalPeaceTime,
  }
}

const ohno = makeNuclearButton()
ohno.totalPeaceTime()
// ohno.launch()  // due to encapsulation one does not have access to launch (it is encapsulated into the other function)

// Exercise
// only allow to be used once, no abuse
let view;
function once(callbackFn) {
  let callbackFnWasCalled = false
  return (arg) => {
    if (!callbackFnWasCalled) {
      callbackFn(arg)
    }
    callbackFnWasCalled = true
  }
}

function setView(image) {
  view = image
  console.log("view has been set!")
}

const initialize = once(setView)
// these calls will only run `setView` once
initialize("🌇")
initialize("🌇")
initialize("🌇")


const arr = [1,2,3,4]
for (let i = 0; i < arr.length; i++) {  // rename var to let
  setTimeout(() => {
    console.log("I am at index " + arr[i])
  }, 1000)
}

// another way to do it
for (var i = 0; i < arr.length; i++) {
  (function(closureI) {
    setTimeout(() => {
      console.log("I am at index " + arr[closureI])
    }, 1000)
  })(i)
}
