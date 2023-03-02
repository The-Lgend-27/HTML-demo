"use strict";
console.log("proof of life, so that know our js is connected up.");

let userName = prompt("What is your name?");

let confirmMessage = confirm("Do you want to continue?");
//chaining methods/functions  
let userCar = prompt("Whats your favorite car manufacturer").toLowerCase();
console.log("🚀 ~ file: app.js:9 ~ userCar:", userCar);

//JEEP

                    //JEEP making it lowercase to compare the right value in our if / else conditional.
// let lowerCaseCar = userCar.toLowerCase();

// console.log('lower case? ',lowerCaseCar);


//declare variable so that it has a space in memory to store the response.

let response;

if (userCar === "porsche") {
  response = "good taste";
} else if (userCar === "jeep") {
  response = "cool I like jeeps.";
} else if (userCar === "tesla") {
  response = "electric cars are futuristic";
} else {
  response = "I love bikes!";
}

console.log("response", response);

// console.log("greeting", greeting);

// return greeting;

// document.write("Hello " + userName + " " + greeting);
