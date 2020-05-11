// variable types
let language = 'English'; // String
let isItOnline = true; // Boolean
let moduleNumber = 12; // Number
let money = null; //Empty data

// variable type: const
const institute = 'DCI';

// Setting a value to a let variable
money = '€ ' + 3000;

// Array data Type: list
// New Array way 1
let myArray = ['Arif', 'Adel', 'Asreen'];

// New Array way 2: Promise
let myArray2 = new Array('Arif', 'Adel', 'Asreen');

// Display Arrays in console
console.log(typeof myArray) // Returns the type of the variable
console.log(myArray);
console.log(myArray[2]);
console.log(typeof myArray2)
console.log(myArray2);

// Array with nested Arrays
let classInfo;
classInfo = [
    language,
    isItOnline,
    moduleNumber,
    institute,
    money,
    myArray, // Nested Array
    myArray3 = ['One', 'Two', 'Three'], // New Array declared inside an Array
    myName = 'Giampaolo' // New variable declared inside the Array
];
console.log(classInfo);

// typeof returns as "object" also arrays and null variables
let a = null;
let b = [1, 2, 3];

console.log(typeof a);
console.log(typeof b);

// Object is a Map/blueprint of anything
/**
 * object {
 * key: value, 
 * key: value, 
 * key: value
 * }
 * 
 * Keys are some kind of variables inside the object which should be unique inside the object
 */

let myObject = {
    companyName: 'Digital Career Institute'
};
console.log(myObject);

let myObject2 = {
    companyName: 'DCI'
};
console.log(myObject2);