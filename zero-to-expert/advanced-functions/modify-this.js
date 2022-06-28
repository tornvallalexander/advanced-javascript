
const passenger = (name, age, country) => {
  return {
    name,
    age,
    country,
  };
}

const lufthansa = {
  name: 'Lufthansa',
  country: 'Germany',
  city: 'Berlin',
  bookings: [],
  book(flightNum, person) {
    console.log(`${person.name} booked flight ${flightNum} with ${this.name}`);
    this.bookings.push({
      flightNum,
      person,
    });
  }
}

const passenger1 = passenger('John', 30, 'Germany');
const passenger2 = passenger('Jane', 25, 'USA');

lufthansa.book(123, passenger1);
lufthansa.book(456, passenger2);

const eurowings = {
  name: 'Eurowings',
  country: 'Germany',
  city: 'Berlin',
  bookings: [],
}

// directly calling the function with correct this
lufthansa.book.call(eurowings, 123, passenger2);
lufthansa.book.apply(eurowings, [456, passenger1]); // same as call but apply takes an array as an argument
// apply is not used very much anymore simply because with have the spread operator
lufthansa.book.call(eurowings, ...[123, passenger2]); // same as apply but spread operator

// setting a function
const eurowingsBook = lufthansa.book.bind(eurowings);
eurowingsBook(123, passenger1);


// partial application - creating a function that has some of the arguments already set
const eurowingsBookFlight123 = lufthansa.book.bind(eurowings, 123);
eurowingsBookFlight123(passenger1);
// this can also be used not necessarily even with modifying this, but in the sole purpose
// of creating a function that has some of the arguments already set
// order of args is important
// different than creating a function with default arguments since this returns a new
// reusable function