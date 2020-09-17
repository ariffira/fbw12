let fileData = localStorage.getItem('usersFile');
let users = JSON.parse(fileData);

console.log(users)

function signUp(){
    var newUser = {
        username: uUserNameID.value,
        age: uAgeID.value,
        adminCustomer: uAdminCustomerID.value,
        country: uCountryID.value,
        email: uEmailID.value,
        password: uPasswordID.value
    };
    if (newUser.username != '' && 
        newUser.age != '' && 
        newUser.adminCustomer != '' &&
        newUser.country != '' && 
        newUser.email != '' && 
        newUser.password != ''){
            
            if (newUser.adminCustomer == 'admin'){
                var chechAdminCode = prompt('Enter the administrator registration code ');
                while (chechAdminCode != '1234') {
                    chechAdminCode = prompt('Enter the administrator registration code ');
                }
                users.push(newUser);
                sendNewusersArray ();
            }
            else {
                users.push(newUser);
                sendNewusersArray ();
            }

        }
        else {
            textid2.innerHTML = 'Please fill in all fields .......!'
        }

}

function sendNewusersArray() {
    console.log(users)
    let dataForSaveUsers = JSON.stringify(users);
    localStorage.setItem('usersFile', dataForSaveUsers);
    window.location.href = '/login';
}