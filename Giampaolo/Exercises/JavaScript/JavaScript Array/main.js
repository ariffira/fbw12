// variable type: let
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
console.log(myArray);
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