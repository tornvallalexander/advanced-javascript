// term: arity
// arity is the number of arguments that a function takes, a common term in functional programming
// the few number of parameters, the easier it is to use that program
let search = "voluptatem"

const compose = (...fns) => (val) => fns.reduce((acc, curr) => curr(acc), val)

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    console.log(cache);
    if (args in cache) {
      console.log("cache hit");
      return cache[args];
    }
    console.log("cache miss");
    const result = fn(...args);
    cache[args] = result;
    return result;
  }
}

const limit = (n) => (arr) => arr?.slice?.(0, n);
const memoizedLimit = memoize(limit);

const includes = (chars, element) => {
  return (arr) => {
    return arr?.filter(item => item?.[element]?.includes?.(chars));
  }
}
const memoizedIncludes = memoize(includes);

const max = (maxNum, element) => {
  return (arr) => {
    return arr?.filter(item => {
      return item?.[element]?.split?.(" ")?.length <= maxNum;
    })
  }
}
const memoizedMax = memoize(max);

const filterPosts = compose(
  memoizedIncludes(search, "body"),
  memoizedMax(4, "title"),
  memoizedLimit(10),
);

const filterPosts2 = compose(
  memoizedIncludes(search, "body"),
  memoizedMax(5, "title"),
  memoizedLimit(10),
);

const filterPosts3 = compose(
  memoizedIncludes(search, "body"),
  memoizedMax(4, "title"),
  memoizedLimit(10),
);

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await res.json();

console.log(filterPosts(posts));
console.log(filterPosts2(posts));
console.log(filterPosts3(posts));

// the above is not working due to the fact that the memoization functions depend on each other, since we are using compose.
const isEqual = () => {
  let equal = true
  for (const [key, val] of Object.entries(filterPosts)) {
    if (val.id !== filterPosts2[key].id || val.id !== filterPosts3[key].id) {
      equal = false
    }
  }
  return equal
}

console.log(isEqual())
