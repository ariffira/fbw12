let test = 0;
while(test < 15) {
    console.log('Hello!');
    whileLoop.innerHTML += `${1 + test} `;
    test++;
};

while(test < 100) {
    console.log(Math.random());
    test = test + 2;
};

/*
while(test > 0) {
    console.log('decreased');
    test = test - 1;
    whileLoop.innerHTML += '<br>' + test + ' ';
}
*/

function set(value) {
    test = value;

    if(loop2.innerHTML != ' ') {
        loop2.innerHTML = value;
    }

    while(test < 100) {
        test++
        loop2.innerHTML += '<br>' + test;
    }
};