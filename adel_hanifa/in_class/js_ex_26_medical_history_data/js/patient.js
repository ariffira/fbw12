let userLogin = localStorage.getItem('sendLoginPatient');

console.log(userLogin)

let PatientDataArray = JSON.parse(localStorage.getItem('PatientData'));

console.log(PatientDataArray)

let myPatient = PatientDataArray[userLogin];

console.log(myPatient)


checkUserLogin()

myPatientData(myPatient)

function logout() {
  userLogin = 'loginplease';
  localStorage.setItem('sendLoginPatient', JSON.stringify(userLogin));
  window.location.href = '/index.html';
}

function checkUserLogin() {
  if (userLogin == 'loginplease') {
    if (confirm("Press ok to log in")) {
      logout();
    } else {
      checkUserLogin()
    }
  }
}


function myPatientData(data) {
  showDataID.innerHTML = `
  <tr>
    <th>Name:</th><td>${data.firstName} ${data.lastName}</td><th>Gender:</th><td>${data.gender}</td>
  </tr>
  <tr>
    <th>Birthday:</th><td>${data.birthday}</td><th>Age:</th><td>${data.age}</td>
  </tr>
  <tr>
    <th>Address:</th><td colspan="3">${data.address.addressStreet} ${data.address.addressNr}, ${data.address.addressPlz} ${data.address.addressCity} <b>${data.country}</b></td>
  </tr>
  <tr>
    <th>Phone:</th><td>${data.phoneNumber} ${data.lastName}</td><th>Job:</th><td>${data.jobTitle}</td>
  </tr>
  <tr>
    <th>Email: </th><td>${data.email}</td><th>Health card:</th><td>${data.password}</td>
  </tr>
  <tr>
    <th>Emergency Contact:</th><td colspan="3">${data.emergencyContact}</td>
  </tr>
  <tr>
    <th>Blood pressure info:</th><td colspan="3">${data.blood}</td>
  </tr>
  <tr>
    <th>Diabetics:</th><td colspan="3">${checkObj(data.diabetics)}</td>
  </tr>
  <tr>
    <th>Allergy Contact:</th><td colspan="3">${checkObj(data.allergy)}</td>
  </tr>
  <tr>
    <th>Medicine:</th><td colspan="3">${checkObj(data.medicine)}</td>
  </tr>
  <tr>
  <th>Genetic diseases:</th><td>${data.other}</td><th>Your symptoms:</th><td>${data.symptoms}</td>
</tr>
  `;


  function checkObj(x) {
    console.log(x);

    if( x.yesno == 'yes')
      return `<b>Yes</b> ${x.info}`;
      
    else 
      return `<b>No</b> do not have `;   
  }

}


