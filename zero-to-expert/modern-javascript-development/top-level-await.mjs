/**
 * Although top-level await is nice, it blocks the rest of the code from executing.
 * @type {Response}
 */
const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
const data = await res.json();
console.log(data);

// this is a lot better since it doesn't block the rest of the code from executing.
(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
})();

// function to get the last post from json placeholder api /posts
const getLastPost = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data.at(-1);
}

const lastPost = await getLastPost(); // much cleaner
// instead of having to do
getLastPost().then((data) => {
  console.log(data);
});
