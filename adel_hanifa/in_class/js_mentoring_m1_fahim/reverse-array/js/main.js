///////////////////////  js_mentoring_m1_if conditions_ex
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayRE = reverseArray(array);
function reverseArray(a) {
    let b= [];
    for (let i = a.length; i > 0; i--) {
            b.push(a[i-1]);
    }
    return b;
}
console.log(arrayRE);
document.getElementById("id01").innerHTML += arrayRE;
document.getElementById("id01").innerHTML += '<br>';

///////////////////////////////////////////

let str = "Adel Hanifa";
let strRE = reversestr(str, str.length);
let b = '';

function reversestr(a, aLength) {
    if (aLength == 1){
        return a[aLength-1]
    }
    else {
        return a[aLength-1]+reversestr(a, aLength-1)
    }
}

console.log(strRE);
document.getElementById("id01").innerHTML += strRE;