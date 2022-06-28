
const greet = function(greeting) {
  return function(name) {
    return `${greeting} ${name}`;
  };
};

const greetArrow = (greeting) => (name) => `${greeting} ${name}`;

const greeterHey = greet("Hey");
console.log(greeterHey("John"));

// we can also do it all in one line
console.log(greet("Hey")("John"));
console.log(greetArrow("Hey")("John"));