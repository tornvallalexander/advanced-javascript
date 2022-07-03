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

const test = () => {
  const setData = setter(console.log);
  const something = setData(getCountryDataAsync("sweden"));
}

test();