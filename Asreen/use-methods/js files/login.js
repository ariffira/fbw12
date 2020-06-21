// Create a log-in form like the picture using BootStrap 4
// - add bootstrap 4 link on html
// - create css and js and connect them
// - when user click on login() function will receive user data as name and passoword
// - create a userdata array which has many objects contain user name, age, country, password, country. picture etc.
// - use if else condition to check user name and password
// - if user name and password match show the details data with user picture
// - use for loop to check the array values
// Note: Add the assignment as ZIP file urname_exercise11.zip
let users = [{
    name: 'arif',
    role: 'teacher',
    age: '20',
    country: 'Bangladesh',
    password: 'user1',
    pic: '<img src="/images/bangladesh.gif" alt="picture">'
},
{
    name: 'asreen',
    role: 'student',
    age: '20',
    country: 'Iraq',
    password: 'user2',
    pic: '<img src="/images/flagge-irak.gif" alt="picture">'
},
{
    name: 'chuling',
    role: 'Student',
    age: '20',
    country: 'China',
    password: 'user3',
    pic: '<img src="/images/flagge-china.gif" alt="picture">'

},
{
    name: 'sujatha',
    role: 'Student',
    age: '20',
    country: 'India',
    password: 'user4',
    pic: '<img src="/images/flagge-indien.gif" alt="picture">'
},
{
    name: 'cagri',
    role: 'Student',
    age: '20',
    country: 'Turkey',
    password: 'user5',
    pic: '<img src="/images/turkey.png" alt="picture">'
},
{
    name: 'adel',
    role: 'Student',
    age: '20',
    country: 'Syria',
    password: 'user6',
    pic: '<img src="/images/syria.png" alt="picture">'
},
{
    name: 'khaled',
    role: 'Student',
    age: '20',
    country: 'Syria',
    password: 'user7',
    pic: '<img src="/images/syria.png" alt="picture">'
},
{
    name: 'peter',
    role: 'Student',
    age: '20',
    country: 'Poland',
    password: 'user8',
    pic: '<img src="/images/poland.png" alt="picture">'
},
{
    name: 'daniel',
    role: 'Student',
    age: '20',
    country: 'Spain',
    password: 'user9',
    pic: '<img src="/images/flagge-spanien.gif" alt="picture">'
},
{
    name: 'carlos',
    role: 'Student',
    age: '20',
    country: 'Spain',
    password: 'user10',
    pic: '<img src="/images/flagge-spanien.gif" alt="picture">'
},
{
    name: 'paolo',
    role: 'Student',
    age: '20',
    country: 'Italy',
    password: 'user11',
    pic: '<img src="/images/flagge-italien.gif" alt="picture">'
}
];

let loginFuc = (u, p) => {
    u = u.toLowerCase();
    console.log(u, p);
    if (u == '' && p == '') {
        alert('You must to enter your name and password');
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (u == users[i].name && p == users[i].password) {
                console.log('sucess', i);
                seeInfo.innerHTML = ' ';
                seeInfo.innerHTML += `<section><h2>You login successfully</h2><br> 
               User's name:  ${users[i].name} <br> Your role: ${users[i].role} <br>User's age: ${users[i].age} <br> 
               User's country:  ${users[i].country} <br> ${users[i].pic} <br> </section>`;
                break;
            }
            else if(u == users[i].name || p == users[i].password){alert('user name or password is not correct');break;}
            
        }
       

    }


}
