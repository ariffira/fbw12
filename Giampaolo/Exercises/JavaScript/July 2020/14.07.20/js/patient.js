let myPatient = JSON.parse(localStorage.getItem('Patient'));
console.log(myPatient)

let showPatientInfo = (patient) => {
    mainSubmitted.innerHTML = 
    ` <table>
    <tbody>
        <tr>
            <th>Name:</th>
            <td>${patient.firstName}</td>
        </tr>
        <tr>
            <th>Surname</th>
            <td>${patient.secondName}</td>
        </tr>
        <tr>
            <th>Age:</th>
            <td>${patient.age}</td>
        </tr>
        <tr>
            <th>Gender:</th>
            <td>${patient.gender}</td>
        </tr>
        <tr>
            <th>Country:</th>
            <td>${patient.country}</td>
        </tr>
        <tr>
            <th>Job:</th>
            <td>${patient.job}</td>
        </tr>
        <tr>
            <th>Diabete Status:</th>
            <td>${patient.diabete}</td>
        </tr>
        <tr>
            <th>Positive since:</th>
            <td>${patient.diabeteStarted}</td>
        </tr>
        <tr>
            <th>Blood Pressure:</th>
            <td>${patient.blood}</td>
        </tr>
        <tr>
            <th>Regular Medicines</th>
            <td>${patient.medicines}</td>
        </tr>
        <tr>
            <th>Medicines name:</th>
            <td>${patient.regularMedicines}</td>
        </tr>
        <tr>
            <th>Allergies:</th>
            <td>${patient.allergies}</td>
        </tr>
        <tr>
            <th>Allergie Type:</th>
            <td>${patient.allergiesType}</td>
        </tr>
        <tr>
            <th>E-mail:</th>
            <td>${patient.email}</td>
        </tr>
        <tr>
            <th>Password</th>
            <td>${patient.password}</td>
        </tr>
        <tr>
            <th>Emergency Number:</th>
            <td>${patient.sosNumb}</td>
        </tr>
        <tr>
            <th colspan="2"><br><button class="myButton" type="button" onclick=" window.location.href = 'index.html'">Back to form</button></th>
        </tr>
    </tbody>
    </table>
    `
}

showPatientInfo(myPatient);