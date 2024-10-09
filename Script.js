"use strict";

let finalAnswer = 0;
let x;

let displaySum = function (number) {
  x = number;
  document.querySelector(`#btn$[x]`).addEventListener("click", function () {
    document.querySelector(".responseBar").textContent += x;
  });
};
displaySum(9);
displaySum(8);
displaySum(7);
displaySum(6);
displaySum(5);
displaySum(4);
displaySum(3);
displaySum(2);
displaySum(1);
displaySum(0);
displaySum(9);
