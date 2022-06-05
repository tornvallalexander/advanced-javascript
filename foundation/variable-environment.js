function two() {
  var isValid  // undefined
}

function one() {
  var isValid = true  // local env
  two()  // new execution context
}

var isValid = false
one()

/*
* two() --> undefined
* one() --> true
* global() --> false
*/