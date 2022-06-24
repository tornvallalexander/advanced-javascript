
function two() {
  return 2;
}

const four = new Function("num", "return num")

const obj = {
  two() {
    return 2;
  }
}

two()
two.call()
two.test = "hello"  // functions are objects
console.log(four(4))
obj.two()
/**
 * functions are special object that automatically gets populated with the following args:
 * () --> default calling the function
 * apply()
 * bind()
 * call()
 */