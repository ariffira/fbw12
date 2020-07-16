// Step 01:
// Create a HTML form which can store below medical history of a patient using JS FORM concept.
// - Use bootstrap design for quick design if you like(not mandatory)
// Form should have at least:
// - patient name(firstname, surname)
// - age
// - gender
// - country
// - job title
// - diabetics  info(ask questions to patient from the form)
//    - Do you have diabetics?
//    - From when? 
// - Blood pressure info
// - Regular medicine that he takes
// - Allergy info
// - email
// -password
// - emergency contact

// Finally, after creating all input inside form onSubmit() send them to javascript function to store correctly inside your file called "PatientData"  in localstorage data
// Show another page all this data user just saved.
// Happy coding :)

myForm.addEventListener('submit', function (e) {
  localStorage.clear();
  e.preventDefault();
  let data = e.target;
  console.log(data);
  let firstName = data.fname.value;
  let lastName = data.sname.value;
  let gender = data.gender.value;
  let diabetics = data.diabetics.value;
  let rMedicine = data.medicine.value;
  let when = data.when.value;
  let age1 = data.age.value;
  let city1 = data.city.value;
  let inputState1 = data.inputState.value;
  let bloodP = data.bloodP.value;
  let inputZip1 = data.inputZip.value;
  let l = document.getElementsByName('allergy');
  console.log(l)
  var checkedValues = [];
  var inputElements = document.getElementsByName('allergy');
  for (var i = 0; i<inputElements.length; ++i) {
    console.log(inputElements[i].checked)
    if (inputElements[i].checked) {
      checkedValues.push(inputElements[i].value) ;
    }
  }
  //let adress = [city1, inputState1, inputZip1];
  console.log(firstName, lastName, age1, city1, inputZip1);
  let arr = [firstName, lastName, age1, gender, city1, inputZip1, city1, inputState1, inputZip1, diabetics, when, bloodP, rMedicine];
   localStorage.setItem('allergyArr',checkedValues);
  console.log(arr);
  localStorage.setItem('myArr', arr);
  // save data inside local storage
  //result.innerHTML = fname.value;
});

function goLoc(){
  window.location.href='info.html';
}