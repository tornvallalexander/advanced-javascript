// function expression
var canada = () => {
  console.log("cold")
}

// Function declaration
function india() {
  console.log(arguments)
  console.log("warm")
}

// function invocation/calling/execution
canada()
india()

function marry(person1, person2) {
  console.log(Array.from(arguments))
  console.log(arguments)
}

function marryPeople(...args) {
  console.log(args)
}

marry("sldfj", "fskj")
marryPeople("test", "dkdjs", "testing")
