const arr = [1, 2, 3, 4, 5];

// ES6 of operator
for (const item of arr) {
  // gets the value
  // console.log(item);
}

for (const [i, el] of arr.entries()) {
  // gets the entire object
  // console.log(el, i)
}

// Object literals
const obj = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
  sun2: "Sunday",
}

// important difference: arr.entries() does not need arg while obj.entries() does
// Object.keys(obj) turns the objects keys into an array
for (const key of Object.keys(obj)) {
  // console.log(key)
}

// Object.values(obj) turns the objects values into an array
for (const val of Object.values(obj)) {
  // console.log(val)
}

// pretty much the same way as with arrays
for (const [key, value] of Object.entries(obj)) {
  // console.log(key, value)
}

// JS Sets
const meals = new Set([
  "Pizza",
  "Pasta",
  "Salad",
  "Pizza",
  "Pie",
  "Salad",
]);

console.log(meals);

// strings are also iterable
console.log(new Set("Alexander"))

// set can take anything iterable?
// like Object.values / Object.keys / Object.entries ?
console.log(new Set(Object.values(obj)))
console.log(new Set(Object.keys(obj)))
console.log(new Set(Object.entries(obj))) // this is the same as Object.entries(obj)

// Set methods
// add() - adds an element to the set
// delete() - removes an element from the set
// has() - checks if an element is in the set
// clear() - removes all elements from the set
// size() - returns the number of elements in the set

// sets have a different usage than arrays: they are not ordered and all values are unique
// you only really need to check if a value is in a set

// most often used to remove duplicates from an array
// remove duplicates from arr
const arr2 = [1, 2, 3, 4, 5, 5, 2, 4];
const set = new Set(arr2); // [1, 2, 3, 4, 5]

// function to remove duplicates from array and return a new array
const removeDuplicates = (arr) => {
  // older solution
  // return Array.from(new Set(arr));
  // more modern solution:
  return [...new Set(arr)]
}

// function to get unique characters from string
const getUniqueCharacters = (str) => {
  return [...new Set(str)]
}
const getUniqueCharactersLength = (str) => {
  return getUniqueCharacters(str).length
}
console.log(getUniqueCharacters("Alexander Alexander"));