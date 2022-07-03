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
    },
    (err) => {
      console.log(err);
    }
  )
}

getCountryData("sweden");