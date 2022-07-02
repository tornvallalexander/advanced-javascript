const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const logMovement = (movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

for (const movement of movements) {
  logMovement(movement);
}

movements.forEach((value, index, array) => {
  console.log(`${index}: ${value}`);
  array.splice(-1) // modifies the original array, since it is passed as reference
  // console.log(array);
  // logMovement(value)
})

// forEach on maps and sets
// Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "British Pound"],
  ["JPY", "Japanese Yen"],
  ["CAD", "Canadian Dollar"],
]);

currencies.forEach((val, key) => {
  console.log(`${key}: ${val}`);
})

// Set
const currenciesUnique = new Set([
  "USD",
  "USD",
  "EUR",
  "EUR",
  "GBP",
  "JPY",
  "CAD",
]);
currenciesUnique.forEach((val, _) => {
  // sets don't have keys, so we use _ to ignore it
  console.log(`${val}: ${val}`);
})