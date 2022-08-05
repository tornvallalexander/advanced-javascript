// term: arity
// arity is the number of arguments that a function takes, a common term in functional programming
// the few number of parameters, the easier it is to use that program
let search = "voluptatem"

const compose = (...fns) => (val) => fns.reduce((acc, curr) => curr(acc), val)
const pipe = (...fns) => (val) => fns.reverse().reduce((acc, curr) => curr(acc), val) // same as compose but in reverse,
// right to left --> seems like there is some contradiction, I now believe it is the other way around.

// adding memoization
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    console.log(cache);
    if (cache.has(args)) {
      console.log("cache hit");
      return cache.get(args);
    }
    console.log("cache miss");
    const result = fn(...args);
    cache.set(args, result);
    return result;
  }
}

const memoizedCompose = memoize(compose);

const limit = (n) => (arr) => arr?.slice?.(0, n);

const includes = (chars, element) => {
  return (arr) => {
    return arr?.filter(item => item?.[element]?.includes?.(chars));
  }
}

const max = (maxNum, element) => {
  return (arr) => {
    return arr?.filter(item => {
      return item?.[element]?.split?.(" ")?.length <= maxNum;
    })
  }
}

const filterPosts = memoizedCompose(
  includes(search, "body"),
  max(4, "title"),
  limit(10),
);

const filterPosts2 = memoizedCompose(
  includes(search, "body"),
  max(5, "title"),
  limit(10),
);

const filterPosts3 = memoizedCompose(
  includes(search, "body"),
  max(4, "title"),
  limit(10),
);

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await res.json();

console.log(filterPosts(posts));
console.log(filterPosts2(posts));
console.log(filterPosts3(posts));
