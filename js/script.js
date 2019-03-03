// New
const $buttonCollection = document.querySelectorAll('.js-button');
console.log($buttonCollection);

const $buttonAdd = document.querySelector('.js-button-add');
const $buttonAdd = document.querySelector('.js-button-subtract');
const $buttonAdd = document.querySelector('.js-button-multiply');
const $buttonAdd = document.querySelector('.js-button-devide');

const $buttonAdd = document.querySelector('.js-button-delete');

const $outputDisplay = document.querySelector('.js-output');
console.log($outputDisplay);

function getInputValue(id) {
  return document.getElementById(id).value;
}

// Old

var numberOne = null;
var numberTwo = null;

function stringToNumber(string) {
    return string = +string;
}

function output(result) {
    $outputDisplay.value = result;
}

function addition() {
    var inputValueOne = getInputValue('first-num');
    var inputValueTwo = getInputValue('second-num');

    numberOne = stringToNumber(inputValueOne);
    numberTwo = stringToNumber(inputValueTwo);

    output(numberOne + numberTwo);
}

function subtraction() {
    var inputValueOne = getInputValue('first-num');
    var inputValueTwo = getInputValue('second-num');

    numberOne = stringToNumber(inputValueOne);
    numberTwo = stringToNumber(inputValueTwo);

    output(numberOne - numberTwo);
}

function multiplication() {
    var inputValueOne = getInputValue('first-num');
    var inputValueTwo = getInputValue('second-num');

    numberOne = stringToNumber(inputValueOne);
    numberTwo = stringToNumber(inputValueTwo);

    output(numberOne * numberTwo);
}

function devision() {
    var inputValueOne = getInputValue('first-num');
    var inputValueTwo = getInputValue('second-num');

    numberOne = stringToNumber(inputValueOne);
    numberTwo = stringToNumber(inputValueTwo);

    output(numberOne / numberTwo);
}

function deletion() {
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    output('');
}
