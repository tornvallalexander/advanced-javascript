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
