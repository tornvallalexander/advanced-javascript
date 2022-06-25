let age = 19;
let oldAge = age;
age = 20;

console.log(age);
console.log(oldAge);

const person = {
  name: "John",
  age: 30,
}

const newPerson = person; // no problem declaring this as const since it is a reference to the object
// only problem arises when we change constant primitive types
newPerson.age = 40;

console.log(person.age); // 40
console.log(newPerson.age); // 40

// primitives are copied by value, references are copied by reference
// primitives are stored in the call stack while references are stored in the heap
// all types are stored in the call stack, but primitive types store the explicit values,
// while reference types store the reference to the object on the heap


