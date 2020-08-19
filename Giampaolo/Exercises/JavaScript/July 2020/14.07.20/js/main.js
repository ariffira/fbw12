class Patient {
    constructor(firstName, secondName , age, gender, country, job, diabete, diabeteStarted, blood, medicines, regularMedicines, allergies, allergiesType, email, password, sosNumb) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.gender = gender;
        this.country = country;
        this.job = job;
        this.diabete = diabete;
        this.diabeteStarted = diabeteStarted;
        this.blood = blood;
        this.medicines = medicines;
        this.regularMedicines = regularMedicines;
        this.allergies = allergies;
        this.allergiesType = allergiesType;
        this.email = email;
        this.password = password;
        this.sosNumb = sosNumb;
    }
}

let createPatientData = (e) => {
    e.preventDefault();
    let firstName = form.Name.value;
    let secondName = form.Surname.value;
    let age = form.Age.value;
    let gender = form.Gender.value;
    let country = form.Country.value;
    let job = form.Job.value;
    let diabete = form.Diabete.value;
    let diabeteStarted = form.SymptomsStarted.value;
    let blood = form.Blood.value;
    let medicines = form.Medicines.value;
    let regularMedicines = form.RegularMedicines.value;
    let allergies = form.Allergies.value;
    let allergiesType = form.AllergiesPositive.value;
    let email = form.Email.value;
    let password = form.Password.value;
    let sosNumb = form.EmergencyNumber.value;

    console.log(firstName, secondName ,age, gender, country, job, diabete, diabeteStarted, blood, medicines, regularMedicines, allergies, allergiesType, email, password, sosNumb);

    let patient = new Patient(firstName, secondName ,age, gender, country, job, diabete, diabeteStarted, blood, medicines, regularMedicines, allergies, allergiesType, email, password, sosNumb);
    console.log(patient)

    localStorage.setItem("Patient", JSON.stringify(patient))

    document.getElementsByTagName('body')[0].innerHTML = `
    <h1>Your Informations has been sent</h1>
    `

    setTimeout(() => {
        window.location.href = 'submitted.html';
    }, 2500);
}

console.log(form.Diabete.value)

let disableForm = () => {
    if (form.Diabete.value === 'Positive') {
        symptomsDate.disabled = false;
        symptomsDate.required = true;
    } else {
        symptomsDate.disabled = true;
        symptomsDate.required = false;
    }
}

let disableFormMedicine = () => {
    if (form.Medicines.value === 'Taking') {
        label1.style.display = 'initial';
        form.RegularMedicines.style.display = 'initial';
        form.RegularMedicines.required = true;
    } else {
        label1.style.display = 'none';
        form.RegularMedicines.style.display = 'none';
        form.RegularMedicines.required = false;
    }
}

let disableFormAllergie = () => {
    if (form.Allergies.value === 'Allergic') {
        label2.style.display = 'initial';
        form.allergieYes.style.display = 'initial';
        form.allergieYes.required = true;
    } else {
        label2.style.display = 'none';
        form.allergieYes.style.display = 'none';
        form.allergieYes.required = false;
    }
}

submitButton.addEventListener('click', createPatientData)