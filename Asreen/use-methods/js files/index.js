// 1- Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -
let nProduct = [3, -7, 2];
nProduct.map(multiply);

function multiply(){
    let product1 = 1;
    for (let x in nProduct) {
        product1 *= nProduct[x];
    }
    console.log(product1);
    if(product1>0){alert(`The ${product1} is a positive number`)}
    else {alert(`The ${product1} is a negative number`)}
}
