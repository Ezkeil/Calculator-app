export class Calculator {
  constructor(previousNum, currentNum, operatorDisplay) {
    this.previousNum = previousNum;
    this.currentNum = currentNum;
    this.operatorDisplay = operatorDisplay;
  }
  delete() {
    let length = this.currentNum.innerText.length;
    if (this.currentNum.innerText.slice(-1) == ".") {
      this.currentNum.innerText = this.currentNum.innerText.slice(
        0,
        length - 1
      );
      document.querySelector("#decimal").disabled = false;
    }
    this.currentNum.innerText = this.currentNum.innerText.slice(0, length - 1);
  }
  clear() {
    this.previousNum.innerText = "";
    this.currentNum.innerText = "";
    this.operatorDisplay.innerText = "";
    document.querySelector("#decimal").disabled = false;
  }
  input(element) {
    this.currentNum.innerText += element.innerText;
  }
  calculate(previous, current) {
    if (this.operatorDisplay.innerText == "+")
      return Number(previous.innerText) + Number(current.innerText);
    if (this.operatorDisplay.innerText == "-")
      return Number(previous.innerText) - Number(current.innerText);
    if (this.operatorDisplay.innerText == "x")
      return Number(previous.innerText) * Number(current.innerText);
    if (this.operatorDisplay.innerText == "/")
      return Number(previous.innerText) / Number(current.innerText);
  }
  update(previous, current, operator) {
    this.operatorDisplay.innerText = operator.innerText;
    if (previous.innerText == "") {
      previous.innerText = current.innerText;
      current.innerText = "";
    }
    if (previous.innerText != "") {
      previous.innerText = this.calculate(previous, current);
      current.innerText = "";
    }
  }
}
