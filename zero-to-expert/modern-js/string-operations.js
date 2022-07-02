// get last part of twitter string name
const twitterName = "Lonis Hamaili (_Lonis_)"
const username = twitterName.slice(twitterName.lastIndexOf(" ") + 1)
const username2 = twitterName.split(" ").pop()

// how to use regex on string
// remove values from string with regex
const regex = /\(|\)/g
console.log(username.replace(regex, ""))

// we should not have methods on primitive types
// but what JavaScript does is that it creates a wrapper object
// around the primitive, and then it calls the method on that wrapper object
// this process is called boxing

// we can see this in action by doing the following:
console.log(new String("Hello there")) // here we also get all the methods on the String object

// function to capitalize string
function capitalize(str) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1)
}

// function to
// 1. lowercase string
// 2. remove all whitespaces
// 3. remove all non-alphanumeric characters

function cleanString(str) {
  return str.toLowerCase().replace(/\s/g, "").replace(/\W/g, "")
}

const test = "  Hello@alexAnder.io  \n."
console.log(cleanString(test))

// replace
const announcement = "All passengers come to boarding door 23. Boarding door 23!"
console.log(announcement.replaceAll("door", "gate"))

// we can achieve same thing with regex
// we put them in slashes and use `g` for global, aka all occurrences
console.log(announcement.replace(/door/g, "gate"))

// includes other string operations like startsWith, endsWith, indexOf, lastIndexOf, etc.

// split
const [firstName, lastName] = "Alexander Törnvall".split(" ")
console.log(firstName, lastName)

// join
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")

// function to capitalize all words in a string
const capitalizeAllWords = (str) => {
  return str
    .split(" ")
    .map(word => word
      .replace(word[0], word[0]
        .toUpperCase()))
    .join(" ")
}

// padding
// padStart() and padEnd() are used to add padding to the start and end of a string

const message = "Go to gate 23!"
// making it dynamic to length which technically turns it static ;)
// strings with equal amount of spaces would simply be using the same number on padEnd or padStart
// like this:
// hello   T
// testing T
// t       T
console.log(message.padStart(message.length + 5, ".").padEnd(message.length + 5, "."))

// real world use case: masking a credit card number
const creditCardNumber = "4111111111111111"

// function to mask credit card number
const maskCreditCardNumber = (str) => {
  const last = str.slice(-4)
   return last.padStart(str.length - 4, "*")
  // return str.replace(/.(?=.{4})/g, "*")
}

console.log(maskCreditCardNumber(creditCardNumber))

// repeat
// repeat() is used to repeat a string a number of times
const message2 = "Hello"
console.log(message2.repeat(3))


// exercise
function convertToCamelCase(str) {
  return str
    .split(" ")
    .map(word => word
      .toLowerCase()
      .split("_")
      .map((variableName, i) => i > 0 ? variableName
        .replace(variableName[0], variableName[0].toUpperCase()) : variableName)
      .join(""))
    .join(" ")
}

// we can make above function more readable by using a custom pipe function
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
console.log(convertToCamelCase("underscore_case first_name Some_Variable calculate_AGE delayed_departure"))