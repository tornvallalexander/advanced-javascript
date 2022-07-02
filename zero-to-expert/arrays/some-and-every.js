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
