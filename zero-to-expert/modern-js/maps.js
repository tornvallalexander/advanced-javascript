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

// this is also how the DOM works, and can work
const DOM = new Map();
DOM.set("pizza", document.getElementById("pizza"));
DOM.get("pizza").innerHTML = "Pizza Hut";

// also works the other way around
DOM.set(document.getElementById("pizza"), "pizza");