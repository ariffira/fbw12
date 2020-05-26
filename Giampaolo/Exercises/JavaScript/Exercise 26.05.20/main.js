//* Exercide 1

for (let i = 0; i <= 100; i = i + 2) {
    result.innerHTML += i + ' ';
};

for (let x = 1; x <= 100; x = x + 2) {
    result2.innerHTML += x + ' ';
};

function check(input) {
    if (input % 2 == 0) {
        console.log('Even');
        evenOdd.innerHTML = 'Even';
    } else {
        console.log('Odd');
        evenOdd.innerHTML = 'Odd';
    }
};

//* Exercide 2
let x = 0;

for (let n = 0; n < 100; n++) {
    x = n + n;
    n = x;
    if (n > 100) { break; }
    test.innerHTML += n + ' ';
};

//* Exercide 3

let value, a = 0, b = 1;

for(let i = 0; i < 9; i++) {
    value = b;
    b = b + a;
    a = value;
    sum.innerHTML += value + ' ';
};

// Array method
let fibArray = [0, 1];

for (i = 2; i < 11; i++) {
    console.log(i)
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    fib.innerHTML += `${fibArray[i]} `;
};

for (i = 0; i < 11; i++) {
    console.log(i);
    if(i < 2) {
        fib2.innerHTML += fibArray[i] + ' ';
    } else {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        fib2.innerHTML += `${fibArray[i]} `;
    };
};