const arr = ["a", "b", "c", "d", "e"];

// Slice
arr.slice(2); // ["c", "d", "e"]
arr.slice(-2); // ["d", "e"]
arr.slice(1, -2); // ["b", "c"]
arr.slice() // ["a", "b", "c", "d", "e"] - returns a shallow copy of the array

// Splice - splice works the same way as slice except it mutates the original array
// arr.splice(2); // ["a", "b"]
arr.splice(-1); // ["a"] - removes the last element
arr.splice(1, 2) // second argument is the number of elements to remove

// Reverse - mutates the original array
arr.reverse(); // ["e", "d", "c", "b", "a"]

// Concat
arr.concat(["f", "g"]); // ["a", "b", "c", "d", "e", "f", "g"]
// we don't use concat much anymore, instead we use spread operator
// const arr2 = [...arr, "f", "g"];

// Join
arr.join("-"); // "a-b-c-d-e"