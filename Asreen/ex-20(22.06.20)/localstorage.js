// Step 01:
// Create a html file call index.html
//  - add top menu with login, sign-up menu
// Step 02:
// - when user click on sign-up: a user sign-up form will display with below Data:
//   username, age, role as admin/customer, country, password, email, picture etc.
// Step 03:
// create JS file which will receive user data from the Form and check them in console.log()
// Step04:
// Save user data inside user Array as an Object value
// Step 05:
// Save this Array using localstorage
// Step 06:
// Now create login Form with email, password
// Step 07:
// If user email and password match with user file from localstorage than he can go to Profile page and user management page
// Step 08:
// Create a condition that user can only see user-management page if role=='admin' else he will be shown a message to be admin
localStorage.clear();
let users = [{
    name: 'arif',
    role: 'admin',
    age: 20,
    country: 'Bangladesh',
    email: 'a11@example.com',
    password: 'user1',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'asreen',
    role: 'admin',
    age: 20,
    country: 'Iraq',
    email: 'aa@aa.com',
    password: 'user2',
    pic: '<img src="picture/avatar2.png" alt="picture" id="pic">'
},
{
    name: 'chuling',
    role: 'customer',
    age: 20,
    country: 'China',
    email: 'a13@example.com',
    password: 'user3',
    pic: '<img src="picture/avatar2.png" alt="picture" id="pic">'

},
{
    name: 'sujatha',
    role: 'customer',
    age: 20,
    country: 'India',
    email: 'a14@example.com',
    password: 'user4',
    pic: '<img src="picture/avatar2.png" alt="picture" id="pic">'
},
{
    name: 'cagri',
    role: 'customer',
    age: 20,
    country: 'Turkey',
    email: 'a15@example.com',
    password: 'user5',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'adel',
    role: 'customer',
    age: 20,
    country: 'Syria',
    email: 'a16@example.com',
    password: 'user6',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'khaled',
    role: 'customer',
    age: 29,
    country: 'Syria',
    email: 'a17@example.com',
    password: 'user7',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'peter',
    role: 'customer',
    age: 20,
    country: 'Poland',
    email: 'a18@example.com',
    password: 'user8',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'daniel',
    role: 'customer',
    age: 20,
    country: 'Spain',
    email: 'a19@example.com',
    password: 'user9',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'carlos',
    role: 'customer',
    age: 20,
    country: 'Spain',
    email: 'a110@example.com',
    password: 'user10',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
},
{
    name: 'paolo',
    role: 'customer',
    age: 20,
    country: 'Italy',
    email: 'a111@example.com',
    password: 'user11',
    pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
}
];
localStorage.setItem('myArray', JSON.stringify(users));
let newU3 = localStorage.getItem('myArray');
users = JSON.parse(newU3);
let loginFuc = (u, p) => {
    u = u.toLowerCase();
    console.log(u, p);
    if (u == '' && p == '') {
        alert('You must to enter your name and password');
    }
    else {
        var x = 0;
        console.log(users.length);
        for (let i = 0; i < users.length; i++) {
            if (u == users[i].email && p == users[i].password) {
                x++;
                console.log('sucess', i, x);
                seeInfo.innerHTML = '<img class="img-responsive avatar" src="picture/Avatar.png" alt="pic">.';
                seeInfo.innerHTML += `<section><h2>You login successfully</h2><br> 
               User's name:  ${users[i].name} <br> Your role: ${users[i].role} <br>User's age: ${users[i].age} <br> 
               User's country:  ${users[i].country} <br> ${users[i].pic} <br> </section>`;
                break;
            }
            else if (u == users[i].name || p == users[i].password) {
                alert('user name or password is not correct'); break;
            }
        }
        if (x == 0) alert('user name or password is not correct');
    }
}
// console.log(localStorage.getItem('myArray'));
let newU = {};
function newUser(name, role, age, cont, em, pass) {
    console.log(name, role, age, cont, em, pass);
    newU = {
        name: name,
        role: role,
        age: age,
        country: cont,
        email: em,
        password: pass,
        pic: '<img src="picture/avatar1.jpg" alt="picture" id="pic">'
    }

    if (newU.name == '' || newU.age == '' || newU.country == '' || newU.email == '' || newU.password == '') { alert('Try again') }
    else {
        users.push(newU);
        console.log(users, users.length);
        //localStorage.clear();
        localStorage.setItem('myArray', JSON.stringify(users));
        let newU3 = localStorage.getItem('myArray');
        users = JSON.parse(newU3);
        //let newU2 = JSON.stringify(users);
        //localStorage.setItem('myArray', newU2);
       //users = JSON.parse(newU3);
        hiName.innerHTML = `<p id="loginPlace"> Hi ${name}<i class="fa fa-gratipay" aria-hidden="true"></i></p>`
        let users2 = JSON.stringify(users);
        console.log(users);
        localStorage.setItem('myArray', users2);
        window.location.href = '#loginPlace';
    }
}
