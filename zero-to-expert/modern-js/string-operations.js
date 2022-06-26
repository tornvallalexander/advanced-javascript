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