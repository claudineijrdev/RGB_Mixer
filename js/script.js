window.addEventListener("load", start);

var rangeRed;
var rangeGreen;
var rangeBlue;
var valRed;
var valGreen;
var valBlue;
var colorBox;
var valInicial = 130;

function start() {
  rangeRed = document.querySelector("#rangeRed");
  rangeGreen = document.querySelector("#rangeGreen");
  rangeBlue = document.querySelector("#rangeBlue");
  valRed = document.querySelector("#valRed");
  valGreen = document.querySelector("#valGreen");
  valBlue = document.querySelector("#valBlue");
  colorBox = document.querySelector("#colorBox");

  rangeRed.addEventListener("input", getRangeRedValue);
  rangeGreen.addEventListener("input", getRangeGreenValue);
  rangeBlue.addEventListener("input", getRangeBlueValue);
  // rangeRed.addEventListener("input", getRangeRedValue);
  // rangeGreen.addEventListener("input", getRangeGreenValue);
  // rangeBlue.addEventListener("input", getRangeBlueValue);

  rangeRed.value = valInicial;
  rangeGreen.value = valInicial;
  rangeBlue.value = valInicial;
  valRed.value = valInicial;
  valGreen.value = valInicial;
  valBlue.value = valInicial;

  rangeRed.focus();

  setColor();
}

function getRangeRedValue(event) {
  var value = event.target.value;
  valRed.value = value;
  setColor();
}

function getRangeGreenValue(event) {
  var value = event.target.value;
  valGreen.value = value;
  setColor();
}

function getRangeBlueValue(event) {
  var value = event.target.value;
  valBlue.value = value;
  setColor();
}

function setColor() {
  colorBox.style.backgroundColor =
    "rgb(" + valRed.value + ", " + valGreen.value + "," + valBlue.value + ")";
}
