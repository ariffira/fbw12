// module to export
// return fullname
export function fullname(firstName, lastName) {
    return firstName + ' ' + lastName;
}
export function myAge(age) {
   return 'I am ' + age + ' years old'
}

import {arr} from './module1.js'



//////////

export function addTheNumber( ) {
    var sum=0;
    arr.map((item)=>{
        sum = sum + item;
    })
    return sum;
}