// function currying
function multiply(a, b) {
  return a * b
}

const multiplyByTwo = multiply.bind(null, 2)
const multiplyByTen = multiply.bind(null, 10)
console.log(multiplyByTwo(4))
console.log(multiplyByTen(4))
