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