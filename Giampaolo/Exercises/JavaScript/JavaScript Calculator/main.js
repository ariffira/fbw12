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
}

let subNumber1, subNumber2, subResult;
function sub() {
    subNumber1 = document.getElementById('subNumber1').value;
    subNumber2 = document.getElementById('subNumber2').value;
    console.log(subNumber1, subNumber2);
    subResult = subNumber1 - subNumber2;
    document.getElementById('subResultId').innerHTML = 'The Result of the Subtraction: ' + subResult;
}

let multiNumber1, multiNumber2, multiResult;
function multi() {
    multiNumber1 = document.getElementById('multiNumber1').value;
    multiNumber2 = document.getElementById('multiNumber2').value;
    console.log(multiNumber1, multiNumber2);
    multiResult = multiNumber1 * multiNumber2;
    document.getElementById('multiResultId').innerHTML = 'The Result of the multiplication: ' + multiResult;
}

let divNumber1, divNumber2, divResult;
function div() {
    divNumber1 = document.getElementById('divNumber1').value;
    divNumber2 = document.getElementById('divNumber2').value;
    console.log(divNumber1, divNumber2);
    divResult = divNumber1 / divNumber2;
    document.getElementById('divResultId').innerHTML = 'The Result of the division: ' + divResult;
}

let proCentNumber1, proCentNumber2, proCentResult;
function proCent() {
    proCentNumber1 = document.getElementById('proCentNumber1').value;
    proCentNumber2 = document.getElementById('proCentNumber2').value;
    console.log(proCentNumber1, proCentNumber2);
    proCentResult = (proCentNumber1 / 100) * proCentNumber2;
    document.getElementById('proCentResultId').innerHTML = `The Result of the percentage: ${Math.floor(proCentResult)}`;
}



// TODO still in test



// Calculator
let get1, get2, get3, get4, get5, get6, get7, get8, get9, get0; //Numbers buttons
let calcResult, resetAll, reset;
let addittion, substraction, division, multiply, calcPercentage;

//Numberss functions
function addNumber1() {
    get1 = document.getElementById('get1').value;
    document.getElementById('calcResult').value += get1;
};

function addNumber2() {
    get2 = document.getElementById('get2').value;
    document.getElementById('calcResult').value += get2;
};

function addNumber3() {
    get3 = document.getElementById('get3').value;
    document.getElementById('calcResult').value += get3;
};

function addNumber4() {
    get4 = document.getElementById('get4').value;
    document.getElementById('calcResult').value += get4;
};

function addNumber5() {
    get5 = document.getElementById('get5').value;
    document.getElementById('calcResult').value += get5;
};

function addNumber6() {
    get6 = document.getElementById('get6').value;
    document.getElementById('calcResult').value += get6;
};

function addNumber7() {
    get7 = document.getElementById('get7').value;
    document.getElementById('calcResult').value += get7;
};

function addNumber8() {
    get8 = document.getElementById('get8').value;
    document.getElementById('calcResult').value += get8;
};

function addNumber9() {
    get9 = document.getElementById('get9').value;
    document.getElementById('calcResult').value += get9;
};

function addNumber0() {
    get0 = document.getElementById('get0').value;
    document.getElementById('calcResult').value += get0;
};

// Erasing Functions
function eraseAll() {
    let eraseAll = "";
    document.getElementById('calcResult').value = eraseAll;
};

function eraseNumber() {
    calcResult = document.getElementById(`calcResult`).value;
    let resultCalc = calcResult - 1;
    document.getElementById(`calcResult`).value = resultCalc;
};