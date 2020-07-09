let users = [];
let checkStorage = localStorage.getItem('userList');

if (checkStorage)
    users = JSON.parse(localStorage.getItem('userList'))
console.log(users)
    // function addData() {
    //     let newTask = taskId.value;
    //     console.log(newTask);
    //     taskArray.push(newTask); //add new task
    //     taskArray = JSON.stringify(taskArray);
    //     localStorage.setItem('dailyTask', taskArray); //save it
    // }

function SignupUser() {

    userData = {
        userName: document.getElementById('username').value,
        password: document.getElementById('pwd').value,
        eMail: document.getElementById('email').value,
        country: document.getElementById('country').value,
        role: document.getElementById('role').value,
        image: document.getElementById('img').value
    }

    console.log(userData);
    users.push(userData);
    console.log(users);
    let saveData = JSON.stringify(users);
    localStorage.setItem('userList', saveData);
    saved.innerHTML = 'saved';
    setTimeout(function() { window.location.href = 'index.html'; }, 2000);
}
// localStorage.removeItem("userList");

// document.write(`<img src="${users[0].image}" style="width: 300px;">`)

let checkuser = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('pwd').value;



    for (i = 0; i < users.length; i++) {
        if (username == users[i].userName && password == users[i].password) {
            let user = JSON.stringify(users[i]);


            sessionStorage.setItem('user', user)
            sessionStorage.setItem('username', username);
            window.location.href = 'customer.html';

            break;
        } else document.getElementById('warning').innerHTML = 'Wrong user name or password.';
    }
}