// * Function: block of code for specific task
//  * 1. create a function using the word 'function'
//  2. structure:
//  function functionName/variableName() {
//      //some code
//  }
//  Note: mandatory things
//   - function word
//   - name
//   - () with the name
//   - {//some code}
//   - invoke/call the function()
// some build-in examples
// alert();
// console.log();
// Date();

function hello() {
    console.log('Hello Function');
}

hello();



function add(x,y) {
    return(x+' + '+y+' = '+(x+y));
}

function sub(x,y) {
    return(x+' - '+y+' = '+(x-y));
}

function div(x,y) {
    return(x+' / '+y+' = '+(x/y));
}

function multi(x,y) {
    return(x+' * '+y+' = '+(x*y));
}

document.getElementById("0001").innerHTML +='<br>'+ add(5,10);
document.getElementById("0001").innerHTML +='<br>'+ sub(20,3);
document.getElementById("0001").innerHTML +='<br>'+ div(50,5);
document.getElementById("0001").innerHTML +='<br>'+ multi(5,20);



//////////////////////////////


function multi5 (num){
    return(num+' * '+5+' = '+(num*5));
}


console.log(multi5(2));
console.log(multi5(10));
console.log(multi5(74));
console.log(multi5(2547));



///////

function myf(p) {
    function secf(num) {
      return p - num;
    }
    var v = secf(2);
    if (v < 1) {
      console.log("bigger");
    } else {
      console.log("less");
      return v
    }
  }
  console.log(myf(5));

  ////////////////

var number =5;

function add10 (x){
    return(x+10);
}
console.log(add10(number));
function add20 (x){
    return(x+20);
}
console.log(add20(number));

////////////////

var fName = 'Adel', lName = 'Hanifa'

function names (x,y) {
    return ('My name is: '+x+' '+y+', and the arguments length is: '+arguments.length);
}

console.log(names(fName,lName));



////////////////
let basePrice = 1000;
let finalPrice = 0;
function lessTax() {
  finalPrice = basePrice * 1.12;
  console.log("Your final price is less $" + finalPrice);
}
function midTax() {
  finalPrice = basePrice * 1.2;
  console.log("Your final price is mid $" + finalPrice);
}
function highTax() {
  finalPrice = basePrice * 1.5;
  console.log("Your final price is high $" + finalPrice);
}
if (basePrice < 500) {
  lessTax();
} else if (basePrice < 1000) {
  midTax();
} else {
  highTax();
}



// 1. declare 2.call it
// 1 function only returns 1 time
// Function without parameter
function myFunction() {
  return 'I am function without parameters';
}
console.log(myFunction());
document.write(myFunction());
function myFunction1() {
  console.log('I am function without parameters');
  return 'I am function without parameters';
}
document.write(myFunction1());
// many returns
function myReturns() {
  return 1;//active
  return 18; //ignored
  return 200;//ignored
}
console.log(myReturns());
// Function with parameter
function myParameters(height, weight) {
  let x = height;
  let y = weight;
  let z = x * y;
  return 'The results of the area: ' + z + 'cm';
}
console.log(myParameters());//NaN
console.log(myParameters(10, 6));//60
console.log(myParameters);
console.log(myParameters(23, 10, 8));// 3rd parameter will be ignored