// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName)
  }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();






// Simple functions
console.log('-------------------');

function testAdd() {
  let a = 1;
  let b = 2;
  return a + b;
};

function testSub(a, b) {
  return a - b;
};

let testDiv = function (a, b) {
  return a / b;
};

let testMult = (a, b) => {
  return a * b;
};

function timesFive(num) {
  return num * 5;
}

console.log(`Addition: ${testAdd()}; Subtraction: ${testSub(12, 1)}; Division ${testDiv(8, 2)}; Multiply: ${testMult(2, 6)}`);
console.log(timesFive(7));

// Exercise
let myNum = 34;

function addTen() {
  alert(myNum + 10);
  console.log(myNum + 10);
  return document.getElementById("test").innerHTML = `Result: ${myNum + 10}`;
}

function addTwenty(num) {
  alert(num + 20);
  console.log(num + 20);
  return document.getElementById("test2").innerHTML = `Result: ${num + 20}`;
}

//Exercise
let myTestFunction = (firstName, lastName) => {
  console.log(`My Name is ${firstName} ${lastName}.
${firstName} is ${firstName.length} letters long and ${lastName} is ${lastName.length} letters long.`);

  alert(`My Name is ${firstName} ${lastName}.
${firstName} is ${firstName.length} letters long and ${lastName} is ${lastName.length} letters long.`);

  return `${firstName} ${lastName}`;
}

document.write('<br>' + myTestFunction('Giampaolo', 'Lo Cascio'));

// Exercise
let basePrice = 600;
let finalPrice;

function lowTax() {
  finalPrice = Math.floor(basePrice * 1.12);
  console.log(`Your final price is $${finalPrice}.`)
}

function medTax() {
  finalPrice = Math.floor(basePrice * 1.25);
  console.log(`Your final price is $${finalPrice}.`)
}

function highTax() {
  finalPrice = Math.floor(basePrice * 1.50); // Math.ceil
  console.log(`Your final price is $${finalPrice}.`)
}

function calculate() {
  if (basePrice <= 500) {
    lowTax();
  } else if (basePrice <= 1000) {
    medTax();
  } else {
    highTax()
  };
}

calculate();