// let picture = ['living-room', 'bathroom', 'kitchen', 'balkon'];

// for (let i in picture) {
//     document.getElementById("pic").innerHTML += `<div><h3>${picture[i]}</h3><img src="image/${picture[i]}.jpg"  id="${picture[i]}"></div>`;

// }
// for (let i in picture) {
//     document.getElementById("option").innerHTML += `<a href="#${picture[i]}"> ${picture[i]}</a> |`;

// }

// let discreption = ['living space is 35', 'therd floor', 'one bathroom', 'one Balkon'];


// for (let i of discreption) {
//     document.getElementById("discreption").innerHTML += `<li>${i}</li>`;

// }
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.getElementById('even').innerHTML += `${i} `;
//     } else {
//         console.log(i);
//         document.getElementById('odd').innerHTML += `${i} `;
//     }
// }

// function evenOdd() {
// let x = prompt('check your number if it is odd or even');
//     let x = Number(document.getElementById('number').value);

//     if (x % 2 == 0) {
//         console.log('even number');
//         document.getElementById('result').innerHTML = `even number `;
//     } else {
//         console.log('odd number');
//         document.getElementById('result').innerHTML = `odd number `;
//     }
// }
// let result = 0;
// for (result; result < 50; ++result) {
//     result += result;
//     console.log(result);
//     document.getElementById('summation').innerHTML += `${result} `;
// }
// let n = 1,
//     m = 0,
//     f;
// for (let i = 0; i < 20; i++) {
//     f = n;
//     n += m;
//     m = f;
//     document.getElementById('Fibonacci').innerHTML += `${f} `;
// }



// function fact(num) {
//     if (num == 1)
//         return num;
//     return num * fact(num - 1);
// }

// function factre() {
//     document.getElementById('result').innerHTML = fact(document.getElementById('number').value);
// }

// function expo(num, pow) {
//     if (pow == 1)
//         return num;
//     return num * expo(num, pow - 1);
// }

// function exopre() {
//     document.getElementById('result1').innerHTML = expo(document.getElementById('number1').value, document.getElementById('pow').value);
// }


for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        document.getElementById('summation').innerHTML += `+`;

    }
    document.getElementById('summation').innerHTML += `<br>`;
}
document.getElementById('summation').innerHTML += `<hr>`;
for (let i = 0; i <= 6; i++) {
    for (let j = 6; j >= i; j--) {
        document.getElementById('summation').innerHTML += `1`;

    }
    document.getElementById('summation').innerHTML += `<br>`;
}
document.getElementById('summation').innerHTML += `<hr>`;
for (let i = 0; i < 7; i++) {
    if (i < 4)
        for (let j = 0; j <= i; j++) {

            document.getElementById('summation').innerHTML += `0`;

        }
    else
        for (let j = 4; j >= i - 2; j--) {

            document.getElementById('summation').innerHTML += `0`;

        }
    document.getElementById('summation').innerHTML += `<br>`;
}