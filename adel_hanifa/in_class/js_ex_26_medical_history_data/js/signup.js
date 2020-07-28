let PatientDataArray = JSON.parse(localStorage.getItem('PatientData'));

if (PatientDataArray == null) {
    PatientDataArray = [];
}

console.log(PatientDataArray)



function createPatientData(e) {
    e.preventDefault();
    //    console.log(e);
    // console.log(e.target);
    //    console.log(e.target.firstName)
    //    console.log(e.target.firstName.value)
    let data = e.target;

    let patientOpject = {
        firstName: data.firstName.value,
        lastName: data.lastName.value,
        birthday: data.birthday.value,
        gender: data.gender.value,
        age: data.age.value,
        country: data.country.value,
        address: {
            addressStreet: data.addressStreet.value,
            addressNr: data.addressNr.value,
            addressPlz: data.addressPlz.value,
            addressCity: data.addressCity.value
        },
        phoneNumber: data.phoneNumber.value,
        jobTitle: data.jobTitle.value,
        email: data.email.value,
        password: data.password.value,
        emergencyContact: data.emergencyContact.value,
        blood: data.blood.value,
        diabetics: {
            yesno: data.diabeticsYN.value,
            info: data.diabeticsYear.value
        },
        allergy: {
            yesno: data.allergyYN.value,
            info: data.allergyWhich.value
        },
        medicine: {
            yesno: data.medicineYN.value,
            info: data.medicineWhich.value
        },
        other: getSselectedOPTION(),
        symptoms: getCheckedBOX() 
    }

    console.log(patientOpject);

    PatientDataArray.push(patientOpject);
    console.log(PatientDataArray);
    // save data inside local storage

    localStorage.setItem("PatientData", JSON.stringify(PatientDataArray));
    alert('You are successfully registered......! log in now to see your data')
    window.location.href = '/index.html';
}

function getSselectedOPTION() {
    var allValue = '';
    var selectedOPTION = allOptionID.getElementsByTagName("OPTION");

    for (var i = 1; i < selectedOPTION.length; i++) {
        if (selectedOPTION[i].selected) {
            allValue = allValue + `<li>${selectedOPTION[i].value}</li>`;
        }
    }

    if (allValue == ''){
        return 'no one selected';
    }
    else {
        return allValue
    }
}

function getCheckedBOX() {
    var allValue = '';
    var checkedBOX = allCheckID.getElementsByTagName("INPUT");

    for (var i = 0; i < checkedBOX.length; i++) {
        if (checkedBOX[i].checked) {
            allValue = allValue + `<li>${checkedBOX[i].value}</li>`;
        }
    }

    if (allValue == ''){
        return 'no one selected';
    }
    else {
        return allValue
    }
}

medicineID.onchange = function () {
    medicineTEXT.disabled = (medicineID.value == 'no');
}

diabeticsID.onchange = function () {
    diabeticsTEXT.disabled = (diabeticsID.value == 'no');
}

allergyID.onchange = function () {
    allergyTEXT.disabled = (allergyID.value == 'no');
}

emailID.onkeyup = function() {
    var x = emailID.value;

    console.log(x)

    try {
        if (x.length == 0) throw 'Please Enter Again' 
        
        for (let i = 0; i < PatientDataArray.length; i++) {
            if(PatientDataArray[i].email == x) throw 'this email already exists try to log in or use another email'
        }
        emailERR.innerHTML = ''
     }
     catch(error) {
         console.log(error)
        emailERR.innerHTML = error ;// if anything failed
     }
}

healthCardID.onkeyup = function() {
    var x = healthCardID.value;
    x = x.split('');
    for (let i = 0; i < x.length; i++) {
        x[i] = Number(x[i]);
    }
    console.log(x)

    try {
        if (x.length == 0) throw 'Please Enter Again' 
        if(isNaN(x[0])== false) throw 'The first input should be character'
        for (let i = 1; i < x.length; i++) {
            if(isNaN(x[i])) throw 'Only the first input should be character'
        }
        while(x.length < 10) throw 'The input should be one character and nine numbers'
        for (let i = 0; i < PatientDataArray.length; i++) {
            if(PatientDataArray[i].password == healthCardID.value) throw 'this number already exists check your number'
        } 
        if (x.length > 10) throw 'The input should be max 10'
        healthCardERR.innerHTML = ''
     }
     catch(error) {
         console.log(error)
        healthCardERR.innerHTML = error ;// if anything failed
     }
}