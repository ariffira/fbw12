let PatientDataArray = JSON.parse(localStorage.getItem('PatientData'));

if (PatientDataArray == null) {
    PatientDataArray = [{email: '-',password: '-'}];
}

console.log(PatientDataArray)

function signIn(e){
    e.preventDefault();
    var email= e.target.userEmail.value;
    var pass= e.target.userPassword.value;
    if (email == '' && pass == ''){
        textid.innerHTML = 'try again...!';
    }else {
        for(let i=0; i<PatientDataArray.length; i++){
            if(PatientDataArray[i].email == email){

                localStorage.setItem('sendLoginPatient',i);
                window.location.href = '/patient.html';
                break;
            }
            else if(PatientDataArray[i].password == pass){

                localStorage.setItem('sendLoginPatient',i);
                window.location.href = '/patient.html';
                break;
            }
            else{
                textid.innerHTML = 'not found, try again...!';
            }
        }
    }
}

function signup() {
    window.location.href = '/signup.html';
}