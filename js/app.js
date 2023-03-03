"use strict";
console.log("proof of life, so that know our js is connected up.");

let userName = prompt("What is your name?");
console.log("user name: ", userName);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);

function getCarType() {
    let userCar = prompt("Whats your favorite car manufacturer").toLowerCase();
    console.log("🚀 ~ file: app.js:9 ~ userCar:", userCar);
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
    return response;
}
getCarType();


let imageElement = document.getElementById("imageSection");
console.log(imageElement);

let userInput = prompt("How many images would you like to see?");
console.log("🚀 ~ file: app.js:40 ~ userInput:", typeof userInput);

let userInputParsed = parseInt(userInput);
console.log("🚀 ~ file: app.js:43 ~ userInputParsed:", userInputParsed);