// working with promises
const getCountryData = new Promise((resolve, reject) => {

});

const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("You won!");
    } else {
      reject(new Error("You lost!"));
    }
  }, 2000)
})

lotteryPromise.then(console.log).catch(err => console.log(err.message));

// promisifying a function
// wrap old callback-based code in a promise
const getCountryData2 = (country) => {
  return new Promise((resolve, reject) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then(res => res.json())
      .then(data => resolve(data[0]))
      .catch(err => reject(err));
  });
}

// promisifying the setTimeout function
const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

wait(3000).then(() => console.log("Done!"));
getCountryData2("sweden").then(data => console.log(data));

// resolving promises immediately:
Promise.resolve("Hello there").then(s => console.log(s));