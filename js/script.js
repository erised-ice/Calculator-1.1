// New
const $buttonCollection = document.querySelectorAll('.js-button');

const $buttonAdd = document.querySelector('.js-button-add');
const $buttonSubtract = document.querySelector('.js-button-subtract');
const $buttonMultiply = document.querySelector('.js-button-multiply');
const $buttonDeviser = document.querySelector('.js-button-deviser');

const $buttonDelete = document.querySelector('.js-button-delete');

const $outputDisplay = document.querySelector('.js-output');

var numberOne = null;
var numberTwo = null;

function getInputValue(id) {
  return document.getElementById(id).value;
}


function output(result) {
  $outputDisplay.value = result;
}

function stringToNumber(string) {
  return string = +string;
}

function addition(numberOne,numberTwo) {
  return numberOne + numberTwo;
}

function subtraction(numberOne,numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne,numberTwo) {
  return numberOne * numberTwo;
}

function devision(numberOne,numberTwo) {
  return numberOne / numberTwo;
}

function deletion() {
  document.getElementById('first-num').value = '';
  document.getElementById('second-num').value = '';
}

$buttonAdd.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(addition(numberOne,numberTwo));
});

$buttonSubtract.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(subtraction(numberOne,numberTwo));
});

$buttonMultiply.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(multiply(numberOne,numberTwo));
});

$buttonDeviser.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(devision(numberOne,numberTwo));
});

$buttonDelete.addEventListener('click', function (event) {
  event.preventDefault();
  deletion();
  output('');
})