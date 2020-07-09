//create promise
let myPromise = new Promise(function(resolve, reject) {
    resolve(10); //then(resolve)
    reject(); //catch(reject)
});
//calling promise
myPromise
    .then(addition)
    .then(multiplication)
    .then(divide)
    .then(subtraction)
    .then(reminder)
    .then(increment)
    .then(decrement)
    .then(function() {
        console.log('function inside then')
    })
    .then(() => console.log('resolve by arrow function'))
    .catch();

function addition(num) {
    console.log('Received: ', num);
    num = num + 5;
    console.log('Result addition: ', num);
    return num;
}

function multiplication(num) {
    console.log('Received: ', num);
    num = num * 10;
    console.log('Multiplication: ', num)
    return num;
}

function divide(num) {
    console.log('Received: ', num);
    num = num / 3;
    console.log('Divide by 3: ', num)
    return num;
}

function subtraction(num) {
    console.log('Received: ', num);
    num = num - 3;
    console.log('subtraction by 3: ', num)
    return num;
}

function reminder(num) {
    console.log('Received: ', num);
    num = num % 3;
    console.log('reminder by 3: ', num)
    return num;
}

function increment(num) {
    console.log('Received: ', num);
    num++;
    console.log('increment: ', num)
    return num;
}

function decrement(num) {
    console.log('Received: ', num);
    num--;
    console.log('decrement : ', num)
    return num;
}