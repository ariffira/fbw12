let x = 10;
let y = 5;
let z = '5';

console.log(`Values:
X = ${x}
Y = ${y}
Z = ${z}
---------- True Conditions ----------`);



//
//* True conditions
if (y == z) {
    console.log(`Y is the same of Z`);
};

if(x != z) {
    console.log(`X isn't the same of Z`);
};

if(z.includes(5)) {
    console.log(`Z includes 5`);
};

if(x.toString().includes(10)) {
    console.log(`X doesn't include 5`);
};

if(z < x) {
    console.log(`Z is less than X`);
};

if(z == x || z == y) {
    console.log(`Z is less than X but egal to Y`)
}

let test2 = (x == (Number(z) + y)) ? 'X is the same of Y + Z' : 'X isn\'t the same of Y + Z';
console.log(test2);



//
// !False Conditions
console.log('---------- False Conditions ----------');

if (x === z) {
    console.log(`X is the same of Z`);
} else {
    console.log(`X isn't the same of Z`);
};

if (z > (y + x)) {
    console.log(`Z is bigger than X + Y`);
} else {
    console.log(`Z isn't bigger than X + Y`);
};

if (z >= (y + x)) {
    console.log(`Z is bigger or the same of X + Y`);
} else {
    console.log(`Z isn't bigger or the same of X + Y`);
};

if (z === y) {
    console.log(`Z is the same type of Y`);
} else {
    console.log(`Z isn't the same type of Y`);
};

if(z == x && z == y) {
    console.log(`Z is egal to X and Y`)
} else {
    console.log(`Z is less than X but egal to Y`);
}

let test = (x == y) ? 'X is the same of Y' : 'X isn\'t the same of Y';
console.log(test);


//
// * Prompt
let userName = prompt('What\'s your Name?');
if (userName == 'Giampaolo') {
    document.write(`Welcome back ${userName}.`)
} else {
    document.write(`You are not a student from DCI` + '<br>')
}

//
// * Confirm
let yourOpinion = confirm('Are you sure about this?');
if(yourOpinion == true) {
    document.write('You confirmed successfully!');
}

/* let schoolMates = [
    'Adel',
    'Asreen',
    'Arif',
    'Chuling',
    'Cagri',
    'Mohammed',
    'Jessica',
    'Daniel',
    'Juan',
    'Peter',
    'Sujatha',
    'Khaled'
]

for (i = 0; i < schoolMates.length; i++) {
    if (userName == 'G\g\iiampaolo' || schoolMates[i]) {
        document.write(`Welcome back ${userName}.`)
    } else {
        document.write(`You are not a student from DCI`)
    }
}
*/




//* Arif's code //
console.log(`

--------------------
    Arif's code
--------------------`
);
// JS conditions/options
let a = 10;//number
let b = 5;
let c = '10';//string
// equal to check
if(a==b) { //false
    console.log('condition 01 is true');
}
// not equal to check
if(a!=b) {//true
    console.log('condition 02 is true');
}
// equal to check by value
if(a==c) { //true
    console.log('condition 03 is true');
}
// equal to check by value and type
if(a===c) { //false
    console.log('condition 04 is true');
}
// if-else
let role = 'teacher';
if(role == 'teacher') { //true
    console.log('Arif Is a Teacher');
}
if(role!='teacher') { //false
    console.log('Arif Is not a Teacher');
}
if(role == 'teacher') { //true
    console.log('Arif Is a Teacher');
}
else { //false
    console.log('Arif Is not a Teacher');
}
// ternary opertors
// if(condition) {} else{}
// (condition)? {when true} : {when false}
let checkRole = (role == 'teacher')? 'Arif' : 'not Arif';
console.log(checkRole);
let isOnline = false;//boolean
/**
 * if someone online say: you are online
 * if(condition=true) { active code }
 * if(condition=false) {code is not doing anything }
 */
if(isOnline) {
    alert('You are Online');
}
/**
 * if(true) { // result 1} //true
 * else { // result 2} //false
 */
if(isOnline) { // if true
    console.log('Result 1: ' + isOnline);
}
else //false
{
    console.log('Result 2: ' + isOnline);
}
// 1. declare 2.call it
// 1 function only returns 1 time
// Function without parameter
function myFunction() {
    return 'I am function without parameters';
}
console.log(myFunction());
// document.write(myFunction());
function myFunction1() {
    console.log('I am function without parameters');
    return 'I am function without parameters';
}
// document.write(myFunction1());
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
    let z = x*y;
    return 'The results of the area: ' + z + 'cm';
}
console.log(myParameters());//NaN
console.log(myParameters(10,6));//60
console.log(myParameters);
console.log(myParameters(23, 10, 8));// 3rd parameter will be ignored