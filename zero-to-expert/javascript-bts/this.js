
// this keyword is a special keyword that is created for every execution context
// it points to the object that is currently being executed
// depends on how the function is called

// method: this = <Object that is calling the method>
// simple function call: this = (window) undefined
// arrow function: this = <this of the surrounding function (lexical this), gets picked up from the outer lexical scope>
// event listener: this = <DOM element that the handler is attached to>

// what `this` keyword is not: does not point to the function itself, and also not its variable environment