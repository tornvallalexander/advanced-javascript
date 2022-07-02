
const secureBooking = () => {
  let passengers = 0;

  return () => {
    passengers++;
    console.log(`${passengers} passengers have booked`);
  }
}

const bookPassengers = secureBooking();

bookPassengers();
bookPassengers();
bookPassengers();

