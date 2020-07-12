function fact(num) {
    if (num == 1)
        return num;
    return num * fact(num - 1);
}

function factre() {
    document.getElementById('result').innerHTML = fact(document.getElementById('number').value);
}

function expo(num, pow) {
    if (pow == 1)
        return num;
    return num * expo(num, pow - 1);
}

function exopre() {
    document.getElementById('result1').innerHTML = expo(document.getElementById('number1').value, document.getElementById('pow').value);
}