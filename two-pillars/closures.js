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