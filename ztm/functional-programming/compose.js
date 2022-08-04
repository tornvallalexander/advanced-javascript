const compose = (...fns) => (val) => fns.reduce((acc, curr) => curr(acc), val)
const pipe = (...fns) => (val) => fns.reverse().reduce((acc, curr) => curr(acc), val) // same as compose but in reverse,
// right to left

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

const filterPosts = compose(
  includes("voluptatem", "body"),
  max(4, "title"),
  limit(10),
);

const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
const filteredPosts = filterPosts(await posts.json());
console.log(filteredPosts);