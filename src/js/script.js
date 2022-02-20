import { Calculator } from "./calculator.js";
// Initialization
const current = document.querySelector("#current");
const previous = document.querySelector("#previous");
const operatorDisplay = document.querySelector("#operator");
const operators = document.querySelectorAll(".operators");
const del = document.querySelector("#delete");
const reset = document.querySelector("#reset");
const decimal = document.querySelector("#decimal");
const numbers = document.querySelectorAll(".btn-num");
const equal = document.querySelector("#equal");
// Call to action
const calculator = new Calculator(previous, current, operatorDisplay);
del.addEventListener("click", () => {
  calculator.delete();
});
reset.addEventListener("click", () => {
  calculator.clear();
});
numbers.forEach((element) => {
  element.addEventListener("click", () => {
    calculator.input(element);
  });
});
decimal.addEventListener("click", () => {
  calculator.input(decimal);
  decimal.disabled = true;
});
operators.forEach((element) => {
  element.addEventListener("click", () => {
    calculator.update(previous, current, element);
  });
});
equal.addEventListener("click", () => {
  if (previous.innerText != "")
    current.innerText = calculator.calculate(previous, current);
  previous.innerText = "";
  operatorDisplay.innerText = "";
});
