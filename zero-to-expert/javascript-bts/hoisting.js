

// functions
console.log(add(1, 2))
console.log(addExpr(1, 2))  // TDZ - temporal dead zone
console.log(addArrow(1, 2))  // since it is defined with var, it is hoisted, but will result in error since it is not defined yet

function add(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

// Example
if (!numProducts) deleteShoppingCart()  // all products are deleted due to hoisting (numProducts is undefined, which is falsy)

var numProducts = 10;  // don't use var to declare variables

function deleteShoppingCart() {
  console.log("All products are deleted!")
}

var x = 1;
let y = 2;
const z = 3;

// x = window.x --> true
// y = window.y --> false
// z = window.z --> false
