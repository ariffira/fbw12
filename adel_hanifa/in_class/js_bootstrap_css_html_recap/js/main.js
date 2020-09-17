let users = JSON.parse(localStorage.getItem('usersLocal'));

if (users == null) {
    users = [];
}
console.log(users)

let currentUserIndex = JSON.parse(localStorage.getItem('userscurrent'));

if (currentUserIndex == null) {
    users =  'nouser';
}


function signUpUser() {
    if (emailID.value == '' || pswID.value == '' || userNameID.value == '') {
        errorMSG.innerHTML = `
            <div class="alert alert-danger" role="alert">
            Please fill all the field
            </div>
            `;
    }
    else {
        userObj = {
            email: emailID.value,
            password: pswID.value,
            userName: userNameID.value
        }
        console.log(userObj)
        users.push(userObj)
        console.log(users)

        localStorage.setItem("usersLocal", JSON.stringify(users));
        alert('You are successfully registered......! log in now to see your data')
        window.location.href = '/login.html';
    }
    
}

function logInUser() {
    if (emailID.value == '' || pswID.value == '') {
        errorMSG.innerHTML = `
            <div class="alert alert-danger" role="alert">
            Please fill all the field
            </div>
            `;
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (emailID.value == users[i].email && pswID.value == users[i].password) {
                currentUserIndex = i;
                localStorage.setItem("userscurrent", JSON.stringify(i));
                window.location.href = '/profile.html';
                break
            }
        }
        if (currentUserIndex == 'nouser') {
            errorMSG.innerHTML = `
            <div class="alert alert-danger" role="alert">
            no users found please check your inputs or try to sign up
            </div>
            `;
        }
    }
}

function showUser(){
    if (currentUserIndex == 'nouser') {
        userInfoID.innerHTML = `
            <div class="alert alert-danger" role="alert">
            First you need to log in your self. Please log in .......! go to <a href="login.html">log-in page</a>
            </div>
            `;
    }
    else {
        console.log(currentUserIndex)
        userInfoID.innerHTML = `
        <div>
        <h3>UserName: ${users[currentUserIndex].userName}</h3>
        <h3>Email: ${users[currentUserIndex].email}</h3>
        <button type="submit" class="btn btn-danger" onclick="logOutUser()">Log out</button>
        <br><br>
        </div>
        <h2>Your Articles:</h2>
        <div id="showAllAriclesID"> </div>
        <h6 class="text-center">to add an Article 
            <button type="button" data-toggle="modal" data-target="#exampleModal">
                click here
            </button>
        </h6>`;

        showArticles();
    }
}

function logOutUser(){
    currentUserIndex = 'nouser';
    localStorage.setItem("userscurrent", JSON.stringify(currentUserIndex));
    showUser();
}

function showArticles() {
    if (users[currentUserIndex].article){
        let allArticles = '';
        users[currentUserIndex].article.map((item, index) => {
            allArticles = allArticles + `
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                <h4>${item.title}</h4>
                <h6 class="text-justify">${item.body}</h6>
                <hr>
                <p class="text-right article-date">${item.date}</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="deleteArticle(${index})">
                    <span aria-hidden="true">&times;</span>
              </button>
            </div>`;
        })
        showAllAriclesID.innerHTML = allArticles;
    }
    else {
        showAllAriclesID.innerHTML = `<h6 class="text-center">You have no Articles in your profile</h6>`
    }
}

function saveArticle(x, y){
    if (users[currentUserIndex].article){
  
    }
    else {
        users[currentUserIndex].article = [];
    }
    let articleObj = {title : x , body : y, date : addthedate()};
    users[currentUserIndex].article.push(articleObj)
    localStorage.setItem("usersLocal", JSON.stringify(users));
    showArticles();
}

function addthedate(){
    var date = new Date();
    var time = date.toDateString() + ' - ' + date.toLocaleTimeString();
    return time;
}

function deleteArticle(index) {
    console.log(index)
    if (users[currentUserIndex].article.length == 1){delete users[currentUserIndex].article}
    else {users[currentUserIndex].article.splice(index, 1);}
    localStorage.setItem("usersLocal", JSON.stringify(users));
    showArticles();
}
