// JS Maps

const rest = new Map();
rest.set("pizza", "Pizza Hut");

// calling set method returns the map object
rest
  .set(1, "Papa John's")
  .set(2, "Pizza Hut")
  .set(3, "Dominos")
  .set("open", 9)
  .set("close", 22);

const opened = new Map();
opened
  .set(true, "Open")
  .set(false, "Closed");

const currentTime = new Date().getHours();
console.log(currentTime);
console.log(opened.get(rest.get("open") <= currentTime && currentTime < rest.get("close")));

if (typeof document !== "undefined") {
  // this is also how the DOM works, and can work
  const DOM = new Map();
  DOM.set("pizza", document?.getElementById?.("pizza"));
  DOM.get("pizza").innerHTML = "Pizza Hut";

  // also works the other way around
  DOM.set(document?.getElementById?.("pizza"), "pizza");
}


// working with maps
const quiz = new Map([
  ["question", "What is the best programming language"],
  ["answer", [
    [1, "JavaScript"],
    [2, "Python"],
    [3, "Java"],
    ["correct", 1],
  ]]
]);

// we can easily convert an object to a map
// function to convert an object to a map
const objectToMap = (obj) => {
  return new Map(Object.entries(obj))
}

// exercise

const gameEvents = new Map([
  [17, "Goal"],
  [21, "Assist"],
  [34, "Substitution"],
  [49, "Goal"],
  [64, "Yellow Card"],
  [78, "Red Card"],
  [92, "Goal"],
])

const events = [...new Set([...gameEvents])]; // [17, 21, 34, 49, 64, 78, 92] - unique values and turned into an array

// remove yellow card from gameEvents
gameEvents.delete(64);

console.log(`An event happened roughly every ${(90 / events.length).toFixed(0)} minutes`);

const halfs = new Map([
  [true, "First Half"],
  [false, "Second Half"],
]);

for (const event of events) {
  console.log(`${event} - ${halfs.get(event[0] <= 45)}`);
}