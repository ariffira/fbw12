let number1, number2, result;
function add() {
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    console.log(number1,number2);//track
    //result = (+number1) + (+number2); // way 1
    //result = 'number1' + number2; //NaN 
    // Number(any number string)
    //result = Number(number1) + Number(number2); // way 2
    result = parseInt(number1) + parseInt(number2); // way 3
    // result = 'string' + 'string';
    // result = '12' + '13'; 1213
    document.getElementById('resultId').innerHTML = 'The Result of the Addition: ' + result; //string + number
};

let subNumber1, subNumber2, subResult;
function sub() {
    subNumber1 = document.getElementById('subNumber1').value;
    subNumber2 = document.getElementById('subNumber2').value;
    console.log(subNumber1, subNumber2);
    subResult = subNumber1 - subNumber2;
    document.getElementById('subResultId').innerHTML = 'The Result of the Subtraction: ' + subResult;
};

let multiNumber1, multiNumber2, multiResult;
function multi() {
    multiNumber1 = document.getElementById('multiNumber1').value;
    multiNumber2 = document.getElementById('multiNumber2').value;
    console.log(multiNumber1, multiNumber2);
    multiResult = multiNumber1 * multiNumber2;
    document.getElementById('multiResultId').innerHTML = 'The Result of the multiplication: ' + multiResult;
};

let divNumber1, divNumber2, divResult;
function div() {
    divNumber1 = document.getElementById('divNumber1').value;
    divNumber2 = document.getElementById('divNumber2').value;
    console.log(divNumber1, divNumber2);
    divResult = divNumber1 / divNumber2;
    document.getElementById('divResultId').innerHTML = 'The Result of the division: ' + divResult;
};

let proCentNumber1, proCentNumber2, proCentResult;
function proCent() {
    proCentNumber1 = document.getElementById('proCentNumber1').value;
    proCentNumber2 = document.getElementById('proCentNumber2').value;
    console.log(proCentNumber1, proCentNumber2);
    proCentResult = (proCentNumber1 / 100) * proCentNumber2;
    document.getElementById('proCentResultId').innerHTML = `The Result of the percentage: ${Math.floor(proCentResult)}`;
};



// TODO still in test



// Calculator
function calcNumbers(result) {
    calc.displayResult.value += result;
};

function erase() {
    calc.displayResult.value = "";
};

function remove(value) {
    calc.displayResult.value = (value.substring(0, value.length - 1));
};