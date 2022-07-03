"use strict"

// old way of making ajax requests
const country = "sweden"
const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/rest/v2/${country}`);
request.send();
request.addEventListener("load", function () {
  console.log(this.responseText);
})