//main module which will import module2
import {fullname, myAge, addTheNumber} from './module2.js'
console.log(fullname('Cagri', 'Türkseven'));
console.log(myAge(33));

//////////
export let arr = [0];

firstBtn.addEventListener('click', function() {
    var x = Number(numID.value)
    arr.push(x);
    numID.value = ''
})


secoundBtn.addEventListener('click', function() {
    resultID.innerHTML = addTheNumber();
    arr = [0];
})

