
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

// access variable via closure outside of function scope, without HOF
let z;
const x = () => {
  let y = 0;
  // heavy computation
  y += 1;
  z = () => {
    console.log(y);
  }
}
x();
// if variables in question can not be found directly, JavaScript will look through
// the closure environment before looking through the global environment
// closures build on the idea that variables are bound to the environment in which they are created
z();


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
