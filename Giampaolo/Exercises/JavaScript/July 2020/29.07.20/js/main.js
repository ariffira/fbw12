let isMomHappy = true;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    }
);

// call our promise
let askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};

askMom();

// 2nd promise
// let showOff = function (phone) {
//     return new Promise(
//         function (resolve, reject) {
//             let message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';

//             resolve(message);
//         }
//     );
// };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let makeScore = () => {
    let score = new Promise((resolve, reject) => {
        let myScore = Math.floor(Math.random() * 11);
        result.innerHTML = myScore

        if (result.innerHTML >= 5) {
            resolve('Congratulations, your score is high, You won!');
        } else {
            reject('The score is too low, you lost!');
        }
    })

    score.then(message => (alert(message), announce.innerHTML++))
    .catch(error => alert(error))
};


let a = 1;
let resultTest;
let test = new Promise((resolve, reject) => {
    resultTest = a + 1
    if (resultTest == 2) {
        resolve('Correct')
    } else {
        reject('Wrong')
    }
})

let conditionA = new Promise((resolve, reject) => {
    if (resultTest != 2) {
        resolve('2nd step is correct')
    } else {
        reject('2nd step is wrong')
    }
})

test
.then(message => console.log(message))
.then(conditionA)
.catch(error => console.log(error))
.finally(console.log('My Promise Message'))