let fileData = localStorage.getItem('usersFile');
let users = JSON.parse(fileData);

console.log(users)

function signIn(){
    var email= userEmail.value;
    var pass= userPassword.value;
    if (email == '' || pass == ''){
        textid.innerHTML = 'try again...!';
    }else {
        for(let i=0; i<users.length; i++){
            if(users[i].email == email && users[i].password == pass){
                textid.innerHTML = 'you are '+ users[i].adminCustomer;
                
                let fileDataSendLoginUser =  JSON.stringify(users[i]);
                localStorage.setItem('sendLoginUser', fileDataSendLoginUser);
                
                gotoPage (users[i]);
                break;
            }
            else{
                textid.innerHTML = 'not found, try again...!';
            }
        }
    }
}

function gotoPage(a){
    if (a.adminCustomer == 'admin'){
        window.location.href = '/admin';
    }
    else {
        window.location.href = '/user';
    }
}


