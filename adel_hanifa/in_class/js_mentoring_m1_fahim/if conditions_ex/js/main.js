///////////////////////  js_mentoring_m1_if conditions_ex
let var1 = 3;
let var2 = -7;
let var3 = 2;

signOfProduct (var1, var2,var3);

function signOfProduct (a, b,c){
    let result= a*b*c;
    if (result<0){
        document.getElementById("id01").innerHTML = `The sign of ( ${a} * ${b} * ${c} ) = ${result} is -`;
        alert(`The sign of ( ${a} * ${b} * ${c} ) = ${result} is -`);
    }
    else if (result == 0){
        document.getElementById("id01").innerHTML = `The sign of ( ${a} * ${b} * ${c} ) = ${result} is 0`;
        alert(`The sign of ( ${a} * ${b} * ${c} ) = ${result} is 0`);
    }
    else {
        document.getElementById("id01").innerHTML = `The sign of ( ${a} * ${b} * ${c} ) = ${result} is +`;
        alert(`The sign of ( ${a} * ${b} * ${c} ) = ${result} is +`);
       
    }
}

