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
