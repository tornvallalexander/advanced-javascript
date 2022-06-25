// 3 types of scope

// Global scope
const test = 'test';

// Function scope (also called local scope)
function test2() {
  const test3 = 'test3';
}

// Block scope
if (true) {
  const test4 = 'test4';
}

// can't reference variables from outside the scope
// this is due to lexical scoping
// var variables are still accessible from anywhere in the code,
// not limited to lexical scope or where they are called
// let and const variables are only accessible within their scope
// they are block scoped

// the scope chain

const myName = 'John';

function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var millennial = true  // var variables are function scoped
  }

  function second() {
    const job = "teacher";
    // scope has access to variables from all outer scopes
    // also applies to function arguments
    console.log(`${myName} is a ${age} year old ${job}`);
  }

  second();
}
first();

// scope chain vs call stack
const a = "John";

function first2() {
  const b = "Jane";

  function second() {
    const c = "Bob";
    console.log(a, b, c);
  }
  second();
}

function third() {
  const d = "Bob";
  // console.log(a, b, c, d);
  // ReferenceError: b, c is not defined
}

// summary:
// scoping asks: "where do variables live?"

// exercise

function calcAge(birthYear) {
  const age = 2030 - birthYear;

  function printAge() {
    // further variable lookup
    const output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  // IIFE - Immediately Invoked Function Expression
  (function printAgeInTenYears(age) {
    const ageInTenYears = age + 10;
    console.log(`In ten years, you will be ${ageInTenYears}`);
  }(age))

  return age;
}

const firstName = "John";
calcAge(2003)