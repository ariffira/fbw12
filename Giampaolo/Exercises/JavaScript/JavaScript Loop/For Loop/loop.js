/*
 * Loop: Repeating the code
 * types:
 * 1. For loop
 */
/* for(initialize;end condition; increment/decrement) {
    ....the code
}
*/
//initialize variable//give a variable value
let i = 1;
for(i; i < 6; i++) {
    // code need to repeat
    console.log('I am Number:' + i);
}
for(let j = 5; j > 0; j--) {
    // code need to repeat
    console.log('I am Number:' + j);
}
for(i = 0 ; i < 25;) {
    // code need to repeat
    console.log('I am Number:' + i); 
    i=i+5;
}