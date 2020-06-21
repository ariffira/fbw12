//******** the Sum Of digits function*********
function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));//12.3
}


function resultS() {
    let x = eval(numB.value);
    document.getElementById("sumId").innerHTML = `  The Summation of digits ${x} is  : ${sumOfDigits(x)}`;
}
//******** the power function*********
function resultPow(num1, num2) {
    num1 = eval(numB2.value);
    num2 = eval(numB3.value);
    document.getElementById("powerId").innerHTML = `The result of the ${num1} power ${num2}  : ${pow(num1, num2)}`;
};

function pow(num1, num2) {
    if (num2 == 0) {
        return 1;
    }
    return num1 * pow(num1, num2 - 1)
}
//******** the Factorial function*********
function factorial(x) {
    if (x === 0) { return 1; }
    else {
        return x * factorial(x - 1);
        ;
    }
}
function resultF() {
    x = eval(numB4.value);
    document.getElementById("factId").innerHTML = `  The factorial of ${x}! is  : ${factorial(x)}`;
}
console.log(factorial(5));


//******** the recursive function*********
function addResult(n1) {
    n1 = eval(n1)
    document.getElementById("addId").innerHTML = `  The Recursive of ${n1} is  :  ${recursive(n1)}`;
    function recursive(num1) {
        if (num1 == 1) {
            return 1;
        }
        return num1 + recursive(num1 - 1)
    }
}

//******** display $ *********
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        ss.innerHTML += '$';
    }
    ss.innerHTML += '<br>';
}

//******** display # *********
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        ss1.innerHTML += '#';
    }
    ss1.innerHTML += '<br>';
}

//******** display @ *********
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        ss2.innerHTML += '@';
    }
    ss2.innerHTML += '<br>';
};

//******** display 0 *********
for (let i = 1; i < 10; i++) {
    if (i <= 5) {
        for (let j = 0; j < i; j++) {
            ss3.innerHTML += `0`;
        }
        ss3.innerHTML += `<br>`;
    }
    else {
        for (let j = 10; j > i; j--) {
            ss3.innerHTML += `0`;
        }
        ss3.innerHTML += `<br>`;
    }
};
//******** display 0 *********
let iconR = '<i class="fab fa-apple"></i>';
for (let i = 1; i < 10; i++) {
    if (i <= 5) {
        for (let j = 0; j < i; j++) {
            ss4.innerHTML += iconR;
        }
        ss4.innerHTML += `<br>`;
    }
    else {
        for (let j = 10; j > i; j--) {
            ss4.innerHTML += iconR;
        }
        ss4.innerHTML += `<br>`;
    }
};

let iconA = '<i class="fas fa-arrow-alt-circle-left"></i>';
let iconB = '<i class="fas fa-arrow-alt-circle-right"></i>';
for (let i = 1; i < 10; i++) {
    if (i <= 5) {
        for (let j = 0; j < 8; j++) {
            if (j == 4) { ss5.innerHTML += `Hello`; }
            ss5.innerHTML += iconA;
        }
        ss5.innerHTML += `<br>`;
    }
    else {
        for (let j = 8; j > i; j--) {
            ss5.innerHTML += iconB;
        }
        ss5.innerHTML += `<br>`;
    }
};
// Matrix from JS for loop
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i==j)
        {
            ss6.innerHTML +=1;}
            else{
                ss6.innerHTML +=0;

            }          
        }
    ss6.innerHTML += '<br>'
}


