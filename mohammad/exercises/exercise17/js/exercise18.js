/**
 * Callback: Call me Back
 * - its a normal function
 * - used as a argument inside another function
 *  function(functionName)
 *  function(callback)
 * - we can not give parameters in callback when we use it as argument
 * - if u have many argument put callback function at the end
 */
function multiply(a, b) { //callback function
    return a * b; //12*5=60
}

function divide(a, b) {
    return a / b;
}

function substract(a, b) {
    return a - b;
}

function add(a, b) {
    return Number(a) + Number(b);
}

function rest(a, b) {
    return a % b;
}

function CalCulator(a, b, callback) { //main function(argument)
    return callback(a, b); // invoke the callback
}

function getResult() {
    let oper = document.getElementById('operation').value,
        num1 = document.getElementById('firstNumber').value,
        num2 = document.getElementById('secoundNumber').value,
        fresult = 0;
    switch (oper) {
        case '+':
            fresult = CalCulator(num1, num2, add);
            break;
        case '-':
            fresult = CalCulator(num1, num2, substract);
            break;
        case '/':
            fresult = CalCulator(num1, num2, divide);
            break;
        case '*':
            fresult = CalCulator(num1, num2, multiply);
            break;
        case '%':
            fresult = CalCulator(num1, num2, rest);
            break;

        default:
            break;
    }
    result.innerHTML = fresult;


    setTimeout(message, 2000);
}
const message = function() {
    result.innerHTML += "<br>This message is shown after 2 seconds";
}

console.log(CalCulator(12, 5, multiply)); //60
console.log(CalCulator(50, 5, divide)); //5


let today = new Date();
console.log(today); // date time etc
console.log(today)
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
console.log(hour, min, sec);
setInterval(function() {
    sec++;
    if (sec > 59) {
        sec = 0;
        min++;
    }
    if (min > 59) {
        min = 0;
        hour++;
    }
    if (hour > 23)
        hour = 0
    clockId.innerHTML = hour + ':' + min + ':' + sec;
}, 1000); // every 1 second it will change function