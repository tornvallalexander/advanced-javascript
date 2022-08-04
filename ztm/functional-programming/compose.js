const compose = (...fns) => (val) => fns.reduce((acc, curr) => curr(acc), val)

const limit = (n) => (arr) => arr?.slice?.(0, n);
const includes = (w, el) => (arr) => arr?.filter(item => item?.[el]?.includes?.(w));
const max = (n, el) => (arr) => arr?.filter(item => item?.[el]?.split?.(" ")?.length <= n);

const filterPosts = compose(
  includes("voluptatem", "body"),
  max(4, "title"),
  limit(10),
);

const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
const filteredPosts = filterPosts(await posts.json());
console.log(filteredPosts);