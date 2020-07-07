

function erase() {
    calc.displayResult.value = "";
}

function calculate(result){
    calc.displayResult.value=calc.displayResult.value + result;
}
function remove(str){
    calc.displayResult.value=(str.substring(0, str.length - 1));
}