var numberOne = null;
var numberTwo = null;

function getInputValue(id) {
    return document.getElementById(id).value;
}

function stringToNumber(string) {
    return string = +string;
}

function output(result) {
    document.getElementById('display-result').value = result;
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
