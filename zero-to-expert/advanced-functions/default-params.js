"use strict";

// default params can really be any calculation / usage of any other function
// will even work to make computations on other arguments declared before the default param
function add(a = 40, b = 50 * a) {
  console.log(a, b)
  return a + b;
}

// we can also skip default arguments with undefined, if we need to go to other arguments
console.log(add(undefined, 100));
