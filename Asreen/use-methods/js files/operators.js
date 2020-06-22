// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let text = document.getElementById('text');
let btn1 = document.getElementById("btn");
// i create a function
function changeStyle() {
  console.log('I create this function!!');
  text.style.color = "black";
  text.style.backgroundColor = "tomato";

}

function sub_number() {
  let first_number = Number(document.getElementById("Text1").value);
  let second_number = Number(document.getElementById("Text2").value);
  let result = first_number - second_number;
  document.getElementById("result").innerHTML +=first_number+' '+second_number+' '+ result;
}


function add_number() {
  let y = document.getElementById("txt1").value;
  let z = document.getElementById("txt2").value;
  let x = parseInt(y)+ parseInt(z);
  document.getElementById("demo").innerHTML += x;
}
function multiply_number() {
  let first_number = parseInt(document.getElementById("Text3").value);
  let second_number = parseInt(document.getElementById("Text4").value);
  let result = first_number * second_number;
  document.getElementById("multiply").innerHTML += result;
}


function div_number() {
  let y = document.getElementById("txt5").value;
  let z = document.getElementById("txt6").value;
  let x = y / z;
  document.getElementById("division").innerHTML += x;
}
function rem_number(){
  let x=document.getElementById('txt7').value;
  let y=document.getElementById('txt8').value;
  let z=x%y;
  document.getElementById("reminder").innerHTML += z;
}
function incrementNumber(){
  let x=document.getElementById('txt9').value;
  let y=document.getElementById('txt10').value;
  let z=0;
  for(let i=0;i<=y;i++){
    z=+x + +i;
  } 
  document.getElementById("increment").innerHTML = z;
}
function decrementNumber(){
  let x=document.getElementById('txt11').value;
  let y=document.getElementById('txt12').value;
  let z=0;
  for(let i=0;i<=y;i++){
    z=+x + +i;
  } 
  document.getElementById("decrement").innerHTML = z;
}


// creat a new functions
let product = (x) => {
  let z = x * 5;
  return (z);

}
console.log('10*5= ' + product(10));
console.log('15*5= ' + product(15));
console.log('40*5= ' + product(40));
console.log('2.5*5= ' + product(2.4));
console.log('0*5= ' + product(0));

//make a function and give 2 argument to that. 2. return the length of your arguments in console 3. your output in console should be like that: My name is (your name) and the length of arguments 
function funcLength(arg1,arg2){
  let fullName=`My Name is: ${arg1} ${arg2}`
 console.log('the length is: '+ arguments.length + fullName);
}
console.log(funcLength('Asreen', 'Ilyas'));
// function to greating based on new Date().getHours() function
function myFunction(){
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("greeting").innerHTML = greeting;
}
/*==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
all of them must try using if() or if-else
*/

let person='Maria';
if (person!='Asreen'){
    console.log('This is the wrong person');
};
// ternary operator
let age=15;
let voteable=(age>=18)? `${age} This person is old enough to vote`:`${age} This person is too young to vote`; 
console.log(voteable);
age=20;
voteable=(age<18)? `${age} This person is too young to vote`:`${age} This person is old enough to vote`;
console.log(voteable);

//logical operators

let person1={
          name:'Max',
          isStudent:true ,
          isTeacher:false
        },
     person2={
          name:'Mary',
          isStudent:false ,
          isTeacher:true
        };
let check1 = (person1.name==='Max' && person1.isStudent)? 'Max is a student': 'Max is a teacher';
console.log(check1);
let check2 = (person2.name==='Mary' && person2.isStudent)? 'Mary is a student': 'Mary is a teacher';
console.log(check2);
let check3 = (person1.isTeacher || person2.isTeacher)? 'One of them is a teacher':'No one of them is a teacher';
console.log(check3);


// let userName= prompt('What is your name?');
// let userSituation= prompt('How are you today?');
// if (userSituation=='good'){console.log(`the user feels today comfortable`);}
// else if (userSituation=='bad'){console.log(`the user feels today uncomfortable `)}
// else{console.log(`the user's feeling is unclear`)};

// let yourOpinion = confirm('Are you sure about this?');
// if(yourOpinion == true) {
//     document.write('You confirmed successfully!');
// }

function on() {
  console.log('The mouse in On Me!');
  // change the picture to light on
  document.getElementById('picture').innerHTML=`<img src='images/light-on.jpg' alt='photo'>`;
}
function off() {
   console.log('The mouse in Off Me!');
   // change the picture to light off
   document.getElementById('picture').innerHTML=`<img src='images/lamp-off.webp' alt='photo'>`;
}

