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
