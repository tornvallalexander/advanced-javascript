
const oneWord = function(str) {
  return str.replace(/ /g, "").toLowerCase()
}

const upperFirstWord = function(str) {
  return str.replace(str[0], str[0].toUpperCase())
}

// higher order function - specifically a callback function
// JS uses callback functions all the time
const transformer = function(str, fn) {
  console.log(`I was called by ${fn.name}`)
  return fn(str)
}

transformer("JavaScript is a fun language", oneWord)

// callback functions allow us to create abstractions
// abstraction is when we hide the details of a function because
// we don't really need to know about it