
const oneWord = function(str) {
  return str.replace(/ /g, "").toLowerCase()
}

const upperFirstWord = function(str) {
  return str.replace(str[0], str[0].toUpperCase())
}

// higher order function
const transformer = function(str, fn) {
  return fn(str)
}

transformer("JavaScript is a fun language", oneWord)