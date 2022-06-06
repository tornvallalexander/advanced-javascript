let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "copy"
  }
}

let clone = Object.assign({}, obj)  // one way to clone
let clone2 = {...obj}  // clone with spread operator
// problem with above is that it will not create a clone of deeply nested objects
let deepClone = JSON.parse(JSON.stringify(obj))  // this will create a deep clone no matter how nested

obj.c.deep = "testing"
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(deepClone)

// keep in mind, obj are only a reference in memory
let user1 = {name: "test"}
let user2 = {name: "test"}
console.log(user1 === user2)  // therefore this returns false
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))  // works for simple values
// https://stackoverflow.com/questions/1068834/object-comparison-in-javascript