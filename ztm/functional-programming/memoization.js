function addTo80(n) {
  return n + 80;
}

/**
 * Memoization is essentially just keeping calculated function values in a cache, so that
 * we can easily return next time if the same input is given.
 * @param fn
 * @returns {(function(*): (*))|*}
 */
function memoize(fn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log("cached");
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

console.log(addTo80(10));
console.log(addTo80(10));
console.log(addTo80(10));

const memoizedAddTo80 = memoize(addTo80);
console.log(memoizedAddTo80(10));
console.log(memoizedAddTo80(10));
console.log(memoizedAddTo80(10));