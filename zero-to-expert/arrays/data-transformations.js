// map, filter and reduce

// building our own map function
const map = (arr, fn) => {
  const result = [];
  for (const [_, value] of arr.entries()) {
    result.push(fn(value));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
console.log(map(arr, (x) => {
  return x * 2
}));

// modifying array map function
Array.__proto__.map = function(fn) {
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
    .reduce((acc, curr) => acc += curr + " ", "")
}
console.log(addSpaceBetweenChar(str));
