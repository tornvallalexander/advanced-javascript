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