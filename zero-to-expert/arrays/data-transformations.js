// map, filter and reduce

// building our own map function
const map = (arr, fn) => {
  const result = [];
  for (const [_, value] of arr.entries()) {
    result.push(fn(value));
  }
  return result;
}

// map with reduce
const mapWithReduce = (arr, fn) => {
  return arr.reduce((acc, curr) => {
    acc.push(fn(curr)); // note: we can't return directly since return value of push is the length of the array
    return acc
  }, []);
}

const arr = [1, 2, 3, 4, 5];
console.log(map(arr, (x) => {
  return x * 2;
}));

console.log(mapWithReduce(arr, (x) => {
  return x * 2;
}));

// modifying array map function
Array.prototype.map = function(fn) {
  const result = [];
  for (const [index, value] of this.entries()) {
    result.push(fn(value, index));
  }
  return result;
}
console.log(arr.map((x) => {
  return x * 2
}));

// using map vs forEach
// forEach is used to iterate over an array with side effects
// map is used to iterate over an array and return a new array

// reduce
// reduce() is used to reduce an array to a single value
// --> boil down an array into a single value of any type:
// number, string, boolean, array, object

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr
}, 100); // 0 is the initial value, 0 by default
console.log(balance);

// reduce simply avoid having to create extra variables to store the accumulator:
let balance2 = 100;
for (const movement of movements) {
  console.log(`Iteration ${movement}: ${balance2}`);
  balance2 += movement;
}

// reduce on strings
const str = "Alexander";
const addSpaceBetweenChar = (s) => {
  return s
    .split("")
    .reduce((acc, curr) => acc + curr + " ", "")
}
console.log(addSpaceBetweenChar(str));

const sentence = "Alexander is a great programmer";
const capitalizeWords = (s) => {
/*
  return s
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    }).join(" ")
*/
  // with reduce, we are able to skip the join call
  return s
    .split(" ")
    .reduce((acc, curr) => {
      return acc + curr[0].toUpperCase() + curr.slice(1) + " "
    }, "")
}
console.log(capitalizeWords(sentence));

// IMPORTANT: we can have different purposes for the accumulator variable in reduce
// this is the question we should always ask when using reduce

// what should the accumulator variable be used for?
// - the max value after comparing the current value
const max = (arr) => {
  return arr
    .reduce((acc, curr) => {
      return Math.max(acc, curr);
    }, arr[0])
  // best practice to always go with the first value as the initial value
  // not always 0 since all values could be negative
}
console.log(max([1, 2, 3, 4, 5, 3, 4]));

// WHENEVER WE SEE THIS PATTERN:
const getMax = (arr) => {
  let max;
  arr.map((value) => {
    if (!max || max < value) {
      max = value;
    }
  })
  return max;
}
// WE SHOULD ALWAYS USE REDUCE - it simplifies the code and keeps the code way cleaner

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
// what we could essentially do is to make this part of the array object:
Array.prototype.pipe = function(...fns) {
  return fns.reduce((acc, f) => f(acc), this);
}
// thought: when starting new projects/building something from the ground up,
// we can probably define some of these global definitions to make life easier?

// optimizing functional code with HOFs
const filterGreaterThan = (n) => {
  return (arr) => arr.filter((value) => value > n)
}

const convertCurrencies = (rate) => {
  return (arr) => arr.map((value) => value * rate)
}

const accumulate = (initial) => {
  return (arr) => arr.reduce((acc, curr) => acc + curr, initial)
}

// making a general HOF? --> getting pretty complicated but might be able to get around
// with using this keyword somehow?
const pipeFn = (fn) => (arr) => arr[fn]();

const cleaned = pipe(
  filterGreaterThan(0),
  convertCurrencies(1.1),
  accumulate(0)
)(movements)
console.log(cleaned);

const cleaned2 = movements.pipe(
  filterGreaterThan(0),
  convertCurrencies(1.1),
  accumulate(0)
)
console.log(cleaned2);
