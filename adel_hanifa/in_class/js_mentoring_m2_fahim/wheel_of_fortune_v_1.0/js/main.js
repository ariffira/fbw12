let count = 0;
let array = [60, 80, 30, 30, 50, 10, 90, 20];
console.log(array);
let lastresult = 0;

function clickToRun() {
    if (count < 3) {
        count++;

        resultID.innerHTML = 'Round NR. ' + count + ' wait ...! ';

        var animationName = 'roundNR' + count;
        var rand = (Math.round(Math.random() * 25) + 1);  // 25 any number     +1 to not to be  0
        var deg = (360 * 5) + (rand * 45);
        console.log('it is :' + deg + 'deg');

        wheelID.style.animation = `${animationName} 5s ease-out forwards`;
        wheelID.style.setProperty("--r1", deg + 5 + 'deg');
        wheelID.style.setProperty("--r2", deg - 5 + 'deg');
        wheelID.style.setProperty("--r", deg + 'deg');

        while (rand >= 8) { rand = rand - 8; }// (8 = array.length)
        //console.log('the stop location is '+rand)
        //console.log('the result NR. '+count+' is :'+array[rand] )

        setTimeout(() => { resultID.innerHTML = 'the result NR. ' + count + ' is : ' + array[rand]; }, 3500);

        lastresult = lastresult + array[rand];
    }
    else {
        //console.log('Last result : '+ lastresult);
        resultID.innerHTML = 'The sum is : ' + lastresult; 

        count = 0;
        lastresult = 0;

        setTimeout(() => { resultID.innerHTML = 'Click the WHEEL again'; }, 3500);
    }
}
