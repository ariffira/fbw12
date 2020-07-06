let random1 = Math.floor(Math.random() * 10) + 1;
console.log(random1);

let random2 = Math.floor(Math.random() * 11);
console.log(random2);

let max = 1000;
let min = 300;
let range = Math.floor(Math.random() * (max - min + 1) + min);

console.log(range);

let myArray = [ 'Peter', 'Daniel', 'Khaled' , 'Cagri', 'Adel', 'Arif', 'Chuling', 'Sujatha', 'Giampaolo', 'Jessica', 'Mohammed', 'Juan', 'Asreen'];
console.log(myArray);

myArray.reverse();
console.log(myArray);

console.log(myArray.slice(4, 7));

myArray.splice(2, 5);
console.log(myArray);

myArray.unshift('Dominik');
console.log(myArray);

delete myArray[0];
console.log(myArray);

myArray.unshift('Dominik');
console.log(myArray);

myArray.shift();
myArray.unshift('Steffen');
console.log(myArray);

myArray.splice(1, 1, 'Dominik');
console.log(myArray);

myArray.sort();
console.log(myArray);

myArray.pop();
myArray.shift();
myArray.pop();
myArray.shift();
console.log(myArray);

let secondArray = ['New unkown classmates']

let dci = myArray.concat(secondArray);
console.log(dci);

let stringify = dci.toString();
console.log(stringify);

console.log(stringify.length);
console.log(stringify.indexOf('Juan'));

let indexes = stringify.length;
console.log(indexes);
console.log(typeof indexes);

console.log(indexes.toString());
console.log(typeof indexes.toString());