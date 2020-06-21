// JS conditions/options
let a = 10;//number
let b = 5;
let c = '10';//string
// equal to check
if (a == b) { //false
  console.log('condition 01 is true');
}
// not equal to check
if (a != b) {//true
  console.log('condition 02 is true');
}
// equal to check by value
if (a == c) { //true
  console.log('condition 03 is true');
}
// equal to check by value and type
if (a === c) { //false
  console.log('condition 04 is true');
}
// if-else
let role = 'teacher';
if (role == 'teacher') { //true
  console.log('Arif Is a Teacher');
}
if (role != 'teacher') { //false
  console.log('Arif Is not a Teacher');
}
if (role == 'teacher') { //true
  console.log('Arif Is a Teacher');
}
else { //false
  console.log('Arif Is not a Teacher');
}
// ternary opertors
// if(condition) {} else{}
// (condition)? {when true} : {when false}
let checkRole = (role == 'teacher') ? 'Arif' : 'not Arif';
console.log(checkRole);
let isOnline = false;//boolean
/**
 * if someone online say: you are online
 * if(condition=true) { active code }
 * if(condition=false) {code is not doing anything }
 */
if (isOnline) {
  alert('You are Online');
}
/**
 * if(true) { // result 1} //true
 * else { // result 2} //false
 */
if (isOnline) { // if true
  console.log('Result 1: ' + isOnline);
}
else //false
{
  console.log('Result 2: ' + isOnline);
}
/////////////////

let test01 = 'adel';

if (test01 == 'adel') { console.log('test01 is true ==>  string with value  "adel"'); }
else if (test01 != 'adel') { console.log('test01 is false ==>   the value is false'); }

////

let test02 = '28';

if (test02 === '28') { console.log('test02 is true ==>  string'); }
if (test02 !== 28) { console.log('test02 is true ==>  not a Number or not 28'); }
if (test02 !== 28 && test02 !== '28') { console.log('test02 is false ==>  change the value'); }

/////

let test03X = 10;
let test03Y = 5;

if (test03X == test03Y) { console.log('test03  01  :  ' + test03X + ' = ' + test03Y); }

if (test03X < test03Y) { console.log('test03  02  :  ' + test03X + ' < ' + test03Y); }
if (test03X <= test03Y) { console.log('test03  02  :  ' + test03X + ' <= ' + test03Y); }

if (test03X > test03Y) { console.log('test03  03  :  ' + test03X + ' > ' + test03Y); }
if (test03X >= test03Y) { console.log('test03  03  :  ' + test03X + ' >= ' + test03Y); }

if (test03X != test03Y) { console.log('test03  04  :  ' + test03X + ' != ' + test03Y); }

let test04 = (test03Y != test03X) ? 'not equal to ' : 'is equal to';
console.log('test04 : ' + test04);


////////// logical operators
console.log('*******logical operators*********')

let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function monthFun() {

//   let month = prompt('Enter a number betwen 1 and 12');
//   if (month < 1) {
//     month = prompt('Enter a number betwen 1 and 12')
//   }
//   else if (month > 12) {
//     month = prompt('Enter a number betwen 1 and 12')
//   }
//   else {

//     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//       console.log('the month number ' + monthNames[month - 1] + ' have 31 days')
//     }
//     else if (month == 2) {
//       let year = prompt('enter which year')
//       let mode = year % 4;
//       if (mode == 0) {
//         console.log('the month number ' + monthNames[month - 1] + ' have 29 days ')
//       }
//       else {
//         console.log('the month number ' + monthNames[month - 1] + ' have 28 days')
//       }
//     }
//     else {
//       console.log('the month number ' + monthNames[month - 1] + ' have 30 days')
//     }

//   }


// }

let fourSeasons = [
  '<img src="../winter.jpg">',
  '<img src="../autumn.jpg">',
  '<img src="../summer.jpg">',
  '<img src="../spring.jpg">'
]


let monthNames = [
  '<h1>January</h1>'+fourSeasons[0], //0
  '<h1>February</h1>'+fourSeasons[0],  //1
  '<h1>March</h1>'+fourSeasons[1],  //2
  '<h1>April</h1>'+fourSeasons[1],  
  '<h1>May</h1>'+fourSeasons[1],  
  '<h1>June</h1>'+fourSeasons[2],  
  '<h1>July</h1>'+fourSeasons[2],  
  '<h1>August</h1>'+fourSeasons[2],  
  '<h1>September</h1>'+fourSeasons[3],  
  '<h1>October</h1>'+fourSeasons[3],  
  '<h1>November</h1>'+fourSeasons[3],  
  '<h1>December</h1>'+fourSeasons[0] 
];


let monthNr = prompt('Enter a number betwen 1 and 12');

if (monthNr < 1) {
  alert('wrong input refresh your page.................!')
}
else if (monthNr > 12) {
  alert('wrong input refresh your page.................!')
}
else {
  document.getElementById("month").innerHTML += '<h1>this month is </h1>' + monthNames[monthNr - 1];// 1-1 =0
}



