var x = "x"

function findName() {
  console.log(x)  // all functions have access to their parent scope (in this case, global lexical env)
  var b = "b"
  return printName()
}

function printName() {
  var c = "c"
  return "Heisenberg"
}

function sayMyName() {
  var a = "a"
  return findName()
}

sayMyName()

function sayMyName2() {
  var a = "a"
  return function findName2() {
    var b = "b"
    // console.log(c)
    return function printName2() {
      var c = "c"
      return "Heisenberg"
    }
  }
}

console.log(sayMyName2()()())
