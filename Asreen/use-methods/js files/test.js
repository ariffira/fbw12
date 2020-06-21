const phone=00445673455666;
let firstName, last_name, age;
firstName = 'Asreen';
last_name = 'Ilyas';
age=35;
//way of display data in browser

document.getElementById('demo').style.color = "red";
//img + paragraph
document.getElementById('photo').innerHTML="<img src='photo.jpg' alt='photo'>"
// the new task
document.getElementById('pic').innerHTML="<img src='strand.jpg' alt='photo'>"

var paragraph="I am a paragraph :) / Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusamus totam amet quidem mollitia, unde  ";
document.getElementById('para2').innerHTML=paragraph;
document.getElementById('info').innerHTML="My First name:"+ firstName + '<br>' +"my Last name:" + last_name + '<br>' + 'my Age :' + age + '<br>' + 'my phone:' + phone;




document.write('My First name: ' + firstName + '<br>' +'my Last name:' + last_name + '<br>' + 'my Age :' + age + '<br>' + 'my phone:' + phone);



document.getElementsByTagName("h1").innerHTML="Hello from JS"
function changeColor(newColor,newBackground) {
    var elem = document.getElementById("para1");
    elem.style.color = newColor;
    elem.style.backgroundColor=newBackground;
}
function changeColor1(newColor,newBackground) {
    var elem = document.getElementById("para");
    elem.style.color = newColor;
    elem.style.backgroundColor=newBackground;
}
//  alert('Are you soure ,you wont to remove this info?');
//  alert('The result is:'+(2+3));
//  alert('The result is:'+(2/3));
console.log('Hi ,from console');
var name1 = 'Asreen';
var name2 = 'Ilyas';
console.log(name1 + name2);//Asreen ILyas
console.log(name1 + 100); //Asreen100
// way to write variable
// not allowed in first letter: numbers, special character, sign
// operators are not allowed(+,-,*,/,%)
// no space
// allowed in first letter: characters(a-z), Hiphen(_), dollar sign($)
// use camelCase
// js variable is case sensetive
console.log('My First name: ' + firstName + '\n' +'my Last name:' + last_name + '\n' + 'my Age :' + age + '\n' + 'my phone:' + phone);





var myArray=[1,2,3,4];
// Nesting Array
var nestingArray=[['cat','white',4],['Bird','yellow',2],['Parrot','Colored',2]];
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        console.log(nestingArray[i][j]);
    }     
}
var nestingArray2=[['Asreen','Iraq','programming'],['Max','USA','reading'],['Paula','Colerado','dancing']];
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        document.write(nestingArray2[i][j]);
    }     
}
 
// Create an object:
var person1 = { 
    firstName:"Max", 
    lastName:"Mueler",
    age:50,
   eyeColor:"blue",
  
}
   
var person2={ 
    firstName:"Mary", 
    lastName:"Jackson",
    age:40,
   eyeColor:"green",

    
}
var person3={ 
    firstName:"Max", 
    lastName:"Mueler",
    age:44,
   eyeColor:"blue",
  
}
var person4={ 
    firstName:"Gan", 
    lastName:"Renne",
    age:32,
   eyeColor:"brown",
  
   }
   document.getElementById('object').innerHTML= person1.firstName +' '+person1.lastName +'<br>' +  person2.firstName +' '+person2.lastName+'<br>' +
   person3.firstName+' '+person3.lastName + '<br>' +
   person4.firstName+' ' +person4.lastName+ '<br>' ;
  



// Display some data from the object:
document.getElementById("demo").innerHTML =
person1.firstName + " is " + person1.age + " years old.";
     


// i use the function parseInt("..");
var a = parseInt("10") + "<\n>";
var b = parseInt("10.00") + "<\n>";
var c = parseInt("10.33") + "<\n>";
var d = parseInt("34 45 66") + "<\n>";
var e = parseInt("   60   ") + "<\n>";
var f = parseInt("40 years") + "<\n>";
var g = parseInt("He was 40") + "<\n>";
var h = parseInt("10", 10)+ "<\n>";
var i = parseInt("010")+ "<\n>";
var j = parseInt("10", 8)+ "<\n>";
var k = parseInt("0x10")+ "<\n>";
var l = parseInt("10", 16)+ "<\n>";
console.log(a,b,c,d,e,f,g,h,i,j,k,l);
/**
 * todo:
 * 1.creat an Id ..
 */

