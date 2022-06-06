function letAdamLogin() {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }
  return "Access Granted to Adam"
}

function letEvaLogin() {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }
  return "Access Granted to Eva"
}
// code above is not very clean/DRY
console.log(letAdamLogin())
console.log(letEvaLogin())

// way to improve this first is to pass arguments
const giveAccessTo = (username) => `Access granted to ${username}`

function letUserLogin(user) {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }
  return giveAccessTo(user)
}

// problem we face: logging in users with higher "privileges", such as admin, manager and so on
// we need to copy and repeat the code
// lets say it also has more security things to go through, like 2FA
function letAdminLogin(admin) {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }
  return giveAccessTo(admin)
}

// solution:
function authenticate(verify) {
  let arr = []
  for (let i = 0; i < verify; i++) {
    arr.push(i)
  }
  return giveAccessTo(person.name)
}

function sing(person) {
  return `la la la my name is ${person.name}`
}

// Higher order functions either returns or runs a function accepted as an argument
// we now tell this function what data to use (args) but also what to do (the function)
// ability to tell function what to do during invocation
function letPerson(person, fn) {
  if (person.level === "admin") {
    return fn(person)
  } else if (person.level === "user") {
    return fn(person)
  }
}

console.log(letPerson({level: "user", name: "Giorgio"}, sing))
console.log(letPerson({level: "admin", name: "Alex"}, sing))
