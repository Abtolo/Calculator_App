"use strict";

let calculation = 0;

let expression = "";

let displaySum = function (number) {
  document.querySelector(".responseBar").textContent += number;
  expression += number;
};

document.querySelector(".deleteBar").addEventListener("click", function () {
  document.querySelector(".responseBar").textContent = "";
  expression = "";
});

document.querySelector(".buttons").addEventListener("click", function () {
  console.log("It works OK!!!");
});

document.querySelector("#btn9").addEventListener("click", function () {
  displaySum("9");
});

document.querySelector("#btn8").addEventListener("click", function () {
  displaySum("8");
});

document.querySelector("#btn7").addEventListener("click", function () {
  displaySum("7");
});

document.querySelector("#btn6").addEventListener("click", function () {
  displaySum("6");
});

document.querySelector("#btn5").addEventListener("click", function () {
  displaySum("5");
});

document.querySelector("#btn4").addEventListener("click", function () {
  displaySum("4");
});

document.querySelector("#btn3").addEventListener("click", function () {
  displaySum("3");
});

document.querySelector("#btn2").addEventListener("click", function () {
  displaySum("2");
});

document.querySelector("#btn1").addEventListener("click", function () {
  displaySum("1");
});

document.querySelector("#btn0").addEventListener("click", function () {
  displaySum("0");
});

document.querySelector("#btnPlus").addEventListener("click", function () {
  displaySum("+");
});

document.querySelector("#btnMult").addEventListener("click", function () {
  displaySum("*");
});

document.querySelector("#btnDiv").addEventListener("click", function () {
  displaySum("/");
});

document.querySelector("#btnMinus").addEventListener("click", function () {
  displaySum("-");
});

document.querySelector("#btnPoint").addEventListener("click", function () {
  displaySum(".");
});

document.querySelector("#btnEqual").addEventListener("click", function () {
  console.log("equal works");

  try {
    parseInt(expression);
    let result = eval(expression); // Use eval only for this calculation step
    document.querySelector(".responseBar").textContent = result;
    expression = result.toString(); // Set expression to result for further calculations
  } catch (error) {
    document.querySelector(".responseBar").textContent = "Error";
    expression = "";
  }
});
