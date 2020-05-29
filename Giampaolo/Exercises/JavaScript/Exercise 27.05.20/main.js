let pow = (num1, num2) => {
    let result = 1;
    for (i = 0; i < num2; i++) {
        result *= num1;
    };
    console.log(result);
    return result;
};

pow(2, 4);

///////////////////////////////////////////////////////////////////////////////////////

//Recursive way of function
// 2 power 4 = 2*2*2*2 = 16
// num1 = base/main number
// num2 = how many times to multiply(pow)
// num1 power num2 = num1 * num1 .........* num2 times multiply
function pow3(num1, num2) {
    //let result = 1;
    // for(let i = 0; i<num2; i++) {
    //     result = result*num1;
    // }
    //return result;
    if (num2 == 1) {
        return num1;//2
    }
    return num1 * pow(num1, num2 - 1)
}
console.log(pow3(4, 2));

//Recursive way of function
// 2 power 4 = 2*2*2*2 = 16
// num1 = base/main number
// num2 = how many times to multiply(pow)
// num1 power num2 = num1 * num1 .........* num2 times multiply
function pow4(num1, num2) {
    //let result = 1;
    // for(let i = 0; i<num2; i++) {
    //     result = result*num1;
    // }
    //return result;
    if (num2 == 1) {
        return num1;//2*1
    }
    /**
     * 2* pow(2, 3-1)
     * 2* 2 * pow(2,1)
     * 2* 2 * 2
     */
    return num1 * pow4(num1, num2 - 1); //looping
}
console.log(pow4(2, 3));

///////////////////////////////////////////////////////////////////////////////////////

//* Exercise 1
let pow2 = (num1, num2) => {
    if (num2 == 1) {
        return num1;
    }

    return resultPow.innerHTML = num1 * pow2(num1, num2 - 1);
};

//* Exercise 2
let fuctorial = (userInput) => {
    if (userInput == 1) {
        return userInput;
    }

    return result.innerHTML = userInput * fuctorial(userInput - 1);
};

//* Exercise 3
let exponent = (value1, value2) => {
    if (value2 == 0) {
        return 1;
    }

    return resultExponent.innerHTML = value1 * exponent(value1, value2 - 1);
};

//* Exercise 4
//* Loop 1
let loopTest = (val) => {
    if (loopResult.innerHTML != ' ') {
        loopResult.innerHTML = ' ';
    }

    for (i = 0; i <= 5; i++) {
        for (j = i; j >= 0; j--) {
            loopResult.innerHTML += val;
        };
        loopResult.innerHTML += '<br>';
    };

    /** or
    for (i = 0; i <= 5; i++) {
        for (j = 0; j <= i; j++) {
            loopResult.innerHTML += val;
        };
        loopResult.innerHTML += '<br>';
    };
    */

    /**
     * for (i = 0; i <= 5; i++) { //i +1 per each loop
     * 
     * 
     **  First expression
        for (j = 0; j <= i; j++)         { 0 (j <= 0(i);) +1}  times loop
            /////
            1 time {j = 0; j <= 0(i); j++}
            *.innerHTML += @; 
            {in the HTML : @}
            -------
                2 time {j = 0; j <= 1(i); j++}
                *.innerHTML += @; 
                ////
                2 time {j = 1; j <= 1(i); j++}
                *.innerHTML += @; 
                {in the HTML : @@}
                    -------
                    3 time {j = 0; j <= 2(i); j++}
                    *.innerHTML += @;
                    ////
                    3 time {j = 1; j <= 2(i); j++}
                    *.innerHTML += @;
                    ////
                    3 time {j = 2; j <= 2(i); j++}
                    *.innerHTML += @;
                    {in the HTML : @@@}
                        -------
                        4 time {j = 0; j <= 3(i); j++}
                        *.innerHTML += @;
                        /////
                        4 time {j = 1; j <= 3(i); j++}
                        *.innerHTML += @;
                        /////
                        4 time {j = 2; j <= 3(i); j++}
                        *.innerHTML += @;
                        /////
                        4 time {j = 3; j <= 3(i); j++}
                        *.innerHTML += @;
                        {in the HTML : @@@@}
                            -------
                            5 time {j = 0; j <= 4(i); j++}
                            *.innerHTML += @;
                            ////
                            5 time {j = 1; j <= 4(i); j++}
                            *.innerHTML += @;
                            ////
                            5 time {j = 2; j <= 4(i); j++}
                            *.innerHTML += @;
                            ////
                            5 time {j = 3; j <= 4(i); j++}
                            *.innerHTML += @;
                            ////
                            5 time {j = 4; j <= 4(i); j++}
                            *.innerHTML += @;
                            {in the HTML : @@@@@}
        };


     ** Second Expression
        *.innerHTML += '<br>'; 
        {in the HTML : result of the first expression + <br>}
    };
    
     * 
     * 
     */
};

//* Loop 2
let loopTest2 = (val) => {
    if (loopResult2.innerHTML != ' ') {
        loopResult2.innerHTML = ' ';
    }
    for (i = 5; i >= 0; i--) {
        for (j = 0; j <= i; j++) {
            loopResult2.innerHTML += val;
        };
        loopResult2.innerHTML += '<br>';
    };
};

//* Loop 3
let loopTest3 = (val) => {
    if (loopResult3.innerHTML != ' ') {
        loopResult3.innerHTML = ' ';
    }

    for (i = 0; i <= 5; i++) {
        for (j = i; j >= 0; j--) {
            loopResult3.innerHTML += val;
        };
        loopResult3.innerHTML += '<br>';
    };

    for (i = 5; i >= 0; i--) {
        for (j = 0; j <= (i - 1); j++) {
            loopResult3.innerHTML += val;
        };
        loopResult3.innerHTML += '<br>';
    };
};

//* Exercise 4
let loopArray = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1]
];

/* //* Way 1
function loopTest4() {
    for (var i = 0; i < loopArray.length; i++) {
        for (var j = 0; j < loopArray[i].length; j++) {
            loopResult4.innerHTML += loopArray[i][j];
        }
        loopResult4.innerHTML += '<br>'
    }
};
*/

//* Way 2
let loopTest4 = () => {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (i == j) {
                document.getElementById('loopResult4').innerHTML += 1;
            }
            else {
                document.getElementById('loopResult4').innerHTML += 0;
            }
        }
        document.getElementById('loopResult4').innerHTML += '<br>';
    }
};

//* Exercise 5
let multi = (x, y, operator) => {
    multiRes.innerHTML = eval(x + operator + y);
};

let user = (n) => {
    let person = [
        Giampaolo = {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio',
            country: 'Italy',
            city: 'Duisburg',
            class: 'FBW12'
        },

        Adel = {
            firstName: 'Adel',
            secondName: 'Hanifa',
            country: 'Syria',
            city: 'Mönchengladbach',
            class: 'FBW12'
        },

        Arif = {
            firstName: 'Arif',
            secondName: 'Islam',
            country: 'Bangladesh',
            city: 'Essen',
            class: 'FBW12'
        },

        Khaled = {
            firstName: 'Khaled',
            secondName: 'Khatib',
            country: 'Syria',
            city: 'Dormagen',
            class: 'FBW12'
        },

        Jessica = {
            firstName: 'Jessica',
            secondName: 'De Rosa',
            country: 'Argentina',
            city: 'Düsseldorf',
            class: 'FBW12'
        }
    ];

    userName.innerHTML = `${person[n].firstName} ${person[n].secondName}`;
    userCountry.innerHTML = `<strong>Country:</strong> ${person[n].country}`;
    userCity.innerHTML = `<br><strong>City:</strong> ${person[n].city}`;
    userClass.innerHTML = `<br><strong>Class:</strong> ${person[n].class}`
};