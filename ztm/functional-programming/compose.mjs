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
    if (cache.has(args)) {
      return cache.get(args);
    }
    const result = fn(...args);
    cache.set(args, result);
    console.log(cache.get(args));
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

const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
const filteredPosts = filterPosts(await posts.json());
console.log(filteredPosts);