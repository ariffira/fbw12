function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];// getDay() Returns the day of the week (from 0-6)
    return n;
  }
setInterval(function() {
    let today = new Date();
console.log(today);// date time etc
let mon= today.getMonth();
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
  clockId.innerHTML = myFunction() +', '+hour+ ':' + min + ':' + sec;
}, 1000); // every 1 second it will change function