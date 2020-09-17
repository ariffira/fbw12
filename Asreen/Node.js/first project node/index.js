console.log('hello ');
// normal function
function myFunc(msg){
    console.log(msg)
}
myFunc('My Name is Asreen')

// function as global
let test = function () {
    console.log('hi');
 };
 module.exports.test=test;
 this.test();
// function with conditions
 function testTheNum(x,y){
     if (x==y) console.log(`the first num ${x} is equal to the second num ${y}`)
     else if(x<y) console.log(`the first num ${x} is less than the second num ${y}`)
     else console.log(`the first num ${x} is bigger than the second num ${y}`)
 }
 testTheNum(2,2) ;
 testTheNum(10,100);
 testTheNum(18,3);
