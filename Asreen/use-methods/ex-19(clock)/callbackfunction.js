// Create a calculators using callback concepts:
// Step 01:
// create a function which called "calculator"
// - function will receive 3 arguments as x,y, callback
// - callback() should be used inside the function and send x, y inside callback function
// Step 02:
// - create add(), multiply, divide(), minus(), reminder() etc. and use them as callback function
// Step 03:
// give another example of callback function use yourself by exploring google
function add(a, b) {
    console.log(a,b);
    return eval(a + b);
}
function subtract(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divid(a, b) {
    return a / b;
}
function power(a, b) {
    return Math.pow(a, b);
}
function calculator(x, y, myFunc) {
    console.log(x,y,myFunc);
    var myFunc2=eval(myFunc);
    var nr1 = Number(x);
    var nr2 = Number(y);
    seeResult.innerHTML = myFunc2(nr1 ,nr2);
    //return myFunc2(nr1 ,nr2);
    //seeResult.innerHTML += myFunc2(x, y);
}



// move the div 
function callbackfunc() {
    myDiv.style.marginLeft ='600px';
    myDiv.style.backgroundColor ='green';
}


function callbackfunc2() {
    myDiv.style.marginLeft = '10px';
    myDiv.style.backgroundColor = 'red';
}
function change(){
setInterval(change2(),1000);
    function change2(){
    myDiv.style.webkitTransform = 'rotate(270deg)';
   
    }
}
function callbackfunc3(){
    myDiv.style.webkitTransform = 'rotate(180deg)';
    myDiv.style.animationName='move';
   // myDiv.style.webkitAnimation='move 3s lienar infinite 1s alternate';
}

function moveDiv(test) {
    setTimeout(test, 1000);
}




