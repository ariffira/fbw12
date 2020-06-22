// JS Scope

// Global Scope
let companyName = 'DCI';

function school() {
  // Local Scope
  let companyAddress = 'Hüttenstraße 100';
  return 'Address: ' + companyAddress + ' <br>Name: ' + companyName;
};

console.log(school());

function school2() {
  let companyAddress = 'Mindenstraße 30';
  return 'Company 2: ' + companyAddress + ' Name: ' + companyName;
}

console.log(school2());