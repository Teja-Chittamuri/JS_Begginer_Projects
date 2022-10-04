"use strict";
// Accessing the variables

const screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
let screenValue = "";
for (let value of buttons) {
  // value.addEventListener("click", (e) => {
  value.onclick = (e) => {
    let buttonText = e.target.innerText;
    if (buttonText === "+") {
      buttonText = "+";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "-") {
      buttonText = "-";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "*") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "/") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "%") {
      buttonText = "%";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "=") {
      screen.value = eval(screenValue);
    } else if (buttonText === "C") {
      screenValue = "";
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  };
}
