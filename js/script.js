var numberOne, numberTwo;

function getNumber(id) {
    return +document.getElementById(id).value;
}

function output(result) {
    document.getElementById('display-result').value = result;
}

function addition() {
    numberOne = getNumber('first-num');
    numberTwo = getNumber('second-num');

    output(numberOne + numberTwo);
}

function subtraction() {
    numberOne = getNumber('first-num');
    numberTwo = getNumber('second-num');

    output(numberOne - numberTwo);
}

function multiplication() {
    numberOne = getNumber('first-num');
    numberTwo = getNumber('second-num');

    output(numberOne * numberTwo);
}

function devision() {
    numberOne = getNumber('first-num');
    numberTwo = getNumber('second-num');

    output(numberOne / numberTwo);
}

function deletion() {
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    output('');
}
