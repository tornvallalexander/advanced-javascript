
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

// exercise
(() => {
  if (typeof window !== "undefined") {
    const header = document.querySelector("h1");
    header.style.color = "red";

    document.addEventListener("click", () => {
      // we still have access to the header variable via the closure
      if (header.style.color === "red") {
        header.style.color = "blue";
      } else {
        header.style.color = "red";
      }
    });
  }
})()
