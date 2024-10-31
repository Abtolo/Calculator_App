"use strict";

let finalAnswer = 0;
let calculation = 0;
let somme = 0;

let displaySum = function (number) {
  document.querySelector(".responseBar").textContent += number;
  calculation += number;
};

document.querySelector(".deleteBar").addEventListener("click", function () {
  document.querySelector(".responseBar").textContent = "";
  calculation = 0;
});

document.querySelector(".buttons").addEventListener("click", function () {
  console.log("It works OK!!!");
});

const allNumbers = Array[(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)];

for (let index = 0; index < 10; index++) {
  allNumbers.array.forEach(displaySum(index));
}
allNumbers.array.forEach(displaySum());

/*
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
});*/

let textContent = document.querySelector(".responseBar").textContent;

document.querySelector("#btnEqual").addEventListener("click", function () {
  console.log("equal works");
  document.querySelector(".responseBar").textContent = eval(textContent);
});
