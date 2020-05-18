
/////////// months  ex ///////////////

//add 4 img 
let fourSeasons = [
  '<img src="img/winter.jpg">',
  '<img src="img/autumn.jpg">',
  '<img src="img/summer.jpg">',
  '<img src="img/spring.jpg">'
]

// add the name of each months with an image for which season
let monthNames = [
  '<h1>this month is: January</h1>'+fourSeasons[0], 
  '<h1>this month is: February</h1>'+fourSeasons[0],  
  '<h1>this month is: March</h1>'+fourSeasons[1],  
  '<h1>this month is: April</h1>'+fourSeasons[1],  
  '<h1>this month is: May</h1>'+fourSeasons[1],  
  '<h1>this month is: June</h1>'+fourSeasons[2],  
  '<h1>this month is: July</h1>'+fourSeasons[2],  
  '<h1>this month is: August</h1>'+fourSeasons[2],  
  '<h1>this month is: September</h1>'+fourSeasons[3],  
  '<h1>this month is: October</h1>'+fourSeasons[3],  
  '<h1>this month is: November</h1>'+fourSeasons[3],  
  '<h1>this month is: December</h1>'+fourSeasons[0] 
];

// enter number of the months 1-----12
let monthNr = prompt('Enter a number betwen 1 and 12');

// check the number  if it not between 1 and 12
if (monthNr < 1) {
  alert('wrong month refresh your page.................!')
  document.getElementById("month").innerHTML += '<h1>You entered an error number.<br> Please refresh your page .......... </h1>'+'<img src="img/error.jpg">';
}
else if (monthNr > 12) {
  alert('wrong month refresh your page.................!')
  document.getElementById("month").innerHTML += '<h1>You entered an error number.<br> Please refresh your page .......... </h1>'+'<img src="img/error.jpg">';
}
else {
  // if the number between 1 and 12 then write the line below
  document.getElementById("month").innerHTML += monthNames[monthNr - 1];
}



////////////////////////////////////////////////////////////

/////////// weekly  ex ///////////////

//  days names 
let i;

let days= [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
//  todo lists names 
let todo1= '<table><tr><th>07:30</th><td>Eating breakfast</td></tr><tr><th>08:15</th><td>Go to Düsseldorf</td></tr><tr><th>09:30</th><td>Start a JS course in DCI</td></tr><tr><th>12:45</th><td>Take a break for lunch</td></tr><tr><th>14:00</th><td>Continue learning JS</td></tr><tr><th>16:45</th><td>Go Back Home</td></tr><tr><th>18:30</th><td>Eating dinner</td></tr></table>';

let todo2= '<table><tr><th>08:30</th><td>Eating breakfast</td></tr><tr><th>09:30</th><td>Enjoy drinking coffee</td></tr><tr><th>10:30</th><td>Do some house work</td></tr><tr><th>13:30</th><td>Eating lunch</td></tr><tr><th>14:00</th><td>Go shopping</td></tr><tr><th>18:30</th><td>Eating dinner</td></tr><tr><th>19:30</th><td>watching a film</td></tr></table>';

let todo3= '<table><tr><th>08:30</th><td>Eating breakfast</td></tr><tr><th>09:30</th><td>Enjoy drinking coffee</td></tr><tr><th>10:00</th><td>Do my homeworks</td></tr><tr><th>13:30</th><td>Eating lunch</td></tr><tr><th>14:00</th><td>Visiting some friends</td></tr><tr><th>18:30</th><td>Eating dinner</td></tr><tr><th>19:30</th><td>Talk to the family a video call</td></tr></table>';


// Choose a day and enter the first 3 letters or choose a number between 1 and 7
let dayNr = prompt('Choose a day and enter the first 3 letters or choose a number between 1 and 7 :');

let dayNrcheck = ['mon',1,'tue',2,'wed',3,'thu',4,'fri',5,'sat',6,'sun',7];

if (dayNr == dayNrcheck[0] || dayNr == dayNrcheck[1]){
  i=0;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo1;
}
else if (dayNr == dayNrcheck[2] || dayNr == dayNrcheck[3]){
  i=1;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo1;
}
else if (dayNr == dayNrcheck[4] || dayNr == dayNrcheck[5]){
  i=2;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo1;
}
else if (dayNr == dayNrcheck[6] || dayNr == dayNrcheck[7]){
  i=3;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo1;
}
else if (dayNr == dayNrcheck[8] || dayNr == dayNrcheck[9]){
  i=4;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo1;
}
else if (dayNr == dayNrcheck[10] || dayNr == dayNrcheck[11]){
  i=5;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo2;
}
else if (dayNr == dayNrcheck[12] || dayNr == dayNrcheck[13]){
  i=6;
  document.getElementById("week").innerHTML += '<h1>this what i do every '+days[i]+'</h1>'+todo3;
}
else {
  alert('wrong day refresh your page.................!')
  document.getElementById("week").innerHTML += '<h1>You entered a wrong day<br>Please refresh your page .......... </h1>'+'<img src="img/error02.jpg">';
}



