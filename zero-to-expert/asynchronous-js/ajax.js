"use strict"

// old way of making ajax requests
const country = "sweden"
/*
const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/rest/v2/${country}`);
request.send();
request.addEventListener("load", function () {
  console.log(this.responseText);
})*/

// new way of doing it

function getCountryData(country) {
  const response = fetch(`https://restcountries.com/v2/name/${country}`);
  response.then(
    (res) => {
      console.log(res);
      if (res.ok) {
        throw new Error("Something went wrong");
      }
    },
    (err) => {
      console.log(err.message);
    }
  ).catch((err) => {
    console.log(err.message);
  });
}

getCountryData("sweden");

const setter = (fn) => {
  return (data) => fn(data);
}

async function getCountryDataAsync(country) {
  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return await response.json();
}

const runAsync = async (fn, run) => {
  const data = await fn();
  run(data);
}

const test2 = () => {
  let data;
  runAsync(() => getCountryDataAsync("sweden"), (res) => {
    data = res;
  });

  console.log(data);
}
test2();

const getCountryData2 = async (country) => {
  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  if (!response.ok) {
    throw new Error("Couldn't find country");
  }
  const data = await response.json();
  console.log(data)
  return data[0];
}

const test3 = () => {
  console.log(getCountryData2("sweden"));
}

test3();

// the way we consume promises with the async syntax is by using an IIFE:
(async () => {
  const data = await getCountryDataAsync("sweden");
  // execute logic here
  console.log(data);
})()