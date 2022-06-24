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
    var millennial = true
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