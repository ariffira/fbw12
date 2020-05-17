/**
* Function: block of code for specific task

* 1. create a function using the word 'function'
* 2. structure:
    function functionName/variableName() {
        //some code
    }

Note: mandatory things
 - function word
 - name
 - () with the name
 - {//some code}
 - invoke/call the function()

//some build-in examples
//alert();
//console.log();
//Date();

*/

//Functions
function hello() {
    console.log("Hello!");
};

function addition(a, b) {
    console.log('Addition: ' + (a + b));
    return a + b;
};

function multiply(a, b) {
    console.log('Multiply: ' + (a * b));
    return a * b;
};

function divide(a, b) {
    console.log('Division: ' + (a / b));
    return a / b;
};

function sub(a, b) {
    console.log('Subtraction: ' + (a - b));
    return a - b;
};

function returner(a, b) {
    console.log('Returner: ' + (a % b));
    return a % b;
};

function evalute(a, b) {
    console.log('Evalute: ' + (a ** b));
    return a ** b;
};

function check(a) {
    let answer = "";
    switch(a) {
        case "DCI":
            answer = "Digital Career Institute";
            break;

        case "FBW12":
            answer = "Web Developer Course";
            break;

        default:
            answer = "Write only \"DCI\" or \"FBW12\" and see what happens";
            break;
    };
    return answer;
};

/*Declaring a variable with a function*/
let test = function(a) {
    return a;
};

// Console
hello();
console.log('--------------');
console.log(check("Something"));
console.log(check("FBW12"));
console.log(check("DCI"));
console.log('--------------');

// Writing in HTML
document.write(check("DCI"));
document.write("<br>" + check("FBW12"));
document.write("<br>" + 'Addition: ' + addition(2, 6));
document.write("<br>" + 'Multiply: ' + multiply(2, 6));
document.write("<br>" + 'Subtraction: ' + sub(65, 26));
document.write("<br>" + 'Division: ' + divide(600, 6));
document.write("<br>" + 'Returner: ' + returner(765, 6));
document.write("<br>" + 'Evalute: ' + evalute(2, 6));
document.write("<br>" + test("Example"));