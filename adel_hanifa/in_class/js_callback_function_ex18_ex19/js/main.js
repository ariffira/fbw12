/**
 * Callback: Call me Back
 * - its a normal function
 * - used as a argument inside another function
 *  function(functionName)
 *  function(callback)
 * - we can not give parameters in callback when we use it as argument
 * - if u have many argument put callback function at the end
 */


/* function multi(a,b) {//callback function
  return a*b;//12*5=60
}
function divide(a, b) {
   return a/b;
}
function CalCulator(a, b, callback) {//main function(argument)
   return callback(a, b);// invoke the callback
}
console.log(CalCulator(12, 5, multi));//60
console.log(CalCulator(50, 5, divide));//5 */

/////////////////////// ex 18

let add = function (a, b) {
  return a + ' + ' + b + ' = ' + (a + b);
}

let minus = function (a, b) {
  return a + ' - ' + b + ' = ' + (a - b);
}

let multiply = function (a, b) {
  return a + ' * ' + b + ' = ' + (a * b);
}

let divid = function (a, b) {
  return a + ' / ' + b + ' = ' + (a / b);
}

let reminder = function (a, b) {
  return a + ' % ' + b + ' = ' + (a % b);
}

let calc = function (n1, n2, callback) {
  return callback(n1, n2);
}

function calcResult() {
  var x = eval(calcWay.value);
  var nr1 = Number(num1.value);
  var nr2 = Number(num2.value);
  calcID.innerHTML = calc(nr1, nr2, x);
}

/////////// more

function selectFun() {

  switch (selectID.value) {
    case "circle":
      displayOption.innerHTML = `
        <label>Enter a Radius. <b>r =</b></label>
        <input type="number" id="radius" value="1" min="1"></input>
        <button onclick="areacalc (radius.value, radius.value, circle)">get area</button>
        <br><label id="displayArea"></label>`
      break;

    case "square":
      displayOption.innerHTML = `
          <label>Enter a Length or Width. <b>l = w =</b></label>
          <input type="number" id="lengthWidth" value="1" min="1"></input>
          <button onclick="areacalc (lengthWidth.value, lengthWidth.value, square)">get area</button>
          <br><label id="displayArea"></label>`
      break;

    case "rectangle":
      displayOption.innerHTML = `
            <label>Enter a Length <b>l =</b></label>
            <input type="number" id="length1" value="1" min="1"></input>
            <label>and a Width <b>w =</b></label>
            <input type="number" id="width" value="1" min="1"></input>
            <button onclick="areacalc (length1.value, width.value, rectangle)">get area</button>
            <br><label id="displayArea"></label>`
      break;
  }
}

function areacalc(a, b, callback) {
  return callback(a, b);
}

function circle(r, r) {
  displayArea.innerHTML = 'Circle area is π * r<sup>2</sup> = ' + (Math.PI * r * r).toFixed(2);
}

function square(wl, wl) {
  displayArea.innerHTML = 'Square area is w<sup>2</sup> = l<sup>2</sup>= ' + (wl * wl).toFixed(2);
}

function rectangle(l, w) {
  displayArea.innerHTML = 'Rectangle area is l * w= ' + (l*w).toFixed(2);
}


///////// ex 19 

var start = setInterval(() => {
   var time = new Date; 
   clockID.innerHTML = makeTowDigit(time.getHours())+':'+makeTowDigit(time.getMinutes())+':'+makeTowDigit(time.getSeconds());

  }, 1000);


function makeTowDigit(x){
  var xx = x.toString();
  while (xx.length < 2) xx = "0" + xx;
  return xx;
}

