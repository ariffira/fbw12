
function myFunc(){
     let time =new Date().getHours();
     let greeting;
     console.log(typeof time);
     switch(true){
         case time<11:
             greeting="good morning";
             break;

         case time<20:
             greeting="good day";
             break;
         default:
            greeting="good evening";
    
     }
     console.log(`THe hour now is:${time} o'clock`);
 document.getElementById("greeting").innerHTML = greeting;
}

