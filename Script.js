"use strict";

let finalAnswer = 0;
let calculation = 0;
let somme = ;

let displaySum = function (number) {
  if (number === "+") {
    calculation = calculation + "+";
  }
  document.querySelector(".responseBar").textContent += number;
  calculation += number;
};

document.querySelector(".deleteBar").addEventListener("click", function () {
  document.querySelector(".responseBar").textContent = 0;
  calculation = 0;
});

document.querySelector(".buttons").addEventListener("click", function () {
  document.querySelector(".responseBar").textContent;
  console.log("It works");
});

document.querySelector("#btn9").addEventListener("click", function () {
  displaySum(9);
});

document.querySelector("#btn8").addEventListener("click", function () {
  displaySum(8);
});

document.querySelector("#btn7").addEventListener("click", function () {
  displaySum(7);
});

document.querySelector("#btn6").addEventListener("click", function () {
  displaySum(6);
});

document.querySelector("#btn5").addEventListener("click", function () {
  displaySum(5);
});

document.querySelector("#btn4").addEventListener("click", function () {
  displaySum(4);
});

document.querySelector("#btn3").addEventListener("click", function () {
  displaySum(3);
});

document.querySelector("#btn2").addEventListener("click", function () {
  displaySum(2);
});

document.querySelector("#btn1").addEventListener("click", function () {
  displaySum(1);
});

document.querySelector("#btn0").addEventListener("click", function () {
  displaySum(0);
});

document.querySelector("#btnPlus").addEventListener("click", function () {
  displaySum("+");
});

document.querySelector("#btnMult").addEventListener("click", function () {
  displaySum("x");
});

document.querySelector("#btnDiv").addEventListener("click", function () {
  displaySum(":");
});

document.querySelector("#btnMinus").addEventListener("click", function () {
  displaySum("-");
});

document.querySelector("#btnPoint").addEventListener("click", function () {
  displaySum(".");
});

document.querySelector("#btnEqual").addEventListener("click", function () {
  console.log("equal works");
  document.querySelector(".responseBar").textContent = calculation;
});
