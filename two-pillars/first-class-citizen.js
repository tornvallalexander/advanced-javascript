// functions are first class citizens in JS

// functions can be assigned to variables
const func = function(){}

// pass functions as arguments
function a(fn) {
  fn()
}

a(function() {console.log("hi there")})

// return functions as values from other functions
function b() {
  // return function c() {console.log("bye")}
  // or with more elegance:
  return () => console.log("bye")
}

b()()