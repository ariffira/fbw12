// JS object
let users = [
  {
    id: 1,
    name: 'Arif',
    age: 32
  },
  {
    id: 2,
    name: 'Khaled',
    age: 30
  }
];


console.log(users);
//saving user Array Data using localStorage
// setItem(FileName as key, value: what need to save)
// covert JS object into JSON object
let dataForSave = JSON.stringify(users);
localStorage.setItem('userFile', dataForSave);
// Read the file after save
let fileData = localStorage.getItem('userFile');
// convert JSON object to JS object
let dataFromLocalStorage = JSON.parse(fileData);
console.log(dataFromLocalStorage);
document.write(dataFromLocalStorage[0].name);


function fun1(){
  window.location.href = '/index2.html';
}


