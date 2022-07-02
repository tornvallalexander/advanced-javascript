// some basic config
Array.prototype.pipe = function(...fns) {
  return fns.reduce((acc, f) => f(acc), this);
}

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some - would almost have been better if they named it `any`
// some method is pretty much the same as includes, but instead of testing for
// equality, it tests for a condition
const threshold = 1000;
const hasMovementsAboveThreshold = (arr) => {
  return arr.some((value) => value > threshold);
}

console.log(hasMovementsAboveThreshold(movements));

// let's make a function that tests for multiple includes values
const requiredMovements = [-400, 3000, 200];

const hasRequiredMovements = (arr) => {
  return arr.some((value) => requiredMovements.includes(value));
}

console.log(hasRequiredMovements(movements));

// flat
const nestedArr = [[1, 2, 3], [4, 5, 6], [[7, 8], 9]];
// with ES6, we can use the flat method to flatten the array
const flattened = nestedArr.flat();
console.log(flattened);
// by default this goes one level deep, but we can specify a depth
const flattened2 = nestedArr.flat(2);
console.log(flattened2);

// sort - modifies the original array
// console.log(movements.sort()); // does not work for numbers, so it converts them to strings and sorts off of that

// a and b are *any* values in the array
// return < 0: a comes before b --> keep order
// return > 0: b comes before a --> reverse/switch order
movements.sort((a, b) => {
  // ascending order, small to big
  return a - b
  /* or, writing it more explicitly:
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
  */
})

console.log(movements);