// IIFE
// immediately invoked function expression
// common js design pattern
// place all code inside local scope

(function() {
  var a = "a"
})();

(function() {
  var a = "a"
}());

var hello = "hello"

var script1 = (function(arg) {
  function a() {
    return "a"
  }
  function log() {
    console.log(arg)
  }
  return {
    a,
    log
  }
})(hello);

// console.log(a)  // reference error
console.log(script1.a())
script1.log()
