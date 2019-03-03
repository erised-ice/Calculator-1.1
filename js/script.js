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
  return +string;
}

function addition(numberOne, numberTwo) {
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

/*function getNumber(elementsIdCollection) {
    const numbersCollection = [];

    elementsIdCollection.forEach(function (item) {
        const number = getInputValue(item);

        numbersCollection.push(
            stringToNumber(number)
        );
    });

  return numbersCollection;
}*/

/*$buttonAdd.addEventListener('click', function (event) {
  /!*event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(addition(numberOne,numberTwo));*!/

  const numbersCollection = getNumber(['first-num', 'second-num']);

  output(
      addition(numbersCollection[0], numbersCollection[1])
  )
});*/

/*$buttonSubtract.addEventListener('click', function (event) {
  event.preventDefault();
  var inputValueOne = getInputValue('first-num');
  var inputValueTwo = getInputValue('second-num');

  numberOne = stringToNumber(inputValueOne);
  numberTwo = stringToNumber(inputValueTwo);

  output(subtraction(numberOne,numberTwo));
});*/

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
});

// New
const $buttonCollection = document.querySelectorAll('.js-button');

$buttonCollection.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const buttonValue = button.value;
      var inputValueOne = getInputValue('first-num');
      var inputValueTwo = getInputValue('second-num');

      numberOne = stringToNumber(inputValueOne);
      numberTwo = stringToNumber(inputValueTwo);

      switch (buttonValue) {
        case 'addition':2
            output(addition(numberOne, numberTwo));
            break;
        case 'subtraction':
            output(subtraction(numberOne, numberTwo));
            break;
      }
    });
});