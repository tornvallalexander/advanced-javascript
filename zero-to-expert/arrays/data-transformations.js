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